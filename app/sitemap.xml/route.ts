const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgdesigner.site"
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl

const routes = [
  "/",
  "/about",
  "/services",
  "/works",
  "/works/tools/color-palette-generator",
  "/contact",
]

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function toUrl(path: string): string {
  return path === "/" ? baseUrl : `${baseUrl}${path}`
}

export function GET(): Response {
  const lastModified = new Date().toISOString()

  const xmlUrls = routes
    .map((path) => {
      const url = toUrl(path)
      const itUrl = url
      const enUrl = path === "/" ? `${baseUrl}?lang=en` : `${baseUrl}${path}?lang=en`

      return [
        "  <url>",
        `    <loc>${escapeXml(url)}</loc>`,
        `    <xhtml:link rel="alternate" hreflang="it" href="${escapeXml(itUrl)}" />`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(enUrl)}" />`,
        `    <lastmod>${escapeXml(lastModified)}</lastmod>`,
        "  </url>",
      ].join("\n")
    })
    .join("\n")

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    xmlUrls,
    "</urlset>",
    "",
  ].join("\n")

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  })
}
