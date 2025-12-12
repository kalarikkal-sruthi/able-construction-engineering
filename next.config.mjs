// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   distDir: 'build',  // or 'out' - whichever you're using
//   trailingSlash: true,
//   images: {
//     unoptimized: true,  // Required for static export
//   },
//   // ⛔ REMOVE THIS LINE: swcMinify: true,
//   // Next.js 16+ uses SWC by default, no need for swcMinify
  
//   // Optional: Add if you need
//   reactStrictMode: true,
//   compiler: {
//     // Optional: For smaller builds
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // ✅ Keep these for better performance
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // ✅ Images optimization
  images: {
    // Configure remote image domains if needed
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
  
  // ✅ Performance optimizations
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
};

export default nextConfig;