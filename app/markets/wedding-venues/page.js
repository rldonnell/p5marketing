export const metadata = {
  alternates: {
    canonical: '/markets/wedding-venues/',
  },
  title: 'The Booked Venue Program | Wedding Venue Marketing | P5',
  description:
    'A done-for-you system that builds your traffic, identifies your website visitors by name, and converts them into booked weddings. Seven coordinated channels, one venue per metro.',
  openGraph: {
    title: 'The Booked Venue Program | Wedding Venue Marketing | P5 Marketing',
    description:
      'A done-for-you system that keeps your wedding calendar full of high-intent engaged couples. One venue per metro. Houston is taken.',
    url: 'https://p5marketing.com/markets/wedding-venues/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — The Booked Venue Program' }],
  },
};

const CHANNELS = [
  {
    number: '01',
    title: 'SEO & GEO content',
    body: 'Search-optimized content published on your site, targeting the exact keyword gaps our weekly competitive data finds, built to rank in Google and surface in AI answers. Every ranking won sends couples to a site where our pixel is waiting.',
  },
  {
    number: '02',
    title: 'High-intent audience lists',
    body: 'Verified data on newly engaged, actively planning couples in your market, refreshed monthly. Not demographics and guesswork. Couples who are shopping for a venue right now.',
  },
  {
    number: '03',
    title: 'Signature email campaigns',
    body: 'Proven creative like our Wedding Test and "What’s the weather going to be on your wedding day?" sequences. Written by us, sent by us, tuned to get opened, read, and clicked.',
  },
  {
    number: '04',
    title: 'Facebook and Instagram ads',
    body: 'Run by us and targeted to the very same couples on the intent lists, so email and social reinforce each other instead of running blind to separate audiences.',
  },
  {
    number: '05',
    title: 'Website visitor identification',
    body: 'Our pixel tells you who visited your gallery, packages, and tour pages, including the couples who never filled out a form. No interested couple slips away anonymous. U.S. only.',
  },
  {
    number: '06',
    title: 'Social media coaching',
    body: 'Ongoing coaching for your in-house social person, so your organic presence pulls in the same direction as the campaigns instead of posting into the void.',
  },
  {
    number: '07',
    title: 'Weekly Audience Intelligence report',
    body: 'Every Monday: what your competitors posted and how it performed, where they outrank you on Google and how to take those spots, and specific action items assigned to your team by name.',
  },
];

export default function WeddingVenuesPage() {
  const sectionPadding = '60px 24px';
  const maxWidth = '1200px';

  const buttonStyle = {
    display: 'inline-block',
    padding: '16px 32px',
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

  const eyebrowStyle = {
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--p5-accent)',
    letterSpacing: '0.5px',
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

      {/* Hero */}
      <section style={{ padding: '80px 24px', maxWidth, margin: '0 auto' }}>
        <div style={{ marginBottom: '12px' }}>
          <span style={eyebrowStyle}>Wedding Venues</span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px', maxWidth: '18ch' }}>
          The Booked Venue Program
        </h1>
        <p style={{ fontSize: '20px', color: 'var(--p5-text-dim)', maxWidth: '700px', lineHeight: '1.6', margin: '0 0 32px' }}>
          A done-for-you system that keeps your wedding calendar full of high-intent engaged couples. We build your traffic, identify it by name, and convert it. Seven coordinated channels, run by a senior team, exclusively yours in your metro.
        </p>
        <a href="mailto:rdonnell@p5marketing.com?subject=Booked%20Venue%20Program%20%E2%80%94%20claim%20my%20metro" style={buttonStyle}>
          Claim your metro
        </a>
      </section>

      {/* The problem */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>Every open Saturday is revenue you never get back.</h2>
        <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.7', maxWidth: '68ch', margin: '0' }}>
          Most venues wait for The Knot, WeddingWire, and word of mouth to deliver couples, competing with every other venue in town on the same platforms, at the same time, for the same couples. The venues that stay booked do something different: they reach couples earlier, before the shortlist is set, and stay in front of them until the tour is booked.
        </p>
      </section>

      {/* Six channels */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Build. Identify. Convert.</h2>
        <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.7', maxWidth: '68ch', marginBottom: '40px' }}>
          One system that does three things: it builds your traffic (content, audiences, ads), it identifies it (our pixel puts names to anonymous visitors), and it converts it (retargeting, sequences, and a sales-ready hot list). Nothing sits.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {CHANNELS.map(({ number, title, body }) => (
            <div key={number} style={cardStyle}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--p5-accent)', margin: '0 0 12px 0' }}>{number}</p>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>{title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--p5-text-dim)', lineHeight: '1.6', margin: '0' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>Proof, not promises.</h2>
        <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.7', maxWidth: '68ch', margin: '0' }}>
          A Houston-area wedding venue collection started this exact program from a standing start in May 2025. In the first 14 months, verified in their CRM: monthly inquiries grew 15x, from under 10 to over 170. <strong style={{ color: 'var(--p5-text)' }}>690 venue inquiries, 72 scheduled tours, and 20 booked weddings, roughly $240,000 in booked revenue.</strong> 82% of those inquiries came from our campaigns. They expanded the number of venues they operate along the way, and they are still a client today.
        </p>
      </section>

      {/* Exclusivity */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <div style={{ ...cardStyle, padding: '40px', borderColor: 'rgba(0, 229, 199, 0.25)' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>One venue per metro.</h2>
          <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.7', maxWidth: '68ch', margin: '0' }}>
            Everything we build, the audiences, the campaigns, the intelligence, works for you and against your competitors. So we only work with one venue per market. <strong style={{ color: 'var(--p5-text)' }}>Houston is taken.</strong> Dallas, Austin, and San Antonio are open as of this writing.
          </p>
        </div>
      </section>

      {/* The math */}
      <section style={{ padding: sectionPadding, maxWidth, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>The math that matters.</h2>
        <p style={{ fontSize: '17px', color: 'var(--p5-text-dim)', lineHeight: '1.7', maxWidth: '68ch', margin: '0' }}>
          The program is <strong style={{ color: 'var(--p5-text)' }}>$2,500 per month</strong>, month to month, no long-term contract. At a $12,000 average wedding, one additional booking pays for nearly five months of the entire program. Our Houston client booked 20 weddings in 14 months, roughly $240,000 in revenue against about $28,000 in fees. Everything after the first few bookings is profit.
        </p>
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
            <strong style={{ color: 'var(--p5-accent)' }}>IntentID™</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Find couples actively shopping for venues</p>
          </a>
          <a href="/the-id-suite/visitorid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>VisitorID™</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Identify anonymous website visitors by name</p>
          </a>
          <a href="/the-id-suite/inboxid/" style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}>
            <strong style={{ color: 'var(--p5-accent)' }}>InboxID™</strong>
            <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)', margin: '8px 0 0', lineHeight: '1.5' }}>Same-day follow-up to book tours</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px 96px', maxWidth, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>Claim your metro before a competitor does.</h2>
        <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', marginBottom: '32px' }}>
          60 minutes. No commitment beyond the conversation.
        </p>
        <a href="mailto:rdonnell@p5marketing.com?subject=Booked%20Venue%20Program%20%E2%80%94%20claim%20my%20metro" style={buttonStyle}>
          Claim your metro
        </a>
      </section>
    </div>
    </>
  );
}
