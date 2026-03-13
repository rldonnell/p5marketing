export const metadata = {
  alternates: {
    canonical: '/the-id-suite/searchid/',
  },
  title: 'SearchID\u2122 | SEO & GEO Content Engine | P5 Marketing',
  description:
    'SearchID attracts qualified customers through SEO, GEO, and content repurposing. Powered by 25 years of P5 SEO expertise.',
  openGraph: {
    title: 'SearchID\u2122 | SEO & GEO Content Engine | P5 Marketing',
    description:
      'SearchID attracts qualified customers through SEO, GEO, and content repurposing. Powered by 25 years of P5 SEO expertise.',
  },
};

export default function SearchIDPage() {
  const faqItems = [
    {
      q: 'How is SearchID different from hiring a freelance SEO writer?',
      a: 'Speed, integration, and GEO. Most freelancers take 4–8 weeks per article and have no visibility into rankings or ROI. SearchID delivers pillar content in 2–3 weeks, tracks rankings weekly, and integrates with IntentID and paid campaigns so your organic traffic feeds directly into your customer acquisition funnel. Plus, most freelancers have never heard of GEO.',
    },
    {
      q: 'How long before I see results?',
      a: 'First organic traffic in 4–6 weeks (if you\u2019re in a non-competitive market). Meaningful traffic (10–30 qualified visitors/month) in 8–12 weeks. The real wins compound after 6 months when your content library is substantial. GEO optimization can see results even faster (2–4 weeks in many cases) because the space is less competitive.',
    },
    {
      q: 'Can SearchID content work with my existing IntentID audience?',
      a: 'That\u2019s the point. Your IntentID data tells us exactly which buyers are in market and what they\u2019re searching for. SearchID creates content to reach those buyers before your competitors do. Then that organic traffic feeds into your paid campaigns for maximum reach.',
    },
    {
      q: 'What if I\u2019m already doing SEO?',
      a: 'We audit your existing content, identify gaps, and integrate it into the SearchID roadmap. We typically find that competitor content is 30–40% better optimized. We close those gaps, add GEO, and layer in repurposing\u2014taking your existing IP and turning it into 5–7 additional assets.',
    },
    {
      q: 'Does SearchID replace my paid ads?',
      a: 'No. SearchID and paid ads serve different purposes. SEO is the long game; paid ads are the short game. Most of our clients see the best ROI when they run both. SearchID brings organic momentum; paid ads accelerate results. Together, they lower your customer acquisition cost.',
    },
    {
      q: 'What is GEO and why do I need it?',
      a: 'Generative Engine Optimization is optimizing your content for AI search platforms (ChatGPT, Perplexity, Claude). As more people use AI to research products and services, visibility in those platforms matters. GEO is still new\u2014most competitors aren\u2019t doing it yet. That\u2019s your advantage.',
    },
    {
      q: 'Do I need SearchID if I already have IntentID?',
      a: 'IntentID is who to target. SearchID is how to attract them before they\u2019re even in-market. IntentID finds your audience; SearchID attracts them and builds authority. Both together create the most efficient customer acquisition loop. Most clients add SearchID within 90 days.',
    },
    {
      q: 'How do you measure SearchID success?',
      a: 'Keyword rankings (tracked weekly), organic traffic growth (tracked monthly), conversion rates (through VisitorID), and cost-per-customer (integrated with paid spend). You\u2019ll see a dashboard showing all of it.',
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
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "The ID Suite", "item": "https://p5marketing.com/the-id-suite/"}, {"@type": "ListItem", "position": 3, "name": "SearchID", "item": "https://p5marketing.com/the-id-suite/searchid/"}]}'
        }}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How is SearchID different from hiring a freelance SEO writer?", "acceptedAnswer": {"@type": "Answer", "text": "Speed, integration, and GEO. Most freelancers take 4\u20138 weeks per article and have no visibility into rankings or ROI. SearchID delivers pillar content in 2\u20133 weeks, tracks rankings weekly, and integrates with IntentID and paid campaigns so your organic traffic feeds directly into your customer acquisition funnel. Plus, most freelancers have never heard of GEO."}}, {"@type": "Question", "name": "How long before I see results?", "acceptedAnswer": {"@type": "Answer", "text": "First organic traffic in 4\u20136 weeks (if you\u2019re in a non-competitive market). Meaningful traffic (10\u201330 qualified visitors/month) in 8\u201312 weeks. The real wins compound after 6 months when your content library is substantial. GEO optimization can see results even faster (2\u20134 weeks in many cases) because the space is less competitive."}}, {"@type": "Question", "name": "Can SearchID content work with my existing IntentID audience?", "acceptedAnswer": {"@type": "Answer", "text": "That\u2019s the point. Your IntentID data tells us exactly which buyers are in market and what they\u2019re searching for. SearchID creates content to reach those buyers before your competitors do. Then that organic traffic feeds into your paid campaigns for maximum reach."}}, {"@type": "Question", "name": "What if I\u2019m already doing SEO?", "acceptedAnswer": {"@type": "Answer", "text": "We audit your existing content, identify gaps, and integrate it into the SearchID roadmap. We typically find that competitor content is 30\u201340% better optimized. We close those gaps, add GEO, and layer in repurposing\u2014taking your existing IP and turning it into 5\u20137 additional assets."}}, {"@type": "Question", "name": "Does SearchID replace my paid ads?", "acceptedAnswer": {"@type": "Answer", "text": "No. SearchID and paid ads serve different purposes. SEO is the long game; paid ads are the short game. Most of our clients see the best ROI when they run both. SearchID brings organic momentum; paid ads accelerate results. Together, they lower your customer acquisition cost."}}, {"@type": "Question", "name": "What is GEO and why do I need it?", "acceptedAnswer": {"@type": "Answer", "text": "Generative Engine Optimization is optimizing your content for AI search platforms (ChatGPT, Perplexity, Claude). As more people use AI to research products and services, visibility in those platforms matters. GEO is still new\u2014most competitors aren\u2019t doing it yet. That\u2019s your advantage."}}, {"@type": "Question", "name": "Do I need SearchID if I already have IntentID?", "acceptedAnswer": {"@type": "Answer", "text": "IntentID is who to target. SearchID is how to attract them before they\u2019re even in-market. IntentID finds your audience; SearchID attracts them and builds authority. Both together create the most efficient customer acquisition loop. Most clients add SearchID within 90 days."}}, {"@type": "Question", "name": "How do you measure SearchID success?", "acceptedAnswer": {"@type": "Answer", "text": "Keyword rankings (tracked weekly), organic traffic growth (tracked monthly), conversion rates (through VisitorID), and cost-per-customer (integrated with paid spend). You\u2019ll see a dashboard showing all of it."}}]})
        }}
      />

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
            SearchID™: SEO, GEO & Content Repurposing{' '}
            <span style={{ color: 'var(--p5-accent)' }}>That Compounds</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              margin: '0 0 32px 0',
            }}
          >
            SearchID&trade; is the content foundation of the ID&nbsp;Suite. It powers
            organic discovery, fills your funnel, and feeds everything downstream.
            Build once, distribute everywhere.
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
              Book a Demo
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
            Most agencies start with paid ads. Then wonder why the bill keeps growing.
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--p5-text-dim)', margin: '0 0 24px 0' }}>
            The truth: paid acquisition is expensive and temporary. Each month you stop
            paying, the traffic stops. You&rsquo;re renting visibility, not building it.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--p5-text-dim)', margin: '0 0 24px 0' }}>
            P5 took a different approach. We build the organic foundation first&mdash;SEO-ranked
            content, AI-optimized pages, social authority. Then we layer on paid media. The result:
            lower customer acquisition cost, compounding traffic, and less reliance on paid spend
            over time.
          </p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--p5-accent)', margin: '0' }}>
            That&rsquo;s SearchID&trade;.
          </p>
        </div>
      </section>

      {/* WHAT SEARCHID INCLUDES */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>What SearchID Includes</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            Three services. One organic engine.
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
                SEO Content Development
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--p5-text-dim)', margin: '0' }}>
                Pillar content, landing pages, and cornerstone articles optimized for search
                intent. Built for conversion, ranked for visibility. We don&rsquo;t write for
                writers&mdash;we write for buyers.
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
                AI search platforms (ChatGPT, Perplexity, Claude) are reshaping how people
                research. SearchID optimizes your content for these new search channels so
                you&rsquo;re visible where your buyers are looking.
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
                One core message, infinite channels. SearchID transforms your content into
                social media posts, promotional campaigns, podcast scripts, and email
                sequences. Maximize impact from every piece of IP you own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SEARCHID WORKS */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>Four Steps</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            How SearchID works
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
                title: 'Research & Strategy',
                desc: 'We audit your market, competitive landscape, and search intent. We identify the keywords and topics that will drive qualified traffic. This is the foundation.',
              },
              {
                num: '02',
                title: 'Content Development',
                desc: 'Pillar content, landing pages, and regular posts optimized for SEO and GEO. Every page is built for search visibility and conversion. We measure keyword rankings weekly.',
              },
              {
                num: '03',
                title: 'GEO Optimization',
                desc: 'We optimize your content for AI search platforms (ChatGPT, Perplexity, Claude). This is new territory\u2014most competitors aren\u2019t here yet. We are.',
              },
              {
                num: '04',
                title: 'Repurposing & Distribution',
                desc: 'Every content piece becomes 5\u20137 additional assets: social posts, promotional emails, podcast topics, LinkedIn articles. One investment, maximum reach.',
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
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>SearchID Deliverables</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'SEO Content Strategy & Roadmap',
                desc: 'Month 1\u20133 roadmap with keyword targets, content calendar, and monthly publishing cadence.',
              },
              {
                title: 'Pillar & Landing Page Content',
                desc: '3\u20135 cornerstone pieces optimized for primary keywords and buyer intent.',
              },
              {
                title: 'GEO-Optimized Content',
                desc: 'AI search optimization for ChatGPT, Perplexity, Claude, and emerging AI platforms.',
              },
              {
                title: 'Social & Promotional Calendar',
                desc: '12-month calendar of posts, graphics, promotional copy, and email sequences derived from core content.',
              },
              {
                title: 'Podcast Scripts & Strategy',
                desc: 'Topic development, script templates, and episode optimization for audio distribution.',
              },
              {
                title: 'Monthly Reporting & Optimization',
                desc: 'Keyword rankings, organic traffic growth, engagement metrics, and monthly strategy adjustments.',
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

      {/* COMPARISON TABLE */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>Why Choose SearchID</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            Traditional SEO agency vs. P5 SearchID
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
                    Typical SEO Agency
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
                    P5 SearchID
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['4\u20138 weeks per article', '2\u20133 weeks per pillar piece'],
                  ['No GEO optimization', 'GEO built in (ChatGPT, Perplexity, Claude)'],
                  ['Limited content repurposing', '50+ assets from 5 pillar pieces'],
                  ['Not integrated with paid media', 'Integrated with IntentID & paid campaigns'],
                  ['Monthly bills, no ROI tracking', 'Weekly keyword tracking & monthly optimization'],
                  ['Generic content', 'Powered by 25 years of P5 SEO expertise'],
                ].map(([typical, p5], i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        color: 'var(--p5-text-dim)',
                      }}
                    >
                      <span style={{ color: '#ef4444', marginRight: '8px' }}>✕</span>
                      {typical}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        color: 'var(--p5-text)',
                      }}
                    >
                      <span style={{ color: 'var(--p5-accent)', marginRight: '8px' }}>✓</span>
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
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={sectionTitleStyle}>How It Fits</p>
          <h2 style={{ ...h2Style, marginBottom: '16px' }}>
            SearchID + The ID Suite
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
            SearchID is your organic acquisition engine. It works with the rest of the
            ID&nbsp;Suite to create a complete marketing system.
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
                title: 'IntentID + SearchID',
                subtitle: 'Unified Audience Data',
                desc: 'Your organic content attracts traffic. IntentID targets your best audience into paid campaigns. Both feed from the same customer data.',
              },
              {
                title: 'SearchID + Paid Ads',
                subtitle: 'Complete Traffic Strategy',
                desc: 'SearchID builds the long-term organic foundation. Paid ads accelerate short-term results. Together they reduce your cost-per-customer.',
              },
              {
                title: 'SearchID + VisitorID',
                subtitle: 'Visitor Intelligence',
                desc: 'Organic traffic that converts is gold. VisitorID tracks which visitors care. SearchID optimizes to attract more like them.',
              },
              {
                title: 'SearchID + InboxID',
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
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
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
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, margin: '0 0 16px 0' }}>
            Ready to build your organic foundation?
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              margin: '0 0 32px 0',
            }}
          >
            Book a 30-minute demo. We&rsquo;ll show you how SearchID, IntentID, VisitorID,
            and InboxID work together for your specific market. Plus, we&rsquo;ll audit your
            existing content and share 3 quick wins you can implement this month.
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
            Book a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
