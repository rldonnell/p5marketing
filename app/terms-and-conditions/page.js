export const metadata = {
  title: 'Terms and Conditions | P5 Marketing',
  description:
    'Terms and conditions governing the use of P5 Marketing services and website.',
  openGraph: {
    title: 'Terms and Conditions | P5 Marketing',
    description:
      'Terms and conditions governing the use of P5 Marketing services and website.',
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
  list: {
    marginLeft: "24px",
    marginBottom: "12px",
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "var(--p5-text)",
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

export default function TermsAndConditions() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Terms and Conditions</h1>
      <div style={styles.lastUpdated}>Last updated: March 8, 2025</div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>1.</span>
          <span>Acceptance of Terms</span>
        </div>
        <div style={styles.sectionContent}>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>2.</span>
          <span>Modifications to Terms</span>
        </div>
        <div style={styles.sectionContent}>
          P5 Marketing reserves the right to modify these terms and conditions at any time. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>3.</span>
          <span>Use of the Website</span>
        </div>
        <div style={styles.sectionContent}>
          You agree not to use the website in any way that may cause damage to the website or impair the availability or accessibility of the website. Prohibited behavior includes:
        </div>
        <div style={styles.list}>
          <div style={styles.listItem}>Engaging in fraudulent or illegal activities</div>
          <div style={styles.listItem}>Interfering with the normal operation of the website</div>
          <div style={styles.listItem}>Impersonating or attempting to impersonate any person or entity</div>
          <div style={styles.listItem}>Collecting or tracking personal data without authorization</div>
          <div style={styles.listItem}>Conducting activities that harm P5 Marketing or its operations</div>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>4.</span>
          <span>Intellectual Property</span>
        </div>
        <div style={styles.sectionContent}>
          All content on this website, including text, graphics, logos, images, and software, is the property of P5 Marketing or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>5.</span>
          <span>User Accounts</span>
        </div>
        <div style={styles.sectionContent}>
          If you create an account on our website, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials. P5 Marketing reserves the right to suspend or terminate your account at our discretion.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>6.</span>
          <span>Limitation of Liability</span>
        </div>
        <div style={styles.sectionContent}>
          P5 Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount you have paid to us.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>7.</span>
          <span>Disclaimer of Warranties</span>
        </div>
        <div style={styles.sectionContent}>
          This website and all content are provided on an "as is" and "as available" basis. P5 Marketing makes no warranties, expressed or implied, regarding the website or its content, including any warranty of merchantability or fitness for a particular purpose.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>8.</span>
          <span>Third-Party Links</span>
        </div>
        <div style={styles.sectionContent}>
          Our website may contain links to third-party websites. P5 Marketing is not responsible for the content, accuracy, or practices of linked sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>9.</span>
          <span>Indemnification</span>
        </div>
        <div style={styles.sectionContent}>
          You agree to indemnify and hold harmless P5 Marketing, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the website or violation of these terms.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>10.</span>
          <span>Governing Law</span>
        </div>
        <div style={styles.sectionContent}>
          These terms and conditions are governed by and construed in accordance with the laws of the State of Texas, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>11.</span>
          <span>Termination</span>
        </div>
        <div style={styles.sectionContent}>
          P5 Marketing may terminate or suspend your access to the website at any time, with or without cause, and without notice or liability.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>
          <span style={styles.sectionNumber}>12.</span>
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
          <span style={styles.contactLabel}>Email:</span> robert@p5marketing.com
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Phone:</span> (760) 497-3986
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Address:</span> 3000 Meadowview Court, Colleyville, TX 76034
        </div>
      </div>
    </div>
  );
}
