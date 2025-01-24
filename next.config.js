/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd && !hasCustomDomain ? "/Emerging-Coders-Website" : '',
  assetPrefix: isProd && !hasCustomDomain ? "/Emerging-Coders-Website" : '', 
  trailingSlash: true,
};

module.exports = nextConfig;
