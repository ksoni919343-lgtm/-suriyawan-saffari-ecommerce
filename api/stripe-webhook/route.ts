import { NextResponse } from 'next/server';
import { buffer } from 'micro';
import { stripePromise } from '@/lib/stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')!;
  const buf = await buffer(req);
  const stripe = await stripePromise;

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Handle the event
  console.log('Webhook received:', event.type);

  return NextResponse.json({ received: true });
}
