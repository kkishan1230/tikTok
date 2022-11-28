/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["i.pinimg.com", "lh3.googleusercontent.com"],
  },
  env: {
    NEXT_GOOGLE_CLIENT_ID: process.env.NEXT_GOOGLE_CLIENT_ID,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
