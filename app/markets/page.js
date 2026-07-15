export const metadata = {
  alternates: {
    canonical: '/markets/',
  },
  title: 'Who We Work With | P5 Marketing',
  description:
    'P5 is the primary marketing agency for owner-operators of high-value service businesses, $1M to $5M in revenue, where one customer is worth $10K and up and the buying journey takes weeks. Wedding venues, spine and orthopedic surgery, legal, luxury contractors, consultants, cosmetic surgery, and more.',
  openGraph: {
    title: 'Who We Work With | P5 Marketing',
    description:
      'Owner-operators of high-value service businesses. Wedding venues, spine and orthopedic surgery, legal, luxury contractors, consultants, cosmetic surgery, and more.',
    url: 'https://p5marketing.com/markets/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
  },
};

const FIT_CRITERIA = [
  {
    number: '01',
    title: 'Owner-operator.',
    body: 'The person making the call has their name on all the paperwork. They own the outcome. They are not a marketing director answering to someone else, and they are not part of a corporate group with its own agency. The decision-maker is the same person who lives or dies by the result.',
  },
  {
    number: '02',
    title: '$1M–$5M revenue, $10K+ per customer.',
    body: 'Established enough to invest in marketing seriously. Margins healthy enough to absorb a $10K+ monthly marketing spend. One booked customer pays for the engagement many times over. Below this range the math does not support what we do; above it, you usually have a full in-house team that does not fit our model.',
  },
  {
    number: '03',
    title: 'Done managing your last agency.',
    body: 'Most P5 clients have worked with agencies before and were quietly unhappy. Junior account managers between the owner and the work. Status calls that went nowhere. Reports on impressions instead of bookings. P5 clients want a senior team that runs the work, not another vendor they have to manage.',
  },
  {
    number: '04',
    title: 'Trusts experts to do the job.',
    body: 'The single biggest predictor of whether a P5 engagement succeeds. Our work needs runway to compound. SEO takes time. Content takes time. Audience signal takes time to tune. Clients who let us run the play see real results. Clients who want to approve every asset and intervene weekly tend not to.',
  },
];

const VERTICALS = [
  { name: 'Wedding Venues', range: '$10K–$40K per booking', href: '/markets/wedding-venues/' },
  { name: 'Spine & Orthopedic Surgery', range: '$15K–$80K+ per case' },
  { name: 'Roofing & Exterior Contractors', range: '$15K–$80K+ per project' },
  { name: 'HVAC & Mechanical Contractors', range: '$10K–$50K+ per install' },
  { name: 'Luxury Home Renovation & Remodeling', range: '$25K–$150K+ per project' },
  { name: 'Legal Practices', range: '$10K–$70K+ per matter' },
  { name: 'Specialty Medical & Dental', range: '$10K–$35K+ per case' },
  { name: 'Consultants & Professional Services', range: '$10K–$50K per engagement' },
  { name: 'Cosmetic & Plastic Surgery', range: '$15K–$60K+ per patient', href: '/markets/plastic-surgeons/' },
];

const DISQUALIFIERS = [
  'You have a senior marketing executive who needs to own the strategy top to bottom.',
  'Your monthly marketing budget is below $10K.',
  'You want weekly status calls and to approve every asset.',
  'Your average customer is worth less than a few thousand dollars.',
  "Your operations can't handle more inbound right now.",
];

export default function MarketsPage() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const eyebrowStyle = {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--p5-text-dim)',
    marginBottom: '20px',
  };

  const sectionHeadStyle = {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.5px',
    color: 'var(--p5-text)',
    marginBottom: '24px',
  };

  const bodyStyle = {
    fontSize: '17px',
    lineHeight: '1.6',
    color: 'var(--p5-text)',
  };

  const dimBodyStyle = {
    fontSize: '17px',
    lineHeight: '1.6',
    color: 'var(--p5-text-dim)',
  };

  const sectionDividerStyle = {
    borderTop: '1px solid var(--p5-surface-border)',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "Who We Work With", "item": "https://p5marketing.com/markets/"}]}',
        }}
      />

      {/* Section 1: Hero */}
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrowStyle}>Who we work with</div>
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '700',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            marginBottom: '24px',
            maxWidth: '20ch',
          }}
        >
          Your industry doesn&rsquo;t matter. Your economics do.
        </h1>
        <p style={{ ...bodyStyle, fontSize: '20px', maxWidth: '720px' }}>
          P5 is the primary marketing agency for owner-operators where one new customer pays for the engagement many times over.
        </p>
      </section>

      {/* Section 2: Fit profile + lead-agency paragraph */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '64px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={eyebrowStyle}>01 &middot; What every P5 client shares</div>
          <h2 style={sectionHeadStyle}>Four things, in this order.</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
          }}
        >
          {FIT_CRITERIA.map(({ number, title, body }) => (
            <div key={number} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px', alignItems: 'baseline' }}>
              <div
                style={{
                  fontSize: '56px',
                  fontWeight: '700',
                  color: 'var(--p5-accent)',
                  lineHeight: '0.9',
                  letterSpacing: '-1px',
                }}
              >
                {number}
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--p5-text)' }}>
                  {title}
                </h3>
                <p style={{ ...dimBodyStyle, fontSize: '15px', maxWidth: '52ch' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lead-agency paragraph */}
        <div
          style={{
            marginTop: '56px',
            paddingTop: '40px',
            borderTop: '1px solid var(--p5-surface-border)',
          }}
        >
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '24px' }} aria-hidden="true" />
          <div style={eyebrowStyle}>And working together looks like this</div>
          <p style={{ ...bodyStyle, fontSize: '18px', maxWidth: '68ch' }}>
            As your primary marketing agency, P5 defines the ideal customer profile (ICP), writes the plan that ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships, and measures the whole program continuously with anonymous website visitor identification and traffic attribution. The plan is the through line across every vendor in your stack.
          </p>
        </div>
      </section>

      {/* Section 3: The verticals */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '64px 24px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={eyebrowStyle}>02 &middot; Nine verticals, one buyer journey</div>
          <h2 style={{ ...sectionHeadStyle, marginBottom: '24px', maxWidth: '20ch' }}>Different industries. Same buyer journey.</h2>
          <p style={{ ...dimBodyStyle, maxWidth: '64ch' }}>
            The buyer journey for a $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement is structurally identical. Discovery. Due diligence. Multiple visits to your site. Comparisons against competitors. Objections that need to be answered. Weeks of consideration before they call. Same engagement model across all of them. Different segments, different content, different conversion paths, all tailored to your buyer.
          </p>
        </div>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            borderTop: '1px solid var(--p5-surface-border)',
            paddingTop: '40px',
          }}
        >
          {VERTICALS.map(({ name, range, href }) => {
            const inner = (
              <div>
                <p style={{ fontSize: '18px', fontWeight: '600', color: 'var(--p5-text)', marginBottom: '6px' }}>{name}</p>
                <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)' }}>{range}</p>
              </div>
            );
            return (
              <li key={name}>
                {href ? (
                  <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Section 4: If you're not on this list */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '48px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={eyebrowStyle}>03 &middot; Not on the list?</div>
          <h2 style={{ ...sectionHeadStyle, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: '20px' }}>
            The vertical matters less than the economics.
          </h2>
          <p style={dimBodyStyle}>
            If your business fits the four criteria above and the buyer journey looks the same, long, considered, comparative, with one customer paying for the engagement many times over, we should still talk. The categories above are where we have a track record. The fit profile is what qualifies you.
          </p>
        </div>
      </section>

      {/* Section 5: Honest disqualifiers */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '64px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={eyebrowStyle}>04 &middot; Who P5 isn&rsquo;t for</div>
          <h2 style={{ ...sectionHeadStyle, marginBottom: '32px' }}>
            Honestly, you&rsquo;re probably not a fit if&hellip;
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {DISQUALIFIERS.map((line) => (
              <li
                key={line}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--p5-accent)', marginTop: '12px', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span style={{ ...bodyStyle, fontSize: '17px' }}>{line}</span>
              </li>
            ))}
          </ul>
          <p style={{ ...dimBodyStyle, fontSize: '15px', marginTop: '32px' }}>
            We&rsquo;ll tell you in the fit conversation if any of that applies. Better to find out in thirty minutes than four months in.
          </p>
        </div>
      </section>

      {/* Section 6: CTA — Plan of Record */}
      <section style={{ ...containerStyle, ...sectionDividerStyle, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrowStyle}>05 &middot; The first step</div>
          <h2 style={{ ...sectionHeadStyle, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>
            Begin a Plan of Record.
          </h2>
          <p style={{ ...bodyStyle, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            If you fit the profile and want a written marketing plan that ties your full vendor stack together, the Plan of Record is the first paid step. Independent of any ongoing engagement. The plan is the deliverable, and you own it whether or not you continue with P5.
          </p>
          <a
            href="mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--p5-accent)',
              color: 'var(--p5-bg-deep)',
              padding: '16px 32px',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'opacity 0.15s ease',
            }}
          >
            Begin a Plan of Record
          </a>
        </div>
      </section>
    </div>
  );
}
