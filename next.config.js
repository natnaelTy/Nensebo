/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the PNG favicon at the conventional /favicon.ico path too, so
  // browser/crawler default probes don't 404.
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/favicon.png" }];
  },
  // Allow isolated production builds (e.g. NEXT_DIST_DIR=.next-prod) so a
  // running `next dev` server can't clobber the same .next directory.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    // Serve modern formats: AVIF first (smallest), WebP fallback
    formats: ["image/avif", "image/webp"],
    // Responsive srcset sizes for full-bleed hero images
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560],
  },
};
module.exports = nextConfig;