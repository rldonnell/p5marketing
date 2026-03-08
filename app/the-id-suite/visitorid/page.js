export default function VisitorIDPage() {
  const signals = [
    {
      title: 'Geofencing',
      description:
        'Virtual boundaries around physical locations. When a device crosses, the system logs it and links that location signal to a growing identity profile.',
    },
    {
      title: 'IP Intelligence',
      description:
        'Maps IP addresses to real households and businesses with deterministic precision, not the 5 to 10% accuracy that typical tools deliver.',
    },
    {
      title: 'Cookie & Pixel Signals',
      description:
        'Captures what remains of cookie tracking and layers it on top of geofence and IP data, so you never depend on a single disappearing signal.',
    },
  ];

  const comparisonRows = [
    {
      capability: 'Identification method',
      standard: 'Single signal',
      visitorid: 'Three layered signals',
    },
    {
      capability: 'Location awareness',
      standard: 'Zip code or metro area',
      visitorid: 'Specific building via geofence',
    },
    {
      capability: 'Cross-network tracking',
      standard: 'Loses visitor when Wi-Fi changes',
      visitorid: 'Follows device across any network',
    },
    {
      capability: 'Identity validation',
      standard: 'Probabilistic scoring',
      visitorid: 'Deterministic resolution',
    },
    {
      capability: 'Accuracy over time',
      standard: 'Degrades 12 to 15% per year',
      visitorid: 'Self-improving closed feedback loop',
    },
  ];

  const stats = [
    { value: '3.7M+', label: 'Vetted domain partners' },
    { value: '100M+', label: 'Signals verified every 30 days' },
    { value: '6x', label: 'More signal density than avg identity graph' },
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

  const signalsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginBottom: '48px',
  };

  const signalCardStyles = {
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
    padding: '32px',
  };

  const signalTitleStyles = {
    fontSize: '18px',
    fontWeight: 700,
    color: 'var(--p5-accent)',
    marginBottom: '12px',
  };

  const signalDescriptionStyles = {
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
      <section style={heroStyles}>
        <div style={kickerStyles}>VisitorID™ . Powered by P5 Marketing</div>
        <h1 style={h1Styles}>Know Exactly Who's Visiting. Not Just Where They Came From.</h1>
        <p style={subStyles}>
          VisitorID™ combines geofencing, IP intelligence, and cookie signals in a single closed-loop system, giving you
          device-level precision no one else can match.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>Three Signals, One Identity</h2>
        <div style={signalsContainerStyles}>
          {signals.map((signal, idx) => (
            <div key={idx} style={signalCardStyles}>
              <h3 style={signalTitleStyles}>{signal.title}</h3>
              <p style={signalDescriptionStyles}>{signal.description}</p>
            </div>
          ))}
        </div>

        <div style={scenarioBoxStyles}>
          <h3 style={scenarioTitleStyles}>One Person, Three Locations, Always Identified</h3>
          <p style={scenarioDescriptionStyles}>
            Home Wi-Fi to Office Network to Starbucks Wi-Fi. Traditional tools see three strangers. VisitorID sees one
            person across all sessions.
          </p>
        </div>

        <h3 style={{ ...sectionTitleStyles, marginTop: '48px' }}>VisitorID vs. Industry Standard</h3>
        <div style={tableContainerStyles}>
          <table style={tableStyles}>
            <thead style={tableHeaderStyles}>
              <tr>
                <th style={tableHeaderCellStyles}>Capability</th>
                <th style={tableHeaderCellStyles}>Industry Standard</th>
                <th style={tableHeaderCellStyles}>VisitorID™</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={tableRowStyles}>
                  <td style={{ ...tableCellStyles, fontWeight: 600, color: 'var(--p5-text)' }}>{row.capability}</td>
                  <td style={tableCellStyles}>{row.standard}</td>
                  <td style={{ ...tableCellStyles, color: 'var(--p5-accent)' }}>{row.visitorid}</td>
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
          Ready to See Who's Really Visiting Your Website?
          <span>→</span>
        </a>
      </section>
    </div>
  );
}
