import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'crypto';

// Phase 1 auth: a single shared passphrase. Anyone who knows it gets in.
// Sessions are signed cookies, so we don't need a session store.
// Phase 2 graduates to GitHub OAuth via NextAuth.

const COOKIE_NAME = 'intelid_admin_session';
const SESSION_TTL_DAYS = 30;

function secret(): string {
  const s = process.env.ADMIN_COOKIE_SECRET;
  if (!s || s.length < 16) {
    throw new Error('ADMIN_COOKIE_SECRET is missing or too short (need 16+ chars).');
  }
  return s;
}

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('hex');
}

function makeToken(): string {
  const issuedAt = Date.now();
  const payload = `v1.${issuedAt}`;
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [version, issuedAtRaw, sig] = parts;
  if (version !== 'v1') return false;
  const issuedAt = Number(issuedAtRaw);
  if (!Number.isFinite(issuedAt)) return false;

  // TTL check
  const ageMs = Date.now() - issuedAt;
  if (ageMs > SESSION_TTL_DAYS * 24 * 60 * 60 * 1000) return false;

  // Signature check (timing-safe)
  const expected = sign(`${version}.${issuedAtRaw}`);
  const a = Buffer.from(sig, 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function isAuthed(): boolean {
  const c = cookies().get(COOKIE_NAME)?.value;
  return verifyToken(c);
}

export function createSessionCookie(): { name: string; value: string; options: object } {
  return {
    name: COOKIE_NAME,
    value: makeToken(),
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
      maxAge: SESSION_TTL_DAYS * 24 * 60 * 60,
    },
  };
}

export function clearSessionCookie(): { name: string; value: string; options: object } {
  return {
    name: COOKIE_NAME,
    value: '',
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 0,
    },
  };
}

export function checkPassphrase(input: string): boolean {
  const expected = process.env.ADMIN_PASSPHRASE;
  if (!expected) return false;
  if (input.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(input), Buffer.from(expected));
}
