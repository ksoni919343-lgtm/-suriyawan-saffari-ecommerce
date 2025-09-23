import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true },
  }
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getUserRole(userId: string) {
  const { data, error } = await supabase.from('roles').select('role').eq('user_id', userId).single();
  if (error) throw error;
  return data?.role || 'customer';
}
