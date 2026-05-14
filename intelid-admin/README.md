# intelid-admin

Internal admin app for IntelID. Phase 1 deliverable: a web form for onboarding new trial clients into Neon Postgres, with a "Suggest 5 competitors" button powered by Claude + web search.

## Stack

- **Next.js 14** (App Router) — UI + API routes
- **Neon Postgres** — clients table with JSONB config column
- **Anthropic SDK** + hosted web_search tool — competitor recommendations
- **Cookie-based auth** with a shared passphrase (Phase 2 graduates to GitHub OAuth)
- TypeScript, no Tailwind — vanilla CSS using shared CSS vars (matches the rest of P5)

## Local development

```bash
cd intelid-admin
npm install
cp .env.example .env.local
# Fill in DATABASE_URL, ANTHROPIC_API_KEY, ADMIN_PASSPHRASE, ADMIN_COOKIE_SECRET
psql "$DATABASE_URL" -f db/schema.sql
npm run dev
# → http://localhost:3000
```

You'll land on `/login`. Enter your `ADMIN_PASSPHRASE`. Session lasts 30 days.

## Vercel deployment (one-time setup, ~10 minutes)

1. **Create a new Vercel project** for this directory:
   ```bash
   cd intelid-admin
   npx vercel link
   # Choose: create new project named "intelid-admin"
   # Root directory: intelid-admin (or whatever Vercel suggests)
   ```

2. **Provision Neon Postgres** via Vercel:
   - Vercel dashboard → your project → Storage tab → Create database → Neon
   - Pick a region close to where you'll run the cron (us-east-1 is fine)
   - Vercel auto-populates `DATABASE_URL` as an env var

3. **Set the rest of the env vars in Vercel** (Settings → Environment Variables):
   - `ANTHROPIC_API_KEY` — your sk-ant-... key
   - `ADMIN_PASSPHRASE` — a real passphrase (rotate when you onboard teammates)
   - `ADMIN_COOKIE_SECRET` — generate with `openssl rand -hex 32`
   - `NEXT_PUBLIC_APP_URL` — `https://admin.p5intel.com` (or your eventual subdomain)

4. **Run the schema migration** against Neon. Either:
   - In the Vercel dashboard: Storage → your Neon DB → Query, paste the contents of `db/schema.sql`, run.
   - Or locally with `psql "$DATABASE_URL" -f db/schema.sql` (pull `DATABASE_URL` via `vercel env pull`).

5. **Deploy**:
   ```bash
   npx vercel --prod
   ```

6. **(Optional) Point the subdomain** `admin.p5intel.com` at the Vercel project once you've set up `p5intel.com` DNS.

## Wiring to the Python script

The Python brief drafter in `intelid-phase1/` currently reads `clients/<slug>/intel-config.yml`. To switch it to Neon, replace the `load_config` function with this:

```python
import os, psycopg2
from psycopg2.extras import RealDictCursor

def load_config(slug):
    with psycopg2.connect(os.environ["DATABASE_URL"]) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT config FROM clients WHERE slug = %s", (slug,))
            row = cur.fetchone()
            if not row:
                raise SystemExit(f"No client with slug={slug} in DB")
            return row["config"]
```

Then add `psycopg2-binary` to `intelid-phase1/requirements.txt`. The rest of the script is unchanged.

## What's here

```
intelid-admin/
├── README.md
├── package.json
├── tsconfig.json
├── next.config.js
├── .env.example
├── .gitignore
├── middleware.ts                       Auth gate — redirects to /login if no cookie
├── db/schema.sql                       Run once against Neon
├── lib/
│   ├── auth.ts                         Cookie session helpers (HMAC-signed)
│   └── db.ts                           Neon client + typed query helpers
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                        Dashboard — lists all clients
│   ├── login/page.tsx                  Passphrase login
│   ├── clients/
│   │   ├── new/
│   │   │   ├── page.tsx                Server wrapper
│   │   │   └── NewClientForm.tsx       The 10-section form (client component)
│   │   └── [slug]/page.tsx             Detail view + next-step instructions
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts          POST { passphrase } → sets cookie
│       │   └── logout/route.ts         POST → clears cookie
│       ├── clients/route.ts            POST creates a client
│       └── recommend-competitors/route.ts   POST { brand, domain, industry } → 5 suggestions
```

## What's intentionally not built yet

- Edit-client page (Phase 1: edit the JSONB directly via psql or build it next)
- Brief curator UI (Phase 2 — for now, you curate in your editor)
- Send button (Phase 2 — `send_brief.py` handles it)
- Stripe + trial-conversion flow (Phase 3)
- GitHub OAuth (Phase 2 graduation — current passphrase auth is good enough for one operator)
- White-label subdomain provisioning (Phase 3)

## Cost

- Vercel: free tier covers this admin app (single user, low traffic)
- Neon: free tier — 0.5 GB storage, plenty for hundreds of clients with their config JSONB
- Anthropic: ~$0.04 per "Suggest 5 competitors" click (Sonnet + 1–2 web searches)
- Total: ~$0/month at trial scale

## Phase 2 graduation checklist

When you have a couple of paying clients and want to automate the Sunday-night brief drafting:

- [ ] Add a Vercel Cron job that calls `/api/cron/draft-all` (new endpoint) at Sunday 18:00 PT
- [ ] That endpoint iterates `clients` where `status = 'active'`, calls the same draft logic the Python script does, but in Node
- [ ] Drafts get written to the `briefs` table with `status = 'draft'`
- [ ] You curate at `/clients/<slug>/briefs/<date>` (new page)
- [ ] Approve → triggers Resend send + flips status to `sent`
- [ ] Twilio SMS escalation if curator hasn't approved by Monday 07:00
