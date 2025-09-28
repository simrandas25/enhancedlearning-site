/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      'lh3.googleusercontent.com',
      'pbs.twimg.com',
      'images.unsplash.com',
      'logos-world.net',
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '..'),
};

module.exports = nextConfig;