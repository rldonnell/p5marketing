import { NextResponse } from 'next/server';
import { checkPassphrase, createSessionCookie } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  let passphrase = '';
  try {
    const body = await req.json();
    passphrase = String(body?.passphrase ?? '');
  } catch {
    // ignore
  }

  if (!checkPassphrase(passphrase)) {
    // Small delay to discourage brute-force on a single-passphrase system.
    await new Promise((r) => setTimeout(r, 400));
    return NextResponse.json({ ok: false, error: 'Bad passphrase' }, { status: 401 });
  }

  const cookie = createSessionCookie();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookie.name, cookie.value, cookie.options);
  return res;
}
