/**
 * Pre-build script: downloads all WordPress featured images
 * into public/blog-images/ so the static export serves them locally.
 *
 * Run before `next build`:
 *   node scripts/download-wp-images.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';

const WP_API =
  'https://wordpress-1594089-6265351.cloudwaysapps.com/wp-json/wp/v2';
const OUT_DIR = join(process.cwd(), 'public', 'blog-images');

/* Headers to bypass Cloudways bot protection */
const HEADERS = {
  'User-Agent': 'P5Marketing-BuildScript/1.0 (Next.js Static Export)',
  Accept: 'application/json, image/*, */*',
};

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  /* Fetch all published posts with embedded media */
  const res = await fetch(
    `${WP_API}/posts?per_page=100&_embed=true&orderby=date&order=desc`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  const posts = await res.json();

  const manifest = {}; // slug → local path

  for (const post of posts) {
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    const sourceUrl = media?.source_url;
    if (!sourceUrl) continue;

    const ext = extname(new URL(sourceUrl).pathname) || '.jpg';
    const filename = `${post.slug}${ext}`;
    const localPath = join(OUT_DIR, filename);

    /* Skip if already downloaded (speeds up repeat builds) */
    if (existsSync(localPath)) {
      console.log(`  ✓ ${filename} (cached)`);
      manifest[post.slug] = `/blog-images/${filename}`;
      continue;
    }

    try {
      console.log(`  ↓ Downloading ${filename} …`);
      const imgRes = await fetch(sourceUrl, { headers: HEADERS });
      if (!imgRes.ok) {
        console.warn(`  ✗ Failed to download ${sourceUrl}: ${imgRes.status}`);
        continue;
      }
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      writeFileSync(localPath, buffer);
      manifest[post.slug] = `/blog-images/${filename}`;
      console.log(`  ✓ ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.warn(`  ✗ Error downloading ${sourceUrl}:`, err.message);
    }
  }

  /* Also process inline images in post content */
  for (const post of posts) {
    const content = post.content?.rendered ?? '';
    const imgRegex = /src="(https?:\/\/[^"]*?\/wp-content\/uploads\/[^"]+)"/g;
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
      const imgUrl = match[1];
      const urlPath = new URL(imgUrl).pathname;
      // Create a flat filename from the uploads path
      const inlineFilename = urlPath
        .replace(/^\/wp-content\/uploads\//, '')
        .replace(/\//g, '-');
      const localInlinePath = join(OUT_DIR, inlineFilename);

      if (existsSync(localInlinePath)) continue;

      try {
        console.log(`  ↓ Inline image: ${inlineFilename} …`);
        const imgRes = await fetch(imgUrl, { headers: HEADERS });
        if (!imgRes.ok) continue;
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        writeFileSync(localInlinePath, buffer);
        console.log(`  ✓ ${inlineFilename} (${(buffer.length / 1024).toFixed(0)} KB)`);
      } catch {
        // Skip silently
      }
    }
  }

  /* Write manifest so Next.js can look up local paths by slug */
  const manifestPath = join(process.cwd(), 'lib', 'image-manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n✓ Manifest written: ${Object.keys(manifest).length} images`);
}

main().catch((err) => {
  console.warn('⚠ Image download skipped:', err.message);
  /* Don't fail the build — Next.js will fall back to WP URLs */
  const manifestPath = join(process.cwd(), 'lib', 'image-manifest.json');
  if (!existsSync(manifestPath)) {
    writeFileSync(manifestPath, '{}');
  }
});
