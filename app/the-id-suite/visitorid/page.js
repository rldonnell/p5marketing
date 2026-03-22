import content from '../../../lib/content/visitorid';

export const metadata = {
  alternates: { canonical: '/the-id-suite/visitorid/' },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
  },
};

/* ── Reusable sub-components ─────────────────────────────── */

function StatBar({ stats }) {
  return (
    <section className="p5-stat-bar">
      <div className="p5-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {stats.map((s, i) => (
          <div key={i} className="p5-stat" style={{ textAlign: 'center' }}>
            <span className="p5-stat-num">{s.value}</span>
            <span className="p5-stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductScreenshots({ data }) {
  return (
    <section className="p5-wrap p5-product-showcase">
      <p className="p5-section-label">The Product</p>
      <h2 className="p5-section-title">{data.headline}</h2>
      <p className="p5-comparison-intro">{data.intro}</p>
      <div className="p5-screenshot-grid">
        {data.screens.map((screen, i) => (
          <div key={i} className="p5-screenshot-card p5-fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="p5-screenshot-frame">
              <img src={screen.src} alt={screen.alt} loading="lazy" />
            </div>
            <p className="p5-screenshot-caption">{screen.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection({ data }) {
  return (
    <section id={data.id} className="p5-wrap">
      <div className="p5-problem-box">
        <h2>{data.headline}</h2>
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="p5-problem-bottom">{data.bottomLine}</div>
      </div>
    </section>
  );
}

function HowItWorks({ data }) {
  return (
    <section id={data.id} className="p5-wrap">
      <p className="p5-section-label">Process</p>
      <h2 className="p5-section-title">{data.headline}</h2>
      <p className="p5-comparison-intro" style={{ marginTop: '-1.5rem', marginBottom: '2.5rem' }}>
        {data.intro}
      </p>
      <div className="p5-paradigm-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {data.steps.map((step, i) => (
          <div key={i} className="p5-p-card p5-fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
            <span className="p5-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BenefitsGrid({ data }) {
  return (
    <section className="p5-wrap">
      <p className="p5-section-label">Benefits</p>
      <h2 className="p5-section-title">{data.headline}</h2>
      <div className="p5-benefit-grid">
        {data.items.map((b, i) => (
          <div key={i} className="p5-benefit-card p5-fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="p5-benefit-icon">{'\u2713'}</span>
            <h3>{b.title}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComparisonTable({ data }) {
  return (
    <section className="p5-wrap">
      <p className="p5-section-label">Comparison</p>
      <h2 className="p5-section-title">{data.headline}</h2>
      <p className="p5-comparison-intro">{data.intro}</p>
      <div className="p5-comparison">
        <div className="p5-table-wrap">
          <table className="p5-compare-table">
            <thead>
              <tr>
                {data.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function BestFit({ data }) {
  return (
    <section className="p5-wrap">
      <p className="p5-section-label">Ideal Client</p>
      <h2 className="p5-section-title">{data.headline}</h2>
      <div className="p5-bestfit">
        <p className="p5-bestfit-intro">{data.intro}</p>
        <div className="p5-bestfit-list">
          {data.bullets.map((b, i) => (
            <span key={i} className="p5-bestfit-tag">{b}</span>
          ))}
        </div>
        <p className="p5-bestfit-closing">{data.closing}</p>
      </div>
    </section>
  );
}

function FaqSection({ data }) {
  return (
    <section className="p5-wrap">
      <p className="p5-section-label">FAQ</p>
      <h2 className="p5-section-title">{data.headline}</h2>
      <div className="p5-faq-list">
        {data.items.map((item, i) => (
          <div key={i} className="p5-faq-item">
            <button className="p5-faq-q">{item.question}</button>
            <div className="p5-faq-a">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ data }) {
  return (
    <section id={data.id} className="p5-final-cta">
      <div className="p5-wrap">
        <div className="p5-cta-card">
          <h2>{data.headline}</h2>
          <p>{data.body}</p>
          <a href={data.cta.href} className="p5-btn p5-btn-primary">
            {data.cta.label} <span>{'\u2192'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function VisitorIDPage() {
  return (
    <div>
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://p5marketing.com/' },
              { '@type': 'ListItem', position: 2, name: 'The ID Suite', item: 'https://p5marketing.com/the-id-suite/' },
              { '@type': 'ListItem', position: 3, name: 'VisitorID', item: 'https://p5marketing.com/the-id-suite/visitorid/' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="p5-hero-centered">
        <p className="p5-kicker">{content.hero.eyebrow}</p>
        <h1>{content.hero.headline}</h1>
        <p className="p5-sub">{content.hero.subheadline}</p>
        <div className="p5-cta-row">
          <a href={content.hero.primaryCta.href} className="p5-btn p5-btn-primary">
            {content.hero.primaryCta.label}
          </a>
          <a href={content.hero.secondaryCta.href} className="p5-btn p5-btn-ghost">
            {content.hero.secondaryCta.label}
          </a>
        </div>
      </section>

      <StatBar stats={content.stats} />
      <ProductScreenshots data={content.productScreenshots} />
      <ProblemSection data={content.problem} />
      <HowItWorks data={content.howItWorks} />
      <BenefitsGrid data={content.benefits} />
      <ComparisonTable data={content.comparison} />
      <BestFit data={content.bestFit} />
      <FaqSection data={content.faq} />
      <FinalCta data={content.finalCta} />
    </div>
  );
}
