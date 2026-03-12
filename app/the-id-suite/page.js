export const metadata = {
  title: 'The ID Suite â SEO Accelerator, IntentID, VisitorID & InboxID | P5 Marketing',
  description:
    'Four proprietary technologies that attract organic traffic, find ready-to-buy prospects, identify anonymous website visitors, and convert them with same-day follow-up. Explore the SEO Accelerator, IntentID, VisitorID, and InboxID.',
  openGraph: {
    title: 'The ID Suite â P5 Marketing',
    description:
      'SEO Accelerator + IntentID + VisitorID + InboxID: the full-cycle intent data stack for high-trust businesses.',
  },
};

export default function IDSuiteLanding() {
  const productCards = [
    {
      title: 'SEO Accelerator',
      category: 'Organic Growth Engine',
      description:
        'SEO, GEO, and content repurposing that attracts qualified customers through organic search. Powered by 25 years of P5 SEO expertise.',
      statValue: '25 Yrs',
      statLabel: 'SEO legacy behind every strategy',
      link: '/the-id-suite/seo-accelerator/',
    },
    {
      title: 'IntentIDâ¢',
      category: 'Audience Building',
      description:
        'Custom audiences of people actively searching for your services, deployed across Meta, Google, X, TikTok, and LinkedIn.',
      statValue: '48-72hr',
      statLabel: 'From search to list',
      link: '/the-id-suite/intentid/',
    },
    {
      title: 'VisitorIDâ¢',
      category: 'Visitor Identification',
      description:
        'Website pixel that identifies up to 60% of visitors by name, email, phone, address, and household income.',
      statValue: 'Up to 60%',
      statLabel: 'Visitor identification rate',
      link: '/the-id-suite/visitorid/',
    },
    {
      title: 'InboxIDâ¢',
      category: 'Conversion Engine',
      description:
        'Same-day follow-up combining retargeting ads and targeted email. Behavior-based sequences re-engage identified visitors while your brand is top of mind.',
      statValue: 'Same-Day',
      statLabel: 'Follow-up to site visitors',
      link: '/the-id-suite/inboxid/',
    },
  ];

  const flowSteps = [
    { text: 'IntentIDâ¢ finds them', order: '01' },
    { text: 'SEO Accelerator attracts them', order: '02' },
    { text: 'Ads drive them', order: '03' },
    { text: 'VisitorIDâ¢ identifies them', order: '04' },
    { text: 'InboxIDâ¢ converts them', order: '05' },
  ];

  const heroStyles = {
    padding: '80px 20px',
    textAlign: 'center',
    background: `linear-gradient(135deg, var(--p5-bg-deep) 0%, var(--p5-bg-surface) 100%)`,
    borderBottom: '1px solid rgba(229, 197, 255, 0.1)',
  };

  const h1Styles = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
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
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  };

  const kickerStyles = {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--p5-accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  };

  const cardsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    padding: '80px 20px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const cardStyles = {
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const cardTitleStyles = {
    fontSize: '24px',
    fontWeight: 700,
    color: 'var(--p5-accent)',
    marginBottom: '8px',
  };

  const cardCategoryStyles = {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--p5-text-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '16px',
  };

  const cardDescriptionStyles = {
    fontSize: '15px',
    color: 'var(--p5-text)',
    lineHeight: 1.6,
    marginBottom: '32px',
    flex: 1,
  };

  const statBoxStyles = {
    background: 'rgba(0, 229, 199, 0.05)',
    border: '1px solid rgba(0, 229, 199, 0.2)',
    borderRadius: 'calc(var(--p5-radius) - 8px)',
    padding: '16px',
    marginBottom: '24px',
    textAlign: 'center',
  };

  const statValueStyles = {
    fontSize: '28px',
    fontWeight: 700,
    color: 'var(--p5-accent)',
    marginBottom: '4px',
    fontFamily: 'Space Mono, monospace',
  };

  const statLabelStyles = {
    fontSize: '12px',
    color: 'var(--p5-text-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  const cardLinkStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--p5-accent)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const betterTogetherStyles = {
    padding: '80px 20px',
    background: 'var(--p5-bg-deep)',
    borderTop: '1px solid rgba(229, 197, 255, 0.1)',
    borderBottom: '1px solid rgba(229, 197, 255, 0.1)',
  };

  const betterTogetherTitleStyles = {
    fontSize: '32px',
    fontWeight: 700,
    color: 'var(--p5-text)',
    textAlign: 'center',
    marginBottom: '16px',
  };

  const betterTogetherSubStyles = {
    fontSize: '16px',
    color: 'var(--p5-text-dim)',
    textAlign: 'center',
    marginBottom: '48px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  };

  const flowContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const flowStepStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: '0 1 auto',
  };

  const flowOrderStyles = {
    fontSize: '24px',
    fontWeight: 700,
    color: 'var(--p5-accent-alt)',
    fontFamily: 'Space Mono, monospace',
    minWidth: '40px',
  };

  const flowTextStyles = {
    fontSize: '15px',
    color: 'var(--p5-text)',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  };

  const flowArrowStyles = {
    color: 'var(--p5-text-dim)',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
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
        <div style={kickerStyles}>The ID Suite</div>
        <h1 style={h1Styles}>Four Tools. One System. Zero Guesswork.</h1>
        <p style={subStyles}>
          The SEO Accelerator attracts organic traffic. IntentIDâ¢ finds your audience. VisitorIDâ¢ identifies your visitors. InboxIDâ¢ converts them. Together, they form
          a closed-loop pipeline that turns anonymous traffic into booked appointments.
        </p>
      </section>

      <section style={cardsContainerStyles}>
        {productCards.map((card, idx) => (
          <div key={idx} style={cardStyles}>
            <h3 style={cardTitleStyles}>{card.title}</h3>
            <div style={cardCategoryStyles}>{card.category}</div>
            <p style={cardDescriptionStyles}>{card.description}</p>
            <div style={statBoxStyles}>
              <div style={statValueStyles}>{card.statValue}</div>
              <div style={statLabelStyles}>{card.statLabel}</div>
            </div>
            <a href={card.link} style={cardLinkStyles}>
              Learn More
              <span>â</span>
            </a>
          </div>
        ))}
      </section>

      <section style={betterTogetherStyles}>
        <h2 style={betterTogetherTitleStyles}>Better Together: The Full Cycle</h2>
        <p style={betterTogetherSubStyles}>
          Each tool works on its own. Together, they create a closed-loop system where every stage feeds the next.
        </p>
        <div style={flowContainerStyles}>
          {flowSteps.map((step, idx) => (
            <div key={idx}>
              <div style={flowStepStyles}>
                <div style={flowOrderStyles}>{step.order}</div>
                <div style={flowTextStyles}>{step.text}</div>
              </div>
              {idx < flowSteps.length - 1 && <div style={flowArrowStyles}>â</div>}
            </div>
          ))}
        </div>
      </section>

      <section style={ctaContainerStyles}>
        <a href="/contact/" style={ctaButtonStyles}>
          See How the ID Suite Works for Your Business
          <span>â</span>
        </a>
      </section>
    </div>
  );
}
