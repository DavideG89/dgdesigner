import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { ArrowRight, Check, MessageCircle, PenTool, Rocket } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import LottieAnimation from "@/components/lottie-animation"
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
    badge: string
    title: string
    description: string
    bullets: string[]
  }
  value: {
    badge: string
    title: string
    description: string
    cards: Array<{
      title: string
      description: string
      image: string
    }>
  }
  process: {
    badge: string
    title: string
    description: string
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
      title: "Web designer a Palermo:",
      highlight: "Realizzo siti web focalizzati sull'esperienza utente.",
      description:
        "Trasforma la tua presenza online con un design curato che converte i visitatori in clienti, senza stress tecnico.",
      primaryCta: "Chiedimi un parere senza impegno",
      secondaryCta: "Guarda cosa posso fare per te",
      note: "Risposta entro 24 ore",
    },
    painPoints: {
      badge: "Problemi comuni",
      title: "Ti riconosci in una di queste situazioni?",
      description: "Aiuto le piccole imprese e i ristoranti di Palermo a superare la confusione digitale con soluzioni semplici e trasparenti.",
      bullets: [
        "Hai un sito vecchio che non rappresenta più la tua attività",
        "Il tuo sito e lento o non funziona bene da mobile",
        "Le persone visitano il sito ma non ti contattano",
        "Non sai da dove iniziare per rifarlo (e hai paura dei costi)",
      ],
    },
    value: {
      badge: "Cosa offro",
      title: "Cosa posso fare per te",
      description: "Un sito ben fatto deve essere chiaro, veloce e orientare subito l'utente all'azione.",
      cards: [
        {
          title: "Siti Web su misura",
          description: "Siti chiari e professionali, pensati per convertire.",
           image: "/Editable Vector.json",
        },
        {
          title: "User Experience (UX) Design",
          description: "Esperienza perfetta per tutti i dispositivi.",
           image: "/responsive xperience.json",
        },
        {
          title: "SEO e Velocità",
          description: "Prestazioni ottimizzate per caricare velocemente.",
           image: "/performance.json",
        },

      ],
    },
    process: {
      badge: "Processo",
      title: "Il processo è semplice",
      description:
        "Ti accompagno in ogni fase, dal primo confronto fino alla pubblicazione finale del sito.",
      steps: [
        {
          title: "Call di allineamento",
          description: "Raccogliamo obiettivi, contenuti e priorita in una breve call.",
          image: "/Phone call.json",
        },
        {
          title: "Design e sviluppo",
          description: "Progetto un layout chiaro e lo trasformo in un sito veloce.",
          image: "/ux wireframe.json",
        },
        {
          title: "Messa online",
          description: "Pubblicazione, test finali e supporto per il lancio.",
          image: "/website.json",
        },
      ],
    },
    cta: {
      title: "Raccontami la tua attività",
      description:
        "Raccontami cosa ti serve e vediamo insieme se posso aiutarti.\nLa prima consulenza e gratuita e senza impegno.",
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
      badge: "Common problems",
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
      badge: "What I offer",
      title: "What I can do for you",
      description: "A good website should be clear, fast, and lead users toward action.",
      cards: [
        {
          title: "Conversion-focused",
          description: "Clear, professional sites designed to convert.",
          image: "/Editable Vector.json",
        },
        {
          title: "Responsive design",
          description: "A smooth experience on every device.",
          image: "/responsive xperience.json",
        },
        {
          title: "Performance",
          description: "Optimised to load fast.",
          image: "/performance.json",
        },
      ],
    },
    process: {
      badge: "Process",
      title: "The process is simple",
      description: "I guide you through each step, from the first conversation to the final launch.",
      steps: [
        {
          title: "Alignment call",
          description: "We gather goals, content, and priorities in a short call.",
          image: "/Phone call.json",
        },
        {
          title: "Design and build",
          description: "I craft a clear layout and turn it into a fast website.",
          image: "/ux wireframe.json",
        },
        {
          title: "Launch",
          description: "Go live, final tests, and launch support.",
          image: "/website.json",
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

const defaultLandingCopy = landingCopy.it
const pageTitle = "Web Designer a Palermo | Davide Giuliano"
const pageDescription =
  "Realizzo siti web chiari, veloci e orientati all'esperienza utente per ristoranti, professionisti e piccole imprese."
const pageUrl = "https://www.dgdesigner.site/web-design-palermo"
const pageImage = "https://www.dgdesigner.site/Me-About.gif"

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "DG Designer",
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [
      {
        url: pageImage,
        width: 1280,
        height: 720,
        alt: "Davide Giuliano - Web Designer a Palermo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

function resolveLandingCopy(lang: SupportedLanguage): LandingCopy {
  const selectedCopy = landingCopy[lang] ?? defaultLandingCopy

  return {
    hero: selectedCopy.hero ?? defaultLandingCopy.hero,
    painPoints: selectedCopy.painPoints ?? defaultLandingCopy.painPoints,
    value: selectedCopy.value ?? defaultLandingCopy.value,
    process: selectedCopy.process ?? defaultLandingCopy.process,
    cta: selectedCopy.cta ?? defaultLandingCopy.cta,
    contact: selectedCopy.contact ?? defaultLandingCopy.contact,
  }
}

type LandingPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function LandingPage({ searchParams }: LandingPageProps) {
  const params = await searchParams
  const lang = getLanguage(params)
  const copy = resolveLandingCopy(lang)
  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Davide Giuliano - Web Designer Freelance a Palermo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palermo",
      addressRegion: "PA",
      addressCountry: "IT",
    },
    description: "Realizzazione siti web per ristoranti e piccole imprese a Palermo e all'estero.",
  }


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="motion-rise flex flex-col gap-6">
              <Badge className="w-fit border-primary/20 bg-primary/10 px-4 py-1.5 text-primary" variant="outline">
                {copy.hero.badge}
              </Badge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                  {copy.hero.title} <span className="gradient-text">{copy.hero.highlight}</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{copy.hero.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="primary" size="pill">
                  <Link href="#contact">
                    {copy.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="pill">
                  <Link href="#process">{copy.hero.secondaryCta}</Link>
                </Button>
              </div>
              <div className="grid gap-3 pt-3 sm:grid-cols-3">
                {[
                  copy.hero.note,
                  "Palermo / Remote",
                  "UX + Performance",
                ].map((item) => (
                  <div key={item} className="surface-panel rounded-lg border border-foreground/10 p-4 text-sm font-medium text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="motion-rise-delay relative mx-auto w-full max-w-lg">
              <div className="surface-panel motion-float relative aspect-[4/5] overflow-hidden rounded-lg border border-foreground/10 p-4">
                <div className="absolute left-4 right-4 top-4 z-10 h-px scan-line" />
                <div className="absolute bottom-5 left-5 z-10 rounded-lg border border-white/20 bg-background/80 px-4 py-3 shadow-xl backdrop-blur">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Web Design Palermo</p>
                  <p className="mt-1 text-sm font-semibold">Siti chiari, veloci, usabili</p>
                </div>
                <Image
                  src="/Me-Gif.gif"
                  alt=" DGDesigner - Web Designer esperto in UX a Palermo"
                  width={520}
                  height={650}
                  className="h-full w-full rounded-md object-cover object-center scale-125"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="surface-panel overflow-hidden rounded-lg border border-foreground/10 p-6">
              <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-md bg-background/70">
                <Image
                  src="/WebDesign.png"
                  alt="Mockup sito web"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge className="bg-foreground text-background">{copy.painPoints.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.painPoints.title}</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">{copy.painPoints.description}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {copy.painPoints.bullets.map((item) => (
                  <li key={item} className="surface-panel flex items-start gap-3 rounded-lg border border-foreground/10 p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-6 text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
              <div>
                <Badge className="mb-4 border-accent/30 bg-accent/15 text-accent-foreground">{copy.value.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.value.title}</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground md:text-right">{copy.value.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {copy.value.cards.map((card) => (
                <Card
                  key={card.title}
                  className="group overflow-hidden border-foreground/10 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="overflow-hidden rounded-lg bg-muted/60 p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                      {card.image.endsWith(".json") ? (
                        <LottieAnimation src={card.image} alt={card.title} className="h-40 w-full" />
                      ) : (
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={520}
                          height={360}
                          className="h-40 w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{card.title}</h3>
                      <p className="leading-7 text-muted-foreground">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" id="process">
          <div className="container">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">{copy.process.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.process.title}</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground md:text-right">{copy.process.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {copy.process.steps.map((step, index) => (
                <Card key={step.title} className="group border-foreground/10 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="overflow-hidden rounded-lg bg-muted/60">
                      {step.image.endsWith(".json") ? (
                        <LottieAnimation src={step.image} alt={step.title} className="h-40 w-full" />
                      ) : (
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={520}
                          height={360}
                          className="h-40 w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {index === 0 && <MessageCircle className="h-4 w-4 text-primary" />}
                      {index === 1 && <PenTool className="h-4 w-4 text-primary" />}
                      {index === 2 && <Rocket className="h-4 w-4 text-primary" />}
                      <span>Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{step.title}</h3>
                    <p className="leading-7 text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="overflow-hidden rounded-lg border border-foreground/10 bg-foreground text-background">
              <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.cta.title}</h2>
                  <p className="max-w-2xl whitespace-pre-line text-lg leading-8 text-background/70">{copy.cta.description}</p>
                  <Button asChild variant="primary" size="pill">
                    <Link href="#contact">
                      {copy.cta.button}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="relative h-52 w-52 overflow-hidden rounded-lg border border-background/15 bg-background/10 shadow-xl">
                    <Image src="/Me-About.gif" alt="Davide Giuliano" fill className="object-cover scale-125" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="contact">
          <div className="container">
            <div className="surface-panel overflow-hidden rounded-lg border border-foreground/10">
              <div className="grid gap-8 p-6 md:grid-cols-[0.8fr_1fr] md:p-10 lg:p-12">
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <Badge className="mb-4 bg-primary text-primary-foreground">{copy.contact.badge}</Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.contact.title}</h2>
                    <p className="mt-5 text-lg leading-8 text-muted-foreground">{copy.contact.description}</p>
                  </div>
                  <div className="rounded-lg border border-foreground/10 bg-background/60 p-4 text-sm text-muted-foreground">
                    Palermo / Remote<br />
                    {copy.hero.note}
                  </div>
                </div>
                <Suspense fallback={null}>
                  <ContactForm key={lang} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
