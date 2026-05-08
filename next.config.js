/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Static export: image optimization is disabled, but we still want everything else
  // that Next.js gives us for performance.
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  generateEtags: true,
  // Static export disables runtime image optimization, so make Next/Image accept
  // unoptimized images without throwing.
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Inline above-the-fold CSS in <head> via critters; defer the rest async.
    // Eliminates the 7.4 KB render-blocking CSS file from the critical path
    // and is the biggest single mobile-LCP lever for this site.
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: { exclude: ['error', 'warn'] },
  },
};

module.exports = nextConfig;
