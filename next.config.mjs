/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  
  // ⚠️ CRITICAL: Add turbopack config
  turbopack: {
    // Turbopack configuration for static export
    resolveAlias: {
      // Add any path aliases you use
    }
  },
  
  // Remove webpack config OR use only one
  // webpack: (config) => { ... }  // ⛔ REMOVE THIS
  
  // Keep these
  images: {
    unoptimized: true,
  },
  assetPrefix: '.',
};

export default nextConfig;