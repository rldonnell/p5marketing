export const metadata = {
  alternates: { canonical: '/the-id-suite/intelid/' },
  title: 'IntelID | Weekly Intelligence Briefing | P5',
  description:
    'IntelID is the weekly intelligence read on your market. Competitors, category, public reputation, synthesized into a Monday-morning briefing P5 uses to inform the plan.',
  openGraph: {
    title: 'IntelID | Weekly Intelligence Briefing | P5 Marketing',
    description: 'A single Monday-morning briefing. Synthesized from search, social, and review data. In your inbox by 9 AM.',
    url: 'https://p5marketing.com/the-id-suite/intelid/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — IntelID' }],
  },
};

export default function IntelIdPage() {
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
  const eyebrow = { fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--p5-text-dim)', marginBottom: '20px' };
  const sectionHead = { fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.5px', color: 'var(--p5-text)' };
  const body = { fontSize: '17px', lineHeight: '1.6', color: 'var(--p5-text)' };
  const divider = { borderTop: '1px solid var(--p5-surface-border)' };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrow}>01 &middot; IntelID</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '24px', maxWidth: '20ch' }}>
          The weekly intelligence read on your market.
        </h1>
        <p style={{ ...body, fontSize: '20px', maxWidth: '720px' }}>
          A single Monday-morning briefing on your competitors, your category, and your public reputation. Synthesized from search, social, and review data. In your inbox by 9 AM.
        </p>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>What it does</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Five minutes of reading. The thinking, not the data.</h2>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            IntelID pulls signal from every channel that matters to your category. Competitor search activity. Social mentions. Review velocity. Ad creative changes. Press coverage. P5 synthesizes that signal into a short briefing the owner can read in five minutes over coffee.
          </p>
          <p style={{ ...body, fontSize: '18px' }}>
            The briefing is not a dashboard. It is a written read. What changed. What matters. What we are doing about it in the plan this week. It exists because most owners do not have time to keep up with their own market, and most agencies do not bother to read it for them.
          </p>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>How the primary agency uses it</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>The weekly input to the plan.</h2>
          <p style={{ ...body, fontSize: '18px' }}>
            Significant moves in the competitor set or the category trigger plan adjustments in the next monthly working session. Most weeks the briefing confirms the plan is on track. The weeks it doesn&rsquo;t are the ones that earn their keep.
          </p>
        </div>
      </section>

      <section style={{ ...divider, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ maxWidth: '68ch' }}>
            <div style={eyebrow}>What you get</div>
            <h2 style={{ ...sectionHead, marginBottom: '32px' }}>A 600-to-1000-word briefing in your inbox by 9 AM Monday.</h2>
            <p style={{ ...body, fontSize: '18px' }}>Plain language. No charts. No KPIs. The thinking, not the data.</p>
          </div>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrow}>The first step</div>
          <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>The briefing ships with the engagement.</h2>
          <p style={{ ...body, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            IntelID is the intelligence input to the lead-agency plan. Begin a Plan of Record and the first briefing arrives within two weeks.
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
