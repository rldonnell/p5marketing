/**
 * WordPress REST API client for headless blog integration.
 *
 * All fetches happen at build time (static export). If the WP instance
 * is unreachable (e.g. Cloudways bot-blocks Vercel IPs), every function
 * falls back to the static cache in lib/blog-cache.js.
 *
 * To update the cache:  npm run cache-blog   (run locally, then push)
 */

import {
  CACHED_POSTS,
  CACHED_CATEGORIES,
  KNOWN_SLUGS,
} from './blog-cache.js';

const WP_API = 'https://wordpress-1594089-6265351.cloudwaysapps.com/wp-json/wp/v2';

/* ── Posts ───────────────────────────────────────────────────────── */

export async function getPosts({ perPage = 100, category } = {}) {
  try {
    const params = new URLSearchParams({
      per_page: String(perPage),
      _embed: 'true',
      orderby: 'date',
      order: 'desc',
    });
    if (category) params.set('categories', String(category));

    const res = await fetch(`${WP_API}/posts?${params}`);
    if (!res.ok) throw new Error(`WP posts fetch failed: ${res.status}`);
    return res.json();
  } catch (err) {
    console.warn('[wordpress] Live fetch failed, using cache:', err.message);
    if (category) {
      return CACHED_POSTS.filter((p) => p.categories?.includes(category));
    }
    return CACHED_POSTS;
  }
}

export async function getPostBySlug(slug) {
  try {
    const params = new URLSearchParams({ slug, _embed: 'true' });
    const res = await fetch(`${WP_API}/posts?${params}`);
    if (!res.ok) throw new Error(`WP post fetch failed: ${res.status}`);
    const posts = await res.json();
    return posts[0] ?? null;
  } catch (err) {
    console.warn(`[wordpress] Live fetch for "${slug}" failed, using cache:`, err.message);
    return CACHED_POSTS.find((p) => p.slug === slug) ?? null;
  }
}

export async function getAllSlugs() {
  try {
    const posts = await getPosts({ perPage: 100 });
    const slugs = posts.map((p) => p.slug);
    if (slugs.length > 0) return slugs;
  } catch {
    /* fall through to KNOWN_SLUGS */
  }
  // If live fetch returned nothing or threw, return the cached slugs
  // so generateStaticParams always has at least one entry.
  return KNOWN_SLUGS;
}

/* ── Categories ──────────────────────────────────────────────────── */

export async function getCategories() {
  try {
    const params = new URLSearchParams({
      per_page: '100',
      hide_empty: 'true',
    });
    const res = await fetch(`${WP_API}/categories?${params}`);
    if (!res.ok) throw new Error(`WP categories fetch failed: ${res.status}`);
    return res.json();
  } catch (err) {
    console.warn('[wordpress] Categories fetch failed, using cache:', err.message);
    return CACHED_CATEGORIES;
  }
}

/* ── Helpers ──────────────────────────────────────────────────────── */

/** Pull the featured image URL from the _embedded data. */
export function getFeaturedImage(post) {
  const media = post?._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url ?? null;
}

/** Pull the author name from the _embedded data. */
export function getAuthorName(post) {
  return post?._embedded?.author?.[0]?.name ?? 'P5 Marketing';
}

/** Format a WP date string as "March 8, 2026". */
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Strip HTML tags for plain-text excerpts. */
export function stripHtml(html) {
  return html?.replace(/<[^>]*>/g, '').trim() ?? '';
}
