"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import ProjectCard from "@/components/project-card"
import { Search } from "lucide-react"

const projects = [
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
    client: "CatMatildaBeat",
  },
]

const categories = ["Tutti", "Website", "Case Study"]

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
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-start md:justify-center md:gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cerca progetti..."
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
