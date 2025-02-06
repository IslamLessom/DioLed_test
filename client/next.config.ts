import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["www.bestmebelshop.ru"],
  },
  reactStrictMode: false,
};

export default nextConfig;
