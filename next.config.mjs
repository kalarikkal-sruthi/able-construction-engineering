/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',  // Remove this if not using Digital Ocean App Platform
  images: {
    domains: [],  // Add your image domains here if needed
  },
   output: 'export',
  images: {
    unoptimized: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable SWC minification
  swcMinify: true,
  // Add any other config options here
};


export default nextConfig;
