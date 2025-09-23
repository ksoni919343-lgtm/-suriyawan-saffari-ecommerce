'use client';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Razorpay } from 'razorpay';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const CheckoutForm = () => {
  const handleCheckout = async () => {
    // Implement Stripe/Razorpay checkout
  };

  return <div className="container mx-auto p-4 bg-beige">Checkout Form...</div>;
};

export default CheckoutForm;
