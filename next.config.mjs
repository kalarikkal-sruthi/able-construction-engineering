/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',  // Remove this if not using Digital Ocean App Platform
  images: {
    domains: [],  // Add your image domains here if needed
  },
  // Add any other config options here
};


export default nextConfig;
