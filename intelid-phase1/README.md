# IntelID — Phase 1 (Manual but credible)

The goal of this phase is to ship 1–3 trial clients end-to-end before automating anything.
You run the script Sunday evening, review the draft in your editor, then send the email from Gmail or via Resend.

## Folder layout

```
intelid-phase1/
├── README.md                       # This file
├── google-form-spec.md             # Field-by-field spec for setting up the intake form in Google Forms
├── client-config.template.yml      # Template config — copy per client, fill in from form responses
├── draft_brief.py                  # The main script: pull signals → Claude → write draft
├── send_brief.py                   # Optional: render markdown → HTML → send via Resend
├── requirements.txt                # Python deps
├── templates/
│   ├── email.html                  # Jinja2 HTML email template (light mode, brand-aligned)
│   └── prompt.md                   # The Claude system prompt for brief synthesis
└── clients/                        # One directory per client (created as you onboard)
    └── acme-co/                    # Example
        ├── intel-config.yml
        ├── signals/
        │   └── 2026-05-25.json
        ├── drafts/
        │   └── 2026-05-25.md       # AI draft for you to edit
        └── briefs/
            └── 2026-05-25.md       # Final (after your edits)
```

## One-time setup

```bash
cd intelid-phase1
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Then add these to your shell or a `.env` file (and `source .env` before running):

```bash
export ANTHROPIC_API_KEY=sk-ant-...
export AHREFS_API_TOKEN=...            # https://ahrefs.com/api/profile
export DATAFORSEO_LOGIN=...
export DATAFORSEO_PASSWORD=...
export RESEND_API_KEY=re_...           # Optional, only for send_brief.py
```

## Onboarding a new trial client (~10 minutes)

1. Send them the contact form link (already live at `/contact/?topic=intelid-sample`).
2. When the lead comes in, decide it's a fit.
3. Open the **internal Google Form** (set it up using `google-form-spec.md`) and fill it out on their behalf, using whatever you know + 5 minutes of research.
4. Take the form response and create a new client folder:
   ```bash
   mkdir -p clients/acme-co/{signals,drafts,briefs}
   cp client-config.template.yml clients/acme-co/intel-config.yml
   # Edit clients/acme-co/intel-config.yml with the form answers
   ```
5. Run a first sample brief to see the shape (next section).

## Running a brief

```bash
# Pulls signals, runs Claude, writes drafts/<today>.md
python draft_brief.py acme-co

# Review and edit the draft in your editor of choice:
$EDITOR clients/acme-co/drafts/2026-05-25.md

# When you're happy with it, save it as the final brief:
cp clients/acme-co/drafts/2026-05-25.md clients/acme-co/briefs/2026-05-25.md

# Optional — render and send via Resend
python send_brief.py acme-co 2026-05-25
```

The send script renders the markdown brief through `templates/email.html` using the client's branding from `intel-config.yml` (sender name, from-email, logo, footer).

## What the script does and doesn't do in Phase 1

**Does:**
- Pull Ahrefs Brand Radar signals (mentions, AI responses, share of voice)
- Pull DataForSEO SERP results for brand + competitor terms
- Pull DataForSEO LLM mentions for category keywords
- Pull Google News RSS for brand + competitors + category
- Call Claude Sonnet 4.6 with a structured JSON output schema
- Save everything to disk (signals, draft, brief) so the GitHub-per-client pattern is preserved when you graduate to Phase 2

**Does NOT:**
- Auto-create the GitHub repo (Phase 2)
- Auto-send the email at 9 AM Monday (Phase 2)
- Handle Stripe billing (Phase 3)
- Provision white-label subdomains (Phase 3)
- Send escalation SMS (Phase 2)

In Phase 1, you are the cron, the GitHub repo, and the send button. The point is to **validate the brief shape on real clients** before you build automation around it.

## Sanity checks before sending the first real brief

- [ ] The headline doesn't generalize — it names a specific thing that happened this week
- [ ] The 3–5 recommended actions are concrete enough to act on without further research
- [ ] Each section cites at least one source the recipient can click through to
- [ ] The "Public reputation" section flagged anything sentiment-y about the client by name
- [ ] No section just says "no significant activity this week" — if it does, you either need to dig deeper manually or rewrite that section to add real value
- [ ] Reading the brief out loud takes 4–6 minutes (not 10, not 90 seconds)

## Cost per brief (rough)

| Source | Cost |
|---|---|
| Ahrefs Brand Radar calls | ~$0.30 (depends on volume) |
| DataForSEO SERP + LLM mentions | ~$0.40 |
| Google News RSS | $0 |
| Claude Sonnet 4.6 (synthesis) | ~$0.10–0.20 |
| **Total per client per week** | **~$0.80–1.00** |

Margin on $300/mo is healthy.

## When to graduate to Phase 2

Move on when:
- You've run the script for 4+ weeks on at least one client
- The brief format hasn't changed for two consecutive weeks
- You've stopped editing more than 20% of any given draft
- A client has converted from trial to paid

That's the signal that automation will lock in quality rather than ossifying a bad format.
