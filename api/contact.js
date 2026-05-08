/**
 * /api/contact — Vercel Serverless Function.
 *
 * Receives the contact form POST and emails the lead via Postmark to the
 * configured recipient. Lives at the root /api/ folder so it ships as a
 * Vercel Function alongside the static Next.js export (next.config.js has
 * output: 'export', which disables Next API routes — Vercel functions at
 * root /api/ are served independently).
 *
 * Required env var:
 *   POSTMARK_API_TOKEN — Postmark Server Token (set in Vercel project env)
 *
 * Optional env vars:
 *   CONTACT_FROM     — registered Postmark sender (default: rdonnell@p5marketing.com)
 *   CONTACT_TO       — recipient (default: rdonnell@p5marketing.com)
 *   POSTMARK_STREAM  — message stream (default: outbound)
 */

const POSTMARK_API_TOKEN = process.env.POSTMARK_API_TOKEN;
const FROM = process.env.CONTACT_FROM || 'rdonnell@p5marketing.com';
const TO = process.env.CONTACT_TO || 'rdonnell@p5marketing.com';
const STREAM = process.env.POSTMARK_STREAM || 'outbound';

const EMAIL_RX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // Vercel auto-parses JSON bodies; fall back if it didn't
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  body = body || {};

  const name = trim(body.name);
  const email = trim(body.email);
  const phone = trim(body.phone);
  const honeypot = trim(body._hp);

  // Honeypot — bot filled the hidden field. Pretend success and drop.
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  // Validate
  const errors = [];
  if (!name) errors.push('Name is required.');
  if (!email || !EMAIL_RX.test(email)) errors.push('A valid email is required.');
  if (!phone || phone.length < 4) errors.push('Phone is required.');
  if (errors.length) {
    return res.status(400).json({ error: errors.join(' ') });
  }

  if (!POSTMARK_API_TOKEN) {
    console.error('[contact] POSTMARK_API_TOKEN is not set');
    return res.status(500).json({
      error:
        'Email service is not configured yet. Please email rdonnell@p5marketing.com directly.',
    });
  }

  const submittedAt = new Date().toISOString();
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const ua = req.headers['user-agent'] || 'unknown';

  const subject = `New fit conversation request — ${name}`;
  const textBody =
    `New contact form submission from p5marketing.com/contact/\n\n` +
    `Name:  ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n\n` +
    `Submitted: ${submittedAt}\n` +
    `IP: ${ip}\n` +
    `User-Agent: ${ua}\n`;

  const htmlBody = `
<table style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;line-height:1.5;color:#0f172a;border-collapse:collapse;width:100%;max-width:560px;">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:18px;font-weight:600;">New fit conversation request</td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;width:90px;">Name</td><td style="padding:6px 0;">${esc(name)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
  <tr><td colspan="2" style="padding:18px 0 0;color:#94a3b8;font-size:12px;border-top:1px solid #e2e8f0;">
    Submitted from p5marketing.com/contact/ at ${submittedAt}<br>
    IP ${esc(ip)} · UA ${esc(ua)}
  </td></tr>
</table>`.trim();

  try {
    const r = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_API_TOKEN,
      },
      body: JSON.stringify({
        From: FROM,
        To: TO,
        ReplyTo: `${name} <${email}>`,
        Subject: subject,
        TextBody: textBody,
        HtmlBody: htmlBody,
        MessageStream: STREAM,
      }),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      console.error('[contact] Postmark error', r.status, errText);
      return res.status(502).json({
        error:
          'Could not send your message. Please email rdonnell@p5marketing.com directly.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] handler exception', err);
    return res.status(500).json({
      error:
        'Could not send your message. Please email rdonnell@p5marketing.com directly.',
    });
  }
}

function trim(v) {
  return typeof v === 'string' ? v.trim() : '';
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
