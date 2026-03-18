import { getKv } from '../../../../lib/kv';
import { COOLDOWN_MS, STEP_DELAYS } from '../../../../lib/emails';

const SEGMENT_URL = 'https://api.audiencelab.io/segments/8a0223db-8d88-4d6d-a4c6-ad951d6d46b2';
const PAGE_SIZE = 50;

/**
 * CRON: Pull new visitors from Audience Lab (runs every hour)
 *
 * Fetches the Doughbaby's visitor segment from Audience Lab,
 * paginates through all results, checks each contact against
 * Vercel KV to avoid duplicates, and queues new contacts for
 * the email sequence.
 *
 * OPTIMIZED: Uses a sorted set (queue:pending) to schedule emails
 * instead of requiring a full scan at send time. The score is the
 * Unix timestamp (ms) when the email should be sent.
 */
export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Initialize KV inside handler so env vars are available at runtime
  const kv = getKv();

  try {
    let page = 1;
    let hasMore = true;
    let queued = 0;
    let skipped = 0;
    let total = 0;

    while (hasMore) {
      const url = `${SEGMENT_URL}?page=${page}&page_size=${PAGE_SIZE}`;
      const response = await fetch(url, {
        headers: {
          'X-API-Key': process.env.AUDIENCE_LAB_API_KEY,
        },
      });

      if (!response.ok) {
        console.error(`Audience Lab API error (page ${page}):`, response.status);
        return Response.json({ error: 'Audience Lab API failed', page }, { status: 502 });
      }

      const data = await response.json();
      const contacts = data.data || [];

      if (page === 1) {
        console.log('Audience Lab response keys:', Object.keys(data));
        console.log('Total records:', data.total_records, '| Total pages:', data.total_pages);
        if (contacts.length > 0) {
          console.log('First record fields:', Object.keys(contacts[0]));
          console.log('First record sample:', JSON.stringify(contacts[0]));
        }
      }

      if (!Array.isArray(contacts) || contacts.length === 0) {
        hasMore = false;
        break;
      }

      for (const contact of contacts) {
        total++;

        const email = contact['EMAIL']
          || contact['PERSONAL_VERIFIED_EMAILS']
          || contact['PERSONAL_EMAIL']
          || contact['WORK_EMAIL']
          || contact['Personal Verified Emails']
          || contact.email
          || null;

        const firstName = contact['FIRST_NAME']
          || contact['First Name']
          || contact.firstName
          || '';

        const lastName = contact['LAST_NAME']
          || contact['Last Name']
          || contact.lastName
          || '';

        if (!email) {
          if (total <= 3) console.log(`No email field found for record ${total}. Fields:`, Object.keys(contact));
          continue;
        }

        const primaryEmail = email.includes(',')
          ? email.split(',')[0].trim().toLowerCase()
          : email.trim().toLowerCase();

        if (!primaryEmail || !primaryEmail.includes('@')) continue;

        const key = `contact:${primaryEmail}`;
        const existing = await kv.get(key);

        if (existing) {
          const { completedAt } = existing;
          if (completedAt && (Date.now() - completedAt) < COOLDOWN_MS) {
            skipped++;
            continue;
          }
          if (!completedAt) {
            skipped++;
            continue;
          }
        }

        const now = Date.now();
        const sendAt = now + STEP_DELAYS[1]; // Schedule email 1

        // Save contact state
        await kv.set(key, {
          email: primaryEmail,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          currentStep: 1,
          enteredAt: now,
          lastEmailSentAt: null,
          completedAt: null,
        });

        // Add to pending queue — score is the send timestamp
        await kv.zadd('queue:pending', { score: sendAt, member: primaryEmail });

        queued++;
      }

      if (data.has_more === false || contacts.length < PAGE_SIZE) {
        hasMore = false;
      } else {
        page++;
      }
    }

    console.log(`Pull complete: ${queued} queued, ${skipped} skipped, ${total} total (${page} pages)`);
    return Response.json({ queued, skipped, total, pages: page });

  } catch (error) {
    console.error('Pull audience error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
