import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to /admin routes (not the login page itself)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin_auth');

    // If accessing a sub-route of /admin (e.g., /admin/dashboard) without auth,
    // redirect to /admin which shows the login form
    if (request.nextUrl.pathname !== '/admin' && authCookie?.value !== 'true') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
