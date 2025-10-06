import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Clock, Target } from "lucide-react"

import { appendLanguageParam, getLanguage, type SupportedLanguage } from "@/lib/i18n"

interface DetailCardCopy {
  label: string
  value: string
  icon: typeof User
}

interface CaseStudyCopy {
  sectionTitle: string
  sectionSubtitle: string
  challengeTitle: string
  challengeIntro: string
  challengeBullets: string[]
  solutionTitle: string
  solutionIntro: string
  solutionBullets: string[]
  processTitle: string
  processSteps: Array<{ title: string; description: string }>
  resultsTitle: string
  resultsIntro: string
  resultsStats: Array<{ value: string; label: string }>
  galleryTitle: string
  galleryCaptions: string[]
}

interface OtherProject {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
}

const otherProjectsData: Array<{
  id: string
  image: string
  tags: string[]
  category: string
  copy: Record<SupportedLanguage, { title: string; description: string }>
}> = [
  {
    id: "dashboard-analytics",
    image: "/placeholder.svg?height=300&width=400&text=Analytics+Dashboard",
    tags: ["UI Design", "Data Visualization"],
    category: "Web App",
    copy: {
      it: {
        title: "Dashboard Analytics",
        description: "Design di una dashboard analitica intuitiva per monitorare le prestazioni in tempo reale.",
      },
      en: {
        title: "Analytics Dashboard",
        description: "Intuitive analytics dashboard designed to monitor performance in real time.",
      },
    },
  },
  {
    id: "photography-portfolio",
    image: "/placeholder.svg?height=300&width=400&text=Photography+Portfolio",
    tags: ["Web Design", "Development"],
    category: "Website",
    copy: {
      it: {
        title: "Portfolio Fotografico",
        description: "Sito web minimalista per un fotografo professionista con galleria responsive.",
      },
      en: {
        title: "Photography Portfolio",
        description: "Minimalist website for a professional photographer with a responsive gallery.",
      },
    },
  },
  {
    id: "fitness-app",
    image: "/placeholder.svg?height=300&width=400&text=Fitness+App",
    tags: ["UI Design", "UX Design"],
    category: "Mobile App",
    copy: {
      it: {
        title: "App di Fitness",
        description: "App mobile per il tracciamento dell'attività fisica con interfaccia intuitiva.",
      },
      en: {
        title: "Fitness App",
        description: "Mobile app for tracking workouts with an intuitive interface.",
      },
    },
  },
  {
    id: "weather-app",
    image: "/placeholder.svg?height=300&width=400&text=Weather+App",
    tags: ["Web App", "UI Design"],
    category: "Web App",
    copy: {
      it: {
        title: "Applicazione Meteo",
        description: "App web interattiva per le previsioni meteo con visualizzazioni animate.",
      },
      en: {
        title: "Weather App",
        description: "Interactive weather web app with animated visualisations.",
      },
    },
  },
]

const detailCards: Array<{
  icon: typeof User
  copy: Record<SupportedLanguage, { label: string; value: string }>
}> = [
  {
    icon: User,
    copy: {
      it: { label: "Cliente", value: "ShopTech Solutions" },
      en: { label: "Client", value: "ShopTech Solutions" },
    },
  },
  {
    icon: Calendar,
    copy: {
      it: { label: "Anno", value: "2024" },
      en: { label: "Year", value: "2024" },
    },
  },
  {
    icon: Clock,
    copy: {
      it: { label: "Durata", value: "3 mesi" },
      en: { label: "Duration", value: "3 months" },
    },
  },
  {
    icon: Target,
    copy: {
      it: { label: "Risultato", value: "+40% conversioni" },
      en: { label: "Outcome", value: "+40% conversions" },
    },
  },
]

const caseStudyCopy: Record<SupportedLanguage, CaseStudyCopy> = {
  it: {
    sectionTitle: "Il Caso Studio",
    sectionSubtitle: "Un'analisi approfondita del processo di redesign e dei risultati ottenuti.",
    challengeTitle: "La Sfida",
    challengeIntro:
      "ShopTech Solutions aveva un'app di e-commerce funzionale ma con un tasso di conversione basso e feedback negativi degli utenti riguardo all'usabilità. I principali problemi identificati erano:",
    challengeBullets: [
      "Processo di checkout complesso e lungo",
      "Navigazione confusa tra le categorie",
      "Ricerca prodotti inefficace",
      "Design non responsive su dispositivi mobili",
    ],
    solutionTitle: "La Soluzione",
    solutionIntro:
      "Ho sviluppato una strategia di redesign basata su ricerca utente approfondita e best practice di UX design per e-commerce:",
    solutionBullets: [
      "Semplificazione del checkout in 3 step",
      "Navigazione intuitiva con mega menu",
      "Ricerca intelligente con filtri avanzati",
      "Design mobile-first completamente responsive",
    ],
    processTitle: "Il Processo",
    processSteps: [
      {
        title: "Ricerca & Analisi",
        description:
          "Analisi dell'app esistente, interviste utente, analisi della concorrenza e identificazione dei pain point.",
      },
      {
        title: "Design & Prototipazione",
        description:
          "Creazione di wireframe, design system, prototipi interattivi e test di usabilità iterativi.",
      },
      {
        title: "Implementazione & Test",
        description:
          "Collaborazione con il team di sviluppo, test A/B e ottimizzazioni basate sui dati utente.",
      },
    ],
    resultsTitle: "I Risultati",
    resultsIntro: "Il redesign ha portato a miglioramenti significativi in tutti i KPI principali dell'app:",
    resultsStats: [
      { value: "+40%", label: "Tasso di conversione" },
      { value: "-60%", label: "Abbandono carrello" },
      { value: "+25%", label: "Tempo di sessione" },
      { value: "4.8/5", label: "Rating App Store" },
    ],
    galleryTitle: "Galleria del Progetto",
    galleryCaptions: [
      "Design della homepage",
      "Pagina prodotto",
      "Flusso di checkout",
      "Versione mobile",
    ],
  },
  en: {
    sectionTitle: "The case study",
    sectionSubtitle: "An in-depth look at the redesign process and the results achieved.",
    challengeTitle: "The challenge",
    challengeIntro:
      "ShopTech Solutions had a functional e-commerce app but suffered from low conversion rates and usability complaints. The main pain points were:",
    challengeBullets: [
      "A convoluted, lengthy checkout",
      "Confusing navigation across categories",
      "Ineffective product search",
      "Non-responsive design on mobile devices",
    ],
    solutionTitle: "The solution",
    solutionIntro:
      "I created a redesign strategy grounded in deep user research and e-commerce UX best practices:",
    solutionBullets: [
      "Streamlined the checkout into three steps",
      "Introduced an intuitive mega menu",
      "Smart search with advanced filters",
      "Mobile-first design that is fully responsive",
    ],
    processTitle: "The process",
    processSteps: [
      {
        title: "Research & analysis",
        description:
          "Audit of the existing app, user interviews, competitor benchmarking, and pain-point identification.",
      },
      {
        title: "Design & prototyping",
        description:
          "Creation of wireframes, a design system, interactive prototypes, and iterative usability testing.",
      },
      {
        title: "Implementation & testing",
        description:
          "Collaboration with the development team, A/B testing, and data-driven optimisation.",
      },
    ],
    resultsTitle: "The results",
    resultsIntro: "The redesign delivered significant improvements across every key KPI for the app:",
    resultsStats: [
      { value: "+40%", label: "Conversion rate" },
      { value: "-60%", label: "Cart abandonment" },
      { value: "+25%", label: "Session duration" },
      { value: "4.8/5", label: "App Store rating" },
    ],
    galleryTitle: "Project gallery",
    galleryCaptions: [
      "Homepage design",
      "Product page",
      "Checkout flow",
      "Mobile version",
    ],
  },
}

const pageCopy: Record<SupportedLanguage, {
  metadata: { title: string; description: string }
  backLabel: string
  heroTitle: string
  heroDescription: string
  readCaseStudy: string
  viewPrototype: string
  caseStudy: CaseStudyCopy
  otherProjectsTitle: string
  otherProjectsSubtitle: string
  otherProjectsCta: string
}> = {
  it: {
    metadata: {
      title: "E-commerce App Redesign",
      description: "Case study del redesign di un'app e-commerce con focus su UX, UI e incremento delle conversioni.",
    },
    backLabel: "Torna ai progetti",
    heroTitle: "E-commerce App Redesign",
    heroDescription:
      "Riprogettazione completa dell'interfaccia utente di un'app di e-commerce per migliorare l'esperienza di acquisto e aumentare le conversioni del 40%.",
    readCaseStudy: "Leggi il caso studio",
    viewPrototype: "Vedi il prototipo",
    caseStudy: caseStudyCopy.it,
    otherProjectsTitle: "Scopri gli altri progetti",
    otherProjectsSubtitle: "Esplora altri lavori del mio portfolio e scopri come ho aiutato diversi clienti.",
    otherProjectsCta: "Vedi tutti i progetti",
  },
  en: {
    metadata: {
      title: "E-commerce App Redesign",
      description: "Case study of an e-commerce app redesign focused on UX, UI, and boosting conversions.",
    },
    backLabel: "Back to projects",
    heroTitle: "E-commerce App Redesign",
    heroDescription:
      "Complete redesign of an e-commerce app interface to improve the shopping experience and lift conversions by 40%.",
    readCaseStudy: "Read the case study",
    viewPrototype: "View the prototype",
    caseStudy: caseStudyCopy.en,
    otherProjectsTitle: "Explore more projects",
    otherProjectsSubtitle: "Browse additional portfolio pieces and see how I've helped different clients.",
    otherProjectsCta: "View all projects",
  },
}

const galleryImages = [
  "/placeholder.svg?height=400&width=600&text=Homepage+Design",
  "/placeholder.svg?height=400&width=600&text=Product+Page",
  "/placeholder.svg?height=400&width=600&text=Checkout+Flow",
  "/placeholder.svg?height=400&width=600&text=Mobile+Version",
]

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>
}

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const lang = getLanguage(searchParams)
  return {
    ...pageCopy[lang].metadata,
    alternates: {
      canonical: "/projects/ecommerce-app",
    },
  }
}

export default function EcommerceAppProject({ searchParams }: PageProps) {
  const lang = getLanguage(searchParams)
  const copy = pageCopy[lang]
  const details: DetailCardCopy[] = detailCards.map(({ icon, copy: detailCopy }) => ({
    icon,
    label: detailCopy[lang].label,
    value: detailCopy[lang].value,
  }))
  const caseStudy = copy.caseStudy
  const otherProjects = otherProjectsData.map(({ id, image, tags, category, copy: projectCopy }) => ({
    id,
    image,
    tags,
    category,
    ...projectCopy[lang],
  }))

  const projectsHref = appendLanguageParam("/projects", lang)

  return (
    <>
      {/* Navigation */}
      <section className="py-8">
        <div className="container">
          <Button asChild variant="ghost" className="mb-4">
            <Link href={projectsHref}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {copy.backLabel}
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
                {copy.heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gradient-text">{copy.heroTitle.split(" ").slice(-1)}</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">{copy.heroDescription}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#case-study">
                    {copy.readCaseStudy}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                  <Link href="https://example.com" target="_blank">
                    {copy.viewPrototype}
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
            {details.map((detail) => (
              <Card key={detail.label} className="border-0 bg-muted/50">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <detail.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-bold">{detail.label}</h3>
                  </div>
                  <p className="text-muted-foreground">{detail.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{caseStudy.sectionTitle}</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.sectionSubtitle}</p>
            </div>

            <div className="space-y-16">
              {/* Challenge */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">{caseStudy.challengeTitle}</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="mb-4 text-muted-foreground">{caseStudy.challengeIntro}</p>
                    <ul className="space-y-2">
                      {caseStudy.challengeBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Old+Design+Problems"
                      alt="Old design problems"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">{caseStudy.solutionTitle}</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=New+Design+Solution"
                      alt="New design solution"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="mb-4 text-muted-foreground">{caseStudy.solutionIntro}</p>
                    <ul className="space-y-2">
                      {caseStudy.solutionBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">{caseStudy.processTitle}</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {caseStudy.processSteps.map((step, index) => (
                    <Card key={step.title} className="border-0 bg-muted/50">
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="text-xl font-bold">{index + 1}</span>
                        </div>
                        <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">{caseStudy.resultsTitle}</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="mb-6 text-muted-foreground">{caseStudy.resultsIntro}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {caseStudy.resultsStats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-3xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Results+Charts"
                      alt="Results charts"
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
            <h3 className="mb-8 text-center text-2xl font-bold">{caseStudy.galleryTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {galleryImages.map((image, index) => (
                <div key={image} className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                  <Image src={image} alt={caseStudy.galleryCaptions[index]} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{copy.otherProjectsTitle}</h2>
              <p className="text-lg text-muted-foreground">{copy.otherProjectsSubtitle}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {otherProjects.map((project) => (
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
                    <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                      <Link href={appendLanguageParam(`/projects/${project.id}`, lang)} className="flex items-center gap-1">
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
                <Link href={projectsHref}>
                  {copy.otherProjectsCta}
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
