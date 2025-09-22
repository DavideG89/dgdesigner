import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgdesigner.site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
  ]

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))
}
