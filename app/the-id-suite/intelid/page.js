export const metadata = {
  alternates: {
    canonical: '/the-id-suite/intelid/',
  },
  title: 'IntelID™ | Weekly Market Intelligence for Owners & Founders',
  description:
    'Eyes on your competitors, your category, and your public reputation — without hiring an analyst. AI-synthesized brief in your inbox by 9 AM every Monday. $300/month, zero setup.',
  openGraph: {
    title: 'IntelID™ | Weekly Market Intelligence | P5 Marketing',
    description:
      'For owners, founders, and the PR or senior marketing teams advising them. Know what moved in your market before your week starts. $300/month, zero setup, month to month.',
    url: 'https://p5marketing.com/the-id-suite/intelid/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — IntelID' }],
  },
};

export default function IntelIDPage() {
  const briefSections = [
    {
      label: 'Section 01',
      title: 'Competitor moves',
      description:
        'Content, launches, hiring signals, paid campaigns, and earned media across your top five competitors.',
    },
    {
      label: 'Section 02',
      title: 'Social activity',
      description:
        'Your brand and your competitors across five channels of your choice — LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Reddit, or Threads.',
    },
    {
      label: 'Section 03',
      title: 'Public reputation',
      description:
        'Citations, review trends, sentiment shifts, and forum mentions across the public web.',
    },
    {
      label: 'Section 04',
      title: 'Category conversation',
      description:
        'What your prospects are searching and saying about your category right now.',
    },
    {
      label: 'Section 05',
      title: 'Strategic recommendations',
      description:
        'Three to five prioritized action items your team can run with this week.',
    },
  ];

  const howItWorks = [
    {
      week: 'Week 1',
      title: 'We onboard',
      description:
        'You give us your brand, five competitors, and the five social channels you care about most. We tune the inputs.',
    },
    {
      week: 'Week 2',
      title: 'First brief lands',
      description:
        'Your first IntelID brief arrives by 9 AM Monday. Forward it to your team. Paste sections into your slide deck.',
    },
    {
      week: 'Every Monday',
      title: 'It just keeps coming',
      description:
        'A new brief, every Monday, indefinitely. You walk into the Monday meeting prepared. We refine focus on a 30-minute monthly call.',
    },
  ];

  const alternatives = [
    {
      option: 'Enterprise listening tools',
      detail: 'Meltwater, Cision, Brandwatch',
      cost: '$8K–25K / yr',
      catch: 'Still requires you to read the firehose every week.',
    },
    {
      option: 'In-house marketing analyst',
      detail: 'Full-time hire with benefits and PTO',
      cost: '$80K–150K / yr',
      catch: 'Takes weeks to hire. Misses Mondays when sick or on vacation.',
    },
    {
      option: 'Doing it yourself',
      detail: 'Google Alerts and Sunday scans',
      cost: 'Free',
      catch: 'Your time is the bottleneck. Three hours a week, every week.',
    },
    {
      option: 'IntelID™',
      detail: 'AI-synthesized, human-curated briefing',
      cost: '$300 / mo',
      catch: 'In your inbox by 9 AM Monday. Never misses.',
      highlight: true,
    },
  ];

  /* ------------ shared style tokens ------------ */
  const kickerStyle = {
    fontSize: '13px',
    fontFamily: 'Space Mono, monospace',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--p5-accent)',
    margin: '0 0 12px 0',
  };

  const h2Style = {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 700,
    lineHeight: 1.2,
    margin: '0 0 24px 0',
    fontFamily: 'DM Sans',
    color: 'var(--p5-text)',
  };

  const proseStyle = {
    fontSize: '16px',
    lineHeight: 1.7,
    color: 'var(--p5-text-dim)',
    margin: '0 0 20px 0',
  };

  const cardStyle = {
    background: 'var(--p5-bg-surface)',
    backdropFilter: 'var(--p5-glass-blur)',
    WebkitBackdropFilter: 'var(--p5-glass-blur)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.1)',
    border: '1px solid var(--p5-surface-border)',
    borderRadius: 'var(--p5-radius)',
    padding: '28px',
  };

  const primaryBtnStyle = {
    display: 'inline-block',
    background: `linear-gradient(135deg, var(--p5-accent) 0%, var(--p5-accent-alt) 100%)`,
    color: 'var(--p5-bg-deep)',
    padding: '14px 32px',
    borderRadius: 'var(--p5-radius)',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'DM Sans',
  };

  const secondaryBtnStyle = {
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
  };

  return (
    <main style={{ color: 'var(--p5-text)' }}>
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "The ID Suite", "item": "https://p5marketing.com/the-id-suite/"}, {"@type": "ListItem", "position": 3, "name": "IntelID", "item": "https://p5marketing.com/the-id-suite/intelid/"}]}',
        }}
      />

      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, var(--p5-bg-deep) 0%, var(--p5-bg-surface) 100%)`,
          padding: '96px 24px 80px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ ...kickerStyle, textAlign: 'center' }}>IntelID&trade; &middot; The ID Suite</p>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 24px 0',
              fontFamily: 'DM Sans',
            }}
          >
            Know what moved in your market{' '}
            <span style={{ color: 'var(--p5-accent)' }}>before your week starts.</span>
          </h1>
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              maxWidth: '700px',
              margin: '0 auto 36px',
            }}
          >
            IntelID is a single, AI-synthesized briefing on your competitors, your category, and your public
            reputation &mdash; in your inbox by 9 AM every Monday. Built for owners, founders, and the PR or
            senior marketing teams advising them. Eyes on your market without staffing for it.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact/?topic=intelid-sample" style={primaryBtnStyle}>
              Get a Free Sample Brief
            </a>
            <a href="#whats-in-the-brief" style={secondaryBtnStyle}>
              See What&rsquo;s in a Brief
            </a>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--p5-text-dim)',
              marginTop: '20px',
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '0.04em',
            }}
          >
            $300 / month &middot; zero setup &middot; month to month
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '40px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {[
            { value: '5 + 5', label: 'Competitors & social channels tracked' },
            { value: '9 AM Monday', label: 'Brief delivered every week' },
            { value: '$300', label: 'Flat monthly, zero setup' },
            { value: 'Zero', label: 'Tools, dashboards, or logins for you' },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: '26px',
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
                  marginTop: '6px',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p style={kickerStyle}>Why This Matters</p>
          <h2 style={h2Style}>
            By the time most competitor moves reach you, the window to react is closing.
          </h2>
          <p style={proseStyle}>
            You don&rsquo;t want to hear about a competitor&rsquo;s new positioning from a sales rep on
            Wednesday. You don&rsquo;t want to find out your category&rsquo;s sentiment shifted by reading a
            G2 review on Friday. You want to see it Monday morning, so you can decide what to do about it
            before lunch.
          </p>
          <p style={proseStyle}>
            But you don&rsquo;t have an analyst &mdash; and you don&rsquo;t want to hire one for this.
            Enterprise listening tools dump the firehose on you. Google Alerts is noise. Your senior team is
            running the business, not reading LinkedIn.
          </p>
          <p style={proseStyle}>
            IntelID is the missing layer. AI does the reading. A human curates the signal. One opinionated
            brief lands at 9 AM Monday with what actually moved and what to do about it. No dashboard to log
            into. No dashboard to ignore.
          </p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--p5-accent)', margin: '0' }}>
            You stop being the last to know.
          </p>
        </div>
      </section>

      {/* WHAT'S IN EVERY BRIEF */}
      <section
        id="whats-in-the-brief"
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={kickerStyle}>What&rsquo;s in Every Brief</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>
            Five sections. Three to five action items. One Monday morning.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {briefSections.map((section, i) => (
              <div key={i} style={cardStyle}>
                <div
                  style={{
                    fontSize: '11px',
                    fontFamily: 'Space Mono, monospace',
                    color: 'var(--p5-accent-alt)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                  }}
                >
                  {section.label}
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    margin: '0 0 12px 0',
                    color: 'var(--p5-text)',
                  }}
                >
                  {section.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: 0 }}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE BRIEF PREVIEW */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p style={kickerStyle}>What Lands in Your Inbox</p>
          <h2 style={{ ...h2Style, marginBottom: '32px' }}>
            One email. Skimmable in five minutes. Forwardable to your team.
          </h2>
          <div
            style={{
              background: 'var(--p5-bg-surface)',
              border: '1px solid var(--p5-surface-border)',
              borderRadius: 'var(--p5-radius)',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <div
              style={{
                background: 'rgba(0, 229, 199, 0.05)',
                borderBottom: '1px solid var(--p5-surface-border)',
                padding: '20px 28px',
                fontFamily: 'Space Mono, monospace',
                fontSize: '13px',
                color: 'var(--p5-text-dim)',
              }}
            >
              <div style={{ marginBottom: '6px' }}>
                <span style={{ color: 'var(--p5-text-dim)' }}>From: </span>
                <span style={{ color: 'var(--p5-text)' }}>IntelID &lt;intel@p5marketing.com&gt;</span>
              </div>
              <div style={{ marginBottom: '6px' }}>
                <span style={{ color: 'var(--p5-text-dim)' }}>Subject: </span>
                <span style={{ color: 'var(--p5-text)' }}>
                  Week of May 11 &mdash; competitor launch, sentiment shift, 3 actions
                </span>
              </div>
              <div>
                <span style={{ color: 'var(--p5-text-dim)' }}>Delivered: </span>
                <span style={{ color: 'var(--p5-accent)' }}>Monday, 8:47 AM</span>
              </div>
            </div>
            <div style={{ padding: '28px' }}>
              <h4
                style={{
                  fontSize: '15px',
                  fontFamily: 'Space Mono, monospace',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--p5-accent)',
                  margin: '0 0 12px 0',
                }}
              >
                The headline
              </h4>
              <p style={{ ...proseStyle, marginBottom: '24px' }}>
                Your #2 competitor launched a comparison landing page targeting your brand name on
                Thursday. It&rsquo;s already ranking position 7 for &ldquo;[your brand] vs [theirs].&rdquo;
                Two of your G2 reviewers re-posted it on LinkedIn.
              </p>
              <h4
                style={{
                  fontSize: '15px',
                  fontFamily: 'Space Mono, monospace',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--p5-accent)',
                  margin: '0 0 12px 0',
                }}
              >
                Recommended actions
              </h4>
              <ol style={{ ...proseStyle, paddingLeft: '20px', margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  Publish a counter-comparison page this week. Draft outline attached.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  Brief your sales team on the new positioning before Tuesday standup.
                </li>
                <li>Ask three happy customers for a fresh G2 review by Friday.</li>
              </ol>
              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px dashed var(--p5-surface-border)',
                  fontSize: '13px',
                  color: 'var(--p5-text-dim)',
                  fontStyle: 'italic',
                }}
              >
                Full briefing continues below &mdash; competitor moves, social activity, reputation,
                category conversation. Five-minute read.
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '13px',
              color: 'var(--p5-text-dim)',
              fontStyle: 'italic',
              marginTop: '16px',
            }}
          >
            Illustrative example. Your sample brief is built on your real competitors and category.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={kickerStyle}>How It Works</p>
          <h2 style={{ ...h2Style, marginBottom: '48px' }}>Onboard in week one. Brief in week two. Forever.</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {howItWorks.map((step, i) => (
              <div key={i} style={cardStyle}>
                <div
                  style={{
                    fontSize: '13px',
                    fontFamily: 'Space Mono, monospace',
                    color: 'var(--p5-accent-alt)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  {step.week}
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    margin: '0 0 12px 0',
                    color: 'var(--p5-text)',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS THE ALTERNATIVES */}
      <section style={{ background: 'var(--p5-bg-deep)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={kickerStyle}>Why This Beats the Alternatives</p>
          <h2 style={{ ...h2Style, marginBottom: '40px' }}>
            You already have options. Here&rsquo;s why IntelID wins.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {alternatives.map((alt, i) => (
              <div
                key={i}
                style={{
                  ...cardStyle,
                  ...(alt.highlight
                    ? {
                        border: '2px solid var(--p5-accent)',
                        background: 'rgba(0, 229, 199, 0.05)',
                      }
                    : {}),
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 4px 0',
                    color: alt.highlight ? 'var(--p5-accent)' : 'var(--p5-text)',
                  }}
                >
                  {alt.option}
                </h3>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--p5-text-dim)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '16px',
                  }}
                >
                  {alt.detail}
                </div>
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: alt.highlight ? 'var(--p5-accent)' : 'var(--p5-text)',
                    fontFamily: 'Space Mono, monospace',
                    marginBottom: '12px',
                  }}
                >
                  {alt.cost}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: 0 }}>
                  {alt.catch}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          background: 'var(--p5-bg-surface)',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...kickerStyle, textAlign: 'center' }}>One Package. One Price.</p>
          <h2 style={{ ...h2Style, marginBottom: '32px' }}>Simple, transparent, month to month.</h2>
          <div
            style={{
              ...cardStyle,
              padding: '40px',
              border: '2px solid var(--p5-accent)',
              background: 'rgba(0, 229, 199, 0.03)',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '12px',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--p5-surface-border)',
                marginBottom: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '14px', color: 'var(--p5-text-dim)', marginBottom: '4px' }}>
                  Monthly subscription
                </div>
                <div style={{ fontSize: '15px', color: 'var(--p5-text)' }}>
                  Weekly brief, monthly refinement call
                </div>
              </div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'var(--p5-accent)',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                $300<span style={{ fontSize: '16px', color: 'var(--p5-text-dim)' }}>/mo</span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <div style={{ fontSize: '14px', color: 'var(--p5-text-dim)', marginBottom: '4px' }}>
                  Onboarding &amp; first brief setup
                </div>
                <div style={{ fontSize: '15px', color: 'var(--p5-text)' }}>
                  Source tuning, competitor confirmation, brief calibration &mdash; on us
                </div>
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--p5-accent)',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                Free
              </div>
            </div>
            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <a href="/contact/?topic=intelid-sample" style={primaryBtnStyle}>
                Get a Free Sample Brief
              </a>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--p5-text-dim)',
                  marginTop: '14px',
                  fontFamily: 'Space Mono, monospace',
                  letterSpacing: '0.04em',
                }}
              >
                Zero setup &middot; month to month &middot; cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, var(--p5-bg-deep) 0%, var(--p5-bg-surface) 100%)`,
          padding: '96px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ ...h2Style, margin: '0 0 20px 0' }}>
            Try one Monday. See what&rsquo;s actually moving in your market.
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--p5-text-dim)',
              marginBottom: '32px',
            }}
          >
            We&rsquo;ll build a free sample brief on your real competitors, your real category, and your real
            reputation. If it sharpens your week, we keep going. If not, we both move on.
          </p>
          <a href="/contact/?topic=intelid-sample" style={primaryBtnStyle}>
            Get My Free Sample Brief &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
