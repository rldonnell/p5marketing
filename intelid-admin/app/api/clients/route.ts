import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAuthed } from '@/lib/auth';

export const runtime = 'nodejs';

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export async function POST(req: Request) {
  if (!isAuthed()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad JSON' }, { status: 400 });
  }

  const slug = String(body.slug ?? '').trim();
  const brandName = String(body.brand_name ?? '').trim();
  const primaryDomain = String(body.primary_domain ?? '').trim();
  const industry = String(body.industry ?? '').trim();
  const timezone = String(body.timezone ?? 'America/New_York');
  const config = body.config ?? {};
  const internal = body.internal ?? {};

  if (!SLUG_RE.test(slug)) {
    return NextResponse.json({ error: 'Invalid slug. Lowercase letters, digits, hyphens only.' }, { status: 400 });
  }
  if (!brandName || !primaryDomain || !industry) {
    return NextResponse.json({ error: 'brand_name, primary_domain, industry are required' }, { status: 400 });
  }
  if (!Array.isArray(config.competitors) || config.competitors.length < 3) {
    return NextResponse.json({ error: 'At least 3 competitors required' }, { status: 400 });
  }
  if (!Array.isArray(config.social_channels) || config.social_channels.length < 3) {
    return NextResponse.json({ error: 'At least 3 social channels required' }, { status: 400 });
  }

  try {
    const rows = await sql`
      insert into clients (slug, brand_name, primary_domain, industry, timezone, config, internal)
      values (${slug}, ${brandName}, ${primaryDomain}, ${industry}, ${timezone},
              ${JSON.stringify(config)}::jsonb, ${JSON.stringify(internal)}::jsonb)
      returning id, slug
    `;
    return NextResponse.json({ ok: true, client: rows[0] });
  } catch (e: any) {
    const msg = e?.message ?? 'Database error';
    const status = /duplicate key/i.test(msg) ? 409 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
