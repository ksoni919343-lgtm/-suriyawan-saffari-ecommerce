'use client';
import { useState, useEffect } from 'react';
import { supabaseAdmin } from '@/lib/supabase';
import OrnateHeader from '@/components/OrnateHeader';

export default function ManagementPage() {
  const [workers, setWorkers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    setLoading(true);
    const { data, error } = await supabaseAdmin.from('users').select('*').eq('role', 'delivery_boy');
    if (error) console.error(error);
    else setWorkers(data || []);
    setLoading(false);
  };

  const handleBlockWorker = async (userId: string, blocked: boolean) => {
    const { error } = await supabaseAdmin.from('users').update({ blocked: !blocked }).eq('id', userId);
    if (error) console.error(error);
    else fetchWorkers();
  };

  return (
    <div className="container mx-auto p-4 bg-navy text-gold">
      <OrnateHeader title="Manage Workers" />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="space-y-2">
          {workers.map((worker) => (
            <li key={worker.id} className="flex items-center justify-between bg-beige p-2 rounded">
              <span>{worker.email} ({worker.blocked ? 'Blocked' : 'Active'})</span>
              <button
                onClick={() => handleBlockWorker(worker.id, worker.blocked)}
                className="bg-gold text-navy px-2 py-1 rounded"
              >
                {worker.blocked ? 'Unblock' : 'Block'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
