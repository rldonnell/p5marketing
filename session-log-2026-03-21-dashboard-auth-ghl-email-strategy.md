# Session Log: Invisible Prospect — Dashboard Auth, GHL Email Strategy, Nurture Sequence
**Date:** 2026-03-21
**Duration:** ~90 minutes

## What We Worked On
Continued major build-out of the Invisible Prospect pixel intelligence platform for SA Spine. This session focused on three areas: (1) implementing cookie-based dashboard authentication with per-client passwords and an admin master password, (2) strategic discussion about using GoHighLevel vs cold email sender for visitor outreach, and (3) reviewing and refining a 3-email nurture sequence for HOT/High intent visitors. Also cleaned up debug code from the GHL push route and attempted to run the demo data generation script.

## Key Decisions

- **Dashboard auth approach:** Cookie-based authentication using HMAC-signed tokens (Node crypto, no external JWT deps). Per-client passwords via env vars (DASH_PW_SA_SPINE, DASH_PW_DEMO, etc.) plus a master admin password (DASH_PW_ADMIN) that accesses all dashboards. Sessions last 30 days via httpOnly cookie. Backward compatible — old ?key= param still works if DASH_SECRET is not set.
- **Full names on dashboard:** Once auth is active, authenticated users see full last names and email addresses in the visitor table instead of "First L." format.
- **GHL for email sending over cold email platform:** At 50-60 emails/day volume, GHL's shared IP pool is advantageous — dedicated IPs need 500+ daily volume to warm properly. GHL keeps contacts, sequences, tracking, and replies in one place.
- **GHL push scope:** ~706 contacts already pushed is enough proof of concept. Going forward, only NEW hot/high/medium visitors pushed daily via cron.
- **Internal HOT alerts:** Full enrichment data (name, email, interests, tier, confidence, visit count) is fine for internal alerts to clinic staff.
- **Patient-facing emails must stay generic:** Emails must NOT reference specific conditions the visitor was browsing — feels invasive and creates HIPAA gray area. Approved sequence offers a general spine guide download, personalized only by first name.

## Deliverables Created

### New files:
- `lib/auth.js` — HMAC-signed cookie token system (createSessionToken, verifySessionToken, validatePassword, isAuthorized)
- `app/api/dashboard/auth/route.js` — POST login (sets httpOnly cookie) and DELETE logout (clears cookie)
- `app/dashboard/[client]/LoginForm.js` — Clean login UI with lock icon, password field, error handling, auto-reload

### Modified files:
- `app/dashboard/[client]/page.js` — Cookie-based auth check replacing old ?key= system, passes isAuthenticated/authRole to client
- `app/dashboard/[client]/DashboardClient.js` — Full names + email when authenticated, admin badge, Sign Out button
- `app/api/cron/push-ghl/route.js` — Removed _keyDebug diagnostic output

## Important Details

### Approved Email Sequence (SA Spine — HOT/High Leads)

**Email 1 — Subject: "Dr. Cyr's free spine guide"**
Hi [First Name], Dr. Cyr asked me to share a free educational spine guide... Link: https://www.saspine.com/spine-book-download/?utm_source=GHL&utm_medium=email&utm_id=VisitorID-retargeting&utm_content=book-download — No form, straightforward download. Best, Dr. Steven Cyr

**Email 2 — Subject: "A free guide to back pain treatment and spine surgery"**
Follow-up with same guide link. Straightforward overview. Reply for questions.

**Email 3 — Subject: "Here if you have questions"**
Last touch. Same guide link. Offers to answer questions or determine if conversation makes sense.

**Recommended timing:** HOT: Day 1, Day 3, Day 7 | High: Day 1, Day 5, Day 12

### Env vars needed for auth deployment:
- `DASH_SECRET` — generate with: `openssl rand -hex 32`
- `DASH_PW_ADMIN` — Robert's master password
- `DASH_PW_SA_SPINE` — SA Spine client password
- `DASH_PW_DEMO` — Demo dashboard password

## Open Items / Next Steps

1. **Commit and push auth changes** — all modified/new files listed above
2. **Set Vercel env vars** — DASH_SECRET, DASH_PW_ADMIN, DASH_PW_SA_SPINE, DASH_PW_DEMO
3. **Run demo data script** — `DATABASE_URL="postgresql://neondb_owner:npg_awIx2Sn3BLjK@ep-wispy-bread-anmp4ahu-pooler.c-6.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require" node scripts/generate-demo-data.js`
4. **Build GHL automation workflows** — 3-email nurture triggered by Visitor ID + tier tags. Separate HOT (with internal alert) and High (sequence only).
5. **Internal HOT alert** — build in GHL or add to push-ghl cron. Full enrichment data for clinic staff.
6. **Client onboarding checklist** — formal setup flow for new clients (client key, service area, state, taxonomy, dashboard key)

## Context for Future Sessions

- **Codebase**: pixel-automation repo (Next.js 14 App Router on Vercel)
- **Database**: Neon Postgres — visitors table with Audience Lab enrichment
- **GHL**: PIT token pit-850bd648-..., Location ID jBRQvBlf1eAPev1Yvmf6, push-ghl cron at 7 AM UTC
- **Dashboard**: /dashboard/[client] — sa-spine (TX, production), demo (data not yet generated)
- **Privacy stance**: Internal = full detail. Patient-facing = generic resources only, no condition-specific references.
