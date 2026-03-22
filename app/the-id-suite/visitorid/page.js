export const metadata = {
  alternates: {
    canonical: '/the-id-suite/visitorid/',
  },
  title: 'VisitorID\u2122 | Know Who\u2019s Visiting Your Website | P5 Marketing',
  description:
    'VisitorID identifies anonymous website visitors by name, email, and phone \u2014 scores their purchase intent \u2014 and delivers qualified leads to your CRM every morning. No forms required.',
  openGraph: {
    title: 'VisitorID\u2122 | Know Who\u2019s Visiting Your Website | P5 Marketing',
    description:
      'VisitorID identifies anonymous website visitors by name, email, and phone \u2014 scores their purchase intent \u2014 and delivers qualified leads to your CRM every morning. No forms required.',
  },
};

export default function VisitorIDPage() {
  const steps = [
    {
      number: '01',
      title: 'Identify',
      description:
        'A lightweight tracking pixel is installed on your website. When visitors browse your site, VisitorID\u2122 resolves their identity \u2014 name, email, phone, mailing address, and demographic data \u2014 without requiring a form fill.',
    },
    {
      number: '02',
      title: 'Classify',
      description:
        'Every page a visitor views is mapped to the specific services, procedures, or products they\u2019re researching. You don\u2019t just learn who visited \u2014 you learn exactly what they\u2019re interested in.',
    },
    {
      number: '03',
      title: 'Score',
      description:
        'Our proprietary dual-scoring engine rates each visitor on both purchase intent and identity confidence. Hot leads are separated from casual browsers, and bots and fake records are filtered out automatically.',
    },
    {
      number: '04',
      title: 'Deliver',
      description:
        'Qualified leads arrive in your CRM every morning \u2014 tagged with their intent tier, specific interests, and traffic source. Your sales team starts the day with a prioritized list of people who are actively researching your services.',
    },
  ];

  const benefits = [
    {
      title: 'Real Names & Contact Info',
      description:
        'Not just IP addresses. VisitorID\u2122 delivers actual people with verified email, phone, and mailing address.',
    },
    {
      title: 'Behavioral Intelligence',
      description:
        'Know exactly which services, conditions, or products each visitor researched on your website.',
    },
    {
      title: 'Purchase-Intent Scoring',
      description:
        'Every visitor is ranked from casual browser to ready-to-buy, so your team focuses on the hottest leads first.',
    },
    {
      title: 'Automatic CRM Delivery',
      description:
        'Leads appear in your CRM every morning, tagged and prioritized. No manual work, no data entry.',
    },
    {
      title: 'Spam & Bot Filtering',
      description:
        'Built-in fraud detection keeps fake records, bots, and junk out of your pipeline automatically.',
    },
    {
      title: 'Real-Time Dashboard',
      description:
        'A password-protected dashboard shows who\u2019s visiting, what they\u2019re researching, and how ready they are to convert.',
    },
  ];

  const comparisonRows = [
    {
      capability: 'What you learn',
      standard: 'Page views and session counts',
      visitorid: 'Names, emails, phone numbers, interests',
    },
    {
      capability: 'Lead qualification',
      standard: 'Manual review of form submissions',
      visitorid: 'Automated intent scoring on every visitor',
    },
    {
      capability: 'Spam protection',
      standard: 'None \u2014 fake leads pollute your CRM',
      visitorid: 'Confidence scoring filters bots and fakes',
    },
    {
      capability: 'CRM integration',
      standard: 'Manual export or Zapier',
      visitorid: 'Automatic daily push, tagged and scored',
    },
    {
      capability: 'Requires forms',
      standard: 'Yes \u2014 only captures the 2\u20135% who fill one out',
      visitorid: 'No \u2014 identifies visitors who never fill out a form',
    },
  ];

  const stats = [
    { value: '95%', label: 'of website visitors leave without filling out a form' },
    { value: '24hrs', label: 'from website visit to CRM delivery' },
    { value: '0', label: 'forms required to identify a visitor' },
  ];

  /* ── Styles ── */

  const heroStyles = {
    padding: '80px 20px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, var(--p5-bg-deep) 0%, var(--p5-bg-surface) 100%)',
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
    maxWidth: '720px',
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

  const sectionSubtitleStyles = {
    fontSize: '18px',
    color: 'var(--p5-text-dim)',
    textAlign: 'center',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-32px',
    marginBottom: '48px',
    lineHeight: 1.6,
  };

  /* Problem callout */
  const problemBoxStyles = {
    background: 'rgba(0, 229, 199, 0.05)',
    border: '2px solid var(--p5-accent)',
    borderRadius: 'var(--p5-radius)',
    padding: '40px',
    marginBottom: '48px',
    textAlign: 'center',
  };

  const problemHeadlineStyles = {
    fontSize: '24px',
    fontWeight: 700,
    color: 'var(--p5-text)',
    marginBottom: '16px',
  };

  const problemTextStyles = {
    fontSize: '16px',
    color: 'var(--p5-text-dim)',
    lineHeight: 1.8,
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  /* Steps */
  const stepsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '32px',
    marginBottom: '48px',
  };

  const stepCardStyles = {
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
    padding: '32px',
    position: 'relative',
  };

  const stepNumberStyles = {
    fontSize: '48px',
    fontWeight: 700,
    color: 'rgba(0, 229, 199, 0.15)',
    fontFamily: 'Space Mono, monospace',
    lineHeight: 1,
    marginBottom: '8px',
  };

  const stepTitleStyles = {
    fontSize: '20px',
    fontWeight: 700,
    color: 'var(--p5-accent)',
    marginBottom: '12px',
  };

  const stepDescriptionStyles = {
    fontSize: '15px',
    color: 'var(--p5-text-dim)',
    lineHeight: 1.6,
  };

  /* Benefits grid */
  const benefitsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  };

  const benefitCardStyles = {
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
    padding: '28px 32px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  };

  const benefitIconStyles = {
    fontSize: '20px',
    color: 'var(--p5-accent)',
    lineHeight: 1,
    flexShrink: 0,
    marginTop: '2px',
  };

  const benefitTitleStyles = {
    fontSize: '16px',
    fontWeight: 700,
    color: 'var(--p5-text)',
    marginBottom: '6px',
  };

  const benefitDescriptionStyles = {
    fontSize: '14px',
    color: 'var(--p5-text-dim)',
    lineHeight: 1.6,
  };

  /* Comparison table */
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

  /* Stats bar */
  const statsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
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

  /* CTA */
  const ctaContainerStyles = {
    padding: '80px 20px',
    textAlign: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const ctaTitleStyles = {
    fontSize: '28px',
    fontWeight: 700,
    color: 'var(--p5-text)',
    marginBottom: '16px',
  };

  const ctaSubStyles = {
    fontSize: '16px',
    color: 'var(--p5-text-dim)',
    marginBottom: '32px',
    lineHeight: 1.6,
  };

  const ctaButtonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, var(--p5-accent) 0%, var(--p5-accent-alt) 100%)',
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
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "The ID Suite", "item": "https://p5marketing.com/the-id-suite/"}, {"@type": "ListItem", "position": 3, "name": "VisitorID", "item": "https://p5marketing.com/the-id-suite/visitorid/"}]}'
        }}
      />

      {/* ── Hero ── */}
      <section style={heroStyles}>
        <div style={kickerStyles}>VisitorID™ · Powered by P5 Marketing</div>
        <h1 style={h1Styles}>Your Website Visitors Have Names</h1>
        <p style={subStyles}>
          VisitorID™ identifies anonymous website visitors, scores their purchase intent, and
          delivers qualified leads to your CRM every morning — before they ever fill out a form.
        </p>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ ...sectionStyles, paddingTop: '48px', paddingBottom: '0' }}>
        <div style={statsContainerStyles}>
          {stats.map((stat, idx) => (
            <div key={idx} style={statBoxStyles}>
              <div style={statValueStyles}>{stat.value}</div>
              <div style={statLabelStyles}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Problem ── */}
      <section style={sectionStyles}>
        <div style={problemBoxStyles}>
          <h2 style={problemHeadlineStyles}>You're Already Paying for the Traffic</h2>
          <p style={problemTextStyles}>
            95% of your website visitors leave without ever filling out a form, calling, or booking.
            They researched your services, compared your providers, looked at your results — and
            disappeared. Traditional analytics tell you <em>how many</em> people visited. VisitorID™
            tells you <em>who</em> visited, <em>what</em> they looked at, and <em>how ready</em> they
            are to buy.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ ...sectionStyles, paddingTop: '0' }}>
        <h2 style={sectionTitleStyles}>How VisitorID™ Works</h2>
        <p style={sectionSubtitleStyles}>
          A fully automated, four-stage pipeline that runs every night. No manual work required once
          you're onboarded.
        </p>
        <div style={stepsContainerStyles}>
          {steps.map((step, idx) => (
            <div key={idx} style={stepCardStyles}>
              <div style={stepNumberStyles}>{step.number}</div>
              <h3 style={stepTitleStyles}>{step.title}</h3>
              <p style={stepDescriptionStyles}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What You Get ── */}
      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>What You Get</h2>
        <div style={benefitsContainerStyles}>
          {benefits.map((benefit, idx) => (
            <div key={idx} style={benefitCardStyles}>
              <div style={benefitIconStyles}>✓</div>
              <div>
                <div style={benefitTitleStyles}>{benefit.title}</div>
                <p style={benefitDescriptionStyles}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section style={sectionStyles}>
        <h2 style={sectionTitleStyles}>VisitorID™ vs. Traditional Analytics</h2>
        <div style={tableContainerStyles}>
          <table style={tableStyles}>
            <thead style={tableHeaderStyles}>
              <tr>
                <th style={tableHeaderCellStyles}>Capability</th>
                <th style={tableHeaderCellStyles}>Traditional Analytics</th>
                <th style={tableHeaderCellStyles}>VisitorID™</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={tableRowStyles}>
                  <td style={{ ...tableCellStyles, fontWeight: 600, color: 'var(--p5-text)' }}>
                    {row.capability}
                  </td>
                  <td style={{ ...tableCellStyles, color: 'var(--p5-text-dim)' }}>
                    {row.standard}
                  </td>
                  <td style={{ ...tableCellStyles, color: 'var(--p5-accent)' }}>
                    {row.visitorid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={ctaContainerStyles}>
        <h2 style={ctaTitleStyles}>Ready to See Who's Visiting Your Website?</h2>
        <p style={ctaSubStyles}>
          Schedule a free demo and see real visitor data from a live account. You're already paying
          for the traffic — it's time to know who's showing up.
        </p>
        <a href="/contact/" style={ctaButtonStyles}>
          Schedule a Demo
          <span>→</span>
        </a>
      </section>
    </div>
  );
}
