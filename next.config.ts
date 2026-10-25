import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    // Old Vercel domain -> live domain (see "Live URL List" in the SEO sheet)
    const oldHost = [{ type: "host" as const, value: "esalettercolorado.vercel.app" }];
    return [
      {
        source: "/",
        has: oldHost,
        destination: "https://esalettercolorado.com/",
        statusCode: 301,
      },
      {
        source: "/:path+",
        has: oldHost,
        destination: "https://esalettercolorado.com/:path+/",
        statusCode: 301,
      },
    ];
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
