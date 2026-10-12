import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { ArrowRight, Check, MessageCircle, PenTool, Rocket } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import LandingMotion from "@/components/landing-motion"
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
    location: string
    focus: string
    imageEyebrow: string
    imageLabel: string
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
      badge: "Siti web per aziende e professionisti",
      title: "Web designer a Palermo:",
      highlight: "creo il sito web per la tua attività.",
      description:
        "Progetto e realizzo siti web per aziende, professionisti e attività locali. Un sito chiaro presenta i tuoi servizi e rende semplice per i potenziali clienti contattarti.",
      primaryCta: "Richiedi un preventivo",
      secondaryCta: "Scopri cosa posso realizzare",
      note: "Sito nuovo o restyling",
      location: "Palermo e online",
      focus: "Design e sviluppo",
      imageEyebrow: "Web Designer Palermo",
      imageLabel: "Siti web per la tua attività",
    },
    painPoints: {
      badge: "La tua situazione",
      title: "Da dove partiamo?",
      description: "Che tu parta da zero o abbia già un sito, capiamo insieme che cosa serve alla tua attività.",
      bullets: [
        "Non hai ancora un sito per presentare la tua attività",
        "Il sito che hai non racconta più ciò che fai o si usa male da mobile",
        "Chi visita il sito non trova un modo semplice per contattarti",
      ],
    },
    value: {
      badge: "Cosa offro",
      title: "Realizzazione siti web a Palermo",
      description: "Ti aiuto a creare un sito nuovo o a migliorare quello che hai, con pagine che spiegano i tuoi servizi e facilitano il contatto.",
      cards: [
        {
          title: "Siti web per la tua attività",
          description: "Presenta chi sei, cosa offri e come contattarti in un sito professionale e facile da navigare.",
           image: "/Editable Vector.json",
        },
        {
          title: "Restyling del sito",
          description: "Riorganizzo contenuti e design per rendere il tuo sito attuale più chiaro e comodo da usare anche da mobile.",
           image: "/responsive xperience.json",
        },
        {
          title: "Landing page per un servizio",
          description: "Una pagina dedicata a spiegare la tua offerta e guidare le persone verso una richiesta di contatto.",
           image: "/performance.json",
        },

      ],
    },
    process: {
      badge: "Processo",
      title: "Dall'idea al sito online",
      description:
        "Definiamo insieme cosa serve, poi progetto e realizzo le pagine prima della pubblicazione.",
      steps: [
        {
          title: "Parliamo della tua attività",
          description: "Mi racconti cosa fai, a chi ti rivolgi e quali informazioni deve trovare chi visita il sito.",
          image: "/Phone call.json",
        },
        {
          title: "Progetto e realizzo il sito",
          description: "Organizzo contenuti e navigazione, curo il design e sviluppo le pagine concordate.",
          image: "/ux wireframe.json",
        },
        {
          title: "Revisioni e pubblicazione",
          description: "Rivediamo il sito insieme, facciamo i controlli finali e lo mettiamo online.",
          image: "/website.json",
        },
      ],
    },
    cta: {
      title: "Hai un sito da creare o migliorare?",
      description:
        "Raccontami la tua attività e cosa vorresti ottenere. Ti aiuto a capire quale sito ti serve e da dove iniziare.",
      button: "Richiedi un preventivo",
    },
    contact: {
      badge: "Contatti",
      title: "Parliamo del sito per la tua attività",
      description: "Hai già un sito o parti da zero? Scrivimi cosa fai e cosa vorresti migliorare: ti risponderò per definire i prossimi passi.",
    },
  },
  en: {
    hero: {
      badge: "Websites for businesses and professionals",
      title: "Web designer in Palermo:",
      highlight: "a website built around your business.",
      description:
        "I design and build websites for businesses, professionals, and local shops. A clear site explains your services and makes it easy for potential clients to contact you.",
      primaryCta: "Request a quote",
      secondaryCta: "See what I can build",
      note: "New website or redesign",
      location: "Palermo and online",
      focus: "Design and development",
      imageEyebrow: "Web designer Palermo",
      imageLabel: "Websites for your business",
    },
    painPoints: {
      badge: "Your situation",
      title: "Where do we start?",
      description: "Whether you are starting from scratch or already have a website, we can work out what your business needs.",
      bullets: [
        "You do not have a website to introduce your business yet",
        "Your current site no longer reflects what you do or is hard to use on mobile",
        "Visitors cannot find an easy way to contact you",
      ],
    },
    value: {
      badge: "What I offer",
      title: "Website design in Palermo",
      description: "I can help you build a new website or improve the one you have, with pages that explain your services and make it easy to get in touch.",
      cards: [
        {
          title: "Websites for your business",
          description: "Show who you are, what you offer, and how to get in touch on a professional, easy-to-navigate site.",
          image: "/Editable Vector.json",
        },
        {
          title: "Website redesign",
          description: "I reorganise content and design so your current site is clearer and easier to use on mobile.",
          image: "/responsive xperience.json",
        },
        {
          title: "Landing pages",
          description: "A focused page that explains your offer and helps visitors get in touch.",
          image: "/performance.json",
        },
      ],
    },
    process: {
      badge: "Process",
      title: "From first idea to live website",
      description: "We agree on what you need, then I design and build the pages before launch.",
      steps: [
        {
          title: "Let's discuss your business",
          description: "Tell me what you do, who you serve, and what visitors need to find on your site.",
          image: "/Phone call.json",
        },
        {
          title: "I design and build your site",
          description: "I organise the content and navigation, design the pages, and build what we agreed on.",
          image: "/ux wireframe.json",
        },
        {
          title: "Review and launch",
          description: "We review the site together, run final checks, and publish it.",
          image: "/website.json",
        },
      ],
    },
    cta: {
      title: "Need a new website or a redesign?",
      description:
        "Tell me about your business and what you want to achieve. I'll help you work out what kind of site you need and where to start.",
      button: "Request a quote",
    },
    contact: {
      badge: "Contact",
      title: "Let's talk about your business website",
      description: "Starting from scratch or improving an existing site? Tell me what you do and what you want to change, and I'll reply with the next steps.",
    },
  },
}

const defaultLandingCopy = landingCopy.it
const pageTitle = "Web Designer Palermo | Siti Web Professionali – DG Designer"
const pageDescription =
  "Cerchi un web designer a Palermo? Realizzo siti web professionali per aziende e professionisti, dal nuovo sito al restyling. Raccontami il tuo progetto."
const pageUrl = "https://www.dgdesigner.site/web-designer-palermo"
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
    description: "Progettazione e realizzazione di siti web per aziende, professionisti e attività locali a Palermo.",
  }


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main data-landing-page className="bg-background text-foreground">
        <LandingMotion />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6">
              <div data-hero-item>
                <Badge className="w-fit border-primary/20 bg-primary/10 px-4 py-1.5 text-primary" variant="outline">
                  {copy.hero.badge}
                </Badge>
              </div>
              <div className="space-y-5">
                <h1 data-hero-item className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                  {copy.hero.title} <span className="gradient-text">{copy.hero.highlight}</span>
                </h1>
                <p data-hero-item className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{copy.hero.description}</p>
              </div>
              <div data-hero-item className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="primary" size="pill">
                  <Link href="#contact">
                    {copy.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="pill">
                  <Link href="#services">{copy.hero.secondaryCta}</Link>
                </Button>
              </div>
              <div className="grid gap-3 pt-3 sm:grid-cols-3">
                {[
                  copy.hero.note,
                  copy.hero.location,
                  copy.hero.focus,
                ].map((item) => (
                  <div data-hero-item key={item} className="surface-panel rounded-lg border border-foreground/10 p-4 text-sm font-medium text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div data-hero-image className="relative mx-auto w-full max-w-lg">
              <div className="surface-panel relative aspect-[4/5] overflow-hidden rounded-lg border border-foreground/10 p-4">
                <div className="absolute bottom-5 left-5 z-10 rounded-lg border border-white/20 bg-background/80 px-4 py-3 shadow-xl backdrop-blur">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.imageEyebrow}</p>
                  <p className="mt-1 text-sm font-semibold">{copy.hero.imageLabel}</p>
                </div>
                <Image
                  src="/Me-Gif.gif"
                  alt="Davide Giuliano, web designer a Palermo"
                  width={520}
                  height={650}
                  className="h-full w-full rounded-md object-cover object-center scale-125"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="services">
          <div className="container">
            <div data-scroll-reveal className="mb-12 max-w-3xl space-y-4">
              <div>
                <Badge className="mb-4 border-accent/30 bg-accent/15 text-accent-foreground">{copy.value.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.value.title}</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">{copy.value.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {copy.value.cards.map((card) => (
                <Card
                  data-scroll-reveal
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

        <section className="py-16 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-scroll-reveal className="surface-panel relative aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10">
              <Image
                src="/da-dove-partiamo-v2.webp"
                alt="Confronto tra un wireframe in bassa fedeltà e il design finale della stessa pagina web"
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div data-scroll-reveal className="space-y-6">
              <div className="space-y-3">
                <Badge className="bg-foreground text-background">{copy.painPoints.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.painPoints.title}</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">{copy.painPoints.description}</p>
              <ul className="grid gap-3">
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

        <section className="py-16 md:py-20" id="process">
          <div className="container">
            <div data-scroll-reveal className="mb-12 max-w-3xl space-y-4">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">{copy.process.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.process.title}</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">{copy.process.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {copy.process.steps.map((step, index) => (
                <Card data-scroll-reveal key={step.title} className="group border-foreground/10 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
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

        {/* Banner contatti nascosto */}
        <section className="hidden py-16 md:py-20">
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
                <div data-scroll-reveal>
                  <Badge className="mb-4 bg-primary text-primary-foreground">{copy.contact.badge}</Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{copy.contact.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">{copy.contact.description}</p>
                </div>
                <Suspense fallback={null}>
                  <ContactForm key={lang} context="website" />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
