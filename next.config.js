/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['zqmkqpaluuwehvvznaos.supabase.co'],
    },
  };
  
  module.exports = nextConfig;