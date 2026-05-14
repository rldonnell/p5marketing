#!/usr/bin/env python3
"""IntelID — Phase 1 brief sender.

Usage:
    python send_brief.py <client-slug> <YYYY-MM-DD>            # preview only
    python send_brief.py <client-slug> <YYYY-MM-DD> --send     # actually send via Resend

Reads clients/<slug>/briefs/<date>.md (the FINAL, edited brief), renders it
through templates/email.html, and either writes a preview to
clients/<slug>/previews/<date>.html or POSTs to Resend.

Preview-only is the default so you can eyeball the email before any client
sees it.
"""

import os
import re
import sys
from pathlib import Path
from datetime import date, datetime, timedelta

import yaml
import httpx
import markdown as md
from jinja2 import Environment, FileSystemLoader, select_autoescape


ROOT = Path(__file__).parent
CLIENTS_DIR = ROOT / "clients"
TEMPLATES_DIR = ROOT / "templates"

RESEND_API = "https://api.resend.com/emails"

# Map markdown section headers to template-friendly titles
SECTION_TITLES = {
    "competitor moves": "Competitor moves",
    "social activity": "Social activity",
    "public reputation": "Public reputation",
    "category conversation": "Category conversation",
}


def load_config(slug: str) -> dict:
    path = CLIENTS_DIR / slug / "intel-config.yml"
    if not path.exists():
        sys.exit(f"Config not found: {path}")
    with open(path) as f:
        return yaml.safe_load(f)


def load_brief_md(slug: str, when: str) -> str:
    path = CLIENTS_DIR / slug / "briefs" / f"{when}.md"
    if not path.exists():
        sys.exit(
            f"Final brief not found: {path}\n"
            f"You need to copy the reviewed draft into briefs/ first:\n"
            f"  cp clients/{slug}/drafts/{when}.md clients/{slug}/briefs/{when}.md"
        )
    return path.read_text()


def parse_brief(raw: str) -> dict:
    """Parse the IntelID brief markdown into a structured dict for the template.

    Expected shape (as produced by draft_brief.py):
      # IntelID — <Brand>
      _Week of ..._

      ## <headline>

      <summary paragraph(s)>

      ## Recommended actions

      1. **Title** — rationale
      ...

      ## Competitor moves
      ...
      ## Social activity
      ...
      ## Public reputation
      ...
      ## Category conversation
      ...
      ## Sources
      1. [Title](url) (date)
    """
    # Strip code fences if any
    lines = raw.splitlines()

    # Drop H1 + italic week line
    body_lines = []
    skipped_h1 = False
    skipped_week = False
    for ln in lines:
        if not skipped_h1 and ln.startswith("# "):
            skipped_h1 = True
            continue
        if skipped_h1 and not skipped_week and ln.strip().startswith("_") and ln.strip().endswith("_"):
            skipped_week = True
            continue
        body_lines.append(ln)
    body = "\n".join(body_lines).strip()

    # Find the first ## block — that's the headline
    parts = re.split(r"^## ", body, flags=re.MULTILINE)
    if len(parts) < 2:
        sys.exit("Could not parse brief: no ## headline found.")

    leading = parts[0].strip()  # Should be empty
    chunks = parts[1:]

    headline_chunk = chunks[0].strip()
    # Headline is everything up to the first blank line
    head_lines = headline_chunk.split("\n", 1)
    headline = head_lines[0].strip()
    summary_md = head_lines[1].strip() if len(head_lines) > 1 else ""
    # Summary is everything until the next blank line + another ## (already split out)
    summary = summary_md.strip()

    # The rest are titled sections
    actions = []
    sections = []
    sources = []

    for chunk in chunks[1:]:
        title_line, _, rest = chunk.partition("\n")
        title = title_line.strip()
        body_chunk = rest.strip()
        key = title.lower()

        if key.startswith("recommended actions"):
            actions = parse_actions(body_chunk)
        elif key.startswith("sources"):
            sources = parse_sources(body_chunk)
        elif key in SECTION_TITLES:
            sections.append({
                "title": SECTION_TITLES[key],
                "body_html": md.markdown(body_chunk, extensions=["extra"]),
            })

    return {
        "headline": headline,
        "summary": summary,
        "recommended_actions": actions,
        "sections": sections,
        "sources": sources,
    }


def parse_actions(text: str) -> list[dict]:
    """Parse '1. **Title** — rationale' lines into action dicts."""
    actions = []
    for ln in text.splitlines():
        m = re.match(r"^\d+\.\s+\*\*(.+?)\*\*\s*[—\-:]\s*(.+)$", ln.strip())
        if m:
            actions.append({"title": m.group(1).strip(), "rationale": m.group(2).strip()})
    return actions


def parse_sources(text: str) -> list[dict]:
    """Parse '1. [Title](url) (date)' lines into source dicts."""
    sources = []
    for ln in text.splitlines():
        m = re.match(r"^(\d+)\.\s+\[(.+?)\]\((.+?)\)(?:\s+\((.+?)\))?", ln.strip())
        if m:
            sources.append({
                "id": int(m.group(1)),
                "title": m.group(2).strip(),
                "url": m.group(3).strip(),
                "date": (m.group(4) or "").strip(),
            })
    return sources


def render_email(brief: dict, config: dict, when_iso: str, is_conversion_brief: bool) -> str:
    env = Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=select_autoescape(["html", "xml"]),
    )
    template = env.get_template("email.html")

    sender = config.get("sender") or {}
    trial = config.get("trial") or {}
    brand_color = sender.get("brand_color") or "#00b8a0"
    week_end = datetime.fromisoformat(when_iso).date()
    week_start = week_end - timedelta(days=7)

    return template.render(
        brand_name=config["client"]["brand_name"],
        sender_name=sender.get("from_name") or f"{config['client']['brand_name']} Intelligence",
        reply_to=sender.get("reply_to") or "rdonnell@p5marketing.com",
        logo_url=sender.get("logo_url") or "",
        brand_color=brand_color,
        week_range=f"{week_start.strftime('%b %d')} – {week_end.strftime('%b %d, %Y')}",
        headline=brief["headline"],
        summary=brief["summary"],
        recommended_actions=brief["recommended_actions"],
        sections=brief["sections"],
        sources=brief["sources"],
        footer_html=sender.get("footer_html") or (
            f"Prepared by P5 Marketing for {config['client']['brand_name']}. "
            "Reply to opt out, change scope, or escalate something time-sensitive."
        ),
        conversion_cta=is_conversion_brief,
        trial_brief_num=trial.get("convert_after_brief", 3),
        trial_brief_total=trial.get("briefs_remaining", 4) + (trial.get("convert_after_brief", 3) - 1),
        stripe_payment_link=os.environ.get("STRIPE_PAYMENT_LINK", "#"),
    )


def write_preview(slug: str, when: str, html: str) -> Path:
    preview_dir = CLIENTS_DIR / slug / "previews"
    preview_dir.mkdir(parents=True, exist_ok=True)
    out = preview_dir / f"{when}.html"
    out.write_text(html)
    return out


def send_via_resend(config: dict, html: str, when_iso: str) -> dict:
    api_key = os.environ.get("RESEND_API_KEY")
    if not api_key:
        sys.exit("Missing RESEND_API_KEY env var — can't send.")

    sender = config["sender"]
    recipients = config["recipients"]
    week_end = datetime.fromisoformat(when_iso).date()
    week_start = week_end - timedelta(days=7)
    subject_prefix = f"{config['client']['brand_name']} IntelID"

    payload = {
        "from": f"{sender['from_name']} <{sender['from_email']}>",
        "to": [r["email"] for r in recipients],
        "reply_to": sender.get("reply_to"),
        "subject": f"{subject_prefix} — Week of {week_start.strftime('%b %d')}",
        "html": html,
    }

    r = httpx.post(
        RESEND_API,
        json=payload,
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=30.0,
    )
    r.raise_for_status()
    return r.json()


def main() -> None:
    if len(sys.argv) < 3 or len(sys.argv) > 4:
        sys.exit("Usage: python send_brief.py <client-slug> <YYYY-MM-DD> [--send]")
    slug = sys.argv[1]
    when = sys.argv[2]
    do_send = (len(sys.argv) == 4 and sys.argv[3] == "--send")

    config = load_config(slug)
    raw = load_brief_md(slug, when)
    brief = parse_brief(raw)

    # Is this the conversion brief?
    trial = config.get("trial") or {}
    convert_at = trial.get("convert_after_brief", 3)
    # Cheap heuristic: count existing briefs in briefs/. If this one == convert_at, show CTA.
    briefs_dir = CLIENTS_DIR / slug / "briefs"
    brief_num = len(list(briefs_dir.glob("*.md")))
    is_conversion = (brief_num == convert_at)

    html = render_email(brief, config, when, is_conversion)

    if do_send:
        resp = send_via_resend(config, html, when)
        print(f"✓ Sent via Resend. Resend id: {resp.get('id')}")
    else:
        out = write_preview(slug, when, html)
        print(f"✓ Preview written → {out}")
        print(f"  Open it: open {out}")
        print(f"  When ready: python send_brief.py {slug} {when} --send")


if __name__ == "__main__":
    main()
