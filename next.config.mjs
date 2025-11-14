/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: false, // enable Next.js image optimization
    formats: ["image/avif", "image/webp"], // best performance formats
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  swcMinify: true, // fastest minification

  compress: true, // gzip compression ON

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lodash",
      "date-fns",
      "react-icons",
      "@mui/icons-material",
    ],
  },

  webpack(config) {
    // Enable caching for faster builds
    config.cache = {
      type: "filesystem",
    };
    return config;
  },
};

export default nextConfig;
