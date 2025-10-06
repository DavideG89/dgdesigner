import type { Metadata } from "next"
import type { ReactNode } from "react"

import { getLanguage, type SupportedLanguage } from "@/lib/i18n"

const metadataCopy: Record<SupportedLanguage, { title: string; description: string }> = {
  it: {
    title: "Progetti",
    description:
      "Case study e lavori selezionati di Davide Giuliano: soluzioni UX/UI, design system e Web Design per brand e startup.",
  },
  en: {
    title: "Projects",
    description:
      "Case studies and selected work by Davide Giuliano: UX/UI solutions, design systems, and web design for brands and startups.",
  },
}

type LayoutProps = {
  children: ReactNode
  searchParams?: Record<string, string | string[] | undefined>
}

export function generateMetadata({ searchParams }: LayoutProps): Metadata {
  const lang = getLanguage(searchParams)
  return {
    ...metadataCopy[lang],
    alternates: {
      canonical: "/projects",
    },
  }
}

export default function ProjectsLayout({ children }: LayoutProps) {
  return children
}
