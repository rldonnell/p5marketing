# IntelID Backend — System Design

**Author:** Robert + Claude
**Status:** Proposal — open decisions flagged at the bottom
**Last updated:** 2026-05-14

---

## 1. Goal

Automate the IntelID weekly intelligence brief from intake through delivery, with a free-trial mechanic, while preserving P5's existing "GitHub-per-client" archive pattern. The system should support:

- **Internal-only onboarding** — Robert fills out the client form, not the client.
- **Per-client config + brief archive** in GitHub.
- **Required curator review** before any brief ships.
- **Card-on-conversion** trial: no payment friction at signup.
- **White-label from day one** — branding, sender domain, and signature configurable per client.
- **Reliable Monday 9 AM delivery** in the recipient's timezone.

---

## 2. System overview

```
  Lead form on intelid page (already live)
      ↓
  Gmail notification → Robert reviews lead
      ↓
  Robert fills out internal onboarding form (/admin/intelid/new)
      ↓
  GitHub API creates new private repo:  intelid-{client-slug}
  Templated config + workflows committed
      ↓
  ┌───────────────────────────────────────────────────────┐
  │  intelid-engine (single central P5 Vercel project)    │
  │                                                       │
  │  Sunday 18:00 PT cron:                                │
  │   1. For each active client, read config from their   │
  │      GitHub repo                                      │
  │   2. Pull signals from Ahrefs Brand Radar, DataForSEO,│
  │      Apify, Google News, YouTube                      │
  │   3. Write raw signals to Vercel KV (TTL 14 days)     │
  │   4. Call Claude API with signals + prior brief +     │
  │      client config → structured brief                 │
  │   5. Open PR on client repo with `drafts/{date}.md`   │
  │      (GitHub auto-pushes mobile + email notification)  │
  │                                                       │
  │  Monday 06:00–09:00 client TZ:                        │
  │   • If draft PR is merged → run send workflow         │
  │   • If draft PR is NOT merged → SMS escalation        │
  │                                                       │
  │  Send workflow:                                       │
  │   • Render markdown → MJML → HTML                     │
  │   • Resend API: send from {client.sender_domain}      │
  │   • Archive brief to /briefs/{date}.md (commit)       │
  │   • Update KV: last_sent, brief_count                 │
  │   • If trial brief #N reached → trigger billing flow  │
  └───────────────────────────────────────────────────────┘
```

---

## 3. Per-client GitHub repo structure

Each new client gets a private repo: `intelid-{client-slug}` under the P5 GitHub org.

```
intelid-acme-co/
├── README.md                 # Generated client snapshot for internal eyes
├── intel-config.yml          # Source of truth for the brief
├── intel-config.schema.json  # JSON Schema, validated on commit
├── briefs/
│   ├── 2026-05-11.md         # Final, sent
│   ├── 2026-05-18.md
│   └── README.md             # Auto-generated index
├── drafts/
│   └── 2026-05-25.md         # AI-drafted, awaiting curator review (opened as PR)
├── signals/
│   └── 2026-05-25.json       # Raw signal data for that week (audit + re-draft)
└── .github/
    └── workflows/
        ├── send-brief.yml    # On PR merge to main, render + send
        ├── validate-config.yml  # Validate intel-config.yml on push
        └── archive-brief.yml # On send success, archive + update KV
```

### `intel-config.yml` shape

```yaml
client:
  slug: acme-co
  name: Acme Co
  brand_name: "Acme Co"           # As it should appear in the brief
  primary_domain: acme.com
  timezone: America/New_York
  industry: "Plastic surgery"     # Free text, used for AI context

recipients:
  - name: Jane Smith
    email: jane@acme.com
    role: Founder / CEO
  - name: Mark Lee
    email: mark@acme.com
    role: Marketing Director

sender:
  # White-label config
  from_name: "Acme Co Intelligence"
  from_email: intel@acme-co.p5intel.com   # Subdomain we manage
  reply_to: rdonnell@p5marketing.com
  logo_url: https://cdn.p5marketing.com/clients/acme/logo.png
  footer_html: |
    Prepared by P5 Marketing for Acme Co.
    Reply to opt out, change scope, or escalate something time-sensitive.

competitors:
  - name: BetterAcme
    domain: betteracme.com
    linkedin: betteracme
    notes: "Most aggressive on paid"
  - name: AcmeAlt
    domain: acmealt.com
    linkedin: acmealt
  # ... up to 5

social_channels:
  # Up to 5
  - platform: linkedin
    own_handle: acme-co
    competitor_handles: [betteracme, acmealt]
  - platform: x
    own_handle: acmeco
    competitor_handles: [betteracme]
  - platform: youtube
    own_channel_id: UCxxx
    competitor_channel_ids: [UCyyy, UCzzz]
  - platform: reddit
    subreddits: [plasticsurgery, askdocs]
  - platform: instagram
    own_handle: acmeco
    competitor_handles: [betteracme]

category_keywords:
  # What their prospects search
  - "rhinoplasty scottsdale"
  - "plastic surgeon near me"
  - "best mommy makeover"
  - "deep plane facelift recovery"

watchpoints:
  # Free-text flags the curator should always look for
  - "Any mention of competitor BetterAcme by name in press"
  - "Sentiment shift around Dr. Smith personally"
  - "New entrants opening in Scottsdale, AZ"
  - "Regulatory: BBL safety news"

brief_settings:
  tone: standard                  # terse | standard | detailed
  sections:                       # Disable any sections client doesn't want
    competitor_moves: true
    social_activity: true
    public_reputation: true
    category_conversation: true
    strategic_recommendations: true
  send_day: monday
  send_time_local: "09:00"

trial:
  status: active                  # active | converted | paused | cancelled
  started: 2026-05-14
  briefs_remaining: 4
  card_on_file: false
  convert_after_brief: 3          # On brief #3, send "want to keep going?"

billing:
  plan: standard                  # $300/mo
  stripe_customer_id: null        # Set after card added
  next_invoice: null
```

---

## 4. Internal onboarding form

Lives at `/admin/intelid/new` on a P5-internal Next.js app (auth: GitHub OAuth, allowlisted to P5 staff). On submit, server route uses GitHub API to: create the repo, push templated files, write the config, and enqueue the first signal pull.

### Form fields (all required unless noted)

**Client basics**
- Client slug *(auto-generated from name, editable)*
- Brand name *(as it appears in the brief)*
- Primary domain
- Industry / vertical *(free text — fed to AI for context)*
- Timezone

**Recipients**
- Recipient 1: name, email, role
- Recipient 2 *(optional)*: name, email, role

**White-label / sender**
- From-name *(default: "{Brand} Intelligence")*
- From-email subdomain *(default: `intel@{slug}.p5intel.com`; auto-provisions DNS in phase 2)*
- Logo upload *(optional)*
- Custom footer HTML *(optional)*

**Competitors (5)**
- For each: name, domain, LinkedIn handle, optional notes

**Social channels (pick up to 5 platforms)**
- For each chosen platform:
  - Client's own handle/channel
  - Competitor handles to follow on that platform

**Category keywords (5–10)**
- One per line — what the client's prospects are searching

**Watchpoints (free text)**
- Robert types specific things to flag every week
- Example: "Always surface anything about Dr. Smith personally"

**Brief settings**
- Tone: terse / standard / detailed
- Section toggles: 5 checkboxes, default all on
- Send day & local time: default Monday 09:00 client TZ

**Trial**
- Trial brief count: default 4
- Convert-after brief #: default 3 (third brief includes the "want to keep going?" CTA)

**Internal**
- Owner *(P5 staff member)*
- Internal notes

---

## 5. Data source matrix

Mapping client config → which sources we hit for each brief section.

| Brief section | Primary source | Secondary | Cost / week / client |
|---|---|---|---|
| Competitor moves | Apify (LinkedIn co. pages) + DataForSEO (SERP for competitor brand + service terms) | Google News RSS | ~$0.40 |
| Social activity | Apify (per platform actor) + Ahrefs Brand Radar | YouTube Data API | ~$0.60 |
| Public reputation | Ahrefs Brand Radar (mentions + citations) | Google News RSS + DataForSEO (review SERPs) | ~$0.20 |
| Category conversation | DataForSEO LLM Mentions + Ahrefs Brand Radar AI Responses | Reddit API | ~$0.30 |
| Strategic recommendations | Claude synthesis over all of the above (no extra data pull) | — | (folded into AI cost) |
| AI synthesis | Claude Sonnet, ~30K input tokens, ~3K output | — | ~$0.20 |

**Estimated cost per client per week:** ~$1.70 in third-party fees + AI.
**Estimated cost per client per month:** ~$7.50. Healthy margin on $300/mo.

---

## 6. AI synthesis

Single Claude API call per client per week. Sonnet 4.6 is more than capable; we don't need Opus.

**Prompt structure (high level):**
```
SYSTEM:
You are IntelID, an opinionated weekly intelligence analyst for {brand_name}.
You write briefs in {tone} tone. You prioritize signal over noise.
You always recommend 3-5 prioritized actions the client's team can act on
THIS WEEK. You cite sources inline as [n] and list them at the bottom.

USER:
<client_config>{config minus PII}</client_config>
<previous_brief>{last week's final brief}</previous_brief>
<signals>{JSON of this week's raw signal data}</signals>

Output structure:
- headline (1 sentence, what most matters)
- summary (3-5 sentences)
- recommended_actions (array of 3-5)
- competitor_moves (markdown, with citations)
- social_activity (markdown)
- public_reputation (markdown)
- category_conversation (markdown)
- sources (numbered list)

Return strict JSON matching the schema in <output_schema>.
```

The structured JSON output gets rendered to markdown via a template, so the curator edits markdown (familiar) but the underlying structure is enforced.

**Re-draft loop:** If curator says draft is weak, they comment `/redraft <reason>` on the PR. A GitHub Action re-calls Claude with the original signals + the reason and posts a new draft.

---

## 7. Curator workflow (you, or a P5 team member)

1. Sunday evening: GitHub opens the draft PR. You get a push notification from the GitHub mobile app and an email — same way you handle code reviews already.
2. Open the PR on the client repo. GitHub's rendered markdown preview is the curator UI.
3. Edit prose directly in GitHub's web editor or pull locally if you want richer tools.
4. Approve + merge the PR.
5. The merge triggers `send-brief.yml` which:
   - Renders the brief to HTML (MJML template + brand vars from `intel-config.yml`)
   - POSTs to Resend
   - Archives the brief to `/briefs/{date}.md`
   - Updates KV: last_sent timestamp, brief_count++
   - If `brief_count == trial.convert_after_brief` → triggers the conversion email

**Escalation:** if a PR is still unmerged by Monday 07:00 client-time, the engine sends Robert an SMS via Twilio: "Acme Co brief still in draft — 2 hours to send." If still unmerged by 08:30, the engine auto-sends a fallback "we're calibrating this week — next brief lands Monday" note to the client and SMS-pages Robert at the same time.

## 7a. Notification stack

No Slack. Three channels, each tuned to the urgency of the signal:

| Event | Channel | Why |
|---|---|---|
| Draft PR opened (Sunday evening) | GitHub mobile push + email | You already get GitHub notifications. PR opening IS the signal. |
| New IntelID lead from `/contact` form | Email (Gmail label) | Routine; lands in inbox you already scan. |
| Stripe events: card added, payment succeeded | Stripe-native email + email digest | Stripe handles it; no custom plumbing. |
| Stripe events: payment failed | Email + SMS | Money-critical, can't be missed. |
| Monday 07:00 — PR not yet merged | SMS via Twilio | Loud, time-bound. Wakes you up if needed. |
| Monday 08:30 — auto-paused brief | SMS via Twilio + email to Robert | Indicates the system shipped the fallback to the client. You need to know. |
| Send failure (Resend 4xx/5xx) | SMS + email | Customer-facing failure. |

**Twilio cost:** $0.0079 per SMS in the US. Even worst-case (5 escalations a week across 20 clients) = under $5/month. Trivial.

**Setup:** one Twilio account, one toll-free number provisioned for outbound SMS, your cell on file. Phase-2 work.

---

## 8. Delivery — white-label setup

Each client gets a subdomain on `p5intel.com` (or a domain we own per-PR-agency if they want full white-label):

- DNS automated via Cloudflare API on client creation
- SPF, DKIM, DMARC records configured for Resend
- From-address: `intel@{slug}.p5intel.com` (or a PR-agency's domain when applicable)
- Reply-to defaults to Robert's email; per-client override supported

HTML email template (single MJML file) reads:
- Logo URL from config
- From-name, footer HTML from config
- Brand color from config (optional, with sensible default)

This gives PR agencies enough to call it their own work without us building a full custom-domain provisioning flow up front.

---

## 9. Free trial flow (card on conversion)

| Brief # | What happens |
|---|---|
| 0 | Sample brief sent on signup (manually triggered the first time, automated after MVP) |
| 1 | First real Monday brief |
| 2 | Standard Monday brief |
| 3 | **Conversion ask** — brief includes a footer block: "This is brief #3 of 4 free. Add a card now to lock in $300/month and never miss a Monday." With Stripe Payment Link. |
| 4 | Final trial brief. Footer: "Last free one. Add a card by Friday or briefs pause." |
| 5+ | Only sent if Stripe webhook says `card_on_file: true`. Otherwise paused. |

Pausing = repo stays, briefs stop. Reactivation = card added → trial → paid in one Stripe webhook handler.

Conversion metrics tracked in KV per client: `trial_brief_count`, `conversion_email_clicked`, `card_added_at`. Surface in an internal dashboard later.

---

## 10. Billing pipeline

- Stripe Customer created on card-add (not on signup)
- Stripe Subscription with `$300/month`, billing_cycle_anchor = day-of-week-aligned to client's send day
- Webhook handler updates `client.billing.stripe_customer_id` and `client.trial.status: converted` in the GitHub repo (commit-as-bot)
- Failed payment → 3-day grace period → pause briefs → email to recipient + Robert

---

## 11. Build phases

### Phase 1 — "Manual but credible" (week 1)
- Onboarding via a Google Form
- Single shared repo: `intelid-clients` with subdirs per client
- AI draft generated by you running a single script locally (or via Claude API in a one-shot)
- Curator review in GitHub
- Send via Gmail or direct Resend POST in a script
- No automated cron yet
- **Goal:** ship 1–3 trial clients, validate brief format and curator workflow

### Phase 2 — "Automated for trial scale" (weeks 2–3)
- Per-client GitHub repos created via API
- `intelid-engine` Vercel project deployed
- Sunday cron pulls signals, drafts, opens PRs
- Resend integration with default `intel@p5intel.com` sender
- KV tracks brief_count, trial state
- Twilio SMS escalation + GitHub native notifications
- **Goal:** up to 10 trial clients running themselves; Robert curates

### Phase 3 — "Conversion + billing" (weeks 4–5)
- Stripe integration (card on conversion)
- Conversion email triggers on brief #N
- Webhook handles trial → paid transitions
- Pause/resume logic
- Per-client subdomain provisioning via Cloudflare API
- White-label config respected end-to-end
- **Goal:** convert first paying clients without manual intervention

### Phase 4 — "Polish + scale" (weeks 6+)
- Internal dashboard (active clients, conversion funnel, brief health)
- Self-service signup option (lower-friction trial — public form, but Robert still approves before first brief runs)
- Per-PR-agency multi-client dashboards (so PR agencies can manage their own client roster)
- Re-draft loop fully automated via PR comments
- A/B test conversion footer copy

---

## 12. Open decisions

| Decision | Default | Notes |
|---|---|---|
| Curator step | Required | Locked in. |
| Trial billing | Card on conversion | Locked in. |
| White-label | Day one | Locked in. Subdomain on `p5intel.com` by default; per-PR-agency custom domain in Phase 3. |
| Send infra | Resend | Matches existing P5 stack. |
| Storage | Vercel KV + GitHub | KV for runtime state, GitHub for archive + audit. |
| Trial length | 4 briefs | Confirm. Could be 3 or 5. Tradeoff: more briefs = more conversion confidence but higher cost. |
| Conversion ask brief # | 3 (one before last) | Confirm. |
| Re-draft mechanism | `/redraft` PR comment | Phase 3, not needed for MVP. |
| Failure mode if curator misses Monday | Auto-pause + apology email | Need to confirm tone of fallback message. |
| Public self-service signup | Phase 4 | Phase 1–3 stays "Robert fills out the form." |

---

## 13. What I need from you to start Phase 1

1. Approve the brief shape (headline → summary → 5 sections → 3-5 actions → sources)
2. Pick the first 1–3 trial clients
3. Decide: do you want a private GitHub org for IntelID clients separate from the main `rldonnell` namespace? (I'd recommend `p5-intelid` as the org for cleanliness.)
4. Decide on the trial-length default (4 briefs feels right; confirm)
5. Approve subdomain pattern `intel@{slug}.p5intel.com` — or pick a different root domain

Once those are settled, Phase 1 is mostly a Google Form, a Python or Node script that you run on a Sunday evening, and a Resend send. The "automated" parts come in Phase 2 once the brief shape is proven.

---

## 14. What this gets you

- A productized weekly intel offering you can sell at $300/mo with healthy margin
- Per-client GitHub archive that doubles as audit trail + curator UI (your existing muscle memory)
- A trial mechanic that doesn't gate signup on a card
- White-label support so PR agencies can resell or rebrand under their work
- A funnel that gives the client 3 weeks of value before asking for money

The whole thing reuses 80% of your existing stack: Vercel, KV, Resend, Ahrefs, DataForSEO, Apify, GitHub. The new build is the orchestrator (`intelid-engine`), the internal onboarding form, and the Stripe-side billing automation.
