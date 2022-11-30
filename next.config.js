/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com' }]
  },
  experimental: {
    appDir: true,
    newNextLinkBehavior: true
  }
};

module.exports = nextConfig;
