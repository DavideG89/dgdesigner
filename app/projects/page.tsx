"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import ProjectCard from "@/components/project-card"
import { Search, Filter } from "lucide-react"

const projects = [
  {
    id: "ecommerce-app",
    title: "E-commerce App Redesign",
    description:
      "Riprogettazione completa dell'interfaccia utente di un'app di e-commerce per migliorare l'esperienza di acquisto.",
    image: "/placeholder.svg?height=600&width=800&text=E-commerce+App",
    tags: ["UI Design", "UX Design", "Mobile App"],
    category: "Mobile App",
    year: "2024",
    client: "ShopTech Solutions",
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description:
      "Design di una dashboard analitica intuitiva per aiutare le aziende a monitorare le loro prestazioni in tempo reale.",
    image: "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
    tags: ["UI Design", "Data Visualization", "Web App"],
    category: "Web App",
    year: "2024",
    client: "DataFlow Inc",
  },
  {
    id: "photography-portfolio",
    title: "Portfolio Fotografico",
    description:
      "Sito web minimalista per un fotografo professionista con galleria responsive e sistema di prenotazione.",
    image: "/placeholder.svg?height=600&width=800&text=Photography+Portfolio",
    tags: ["Web Design", "Development", "Branding"],
    category: "Website",
    year: "2023",
    client: "Marco Fotografo",
  },
  {
    id: "fitness-app",
    title: "App di Fitness",
    description:
      "App mobile per il tracciamento dell'attività fisica con interfaccia intuitiva e visualizzazione dei progressi.",
    image: "/placeholder.svg?height=600&width=800&text=Fitness+App",
    tags: ["UI Design", "UX Design", "Mobile App"],
    category: "Mobile App",
    year: "2023",
    client: "FitLife Studio",
  },
  {
    id: "weather-app",
    title: "Applicazione Meteo Interattiva",
    description:
      "App web interattiva per le previsioni meteo con visualizzazioni animate e interfaccia personalizzabile.",
    image: "/placeholder.svg?height=600&width=800&text=Weather+App",
    tags: ["Web App", "UI Design", "Development"],
    category: "Web App",
    year: "2023",
    client: "WeatherTech",
  },
  {
    id: "learning-platform",
    title: "Piattaforma di Apprendimento",
    description: "Piattaforma educativa con interfaccia intuitiva, tracciamento dei progressi e contenuti interattivi.",
    image: "/placeholder.svg?height=600&width=800&text=Learning+Platform",
    tags: ["UI Design", "UX Research", "Web Platform"],
    category: "Web Platform",
    year: "2022",
    client: "EduTech Solutions",
  },
]

const categories = ["Tutti", "Mobile App", "Web App", "Website", "Web Platform"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "Tutti" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              I miei <span className="gradient-text">progetti</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Esplora alcuni dei miei lavori più recenti e scopri come ho aiutato i miei clienti a raggiungere i loro
              obiettivi attraverso design innovativo e soluzioni creative.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cerca progetti..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {filteredProjects.length} progett{filteredProjects.length === 1 ? "o" : "i"}
              {selectedCategory !== "Tutti" && ` in ${selectedCategory}`}
              {searchTerm && ` per "${searchTerm}"`}
            </p>
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
                    link={`/projects/${project.id}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nessun progetto trovato per i criteri di ricerca selezionati.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("Tutti")
                  setSearchTerm("")
                }}
                className="mt-4 rounded-full"
              >
                Cancella filtri
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Progetti Completati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Tasso di Soddisfazione</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Hai un progetto in mente?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Contattami per discutere del tuo progetto e scoprire come posso aiutarti a realizzare la tua visione.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Iniziamo a collaborare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
