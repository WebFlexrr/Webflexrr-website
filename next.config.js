/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/**`,
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
  },
};

module.exports = nextConfig;
