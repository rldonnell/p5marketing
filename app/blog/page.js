import { getPosts, getCategories } from '../../lib/wordpress';
import BlogList from './BlogList';

export const metadata = {
  alternates: {
    canonical: '/blog/',
  },
  title: 'P5 Marketing Blog | Strategy, SEO, GEO, and the ID Suite',
  description:
    'Field notes on running marketing for owner-operators of $1M–$5M service businesses: SEO, GEO, intent data, visitor identification, conversion, and what actually moves bookings.',
  openGraph: {
    title: 'P5 Marketing Blog | Strategy, SEO, GEO, and the ID Suite',
    description:
      'Field notes on running marketing for owner-operators: SEO, GEO, intent data, and what actually moves bookings.',
    url: 'https://p5marketing.com/blog/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing Blog' }],
  },
};

export default async function BlogPage() {
  let posts = [];
  let categories = [];

  try {
    [posts, categories] = await Promise.all([getPosts(), getCategories()]);
    // Filter out the default "Uncategorized" category (id 1)
    categories = categories.filter((c) => c.slug !== 'uncategorized');
  } catch (err) {
    console.error('Failed to fetch blog data:', err.message);
  }

  return (
    <main className="p5-main">
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://p5marketing.com/blog/"}]}'
        }}
      />
      {/* ── Hero ── */}
      <section className="p5-hero" style={{ paddingBottom: '2rem' }}>
        <div className="p5-wrap" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="p5-kicker">The P5 Blog</span>
          <h1 className="p5-hero-h1">
            Plastic Surgery Marketing{' '}
            <span className="p5-accent-text">Blog & Insights</span>
          </h1>
          <p className="p5-sub">
            Strategy, tactics, and lessons learned from running full-cycle intent
            data campaigns for high-trust, high-value businesses.
          </p>
        </div>
      </section>

      {/* ── Blog listing ── */}
      <section className="p5-wrap">
        {posts.length > 0 ? (
          <BlogList posts={posts} categories={categories} />
        ) : (
          <p style={{ color: 'var(--p5-text-dim)', textAlign: 'center', padding: '4rem 0' }}>
            Blog posts are on the way — check back soon.
          </p>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="p5-section" style={{ textAlign: 'center' }}>
        <div className="p5-wrap" style={{ maxWidth: '640px' }}>
          <h2>Ready to turn intent data into revenue?</h2>
          <p className="p5-sub">
            We build the systems that find, identify, and convert your
            highest-value prospects.
          </p>
          <div className="p5-cta-row" style={{ justifyContent: 'center' }}>
            <a href="/contact/" className="p5-btn p5-btn-primary">
              Book a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
