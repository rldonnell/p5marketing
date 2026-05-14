# IntelID Onboarding Form — Google Forms Spec

This is the internal-only form **you** fill out for each new trial client. It feeds the
`client-config.template.yml` structure, so questions are ordered to make hand-copying
straightforward.

## How to set it up

1. Go to https://forms.google.com → create blank form
2. Name it: **IntelID — Internal Onboarding (P5 use only)**
3. Description: "P5 staff only. One submission per new IntelID trial client. Output gets copied into `clients/<slug>/intel-config.yml`."
4. In settings → make it require sign-in restricted to your domain (so only P5 staff can submit)
5. Set responses to be saved to a Google Sheet for easy reference
6. Add each section below as a form section. Use the exact field names so the script's import path stays consistent later.

## Section 1 — Client basics

| Field | Type | Required | Notes |
|---|---|---|---|
| Client slug | Short answer | Yes | Validation: only lowercase letters, digits, hyphens. Example: `acme-co`. This becomes the folder name. |
| Brand name | Short answer | Yes | As it should appear in the brief. Example: `Acme Co`. |
| Primary domain | Short answer | Yes | Without `https://`. Example: `acme.com`. |
| Industry / vertical | Short answer | Yes | Free text. Example: "Plastic surgery — Scottsdale, AZ". |
| Recipient timezone | Dropdown | Yes | America/New_York, America/Chicago, America/Denver, America/Los_Angeles, America/Phoenix, Other |

## Section 2 — Recipients

| Field | Type | Required | Notes |
|---|---|---|---|
| Recipient 1 name | Short answer | Yes | |
| Recipient 1 email | Short answer | Yes | Validation: email format |
| Recipient 1 role | Short answer | Yes | Example: "Founder / CEO" |
| Recipient 2 name | Short answer | No | |
| Recipient 2 email | Short answer | No | Validation: email format |
| Recipient 2 role | Short answer | No | |

## Section 3 — White-label / sender

| Field | Type | Required | Notes |
|---|---|---|---|
| From-name | Short answer | Yes | Default: `{Brand name} Intelligence`. Example: "Acme Co Intelligence". |
| From-email subdomain | Short answer | Yes | Default: `intel@{slug}.p5intel.com`. For PR-agency white-label, override with their domain (Phase 3). |
| Logo URL | Short answer | No | URL to client logo (we host on `cdn.p5marketing.com`). Skip in Phase 1 if not ready — template falls back to a P5 wordmark. |
| Custom footer HTML | Paragraph | No | If blank, defaults to "Prepared by P5 Marketing for {Brand}. Reply to opt out." |

## Section 4 — Competitors (5)

For each of 5 competitors, the same five sub-fields:

| Field | Type | Required | Notes |
|---|---|---|---|
| Competitor N name | Short answer | Yes (for slot 1–3), No (4–5) | At least 3 competitors required. |
| Competitor N domain | Short answer | If name filled | Without `https://`. |
| Competitor N LinkedIn handle | Short answer | No | The slug from `linkedin.com/company/<slug>`. |
| Competitor N X handle | Short answer | No | Without the `@`. |
| Competitor N notes | Short answer | No | Free text, anything to flag. Example: "Most aggressive on paid". |

## Section 5 — Social channels (up to 5)

Use a **multiple-choice grid** or 5 separate sections. For each channel the client cares about:

| Field | Type | Required | Notes |
|---|---|---|---|
| Channel N platform | Dropdown | Yes (for at least 3) | linkedin, x, facebook, instagram, youtube, tiktok, reddit, threads |
| Channel N own handle | Short answer | Yes | Client's handle on this platform |
| Channel N competitor handles | Short answer | No | Comma-separated. Up to 5. |

## Section 6 — Category keywords (5–10)

| Field | Type | Required | Notes |
|---|---|---|---|
| Category keywords | Paragraph | Yes | One keyword/phrase per line. What the client's prospects are actually searching. Example: "rhinoplasty scottsdale\nbest mommy makeover\ndeep plane facelift recovery" |

## Section 7 — Watchpoints (free text)

| Field | Type | Required | Notes |
|---|---|---|---|
| Watchpoints | Paragraph | No | One per line. Things to always flag if seen. Example: "Any press mention of competitor BetterAcme\nSentiment shift around Dr. Smith personally\nNew entrants opening in Scottsdale, AZ" |

## Section 8 — Brief settings

| Field | Type | Required | Notes |
|---|---|---|---|
| Tone | Multiple choice | Yes | terse, standard (default), detailed |
| Include "Competitor moves" section | Checkbox | Default on | |
| Include "Social activity" section | Checkbox | Default on | |
| Include "Public reputation" section | Checkbox | Default on | |
| Include "Category conversation" section | Checkbox | Default on | |
| Include "Strategic recommendations" section | Checkbox | Default on | |
| Send day | Multiple choice | Yes | Monday (default), Tuesday, Wednesday, Thursday, Friday |
| Send time (local to recipient) | Short answer | Yes | Default `09:00`. 24h format. |

## Section 9 — Trial settings

| Field | Type | Required | Notes |
|---|---|---|---|
| Trial brief count | Multiple choice | Yes | 3, 4 (default), 5 |
| Convert-after brief # | Multiple choice | Yes | 2, 3 (default), 4 — the brief where the "want to keep going?" CTA appears |

## Section 10 — Internal

| Field | Type | Required | Notes |
|---|---|---|---|
| P5 owner | Multiple choice | Yes | List your P5 staff. Default: Robert Donnell. |
| Source of lead | Multiple choice | Yes | Inbound (contact form), Inbound (referral), Outbound, Existing P5 client |
| Internal notes | Paragraph | No | Anything you want to remember about this client. Lives in `intel-config.yml` under `internal_notes`. |

---

## What to do with form responses

1. Open the linked Google Sheet
2. Copy the most recent row
3. Open `client-config.template.yml`, save as `clients/<client-slug>/intel-config.yml`
4. Map each form field into the YAML — the template has comments matching every form question
5. Commit the client folder to your local intelid repo
6. Run `python draft_brief.py <client-slug>` to generate the first brief

Once you've onboarded 2–3 clients this way you'll know whether the form has the right questions. Update the spec, regenerate the form, move on.
