'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import RunsheetCard from '@/components/RunsheetCard';
import OrnateHeader from '@/components/OrnateHeader';

export default function DeliveryPortal() {
  const [runsheet, setRunsheet] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRunsheet();
  }, []);

  const fetchRunsheet = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (session?.user.id) {
      setLoading(true);
      const { data, error } = await supabase.from('runsheets').select('parcels').eq('delivery_boy_id', session.user.id);
      if (error) console.error(error);
      else setRunsheet(data?.[0]?.parcels || []);
      setLoading(false);
    }
  };

  const handleDeliver = async (parcelId: string) => {
    const { error } = await supabase.from('deliveries').update({ status: 'delivered' }).eq('id', parcelId);
    if (error) console.error(error);
    fetchRunsheet();
  };

  return (
    <div className="container mx-auto p-4 bg-beige text-navy">
      <OrnateHeader title="Delivery Portal" />
      <button onClick={fetchRunsheet} className="bg-gold text-navy px-4 py-2 rounded mb-4">
        Create Runsheet
      </button>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid-products">
          {runsheet.map((parcel) => (
            <RunsheetCard key={parcel.id} parcel={parcel} onDeliver={handleDeliver} />
          ))}
        </div>
      )}
    </div>
  );
}
