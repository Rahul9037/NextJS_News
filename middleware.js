import { NextResponse } from 'next/server';

export function middleware(request) {
  //return NextResponse.next();
  return NextResponse.redirect();
}

export const config = {
  matcher: ['/news/:path*', '/archive/:path*'],
};
