import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/me",
  assetPrefix: "/me",
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
};

export default nextConfig;
