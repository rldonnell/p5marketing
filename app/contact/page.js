/**
 * /contact/ — frictionless fit-conversation form.
 *
 * Server component. Renders the page chrome and hands the interactive form
 * off to <ContactForm /> (client component). Page metadata is set by the
 * sibling layout.js — do NOT export `metadata` here, or it will override.
 *
 * Form posts to /api/contact (Vercel Function), which sends the lead via
 * Postmark to rdonnell@p5marketing.com.
 */

import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main className="p5-contact-page">
      <section className="p5-wrap p5-contact-hero">
        <p
          style={{
            fontSize: '13px',
            fontFamily: 'Space Mono',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--p5-accent)',
            margin: '0 0 16px 0',
          }}
        >
          Contact
        </p>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1.15,
            margin: '0 0 24px 0',
            fontFamily: 'DM Sans',
          }}
        >
          Let&rsquo;s work out a time.
        </h1>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--p5-text-dim)',
            maxWidth: '560px',
            margin: '0 0 40px 0',
          }}
        >
          Three quick fields. A senior strategist follows up within one business
          day to find 30 minutes that works.
        </p>

        <ContactForm />

        <p
          style={{
            marginTop: '32px',
            fontSize: '13px',
            color: 'var(--p5-text-dim)',
            maxWidth: '560px',
          }}
        >
          We don&rsquo;t sell or share your information.{' '}
          <a
            href="/privacy-policy/"
            style={{ color: 'var(--p5-accent)', textDecoration: 'underline' }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </main>
  );
}
