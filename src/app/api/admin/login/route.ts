import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const password = body?.password;
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'; // fallback for local dev
    if (password && password === adminPassword) {
      const res = NextResponse.json({ ok: true });
      res.cookies.set('admin_auth', '1', {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 day
      });
      return res;
    }
    return NextResponse.json({ ok: false }, { status: 401 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
