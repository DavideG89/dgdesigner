"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CtaBanner } from "@/components/cta-banner"
import ProjectCard from "@/components/project-card"
import { getProjects } from "@/data/projects"
import { Search } from "lucide-react"

import { appendLanguageParam, type SupportedLanguage } from "@/lib/i18n"

const heroCopy: Record<SupportedLanguage, {
  badge: string
  titlePrefix: string
  titleHighlight: string
  titleSuffix: string
  description: string
  searchPlaceholder: string
  allLabel: string
  toolsLabel: string
  countLabel: (count: number) => string
  inCategory: (category: string) => string
  forSearch: (term: string) => string
  noResults: string
  clearFilters: string
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
}> = {
  it: {
    badge: "Works",
    titlePrefix: "I miei",
    titleHighlight: "lavori",
    titleSuffix: "",
    description:
      "Siti web, interfacce e studi UX. Esplora i progetti per settore e tipologia, dai siti per imprese agli studi di esperienza utente.",
    searchPlaceholder: "Cerca lavori...",
    allLabel: "Tutti",
    toolsLabel: "Tools",
    countLabel: (count) => `${count} lavor${count === 1 ? "o" : "i"}`,
    inCategory: (category) => ` in ${category}`,
    forSearch: (term) => ` per "${term}"`,
    noResults: "Nessun lavoro trovato per i criteri di ricerca selezionati.",
    clearFilters: "Cancella filtri",
    ctaTitle: "Hai un progetto in mente?",
    ctaDescription:
      "Contattami per discutere del tuo progetto e scoprire come posso aiutarti a realizzare la tua visione.",
    ctaButton: "Iniziamo a collaborare",
  },
  en: {
    badge: "Works",
    titlePrefix: "My",
    titleHighlight: "works",
    titleSuffix: "",
    description:
      "Websites, interfaces, and UX studies. Explore work across industries, from business websites to user experience studies.",
    searchPlaceholder: "Search works...",
    allLabel: "All",
    toolsLabel: "Tools",
    countLabel: (count) => `${count} work${count === 1 ? "" : "s"}`,
    inCategory: (category) => ` in ${category}`,
    forSearch: (term) => ` for "${term}"`,
    noResults: "No works match the selected filters.",
    clearFilters: "Clear filters",
    ctaTitle: "Have a project in mind?",
    ctaDescription:
      "Get in touch to discuss your project and discover how I can help bring your vision to life.",
    ctaButton: "Let's start working together",
  },
}

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const lang: SupportedLanguage = searchParams.get("lang") === "en" ? "en" : "it"
  const copy = heroCopy[lang]
  const projects = useMemo(() => getProjects(lang), [lang])
  const categories = useMemo(() => [copy.allLabel, "Website", "Case Study", copy.toolsLabel], [copy.allLabel, copy.toolsLabel])

  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setSelectedCategory(copy.allLabel)
    setSearchTerm("")
  }, [lang, copy.allLabel])

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === copy.allLabel || project.category.includes(selectedCategory)
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const resultsLabel = `${copy.countLabel(filteredProjects.length)}${
    selectedCategory !== copy.allLabel ? copy.inCategory(selectedCategory) : ""
  }${searchTerm ? copy.forSearch(searchTerm) : ""}`

  const contactHref = appendLanguageParam("/contact", lang)

  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">{copy.badge}</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {copy.titlePrefix}{" "}
              <span className="gradient-text">{copy.titleHighlight}</span>
              {copy.titleSuffix ? ` ${copy.titleSuffix}` : ""}
            </h1>
            <p className="text-xl text-muted-foreground">{copy.description}</p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-start md:justify-center md:gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder={copy.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="tertiary"
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">{resultsLabel}</p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    link={appendLanguageParam(project.link, lang)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">{copy.noResults}</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory(copy.allLabel)
                  setSearchTerm("")
                }}
                className="mt-4 rounded-full"
              >
                {copy.clearFilters}
              </Button>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        titleId="works-cta-title"
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        href={contactHref}
        actionLabel={copy.ctaButton}
        showIcon={false}
      />
    </>
  )
}
