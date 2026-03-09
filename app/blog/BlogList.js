'use client';

import { useState } from 'react';

/**
 * Client component that renders the blog grid with category filter pills.
 * All data is passed in as props (fetched at build time by the parent page).
 */
export default function BlogList({ posts, categories }) {
  const [active, setActive] = useState(null); // null = "All"

  const filtered = active
    ? posts.filter((p) => p.categories.includes(active))
    : posts;

  return (
    <>
      {/* ── Category filter pills ── */}
      {categories.length > 1 && (
        <div className="p5-blog-filters">
          <button
            className={`p5-blog-pill ${active === null ? 'p5-blog-pill--active' : ''}`}
            onClick={() => setActive(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`p5-blog-pill ${active === cat.id ? 'p5-blog-pill--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* ── Post grid ── */}
      {filtered.length === 0 ? (
        <p style={{ color: 'var(--p5-text-dim)', textAlign: 'center', padding: '3rem 0' }}>
          No posts found in this category.
        </p>
      ) : (
        <div className="p5-blog-grid">
          {filtered.map((post) => {
            const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const author = post._embedded?.author?.[0]?.name ?? 'P5 Marketing';
            const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
            const date = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <a key={post.id} href={`/blog/${post.slug}/`} className="p5-blog-card">
                {image && (
                  <div className="p5-blog-card-img">
                    <img src={image} alt={post.title.rendered} loading="lazy" />
                  </div>
                )}
                <div className="p5-blog-card-body">
                  <span className="p5-blog-card-meta">{date} · {author}</span>
                  <h3
                    className="p5-blog-card-title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className="p5-blog-card-excerpt">{excerpt}</p>
                  <span className="p5-blog-card-link">Read more →</span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
