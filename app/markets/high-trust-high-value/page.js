// This route is superseded by /markets/high-value-service-businesses/.
// A 301 redirect in vercel.json catches all real traffic before this file
// is ever served. This stub exists only as defense-in-depth so any direct
// hit to the built static asset is non-indexable and points at the new URL.

export const metadata = {
  title: 'Page Moved | P5 Marketing',
  description: 'This page has moved to /markets/high-value-service-businesses/.',
  alternates: {
    canonical: '/markets/high-value-service-businesses/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MovedPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/markets/high-value-service-businesses/" />
      <div
        style={{
          minHeight: '60vh',
          backgroundColor: 'var(--p5-bg-deep)',
          color: 'var(--p5-text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 24px',
          textAlign: 'center',
        }}
      >
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>This page has moved</h1>
          <p style={{ fontSize: '16px', color: 'var(--p5-text-dim)', marginBottom: '24px' }}>
            Continue to{' '}
            <a href="/markets/high-value-service-businesses/" style={{ color: 'var(--p5-accent)', fontWeight: 600 }}>
              /markets/high-value-service-businesses/
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
