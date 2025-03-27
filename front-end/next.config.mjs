/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "fcoretracker.ru"],
    unoptimized: true,
  },
  distDir: "dist",
  trailingSlash: false,
  output: "export",
};

export default nextConfig;
