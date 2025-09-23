'use client';
import { useState, useEffect } from 'react';
import { supabaseAdmin } from '@/lib/supabase';
import OrnateHeader from '@/components/OrnateHeader';

export default function OwnerPortal() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabaseAdmin.from('users').select('*');
    if (error) console.error(error);
    else setUsers(data || []);
    setLoading(false);
  };

  const handleBlockUser = async (userId: string, blocked: boolean) => {
    const { error } = await supabaseAdmin.from('users').update({ blocked: !blocked }).eq('id', userId);
    if (error) console.error(error);
    else fetchUsers();
  };

  return (
    <div className="container mx-auto p-4">
      <OrnateHeader title="Owner Portal - Full Control" />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between bg-beige p-2 rounded">
              <span>{user.email} ({user.blocked ? 'Blocked' : 'Active'})</span>
              <button
                onClick={() => handleBlockUser(user.id, user.blocked)}
                className="bg-gold text-navy px-2 py-1 rounded"
              >
                {user.blocked ? 'Unblock' : 'Block'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
