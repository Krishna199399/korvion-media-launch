import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Removed output: 'export' to enable server-side features (Supabase SSR, API routes)
  // For static Hostinger export: temporarily add output: 'export' and run npm run export:hostinger
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
};

export default nextConfig;
