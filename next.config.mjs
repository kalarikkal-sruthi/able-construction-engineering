/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix: '.' unless you have specific requirements
  // assetPrefix: '.', // Only needed if deploying to relative paths
};

export default nextConfig;