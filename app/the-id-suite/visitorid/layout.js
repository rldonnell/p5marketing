const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://p5marketing.com/the-id-suite/visitorid/#service',
  name: 'VisitorID\u2122',
  serviceType: 'Website Visitor Identification',
  provider: { '@id': 'https://p5marketing.com/#organization' },
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'VisitorID identifies up to 60% of anonymous website visitors by name, email, phone, address, and household income, scores buying intent, and routes the serious ones to your CRM automatically. Built into every P5 engagement.',
  url: 'https://p5marketing.com/the-id-suite/visitorid/',
  category: 'Marketing Technology',
  areaServed: { '@type': 'Country', name: 'United States' },
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
