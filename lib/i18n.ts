export type SupportedLanguage = "it" | "en"

function normalizeValue(value?: string | string[]): string | undefined {
  if (!value) return undefined
  return Array.isArray(value) ? value[0] : value
}

export function getLanguage(
  searchParams?: Record<string, string | string[] | undefined>,
): SupportedLanguage {
  const lang = normalizeValue(searchParams?.lang)
  return lang === "en" ? "en" : "it"
}

export function appendLanguageParam(path: string, lang: SupportedLanguage): string {
  if (lang !== "en") {
    return path
  }

  if (/^(https?:)?\/\//i.test(path) || path.startsWith("mailto:")) {
    return path
  }

  const [base, hash] = path.split("#")
  const separator = base.includes("?") ? "&" : "?"
  const updated = `${base}${separator}lang=en`

  return hash ? `${updated}#${hash}` : updated
}
