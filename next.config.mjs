/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    dirs: ["app", "components", "features", "data", "hooks", "lib", "types"],
  },
};

export default nextConfig;
