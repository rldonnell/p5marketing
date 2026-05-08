/**
 * Dynamic sitemap — Next.js app/sitemap.js takes precedence over /public/sitemap.xml
 * and serves at https://p5marketing.com/sitemap.xml.
 *
 * Adding a new route? Add an entry below. lastModified is auto-set to build time;
 * override per-route if you want a manual date.
 */

const SITE = 'https://p5marketing.com';
const NOW = new Date();

const routes = [
  // Core pages
  { path: '/',                                       changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/about/',                                 changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact/',                               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/how-it-works/',                          changeFrequency: 'monthly', priority: 0.9 },

  // The ID Suite
  { path: '/the-id-suite/',                          changeFrequency: 'monthly', priority: 0.9 },
  { path: '/the-id-suite/seo-accelerator/',          changeFrequency: 'monthly', priority: 0.9 },
  { path: '/the-id-suite/intentid/',                 changeFrequency: 'monthly', priority: 0.9 },
  { path: '/the-id-suite/visitorid/',                changeFrequency: 'monthly', priority: 0.9 },
  { path: '/the-id-suite/inboxid/',                  changeFrequency: 'monthly', priority: 0.9 },

  // Markets
  { path: '/markets/',                               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/markets/plastic-surgeons/',              changeFrequency: 'monthly', priority: 0.7 },
  { path: '/markets/wedding-venues/',                changeFrequency: 'monthly', priority: 0.7 },
  { path: '/markets/high-trust-high-value/',         changeFrequency: 'monthly', priority: 0.7 },

  // Blog
  { path: '/blog/',                                                          changeFrequency: 'weekly',  priority: 0.8 },
  { path: '/blog/ai-website-development-a-tool-that-knows-you/',             changeFrequency: 'monthly', priority: 0.6 },
  { path: '/blog/the-importance-of-a-strong-content-strategy/',              changeFrequency: 'monthly', priority: 0.6 },

  // Legal
  { path: '/privacy-policy/',                        changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-conditions/',                  changeFrequency: 'yearly', priority: 0.3 },
  { path: '/do-not-sell/',                           changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap() {
  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${SITE}${path}`,
    lastModified: lastModified || NOW,
    changeFrequency,
    priority,
    // Image attached to homepage entry (preserves the image:image element from the static sitemap)
    ...(path === '/' && {
      images: [`${SITE}/og-image.png`],
    }),
  }));
}
