export const metadata = {
  alternates: {
    canonical: '/terms-of-service/',
  },
  title: 'Terms of Service',
  description:
    'SMS Terms of Service for P5 Marketing — what kinds of messages you can expect, how to opt out by texting STOP, how to get help, and related carrier and rate information.',
  openGraph: {
    title: 'Terms of Service | P5 Marketing',
    description:
      'SMS Terms of Service for P5 Marketing — what kinds of messages you can expect, how to opt out by texting STOP, how to get help, and related carrier and rate information.',
    url: 'https://p5marketing.com/terms-of-service/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
  },
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 24px",
    backgroundColor: "var(--p5-bg-deep)",
    color: "var(--p5-text)",
    fontFamily: '"DM Sans", sans-serif',
    lineHeight: "1.8",
  },
  h1: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "var(--p5-text)",
  },
  lastUpdated: {
    fontSize: "14px",
    color: "var(--p5-text-dim)",
    marginBottom: "48px",
  },
  section: {
    marginBottom: "48px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "var(--p5-accent)",
    marginBottom: "16px",
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
  },
  sectionNumber: {
    color: "var(--p5-accent-alt)",
    fontWeight: "700",
    minWidth: "32px",
  },
  sectionContent: {
    fontSize: "16px",
    color: "var(--p5-text)",
    marginBottom: "12px",
  },
  link: {
    color: "var(--p5-accent)",
    textDecoration: "underline",
  },
  relatedSection: {
    backgroundColor: "var(--p5-bg-surface)",
    padding: "32px",
    borderRadius: "var(--p5-radius)",
    marginTop: "48px",
  },
  relatedTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "var(--p5-accent)",
    marginBottom: "12px",
  },
  relatedItem: {
    marginBottom: "8px",
    fontSize: "15px",
  },
};

export default function TermsOfService() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Terms of Service</h1>
      <div style={styles.lastUpdated}>Last updated: May 20, 2026</div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>1.</span>
          <span>SMS Program Overview</span>
        </div>
        <div style={styles.sectionContent}>
          P5 Marketing: This is simply a brief description of the kinds of messages users can expect to receive when they opt in. You can cancel the SMS service at any time by just texting STOP to 760-497-3986. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you wish to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>2.</span>
          <span>Help, Carriers, and Rates</span>
        </div>
        <div style={styles.sectionContent}>
          If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at{' '}
          <a href="mailto:rdonnell@p5marketing.com" style={styles.link}>
            rdonnell@p5marketing.com
          </a>
          . Carriers are not liable for delayed or undelivered messages. As always, message and data rates may apply for any messages sent to you from us and from us to you. You will receive messages infrequently, once or twice a week. If you have any questions about your text plan or data plan, it&rsquo;s best to contact your wireless provider. If you have any questions regarding privacy, please read our full privacy policy{' '}
          <a href="/privacy-policy/" style={styles.link}>
            here
          </a>
          .
        </div>
      </div>

      <div style={styles.relatedSection}>
        <div style={styles.relatedTitle}>Related Policies</div>
        <div style={styles.relatedItem}>
          <a href="/privacy-policy/" style={styles.link}>
            Privacy Policy
          </a>{' '}
          &mdash; how we collect, use, and protect your personal information.
        </div>
        <div style={styles.relatedItem}>
          <a href="/terms-and-conditions/" style={styles.link}>
            Terms and Conditions
          </a>{' '}
          &mdash; the full terms governing use of our website and services.
        </div>
      </div>
    </div>
  );
}
