import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev server to be accessed from local network (e.g. phone at 192.168.1.101).
  // Without this, a future Next.js major version will block cross-origin requests in dev.
  allowedDevOrigins: ["http://192.168.1.101:3000", "http://192.168.1.101"],
};

export default nextConfig;
