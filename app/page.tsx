import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Figma, Layers, Rocket, Smartphone, Zap } from "lucide-react"

import { appendLanguageParam, getLanguage, type SupportedLanguage } from "@/lib/i18n"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"

interface ServiceCardCopy {
  title: string
  description: string
}

interface ShowcaseProject {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const heroCopy: Record<SupportedLanguage, {
  badge: string
  titlePrefix: string
  titleHighlight: string
  titleSuffix: string
  description: string
  primaryCta: string
  secondaryCta: string
}> = {
  it: {
    badge: "UI/UX & Web Designer",
    titlePrefix: "Crafting",
    titleHighlight: "impactful",
    titleSuffix: "User Experiences",
    description:
      "Ciao! Sono Davide, UX/UI & Web Designer che ama creare esperienze digitali intuitive, funzionali ed esteticamente piacevoli.",
    primaryCta: "Iniziamo a collaborare",
    secondaryCta: "Esplora i progetti",
  },
  en: {
    badge: "UI/UX & Web Designer",
    titlePrefix: "Crafting",
    titleHighlight: "impactful",
    titleSuffix: "User Experiences",
    description:
      "Hi! I'm Davide, a UX/UI & Web designer who loves crafting digital experiences that are intuitive, functional, and visually refined.",
    primaryCta: "Let's start working together",
    secondaryCta: "Explore my projects",
  },
}

const servicesCopy: Array<{
  icon: typeof Layers
  copy: Record<SupportedLanguage, ServiceCardCopy>
}> = [
  {
    icon: Layers,
    copy: {
      it: {
        title: "UI Design",
        description:
          "Interfacce utente intuitive e accattivanti che migliorano l'esperienza dell'utente e aumentano la conversione.",
      },
      en: {
        title: "UI Design",
        description:
          "Intuitive, captivating interfaces that enhance the user experience and boost conversion.",
      },
    },
  },
  {
    icon: Figma,
    copy: {
      it: {
        title: "UX Design",
        description:
          "Ricerca utente, wireframing e prototyping per creare esperienze utente fluide e coinvolgenti.",
      },
      en: {
        title: "UX Design",
        description:
          "User research, wireframing, and prototyping to build seamless, engaging experiences.",
      },
    },
  },
  {
    icon: Code,
    copy: {
      it: {
        title: "Web Designer",
        description:
          "Sviluppo di siti web moderni, reattivi e ottimizzati per le prestazioni utilizzando le tecnologie più recenti.",
      },
      en: {
        title: "Web Designer",
        description:
          "Modern, responsive websites optimised for performance with the latest technologies.",
      },
    },
  },
  {
    icon: Smartphone,
    copy: {
      it: {
        title: "App Design",
        description:
          "Design di applicazioni mobile intuitive e funzionali per iOS e Android che gli utenti adoreranno.",
      },
      en: {
        title: "App Design",
        description:
          "Intuitive, high-performing mobile app design for iOS and Android that people love to use.",
      },
    },
  },
  {
    icon: Zap,
    copy: {
      it: {
        title: "Branding",
        description:
          "Creazione di identità di marca distintive che comunicano i valori e la personalità del tuo business.",
      },
      en: {
        title: "Branding",
        description:
          "Distinctive brand identities that communicate your values and personality.",
      },
    },
  },
  {
    icon: Rocket,
    copy: {
      it: {
        title: "Consulenza UX",
        description:
          "Analisi e ottimizzazione delle tue interfacce esistenti per migliorare l'usabilità e la conversione.",
      },
      en: {
        title: "UX Consulting",
        description:
          "Analysis and optimisation of your existing interfaces to improve usability and conversion.",
      },
    },
  },
]

const servicesSectionCopy: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
}> = {
  it: {
    badge: "Servizi",
    title: "Soluzioni creative per ogni esigenza digitale",
    description:
      "Offro una gamma completa di servizi di design per aiutarti a creare esperienze digitali eccezionali.",
  },
  en: {
    badge: "Services",
    title: "Creative solutions for every digital challenge",
    description:
      "I offer a full spectrum of design services to help you craft outstanding digital experiences.",
  },
}

const projectsSectionCopy: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
  viewAll: string
}> = {
  it: {
    badge: "Progetti",
    title: "Lavori recenti",
    description:
      "Esplora alcuni dei miei progetti più recenti e scopri come ho aiutato i miei clienti a raggiungere i loro obiettivi.",
    viewAll: "Vedi tutti i progetti",
  },
  en: {
    badge: "Projects",
    title: "Recent work",
    description:
      "Explore a selection of my latest projects and see how I've helped clients reach their goals.",
    viewAll: "View all projects",
  },
}

const projectsCopy: Record<SupportedLanguage, ShowcaseProject[]> = {
  it: [
    {
      title: "Topos Network",
      description:
        "Startup innovativa nel settore finance e crypto che porta soluzioni di pagamento decentralizzate nei paesi in via di sviluppo.",
      image: "/Topos.png",
      tags: ["Website", "Fintech", "Crypto"],
      link: "https://www.topos.com.ng/",
    },
    {
      title: "Palermointour",
      description:
        "Sito web dedicato a una guida turistica palermitana per aumentare la visibilità online e favorire le prenotazioni.",
      image: "/Palermointour website.png",
      tags: ["Web", "Branding", "Tourism"],
      link: "https://palermointour.com",
    },
    {
      title: "WhatsApp UX Case Study",
      description:
        "Analisi dell'usabilità di WhatsApp con focus su opportunità di miglioramento per ottimizzare l'esperienza utente.",
      image: "/WhatsappStudy.png",
      tags: ["Case Study", "UX Research", "Product"],
      link: "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    },
    {
      title: "Mavi Pesca",
      description:
        "App mobile progettata per un'azienda ittica per gestire ordini dei clienti e ottimizzare l'intero processo di vendita.",
      image: "/MavipescaStudy.png",
      tags: ["Case Study", "Product Design", "Mobile"],
      link: "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    },
    {
      title: "Matilda The Cat Beat Marketplace",
      description:
        "Marketplace su misura per un beatmaker, con catalogo tracce e call-to-action che indirizzano agli acquisti su BeatStars e al canale YouTube.",
      image: "/CatMatildabeat_Dsk.png",
      tags: ["Web","Marketplace", "Music", "Branding"],
      link: "https://www.matildathecat.com/",
    },
  ],
  en: [
    {
      title: "Topos Network",
      description:
        "Innovative fintech and crypto startup bringing decentralised payment solutions to developing countries.",
      image: "/Topos.png",
      tags: ["Website", "Fintech", "Crypto"],
      link: "https://www.topos.com.ng/",
    },
    {
      title: "Palermointour",
      description:
        "Website for a Palermo tour guide, built to boost online visibility and drive bookings.",
      image: "/Palermointour website.png",
      tags: ["Web", "Branding", "Tourism"],
      link: "https://palermointour.com",
    },
    {
      title: "WhatsApp UX Case Study",
      description:
        "Usability analysis of WhatsApp, highlighting opportunities to optimise the user experience.",
      image: "/WhatsappStudy.png",
      tags: ["Case Study", "UX Research", "Product"],
      link: "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    },
    {
      title: "Mavi Pesca",
      description:
        "Mobile app designed for a seafood company to manage customer orders and streamline the sales process.",
      image: "/MavipescaStudy.png",
      tags: ["Case Study", "Product Design", "Mobile"],
      link: "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    },
    {
      title: "Matilda The Cat Beat Marketplace",
      description:
        "Custom marketplace for a beatmaker with a track catalogue and calls to action for BeatStars and YouTube.",
      image: "/CatMatildabeat_Dsk.png",
      tags: ["Marketplace", "Music", "Branding"],
      link: "https://www.matildathecat.com/",
    },
  ],
}

const demosSectionCopy: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
  demos: Array<{ title: string; description: string; linkLabel: string; href: string; iframe: string }>
}> = {
  it: {
    badge: "Demo Interattive",
    title: "Prova le mie applicazioni",
    description:
      "Esplora alcune delle applicazioni interattive che ho creato per mostrare le mie competenze di design e sviluppo.",
    demos: [
      {
        title: "Generatore di Palette Colori",
        description:
          "Uno strumento interattivo per generare palette di colori armoniose per i tuoi progetti di design.",
        linkLabel: "Apri demo completa",
        href: "/demos/color-palette-generator",
        iframe: "/color-palette-generator",
      },
      {
        title: "Componente di Prezzo Interattivo",
        description:
          "Un componente di prezzo interattivo con slider per selezionare diversi piani di abbonamento.",
        linkLabel: "Apri demo completa",
        href: "/demos/interactive-pricing",
        iframe: "/interactive-pricing",
      },
    ],
  },
  en: {
    badge: "Interactive demos",
    title: "Try my applications",
    description:
      "Explore interactive applications I've built to showcase my design and development skills.",
    demos: [
      {
        title: "Color Palette Generator",
        description:
          "An interactive tool for generating harmonious colour palettes for your design projects.",
        linkLabel: "Open full demo",
        href: "/demos/color-palette-generator",
        iframe: "/color-palette-generator",
      },
      {
        title: "Interactive Pricing Component",
        description:
          "An interactive pricing component with sliders for exploring different subscription plans.",
        linkLabel: "Open full demo",
        href: "/demos/interactive-pricing",
        iframe: "/interactive-pricing",
      },
    ],
  },
}

const contactSectionCopy: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
}> = {
  it: {
    badge: "Contatti",
    title: "Hai un progetto in mente?",
    description:
      "Contattami per discutere del tuo progetto e scoprire come posso aiutarti a realizzare la tua visione.",
  },
  en: {
    badge: "Contact",
    title: "Have a project in mind?",
    description:
      "Get in touch to discuss your project and discover how I can help bring your vision to life.",
  },
}

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams
  const lang = getLanguage(params)

  if (lang === "en") {
    return {
      title: "Davide Giuliano | UI/Web Designer",
      description:
        "Hi! I’m Davide, a UX/UI Designer passionate about creating intuitive, functional, and visually refined digital experiences.",
      alternates: {
        canonical: "/",
      },
    }
  }

  return {
    title: "Davide Giuliano | UI/Web Designer",
    description:
      "Ciao! Sono Davide, un designer UX/UI che ama creare esperienze digitali intuitive, funzionali ed esteticamente piacevoli.",
    alternates: {
      canonical: "/",
    },
  }
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams
  const lang = getLanguage(params)
  const hero = heroCopy[lang]
  const servicesSection = servicesSectionCopy[lang]
  const servicesCards = servicesCopy.map(({ icon: Icon, copy }) => ({ icon: Icon, ...copy[lang] }))
  const projectsSection = projectsSectionCopy[lang]
  const projects = projectsCopy[lang]
  const demosSection = demosSectionCopy[lang]
  const contactSection = contactSectionCopy[lang]

  const contactHref = appendLanguageParam("/contact", lang)
  const projectsHref = appendLanguageParam("/projects", lang)

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="container grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 flex flex-col gap-4 md:order-1">
            <Badge className="w-fit" variant="outline">
              {hero.badge}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {hero.titlePrefix}{" "}
              <span className="gradient-text">{hero.titleHighlight}</span>{" "}
              {hero.titleSuffix}
            </h1>
            <p className="text-xl text-muted-foreground">{hero.description}</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href={contactHref}>
                  {hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href={projectsHref}>{hero.secondaryCta}</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 relative mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 p-4 md:order-2 md:p-8">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-muted">
              <Image
                src="/Me-Gif.gif"
                alt="Davide - UI/UX Designer"
                width={500}
                height={500}
                className="h-full w-full object-cover object-center grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{servicesSection.badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{servicesSection.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{servicesSection.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesCards.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-0 bg-muted/50 transition-all hover:bg-muted">
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{projectsSection.badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{projectsSection.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{projectsSection.description}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link
                href="https://www.behance.net/davidegiuliano89bdff"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsSection.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="hidden" aria-hidden="true">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{demosSection.badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{demosSection.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{demosSection.description}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {demosSection.demos.map((demo) => (
              <Card key={demo.title} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <iframe src={demo.iframe} title={demo.title} className="h-full w-full border-0"></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{demo.title}</h3>
                  <p className="mb-4 text-muted-foreground">{demo.description}</p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={appendLanguageParam(demo.href, lang)}>
                      {demo.linkLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{contactSection.badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{contactSection.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{contactSection.description}</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Suspense fallback={null}>
              <ContactForm key={lang} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
