import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Placeholder photography. Every one of these was fetched and decoded
       before being written down, so none of them is a guessed id. Swap the
       whole set out in `src/lib/content/photos.ts` when real work photography
       arrives — nothing else references the host. */
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  turbopack: {
    /* Without this, Turbopack walks up to C:\Users\code_can, finds a stray
       package-lock.json there and warns on every build. Pin the root. */
    root: path.resolve(import.meta.dirname ?? "."),
  },
};

export default nextConfig;
