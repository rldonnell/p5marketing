# p5marketing

The public-facing P5 Marketing website (p5marketing.com). Next.js 14 on Vercel.

> **Looking for IntelID?** The weekly intelligence briefing infrastructure lives in a separate repo: [`rldonnell/p5-intelid`](https://github.com/rldonnell/p5-intelid). This repo only contains the public marketing page for IntelID at `/the-id-suite/intelid/`.

## What's here

```
app/                        Next.js App Router pages
  the-id-suite/             ID Suite product pages
  markets/                  Vertical landing pages
  blog/                     Blog listing + post pages
  Header.js / Footer.js     Site chrome
lib/                        Shared utilities
public/                     Static assets (icons, logos, og images)
doughbabys-optimized/       Per-client automation (cron + Vercel KV)
```

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production

Pushes to `main` auto-deploy to Vercel. Critical CSS inlining runs as a post-build step via `scripts/inline-critical-css.js`.

## Related repos

- [`rldonnell/p5-intelid`](https://github.com/rldonnell/p5-intelid) — IntelID weekly briefing system (admin app, drafter, design docs)
