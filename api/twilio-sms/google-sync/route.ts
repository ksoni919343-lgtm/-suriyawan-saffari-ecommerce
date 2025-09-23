import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';

export async function POST(req: Request) {
  const { orderId, total, status } = await req.json();
  await appendToSheet([orderId, total, status]);
  return NextResponse.json({ synced: true });
}
