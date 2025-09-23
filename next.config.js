/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-supabase-url.supabase.co'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
