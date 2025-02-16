import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["www.bestmebelshop.ru"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xn----8sbafpot1a2am0j.xn--p1ai",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
