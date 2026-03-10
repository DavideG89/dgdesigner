import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { ArrowRight, Check, MessageCircle, PenTool, Rocket } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { getLanguage, type SupportedLanguage } from "@/lib/i18n"

type LandingCopy = {
  hero: {
    badge: string
    title: string
    highlight: string
    description: string
    primaryCta: string
    secondaryCta: string
    note: string
  }
  painPoints: {
    title: string
    description: string
    bullets: string[]
  }
  value: {
    title: string
    bullets: string[]
  }
  audience: {
    title: string
    items: string[]
  }
  process: {
    title: string
    steps: Array<{ title: string; description: string; image: string }>
  }
  cta: {
    title: string
    description: string
    button: string
  }
  contact: {
    badge: string
    title: string
    description: string
  }
}

const landingCopy: Record<SupportedLanguage, LandingCopy> = {
  it: {
    hero: {
      badge: "Siti WordPress professionali",
      title: "Siti per piccole attivita che vogliono",
      highlight: "piu clienti online",
      description:
        "Creo siti veloci, moderni e facili da gestire per ristoranti, professionisti e piccole imprese. Niente complicazioni, solo risultati concreti.",
      primaryCta: "Richiedi una consulenza gratuita",
      secondaryCta: "Scopri il processo",
      note: "Risposta entro 24 ore",
    },
    painPoints: {
      title: "Ti riconosci in una di queste situazioni?",
      description: "Realizzo siti WordPress su misura pensati per:",
      bullets: [
        "Hai un sito vecchio che non rappresenta piu la tua attivita",
        "Il tuo sito e lento o non funziona bene da mobile",
        "Le persone visitano il sito ma non ti contattano",
        "Non sai da dove iniziare per rifarlo (e hai paura dei costi)",
      ],
    },
    value: {
      title: "Cosa posso fare per te",
      bullets: [
        "Siti chiari e professionali, pensati per convertire",
        "Esperienza perfetta da mobile",
        "Prestazioni ottimizzate per caricare velocemente",
        "Percorsi guidati che portano l'utente a contattarti",
      ],
    },
    audience: {
      title: "Questo servizio e ideale se sei:",
      items: [
        "Un ristoratore o una attivita locale",
        "Un libero professionista",
        "Una piccola o media impresa",
        "Un freelance che vuole un sito serio e credibile",
      ],
    },
    process: {
      title: "Il processo e semplice",
      steps: [
        {
          title: "Call di allineamento",
          description: "Raccogliamo obiettivi, contenuti e priorita in una breve call.",
          image: "/Topos.png",
        },
        {
          title: "Design e sviluppo",
          description: "Progetto un layout chiaro e lo trasformo in un sito veloce.",
          image: "/Palermointour website.png",
        },
        {
          title: "Messa online",
          description: "Pubblicazione, test finali e supporto per il lancio.",
          image: "/WhatsappStudy.png",
        },
      ],
    },
    cta: {
      title: "Hai un progetto in mente?",
      description:
        "Raccontami cosa ti serve e vediamo insieme se posso aiutarti. La prima consulenza e gratuita e senza impegno.",
      button: "Prenota la tua consulenza",
    },
    contact: {
      badge: "Contatti",
      title: "Parliamo del tuo sito",
      description: "Compila il form e ti rispondo entro 24 ore.",
    },
  },
  en: {
    hero: {
      badge: "Professional WordPress sites",
      title: "Websites for small businesses that want",
      highlight: "more clients online",
      description:
        "I build fast, modern, easy-to-manage websites for restaurants, professionals, and small businesses. No complexity, just real results.",
      primaryCta: "Book a free consultation",
      secondaryCta: "See the process",
      note: "Reply within 24 hours",
    },
    painPoints: {
      title: "Do any of these sound familiar?",
      description: "I design WordPress sites tailored for:",
      bullets: [
        "Your current site feels outdated and off-brand",
        "Your site is slow or broken on mobile",
        "Visitors browse but never contact you",
        "You do not know where to start (and fear the costs)",
      ],
    },
    value: {
      title: "What I can do for you",
      bullets: [
        "Clear, professional websites designed to convert",
        "Perfect mobile experience",
        "Optimised performance for fast loading",
        "Guided journeys that lead users to contact you",
      ],
    },
    audience: {
      title: "This service is ideal if you are:",
      items: [
        "A restaurant or local business",
        "A freelance professional",
        "A small or mid-sized company",
        "A freelancer who needs a credible website",
      ],
    },
    process: {
      title: "The process is simple",
      steps: [
        {
          title: "Alignment call",
          description: "We gather goals, content, and priorities in a short call.",
          image: "/Topos.png",
        },
        {
          title: "Design and build",
          description: "I craft a clear layout and turn it into a fast website.",
          image: "/Palermointour website.png",
        },
        {
          title: "Launch",
          description: "Go live, final tests, and launch support.",
          image: "/WhatsappStudy.png",
        },
      ],
    },
    cta: {
      title: "Got a project in mind?",
      description:
        "Tell me what you need and we will see if I can help. The first consultation is free and without commitment.",
      button: "Book your consultation",
    },
    contact: {
      badge: "Contact",
      title: "Let's talk about your website",
      description: "Fill out the form and I will reply within 24 hours.",
    },
  },
}

type LandingPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: LandingPageProps): Promise<Metadata> {
  const params = await searchParams
  const lang = getLanguage(params)

  if (lang === "en") {
    return {
      title: "WordPress Landing Page | Davide Giuliano",
      description: "Professional WordPress sites for small businesses that want more clients online.",
      alternates: {
        canonical: "/landing",
      },
    }
  }

  return {
    title: "Landing Page WordPress | Davide Giuliano",
    description: "Siti WordPress professionali per piccole attivita che vogliono piu clienti online.",
    alternates: {
      canonical: "/landing",
    },
  }
}

export default async function LandingPage({ searchParams }: LandingPageProps) {
  const params = await searchParams
  const lang = getLanguage(params)
  const copy = landingCopy[lang]

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.14),transparent_65%)]" />
        <div className="container grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <Badge className="w-fit" variant="outline">
              {copy.hero.badge}
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {copy.hero.title} <span className="text-primary">{copy.hero.highlight}</span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">{copy.hero.description}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">
                  {copy.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="#process">{copy.hero.secondaryCta}</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{copy.hero.note}</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-primary/10 p-5 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-muted">
              <Image
                src="/Me-Gif.gif"
                alt="Designer portrait"
                width={520}
                height={520}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.painPoints.title}</h2>
              <p className="text-muted-foreground">{copy.painPoints.description}</p>
            </div>
            <ul className="space-y-3">
              {copy.painPoints.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-muted-foreground">
              Se anche solo uno di questi punti ti suona familiare, sei nel posto giusto.
            </p>
          </div>
          <Card className="border-0 bg-muted/30 shadow-lg">
            <CardContent className="p-6">
              <div className="overflow-hidden rounded-2xl bg-background">
                <Image
                  src="/WebDesign.png"
                  alt="Mockup sito web"
                  width={720}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.value.title}</h2>
            <ul className="space-y-3">
              {copy.value.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="border-0 bg-muted/30 shadow-lg">
            <CardContent className="space-y-4 p-6">
              <p className="text-lg font-semibold">{copy.audience.title}</p>
              <div className="space-y-3">
                {copy.audience.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-background px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20" id="process">
        <div className="container">
          <div className="mb-10 space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.process.title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.process.steps.map((step, index) => (
              <Card key={step.title} className="border-0 bg-muted/30 shadow-lg">
                <CardContent className="space-y-4 p-6">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={520}
                      height={360}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {index === 0 && <MessageCircle className="h-4 w-4 text-primary" />}
                    {index === 1 && <PenTool className="h-4 w-4 text-primary" />}
                    {index === 2 && <Rocket className="h-4 w-4 text-primary" />}
                    <span>Step {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <Card className="border-0 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-4 p-10 text-center md:p-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.cta.title}</h2>
              <p className="max-w-2xl text-muted-foreground">{copy.cta.description}</p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">
                  {copy.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{copy.contact.badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.contact.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.contact.description}</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Suspense fallback={null}>
              <ContactForm key={lang} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
