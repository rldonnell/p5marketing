export const metadata = {
  title: 'Marketing for High-Trust Businesses | P5 Marketing',
  description: 'Intent data marketing built for high-trust, high-ticket businesses. Legal, plastic surgery, wedding venues & luxury services.',
  openGraph: {
    title: 'Marketing for High-Trust Businesses | P5 Marketing',
    description: 'Intent data marketing built for high-trust, high-ticket businesses. Legal, plastic surgery, wedding venues & luxury services.',
  },
};

export default function HighTrustHighValuePage() {
  const sectionPadding = '60px 24px';
  const maxWidth = '1200px';

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 32px',
    backgroundColor: 'var(--p5-accent)',
    color: 'var(--p5-bg-deep)',
    border: 'none',
    borderRadius: 'var(--p5-radius)',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const chipStyle = {
    display: 'inline-block',
    padding: '10px 18px',
    backgroundColor: 'rgba(0, 229, 199, 0.1)',
    border: '1px solid rgba(0, 229, 199, 0.2)',
    borderRadius: 'var(--p5-radius)',
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--p5-text)',
    margin: '8px',
  };

  const cardStyle = {
    padding: '28px',
    backgroundColor: 'var(--p5-bg-surface)',
    border: '1px solid rgba(0, 229, 199, 0.1)',
    borderRadius: 'var(--p5-radius)',
  };

  const toolCardStyle = {
    padding: '32px',
    backgroundColor: 'var(--p5-bg-surface)',
    border: '1px solid rgba(0, 229, 199, 0.1)',
    borderRadius: 'var(--p5-radius)',
    textAlign: 'center',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', maxWidth, margin: '0 auto' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
            Markets We Serve
          </span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
          Built for High-Trust, High-Value Businesses
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', maxWidth: '700px', lineHeight: '1.6', margin: '0' }}>
          If your customers research before they buy and your services start at $5,000 or more, our system was designed specifically for you.
        </p>
      </section>

      {/* Intro */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '20px' }}>
            We work with businesses where a single new client is worth thousands. Customers don't impulse-buy. They research extensively, compare options, read reviews, visit your website multiple times, and talk to trusted advisors. Trust is the deciding factor.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
            Your customers follow predictable research patterns. Our system identifies them during that journey and converts them with the right message at the right time. No volume play. Just the right 50.
          </p>
        </div>
      </section>

      {/* Definition Cards */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>What We Mean</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              High-Trust
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Your prospects don't impulse-buy. They compare providers, read reviews, visit your website multiple times, and talk to people they trust before making a decision.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              High-Value
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Your average engagement is $5,000 to $30,000 or more. You don't need a million leads. You need the right 50.
            </p>
          </div>
        </div>
      </section>

      {/* Example Markets */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Example Markets</h2>
        <div style={{ textAlign: 'center' }}>
          <div style={chipStyle}>Plastic Surgeons ($8K-$25K+)</div>
          <div style={chipStyle}>Wedding Venues ($10K-$30K+)</div>
          <div style={chipStyle}>Law Firms ($5K-$50K+)</div>
          <div style={chipStyle}>Luxury Home Services ($10K-$100K+)</div>
          <div style={chipStyle}>Specialty Dental ($5K-$20K+)</div>
          <div style={chipStyle}>Financial Advisors ($5K-$25K+)</div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>What Makes This Different</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: 'var(--p5-accent)' }}>
              One System. Both Sides of the Sale.
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '16px' }}>
              IntentID™, VisitorID™, and InboxID™ work for B2C (plastic surgeon to patient, venue to couple) and B2B (law firm to corporate client, financial advisor to business owner).
            </p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
              The research behavior is identical. Discovery, due diligence, multiple visits, comparisons, objection handling. Same system. Different verticals.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Example: Scottsdale Plastic Surgeon</h3>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', marginBottom: '8px' }}>The Problem</p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Patients research rhinoplasty and liposuction for 2-3 weeks. Most visits are anonymous. The surgeon loses 70% of interested prospects.
              </p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', marginBottom: '8px' }}>The System at Work</p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '12px' }}>
                <span style={{ color: 'var(--p5-accent)', fontWeight: '600' }}>IntentID™</span> builds an audience of people searching "best rhinoplasty surgeon in Scottsdale" and targets them with procedure pages.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '12px' }}>
                <span style={{ color: 'var(--p5-accent)', fontWeight: '600' }}>VisitorID™</span> identifies 55% of the surgeon's website visitors by name and email when they visit the before/after gallery or pricing page.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                <span style={{ color: 'var(--p5-accent)', fontWeight: '600' }}>InboxID™</span> sends segmented follow-up that same day: transformation proof to gallery viewers, financing options to pricing viewers, and a clear path to book the consult.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', marginBottom: '8px' }}>The Result</p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                The surgeon converts site visitors who were going to book anyway but didn't know how. Predictable pipeline. No expensive, broad-reach ads. No anonymous visitors slipping away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Tie-In */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>The ID Suite</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={toolCardStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              IntentID™
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '20px' }}>
              Find your customers actively searching for what you offer in your market.
            </p>
            <a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
              Learn more →
            </a>
          </div>
          <div style={toolCardStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              VisitorID™
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '20px' }}>
              Know who visited your site and exactly which pages they saw.
            </p>
            <a href="/the-id-suite/visitorid/" style={{ color: 'var(--p5-accent)', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
              Learn more →
            </a>
          </div>
          <div style={toolCardStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              InboxID™
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '20px' }}>
              Follow up with segmented, behavior-driven messaging that moves them to a booked call.
            </p>
            <a href="/the-id-suite/inboxid/" style={{ color: 'var(--p5-accent)', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Not a Fit Box */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <div style={{ ...cardStyle, backgroundColor: 'rgba(123, 97, 255, 0.05)', borderColor: 'rgba(123, 97, 255, 0.2)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Not a Fit?</h3>
          <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
            If your average sale is under $2,000 or your business relies on high-volume, low-cost transactions, our system probably is not the right fit. We're built for outcomes over volume.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto', textAlign: 'center' }}>
        <a href="/contact/" style={buttonStyle}>
          Think Your Business Fits?
        </a>
      </section>
    </div>
  );
}