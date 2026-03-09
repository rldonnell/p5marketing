const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'VisitorID™',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'Website visitor identification technology that identifies up to 60% of anonymous visitors by name, email, phone, and address using three layered signals: geofencing, IP intelligence, and pixel data.',
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
