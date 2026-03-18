import { createClient } from '@vercel/kv';

/**
 * Custom KV client that uses the STORAGE_KV_* env vars.
 *
 * The default `import { kv } from '@vercel/kv'` reads KV_REST_API_URL
 * and KV_REST_API_TOKEN, which point to the old maxed-out store.
 * The new store's credentials are in STORAGE_KV_REST_API_URL and
 * STORAGE_KV_REST_API_TOKEN. This client uses those instead.
 */
export function getKv() {
  return createClient({
    url: process.env.STORAGE_KV_REST_API_URL || process.env.KV_REST_API_URL,
    token: process.env.STORAGE_KV_REST_API_TOKEN || process.env.KV_REST_API_TOKEN,
  });
}
