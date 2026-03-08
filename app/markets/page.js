export const metadata = {
  title: 'Markets Served | P5 Marketing',
  description: 'Proven conversion systems for high-trust, high-ticket businesses. Wedding venues, plastic surgeons, and more.',
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
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
            Markets Served
          </span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
          Proven for High-Trust, High-Ticket Businesses
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          The same conversion engine powers every vertical. Pick your market to see the exact system, segments, and messaging we use.
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
                Find couples actively searching for venues in your area with IntentID™. Identify the ones who visit your site with VisitorID™. Convert them with InboxID™ follow-up so your team can book the tour.
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
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Plastic Surgeons</h2>
              <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Find people researching cosmetic procedures near you with IntentID™. Identify the ones who visit your site with VisitorID™. Convert them with InboxID™ follow-up so your team can book the consult.
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
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Other High-Trust Businesses</h2>
              <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Legal, luxury home services, specialty medical, financial advisory. If a booked call is worth thousands, this system fits. Let's talk about your vertical.
              </p>
              <div style={{ marginTop: '20px', color: 'var(--p5-accent)', fontWeight: '600', fontSize: '14px' }}>
                Learn More →
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}