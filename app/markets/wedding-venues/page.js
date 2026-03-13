export const metadata = {
  alternates: {
    canonical: '/markets/wedding-venues/',
  },
  title: 'Wedding Venue Marketing | P5 Marketing',
  description: 'Wedding venue marketing that finds couples shopping for venues. IntentID + VisitorID + InboxID book more tours for your venue.',
  openGraph: {
    title: 'Wedding Venue Marketing | P5 Marketing',
    description: 'Wedding venue marketing that finds couples shopping for venues. IntentID + VisitorID + InboxID book more tours for your venue.',
  },
};

export default function WeddingVenuesPage() {
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

  const cardStyle = {
    padding: '28px',
    backgroundColor: 'var(--p5-bg-surface)',
    border: '1px solid rgba(0, 229, 199, 0.1)',
    borderRadius: 'var(--p5-radius)',
  };

  return (
    <>
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "Markets", "item": "https://p5marketing.com/markets/"}, {"@type": "ListItem", "position": 3, "name": "Wedding Venues", "item": "https://p5marketing.com/markets/wedding-venues/"}]}'
        }}
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', maxWidth, margin: '0 auto' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
            Wedding Venues
          </span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
          Wedding Venue Marketing: Find Couples Already Shopping for Venues
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', maxWidth: '700px', lineHeight: '1.6', margin: '0' }}>
          IntentID™ builds a custom audience of couples actively searching for wedding venues in your area. VisitorID™ identifies up to 60% of visitors on your gallery, packages, and tour pages. InboxID™ follows up the same day. Their information goes straight to your CRM so your team can book the tour. U.S. only.
        </p>
      </section>

      {/* Why This Works */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Why This Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <p style={{ fontSize: '18px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '8px' }}>The Problem</p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Couples rarely book on the first visit.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '18px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '8px' }}>The Journey</p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Inspiration <span style={{ color: 'var(--p5-text-dim)' }}>→</span> Shortlist <span style={{ color: 'var(--p5-text-dim)' }}>→</span> Tour <span style={{ color: 'var(--p5-text-dim)' }}>→</span> Book
            </p>
          </div>
          <div>
            <p style={{ fontSize: '18px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '8px' }}>Our Solution</p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              They browse, compare, and come back. Our system captures that interest the moment it hits your site.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div style={cardStyle}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', margin: '0 0 12px 0' }}>01</p>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Drive qualified traffic</h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Meta ads, content marketing, and intent audiences attract couples actively researching venues in your area.
            </p>
          </div>
          <div style={cardStyle}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', margin: '0 0 12px 0' }}>02</p>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>VisitorID™: Know who visited</h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Our pixel identifies up to 60% of your website visitors and delivers their name, email, phone, and home address. U.S. only.
            </p>
          </div>
          <div style={cardStyle}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', margin: '0 0 12px 0' }}>03</p>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>InboxID™: Segment + follow up</h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Retarget visitors based on what they viewed (gallery, pricing, availability, tour page) with tour-first messaging and social proof.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Segments */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Smart Segments</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Gallery Viewers</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              See real weddings + download packages
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              These visitors are in inspiration mode. Show them real events at your venue and invite them to explore packages.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Pricing / Packages Viewers</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Check availability + schedule your tour
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              They are comparing options. Lead with availability and make the tour the obvious next step.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Tour Page Viewers</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Book your tour + limited dates
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              High intent. Use urgency and social proof to close the tour booking.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>FAQ / Policy Viewers</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Answers to your top questions
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Handle objections proactively. Follow up with the information they were looking for plus a clear path to the tour.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Outcomes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              More Booked Tours
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Converting visitors who came back multiple times into real tour bookings.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              Lower Cost per Inquiry
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              By reaching visitors who are already on your site instead of paying upfront for every lead.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              Predictable Pipeline
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Replace hope marketing with a measurable system you can plan around.
            </p>
          </div>
        </div>
      </section>


      {/* Cross-links to product pages */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>
          The Tools Behind Your Booking Pipeline
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <a href="/the-id-suite/seo-accelerator/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>SEO Accelerator</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Rank for venue keywords couples search</p>
          </a>
          <a href="/the-id-suite/intentid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>IntentID\u2122</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Find couples actively shopping for venues</p>
          </a>
          <a href="/the-id-suite/visitorid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>VisitorID\u2122</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Identify anonymous website visitors by name</p>
          </a>
          <a href="/the-id-suite/inboxid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>InboxID\u2122</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Same-day follow-up to book tours</p>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto', textAlign: 'center' }}>
        <a href="/contact/" style={buttonStyle}>
          See how IntentID™, VisitorID™, and InboxID™ work for wedding venues
        </a>
      </section>
    </div>
  );
}