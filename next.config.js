/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
      BASE_API_URI: process.env.BASE_API_URI
  }
}

module.exports = nextConfig