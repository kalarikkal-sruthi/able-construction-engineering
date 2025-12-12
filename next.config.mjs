/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',  // or 'out' - whichever you're using
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  },

  reactStrictMode: true,
  assetPrefix: '.',
};

export default nextConfig;