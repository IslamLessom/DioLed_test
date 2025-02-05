import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["www.bestmebelshop.ru"],
  },
};

export default nextConfig;
