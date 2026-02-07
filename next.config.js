/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['isometric-city'],
  experimental: {
    externalDir: true
  }
};

module.exports = nextConfig;
