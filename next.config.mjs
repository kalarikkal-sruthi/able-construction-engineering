/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',  // or 'out' - whichever you're using
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  },
  // ⛔ REMOVE THIS LINE: swcMinify: true,
  // Next.js 16+ uses SWC by default, no need for swcMinify
  
  // Optional: Add if you need
  reactStrictMode: true,
  compiler: {
    // Optional: For smaller builds
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;