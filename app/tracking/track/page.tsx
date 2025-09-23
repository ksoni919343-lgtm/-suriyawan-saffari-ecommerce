'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import OrnateHeader from '@/components/OrnateHeader';

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [order, setOrder] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('tracking').select('*').eq('id', trackingId).single();
    if (error) console.error(error);
    else setOrder(data);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 bg-beige text-navy">
      <OrnateHeader title="Track Your Order" />
      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter Tracking ID"
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleTrack} className="bg-gold text-navy px-4 py-2 rounded" disabled={loading}>
        {loading ? 'Tracking...' : 'Track'}
      </button>
      {order && (
        <div className="mt-4 p-4 bg-beige rounded">
          <p>Status: {order.status}</p>
          <p>Location: {order.location}</p>
        </div>
      )}
    </div>
  );
}
