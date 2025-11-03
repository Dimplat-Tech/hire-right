import { NextResponse } from 'next/server';

export function POST() {
  const res = NextResponse.json({ ok: true });
  // expire the cookie
  res.cookies.set('admin_auth', '', { httpOnly: true, path: '/', maxAge: 0 });
  return res;
}
