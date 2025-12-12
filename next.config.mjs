/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build', 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  assetPrefix: '.',
   turbopack: {},
  
  // Remove experimental.turbo - it's now just 'turbopack' in Next.js 16
  // experimental: {
  //   turbo: {}  ← REMOVE THIS
  // },
  
  // Keep webpack config for static export
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = './';
    }
    return config;
  },
};

export default nextConfig;