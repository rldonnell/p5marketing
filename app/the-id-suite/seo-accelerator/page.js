export const metadata = {
  alternates: { canonical: '/the-id-suite/seo-accelerator/' },
  title: 'SearchID | SEO and GEO Content Engine | P5',
  description:
    'SearchID is the SEO and GEO content engine inside a P5 engagement. 25 years of search expertise plus generative engine optimization. Compounding organic traffic you own.',
  keywords: 'SearchID, SEO Accelerator, SEO, GEO, generative engine optimization, content marketing',
  openGraph: {
    title: 'SearchID | SEO and GEO Content Engine | P5 Marketing',
    description: '25 years of search expertise plus generative engine optimization. The execution layer for the content half of a P5 engagement.',
    url: 'https://p5marketing.com/the-id-suite/seo-accelerator/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — SearchID' }],
  },
};

export default function SearchIdPage() {
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
  const eyebrow = { fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--p5-text-dim)', marginBottom: '20px' };
  const sectionHead = { fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.5px', color: 'var(--p5-text)' };
  const body = { fontSize: '17px', lineHeight: '1.6', color: 'var(--p5-text)' };
  const divider = { borderTop: '1px solid var(--p5-surface-border)' };

  const outputs = [
    'Blog posts, service-page enhancements, FAQ content, all mapped to keyword strategy and buyer intent.',
    'GEO structuring on every piece so AI engines can surface and cite it.',
    'Content repurposed into social posts, email segments, and other formats.',
    'Monthly performance report in plain English. Quarterly strategy review with the owner.',
    'Ongoing technical SEO monitoring: site health, Core Web Vitals, schema, crawl errors.',
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrow}>02 &middot; SearchID</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '24px', maxWidth: '18ch' }}>
          The SEO and GEO content engine.
        </h1>
        <p style={{ ...body, fontSize: '20px', maxWidth: '720px' }}>
          The execution layer that turns your expertise into the organic traffic your competitors cannot buy. Built on 25 years of P5 SEO legacy and now optimized for generative engine results.
        </p>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>What it does</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Three jobs. One engine. Compounding results.</h2>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            SearchID does three things. Search engine optimization in the traditional sense: technical site architecture, keyword strategy, on-page work, authority building. Generative engine optimization: structuring content so ChatGPT, Perplexity, Claude, and Google AI Overviews surface and cite it. Content repurposing: turning one cornerstone piece of content into five-to-ten downstream assets across the channels you already use.
          </p>
          <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
            The work compounds. Twelve months in, organic traffic generates qualified leads whether you are running ads that week or not. Eighteen months in, the agency&rsquo;s ad spend is doing less of the heavy lifting because the organic foundation is carrying its share.
          </p>
          <p style={{ ...body, fontSize: '18px' }}>
            Twenty-five years of SEO work behind every decision. We have been doing this since before Google existed.
          </p>
        </div>
      </section>

      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={eyebrow}>How the primary agency uses it</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>The execution engine for the content half of the plan.</h2>
          <p style={{ ...body, fontSize: '18px' }}>
            Topics come from the ICP, the IntelID briefing, and the IntentID audience data. The content that ships gets attributed back through VisitorID so the plan knows which pieces are doing the work.
          </p>
        </div>
      </section>

      <section style={{ ...divider, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ maxWidth: '68ch' }}>
            <div style={eyebrow}>What you get</div>
            <h2 style={{ ...sectionHead, marginBottom: '32px' }}>Content monthly. Performance report monthly. Strategy review quarterly.</h2>
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
          <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>SearchID ships with the engagement.</h2>
          <p style={{ ...body, fontSize: '19px', maxWidth: '60ch', marginBottom: '36px' }}>
            SearchID is the content execution layer inside a P5 engagement. Begin a Plan of Record and the foundation audit runs in week one.
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
