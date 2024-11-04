/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
