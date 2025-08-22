/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.healthcarehub.com'],
  },
}

module.exports = nextConfig