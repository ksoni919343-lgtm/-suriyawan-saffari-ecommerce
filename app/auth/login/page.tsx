'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import OrnateHeader from '@/components/OrnateHeader';

export default function Login() {
  const [email, setEmail] = useState('memberpoint89@gmail.com');
  const [password, setPassword] = useState('3567965s3567965');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push('/');
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleOTPLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email, phone: email.split('@')[0] });
    if (error) setError(error.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sand-gradient">
      <div className="w-full max-w-md p-8 bg-beige rounded-lg shadow-lg">
        <OrnateHeader title="Login to Suriyawan Saffari" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button onClick={handleLogin} className="w-full bg-gold text-navy p-2 rounded mb-2">
          Login with Password
        </button>
        <button onClick={handleOTPLogin} className="w-full bg-gold text-navy p-2 rounded">
          Login with OTP
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
