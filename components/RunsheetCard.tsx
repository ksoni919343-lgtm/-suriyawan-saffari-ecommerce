'use client';
import React from 'react';
import { supabase } from '@/lib/supabase';
import { twilioClient } from '@/lib/twilio';

interface RunsheetCardProps {
  parcel: any;
  onDeliver: (id: string) => void;
}

const RunsheetCard: React.FC<RunsheetCardProps> = ({ parcel, onDeliver }) => {
  const handleDeliver = async () => {
    await supabase.from('deliveries').update({ status: 'delivered' }).eq('id', parcel.id);
    await twilioClient.messages.create({
      body: `Delivered: ${parcel.product} to ${parcel.address}`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: parcel.customerPhone,
    });
    onDeliver(parcel.id);
  };

  return (
    <div className="product-card transform-style: preserve-3d">
      <img src={parcel.image} alt={parcel.product} className="w-full h-32 object-cover rounded border-2 border-gold" />
      <h3 className="text-lg font-semibold text-navy">{parcel.product}</h3>
      <p className="text-gold">{parcel.address}</p>
      <button
        onClick={handleDeliver}
        className="bg-gold text-navy px-2 py-1 rounded hover:bg-yellow-600 transition-all duration-300 transform-gpu hover:translate-z-5"
      >
        Deliver
      </button>
    </div>
  );
};

export default RunsheetCard;
