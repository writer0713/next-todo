/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // removeConsole: true,
    styledComponents: true
  }
}

module.exports = nextConfig
