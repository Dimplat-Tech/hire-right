import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Read email targets from environment
    const TO_EMAIL = process.env.TO_EMAIL || 'info@hirerightng.com';
    const FROM_EMAIL = process.env.FROM_EMAIL || 'HireRight NG <noreply@hirerightng.com>';

    // EmailJS configuration with fallback values
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_fsh6ew9';
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5wwri8n';
    const USER_ID = process.env.EMAILJS_USER_ID || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '2k0B6L0Ikj4ZVJ7ue';

    // Build template params. Your EmailJS template should accept subscriber_email and to_email (if you want to forward)
    const templateParams = {
      subscriber_email: email,
      email: email,
      to_email: TO_EMAIL,
      from_email: FROM_EMAIL,
    };

    // If EmailJS is configured, call their REST API to dispatch the template
    if (SERVICE_ID && TEMPLATE_ID && USER_ID) {
      try {
        const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: USER_ID,
            template_params: templateParams,
          }),
        });

        if (!resp.ok) {
          const text = await resp.text();
          console.error('EmailJS send failed:', resp.status, text);
          return NextResponse.json({ error: 'Failed to send notification email' }, { status: 502 });
        }
      } catch (sendErr) {
        console.error('EmailJS send error:', sendErr);
        return NextResponse.json({ error: 'Failed to send notification email' }, { status: 502 });
      }
    } else {
      console.log('EmailJS not configured; skipping email send. Expected SERVICE_ID, TEMPLATE_ID, USER_ID env vars. Subscriber:', email);
    }

    // TODO: persist subscriber to a database or mailing-list provider

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
