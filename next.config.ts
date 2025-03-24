import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cymvfx0euz.ufs.sh",
        port: "",
        pathname: "/**",
      },
    ]
  },
};

export default nextConfig;
