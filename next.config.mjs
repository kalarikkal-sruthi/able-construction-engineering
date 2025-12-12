const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: '.',
  
  // Webpack config only (will be used with --webpack flag)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = './';
    }
    return config;
  },
};

export default nextConfig;