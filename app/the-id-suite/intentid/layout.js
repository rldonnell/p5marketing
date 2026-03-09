const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'IntentID™',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'Custom audiences of people actively searching for your services, built from real search behavior captured in the past 48–72 hours and deployed across Meta, Google, X, TikTok, and LinkedIn.',
  url: 'https://p5marketing.com/the-id-suite/intentid/',
  category: 'Marketing Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://p5marketing.com/contact/',
  },
};

export default function IntentIDLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
