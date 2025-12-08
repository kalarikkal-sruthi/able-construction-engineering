/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactCompiler: true ,


  swcMinify: true, 
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
 
  experimental: {
    // esmExternals: false,
    
    // turbo: true,
  },
};


export default nextConfig;
