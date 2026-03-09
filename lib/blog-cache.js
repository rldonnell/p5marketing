/**
 * Static blog-data cache.
 *
 * Vercel's build servers cannot reach the Cloudways WordPress API
 * (bot / IP-block). This module is the fallback: wordpress.js reads it
 * whenever a live fetch fails.
 *
 * To refresh after publishing a new post, run locally:
 *   npm run cache-blog
 *
 * Then commit lib/blog-cache.js and push.
 */

/* ── cached posts (WP REST format with _embedded) ─────────────── */
export const CACHED_POSTS = [];

/* ── cached categories ─────────────────────────────────────────── */
export const CACHED_CATEGORIES = [];

/* ── known slugs (bare minimum so generateStaticParams never
 *    returns [] and crashes the static export) ─────────────────── */
export const KNOWN_SLUGS = [
  'your-website-should-be-built-by-something-that-already-knows-your-business',
];
