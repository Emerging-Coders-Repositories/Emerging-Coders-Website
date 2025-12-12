import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['pub-3efce5c7466644d99eadaac75c7bc326.r2.dev'],
    minimumCacheTTL: 60 * 60 * 24 * 7 * 4, //1 month
  },
};

export default nextConfig;
