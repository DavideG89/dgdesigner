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
      title: "Siti per piccole attivita che vogliono",
      highlight: "piu clienti online",
      description:
        "Creo siti veloci, moderni e facili da gestire per piccole e medie imprese, ristoranti e professionisti. Niente complicazioni, solo risultati concreti.",
      primaryCta: "Richiedi una consulenza gratuita",
      secondaryCta: "Scopri il processo",
      note: "Risposta entro 24 ore",
    },
    painPoints: {
      badge: "Problemi comuni",
      title: "Ti riconosci in una di queste situazioni?",
      description: "Realizzo siti in WordPress su misura pensati per:",
      bullets: [
        "Hai un sito vecchio che non rappresenta piu la tua attivita",
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
          title: "Creazione",
          description: "Siti chiari e professionali, pensati per convertire.",
           image: "/Editable Vector.json",
        },
        {
          title: "Responsività",
          description: "Esperienza perfetta per tutti i dispositivi.",
           image: "/responsive xperience.json",
        },
        {
          title: "Performance",
          description: "Prestazioni ottimizzate per caricare velocemente.",
           image: "/Phone call.json",
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
          image: "/Phone call.json",
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

export async function generateMetadata({ searchParams }: LandingPageProps): Promise<Metadata> {
  const params = await searchParams
  const lang = getLanguage(params)

  if (lang === "en") {
    return {
      title: " DGDesigner |Crafting bespoke digital experiences & WordPress sites",
      description: "I create tailor-made digital experiences for small businesses, freelancers and restaurants. Clean design, easy management, and zero technical stress for your brand.",
      alternates: {
        canonical: "/web-design-palermo",
      },
    }
  }

  return {
    title: "DGDesigner | Realizzo siti ed esperienze digitali a Palermo",
    description: "Esperienze digitali su misura per ristoranti, privati e piccole imprese. Design curato, gestione semplice e zero stress tecnico per il tuo business.",
    alternates: {
      canonical: "/web-design-palermo",
    },
  }
}

export default async function LandingPage({ searchParams }: LandingPageProps) {
  const params = await searchParams
  const lang = getLanguage(params)
  const copy = resolveLandingCopy(lang)
  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DG Designer",
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
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.14),transparent_65%)]" />
        <div className="container grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5 uppercase tracking-[0.18em]">
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
              <Badge className="mb-4">{copy.painPoints.badge}</Badge>
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
          <Card className="border-0">
            <CardContent className="p-6">
              <div className="mx-auto w-fit overflow-hidden rounded-2xl bg-background">
                <Image
                  src="/WebDesign.png"
                  alt="Mockup sito web"
                  width={320}
                  height={180}
                  className="block h-auto w-[320px] object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.value.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.value.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {copy.value.cards.map((card) => (
              <Card
                key={card.title}
                className="overflow-hidden border-0 bg-muted/50 transition-all hover:-translate-y-1 hover:bg-muted"
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="overflow-hidden rounded-2xl p-3">
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
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="process">
        <div className="container">
          <div className="mb-10 space-y-3 text-center">
            <Badge className="mb-4">{copy.process.badge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.process.title}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{copy.process.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.process.steps.map((step, index) => (
              <Card key={step.title} className="border-0 bg-muted/30 shadow-lg">
                <CardContent className="space-y-4 p-6">
                  <div className="overflow-hidden rounded-2xl">
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
          <Card className="overflow-hidden border-0 bg-primary/5">
            <CardContent className="grid gap-4 p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-4 md:p-14">
              <div className="space-y-4 text-left md:justify-self-start md:max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.cta.title}</h2>
                <p className="max-w-2xl text-muted-foreground">{copy.cta.description}</p>
                <div className="flex justify-start">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="#contact">
                      {copy.cta.button}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block md:justify-self-end">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-background shadow-xl md:h-56 md:w-56">
                  <Image src="/Me-About.gif" alt="Davide Giuliano" fill className="object-cover" />
                </div>
              </div>
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
    </>
  )
}
