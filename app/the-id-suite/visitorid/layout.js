const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'VisitorID\u2122',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'Website visitor identification software that recovers anonymous visitors, scores buying intent, and delivers qualified leads to your CRM automatically.',
  url: 'https://p5marketing.com/the-id-suite/visitorid/',
  category: 'Website Visitor Identification Software',
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
