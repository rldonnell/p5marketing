const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'VisitorID™',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'VisitorID identifies anonymous website visitors by name, email, and phone, scores their purchase intent, and delivers qualified leads to your CRM every morning. No forms required.',
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
