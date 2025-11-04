import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';



const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'letsTalkSubmissions.json');

async function readSubs() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

async function writeSubs(items: unknown[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), 'utf-8');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const subs = await readSubs();
    const id = Date.now().toString();
    const record = { id, submittedAt: new Date().toISOString(), ...body };
    subs.unshift(record);
    try {
      await writeSubs(subs);
    } catch (err: unknown) {
      // Log and return the write error so we can debug deployed environments
      console.error('lets-talk: failed to write submissions file', err);
      return NextResponse.json({ error: 'Failed to persist submission', detail: String(err) }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('lets-talk: POST error', err);
    return NextResponse.json({ error: 'Invalid payload or server error', detail: String(err) }, { status: 400 });
  }
}

console.log("🔑 RESEND KEY:", process.env.RESEND_API_KEY);
