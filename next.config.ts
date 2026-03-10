import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'books.google.com',
      },
    ],
  },
};

export default nextConfig;
