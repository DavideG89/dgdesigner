import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Clock, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "E-commerce App Redesign",
  description:
    "Case study del redesign di un'app e-commerce con focus su UX, UI e incremento delle conversioni.",
  alternates: {
    canonical: "/projects/ecommerce-app",
  },
}

const otherProjects = [
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Design di una dashboard analitica intuitiva per monitorare le prestazioni in tempo reale.",
    image: "/placeholder.svg?height=300&width=400&text=Analytics+Dashboard",
    tags: ["UI Design", "Data Visualization"],
    category: "Web App",
  },
  {
    id: "photography-portfolio",
    title: "Portfolio Fotografico",
    description: "Sito web minimalista per un fotografo professionista con galleria responsive.",
    image: "/placeholder.svg?height=300&width=400&text=Photography+Portfolio",
    tags: ["Web Design", "Development"],
    category: "Website",
  },
  {
    id: "fitness-app",
    title: "App di Fitness",
    description: "App mobile per il tracciamento dell'attività fisica con interfaccia intuitiva.",
    image: "/placeholder.svg?height=300&width=400&text=Fitness+App",
    tags: ["UI Design", "UX Design"],
    category: "Mobile App",
  },
  {
    id: "weather-app",
    title: "Applicazione Meteo",
    description: "App web interattiva per le previsioni meteo con visualizzazioni animate.",
    image: "/placeholder.svg?height=300&width=400&text=Weather+App",
    tags: ["Web App", "UI Design"],
    category: "Web App",
  },
]

export default function EcommerceAppProject() {
  return (
    <>
      {/* Navigation */}
      <section className="py-8">
        <div className="container">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna ai progetti
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>UI Design</Badge>
                <Badge>UX Design</Badge>
                <Badge>Mobile App</Badge>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                E-commerce App <span className="gradient-text">Redesign</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Riprogettazione completa dell'interfaccia utente di un'app di e-commerce per migliorare l'esperienza di
                acquisto e aumentare le conversioni del 40%.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#case-study">
                    Leggi il caso studio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                  <Link href="https://example.com" target="_blank">
                    Vedi il prototipo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
              <Image
                src="/placeholder.svg?height=600&width=800&text=E-commerce+App+Hero"
                alt="E-commerce App Redesign"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Cliente</h3>
                </div>
                <p className="text-muted-foreground">ShopTech Solutions</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Anno</h3>
                </div>
                <p className="text-muted-foreground">2024</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Durata</h3>
                </div>
                <p className="text-muted-foreground">3 mesi</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Risultato</h3>
                </div>
                <p className="text-muted-foreground">+40% conversioni</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Il Caso Studio</h2>
              <p className="text-lg text-muted-foreground">
                Un'analisi approfondita del processo di redesign e dei risultati ottenuti.
              </p>
            </div>

            <div className="space-y-16">
              {/* Challenge */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">La Sfida</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="mb-4 text-muted-foreground">
                      ShopTech Solutions aveva un'app di e-commerce funzionale ma con un tasso di conversione basso e
                      feedback negativi degli utenti riguardo all'usabilità. I principali problemi identificati erano:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Processo di checkout complesso e lungo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Navigazione confusa tra le categorie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Ricerca prodotti inefficace</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Design non responsive su dispositivi mobili</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Old+Design+Problems"
                      alt="Problemi del design precedente"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">La Soluzione</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=New+Design+Solution"
                      alt="Nuova soluzione di design"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="mb-4 text-muted-foreground">
                      Ho sviluppato una strategia di redesign basata su ricerca utente approfondita e best practices di
                      UX design per e-commerce:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Semplificazione del checkout in 3 step</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Navigazione intuitiva con mega menu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Ricerca intelligente con filtri avanzati</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Design mobile-first completamente responsive</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">Il Processo</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="border-0 bg-muted/50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Ricerca & Analisi</h4>
                      <p className="text-sm text-muted-foreground">
                        Analisi dell'app esistente, interviste utente, analisi della concorrenza e identificazione dei
                        pain points.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-muted/50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Design & Prototipazione</h4>
                      <p className="text-sm text-muted-foreground">
                        Creazione di wireframe, design system, prototipi interattivi e test di usabilità iterativi.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-muted/50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Implementazione & Test</h4>
                      <p className="text-sm text-muted-foreground">
                        Collaborazione con il team di sviluppo, test A/B e ottimizzazioni basate sui dati utente.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">I Risultati</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="mb-6 text-muted-foreground">
                      Il redesign ha portato a miglioramenti significativi in tutti i KPI principali dell'app:
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">+40%</div>
                        <div className="text-sm text-muted-foreground">Tasso di conversione</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">-60%</div>
                        <div className="text-sm text-muted-foreground">Abbandono carrello</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">+25%</div>
                        <div className="text-sm text-muted-foreground">Tempo di sessione</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">4.8/5</div>
                        <div className="text-sm text-muted-foreground">Rating App Store</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Results+Charts"
                      alt="Grafici dei risultati"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-8 text-center text-2xl font-bold">Galleria del Progetto</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Homepage+Design"
                  alt="Design della homepage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Product+Page"
                  alt="Pagina prodotto"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Checkout+Flow"
                  alt="Flusso di checkout"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Mobile+Version"
                  alt="Versione mobile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Scopri gli altri progetti</h2>
              <p className="text-lg text-muted-foreground">
                Esplora altri lavori del mio portfolio e scopri come ho aiutato diversi clienti.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden border-0 bg-muted/50 transition-all hover:bg-muted hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">
                      <Link href={`/projects/${project.id}`} className="flex items-center gap-1">
                        {project.title}
                        <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                <Link href="/projects">
                  Vedi tutti i progetti
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
