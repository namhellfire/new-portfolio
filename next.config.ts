import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/me",
  assetPrefix: "/me",
  images: {
    unoptimized: true, // Required when using basePath to avoid image optimization API issues
  },
};

export default nextConfig;
