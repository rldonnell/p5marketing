import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/login', '/api/auth/login', '/api/auth/logout'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public assets and Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/static') ||
    PUBLIC_PATHS.includes(pathname)
  ) {
    return NextResponse.next();
  }

  // Cookie-only gate. The verifyToken happens inside the page/API handlers
  // because middleware can't import crypto cleanly on edge runtime — but the
  // mere presence of the cookie is the first-pass gate. A forged/expired
  // cookie still fails the server-side check in isAuthed().
  const hasCookie = req.cookies.get('intelid_admin_session')?.value;
  if (!hasCookie) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth/login|api/auth/logout|login|_next/static|_next/image|favicon.ico).*)'],
};
