import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generates static HTML/CSS/JS export in out/ folder for Hostinger public_html
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
