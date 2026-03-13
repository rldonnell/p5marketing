export const metadata = {
  title: 'InboxID\u2122 | Same-Day Lead Conversion | P5 Marketing',
  description:
    'InboxID converts identified website visitors with same-day retargeting ads and behavior-based email sequences. Close the loop fast.',
  openGraph: {
    title: 'InboxID\u2122 | Same-Day Lead Conversion | P5 Marketing',
    description:
      'InboxID converts identified website visitors with same-day retargeting ads and behavior-based email sequences. Close the loop fast.',
  },
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'var(--p5-bg-deep)',
    color: 'var(--p5-text)',
    fontFamily: 'DM Sans, sans-serif',
    overflow: 'hidden',
  },
  hero: {
    position: 'relative',
    padding: '80px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(rgba(123, 97, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 97, 255, 0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  kicker: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--p5-accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '20px',
  },
  headline: {
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, var(--p5-text) 0%, var(--p5-accent) 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtext: {
    fontSize: '18px',
    color: 'var(--p5-text-dim)',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
  },
  section: {
    padding: '80px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '60px',
    textAlign: 'center',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  },
  stepCard: {
    padding: '40px',
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
    position: 'relative',
  },
  stepNumber: {
    fontSize: '48px',
    fontWeight: '700',
    color: 'var(--p5-accent)',
    marginBottom: '16px',
    fontFamily: 'Space Mono, monospace',
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  stepDescription: {
    fontSize: '14px',
    color: 'var(--p5-text-dim)',
    lineHeight: '1.6',
  },
  differentiatorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
  },
  differentiatorCard: {
    padding: '32px',
    background: 'var(--p5-bg-surface)',
    border: '1px solid rgba(229, 197, 255, 0.1)',
    borderRadius: 'var(--p5-radius)',
  },
  differentiatorIcon: {
    fontSize: '32px',
    marginBottom: '16px',
  },
  differentiatorTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  differentiatorText: {
    fontSize: '14px',
    color: 'var(--p5-text-dim)',
    lineHeight: '1.6',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '60px',
  },
  statBox: {
    padding: '40px',
    background: 'rgba(0, 229, 199, 0.05)',
    border: '1px solid rgba(0, 229, 199, 0.2)',
    borderRadius: 'var(--p5-radius)',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '48px',
    fontWeight: '700',
    color: 'var(--p5-accent)',
    marginBottom: '12px',
    fontFamily: 'Space Mono, monospace',
  },
  statLabel: {
    fontSize: '14px',
    color: 'var(--p5-text-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  ctaSection: {
    padding: '80px 24px',
    background: 'var(--p5-bg-surface)',
    textAlign: 'center',
    borderTop: '1px solid rgba(229, 197, 255, 0.1)',
  },
  ctaHeadline: {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  ctaText: {
    fontSize: '18px',
    color: 'var(--p5-text-dim)',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '16px 40px',
    background: 'linear-gradient(135deg, var(--p5-accent) 0%, var(--p5-accent-alt) 100%)',
    color: '#000',
    textDecoration: 'none',
    borderRadius: 'var(--p5-radius)',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: 'none',
    cursor: 'pointer',
  },
};

export default function InboxIDPage() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}></div>
        <div style={styles.heroContent}>
          <div style={styles.kicker}>InboxID™ · Powered by P5 Marketing</div>
          <h1 style={styles.headline}>
            InboxID™: Convert Identified Visitors With Same-Day Follow-Up
          </h1>
          <p style={styles.subtext}>
            Behavior-based follow-up that keeps your brand visible through retargeting ads and targeted email. Same-day outreach to visitors who already showed interest in your business.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepsGrid}>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>1</div>
            <h3 style={styles.stepTitle}>Visitor Identified</h3>
            <p style={styles.stepDescription}>
              A prospect lands on your website and we capture their identity along with the pages they viewed.
            </p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>2</div>
            <h3 style={styles.stepTitle}>Behavior Analysis</h3>
            <p style={styles.stepDescription}>
              Our system analyzes their browsing behavior to understand what they're interested in.
            </p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>3</div>
            <h3 style={styles.stepTitle}>Multi-Channel Follow-Up</h3>
            <p style={styles.stepDescription}>
              Triggered sequence launches immediately: retargeting ads and targeted email, all relevant to the pages they viewed.
            </p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>4</div>
            <h3 style={styles.stepTitle}>Nurture & Convert</h3>
            <p style={styles.stepDescription}>
              Engaged prospects automatically graduate to ongoing nurture programs that move them toward a closed deal.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why It Works</h2>
        <div style={styles.differentiatorGrid}>
          <div style={styles.differentiatorCard}>
            <div style={styles.differentiatorIcon}>⚡</div>
            <h3 style={styles.differentiatorTitle}>Same-Day Response</h3>
            <p style={styles.differentiatorText}>
              Outreach triggered within hours of site visit, while interest is hottest and top-of-mind.
            </p>
          </div>
          <div style={styles.differentiatorCard}>
            <div style={styles.differentiatorIcon}>🎯</div>
            <h3 style={styles.differentiatorTitle}>Behavior-Based Targeting</h3>
            <p style={styles.differentiatorText}>
              Every message is relevant to what they viewed. No generic templates, no mass blasting.
            </p>
          </div>
          <div style={styles.differentiatorCard}>
            <div style={styles.differentiatorIcon}>📊</div>
            <h3 style={styles.differentiatorTitle}>Short, Focused Sequences</h3>
            <p style={styles.differentiatorText}>
              2-3 touches per sequence keeps inboxes clean while maintaining presence. Easy opt-out for everyone.
            </p>
          </div>
          <div style={styles.differentiatorCard}>
            <div style={styles.differentiatorIcon}>🔀</div>
            <h3 style={styles.differentiatorTitle}>Multi-Channel Presence</h3>
            <p style={styles.differentiatorText}>
              Retargeting ads + email creates full-cycle visibility from first search to closed deal.
            </p>
          </div>
          <div style={styles.differentiatorCard}>
            <div style={styles.differentiatorIcon}>🛡️</div>
            <h3 style={styles.differentiatorTitle}>Brand-Safe Approach</h3>
            <p style={styles.differentiatorText}>
              Built on identified site visitors who have already engaged with your website. No random outreach to strangers.
            </p>
          </div>
          <div style={styles.differentiatorCard}>
            <div style={styles.differentiatorIcon}>🔄</div>
            <h3 style={styles.differentiatorTitle}>Conversion Engine</h3>
            <p style={styles.differentiatorText}>
              Graduates engaged contacts to nurture programs designed to close deals, not just gather leads.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.section}>
        <div style={styles.statsGrid}>
          <div style={styles.statBox}>
            <div style={styles.statValue}>Same-Day</div>
            <div style={styles.statLabel}>Follow-Up Speed</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>2–3</div>
            <div style={styles.statLabel}>Touches Per Sequence</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>2</div>
            <div style={styles.statLabel}>Channels (Ads + Email)</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>100%</div>
            <div style={styles.statLabel}>Behavior-Based Targeting</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaHeadline}>Ready to Convert Your Visitors?</h2>
        <p style={styles.ctaText}>
          Start converting identified site visitors into customers with behavior-based follow-up.
        </p>
        <a href="/contact/" style={styles.ctaButton}>
          Get Started
        </a>
      </section>
    </div>
  );
}
