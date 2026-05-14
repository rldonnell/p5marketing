-- IntelID admin — initial schema.
-- Run via `psql $DATABASE_URL -f db/schema.sql` or pipe through
-- the Neon SQL editor in the Vercel dashboard.

create extension if not exists "pgcrypto";

-- ─── Clients ───────────────────────────────────────────────────────────────
-- One row per onboarded client. The `config` JSONB column holds the full
-- intel-config shape (matches the YAML schema from Phase 1) so the Python
-- script can keep reading the same structure.
create table if not exists clients (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  brand_name    text not null,
  primary_domain text not null,
  industry      text not null,
  timezone      text not null default 'America/New_York',
  status        text not null default 'active'  -- active | paused | cancelled | converted
                check (status in ('active','paused','cancelled','converted')),
  trial_status  text not null default 'active'  -- active | converted | paused | cancelled
                check (trial_status in ('active','converted','paused','cancelled')),
  briefs_sent   int  not null default 0,
  config        jsonb not null,
  internal      jsonb not null default '{}'::jsonb,  -- p5_owner, lead_source, notes
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists clients_status_idx on clients(status);
create index if not exists clients_slug_idx on clients(slug);

-- ─── Briefs (empty in Phase 1, ready for Phase 2 cron) ─────────────────────
create table if not exists briefs (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid not null references clients(id) on delete cascade,
  week_of       date not null,
  status        text not null default 'draft'  -- draft | sent | paused | error
                check (status in ('draft','sent','paused','error')),
  headline      text,
  brief_md      text,
  brief_html    text,
  signals_json  jsonb,
  sent_at       timestamptz,
  created_at    timestamptz not null default now(),
  unique (client_id, week_of)
);

create index if not exists briefs_client_idx on briefs(client_id);
create index if not exists briefs_status_idx on briefs(status);

-- ─── Updated_at trigger ────────────────────────────────────────────────────
create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at := now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists clients_updated_at on clients;
create trigger clients_updated_at
  before update on clients
  for each row execute function set_updated_at();
