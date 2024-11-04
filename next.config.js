// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website/" : "",
};

module.exports = nextConfig;
