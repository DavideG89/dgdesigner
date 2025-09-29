import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Case study e lavori selezionati di Davide Giuliano: soluzioni UX/UI, design system e Web Design per brand e startup.",
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
