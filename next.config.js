/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ['firebasestorage.googleapis.com'],
  },
  
};

module.exports = nextConfig;
