"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import ProjectCard from "@/components/project-card"
import { Search } from "lucide-react"

import { appendLanguageParam, type SupportedLanguage } from "@/lib/i18n"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  year: string
  client: string
  link: string
}

const projectsByLanguage: Record<SupportedLanguage, Project[]> = {
  it: [
    {
      id: "topos-network",
      title: "Topos Network",
      description:
        "Startup innovativa nel settore finance e crypto che porta soluzioni di pagamento decentralizzate nei paesi in via di sviluppo.",
      image: "/Topos Network_Dsk.png",
      tags: ["Website", "Fintech", "Crypto"],
      category: "Website",
      year: "2024",
      client: "Topos Network",
      link: "https://www.topos.com.ng/",
    },
    {
      id: "palermointour",
      title: "Palermointour",
      description:
        "Sito web dedicato a una guida turistica palermitana per aumentare la visibilità online e favorire le prenotazioni.",
      image: "/Palermointour website.png",
      tags: ["Website", "Branding", "Tourism"],
      category: "Website",
      year: "2024",
      client: "Palermointour",
      link: "https://palermointour.com",
    },
    {
      id: "whatsapp-case-study",
      title: "WhatsApp UX Case Study",
      description:
        "Analisi di usabilità dell'app WhatsApp con focus sulle opportunità di miglioramento dell'esperienza utente.",
      image: "/WhatsappStudy.png",
      tags: ["Case Study", "UX Research", "Product"],
      category: "Case Study",
      year: "2023",
      client: "Ricerca personale",
      link: "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    },
    {
      id: "mavi-pesca",
      title: "Mavi Pesca",
      description:
        "App progettata per un'azienda ittica per gestire gli ordini dei clienti e ottimizzare il processo di vendita.",
      image: "/MavipescaStudy.png",
      tags: ["Case Study", "Product Design", "Mobile"],
      category: "Case Study",
      year: "2023",
      client: "Mavi Pesca",
      link: "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    },
    {
      id: "catmatildabeat",
      title: "CatMatildaBeat Marketplace",
      description:
        "Marketplace per un beatmaker con catalogo tracce e call-to-action verso BeatStars e contenuti YouTube.",
      image: "/CatMatildabeat_Dsk.png",
      tags: ["Website", "Marketplace", "Music"],
      category: "Website",
      year: "2022",
      client: "CatMatildabeat",
      link: "https://www.catmatildabeat.com/",
    },
  ],
  en: [
    {
      id: "topos-network",
      title: "Topos Network",
      description:
        "Innovative fintech and crypto startup bringing decentralised payment solutions to developing countries.",
      image: "/Topos Network_Dsk.png",
      tags: ["Website", "Fintech", "Crypto"],
      category: "Website",
      year: "2024",
      client: "Topos Network",
      link: "https://www.topos.com.ng/",
    },
    {
      id: "palermointour",
      title: "Palermointour",
      description:
        "Website for a Palermo tour guide, built to increase online visibility and drive bookings.",
      image: "/Palermointour website.png",
      tags: ["Website", "Branding", "Tourism"],
      category: "Website",
      year: "2024",
      client: "Palermointour",
      link: "https://palermointour.com",
    },
    {
      id: "whatsapp-case-study",
      title: "WhatsApp UX Case Study",
      description:
        "Usability analysis of WhatsApp highlighting opportunities to enhance the user experience.",
      image: "/WhatsappStudy.png",
      tags: ["Case Study", "UX Research", "Product"],
      category: "Case Study",
      year: "2023",
      client: "Self-initiated research",
      link: "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    },
    {
      id: "mavi-pesca",
      title: "Mavi Pesca",
      description:
        "Mobile app designed for a seafood company to manage customer orders and streamline the sales process.",
      image: "/MavipescaStudy.png",
      tags: ["Case Study", "Product Design", "Mobile"],
      category: "Case Study",
      year: "2023",
      client: "Mavi Pesca",
      link: "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    },
    {
      id: "catmatildabeat",
      title: "CatMatildaBeat Marketplace",
      description:
        "Marketplace for a beatmaker featuring a track catalogue and calls to action leading to BeatStars and YouTube.",
      image: "/CatMatildabeat_Dsk.png",
      tags: ["Website", "Marketplace", "Music"],
      category: "Website",
      year: "2022",
      client: "CatMatildabeat",
      link: "https://www.catmatildabeat.com/",
    },
  ],
}

const heroCopy: Record<SupportedLanguage, {
  badge: string
  titlePrefix: string
  titleHighlight: string
  titleSuffix: string
  description: string
  searchPlaceholder: string
  allLabel: string
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
    badge: "Portfolio",
    titlePrefix: "I miei",
    titleHighlight: "progetti",
    titleSuffix: "",
    description:
      "Esplora alcuni dei miei lavori più recenti e scopri come ho aiutato i miei clienti a raggiungere i loro obiettivi attraverso design innovativo e soluzioni creative.",
    searchPlaceholder: "Cerca progetti...",
    allLabel: "Tutti",
    countLabel: (count) => `${count} progett${count === 1 ? "o" : "i"}`,
    inCategory: (category) => ` in ${category}`,
    forSearch: (term) => ` per "${term}"`,
    noResults: "Nessun progetto trovato per i criteri di ricerca selezionati.",
    clearFilters: "Cancella filtri",
    ctaTitle: "Hai un progetto in mente?",
    ctaDescription:
      "Contattami per discutere del tuo progetto e scoprire come posso aiutarti a realizzare la tua visione.",
    ctaButton: "Iniziamo a collaborare",
  },
  en: {
    badge: "Portfolio",
    titlePrefix: "My",
    titleHighlight: "projects",
    titleSuffix: "",
    description:
      "Explore a selection of my latest work and see how I've helped clients reach their goals through innovative design and creative solutions.",
    searchPlaceholder: "Search projects...",
    allLabel: "All",
    countLabel: (count) => `${count} project${count === 1 ? "" : "s"}`,
    inCategory: (category) => ` in ${category}`,
    forSearch: (term) => ` for "${term}"`,
    noResults: "No projects match the selected filters.",
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
  const projects = useMemo(() => projectsByLanguage[lang], [lang])
  const categories = useMemo(() => [copy.allLabel, "Website", "Case Study"], [copy.allLabel])

  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setSelectedCategory(copy.allLabel)
    setSearchTerm("")
  }, [lang, copy.allLabel])

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === copy.allLabel || project.category === selectedCategory
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
                    variant={selectedCategory === category ? "default" : "outline"}
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
                    link={project.link}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{copy.ctaTitle}</h2>
              <p className="mb-8 text-lg text-muted-foreground">{copy.ctaDescription}</p>
              <Button asChild size="lg" className="rounded-full">
                <Link href={contactHref}>{copy.ctaButton}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
