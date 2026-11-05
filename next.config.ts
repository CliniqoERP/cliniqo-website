import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain HTML, CSS and JS in out/, published by Netlify. No server.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
