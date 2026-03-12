import type { MetadataRoute } from "next"

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgdesigner.site"
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = [
    { path: "/", hasEnglishVariant: true },
    { path: "/about", hasEnglishVariant: true },
    { path: "/services", hasEnglishVariant: true },
    { path: "/siti-web-per-ristoranti", hasEnglishVariant: false },
    { path: "/projects", hasEnglishVariant: true },
    { path: "/contact", hasEnglishVariant: true },
  ]

  return routes.map(({ path, hasEnglishVariant }) => ({
    url: path === "/" ? baseUrl : `${baseUrl}${path}`,
    lastModified,
    alternates: {
      languages: hasEnglishVariant
        ? {
            it: path === "/" ? baseUrl : `${baseUrl}${path}`,
            en: path === "/" ? `${baseUrl}?lang=en` : `${baseUrl}${path}?lang=en`,
          }
        : {
            it: path === "/" ? baseUrl : `${baseUrl}${path}`,
          },
    },
  }))
}
