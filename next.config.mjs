/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build', 
  trailingSlash: true,
  images: {
    unoptimized: true,  
  },
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;


// export default nextConfig;
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = {
//   output: 'export',
//   distDir: 'build',
//   images: {
//     unoptimized: true,
//   },

//   compress: true,
//   generateEtags: true,
//   poweredByHeader: false,
// };

// module.exports = withBundleAnalyzer(nextConfig);