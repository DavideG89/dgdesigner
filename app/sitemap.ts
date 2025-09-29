import type { MetadataRoute } from "next"

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgdesigner.site"
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = [
    "/",
    "/about",
    "/services",
    "/projects",
    "/contact",
  ]

  return routes.map((path) => ({
    url: path === "/" ? baseUrl : `${baseUrl}${path}`,
    lastModified,
  }))
}
