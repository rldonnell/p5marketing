# P5 Marketing — ICP-Aligned Website Rewrite

**Date:** May 4, 2026
**Scope:** Text-only rewrite of the agency website (p5marketing.com) to align with the new ICP and 90-day plan agreed in the strategic reflection session.
**No design changes.** All CSS, layout, components, image references, route paths, and JSX structure left intact. Only string content, JSX text nodes, metadata, and data arrays modified.

---

## Files in this delivery

These eight files map 1:1 to paths in your repo. Drop them in over the existing files.

| File | Path in repo |
| --- | --- |
| `app/page.js` | Homepage |
| `app/about/page.js` | About |
| `app/how-it-works/page.js` | How It Works |
| `app/markets/page.js` | Markets index (now "Who We Work With") |
| `app/markets/high-trust-high-value/page.js` | Repurposed as "Full Fit Profile" page |
| `app/contact/page.js` | Contact |
| `app/Header.js` | Site header / navigation |
| `app/Footer.js` | Site footer |

All files parse cleanly through esbuild. They keep the existing `'use client'` directives, imports, exports, prop signatures, and component structures.

---

## What changed

### Repositioning

The site now leads with **the agency** as the offer, with **the ID Suite** as the visibility differentiator inside that offer. Previously the site led with the tools as the product. Specifically:

- Homepage hero changed from "Marketing That Builds a Pipeline You Can See, Track, and Close" (tools-led) to "You Run Your Business. We Run Your Marketing." (agency-led, owner-operator framing).
- "High-trust, high-value businesses" framing is **gone everywhere it appeared**. Replaced with the actual ICP: owner-operators of $1M–$5M service businesses, $10K+ marketing budget, no senior in-house marketer, customer worth $10K+, replacing an unsatisfying agency, trusts experts.
- The four-stage cycle was rewritten from "Find / Drive / Identify / Convert" (tool sequence) to "Strategy / Execution / Visibility / Follow-Up" (engagement model).
- Three pillars rewritten from "IntentID / VisitorID / InboxID" (tool tour) to "Strategy You Don't Have to Manage / Execution by People Who've Done It / Visibility No Other Agency Has."
- Stat bar replaced "60% Visitors Identified" with "25 Yrs / $1M–$5M / $10K+ / ID Suite" (track record + fit profile).
- The "Why P5" comparison now contrasts P5 against "the last agency you hired" rather than against generic agencies.
- All "Book a Demo" / "Pipeline Audit" CTAs reframed to "Start a Fit Conversation" — honest fit assessment, not a sales pitch.
- About page hero changed from "The Plastic Surgery Marketing Team Behind P5" to "A Senior Team. Twenty-Five Years. One Job: Run Your Marketing."

### Voice

Sharper, more direct, comfortable saying who P5 is *not* for. Multiple disqualifiers stated openly on the homepage and FAQ, since per the strategy that self-selects the right buyer.

### FAQ rewrite

Old FAQ answered "what does the tool do?" type questions. New FAQ answers "am I a fit?" type questions:

- Who is P5 a fit for?
- Who is P5 *not* a fit for?
- What does P5 actually do for me?
- What is the ID Suite?
- How does this differ from the agency I'm already using?
- What does an engagement cost? (with the $2,500/mo + $10K total marketing budget transparency)
- What kind of visitor data does the ID Suite provide? (softened, see compliance below)
- Is the visitor intelligence compliant with privacy laws?
- How fast can we get started?
- Is this U.S. only?
- What's the time commitment from me?
- What is GEO and why does it matter?

Both the visible FAQ items and the JSON-LD FAQPage structured data were rewritten in tandem so search engines and humans see the same answers.

### Compliance language softened

The previous site stated in plain text on the homepage and FAQ that VisitorID returns *"name, email address, phone number, home address, and household income"* for site visitors. This phrasing has been changed throughout to "visitor intelligence sourced through a consented identity graph and tailored to your vertical's compliance requirements." The change reduces the public-website risk surface for the eventual privacy counsel review and is more accurate to how the product actually works.

A new FAQ item directly addresses CCPA/CPRA, the Texas Data Privacy Act, and Washington's My Health My Data Act.

This change does not affect what VisitorID delivers to clients under contract. It only changes how it's described on the public site.

### Markets section restructured

- Old: "Wedding Venues / Law Firms / Plastic Surgeons / Other High-Trust Businesses"
- New: "Wedding Venues / Legal Practices / Surgical Practices / If You're Not on This List"
- Each card now describes the *fit profile* (owner-operator, customer value, etc.) rather than a generic vertical promise.
- The fourth card explicitly invites people whose vertical isn't listed to read the full fit profile.

### High-trust-high-value page repurposed

This page kept its URL (so existing inbound links don't break) but its content is now the **Full Fit Profile** — the deep-dive on who P5 works with and who we don't. Six fit-criteria cards, six example verticals, a "what this looks like in practice" example, the ID Suite tie-in, and an honest "you're probably not a fit if..." section.

The breadcrumb structured data was updated to reflect the new page identity.

### Header and Footer

- "Markets" → "Who We Work With" (desktop nav and mobile)
- "High-Trust Businesses" → "Full Fit Profile" (dropdown items)
- "Plastic Surgeons" → "Surgical Practices" (dropdown items, footer)
- Footer tagline changed from "Data-driven marketing for high-growth verticals. We turn intent signals into booked revenue." to "A senior team running marketing for owner-operators who would rather hand it off than manage it."

URLs and link targets were **not** changed. No redirects required.

---

## What was *not* changed

- `app/markets/wedding-venues/page.js` — left intact. Vertical landing pages serve the warm-referral motion.
- `app/markets/plastic-surgeons/page.js` — left intact. Same reason.
- `app/the-id-suite/...` (all five tool pages) — left intact. They describe the tools accurately and now live behind the agency offer rather than in front of it.
- `app/blog/...` — not in scope.
- `app/visitorid/...` — separate (legacy?) route. Not touched.
- `app/contact/page.js` — only the hero, form heading, and message placeholder text were changed. All form fields, contact info cards (phone numbers, email, address), styling, and the JS form handler are unchanged.
- `app/about/page.js` — only the metadata, hero copy, Robert's bio, and bottom CTA were changed. The team grid (Irene, Camilo, Arlet, Adrianne, Stephie, Joely) is unchanged because the bios are already good.
- All styling, all CSS variables, all images, all icon references, all route structures.

---

## Things to flag for Robert before deploying

A few things came up during the rewrite that are worth a deliberate decision rather than my guess:

1. **The standalone `/visitorid/` top-level nav link in the Header.** The Header has a top-nav item labeled "VisitorID" pointing to `/visitorid/` (separate from the dropdown that links to `/the-id-suite/visitorid/`). Given our decision that VisitorID is *not* a lead product and is now an inside-the-agency differentiator, this top-level link is incongruous. I left it alone because removing a nav item is closer to a structural change than a text change, but you should consider removing it or relabeling it. It also appears in the mobile nav.

2. **The /visitorid/ route itself.** The repo has `app/visitorid/page.js` AND `app/the-id-suite/visitorid/page.js`. Two pages, presumably similar content. Not in scope for this rewrite, but worth knowing about for a future cleanup pass.

3. **Trademark symbols.** I kept `&trade;` on IntentID, VisitorID, InboxID, and SearchID consistently where they appeared, but the sourcing on whether these are actually registered trademarks vs. unregistered marks is your call. Lawyers care about this.

4. **The "Book a Conversation" CTA in the Header.** I left the Header CTA button text as "Book a Conversation" rather than changing it to "Start a Fit Conversation." That's the only place I deliberately kept old language, because "Book a Conversation" is fine and the site's CTAs are already inconsistent. If you want to standardize, change line 163 and line 193 of Header.js.

5. **Testimonials section.** I left the testimonials block on the homepage unchanged. The "$1M to $3.5M in a single year" testimonial from "Dr. A.M." is on-message for the new ICP (owner-operator, surgical practice, real growth result). The "T.B. Marketing Management" testimonial works as social proof. Nothing to change.

6. **SEO impact.** The metadata changes will cause Google to re-index over the next few days/weeks. Title tags and meta descriptions changed on the homepage, About, How It Works, Markets index, and the Full Fit Profile page. The URL structure did not change, so existing rankings should transfer. Track in GSC.

---

## Recommended deployment

1. Open a new branch (e.g., `icp-rewrite-may-2026`).
2. Drop the eight files into the matching paths.
3. Run locally (`npm run dev`) and click through every page. Pay particular attention to:
   - Homepage hero readability on mobile
   - The TOC anchor links still work (I changed labels, not anchor IDs)
   - Mobile nav still opens and closes correctly (only text was changed in Header.js)
   - Contact form still submits (I didn't touch the form handler)
4. Read the FAQ section out loud. If anything sounds off, adjust before merging.
5. Push to a Vercel preview deployment.
6. Get LeAnn or another trusted reader to look at it before you send anyone the link.
7. Merge to main.

Total deployment risk is low because nothing structural changed — but as with any site update, preview-test before going live.

---

## What this is meant to do

A practice manager LeAnn introduces to P5 will land on this site and see:

- An offer they can self-identify with in three seconds ("owner-operators of $1M–$5M service businesses")
- A clear answer to "what would I get?" (senior team, owned strategy, the ID Suite advantage)
- An honest disqualifier list that builds trust by saying who we're *not* for
- A CTA that reads as a conversation, not a sales pitch

That is the highest-leverage thing the website can do for the LeAnn motion. Make the call this week.
