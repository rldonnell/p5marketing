import content from '../../lib/content/visitorid';
import PageEffects from './PageEffects';

export const metadata = {
  alternates: { canonical: '/visitorid/' },
  title: "VisitorID\u2122 | Identify Anonymous Website Visitors | P5 Marketing",
  description:
    "VisitorID\u2122 identifies up to 60% of anonymous website visitors by name, email, and phone \u2014 no forms required. Score intent, filter junk, and deliver qualified leads to your CRM automatically.",
  openGraph: {
    title: "VisitorID\u2122 | Identify Anonymous Website Visitors | P5 Marketing",
    description:
      "VisitorID\u2122 identifies up to 60% of anonymous website visitors by name, email, and phone \u2014 no forms required. Score intent and deliver qualified leads to your CRM automatically.",
    url: 'https://p5marketing.com/visitorid/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VisitorID\u2122 by P5 Marketing' }],
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

function NotFor({ data }) {
  return (
    <section className="p5-wrap">
      <div className="p5-notfor">
        <h2 className="p5-notfor-headline">{data.headline}</h2>
        <p className="p5-notfor-body">{data.body}</p>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="p5-wrap p5-resources-section" id="resources">
      <p className="p5-section-label">Free Resources</p>
      <h2 className="p5-section-title">See the Data Behind the Strategy</h2>
      <p className="p5-comparison-intro">
        No registration required. Download the research, watch the walkthrough, or review the full presentation.
      </p>

      {/* Featured: 97% Problem PDF */}
      <div className="p5-resource-featured p5-fade-up">
        <div className="p5-resource-featured-image">
          <img
            src="/images/resources/97-percent-problem-cover.jpg"
            alt="The 97% Problem report cover — Why Most Businesses Under-Monetize Their Traffic"
            loading="lazy"
          />
        </div>
        <div className="p5-resource-featured-content">
          <span className="p5-resource-badge">Free Report</span>
          <h3>The 97% Problem</h3>
          <p>
            Why most businesses under-monetize their traffic — and how retargeting
            and identity-resolved follow-up recover the value they already paid to create.
          </p>
          <ul className="p5-resource-highlights">
            <li>Industry benchmarks: CTR, conversion rates, CPA, and ROAS</li>
            <li>The $20,000 scenario: same budget, nearly double the leads</li>
            <li>Segmented retargeting vs. generic — where the real ROI lives</li>
            <li>Every statistic sourced and cited. No inflated vendor claims.</li>
          </ul>
          <a
            href="/downloads/The-97-Percent-Problem-P5-Marketing.pdf"
            download
            className="p5-btn p5-btn-primary p5-btn-lg"
          >
            Download Free Report (PDF)
          </a>
        </div>
      </div>

      {/* Secondary: Video + Pitch Deck */}
      <div className="p5-resources-grid-2col">
        {/* Video */}
        <div className="p5-resource-card p5-fade-up" style={{ transitionDelay: '0.12s' }}>
          <div className="p5-resource-card-visual">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1181721550?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Identity-Resolved Retargeting — How VisitorID™ Works"
              />
            </div>
          </div>
          <div className="p5-resource-card-body">
            <h3>Identity Retargeting Walkthrough</h3>
            <p>
              A short video showing how the VisitorID{'\u2122'} pipeline works —
              from anonymous visitor to scored lead in your CRM.
            </p>
          </div>
        </div>

        {/* Pitch Deck */}
        <div className="p5-resource-card p5-fade-up" style={{ transitionDelay: '0.24s' }}>
          <div className="p5-resource-card-visual">
            <img
              src="/images/resources/pitch-deck-cover.jpg"
              alt="Identity-Resolved Retargeting pitch deck cover slide"
              loading="lazy"
            />
          </div>
          <div className="p5-resource-card-body">
            <h3>Identity Retargeting Pitch Deck</h3>
            <p>
              10 slides covering the full VisitorID{'\u2122'} pipeline,
              real-world follow-up examples, and ROI comparison data.
            </p>
            <a
              href="/downloads/P5-Identity-Retargeting-Pitch-Deck.pptx"
              download
              className="p5-btn p5-btn-primary"
            >
              Download Presentation
            </a>
          </div>
        </div>
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

export default function VisitorIDLandingPage() {
  return (
    <div>
      <PageEffects />

      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://p5marketing.com/' },
              { '@type': 'ListItem', position: 2, name: 'VisitorID', item: 'https://p5marketing.com/visitorid/' },
            ],
          }),
        }}
      />

      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.faq.items.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="p5-hero-centered">
        <p className="p5-kicker">{content.hero.eyebrow}</p>
        <h1>{content.hero.headline}</h1>
        <p className="p5-sub">{content.hero.subheadline}</p>

        {/* Hero Video – Vimeo embed */}
        <div className="p5-video-section">
          <div className="p5-hero-video-wrap">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1181721550?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Identity-Resolved Retargeting — How VisitorID™ Works"
              />
            </div>
          </div>
        </div>

        <div className="p5-cta-row">
          <a href="#final-cta" className="p5-btn p5-btn-primary">
            Schedule a Demo
          </a>
          <a href="#resources" className="p5-btn p5-btn-ghost">
            Free Resources
          </a>
        </div>
      </section>

      <StatBar stats={content.stats} />
      <ProductScreenshots data={content.productScreenshots} />
      <ProblemSection data={content.problem} />
      <HowItWorks data={content.howItWorks} />
      <BenefitsGrid data={content.benefits} />
      <ComparisonTable data={content.comparison} />
      <ResourcesSection />
      <BestFit data={content.bestFit} />
      <FaqSection data={content.faq} />
      <NotFor data={content.notFor} />
      <FinalCta data={content.finalCta} />
    </div>
  );
}
