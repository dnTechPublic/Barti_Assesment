import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['static.wikia.nocookie.net']
  }
};

export default nextConfig;
