/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Emerging-Coders-Website",
  assetPrefix: "/Emerging-Coders-Website",
  trailingSlash: true,
};

module.exports = nextConfig;
