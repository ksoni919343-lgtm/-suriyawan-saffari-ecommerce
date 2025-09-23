import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Verify and handle Razorpay webhook
  return NextResponse.json({ received: true });
}
