import { getPosts, getCategories } from '../../lib/wordpress';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog – P5 Marketing',
  description:
    'Insights on intent data marketing, visitor identification, lead generation strategy, and full-cycle campaign execution for high-trust businesses.',
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
      {/* ── Hero ── */}
      <section className="p5-hero" style={{ paddingBottom: '2rem' }}>
        <div className="p5-wrap" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="p5-kicker">The P5 Blog</span>
          <h1 className="p5-hero-h1">
            Marketing insights for businesses that{' '}
            <span className="p5-accent-text">close real deals</span>
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
