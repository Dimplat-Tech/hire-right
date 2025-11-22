import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'blogs.json');

type Item = Record<string, unknown> & { id?: string };

async function readItems() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

async function writeItems(items: unknown[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), 'utf-8');
}

export async function GET() {
  const items = await readItems();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = await readItems();
    const id = Date.now().toString();
    const record = { id, createdAt: new Date().toISOString(), ...body };
    items.unshift(record);
    await writeItems(items);
    return NextResponse.json({ success: true, id });
  } catch (err: unknown) {
    console.error('admin/blogs POST error', err);
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    if (!body.id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const items = (await readItems()) as Item[];
    const updated = items.map((it) => (String(it.id) === String(body.id) ? { ...it, ...body, updatedAt: new Date().toISOString() } : it));
    await writeItems(updated);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('admin/blogs PUT error', err);
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const items = (await readItems()) as Item[];
    const filtered = items.filter((it) => String(it.id) !== id);
    await writeItems(filtered);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('admin/blogs DELETE error', err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
