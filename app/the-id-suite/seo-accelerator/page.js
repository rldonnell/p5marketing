export const metadata = {
  title: 'SEO Accelerator â Organic Growth Engine for High-Trust Businesses | P5 Marketing',
  description:
    'P5\'s SEO Accelerator combines 25 years of SEO expertise with GEO optimization and content repurposing to build compounding organic traffic. Designed for high-trust businesses ready to own their market.',
  openGraph: {
    title: 'SEO Accelerator â Organic Growth Engine for High-Trust Businesses',
    description:
      'SEO. GEO. Content Repurposing. One integrated system that turns expertise into organic traffic your competitors can\'t buy.',
  },
};

export default function SEOAcceleratorPage() {
  const faqItems = [
    {
      q: 'How long does it take for the SEO Accelerator to show results?',
      a: 'Most clients see measurable ranking improvements within 60\u201390 days, with significant traffic growth by month four to six. SEO compounds over time, so months six through twelve typically show the steepest growth curve. We set clear 90-day milestones so you always know whether we\u2019re on track.',
    },
    {
      q: 'Do I need to create the content myself?',
      a: 'No. We handle all content production. We\u2019ll interview you or your team to capture your expertise, then our writers produce SEO-optimized content that sounds like it came from a practitioner\u2014because it\u2019s built on real practitioner knowledge. You review and approve everything before it publishes.',
    },
    {
      q: 'What\u2019s the difference between SEO and GEO?',
      a: 'SEO optimizes your content for traditional search engine rankings\u2014appearing in Google\u2019s organic results. GEO optimizes your content to be cited by AI-powered tools like Google AI Overviews, ChatGPT, and Perplexity. Both drive qualified traffic, but through different mechanisms. The SEO Accelerator handles both simultaneously because they share the same content foundation.',
    },
    {
      q: 'How is P5 different from the SEO agency I used before?',
      a: 'Most SEO agencies stop at strategy. They hand you a keyword report and a list of recommendations, then charge you monthly while you figure out how to implement them. P5 executes. We do the technical fixes, write the content, build the links, and optimize for AI engines\u2014all managed, all reported, all accountable to business outcomes rather than vanity metrics.',
    },
    {
      q: 'Can I use the SEO Accelerator without the other ID Suite products?',
      a: 'Absolutely. The SEO Accelerator works as a standalone service. Many clients start here and add IntentID, VisitorID, or InboxID later as their organic traffic grows and they want deeper visibility into who\u2019s visiting and how to convert them.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'P5 Marketing focuses on high-trust, high-value businesses\u2014primarily in healthcare (plastic surgery, specialty medical, dental), professional services (law, financial advisory), luxury hospitality (wedding venues, boutique hotels), and B2B companies with considered purchase cycles.',
    },
    {
      q: 'Does the SEO Accelerator replace paid ads?',
      a: 'No. SEO and paid ads serve different purposes. SEO is the long game; paid ads are the short game. Most of our clients see the best ROI when they run both. The SEO Accelerator brings organic momentum; paid ads accelerate results. Together, they lower your customer acquisition cost.',
    },
    {
      q: 'What is GEO and why do I need it?',
      a: 'Generative Engine Optimization is optimizing your content for AI search platforms (ChatGPT, Perplexity, Claude, Google AI Overviews). As more people use AI to research products and services, visibility in those platforms matters. GEO is still new\u2014most competitors aren\u2019t doing it yet. That\u2019s your advantage.',
    },
  ];

  const cardStyle = {
    background: 'linear-gradient(135deg, rgba(0, 229, 199, 0.05), rgba(123, 97, 255, 0.05))',
    border: '1px solid rgba(0, 229, 199, 0.2)',
    borderRadius: 'var(--p5-radius)',
    padding: '32px',
    transition: 'all 0.3s ease',
  };

  const sectionTitleStyle = {
    fontSize: '13px',
    fontFamily: 'Space Mono',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--p5-accent)',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  };

  const h2Style = {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.2,
    margin: '0 0 16px 0',
    fontFamily: 'DM Sans',
  };

  return (
    <main style={{ color: 'var(--p5-text)' }}>
      {/* HERO */}
      <section
        style={{
          background: 'var(--p5-bg-deep)',
          padding: '80px 24px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>The ID Suite</p>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '24px',
              margin: '0 0 24px 0',
              fontFamily: 'DM Sans',
            }}
          >
            SEO Accelerator:{' '}
            <span style={{ color: 'var(--p5-accent)' }}>
              The Organic Growth Engine That Compounds
            </span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              margin: '0 0 32px 0',
            }}
          >
            SEO. GEO. Content repurposing. One integrated system that turns your
            expertise into the organic traffic your competitors can&rsquo;t buy.
            Built on 25&nbsp;years of P5 SEO legacy.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact/"
              style={{
                display: 'inline-block',
                background: 'var(--p5-accent)',
                color: 'var(--p5-bg-deep)',
                padding: '14px 32px',
                borderRadius: 'var(--p5-radius)',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'DM Sans',
              }}
            >
              Start Building Your Organic Foundation
            </a>
            <a
              href="/how-it-works/"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'var(--p5-accent)',
                padding: '14px 32px',
                borderRadius: 'var(--p5-radius)',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'DM Sans',
                border: '1px solid var(--p5-accent)',
              }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '32px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            { value: '25 Yrs', label: 'SEO Legacy' },
            { value: 'GEO Ready', label: 'AI Search Optimized' },
            { value: '3-in-1', label: 'SEO + GEO + Content' },
            { value: 'Monthly', label: 'Reporting & Optimization' },
          ].map((stat, i) => (
            <div key={i} style={{ flex: '0 1 auto' }}>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--p5-accent)',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--p5-text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>The Challenge</p>
          <h2 style={h2Style}>
            Most Agencies Start With Paid Ads. We Think That&rsquo;s Backwards.
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--p5-text-dim)', margin: '0 0 24px 0' }}>
            Paid advertising has its place, but building your entire pipeline on rented traffic
            is like building a house on someone else&rsquo;s land. The moment you stop paying,
            the traffic disappears. For high-trust businesses&mdash;plastic surgeons, specialty
            medical practices, law firms, financial advisors&mdash;this approach is especially
            dangerous because your prospects need to trust you before they ever pick up the phone.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--p5-text-dim)', margin: '0 0 24px 0' }}>
            P5&rsquo;s SEO Accelerator takes the opposite approach. We build an organic foundation
            first&mdash;one that compounds over time, earns trust through content, and creates a
            pipeline you actually own. Every page we publish, every piece of content we repurpose,
            every technical optimization we make adds permanent equity to your digital presence.
          </p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--p5-accent)', margin: '0' }}>
            Twelve months from now, your website generates qualified leads whether you&rsquo;re
            running ads that week or not. That&rsquo;s the SEO Accelerator.
          </p>
        </div>
      </section>

      {/* THREE SERVICES */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>What&rsquo;s Included</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            Three Services. One Organic Engine. Compounding Results.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            <div style={cardStyle}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                  color: 'var(--p5-accent)',
                }}
              >
                Search Engine Optimization (SEO)
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--p5-text-dim)', margin: '0' }}>
                We&rsquo;ve been doing SEO since before Google existed. Twenty-five years of
                algorithm changes and competitive battles have taught us what actually moves the
                needle. Technical site architecture, keyword strategy mapped to buyer intent,
                on-page optimization, and authority building. We don&rsquo;t chase tricks. We
                build foundations.
              </p>
            </div>
            <div style={cardStyle}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                  color: 'var(--p5-accent)',
                }}
              >
                Generative Engine Optimization (GEO)
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--p5-text-dim)', margin: '0' }}>
                AI-powered search is reshaping how prospects find businesses like yours. Google
                AI&nbsp;Overviews, ChatGPT, Perplexity, and Claude are increasingly answering the
                questions your prospects ask. GEO ensures your content is structured and authoritative
                enough to be the source these AI engines reference. Most competitors aren&rsquo;t
                here yet. That&rsquo;s your window.
              </p>
            </div>
            <div style={cardStyle}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                  color: 'var(--p5-accent)',
                }}
              >
                Content Repurposing
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--p5-text-dim)', margin: '0' }}>
                One piece of expert content shouldn&rsquo;t live in one place. A detailed blog
                post becomes a social carousel, an email newsletter segment, a YouTube script
                outline, and a set of FAQ schema entries. Every hour of content investment
                produces five to ten times the organic footprint. Maximum impact from every
                piece of IP you own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>Four Phases</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            How the SEO Accelerator Works
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                num: '01',
                title: 'Foundation Audit & Strategy',
                desc: 'We audit your current organic presence\u2014technical SEO health, keyword positions, content gaps, competitor landscape, and backlink profile. From this data, we build a prioritized roadmap that targets the highest-impact opportunities first.',
              },
              {
                num: '02',
                title: 'Technical & On-Page Optimization',
                desc: 'We fix what\u2019s broken and optimize what\u2019s underperforming. Site speed, crawlability, schema markup, meta tags, internal linking, canonical tags, image optimization\u2014the technical layer that most agencies skip or rush through.',
              },
              {
                num: '03',
                title: 'Content Production & Repurposing',
                desc: 'With the foundation solid, we produce and repurpose content against your keyword strategy. Each piece is optimized for both traditional search and AI engines, structured with proper schema, and distributed across your content channels.',
              },
              {
                num: '04',
                title: 'Authority Building & Compounding',
                desc: 'As your content library grows, we shift focus to authority signals\u2014topical authority through content clusters, high-quality backlinks, and expanding into adjacent keyword territories. This is where the compounding effect kicks in.',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--p5-radius)',
                  padding: '32px',
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--p5-accent-alt)',
                    fontFamily: 'Space Mono, monospace',
                    marginBottom: '12px',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px 0' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: '0' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--p5-accent)',
              marginTop: '2rem',
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: 1.6,
            }}
          >
            Then: your organic traffic feeds into paid campaigns (through IntentID).
            VisitorID identifies interested visitors. InboxID converts them. The cycle repeats.
          </p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>What You Get</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>SEO Accelerator Deliverables</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Monthly SEO Performance Report',
                desc: 'Keyword rankings, organic traffic trends, conversion metrics, and competitive position tracking with plain-English analysis.',
              },
              {
                title: 'Technical SEO Monitoring',
                desc: 'Ongoing site health checks, crawl error resolution, Core Web Vitals optimization, and schema maintenance.',
              },
              {
                title: 'SEO Content Production',
                desc: 'Blog posts, service page enhancements, and FAQ content\u2014all mapped to your keyword strategy and optimized for buyer intent.',
              },
              {
                title: 'Content Repurposing',
                desc: 'Each cornerstone piece transformed into social posts, email segments, and multi-format assets across your channels.',
              },
              {
                title: 'GEO Optimization',
                desc: 'Content structured for AI citation, entity markup, and generative engine visibility across ChatGPT, Perplexity, and Google AI Overviews.',
              },
              {
                title: 'Quarterly Strategy Review',
                desc: 'Competitive landscape assessment, keyword opportunity refresh, and roadmap adjustments based on performance data.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--p5-radius)',
                  padding: '28px',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: '0' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>Built For</p>
          <h2 style={h2Style}>
            Who the SEO Accelerator Is Designed For
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--p5-text-dim)', margin: '0 0 24px 0' }}>
            The SEO Accelerator is designed for high-trust, high-value businesses where the
            customer journey starts with research, not impulse. Industries where a single new
            client can be worth thousands&mdash;and where trust is the deciding factor.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { title: 'Plastic Surgeons & Cosmetic Practices', desc: 'Patients research extensively before choosing a provider. Ranking for procedure-specific keywords in your market puts you at the top of that research.' },
              { title: 'Specialty Medical Practices', desc: 'Orthopedic surgeons, spine specialists, dermatologists\u2014patients searching for specific conditions and treatments.' },
              { title: 'Wedding Venues & Luxury Hospitality', desc: 'Couples spend months researching their venue. Organic visibility during that research window is everything.' },
              { title: 'Professional Services', desc: 'Law firms, financial advisors, consultants\u2014practices where expertise and credibility drive the buying decision.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--p5-radius)',
                padding: '20px 24px',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 6px 0', color: 'var(--p5-accent)' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: '0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--p5-accent)', margin: '24px 0 0 0', fontWeight: 600 }}>
            If your average client value exceeds $2,000 and your prospects research before they
            buy, the SEO Accelerator will pay for itself many times over.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>Why Choose P5</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            Traditional SEO Agency vs. P5 SEO Accelerator
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: '0',
                fontSize: '15px',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '16px',
                      borderBottom: '2px solid rgba(255,255,255,0.1)',
                      color: 'var(--p5-text-dim)',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Traditional SEO Agency
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '16px',
                      borderBottom: '2px solid var(--p5-accent)',
                      color: 'var(--p5-accent)',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    P5 SEO Accelerator
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Keyword reports you implement yourself', 'Fully managed execution\u2014strategy through production'],
                  ['Generic blog posts from freelance writers', 'Expert-level content built on your practice knowledge'],
                  ['No GEO optimization', 'GEO built into every piece from day one'],
                  ['One format, one channel', 'Every piece multiplied across formats and channels'],
                  ['Automated dashboards with vanity metrics', 'Plain-English analysis tied to business outcomes'],
                  ['SEO lives in a silo', 'Integrates with IntentID, VisitorID & InboxID'],
                ].map(([typical, p5], i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        color: 'var(--p5-text-dim)',
                      }}
                    >
                      <span style={{ color: '#ef4444', marginRight: '8px' }}>&#10005;</span>
                      {typical}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        color: 'var(--p5-text)',
                      }}
                    >
                      <span style={{ color: 'var(--p5-accent)', marginRight: '8px' }}>&#10003;</span>
                      {p5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT FITS */}
      <section
        style={{
          background: 'var(--p5-bg-deep)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>Full-Funnel Integration</p>
          <h2 style={{ ...h2Style, marginBottom: '16px' }}>
            SEO Accelerator + The ID Suite
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              marginBottom: '48px',
              maxWidth: '640px',
            }}
          >
            The SEO Accelerator is powerful on its own, but it becomes transformative
            when paired with the rest of the ID&nbsp;Suite.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'IntentID + SEO Accelerator',
                subtitle: 'Unified Audience Data',
                desc: 'Your organic content attracts traffic. IntentID targets your best audience into paid campaigns. Both feed from the same customer data.',
              },
              {
                title: 'SEO Accelerator + Paid Ads',
                subtitle: 'Complete Traffic Strategy',
                desc: 'The SEO Accelerator builds the long-term organic foundation. Paid ads accelerate short-term results. Together they reduce your cost-per-customer.',
              },
              {
                title: 'SEO Accelerator + VisitorID',
                subtitle: 'Visitor Intelligence',
                desc: 'Organic traffic that converts is gold. VisitorID tracks which visitors care. The SEO Accelerator optimizes to attract more like them.',
              },
              {
                title: 'SEO Accelerator + InboxID',
                subtitle: 'Conversion Loop',
                desc: 'Attracted, identified, now convert. InboxID automates the follow-up so no lead falls through the cracks.',
              },
            ].map((card, i) => (
              <div key={i} style={cardStyle}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0' }}>
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--p5-accent)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: '0 0 12px 0',
                  }}
                >
                  {card.subtitle}
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: '0' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="/how-it-works/"
              style={{
                color: 'var(--p5-accent)',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              See How The ID Suite Works Together &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>FAQ</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>Frequently Asked Questions</h2>
          {faqItems.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: 'var(--p5-text)',
                  listStyle: 'none',
                }}
              >
                {item.q}
              </summary>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--p5-text-dim)',
                  margin: '12px 0 0 0',
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--p5-bg-deep)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, margin: '0 0 16px 0' }}>
            Ready to Build an Organic Pipeline You Actually Own?
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              margin: '0 0 32px 0',
            }}
          >
            Stop renting traffic. Start building an organic foundation that compounds every
            month and generates qualified leads whether you&rsquo;re running ads or not.
            Includes a complimentary audit of your current organic standing.
          </p>
          <a
            href="/contact/"
            style={{
              display: 'inline-block',
              background: 'var(--p5-accent)',
              color: 'var(--p5-bg-deep)',
              padding: '14px 32px',
              borderRadius: 'var(--p5-radius)',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'DM Sans',
            }}
          >
            Get Your SEO Accelerator Proposal
          </a>
        </div>
      </section>
    </main>
  );
}
