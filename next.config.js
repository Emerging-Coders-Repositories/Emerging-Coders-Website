/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
