import { NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';

export async function POST(req: Request) {
  const sig = req.headers.get('x-razorpay-signature')!;
  const body = await req.text();

  // Verify Razorpay webhook signature
  const isValid = razorpay.webhooks.verify(body, sig, process.env.RAZORPAY_WEBHOOK_SECRET!);

  if (isValid) {
    console.log('Razorpay webhook verified');
    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
}
