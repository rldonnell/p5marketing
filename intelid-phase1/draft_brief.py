#!/usr/bin/env python3
"""IntelID — Phase 1 brief drafter.

Usage:
    python draft_brief.py <client-slug>

Reads clients/<slug>/intel-config.yml, pulls signals from Ahrefs Brand Radar,
DataForSEO (SERP + LLM mentions), and Google News, calls Claude for
synthesis, then writes:
  - clients/<slug>/signals/<YYYY-MM-DD>.json     (raw input data, audit trail)
  - clients/<slug>/drafts/<YYYY-MM-DD>.md         (AI draft for you to edit)

After review, save the edited version as clients/<slug>/briefs/<date>.md.
"""

import os
import sys
import json
from pathlib import Path
from datetime import date, timedelta
from urllib.parse import quote_plus
from xml.etree import ElementTree as ET

import httpx
import yaml
import anthropic


# ─── Constants ─────────────────────────────────────────────────────────────
CLAUDE_MODEL = "claude-sonnet-4-6"
DFS_LOCATION_CODE = 2840  # United States in DataForSEO geo IDs

AHREFS_API = "https://api.ahrefs.com/v3"
DFS_API = "https://api.dataforseo.com/v3"
GNEWS_RSS = "https://news.google.com/rss/search"

ROOT = Path(__file__).parent
CLIENTS_DIR = ROOT / "clients"
TEMPLATES_DIR = ROOT / "templates"


# ─── Utilities ─────────────────────────────────────────────────────────────
def today_iso() -> str:
    return date.today().isoformat()


def week_ago_iso() -> str:
    return (date.today() - timedelta(days=7)).isoformat()


def require_env(name: str) -> str:
    val = os.environ.get(name)
    if not val:
        sys.exit(f"Missing env var: {name}")
    return val


def safe(fn, default=None, label=""):
    """Run fn(); on exception, print a warning and return default.
    Lets the pipeline survive a flaky source."""
    try:
        return fn()
    except Exception as e:
        print(f"  [warn] {label}: {type(e).__name__}: {e}", file=sys.stderr)
        return default


# ─── Config + history ──────────────────────────────────────────────────────
def load_config(slug: str) -> dict:
    path = CLIENTS_DIR / slug / "intel-config.yml"
    if not path.exists():
        sys.exit(f"Config not found: {path}\nDid you create clients/{slug}/ and copy the template?")
    with open(path) as f:
        return yaml.safe_load(f)


def load_previous_brief(slug: str) -> str | None:
    briefs = sorted((CLIENTS_DIR / slug / "briefs").glob("*.md"))
    if not briefs:
        return None
    return briefs[-1].read_text()


# ─── Signal sources ────────────────────────────────────────────────────────
def fetch_google_news(query: str, limit: int = 8) -> list[dict]:
    """Pull Google News RSS for a query. Free, no auth."""
    url = f"{GNEWS_RSS}?q={quote_plus(query)}&hl=en-US&gl=US&ceid=US:en"
    r = httpx.get(url, timeout=15.0)
    r.raise_for_status()
    root = ET.fromstring(r.text)
    items = []
    for item in root.findall(".//item")[:limit]:
        source_el = item.find("source")
        items.append({
            "title": (item.findtext("title") or "").strip(),
            "link": (item.findtext("link") or "").strip(),
            "pub_date": (item.findtext("pubDate") or "").strip(),
            "source": (source_el.text if source_el is not None else "").strip(),
        })
    return items


def fetch_dataforseo_serp(keyword: str) -> dict:
    """Top-10 organic SERP for a keyword (Google US, desktop)."""
    login = require_env("DATAFORSEO_LOGIN")
    password = require_env("DATAFORSEO_PASSWORD")
    body = [{
        "keyword": keyword,
        "location_code": DFS_LOCATION_CODE,
        "language_code": "en",
        "device": "desktop",
        "depth": 10,
    }]
    r = httpx.post(
        f"{DFS_API}/serp/google/organic/live/advanced",
        json=body, auth=(login, password), timeout=30.0,
    )
    r.raise_for_status()
    data = r.json()
    tasks = data.get("tasks") or []
    if not tasks or not tasks[0].get("result"):
        return {"keyword": keyword, "items": []}
    result = tasks[0]["result"][0]
    items = []
    for it in (result.get("items") or [])[:10]:
        if it.get("type") == "organic":
            items.append({
                "rank": it.get("rank_absolute"),
                "title": it.get("title"),
                "url": it.get("url"),
                "domain": it.get("domain"),
                "description": it.get("description"),
            })
    return {"keyword": keyword, "items": items}


def fetch_dataforseo_llm_mentions(keyword: str) -> dict:
    """Pull LLM-mentions data (ChatGPT/Perplexity/Claude visibility) for a keyword."""
    login = require_env("DATAFORSEO_LOGIN")
    password = require_env("DATAFORSEO_PASSWORD")
    body = [{
        "keyword": keyword,
        "location_code": DFS_LOCATION_CODE,
        "language_code": "en",
        "limit": 10,
    }]
    r = httpx.post(
        f"{DFS_API}/ai_optimization/llm_mentions/search/live",
        json=body, auth=(login, password), timeout=45.0,
    )
    r.raise_for_status()
    return {"keyword": keyword, "data": r.json()}


def fetch_ahrefs_brand_radar(domain: str) -> dict:
    """Pull Ahrefs Brand Radar mentions for a domain (last 7 days).

    NOTE: Verify the exact endpoint path against current Ahrefs API docs —
    the v3 Brand Radar paths have shifted in the past. If you get a 404,
    update the URL below. The safe() wrapper will keep the pipeline alive.
    """
    token = require_env("AHREFS_API_TOKEN")
    headers = {"Authorization": f"Bearer {token}", "Accept": "application/json"}
    r = httpx.get(
        f"{AHREFS_API}/brand-radar/mentions/overview",
        params={
            "target": domain,
            "date_from": week_ago_iso(),
            "date_to": today_iso(),
        },
        headers=headers,
        timeout=30.0,
    )
    r.raise_for_status()
    return r.json()


def collect_signals(config: dict) -> dict:
    """Run every source. Each is wrapped in safe() so a failure in one
    doesn't kill the brief — Claude can synthesize on whatever made it."""
    brand = config["client"]["brand_name"]
    domain = config["client"]["primary_domain"]
    competitors = config.get("competitors") or []
    keywords = config.get("category_keywords") or []

    print(f"Pulling signals for {brand}...")
    signals = {
        "pulled_at": date.today().isoformat(),
        "brand": brand,
        "primary_domain": domain,
        "google_news": {},
        "dataforseo_serp": [],
        "dataforseo_llm_mentions": [],
        "ahrefs_brand_radar": {},
    }

    # Google News — brand + each competitor
    print("  Google News...")
    signals["google_news"]["brand"] = safe(
        lambda: fetch_google_news(brand), default=[], label="gnews/brand"
    ) or []
    for c in competitors[:5]:
        cname = c.get("name")
        if not cname:
            continue
        key = f"competitor:{cname}"
        signals["google_news"][key] = safe(
            lambda c=cname: fetch_google_news(c), default=[], label=f"gnews/{cname}"
        ) or []

    # DataForSEO SERP — top categorical keywords (cap at 3 to keep cost down)
    print("  DataForSEO SERP...")
    for kw in keywords[:3]:
        item = safe(lambda kw=kw: fetch_dataforseo_serp(kw), default=None, label=f"dfs-serp/{kw}")
        if item:
            signals["dataforseo_serp"].append(item)

    # DataForSEO LLM mentions — top categorical keyword (1 call to keep cost down)
    if keywords:
        print("  DataForSEO LLM mentions...")
        item = safe(
            lambda: fetch_dataforseo_llm_mentions(keywords[0]),
            default=None, label=f"dfs-llm/{keywords[0]}"
        )
        if item:
            signals["dataforseo_llm_mentions"].append(item)

    # Ahrefs Brand Radar — primary domain
    print("  Ahrefs Brand Radar...")
    signals["ahrefs_brand_radar"]["brand"] = safe(
        lambda: fetch_ahrefs_brand_radar(domain),
        default={}, label="ahrefs-br/brand"
    ) or {}

    print("Signals collected.\n")
    return signals


# ─── Claude synthesis ──────────────────────────────────────────────────────
INTELID_TOOL = {
    "name": "draft_intelid_brief",
    "description": "Emit the structured weekly IntelID brief.",
    "input_schema": {
        "type": "object",
        "required": ["headline", "summary", "recommended_actions", "sections", "sources"],
        "properties": {
            "headline": {
                "type": "string",
                "description": "ONE SENTENCE — the most important thing that moved this week.",
            },
            "summary": {
                "type": "string",
                "description": "3–5 sentences. Orients the reader.",
            },
            "recommended_actions": {
                "type": "array", "minItems": 3, "maxItems": 5,
                "items": {
                    "type": "object",
                    "required": ["title", "rationale"],
                    "properties": {
                        "title": {"type": "string", "description": "Imperative. 6–12 words."},
                        "rationale": {"type": "string", "description": "1–2 sentences. Why this, why now."},
                    },
                },
            },
            "sections": {
                "type": "object",
                "properties": {
                    "competitor_moves": {"type": "string", "description": "Markdown. Cite sources as [n]."},
                    "social_activity": {"type": "string"},
                    "public_reputation": {"type": "string"},
                    "category_conversation": {"type": "string"},
                },
            },
            "sources": {
                "type": "array",
                "items": {
                    "type": "object",
                    "required": ["id", "title", "url"],
                    "properties": {
                        "id": {"type": "integer"},
                        "title": {"type": "string"},
                        "url": {"type": "string"},
                        "date": {"type": "string", "description": "ISO date if known."},
                    },
                },
            },
        },
    },
}


def call_claude(config: dict, signals: dict, previous_brief: str | None) -> dict:
    system_prompt = (TEMPLATES_DIR / "prompt.md").read_text()

    # Trim previous brief to keep token budget sane
    prev_excerpt = (previous_brief or "")[:6000]

    user_blocks = [
        "<client_config>",
        yaml.safe_dump(config, sort_keys=False),
        "</client_config>",
        "",
        "<this_week_signals>",
        json.dumps(signals, indent=2)[:120000],
        "</this_week_signals>",
        "",
    ]
    if prev_excerpt:
        user_blocks.extend([
            "<previous_brief>",
            prev_excerpt,
            "</previous_brief>",
            "",
        ])
    user_blocks.append(
        "Draft this week's IntelID brief. Use the draft_intelid_brief tool. "
        "Respect the voice rules. Be specific. Cite sources."
    )

    client = anthropic.Anthropic()
    print(f"Calling Claude ({CLAUDE_MODEL})...")
    resp = client.messages.create(
        model=CLAUDE_MODEL,
        max_tokens=8000,
        system=system_prompt,
        tools=[INTELID_TOOL],
        tool_choice={"type": "tool", "name": "draft_intelid_brief"},
        messages=[{"role": "user", "content": "\n".join(user_blocks)}],
    )

    for block in resp.content:
        if getattr(block, "type", None) == "tool_use" and block.name == "draft_intelid_brief":
            return block.input

    raise RuntimeError("Claude did not return a tool_use block. Inspect the response.")


# ─── Rendering ─────────────────────────────────────────────────────────────
SECTION_TITLES = {
    "competitor_moves": "Competitor moves",
    "social_activity": "Social activity",
    "public_reputation": "Public reputation",
    "category_conversation": "Category conversation",
}


def render_markdown(brief: dict, config: dict) -> str:
    brand = config["client"]["brand_name"]
    when = date.today().strftime("%B %d, %Y")
    week_start = (date.today() - timedelta(days=7)).strftime("%b %d")
    week_end = date.today().strftime("%b %d, %Y")

    lines = [
        f"# IntelID — {brand}",
        f"_Week of {week_start} – {week_end}_",
        "",
        f"## {brief['headline']}",
        "",
        brief["summary"],
        "",
        "## Recommended actions",
        "",
    ]
    for i, a in enumerate(brief.get("recommended_actions", []), 1):
        lines.append(f"{i}. **{a['title']}** — {a['rationale']}")
    lines.append("")

    section_settings = config.get("brief_settings", {}).get("sections", {})
    for key, title in SECTION_TITLES.items():
        if section_settings.get(key, True) is False:
            continue
        body = (brief.get("sections") or {}).get(key)
        if not body:
            continue
        lines += ["", f"## {title}", "", body]

    sources = brief.get("sources") or []
    if sources:
        lines += ["", "## Sources", ""]
        for s in sources:
            d = f" ({s['date']})" if s.get("date") else ""
            lines.append(f"{s['id']}. [{s['title']}]({s['url']}){d}")

    lines += [
        "",
        "---",
        "",
        f"_Prepared {when} by P5 Marketing for {brand}. "
        "Reply to opt out, change scope, or escalate something time-sensitive._",
        "",
    ]
    return "\n".join(lines)


# ─── Persistence ───────────────────────────────────────────────────────────
def write_outputs(slug: str, signals: dict, draft_md: str) -> tuple[Path, Path]:
    base = CLIENTS_DIR / slug
    (base / "signals").mkdir(parents=True, exist_ok=True)
    (base / "drafts").mkdir(parents=True, exist_ok=True)
    (base / "briefs").mkdir(parents=True, exist_ok=True)

    today = today_iso()
    signals_path = base / "signals" / f"{today}.json"
    draft_path = base / "drafts" / f"{today}.md"

    signals_path.write_text(json.dumps(signals, indent=2))
    draft_path.write_text(draft_md)
    return signals_path, draft_path


# ─── Main ──────────────────────────────────────────────────────────────────
def main() -> None:
    if len(sys.argv) != 2:
        sys.exit("Usage: python draft_brief.py <client-slug>")
    slug = sys.argv[1]

    config = load_config(slug)
    previous = load_previous_brief(slug)
    signals = collect_signals(config)
    brief = call_claude(config, signals, previous)
    draft_md = render_markdown(brief, config)
    signals_path, draft_path = write_outputs(slug, signals, draft_md)

    print()
    print(f"✓ Signals  → {signals_path}")
    print(f"✓ Draft    → {draft_path}")
    print()
    print("Next steps:")
    print(f"  1. Review and edit: $EDITOR {draft_path}")
    print(f"  2. Save the final:  cp {draft_path} clients/{slug}/briefs/{today_iso()}.md")
    print(f"  3. Send the email:  python send_brief.py {slug} {today_iso()}")


if __name__ == "__main__":
    main()
