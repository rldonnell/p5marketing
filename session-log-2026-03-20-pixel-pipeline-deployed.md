# Session Log: Invisible Prospect Report + Pixel Intelligence Pipeline Deployed
**Date:** 2026-03-20
**Duration:** ~2 hours (continued from prior session)

## What We Worked On
Continued building the P5 Pixel Intelligence system. This session covered three major areas: (1) refining the Invisible Prospect Report dashboard (added email/phone columns, renamed from "Patient" to "Prospect", improved source chart colors), (2) building the full Vercel automation pipeline backed by Neon Postgres instead of Vercel KV, and (3) deploying the pipeline to production on Vercel with the GitHub repo `rldonnell/invisible-prospect`.

## Key Decisions
- Renamed "Invisible Patient Report" to "Invisible Prospect Report" globally — works across all client verticals (medical, SaaS, coaching), not just healthcare.
- Switched from Vercel KV to Neon Postgres — Robert reported KV reliability issues. Postgres gives proper SQL queries, UPSERT support, JSONB for flexible data, and real aggregation for reporting.
- Deployed as a single multi-client Vercel project — all clients share one codebase with client_key-based data isolation in Postgres.
- GHL push only sends Medium+ tier leads (skips Low to reduce noise in CRM).

## Deliverables Created
1. **SA_Spine_Invisible_Patient_Report_v2.html** — Updated dashboard with email + phone columns, renamed to Prospect Report, colorful source chart
2. **pixel-automation/** — Complete Next.js 14 Vercel project deployed to `rldonnell/invisible-prospect`
   - Webhook endpoint for pixel data ingestion
   - Daily cron: taxonomy classification + intent scoring
   - Daily cron: push scored leads to GoHighLevel
   - Reports API with SQL aggregations
   - Neon Postgres schema (visitors, processing_runs, ingestion_stats)
   - All 5 client taxonomies + intent scoring engine in JS
3. **pixel-intelligence-skill/** — Saved as permanent Cowork skill backup

## Open Items / Next Steps
1. Test the webhook with SA Spine pixel data
2. Get GHL per-sub-account API key and create custom fields
3. Use the SA Spine demo to pitch plastic surgeons
4. Connect VisitorID pixel platform to webhook for real-time automation
5. Hook dashboard to pull from /api/reports endpoint for live data
