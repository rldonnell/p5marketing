export const metadata = {
  alternates: {
    canonical: '/contact/',
  },
  title: 'Start a Fit Conversation | Contact',
  description:
    '30 minutes. No pitch. We ask honest questions about your business, your last agency, and what you are trying to fix. If P5 is a fit, we tell you what we would do. If we are not, we point you somewhere better.',
  openGraph: {
    title: 'Start a Fit Conversation | Contact P5 Marketing',
    description:
      '30 minutes. No pitch. Honest questions, an honest fit assessment, and a senior strategist on the call.',
    url: 'https://p5marketing.com/contact/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing — Start a Fit Conversation' }],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
