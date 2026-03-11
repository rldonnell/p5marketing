const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SearchID™',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'SEO, GEO, and content repurposing service that attracts qualified customers through organic search. Powered by 25 years of P5 SEO expertise.',
  url: 'https://p5marketing.com/the-id-suite/searchid/',
  category: 'Marketing Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://p5marketing.com/contact/',
  },
};

export default function SearchIDLayout({ children }) {
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
