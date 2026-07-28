export const metadata = {
  alternates: { canonical: '/the-id-suite/visitorid/' },
  title: 'VisitorID | Anonymous Visitor Identification | P5',
  description:
    'VisitorID identifies up to 60% of anonymous website visitors, scores them by intent, and routes the serious ones to your CRM. The measurement and attribution layer inside a P5 engagement.',
  openGraph: {
    title: 'VisitorID | Anonymous Visitor Identification | P5 Marketing',
    description: 'Anonymous visitors identified, scored, and routed to your CRM. The 95% of traffic that never fills a form, finally visible.',
    url: 'https://p5marketing.com/the-id-suite/visitorid/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — VisitorID' }],
  },
};

export default function VisitorIdPage() {
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
  const eyebrow = { fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--p5-text-dim)', marginBottom: '20px' };
  const sectionHead = { fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.5px', color: 'var(--p5-text)' };
  const body = { fontSize: '17px', lineHeight: '1.6', color: 'var(--p5-text)' };
  const divider = { borderTop: '1px solid var(--p5-surface-border)' };

  const outputs = [
    'Real-time dashboard with intent scoring, traffic sources, and filterable date windows.',
    'High-intent visitors table with names, locations, scores, tier badges, and research interests.',
    'Deep visitor profiles with demographic attributes, intent signals, and page-level browsing history.',
    'Automatic CRM sync with tagged records. No manual exports.',
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrow}>04 &middot; VisitorID</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '24px', maxWidth: '20ch' }}>
          The visitor identification layer.
        </h1>
        <p style={{ ...body, fontSize: '20px', maxWidth: '720px' }}>
          Anonymous website visitors identified, scored, and routed to your CRM. The 95 percent of traffic that leaves without filling out a form, finally visible.
        </p>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>What it does</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Four-stage pipeline. Anonymous traffic to CRM rows.</h2>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            Most prospects do not raise their hand on the first visit. They browse your services, compare options, and leave without filling anything out. Traditional analytics tells you a session happened. VisitorID tells you who showed up, what they researched, and how serious they look.
          </p>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            The pipeline runs four stages. Identify. Classify. Score. Deliver. Records are filtered by confidence so bots and junk do not clutter your CRM. Each visitor is tagged by interest area, intent tier, and source. Qualified records arrive in your CRM automatically with the context your team needs to follow up.
          </p>
          <p style={{ ...body, fontSize: '18px' }}>
            U.S. only. Built on a consented identity graph. Compliance configured per vertical: healthcare-adjacent practices get extra care, including HIPAA-adjacent filtering and minimum-data-footprint defaults.
          </p>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>How the primary agency uses it</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>The measurement and attribution layer that closes the loop with sales.</h2>
          <p style={{ ...body, fontSize: '18px' }}>
            The plan reads from VisitorID continuously. Which channels are producing qualified visitors. Which content is converting. Which prospects called and booked. That read feeds back into the plan and rewrites it. VisitorID is the single most important tool in the toolkit for understanding whether the marketing is actually working.
          </p>
        </div>
      </section>

      <section style={{ ...divider, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ maxWidth: '68ch' }}>
            <div style={eyebrow}>What you get</div>
            <h2 style={{ ...sectionHead, marginBottom: '32px' }}>A dashboard, a table, deep profiles, and CRM sync.</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {outputs.map((line) => (
                <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--p5-accent)', marginTop: '12px', flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ ...body, fontSize: '17px' }}>{line}</span>
                </li>
              ))}
            </ul>
            <p style={{ ...body, color: 'var(--p5-text-dim)', fontSize: '15px', marginTop: '24px' }}>
              Existing free resources (The 97% Problem report, the identity retargeting walkthrough, the pitch deck) are still available as deeper-dive material.
            </p>
          </div>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrow}>The first step</div>
          <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>VisitorID ships with the engagement.</h2>
          <p style={{ ...body, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            VisitorID is the measurement layer under the plan. Begin a Plan of Record and the pixel is on your site within the first week, identification running by week two.
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
