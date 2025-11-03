import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'jobs.json');

type Job = Record<string, unknown> & { id: string };

async function readJobs(): Promise<Job[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch {
    // If file doesn't exist, return empty array
    return [];
  }
}

async function writeJobs(jobs: Job[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(jobs, null, 2), 'utf-8');
}

export async function GET() {
  const jobs = await readJobs();
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
  const jobs = await readJobs();
  const id = Date.now().toString();
  const newJob: Job = { id, ...(body as Record<string, unknown>) };
  jobs.unshift(newJob);
    await writeJobs(jobs);
    return NextResponse.json(newJob, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const body = await req.json();
  const jobs = await readJobs();
  const idx = jobs.findIndex((j: Job) => (j.id as string) === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    jobs[idx] = { ...jobs[idx], ...body };
    await writeJobs(jobs);
    return NextResponse.json(jobs[idx]);
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  let jobs = await readJobs();
    const before = jobs.length;
  jobs = jobs.filter((j: Job) => (j.id as string) !== id);
    if (jobs.length === before) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    await writeJobs(jobs);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
