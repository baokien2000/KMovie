// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Assuming you want to proxy requests going to /api/*
  if (pathname.startsWith('/api/')) {
      const apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL + pathname);
      console.log("apiUrl:",apiUrl)
    return NextResponse.rewrite(apiUrl);
  }

  return NextResponse.next();
}