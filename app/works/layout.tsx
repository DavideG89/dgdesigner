import type { Metadata } from "next"
import type { ReactNode } from "react"

import { getLanguage, type SupportedLanguage } from "@/lib/i18n"

const metadataCopy: Record<SupportedLanguage, { title: string; description: string }> = {
  it: {
    title: "Works",
    description:
      "Case study e lavori selezionati di Davide Giuliano: soluzioni UX/UI, design system e Web Design per brand e startup.",
  },
  en: {
    title: "Works",
    description:
      "Case studies and selected work by Davide Giuliano: UX/UI solutions, design systems, and web design for brands and startups.",
  },
}

type LayoutProps = {
  children: ReactNode
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: LayoutProps): Promise<Metadata> {
  const lang = getLanguage(await searchParams)
  return {
    ...metadataCopy[lang],
    alternates: {
      canonical: "/works",
    },
  }
}

export default function ProjectsLayout({ children }: LayoutProps) {
  return children
}
