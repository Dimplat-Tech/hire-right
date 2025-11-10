import { NextResponse } from 'next/server';

const EMAILJS_API = 'https://api.emailjs.com/api/v1.0/email/send';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Expect the client to send template params object
    const templateParams = body;

    const service_id = process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template_id = process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!service_id || !template_id || !user_id) {
      console.error('emailjs/send: missing env vars', { service_id, template_id, user_id });
      return NextResponse.json({ error: 'EmailJS not configured on server' }, { status: 500 });
    }

    const payload = {
      service_id,
      template_id,
      user_id,
      template_params: templateParams,
    };

    const resp = await fetch(EMAILJS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    if (!resp.ok) {
      console.error('emailjs/send: upstream error', resp.status, text);
      return NextResponse.json({ error: 'EmailJS send failed', detail: text }, { status: 502 });
    }

    return NextResponse.json({ success: true, detail: text });
  } catch (err) {
    console.error('emailjs/send: unexpected error', err);
    return NextResponse.json({ error: 'Unexpected server error', detail: String(err) }, { status: 500 });
  }
}
