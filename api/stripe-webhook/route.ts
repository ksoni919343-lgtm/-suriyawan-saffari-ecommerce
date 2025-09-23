import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const sig = headers().get('stripe-signature')!;
  const body = await req.text();
  // Verify and handle webhook
  return NextResponse.json({ received: true });
}
