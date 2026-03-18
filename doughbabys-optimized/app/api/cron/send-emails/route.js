import { getKv } from '../../../../lib/kv';
import { Resend } from 'resend';
import { getEmailForStep, STEP_DELAYS } from '../../../../lib/emails';

/**
 * CRON: Send scheduled emails (runs every 15 minutes)
 *
 * OPTIMIZED: Instead of scanning ALL contacts, this reads from a
 * sorted set (queue:pending) where the score is the send-at timestamp.
 * Only contacts whose send time has passed are processed.
 *
 * KV operations per run:
 *   OLD: scan(all) + get(each) = hundreds of requests
 *   NEW: zrangebyscore(1) + get(batch) + set(batch) = ~2-3x batch size
 */
export async function GET(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Initialize KV inside handler so env vars are available at runtime
  const kv = getKv();

  try {
    // Daily send limit check
    const todayKey = `sends:${new Date().toISOString().slice(0, 10)}`;
    const dailySends = (await kv.get(todayKey)) || 0;
    const dailyLimit = parseInt(process.env.DAILY_SEND_LIMIT || '30', 10);

    if (dailySends >= dailyLimit) {
      console.log(`Daily limit reached (${dailySends}/${dailyLimit}). Skipping.`);
      return Response.json({ sent: 0, reason: 'daily limit reached' });
    }

    let remaining = dailyLimit - dailySends;

    // Pull only contacts whose send time has passed
    // zrangebyscore returns members with scores between min and max
    const now = Date.now();
    const readyEmails = await kv.zrange('queue:pending', 0, now, {
      byScore: true,
      offset: 0,
      count: remaining,
    });

    if (!readyEmails || readyEmails.length === 0) {
      console.log('Send run: 0 ready, 0 sent');
      return Response.json({ sent: 0, waiting: 0, dailyTotal: dailySends });
    }

    let sent = 0;

    for (const email of readyEmails) {
      if (remaining <= 0) break;

      const key = `contact:${email}`;
      const contact = await kv.get(key);
      if (!contact || contact.completedAt) {
        // Clean up orphaned queue entries
        await kv.zrem('queue:pending', email);
        continue;
      }

      const { firstName, currentStep } = contact;

      const emailFn = getEmailForStep(currentStep);
      if (!emailFn) {
        await kv.zrem('queue:pending', email);
        continue;
      }

      const { subject, text } = emailFn(firstName);

      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL,
          to: email,
          subject,
          text,
        });

        const totalSteps = Object.keys(STEP_DELAYS).length;
        const isLastStep = currentStep >= totalSteps;
        const nowMs = Date.now();

        // Update contact state
        await kv.set(key, {
          ...contact,
          currentStep: isLastStep ? currentStep : currentStep + 1,
          lastEmailSentAt: nowMs,
          completedAt: isLastStep ? nowMs : null,
        });

        // Remove from queue, then schedule next step if not done
        await kv.zrem('queue:pending', email);

        if (!isLastStep) {
          const nextStep = currentStep + 1;
          const nextSendAt = nowMs + STEP_DELAYS[nextStep];
          await kv.zadd('queue:pending', { score: nextSendAt, member: email });
        }

        sent++;
        remaining--;
        console.log(`Sent email ${currentStep} to ${email}`);

      } catch (emailError) {
        console.error(`Failed to send to ${email}:`, emailError.message);
        // Leave in queue — will retry next cron run
      }
    }

    // Update daily counter
    if (sent > 0) {
      await kv.set(todayKey, dailySends + sent, { ex: 86400 });
    }

    const queueSize = await kv.zcard('queue:pending');
    console.log(`Send run: ${sent} sent, ${queueSize} still queued`);
    return Response.json({ sent, queueSize, dailyTotal: dailySends + sent });

  } catch (error) {
    console.error('Send emails error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
