import { NextResponse } from 'next/server';
import { twilioClient } from '@/lib/twilio';

export async function POST(req: Request) {
  const { to, message } = await req.json();

  try {
    const response = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });
    return NextResponse.json({ success: true, sid: response.sid });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send SMS' }, { status: 500 });
  }
}
