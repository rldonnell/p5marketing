export const metadata = {
  alternates: {
    canonical: '/markets/plastic-surgeons/',
  },
  title: 'Marketing for Plastic Surgeons | P5 Marketing',
  description: 'Marketing for plastic surgeons that finds patients researching procedures. IntentID + VisitorID + InboxID book more consults.',
  openGraph: {
    title: 'Marketing for Plastic Surgeons | P5 Marketing',
    description: 'Marketing for plastic surgeons that finds patients researching procedures. IntentID + VisitorID + InboxID book more consults.',
  },
};

export default function PlasticSurgeonsPage() {
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
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "Markets", "item": "https://p5marketing.com/markets/"}, {"@type": "ListItem", "position": 3, "name": "Plastic Surgeons", "item": "https://p5marketing.com/markets/plastic-surgeons/"}]}'
        }}
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', maxWidth, margin: '0 auto' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
            Plastic Surgeons
          </span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
          Marketing for Plastic Surgeons: Find Patients Already Researching Procedures
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', maxWidth: '700px', lineHeight: '1.6', margin: '0' }}>
          IntentID™ builds a custom audience of people actively researching cosmetic procedures in your area. VisitorID™ identifies up to 60% of visitors on your procedure pages. InboxID™ follows up the same day. Their information goes straight to your CRM so your team can book the consult. U.S. only.
        </p>
      </section>

      {/* Why This Works */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Why This Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <p style={{ fontSize: '18px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '8px' }}>The Problem</p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Patients research for days or weeks. Most visits are anonymous and disappear.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '18px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '8px' }}>The Journey</p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Research <span style={{ color: 'var(--p5-text-dim)' }}>→</span> Consult <span style={{ color: 'var(--p5-text-dim)' }}>→</span> Finance <span style={{ color: 'var(--p5-text-dim)' }}>→</span> Book
            </p>
          </div>
          <div>
            <p style={{ fontSize: '18px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '8px' }}>Our Solution</p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              We capture that interest, segment it by procedure, and run follow-up that moves them to a consult.
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
              Intent audiences plus paid and organic channels send candidates to the right procedure pages.
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
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>InboxID™: Same-day follow-up</h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Retarget by procedure page views. Follow up with consult-driven messaging, FAQs, financing, and proof. Route to scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Segments */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Smart Segments</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Rhinoplasty Visitors</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Consult CTA + before/after gallery
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Show transformation results and make the consultation the clear next step.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Liposuction Visitors</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Candidacy + recovery + financing
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Address top concerns upfront: Am I a candidate?, recovery timeline, and payment options.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Pricing / Financing Visitors</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Consult offer + objection handling
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              They are comparing costs. Lead with value, financing options, and a low-friction consult offer.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Before / After Visitors</h3>
            <p style={{ fontSize: '14px', color: 'var(--p5-accent)', fontWeight: '600', marginBottom: '12px' }}>
              Credibility + results + book now
            </p>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              High intent. Reinforce results with testimonials and make booking frictionless.
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
              More Booked Consults
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              From the procedure researchers already visiting your site.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              Lower CPL
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              By converting post-visit instead of paying for every ready-to-buy click upfront.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              Reputation-Safe Outreach
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
              Only contact visitors who engaged with your content. Every contact has already visited your website.
            </p>
          </div>
        </div>
      </section>


      {/* Cross-links to product pages */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>
          The Tools Behind Your Patient Pipeline
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <a href="/the-id-suite/seo-accelerator/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>SEO Accelerator</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Rank for procedure keywords patients search</p>
          </a>
          <a href="/the-id-suite/intentid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>IntentID\u2122</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Find patients researching procedures now</p>
          </a>
          <a href="/the-id-suite/visitorid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>VisitorID\u2122</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Identify anonymous website visitors by name</p>
          </a>
          <a href="/the-id-suite/inboxid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>InboxID\u2122</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Same-day follow-up to book consults</p>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto', textAlign: 'center' }}>
        <a href="/contact/" style={buttonStyle}>
          See how IntentID™, VisitorID™, and InboxID™ work for plastic surgeons
        </a>
      </section>
    </div>
    </>
  );
}