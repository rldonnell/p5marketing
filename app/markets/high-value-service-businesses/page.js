export const metadata = {
  alternates: {
    canonical: '/markets/high-value-service-businesses/',
  },
  title: 'High-Value Service Business Marketing | P5 Marketing',
  description:
    'Marketing for owner-operators of high-value service businesses where one new customer is worth $10K+. Cosmetic surgeons, wedding venues, roofers, HVAC, legal, and more.',
  keywords: [
    'high-value service business marketing',
    'service business marketing agency',
    'owner-operator marketing',
    'high-ticket service marketing',
    'cosmetic surgery marketing',
    'wedding venue marketing',
    'roofing contractor marketing',
    'HVAC marketing',
    'law firm marketing',
  ],
  openGraph: {
    title: 'High-Value Service Business Marketing | P5 Marketing',
    description:
      'Marketing for owner-operators of high-value service businesses where one new customer is worth $10K+. Cosmetic surgeons, wedding venues, roofers, HVAC, legal, and more.',
    url: 'https://p5marketing.com/markets/high-value-service-businesses/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — High-Value Service Business Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Value Service Business Marketing | P5 Marketing',
    description:
      'Marketing for owner-operators of high-value service businesses where one new customer is worth $10K+.',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://p5marketing.com/' },
    { '@type': 'ListItem', position: 2, name: 'Who We Work With', item: 'https://p5marketing.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'High-Value Service Businesses', item: 'https://p5marketing.com/markets/high-value-service-businesses/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://p5marketing.com/markets/high-value-service-businesses/#service',
  name: 'High-Value Service Business Marketing',
  serviceType: 'Marketing Agency Services',
  provider: { '@id': 'https://p5marketing.com/#organization' },
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'Full-service marketing for owner-operators of $1M-$5M high-value service businesses where one new customer is worth $10K or more. Cosmetic and plastic surgery practices, wedding venues, roofing and exterior contractors, HVAC, luxury home renovation, legal practices, specialty medical and dental.',
  url: 'https://p5marketing.com/markets/high-value-service-businesses/',
  category: 'Marketing Agency',
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Owner-operators of high-value service businesses',
    name: '$1M-$5M revenue service businesses with $10K+ customer value',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is high-value service business marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-value service business marketing is the discipline of acquiring customers for businesses where a single new customer is worth $10,000 or more — cosmetic and plastic surgery practices, wedding venues, roofing contractors, HVAC contractors, luxury home renovation, legal practices, and specialty medical or dental. The buyer journey is structurally identical across these verticals: discovery, due diligence, multiple site visits, competitor comparison, and objection handling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is P5 Marketing built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'P5 is built for owner-operators of $1M-$5M service businesses where one new customer justifies the entire marketing investment. The decision-maker has their name on the paperwork, the business can absorb a $10K+ monthly marketing spend, and the owner is ready to trust a senior team to run the work rather than manage a vendor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does P5 work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cosmetic and plastic surgery practices, wedding venues, roofing and exterior contractors, HVAC and mechanical contractors, luxury home renovation and remodeling, legal practices, and specialty medical and dental. The vertical matters less than the economics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does P5 work with businesses that already have an in-house marketing person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An in-house person handling social, vendors, ads, and the website is an asset, not a conflict — we work alongside them and bring the AI tooling and strategic depth they don\'t have time to build. Where it does not work is when a senior marketing executive needs to own the strategy and direct every move.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does P5 cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'P5 engagements start at $10K per month total marketing spend. Below that range, the math does not support what we do.',
      },
    },
  ],
};

export default function HighValueServiceBusinessesPage() {
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

  const verticals = [
    { name: 'Cosmetic & Plastic Surgery Practices', range: '$15K–$60K+ per patient' },
    { name: 'Wedding Venues', range: '$10K–$40K per booking' },
    { name: 'Roofing & Exterior Contractors', range: '$15K–$80K+ per project' },
    { name: 'HVAC & Mechanical Contractors', range: '$10K–$50K+ per install' },
    { name: 'Luxury Home Renovation & Remodeling', range: '$25K–$150K+ per project' },
    { name: 'Legal Practices', range: '$10K–$70K+ per matter' },
    { name: 'Specialty Medical & Dental', range: '$10K–$35K+ per case' },
  ];

  return (
    <>
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section style={{ padding: '80px 24px 40px 24px', maxWidth, margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--p5-accent)', letterSpacing: '0.5px' }}>
              High-Value Service Business Marketing
            </span>
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' }}>
            Your Industry Doesn&rsquo;t Matter.
            <br />
            Your Economics Do.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.7', marginBottom: '20px' }}>
            Whether you&rsquo;re a cosmetic surgeon where a single consultation is worth $15,000+, a wedding venue owner booking $20,000+ events, or a contractor where one project means $40,000 in revenue &mdash; you share the same problem.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.7', marginBottom: '20px' }}>
            Your next customer is online right now, comparing you to your competition, and most of them will leave your site without ever making contact. P5 is built for owner-operators of high-value service businesses where one new customer justifies the entire marketing investment &mdash; and where losing that customer to a competitor is too expensive to ignore.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
            We&rsquo;re honest about fit because misfit engagements waste everyone&rsquo;s time. Here&rsquo;s exactly who P5 is built for, and exactly who we&rsquo;re not.
          </p>
        </section>

        {/* What Every P5 Client Has in Common */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px' }}>What Every P5 Client Has in Common</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
                Owner-Operator
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
                The person making the call has their name on all the paperwork. They own the business outcome &mdash; good or bad. They&rsquo;re not a marketing director answering to someone else, and they&rsquo;re not part of a corporate group with its own agency. The decision-maker is the same person who lives or dies by the result.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
                $1M&ndash;$5M Revenue, $10K+ Per Customer
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
                Established enough to invest in marketing seriously. Margins healthy enough to absorb a minimum $10K/month total marketing spend. One booked customer pays for the engagement many times over. Below this range the math doesn&rsquo;t support what we do. Above it, you often have a full in-house marketing team (which doesn&rsquo;t fit our model).
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--p5-accent)' }}>
                Done Managing Their Last Agency
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
                Most of our clients have worked with agencies before and were quietly unhappy with the result. Junior account managers, status calls that went nowhere, reports on impressions instead of real leads. Our clients want a senior team that runs the work, not another vendor they have to manage.
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
          </div>
        </section>

        {/* Already Have a Marketing Person? */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>Already Have a Marketing Person? Good.</h2>
            <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '20px' }}>
              If you have someone in-house handling marketing &mdash; managing your social media, coordinating vendors, running ads, updating the website &mdash; that&rsquo;s not a conflict. That&rsquo;s an asset. At the $1M&ndash;$5M level, your marketing person is usually wearing five hats and doing their best, often without the strategic depth or AI tooling to compete or keep up at the level your business demands. We work alongside them, not around them.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
              Where it doesn&rsquo;t work is when there&rsquo;s a senior marketing executive who needs to own the strategy and direct every move. That&rsquo;s a different dynamic, and we&rsquo;re upfront about it. But if your marketing person is someone who&rsquo;s ready to collaborate and learn? That&rsquo;s our favorite kind of engagement.
            </p>
          </div>
        </section>

        {/* An Edge Your Competitors Don't Have */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>An Edge Your Competitors Don&rsquo;t Have</h2>
            <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '20px' }}>
              The marketing landscape is changing faster than any single in-house hire can keep up with. AI has raised the ceiling on what&rsquo;s possible &mdash; and raised the learning curve alongside it. The businesses that win in the next five years won&rsquo;t just be running ads and posting content. They&rsquo;ll be using AI-driven tools built specifically for their operation.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.8', marginBottom: '20px' }}>
              P5 isn&rsquo;t a traditional agency. We&rsquo;re owner-operators and coder-builders. We develop custom AI-powered solutions for our clients &mdash; tools that automate follow-up, surface buying intent, personalize outreach, and give you capabilities that a conventional agency wouldn&rsquo;t even know how to spec. Your in-house person doesn&rsquo;t need to become an AI expert. They need a team that already is one.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
              <a href="/the-id-suite/" style={{ color: 'var(--p5-accent)', fontWeight: '600' }}>Explore The ID Suite &rarr;</a>
            </p>
          </div>
        </section>

        {/* Operations That Can Convert */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <div style={{ ...cardStyle, maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '16px' }}>Operations That Can Convert</h2>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              We can drive qualified prospects to your front door. What happens after they call &mdash; the front-desk experience, the consult flow, the follow-through &mdash; has to actually work. We&rsquo;ll tell you honestly during the fit conversation whether your operations need attention before our work pays off.
            </p>
          </div>
        </section>

        {/* Industries That Fit the Profile */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>Industries That Fit the Profile</h2>
          <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '780px' }}>
            The vertical matters less than the economics. Here are examples of high-value service businesses we work with:
          </p>
          <div style={{ textAlign: 'center' }}>
            {verticals.map((v, i) => (
              <div key={i} style={chipStyle}>
                {v.name} &mdash; <span style={{ color: 'var(--p5-text-dim)', fontWeight: '500' }}>{v.range}</span>
              </div>
            ))}
          </div>
        </section>

        {/* One Model, Every Vertical */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>One Model. Every High-Value Vertical.</h2>
            <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0' }}>
              The buyer journey for a $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement is structurally identical. Discovery, due diligence, multiple visits to your site, comparisons against competitors, objections that need to be answered. Same engagement model. Different segments, different content, different conversion paths &mdash; all tailored to your buyer.
            </p>
          </div>
        </section>

        {/* Not a Fit If... */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
          <div style={{ ...cardStyle, backgroundColor: 'rgba(123, 97, 255, 0.05)', borderColor: 'rgba(123, 97, 255, 0.2)', maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '16px' }}>Honestly, You&rsquo;re Probably Not a Fit If&hellip;</h2>
            <ul style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.8', margin: '0 0 16px 0', paddingLeft: '20px' }}>
              <li>You have a senior marketing executive who needs to own the strategy top to bottom.</li>
              <li>Your monthly marketing budget is below $10K.</li>
              <li>You want weekly status calls and to approve every asset.</li>
              <li>Your average customer is worth less than a few thousand dollars.</li>
              <li>Your operations can&rsquo;t handle more inbound right now.</li>
            </ul>
            <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', lineHeight: '1.7', margin: '0' }}>
              We&rsquo;ll tell you in the Fit Conversation if any of that applies. Better to find out in 30 minutes than four months in.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto', textAlign: 'center' }}>
          <a href="/contact/" style={buttonStyle}>
            Start a Fit Conversation
          </a>
        </section>
      </div>
    </>
  );
}
