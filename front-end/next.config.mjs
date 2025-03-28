/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "fcoretracker.ru"],
    unoptimized: true,
  },
  distDir: "dist",
  trailingSlash: false,
  output: "standalone", // было export заменил на standalone, потому что не билдилось
};

export default nextConfig;
