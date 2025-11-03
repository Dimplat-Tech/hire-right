import { NextResponse, NextRequest } from 'next/server';

export function GET(req: NextRequest) {
  const cookie = req.cookies.get('admin_auth')?.value;
  if (cookie === '1') {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false });
}
