export const metadata = {
  alternates: { canonical: '/the-id-suite/intentid/' },
  title: 'IntentID | Intent Audience Engine | P5',
  description:
    'IntentID builds custom audiences of people actively researching your services and syncs them into the ad platforms where your buyers convert. Inside every P5 engagement.',
  openGraph: {
    title: 'IntentID | Intent Audience Engine | P5 Marketing',
    description: 'Custom intent audiences synced to your paid platforms. Refreshed weekly. The audience layer inside a P5 engagement.',
    url: 'https://p5marketing.com/the-id-suite/intentid/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — IntentID' }],
  },
};

export default function IntentIdPage() {
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
  const eyebrow = { fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--p5-text-dim)', marginBottom: '20px' };
  const sectionHead = { fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.5px', color: 'var(--p5-text)' };
  const body = { fontSize: '17px', lineHeight: '1.6', color: 'var(--p5-text)' };
  const divider = { borderTop: '1px solid var(--p5-surface-border)' };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrow}>03 &middot; IntentID</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '24px', maxWidth: '20ch' }}>
          The audience layer for paid.
        </h1>
        <p style={{ ...body, fontSize: '20px', maxWidth: '720px' }}>
          Custom audiences of people actively researching your services, deployed across Meta, Google, X, TikTok, and LinkedIn. Refreshed weekly.
        </p>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>What it does</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Intent, not demographics.</h2>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            IntentID builds custom intent audiences from third-party data signals across the web. The output is a list of real people in your service area who are demonstrably researching what you sell, refreshed weekly and synced into the ad platforms your buyers actually convert on.
          </p>
          <p style={{ ...body, fontSize: '18px' }}>
            Standard demographic targeting wastes money on people who do not need what you sell. IntentID replaces &ldquo;women aged 35-55 in the Dallas metro&rdquo; with &ldquo;people who have read three pieces of content about your category in the last thirty days.&rdquo; Different list. Different cost-per-lead. Different conversion rate.
          </p>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>How the primary agency uses it</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>The audience layer for the paid half of the plan.</h2>
          <p style={{ ...body, fontSize: '18px' }}>
            Lists feed your paid media buyer&rsquo;s campaigns directly. Audiences refresh as the IntelID briefing surfaces shifts in the category. The plan tracks cost-per-lead from IntentID audiences against cost-per-lead from broader audiences as a continuous test.
          </p>
        </div>
      </section>

      <section style={{ ...divider, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ maxWidth: '68ch' }}>
            <div style={eyebrow}>What you get</div>
            <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Custom audiences synced within 48 to 72 hours.</h2>
            <p style={{ ...body, fontSize: '18px' }}>
              Weekly refresh. Monthly performance comparison against demographic baselines. Plan adjustments based on what the test is saying.
            </p>
          </div>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrow}>The first step</div>
          <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>IntentID ships with the engagement.</h2>
          <p style={{ ...body, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            IntentID is the audience layer inside a P5 engagement. Begin a Plan of Record and the first audiences sync into your paid platforms in week two or three.
          </p>
          <a
            href="mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic"
            style={{ display: 'inline-block', backgroundColor: 'var(--p5-accent)', color: 'var(--p5-bg-deep)', padding: '16px 32px', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}
          >
            Begin a Plan of Record
          </a>
        </div>
      </section>
    </div>
  );
}
