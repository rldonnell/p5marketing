export const metadata = {
  alternates: {
    canonical: '/markets/',
  },
  title: 'Who We Work With',
  description: 'P5 works with owner-operators of $1M-$5M service businesses where one new customer is worth $10K+. Wedding venues, surgical practices, legal firms, and similar.',
  openGraph: {
    title: 'Who We Work With | P5 Marketing',
    description: 'P5 works with owner-operators of $1M-$5M service businesses where one new customer is worth $10K+. Wedding venues, surgical practices, legal firms, and similar.',
    url: 'https://p5marketing.com/markets/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
  },
};

export default function MarketsPage() {
  const cardStyle = {
    padding: '28px',
    backgroundColor: 'var(--p5-bg-surface)',
    border: '1px solid rgba(0, 229, 199, 0.1)',
    borderRadius: 'var(--p5-radius)',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = {
    ...cardStyle,
    borderColor: 'rgba(0, 229, 199, 0.3)',
    backgroundColor: 'rgba(0, 229, 199, 0.02)',
  };

  return (
    <>
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "Markets", "item": "https://p5marketing.com/markets/"}]}'
        }}
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
            Who We Work With
          </span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
          Owner-Operators of Service Businesses Where One Customer Matters
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          $1M&ndash;$5M revenue. One new customer worth $10K or more. No senior in-house marketer. Done managing your last agency. Trust experts to do the job. If that&rsquo;s you, look at the categories below or read the <a href="/markets/high-trust-high-value/" style={{ color: 'var(--p5-accent)' }}>full fit profile</a>.
        </p>
      </section>

      {/* Market Cards */}
      <section style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {/* Wedding Venues Card */}
          <a
            href="/markets/wedding-venues/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={cardStyle}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Wedding Venues</h2>
              <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Owner-operated venues where one booking is worth $10K+ and the season is decided in the months when couples are searching. We&rsquo;ve filled calendars before. We can do it again.
              </p>
              <div style={{ marginTop: '20px', color: 'var(--p5-accent)', fontWeight: '600', fontSize: '14px' }}>
                Learn More →
              </div>
            </div>
          </a>

          {/* Plastic Surgeons Card */}
          <a
            href="/markets/plastic-surgeons/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={cardStyle}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Surgical Practices</h2>
              <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Cosmetic, spine, and specialty surgical practices where the surgeon owns the business and one consult is worth $10K&ndash;$100K. We&rsquo;ve grown a single practice from $1M to $4M. Track record on file.
              </p>
              <div style={{ marginTop: '20px', color: 'var(--p5-accent)', fontWeight: '600', fontSize: '14px' }}>
                Learn More →
              </div>
            </div>
          </a>

          {/* High-Trust High-Value Card */}
          <a
            href="/markets/high-trust-high-value/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={cardStyle}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Other Owner-Operated Service Businesses</h2>
              <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Legal practices, luxury home services, specialty medical, financial advisory. The vertical doesn&rsquo;t matter as much as the fit profile. If you match the description, we should talk. Read the full fit profile to see if we&rsquo;re right for each other.
              </p>
              <div style={{ marginTop: '20px', color: 'var(--p5-accent)', fontWeight: '600', fontSize: '14px' }}>
                See the Full Fit Profile →
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
    </>
  );
}