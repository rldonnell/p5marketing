import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  // Don't crash module load in dev — we want pages to render and surface the
  // misconfiguration with a useful error in the UI rather than a stack trace.
  // eslint-disable-next-line no-console
  console.warn('[intelid-admin] DATABASE_URL is not set. Set it in .env.local.');
}

export const sql = neon(process.env.DATABASE_URL ?? '');

// Small typed helpers used across the app.

export type ClientRow = {
  id: string;
  slug: string;
  brand_name: string;
  primary_domain: string;
  industry: string;
  timezone: string;
  status: 'active' | 'paused' | 'cancelled' | 'converted';
  trial_status: 'active' | 'converted' | 'paused' | 'cancelled';
  briefs_sent: number;
  config: Record<string, unknown>;
  internal: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

export async function listClients(): Promise<ClientRow[]> {
  const rows = await sql`
    select id, slug, brand_name, primary_domain, industry, timezone,
           status, trial_status, briefs_sent, config, internal,
           created_at, updated_at
    from clients
    order by created_at desc
  `;
  return rows as ClientRow[];
}

export async function getClientBySlug(slug: string): Promise<ClientRow | null> {
  const rows = await sql`
    select id, slug, brand_name, primary_domain, industry, timezone,
           status, trial_status, briefs_sent, config, internal,
           created_at, updated_at
    from clients where slug = ${slug} limit 1
  `;
  return (rows[0] as ClientRow) ?? null;
}
