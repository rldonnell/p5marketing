'use client';

/**
 * Contact form — client component.
 *
 * Three fields (name, email, phone) + honeypot. POSTs JSON to /api/contact
 * (a Vercel Serverless Function that calls Postmark to email the lead to
 * rdonnell@p5marketing.com). On success, swaps to an inline thank-you state
 * — no /thank-you/ redirect, no SPA route change, no analytics page-view bump.
 */

import { useState } from 'react';

const initialData = {
  name: '',
  email: '',
  phone: '',
  consentMarketing: false,
  consentTransactional: false,
  _hp: '',
};

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function update(field) {
    return (e) => setData((d) => ({ ...d, [field]: e.target.value }));
  }

  function toggle(field) {
    return (e) => setData((d) => ({ ...d, [field]: e.target.checked }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let msg = 'Something went wrong. Please email rdonnell@p5marketing.com directly.';
        try {
          const body = await res.json();
          if (body?.error) msg = body.error;
        } catch {}
        setStatus('error');
        setErrorMsg(msg);
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg(
        'Network error. Please try again, or email rdonnell@p5marketing.com directly.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="p5-contact-success" role="status" aria-live="polite">
        <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 12px', fontFamily: 'DM Sans' }}>
          Got it.
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--p5-text-dim)', margin: 0 }}>
          We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form className="p5-contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — visually hidden but reachable to bots */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <label htmlFor="contact-_hp">Leave this field empty</label>
        <input
          id="contact-_hp"
          name="_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data._hp}
          onChange={update('_hp')}
        />
      </div>

      <div className="p5-contact-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          value={data.name}
          onChange={update('name')}
          disabled={submitting}
        />
      </div>

      <div className="p5-contact-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          inputMode="email"
          value={data.email}
          onChange={update('email')}
          disabled={submitting}
        />
      </div>

      <div className="p5-contact-field">
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          maxLength={32}
          inputMode="tel"
          value={data.phone}
          onChange={update('phone')}
          disabled={submitting}
        />
      </div>

      <fieldset className="p5-contact-consent">
        <legend>Optional — how can we follow up?</legend>

        <label className="p5-contact-consent-item" htmlFor="contact-consent-transactional">
          <input
            id="contact-consent-transactional"
            name="consentTransactional"
            type="checkbox"
            checked={data.consentTransactional}
            onChange={toggle('consentTransactional')}
            disabled={submitting}
          />
          <span>
            I agree to receive <strong>non-marketing</strong> emails, calls, and text
            messages from P5 Marketing related to my inquiry — scheduling, account
            servicing, and other transactional communications. Message frequency
            varies. Message and data rates may apply. Reply STOP to opt out, HELP for
            help. See our{' '}
            <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-and-conditions/" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
            .
          </span>
        </label>

        <label className="p5-contact-consent-item" htmlFor="contact-consent-marketing">
          <input
            id="contact-consent-marketing"
            name="consentMarketing"
            type="checkbox"
            checked={data.consentMarketing}
            onChange={toggle('consentMarketing')}
            disabled={submitting}
          />
          <span>
            I agree to receive <strong>marketing</strong> emails, calls, and text
            messages from P5 Marketing, including promotions, newsletters, offers, and
            updates. Consent is not a condition of purchase. Message frequency varies.
            Message and data rates may apply. Reply STOP to opt out, HELP for help.
            See our{' '}
            <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-and-conditions/" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
            .
          </span>
        </label>

        <p className="p5-contact-consent-note">
          Both boxes are optional. We will not share your phone number or opt-in
          information with third parties for their marketing purposes.
        </p>
      </fieldset>

      {status === 'error' && (
        <p className="p5-contact-error" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="p5-btn p5-btn-primary p5-contact-submit"
        disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Start the Conversation →'}
      </button>
    </form>
  );
}
