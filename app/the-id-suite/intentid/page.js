export const metadata = {
  alternates: {
    canonical: '/the-id-suite/intentid/',
  },
  title: 'IntentID\u2122 | Intent Data Audience Building | P5 Marketing',
  description:
    'IntentID builds custom audiences from real search behavior in the past 48-72 hours. Deploy across Meta, Google, X, TikTok, and LinkedIn.',
  openGraph: {
    title: 'IntentID\u2122 | Intent Data Audience Building | P5 Marketing',
    description:
      'IntentID builds custom audiences from real search behavior in the past 48-72 hours. Deploy across Meta, Google, X, TikTok, and LinkedIn.',
  },
};

export default function IntentIDPage() {
  const steps = [
    {
      number: '01',
      title: 'We Define Your Search Universe',
      description:
        'We build a keyword and topic map tied to your services, geography, and ideal client profile.',
    },
    {
      number: '02',
      title: 'Intent Signals Are Captured',
      description:
        'Our data partners monitor search behavior across 3.7 million vetted domains. When someone\'s behavior matches your profile, they are flagged.',
    },
    {
      number: '03',
      title: 'Your Audience Is Built',
      description:
        'Matched individuals are compiled into a custom audience file: name, address, email, phone, household income, and the search topics that triggered the match.',
    },
    {
      number: '04',
      title: 'You Deploy Across Platforms',
      description:
        'Upload the audience to Meta, Google, X, TikTok, or LinkedIn. Every ad dollar now targets someone with verified search intent.',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Audience source',
      typical: 'Platform inferred interests',
      intentid: 'Verified search behavior from 3.7M+ domains',
    },
    {
      feature: 'Freshness',
      typical: 'Weeks to months old',
      intentid: '48 to 72 hours',
    },
    {
      feature: 'Match type',
      typical: 'Probabilistic',
      intentid: 'Deterministic',
    },
    {
      feature: 'Geographic precision',
      typical: 'Metro or zip code',
      intentid: 'Household level',
    },
    {
      feature: 'Deployable to',
      typical: 'One platform at a time',
      intentid: 'Meta, Google, X, TikTok, LinkedIn simultaneously',
    },
  ];

  const stats = [
    { value: '3.7M+', label: 'Vetted domain partners' },
    { value: '48-72hr', label: 'Search-to-list cycle' },
    { value: '5', label: 'Platforms supported simultaneously' },
  ];

  const heroStyles = {
    padding: '80px 20px',
    textAlign: 'center',
    background: `linear-gradient(135deg, var(--p5-bg-deep) 0%, var(--p5-bg-surface) 100%)`,
    borderBottom: '1px solid rgba(229, 197, 255, 0.1)',
  };

  const kickerStyles = {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--p5-accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  };

  const h1Styles = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: 700,
    color: 'var(--p5-text)',
    marginTop: '16px',
    marginBottom: '16px',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  };

  const subStyles = {
    fontSize: '18px',
    color: 'var(--p5-text-dim)',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  };

  const sectionStyles = {
    padding: '80px 20px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const sectionTitleStyles = {
    fontSize: '32px',
    fontWeight: 700,
    color: 'var(--p5-text)',
    marginBottom: '48px',
    textAlign: 'center',
  };

  const stepsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    marginBottom: '48px',
  };

  const stepCardStyles = {
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
  };

  const stepNumberStyles = {
    fontSize: '32px',
    fontWeight: 700,
    color: 'var(--p5-accent-alt)',
    fontFamily: 'Space Mono, monospace',
    marginBottom: '12px',
  };

  const stepTitleStyles = {
    fontSize: '18px',
    fontWeight: 700,
    color: 'var(--p5-text)',
    marginBottom: '12px',
  };

  const stepDescriptionStyles = {
    fontSize: '15px',
    color: 'var(--p5-text-dim)',
    lineHeight: 1.6,
  };

  const scenarioBoxStyles = {
    background: 'rgba(0, 229, 199, 0.05)',
    border: '2px solid var(--p5-accent)',
    borderRadius: 'var(--p5-radius)',
    padding: '40px',
    marginTop: '48px',
    marginBottom: '48px',
  };

  const scenarioTitleStyles = {
    fontSize: '18px',
    fontWeight: 700,
    color: 'var(--p5-accent)',
    marginBottom: '16px',
  };

  const scenarioDescriptionStyles = {
    fontSize: '15px',
    color: 'var(--p5-text)',
    lineHeight: 1.8,
  };

  const tableContainerStyles = {
    overflowX: 'auto',
    marginBottom: '48px',
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  };

  const tableHeaderStyles = {
    background: 'var(--p5-bg-surface)',
    borderBottom: '2px solid rgba(0, 229, 199, 0.3)',
  };

  const tableCellStyles = {
    padding: '16px',
    textAlign: 'left',
    borderBottom: '1px solid rgba(229, 197, 255, 0.1)',
  };

  const tableHeaderCellStyles = {
    ...tableCellStyles,
    fontWeight: 700,
    color: 'var(--p5-accent)',
  };

  const tableRowStyles = {
    transition: 'background 0.3s ease',
  };

  const statsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginTop: '48px',
    padding: '40px 20px',
    background: 'var(--p5-bg-surface)',
    borderRadius: 'var(--p5-radius)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
  };

  const statBoxStyles = {
    textAlign: 'center',
  };

  const statValueStyles = {
    fontSize: '32px',
    fontWeight: 700,
    color: 'var(--p5-accent)',
    fontFamily: 'Space Mono, monospace',
    marginBottom: '8px',
  };

  const statLabelStyles = {
    fontSize: '13px',
    color: 'var(--p5-text-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    lineHeight: 1.4,
  };

  const ctaContainerStyles = {
    padding: '80px 20px',
    textAlign: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const ctaButtonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    background: `linear-gradient(135deg, var(--p5-accent) 0%, var(--p5-accent-alt) 100%)`,
    color: 'var(--p5-bg-deep)',
    border: 'none',
    borderRadius: 'var(--p5-radius)',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <div>
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "The ID Suite", "item": "https://p5marketing.com/the-id-suite/"}, {"@type": "ListItem", "position": 3, "name": "IntentID", "item": "https://p5marketing.com/the-id-suite/intentid/"}]}'
        }}
      />
      <section style={heroStyles}>
        <div style={kickerStyles}>IntentID™ . Powered by P5 Marketing</div>
        <h1 style={h1Styles}>IntentID\u2122: Find Ready-to-Buy Customers Through Intent Data</h1>
        <p style={subStyles}>
          IntentID™ captures real search behavior from the last 48 to 72 hours and builds a list of people actively
          looking for what you sell, by name, address, and contact info.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>How It Works</h2>
        <div style={stepsContainerStyles}>
          {steps.map((step, idx) => (
            <div key={idx} style={stepCardStyles}>
              <div style={stepNumberStyles}>{step.number}</div>
              <h3 style={stepTitleStyles}>{step.title}</h3>
              <p style={stepDescriptionStyles}>{step.description}</p>
            </div>
          ))}
        </div>

        <div style={scenarioBoxStyles}>
          <h3 style={scenarioTitleStyles}>See It in Action: A Plastic Surgeon in Scottsdale</h3>
          <p style={scenarioDescriptionStyles}>
            A woman spends three days researching rhinoplasty in Scottsdale. IntentID captures her, she's added to a Meta
            audience within 48 hours, sees the practice's ad, visits the site, and VisitorID identifies her.
          </p>
        </div>

        <h3 style={{ ...sectionTitleStyles, marginTop: '48px' }}>IntentID vs. Standard Platforms</h3>
        <div style={tableContainerStyles}>
          <table style={tableStyles}>
            <thead style={tableHeaderStyles}>
              <tr>
                <th style={tableHeaderCellStyles}>Feature</th>
                <th style={tableHeaderCellStyles}>Typical Platform</th>
                <th style={tableHeaderCellStyles}>IntentID™</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={tableRowStyles}>
                  <td style={{ ...tableCellStyles, fontWeight: 600, color: 'var(--p5-text)' }}>{row.feature}</td>
                  <td style={tableCellStyles}>{row.typical}</td>
                  <td style={{ ...tableCellStyles, color: 'var(--p5-accent)' }}>{row.intentid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={statsContainerStyles}>
          {stats.map((stat, idx) => (
            <div key={idx} style={statBoxStyles}>
              <div style={statValueStyles}>{stat.value}</div>
              <div style={statLabelStyles}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={ctaContainerStyles}>
        <a href="/contact/" style={ctaButtonStyles}>
          Ready to Find the People Already Looking for You?
          <span>→</span>
        </a>
      </section>
    </div>
  );
}
