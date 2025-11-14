/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: true,
    serverActions: {
      allowedOrigins: ["*"],
    },
  },

  reactStrictMode: true,
};

export default nextConfig;
