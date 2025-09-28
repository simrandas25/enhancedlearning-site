const path = require('path');

/** @type {import('next').NextConfig} */
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
  experimental: {
    // Tell Next where the monorepo/project root is so it picks the right lockfile
    outputFileTracingRoot: path.resolve(__dirname, '..'),
  },
};

module.exports = nextConfig;