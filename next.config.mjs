/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
