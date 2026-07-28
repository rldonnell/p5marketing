export const metadata = {
  alternates: {
    canonical: '/the-id-suite/',
  },
  title: 'The P5 Toolkit | The ID Suite',
  description:
    'The toolkit P5 built to run the lead-agency model. Five tools: IntelID, SearchID, IntentID, VisitorID, InboxID. Three intelligence and identification layers, two execution layers. All in service of one written plan.',
  openGraph: {
    title: 'The P5 Toolkit | The ID Suite | P5 Marketing',
    description:
      'The in-house tooling that powers a P5 engagement. Not a product line. The engine under the lead-agency model.',
    url: 'https://p5marketing.com/the-id-suite/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — The ID Suite' }],
  },
};

const INTELLIGENCE_TOOLS = [
  {
    number: '01',
    name: 'IntelID',
    href: '/the-id-suite/intelid/',
    oneLine:
      'The weekly intelligence read on your market. Competitors, category, public reputation. Synthesized, in your inbox by 9 AM Monday.',
  },
  {
    number: '03',
    name: 'IntentID',
    href: '/the-id-suite/intentid/',
    oneLine:
      'Custom audiences of people actively researching your services. Refreshed weekly, synced into the ad platforms where your buyers convert.',
  },
  {
    number: '04',
    name: 'VisitorID',
    href: '/the-id-suite/visitorid/',
    oneLine:
      'Anonymous website visitors identified, scored, and routed to your CRM. The 95% of traffic that never fills out a form, finally visible.',
  },
];

const EXECUTION_TOOLS = [
  {
    number: '02',
    name: 'SearchID',
    href: '/the-id-suite/seo-accelerator/',
    oneLine:
      'The SEO and GEO content engine. 25 years of search expertise plus generative engine optimization. Compounding organic traffic you own.',
  },
  {
    number: '05',
    name: 'InboxID',
    href: '/the-id-suite/inboxid/',
    oneLine:
      'Same-day follow-up to the visitors VisitorID identifies. Behavior-triggered email and retargeting. Warm hand-offs to your team.',
  },
];

const FLOW = [
  'IntelID briefs the market every week.',
  'The ICP and the plan absorb the signal.',
  'SearchID ships the content that follows.',
  'IntentID targets paid against intent, not demographics.',
  'VisitorID identifies who shows up.',
  'InboxID closes the loop with same-day follow-up.',
];

export default function IDSuiteLanding() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const eyebrowStyle = {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--p5-text-dim)',
    marginBottom: '20px',
  };

  const sectionHeadStyle = {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.5px',
    color: 'var(--p5-text)',
  };

  const bodyStyle = {
    fontSize: '17px',
    lineHeight: '1.6',
    color: 'var(--p5-text)',
  };

  const dimBodyStyle = {
    fontSize: '17px',
    lineHeight: '1.6',
    color: 'var(--p5-text-dim)',
  };

  const sectionDividerStyle = {
    borderTop: '1px solid var(--p5-surface-border)',
  };

  function ToolCard({ tool }) {
    return (
      <a
        href={tool.href}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          borderTop: '1px solid var(--p5-surface-border)',
          paddingTop: '24px',
        }}
      >
        <div
          style={{
            fontSize: '40px',
            fontWeight: '700',
            color: 'var(--p5-accent)',
            lineHeight: '0.9',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}
        >
          {tool.number}
        </div>
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'var(--p5-text)',
            marginBottom: '12px',
          }}
        >
          {tool.name}
        </h3>
        <p style={{ ...dimBodyStyle, fontSize: '15px', marginBottom: '16px', maxWidth: '40ch' }}>
          {tool.oneLine}
        </p>
        <span
          style={{
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--p5-accent)',
            fontWeight: '600',
          }}
        >
          Learn more →
        </span>
      </a>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      {/* Section 1: Hero */}
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrowStyle}>The P5 toolkit</div>
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '700',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            marginBottom: '24px',
            maxWidth: '18ch',
          }}
        >
          The toolkit we built to run the work.
        </h1>
        <p style={{ ...bodyStyle, fontSize: '20px', maxWidth: '720px' }}>
          Five tools. Three intelligence and identification layers. Two execution layers. All of them in service of one written plan and one accountable primary agency.
        </p>
      </section>

      {/* Section 2: Why we built it */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrowStyle}>Why we built it</div>
          <h2 style={{ ...sectionHeadStyle, marginBottom: '32px' }}>
            The lead-agency model only works if measurement is continuous.
          </h2>
          <p style={{ ...bodyStyle, fontSize: '18px', marginBottom: '20px' }}>
            A primary marketing agency cannot hold the plan across paid, ads, PR, web, and content without seeing what every piece is doing in real time. The off-the-shelf tooling for that work was either too narrow, too expensive, or too detached from the actual marketing.
          </p>
          <p style={{ ...bodyStyle, fontSize: '18px' }}>
            So P5 built its own. The toolkit below is the engine under every P5 engagement. It is not a product line for sale separately. It is what makes the lead-agency model run.
          </p>
        </div>
      </section>

      {/* Section 3: Intelligence & identification */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '64px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={eyebrowStyle}>Intelligence &amp; identification</div>
          <h2 style={{ ...sectionHeadStyle, maxWidth: '24ch' }}>
            Three layers of signal feeding the plan.
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}
        >
          {INTELLIGENCE_TOOLS.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      {/* Section 4: Execution */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '64px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={eyebrowStyle}>Execution</div>
          <h2 style={{ ...sectionHeadStyle, maxWidth: '24ch' }}>
            Two layers of work that ship.
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            maxWidth: '900px',
          }}
        >
          {EXECUTION_TOOLS.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      {/* Section 5: How it feeds the plan */}
      <section style={{ ...sectionDividerStyle, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={eyebrowStyle}>How the toolkit feeds the plan</div>
            <h2 style={{ ...sectionHeadStyle, marginBottom: '40px', maxWidth: '24ch' }}>
              Six steps. One loop. The plan rewrites itself.
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {FLOW.map((line, i) => (
                <li
                  key={line}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '20px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: 'var(--p5-accent)',
                      lineHeight: '1',
                      flexShrink: 0,
                      minWidth: '32px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ ...bodyStyle, fontSize: '18px' }}>{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrowStyle}>The first step</div>
          <h2 style={{ ...sectionHeadStyle, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>
            The toolkit ships with the engagement.
          </h2>
          <p style={{ ...bodyStyle, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            The ID Suite is not a product you buy separately. It is the engine under the Plan of Record. Begin the diagnostic and the toolkit is part of the work from day one.
          </p>
          <a
            href="mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--p5-accent)',
              color: 'var(--p5-bg-deep)',
              padding: '16px 32px',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Begin a Plan of Record
          </a>
        </div>
      </section>
    </div>
  );
}
