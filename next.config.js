/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats: AVIF first (smallest), WebP fallback
    formats: ["image/avif", "image/webp"],
    // Responsive srcset sizes for full-bleed hero images
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560],
  },
};
module.exports = nextConfig;