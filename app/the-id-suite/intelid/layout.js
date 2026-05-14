const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://p5marketing.com/the-id-suite/intelid/#service',
  name: 'IntelID™',
  serviceType: 'Weekly Competitive & Brand Intelligence Briefing',
  provider: { '@id': 'https://p5marketing.com/#organization' },
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'A single Monday-morning briefing on your competitors, your category, and your public reputation. AI-synthesized, human-curated, and delivered to your inbox by 9 AM every Monday. Five competitors and five social channels tracked. Built for marketing leaders who want to walk into the Monday meeting prepared.',
  url: 'https://p5marketing.com/the-id-suite/intelid/',
  category: 'Marketing Intelligence',
  areaServed: { '@type': 'Country', name: 'United States' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: '300',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '300',
      priceCurrency: 'USD',
      unitText: 'MONTH',
      billingDuration: 1,
      billingIncrement: 1,
    },
    url: 'https://p5marketing.com/contact/?topic=intelid-sample',
  },
};

export default function IntelIDLayout({ children }) {
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
