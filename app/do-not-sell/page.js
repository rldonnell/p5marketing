export const metadata = {
  title: 'Do Not Sell or Share My Personal Information – P5 Marketing',
  description:
    'Exercise your right to opt out of the sale or sharing of your personal information under applicable privacy laws.',
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
    marginBottom: "48px",
    color: "var(--p5-text)",
  },
  section: {
    marginBottom: "48px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "var(--p5-accent)",
    marginBottom: "16px",
  },
  sectionContent: {
    fontSize: "16px",
    color: "var(--p5-text)",
    marginBottom: "12px",
    lineHeight: "1.8",
  },
  list: {
    marginLeft: "24px",
    marginBottom: "12px",
  },
  listItem: {
    marginBottom: "12px",
    fontSize: "16px",
    color: "var(--p5-text)",
  },
  listLabel: {
    color: "var(--p5-accent)",
    fontWeight: "600",
    marginRight: "8px",
  },
  contactBox: {
    backgroundColor: "var(--p5-bg-surface)",
    padding: "32px",
    borderRadius: "var(--p5-radius)",
    marginTop: "48px",
  },
  contactTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "var(--p5-accent)",
    marginBottom: "24px",
  },
  contactItem: {
    marginBottom: "16px",
    fontSize: "15px",
  },
  contactLabel: {
    color: "var(--p5-accent-alt)",
    fontWeight: "600",
  },
};

export default function DoNotSell() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Do Not Sell or Share My Personal Information</h1>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>What This Means</div>
        <div style={styles.sectionContent}>
          We do not sell personal information for money. However, some data sharing practices associated with digital advertising (such as sharing identifiers with ad platforms for retargeting or audience building) may be considered a sale or share under applicable state laws.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>How to Opt Out</div>
        <div style={styles.list}>
          <div style={styles.listItem}>
            <span style={styles.listLabel}>Email:</span>
            Send a request to privacy@p5marketing.com with the subject "Do Not Sell or Share"
          </div>
          <div style={styles.listItem}>
            <span style={styles.listLabel}>Call:</span>
            (760) 444-3078
          </div>
          <div style={styles.listItem}>
            <span style={styles.listLabel}>Mail:</span>
            P5 Marketing Inc., 3000 Meadowview Court, Colleyville, TX 76034
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>What Happens After You Opt Out</div>
        <div style={styles.sectionContent}>
          Once we receive your opt-out request, we will stop sharing your personal information with third parties for advertising purposes. This does not affect data shared with service providers under contractual obligations to keep your information confidential.
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Verification</div>
        <div style={styles.sectionContent}>
          We may need to verify your identity before processing your request. We will contact you using the information you provide to confirm your request.
        </div>
      </div>

      <div style={styles.contactBox}>
        <div style={styles.contactTitle}>Contact Information</div>
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
          <span style={styles.contactLabel}>Address:</span> 3000 Meadowview Court, Colleyville, TX 76034
        </div>
      </div>
    </div>
  );
}
