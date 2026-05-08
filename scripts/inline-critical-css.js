#!/usr/bin/env node
/**
 * Postbuild critical CSS inlining for the static export.
 *
 * Walks /out/**\/*.html, runs critters on each file to:
 *   1. Inline only the CSS rules that style above-the-fold elements
 *      directly in <head> as <style>...</style>
 *   2. Convert the original <link rel="stylesheet"> to a non-blocking
 *      preload that swaps in via onload (with a <noscript> fallback)
 *
 * Why this script exists:
 *   - Next.js 14's experimental.optimizeCss is a no-op when
 *     output: 'export' is set (verified empirically).
 *   - We want the perf benefit without giving up the static export.
 *
 * Run automatically as part of `npm run build`. See package.json's
 * build script.
 */

const fs = require('fs/promises');
const path = require('path');
const Critters = require('critters');

const OUT_DIR = path.join(__dirname, '..', 'out');

const critters = new Critters({
  path: OUT_DIR,
  publicPath: '/',
  // Inline ALL critical CSS; defer the rest as preload
  preload: 'swap',
  // Keep external stylesheets reachable for cached returning visitors
  pruneSource: false,
  // Don't compress — Vercel does that at the edge
  compress: false,
  // Don't keep noisy log output
  logLevel: 'silent',
  // Inline fonts referenced in critical CSS
  inlineFonts: false,
  // Don't try to be clever with media queries we don't need yet
  mergeStylesheets: true,
});

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      if (entry.isFile() && entry.name.endsWith('.html')) return [full];
      return [];
    })
  );
  return files.flat();
}

/**
 * Convert React 18's <link rel="stylesheet" ... data-precedence="next"> into
 * a non-blocking preload that swaps to a stylesheet on load, with a <noscript>
 * fallback for clients without JS.
 *
 * We do this manually because critters@0.0.23 has incomplete handling of
 * React's data-precedence attribute and leaves the rel as "stylesheet"
 * (render-blocking) even with preload: 'swap'.
 */
function deferExternalStylesheets(html) {
  const linkRegex = /<link\s+rel="stylesheet"\s+href="([^"]+)"\s+data-precedence="[^"]*"[^>]*>/g;
  return html.replace(linkRegex, (full, href) => {
    return (
      `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
      `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    );
  });
}

async function processFile(filePath) {
  const html = await fs.readFile(filePath, 'utf8');
  // Skip pages where critters has nothing to do
  if (!html.includes('rel="stylesheet"')) {
    return { filePath, skipped: true, reason: 'no stylesheet' };
  }
  let processed;
  try {
    processed = await critters.process(html);
  } catch (err) {
    return { filePath, skipped: true, reason: `critters error: ${err.message}` };
  }
  // Manually defer any remaining render-blocking stylesheet links
  processed = deferExternalStylesheets(processed);
  await fs.writeFile(filePath, processed, 'utf8');
  const before = html.length;
  const after = processed.length;
  return { filePath, skipped: false, before, after, delta: after - before };
}

async function main() {
  try {
    await fs.access(OUT_DIR);
  } catch {
    console.error(`[inline-critical-css] /out directory not found at ${OUT_DIR}. Skipping.`);
    process.exit(0);
  }

  const files = await walk(OUT_DIR);
  console.log(`[inline-critical-css] Processing ${files.length} HTML files...`);

  let processed = 0;
  let skipped = 0;
  for (const file of files) {
    const result = await processFile(file);
    if (result.skipped) {
      skipped++;
    } else {
      processed++;
      const rel = path.relative(OUT_DIR, file);
      console.log(`  ✓ ${rel}  (${result.before} → ${result.after} bytes)`);
    }
  }

  console.log(`[inline-critical-css] Done. ${processed} processed, ${skipped} skipped.`);
}

main().catch((err) => {
  console.error('[inline-critical-css] Fatal error:', err);
  process.exit(1);
});
