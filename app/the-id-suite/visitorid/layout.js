const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'VisitorID\u2122',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'VisitorID\u2122 helps you recover high-value website visitors before they disappear. See who visited, what they researched, and which people are serious enough to send into your CRM automatically.',
  url: 'https://p5marketing.com/the-id-suite/visitorid/',
  category: 'Marketing Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://p5marketing.com/contact/',
  },
};

export default function VisitorIDLayout({ children }) {
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
