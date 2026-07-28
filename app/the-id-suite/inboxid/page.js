export const metadata = {
  alternates: { canonical: '/the-id-suite/inboxid/' },
  title: 'InboxID | Behavior-Triggered Follow-Up | P5',
  description:
    'InboxID fires automated retargeting and behavior-triggered email the day a prospect engages. The execution layer for the sales-bridge half of a P5 engagement.',
  openGraph: {
    title: 'InboxID | Behavior-Triggered Follow-Up | P5 Marketing',
    description: 'Same-day follow-up to the visitors VisitorID identifies. Warm hand-offs to your team, not cold lists.',
    url: 'https://p5marketing.com/the-id-suite/inboxid/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — InboxID' }],
  },
};

export default function InboxIdPage() {
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
  const eyebrow = { fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--p5-text-dim)', marginBottom: '20px' };
  const sectionHead = { fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.5px', color: 'var(--p5-text)' };
  const body = { fontSize: '17px', lineHeight: '1.6', color: 'var(--p5-text)' };
  const divider = { borderTop: '1px solid var(--p5-surface-border)' };

  const outputs = [
    'Same-day automated email sequences triggered by what the prospect engaged with on the site.',
    'Retargeting audiences refreshed daily across the platforms your buyers actually use.',
    'CRM rows enriched with engagement history so your team picks up the phone with context.',
    'Monthly performance summary tied to bookings, not impressions.',
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrow}>05 &middot; InboxID</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '24px', maxWidth: '22ch' }}>
          Same-day follow-up to the visitors VisitorID identifies.
        </h1>
        <p style={{ ...body, fontSize: '20px', maxWidth: '720px' }}>
          Automated retargeting plus behavior-triggered email, fired the day a prospect engages. Warm hand-offs to your team, not cold lists.
        </p>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>What it does</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Identification turned into action, within hours.</h2>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            InboxID turns visitor identification into action. The day a prospect visits a high-intent page on your site, they enter a behavior-triggered sequence. Retargeting ads keep your brand visible across the platforms they use. The email sequence delivers content tailored to what they engaged with. The hottest prospects flow into your CRM with the context your team needs to pick up the phone.
          </p>
          <p style={{ ...body, fontSize: '18px' }}>
            Same-day matters. Identified prospects who get follow-up within twenty-four hours convert at materially higher rates than those who get follow-up a week later. InboxID exists because the window between &ldquo;they showed interest&rdquo; and &ldquo;they called your competitor&rdquo; is shorter than most owners think.
          </p>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>How the primary agency uses it</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>The execution layer for the sales-bridge half of the plan.</h2>
          <p style={{ ...body, fontSize: '18px' }}>
            Sequences are tuned to the practice&rsquo;s intake process and the conversion patterns VisitorID is reporting. The plan tracks open rates, click-through, and identified-to-booked conversion as continuous reads. InboxID is the tool that turns &ldquo;we know who visited&rdquo; into &ldquo;we booked the consult.&rdquo;
          </p>
        </div>
      </section>

      <section style={{ ...divider, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ maxWidth: '68ch' }}>
            <div style={eyebrow}>What you get</div>
            <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Sequences firing same-day. Engagement history in your CRM. Reporting tied to bookings.</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {outputs.map((line) => (
                <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--p5-accent)', marginTop: '12px', flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ ...body, fontSize: '17px' }}>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrow}>The first step</div>
          <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>InboxID ships with the engagement.</h2>
          <p style={{ ...body, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            InboxID is the follow-up layer inside a P5 engagement. Begin a Plan of Record and the first sequences are running by week three.
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
