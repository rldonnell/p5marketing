const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'InboxID™',
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'Same-day conversion engine combining retargeting ads and behavior-based email sequences to convert identified website visitors while your brand is top of mind.',
  url: 'https://p5marketing.com/the-id-suite/inboxid/',
  category: 'Marketing Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://p5marketing.com/contact/',
  },
};

export default function InboxIDLayout({ children }) {
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
