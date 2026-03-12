const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SEO Accelerator',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'SEO Accelerator combines 25 years of SEO expertise with GEO optimization and content repurposing to build compounding organic traffic for plastic surgeons, wedding venues, and other high-trust businesses.',
  url: 'https://p5marketing.com/the-id-suite/seo-accelerator/',
  category: 'Marketing Technology',
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

