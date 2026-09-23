/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "dgdesigner.site" }],
        destination: "https://www.dgdesigner.site/:path*",
        permanent: true,
      },
    ]
  },
  htmlLimitedBots: /.*/,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
