'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const role = await getUserRole(session.user.id);
        switch (role) {
          case 'owner': router.push('/owner'); break;
          case 'seller': router.push('/suriyawan/seller'); break;
          case 'delivery_boy': router.push('/delivery'); break;
          default: router.push('/suriyawan/customer'); break;
        }
      } else {
        router.push('/auth/login');
      }
    };
    checkSession();
  }, [router]);

  async function getUserRole(userId: string) {
    const { data, error } = await supabase.from('roles').select('role').eq('user_id', userId).single();
    if (error) throw error;
    return data?.role || 'customer';
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gold"></div>
    </div>
  );
}
