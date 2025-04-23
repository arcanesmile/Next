
import { clerkMiddleware } from '@clerk/nextjs/server';
import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default clerkMiddleware({
  publicRoutes: ['/', '/sign-in', '/sign-up'],
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
  ],
};