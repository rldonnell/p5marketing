/**
 * WordPress REST API client for headless blog integration.
 *
 * All fetches happen at build time (static export). The WP instance
 * must be reachable when `next build` runs.
 */

import imageManifest from './image-manifest.json';

const WP_API = 'https://wordpress-1594089-6265351.cloudwaysapps.com/wp-json/wp/v2';

/* ── Posts ───────────────────────────────────────────────────────── */

export async function getPosts({ perPage = 100, category } = {}) {
  const params = new URLSearchParams({
    per_page: String(perPage),
    _embed: 'true',            // sideloads featured image + author
    orderby: 'date',
    order: 'desc',
  });
  if (category) params.set('categories', String(category));

  const res = await fetch(`${WP_API}/posts?${params}`);
  if (!res.ok) throw new Error(`WP posts fetch failed: ${res.status}`);
  return res.json();
}

export async function getPostBySlug(slug) {
  const params = new URLSearchParams({
    slug,
    _embed: 'true',
  });
  const res = await fetch(`${WP_API}/posts?${params}`);
  if (!res.ok) throw new Error(`WP post fetch failed: ${res.status}`);
  const posts = await res.json();
  return posts[0] ?? null;
}

export async function getAllSlugs() {
  const posts = await getPosts({ perPage: 100 });
  return posts.map((p) => p.slug);
}

/* ── Categories ──────────────────────────────────────────────────── */

export async function getCategories() {
  const params = new URLSearchParams({
    per_page: '100',
    hide_empty: 'true',
  });
  const res = await fetch(`${WP_API}/categories?${params}`);
  if (!res.ok) throw new Error(`WP categories fetch failed: ${res.status}`);
  return res.json();
}

/* ── Helpers ──────────────────────────────────────────────────────── */

/** Pull the featured image URL — uses local copy if available. */
export function getFeaturedImage(post) {
  if (post?.slug && imageManifest[post.slug]) {
    return manifest[post.slug];
  }
  const media = post?._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url ?? null;
}

/** Rewrite inline WordPress image URLs to local copies. */
export function rewriteContentImages(html) {
  if (!html) return html;
  return html.replace(
    /src="(https?:\/\/[^"]*?\/wp-content\/uploads\/([^"]+))"/g,
    (match, fullUrl, uploadsPath) => {
      const localFilename = uploadsPath.replace(/\//g, '-');
      return `src="/blog-images/${localFilename}"`;
    }
  );
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
