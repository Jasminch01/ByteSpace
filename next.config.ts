import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Add external image hosts here, e.g. { protocol: "https", hostname: "images.example.com" }
    remotePatterns: [],
  },
};

export default nextConfig;
