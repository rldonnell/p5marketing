const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://p5marketing.com/the-id-suite/seo-accelerator/#service',
  name: 'SearchID — SEO and GEO Content Engine',
  alternateName: ['SearchID™', 'SEO Accelerator'],
  serviceType: 'Search Engine Optimization and Generative Engine Optimization',
  provider: { '@id': 'https://p5marketing.com/#organization' },
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    '25 years of SEO expertise plus Generative Engine Optimization for ChatGPT, Perplexity, and Claude — paired with content repurposing for owner-operators of $1M–$5M service businesses. The compounding base that lowers your acquisition cost over time.',
  url: 'https://p5marketing.com/the-id-suite/seo-accelerator/',
  category: 'Marketing Technology',
  areaServed: { '@type': 'Country', name: 'United States' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://p5marketing.com/contact/',
  },
};

export default function SEOAcceleratorLayout({ children }) {
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

