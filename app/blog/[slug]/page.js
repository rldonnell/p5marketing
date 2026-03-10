import {
  getAllSlugs,
  getPostBySlug,
  getFeaturedImage,
  getAuthorName,
  formatDate,
} from '../../../lib/wordpress';

/* ── Static params (required for output: 'export') ───────────── */
export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    // Last-resort fallback so the static export never gets an empty array
    return [
      { slug: 'ai-website-development-a-tool-that-knows-you' },
    ];
  }
}

/* ── Metadata ─────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  try {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: 'Post Not Found – P5 Marketing' };

    const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
    return {
      title: `${post.title.rendered} – P5 Marketing`,
      description: excerpt.slice(0, 160),
      openGraph: {
        title: post.title.rendered,
        description: excerpt.slice(0, 160),
        type: 'article',
        publishedTime: post.date,
        images: getFeaturedImage(post) ? [getFeaturedImage(post)] : [],
      },
    };
  } catch {
    return { title: 'Blog – P5 Marketing' };
  }
}

/* ── Page ──────────────────────────────────────────────────────── */
export default async function BlogPost({ params }) {
  let post = null;

  try {
    post = await getPostBySlug(params.slug);
  } catch (err) {
    console.error('Failed to fetch post:', err.message);
  }

  if (!post) {
    return (
      <main className="p5-main">
        <div className="p5-wrap" style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
          <h1>Post not found</h1>
          <p className="p5-sub">
            This post may have been removed or the URL is incorrect.
          </p>
          <a href="/blog/" className="p5-btn p5-btn-ghost" style={{ marginTop: '1.5rem' }}>
            ← Back to Blog
          </a>
        </div>
      </main>
    );
  }

  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);

  return (
    <main className="p5-main">
      <div className="p5-blog-article-light">
        {/* ── Post header ── */}
        <section style={{ paddingBottom: '1rem', textAlign: 'center' }}>
          <a href="/blog/" className="p5-blog-back">← Back to Blog</a>
          <h1
            className="p5-hero-h1"
            style={{ fontSize: '2.2rem', marginTop: '.75rem' }}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="p5-blog-post-meta">{date} · {author}</p>
        </section>

        {/* ── Featured image ── */}
        {image && (
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 2rem' }}>
            <img
              src={image}
              alt={post.title.rendered}
              className="p5-blog-featured-img"
            />
          </div>
        )}

        {/* ── Post body (styled WordPress HTML) ── */}
        <article style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="p5-wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </div>

      {/* ── CTA ── */}
      <section className="p5-section" style={{ textAlign: 'center' }}>
        <div className="p5-wrap" style={{ maxWidth: '640px' }}>
          <h2>Want results like this for your business?</h2>
          <p className="p5-sub">
            Let&apos;s talk about what a full-cycle intent data campaign looks
            like for your market.
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
