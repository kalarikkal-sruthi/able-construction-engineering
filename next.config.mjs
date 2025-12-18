
export default nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  // Keep these optimizations:
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(nextConfig);