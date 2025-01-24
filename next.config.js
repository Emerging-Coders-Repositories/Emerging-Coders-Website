/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Emerging-Coders-Website" : '',
  assetPrefix: isProd ? "/Emerging-Coders-Website" : '',
  trailingSlash: true,
};

module.exports = nextConfig;
