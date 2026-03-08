export const metadata = {
  title: "Privacy Policy - P5 Marketing",
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
  effectiveDate: {
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
  note: {
    backgroundColor: "var(--p5-bg-surface)",
    padding: "16px",
    borderRadius: "var(--p5-radius)",
    marginTop: "12px",
    fontSize: "15px",
    color: "var(--p5-text)",
    borderLeft: "4px solid var(--p5-accent)",
  },
  contactSection: {
    backgroundColor: "var(--p5-bg-surface)",
    padding: "32px",
    borderRadius: "var(--p5-radius)",
    marginTop: "48px",
  },
  contactItem: {
    marginBottom: "12px",
    fontSize: "15px",
  },
  contactLabel: {
    color: "var(--p5-accent)",
    fontWeight: "600",
  },
};

export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Privacy Policy</h1>
      <div style={styles.effectiveDate}>
        Effective Date: September 12, 2025
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>1.</span>
          <span>Introduction</span>
        </div>
        <div style={styles.sectionContent}>
          P5 Marketing provides digital marketing and lead-generation services. We are committed to protecting your personal information and ensuring transparency about how we collect, use, and share your data.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>2.</span>
          <span>Information We Collect</span>
        </div>
        <div style={styles.sectionContent}>
          <strong>Contact Information:</strong> Name, email address, phone number
        </div>
        <div style={styles.sectionContent}>
          <strong>Behavioral & Technical Data:</strong> Website visits, browsing activity, IP address, device information, cookie and pixel identifiers
        </div>
        <div style={styles.sectionContent}>
          <strong>Marketing Interaction Data:</strong> Email opens, link clicks, form completions, and ad engagement metrics
        </div>
        <div style={styles.note}>
          We do not collect medical records, diagnosis codes, or treatment information and, therefore, are not a HIPAA-covered entity or business associate.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>3.</span>
          <span>How We Use Information</span>
        </div>
        <div style={styles.sectionContent}>
          We use collected information to identify and segment audiences, deliver personalized advertisements, emails, and marketing communications, improve our websites and campaigns, and comply with legal obligations.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>4.</span>
          <span>How We Share Information</span>
        </div>
        <div style={styles.sectionContent}>
          <strong>Service Providers:</strong> CRM systems, email and SMS platforms, analytics services, and ad networks
        </div>
        <div style={styles.sectionContent}>
          <strong>Advertising Partners:</strong> Retargeting platforms, audience creation networks, and measurement providers
        </div>
        <div style={styles.sectionContent}>
          <strong>Legal & Regulatory Authorities:</strong> When required by law or to protect our rights
        </div>
        <div style={styles.note}>
          We do not sell personal information for money, but some sharing for digital advertising may be considered a sale or share under specific state laws (such as CCPA/CPRA). You may opt out at any time.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>5.</span>
          <span>Cookies and Tracking</span>
        </div>
        <div style={styles.sectionContent}>
          We use cookies, pixels, and similar tracking technologies to enhance user experience and measure campaign performance. You can manage these preferences through your browser settings.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>6.</span>
          <span>Your Privacy Choices</span>
        </div>
        <div style={styles.sectionContent}>
          <strong>Access, Correct, or Delete:</strong> Request to access, correct, or delete your personal information
        </div>
        <div style={styles.sectionContent}>
          <strong>Opt Out of Sale/Sharing:</strong> Decline data sharing for advertising purposes
        </div>
        <div style={styles.sectionContent}>
          <strong>Opt Out of Marketing:</strong> Unsubscribe from marketing emails or send "STOP" to opt out of SMS
        </div>
        <div style={styles.sectionContent}>
          Contact us at privacy@p5marketing.com to exercise these rights.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>7.</span>
          <span>Data Security & Retention</span>
        </div>
        <div style={styles.sectionContent}>
          We maintain reasonable safeguards to protect your personal information. We retain data only as long as necessary to provide our services or comply with legal obligations.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>8.</span>
          <span>Children's Privacy</span>
        </div>
        <div style={styles.sectionContent}>
          Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>9.</span>
          <span>Updates to This Policy</span>
        </div>
        <div style={styles.sectionContent}>
          We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>10.</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div style={styles.contactSection}>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Company:</span> P5 Marketing, Inc.
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>President:</span> Robert L Donnell
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Email:</span> privacy@p5marketing.com
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Phone:</span> (760) 444-3078
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Address:</span> 3000 Meadowview Court, Colleyville, TX 76034, United States
        </div>
      </div>
    </div>
  );
}
