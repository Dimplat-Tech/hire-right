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

function toCSV(rows: Record<string, unknown>[]) {
  if (!rows || rows.length === 0) return '';
  const headers = Object.keys(rows[0]);
  const escape = (v: unknown) => {
    if (v === null || v === undefined) return '';
    const s = String(v);
    if (s.includes(',') || s.includes('"') || s.includes('\n')) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  };
  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push(headers.map(h => escape(r[h])).join(','));
  }
  return lines.join('\n');
}

export async function GET() {
  // NOTE: This endpoint is intended for admin use only. It currently has no auth.
  const subs = await readSubs();
  const csv = toCSV(subs as Record<string, unknown>[]);
  const filename = `lets-talk-submissions-${new Date().toISOString().slice(0,10)}.csv`;
  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
