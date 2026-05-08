import {
  getAllSlugs,
  getPostBySlug,
  getFeaturedImage,
  getAuthorName,
  formatDate,
  stripHtml,
} from '../../../lib/wordpress';

/* ── HTML-entity decoder for schema fields (plain-text only) ─────── */
function decodeEntities(str) {
  if (!str) return str;
  return str
    .replace(/&#(\d+);/g, (_, c) => String.fromCharCode(parseInt(c, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, c) => String.fromCharCode(parseInt(c, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

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
    if (!post) return { title: 'Post Not Found' };

    const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
    return {
      alternates: {
        canonical: `/blog/${params.slug}/`,
      },
      title: post.title.rendered,
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
    return { title: 'Blog' };
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

  /* ── JSON-LD schema (BlogPosting + Breadcrumb) ─────────────── */
  const cleanTitle = decodeEntities(post.title.rendered);
  const cleanExcerpt = decodeEntities(stripHtml(post.excerpt.rendered)).slice(0, 160);
  const postUrl = `https://p5marketing.com/blog/${params.slug}/`;
  const fallbackImage = 'https://p5marketing.com/og-image.png';

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: cleanTitle,
    description: cleanExcerpt,
    image: image || fallbackImage,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://p5marketing.com/about/',
    },
    publisher: { '@id': 'https://p5marketing.com/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://p5marketing.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://p5marketing.com/blog/' },
      { '@type': 'ListItem', position: 3, name: cleanTitle, item: postUrl },
    ],
  };

  return (
    <main className="p5-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
