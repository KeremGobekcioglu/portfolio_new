/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Next 16 rejects any `quality` not in this allowlist. 90 is used for
    // the dense-text project screenshots — the default 75 (WebP) visibly
    // softens small UI text.
    qualities: [75, 90],
  },
};

export default nextConfig;
