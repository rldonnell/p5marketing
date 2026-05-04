export const metadata = {
  alternates: {
    canonical: '/markets/high-trust-high-value/',
  },
  title: 'Who We Work With | The Full P5 Fit Profile',
  description: 'The full P5 fit profile. Who we work with, who we don\'t, and how we decide. Owner-operators of $1M-$5M service businesses where one new customer is worth $10K+.',
  openGraph: {
    title: 'Who We Work With | The Full P5 Fit Profile',
    description: 'The full P5 fit profile. Who we work with, who we don\'t, and how we decide. Owner-operators of $1M-$5M service businesses where one new customer is worth $10K+.',
    url: 'https://p5marketing.com/markets/high-trust-high-value/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
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
    <>
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "Who We Work With", "item": "https://p5marketing.com/markets/"}, {"@type": "ListItem", "position": 3, "name": "Full Fit Profile", "item": "https://p5marketing.com/markets/high-trust-high-value/"}]}'
        }}
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', maxWidth, margin: '0 auto' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
            The Full Fit Profile
          </span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
          Who P5 Works With (and Who We Don&rsquo;t)
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', maxWidth: '700px', lineHeight: '1.6', margin: '0' }}>
          We&rsquo;re honest about fit because misfit engagements waste everyone&rsquo;s time. Here&rsquo;s exactly who P5 is built for, and exactly who we&rsquo;re not.
        </p>
      </section>

      {/* Intro */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '20px' }}>
            P5 fits one specific kind of client: an owner-operator running a $1M&ndash;$5M service business where one new customer is worth real money, and who&rsquo;d rather hand the marketing function to a senior team than manage it themselves. Surgical practices, wedding venues, legal firms, specialty medical, financial advisory, luxury services. The vertical matters less than the profile.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
            What every fit client shares: trust in the team they hired. The expectation is that we run the play, not that you run us. If that lines up with how you operate, you&rsquo;re who we built this for.
          </p>
        </div>
      </section>

      {/* Definition Cards */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>What We Actually Mean</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              Owner-Operator
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              The person making the call has their name on the door. They own the business outcome. They&rsquo;re not a marketing director answering to someone else, and they&rsquo;re not part of a corporate group with its own agency. The decision-maker is the same person who lives or dies by the result.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              $1M&ndash;$5M Revenue, $10K+ Per Customer
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Established enough to invest in marketing seriously. Margins healthy enough to absorb a $10K/month total marketing spend. One booked customer pays for the engagement many times over. Below this range the math doesn&rsquo;t support what we do. Above it, you usually have a senior in-house marketer (which doesn&rsquo;t fit our model).
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              Done Managing Their Last Agency
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Most fit clients have worked with agencies before and were quietly unhappy with the result. Junior account managers, status calls that went nowhere, reports on impressions instead of bookings. They want a senior team that runs the work, not a vendor they have to manage.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              Trusts Experts to Do Their Job
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              Single biggest predictor of whether a P5 engagement succeeds. Our work needs runway to compound &mdash; SEO takes time, content takes time, intent audiences take time to tune. Clients who let us run the play see real results. Clients who want to approve every asset and intervene weekly tend not to. We respect both styles. We just only fit the first one.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              No Senior In-House Marketer
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              When there&rsquo;s a marketing director or VP of marketing already in place, we don&rsquo;t fit. Not because we can&rsquo;t do good work, but because the dynamic doesn&rsquo;t serve anyone. A junior in-house person handling coordination is fine. A senior strategist who needs to own the function isn&rsquo;t.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
              Operations That Can Convert
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              We can drive qualified prospects to your front door. What happens after they call &mdash; the front-desk experience, the consult flow, the follow-through &mdash; has to actually work. We&rsquo;ll tell you honestly during the fit conversation whether your operations need attention before our work pays off.
            </p>
          </div>
        </div>
      </section>

      {/* Example Markets */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>Examples of the Profile</h2>
        <div style={{ textAlign: 'center' }}>
          <div style={chipStyle}>Surgical Practices ($10K&ndash;$100K per consult)</div>
          <div style={chipStyle}>Wedding Venues ($10K&ndash;$30K per booking)</div>
          <div style={chipStyle}>Legal Practices ($5K&ndash;$50K+ per matter)</div>
          <div style={chipStyle}>Luxury Home Services ($10K&ndash;$100K+ per project)</div>
          <div style={chipStyle}>Specialty Medical & Dental ($5K&ndash;$25K+ per case)</div>
          <div style={chipStyle}>Financial Advisory ($5K&ndash;$25K+ AUM)</div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>How We Actually Work With This Profile</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: 'var(--p5-accent)' }}>
              One Senior Team. One Plan. One Number.
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '16px' }}>
              The buyer journey for a $20K wedding booking, a $40K spine procedure, and a $25K legal retainer is structurally identical. Discovery, due diligence, multiple visits to your site, comparisons against competitors, objections that need to be answered.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
              Same engagement model. Different segments, different content, different conversion paths &mdash; tailored to your buyer. We don&rsquo;t reinvent the agency for each vertical. We tailor the messaging.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>What This Looks Like in Practice</h3>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', marginBottom: '8px' }}>The Setup</p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Owner-operated surgical practice. Patients spend two to three weeks researching procedures online. Most visits are anonymous. The practice is competing on referrals and Google ads, losing 70% of interested prospects to providers who follow up faster.
              </p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', marginBottom: '8px' }}>What P5 Owns</p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '12px' }}>
                Senior strategist runs the account. Within 30 days: refreshed service pages, new procedure-specific content, paid ads running on intent audiences (people actually researching the procedure), the <a href="/the-id-suite/" style={{ color: 'var(--p5-accent)' }}>ID Suite</a> live and showing the practice exactly who&rsquo;s engaging with their site.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                Behavior-triggered follow-up sends segmented outreach the same day &mdash; transformation proof to gallery viewers, financing details to pricing-page viewers, a clear path to book the consult for everyone.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', marginBottom: '8px' }}>The Result</p>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>
                The practice converts the people who were going to book anyway but didn&rsquo;t know how. Predictable monthly pipeline. The owner stops worrying about marketing and focuses on patient outcomes. The practice we did this for grew from $1M to $4M in revenue. Track record on file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Tie-In */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>The ID Suite Visibility Layer</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={toolCardStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              IntentID&trade;
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '20px' }}>
              Custom audiences of people actively researching what you sell, deployed into your ad platforms.
            </p>
            <a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
              Learn more →
            </a>
          </div>
          <div style={toolCardStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              VisitorID&trade;
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '20px' }}>
              Visitor intelligence so we know who&rsquo;s engaging with your site and how serious they are.
            </p>
            <a href="/the-id-suite/visitorid/" style={{ color: 'var(--p5-accent)', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
              Learn more →
            </a>
          </div>
          <div style={toolCardStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-accent)' }}>
              InboxID&trade;
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', marginBottom: '20px' }}>
              Behavior-triggered follow-up that keeps you top of mind while interest is hot.
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
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Honestly, You&rsquo;re Probably Not a Fit If&hellip;</h3>
          <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
            You have a senior in-house marketing manager. Your monthly marketing budget is below $10K. You want weekly status calls and to approve every asset. Your average customer is worth less than a few thousand dollars. Your operations can&rsquo;t handle more inbound right now. We&rsquo;ll tell you in the fit conversation if any of that applies. Better to find out in 30 minutes than four months in.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto', textAlign: 'center' }}>
        <a href="/contact/" style={buttonStyle}>
          Start a Fit Conversation
        </a>
      </section>
    </div>
    </>
  );
}