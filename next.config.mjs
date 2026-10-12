/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/web-design-palermo",
        destination: "https://www.dgdesigner.site/web-designer-palermo",
        statusCode: 301,
      },
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
