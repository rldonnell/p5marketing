/**
 * /api/contact — Vercel Serverless Function.
 *
 * Receives the contact form POST, emails the lead via Postmark, and upserts
 * the lead into GoHighLevel with A2P consent flags as tags + custom fields
 * and a full audit-trail Note. Lives at the root /api/ folder so it ships
 * as a Vercel Function alongside the static Next.js export (next.config.js
 * has output: 'export', which disables Next API routes — Vercel functions
 * at root /api/ are served independently).
 *
 * Required env vars:
 *   POSTMARK_API_TOKEN — Postmark Server Token
 *
 * Recommended env vars (GHL sync — gracefully skipped if missing):
 *   GHL_API_TOKEN    — GoHighLevel Private Integration Token (pit-...)
 *   GHL_LOCATION_ID  — GoHighLevel sub-account / location ID
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

const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

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
  const consentMarketing = body.consentMarketing === true;
  const consentTransactional = body.consentTransactional === true;

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

  const yn = (v) => (v ? 'YES' : 'no');

  const subject = `New fit conversation request — ${name}`;
  const textBody =
    `New contact form submission from p5marketing.com/contact/\n\n` +
    `Name:  ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n\n` +
    `Consent — Transactional (non-marketing): ${yn(consentTransactional)}\n` +
    `Consent — Marketing:                     ${yn(consentMarketing)}\n\n` +
    `Submitted: ${submittedAt}\n` +
    `IP: ${ip}\n` +
    `User-Agent: ${ua}\n`;

  const htmlBody = `
<table style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;line-height:1.5;color:#0f172a;border-collapse:collapse;width:100%;max-width:560px;">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:18px;font-weight:600;">New fit conversation request</td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;width:90px;">Name</td><td style="padding:6px 0;">${esc(name)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
  <tr><td style="padding:6px 12px 6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
  <tr><td colspan="2" style="padding:14px 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">A2P / consent</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Transactional</td><td style="padding:4px 0;">${consentTransactional ? '<strong style="color:#0f766e;">YES</strong>' : '<span style="color:#94a3b8;">not selected</span>'}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Marketing</td><td style="padding:4px 0;">${consentMarketing ? '<strong style="color:#0f766e;">YES</strong>' : '<span style="color:#94a3b8;">not selected</span>'}</td></tr>
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

    // Best-effort sync to GoHighLevel. Never blocks success — Postmark already
    // sent the lead. Logs failures for manual reconciliation.
    await pushLeadToGhl({
      name,
      email,
      phone,
      consentMarketing,
      consentTransactional,
      submittedAt,
      ip,
      ua,
    });

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

/**
 * Best-effort sync of a lead into GoHighLevel.
 *
 *  1. Upsert contact (matched by email/phone) with name + source + tags +
 *     custom field values capturing the A2P consent state.
 *  2. Always write a Note on the contact with the full audit record
 *     (timestamp, IP, user-agent, which boxes were checked) — even when
 *     consent was NOT given, so we can prove the prompt was shown and
 *     declined.
 *
 * Never throws. Silently no-ops if GHL env vars are not configured. Logs
 * failures so we can reconcile from the Postmark email if needed.
 */
async function pushLeadToGhl({
  name,
  email,
  phone,
  consentMarketing,
  consentTransactional,
  submittedAt,
  ip,
  ua,
}) {
  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.warn('[contact] GHL env vars missing — skipping GHL sync');
    return;
  }

  const [firstName, ...rest] = name.split(/\s+/).filter(Boolean);
  const lastName = rest.join(' ');

  const tags = ['lead-source-contact-form'];
  if (consentMarketing) tags.push('a2p-marketing-consent');
  if (consentTransactional) tags.push('a2p-transactional-consent');

  // Field keys must match the custom-field keys created in GHL
  // (Settings → Custom Fields → Contacts).
  const customFields = [
    { key: 'a2p_marketing_consent', field_value: consentMarketing ? 'yes' : 'no' },
    { key: 'a2p_marketing_consent_timestamp', field_value: consentMarketing ? submittedAt : '' },
    { key: 'a2p_marketing_consent_ip', field_value: consentMarketing ? ip : '' },
    { key: 'a2p_transactional_consent', field_value: consentTransactional ? 'yes' : 'no' },
    { key: 'a2p_transactional_consent_timestamp', field_value: consentTransactional ? submittedAt : '' },
    { key: 'a2p_transactional_consent_ip', field_value: consentTransactional ? ip : '' },
  ];

  const ghlHeaders = {
    Authorization: `Bearer ${GHL_API_TOKEN}`,
    Version: GHL_API_VERSION,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    // 1. Upsert contact
    const upsertResp = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: ghlHeaders,
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName: firstName || name,
        lastName: lastName || '',
        email,
        phone,
        source: 'p5marketing.com/contact/',
        tags,
        customFields,
      }),
    });

    if (!upsertResp.ok) {
      const txt = await upsertResp.text().catch(() => '');
      console.error('[contact] GHL upsert failed', upsertResp.status, txt);
      return;
    }

    const upsertJson = await upsertResp.json().catch(() => ({}));
    const contactId =
      upsertJson?.contact?.id ||
      upsertJson?.id ||
      upsertJson?.new_contact?.id ||
      null;

    if (!contactId) {
      console.error('[contact] GHL upsert returned no contact id', JSON.stringify(upsertJson));
      return;
    }

    // 2. Write audit-trail Note
    const noteBody = [
      'A2P CONSENT AUDIT RECORD',
      '------------------------',
      `Submitted: ${submittedAt}`,
      `IP: ${ip}`,
      `User-Agent: ${ua}`,
      '',
      `Marketing consent (emails/calls/texts):     ${consentMarketing ? 'YES' : 'NO'}`,
      `Transactional consent (emails/calls/texts): ${consentTransactional ? 'YES' : 'NO'}`,
      '',
      'Both opt-in checkboxes were unchecked by default on the form.',
      'A box marked YES above was explicitly checked by the visitor.',
      '',
      'Source: p5marketing.com/contact/',
    ].join('\n');

    const noteResp = await fetch(
      `${GHL_API_BASE}/contacts/${contactId}/notes`,
      {
        method: 'POST',
        headers: ghlHeaders,
        signal: AbortSignal.timeout(10_000),
        body: JSON.stringify({ body: noteBody }),
      }
    );

    if (!noteResp.ok) {
      const txt = await noteResp.text().catch(() => '');
      console.error('[contact] GHL note creation failed', noteResp.status, txt);
    }
  } catch (err) {
    console.error('[contact] GHL sync exception', err && err.message ? err.message : err);
  }
}
