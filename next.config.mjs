/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'standalone',
  
  // Keep these
  reactStrictMode: true,
  swcMinify: true,
  
  // Optional optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};


export default nextConfig;
