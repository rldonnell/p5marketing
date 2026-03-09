const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How P5 Marketing\'s Full-Cycle Intent Data Campaign Works',
  description:
    'Four-stage process: Find prospects with IntentID, drive them to your site with targeted ads, identify visitors with VisitorID, and convert them with InboxID.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Find — IntentID',
      text: 'Build a custom audience of people actively searching for your services. IntentID captures real search behavior from the last 48–72 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Drive — Ad Platforms',
      text: 'Deploy your IntentID audience across Meta, Google, X, TikTok, and LinkedIn. Every ad dollar targets someone with verified search intent.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Identify — VisitorID',
      text: 'When prospects visit your website, VisitorID identifies up to 60% of them by name, email, phone, and home address.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Convert — InboxID',
      text: 'Same-day follow-up through retargeting ads and personalized email sequences re-engages identified visitors while your brand is top of mind.',
    },
  ],
};

export default function HowItWorksLayout({ children }) {
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
