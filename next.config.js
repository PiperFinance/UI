/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tokens.1inch.io',
      },
      {
        protocol: 'https',
        hostname: 'token.metaswap.codefi.network',
      },
    ],
  },
};

module.exports = nextConfig;
