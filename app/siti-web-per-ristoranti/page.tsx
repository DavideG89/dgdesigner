import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import {
  AppWindow,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Globe,
  Mail,
  MessageCircle,
  Smartphone,
  Store,
  TabletSmartphone,
} from "lucide-react"

import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgdesigner.site"
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl
const pagePath = "/siti-web-per-ristoranti"
const pageUrl = `${baseUrl}${pagePath}`
const bookingHref = process.env.NEXT_PUBLIC_BOOKING_URL ?? "#contatti"
const mailHref = "mailto:davidegiuliano.free@gmail.com?subject=Prenotazione%20call%20gratuita%20-%20Sito%20web%20ristorante"
const whatsappHref = `https://wa.me/393205671678?text=${encodeURIComponent(
  "Ciao Davide, vorrei migliorare il sito del mio ristorante. Possiamo parlarne?",
)}`

const problemPoints = [
  "Il menu e difficile da trovare o da leggere",
  "Il sito e lento o confuso da smartphone",
  "Non e chiaro come prenotare o ordinare",
  "Il design non valorizza il locale",
  "I clienti finiscono su piattaforme esterne con commissioni alte",
]

const solutionPoints = [
  "Comunicare subito il tipo di cucina e l'identita del ristorante",
  "Rendere il menu chiaro e facile da consultare",
  "Guidare il cliente a prenotare o ordinare",
  "Valorizzare il brand e le foto del locale",
  "Funzionare perfettamente da smartphone",
]

const caseStudyPoints = [
  "Ricezione ordini online in modo ordinato e tracciabile",
  "Gestione consegne e ritiri da una dashboard semplice",
  "Flusso cliente rapido: menu, selezione prodotti, checkout",
  "Focus su velocita operativa e chiarezza del menu",
]

const services = [
  {
    title: "Sito web per ristoranti",
    description:
      "Siti moderni e chiari progettati per presentare il locale, il menu e facilitare prenotazioni o contatti.",
    icon: Globe,
  },
  {
    title: "Landing page per promozioni o nuove aperture",
    description:
      "Pagine pensate per campagne pubblicitarie, eventi o lancio di nuovi ristoranti.",
    icon: Store,
  },
  {
    title: "Redesign del sito del ristorante",
    description:
      "Ridisegno siti esistenti migliorando struttura, esperienza utente e chiarezza.",
    icon: TabletSmartphone,
  },
  {
    title: "UI design per app food o delivery",
    description:
      "Progettazione di interfacce per app di delivery o sistemi di gestione ordini.",
    icon: AppWindow,
  },
]

const projects = [
  {
    title: "Amico Fritto Delivery App",
    description:
      "App di delivery progettata per un takeaway di Misilmeri, con un'interfaccia semplice e intuitiva che permette agli utenti di sfogliare il menu, personalizzare i prodotti e ordinare rapidamente.",
    image: "/Logo-Amico-Fritto.jpg",
  },
  {
    title: "Sito web per guida turistica",
    description:
      "Landing page progettata per facilitare richieste e prenotazioni da parte dei clienti.",
    image: "/Palermointour website.png",
  },
  {
    title: "Marketplace digitale di beat musicali",
    description:
      "Piattaforma progettata per migliorare navigazione e scoperta dei contenuti.",
    image: "/CatMatildabeat_Dsk.png",
  },
]

const processSteps = [
  {
    title: "Analisi del locale",
    description:
      "Capisco il tipo di clientela, il menu e il posizionamento del ristorante.",
  },
  {
    title: "Struttura della pagina",
    description:
      "Definisco contenuti, gerarchia visiva e call to action.",
  },
  {
    title: "UI Design",
    description:
      "Progetto un'interfaccia moderna, chiara e ottimizzata per mobile.",
  },
  {
    title: "Consegna e supporto",
    description:
      "Ti fornisco il design pronto per lo sviluppo o ti supporto nell'implementazione.",
  },
]

const prices = [
  {
    name: "Sito semplice",
    price: "da 800€",
    description: "Ideale per piccoli locali o nuove aperture.",
  },
  {
    name: "Progetto medio",
    price: "da 1200€",
    description: "Siti piu completi con piu pagine e struttura avanzata.",
    highlighted: true,
  },
  {
    name: "Design strategico",
    price: "da 2500€",
    description: "Progetti complessi con studio UX e progettazione avanzata.",
  },
]

const faqs = [
  {
    question: "Quanto costa creare un sito web per ristorante?",
    answer:
      "Il costo dipende dalla complessita del progetto. Un sito semplice parte da circa 800€, mentre progetti piu completi possono arrivare a 1200€ o piu.",
  },
  {
    question: "Perche un ristorante dovrebbe avere un sito web?",
    answer:
      "Un sito permette di presentare il locale, mostrare il menu, ricevere prenotazioni e ridurre la dipendenza da piattaforme con commissioni.",
  },
  {
    question: "Quanto tempo serve per creare un sito per ristorante?",
    answer:
      "Un sito semplice puo essere progettato in pochi giorni, mentre progetti piu complessi richiedono piu tempo per struttura e design.",
  },
]

export const metadata: Metadata = {
  title: "Siti Web per Ristoranti | UX/UI Designer per Locali Food",
  description:
    "Progetto siti web per ristoranti, pizzerie e locali food pensati per aumentare prenotazioni, ordini online e contatti diretti.",
  keywords: [
    "sito web per ristoranti",
    "siti web per ristoranti",
    "web designer ristoranti",
    "sito per ristorante",
    "sito ristorante professionale",
    "landing page per ristoranti",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Siti Web per Ristoranti | UX/UI Designer per Locali Food",
    description:
      "Siti web e landing page per ristoranti, pizzerie e locali food orientati a prenotazioni, ordini e contatti diretti.",
    url: pageUrl,
    type: "website",
  },
}

export default function RestaurantLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "it",
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(217,133,83,0.16),transparent_62%)]" />
        <div className="container grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">
              UI/Web Design per ristoranti, pizzerie e locali food
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Siti web per ristoranti che vogliono piu prenotazioni e ordini online
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Progetto siti web e landing page per ristoranti, pizzerie e locali food che
                vogliono presentarsi meglio online e ricevere piu clienti dal web.
              </p>
              <p className="max-w-xl text-muted-foreground">
                Il mio approccio unisce UX design, chiarezza dei contenuti e struttura orientata
                alla conversione, per trasformare il sito in uno strumento utile al locale.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href={bookingHref}>
                  Prenota una call gratuita
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Scrivimi su WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Siti per ristoranti a partire da 800€</p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/70 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/delivery-dashboard-mockup.jpg"
                alt="Anteprima dashboard progetto food"
                width={1200}
                height={760}
                className="w-full object-cover"
                priority
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-background/80 p-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Focus</p>
                <p className="mt-1 text-sm font-medium">UX chiara per prenotazioni e ordini</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/80 p-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Mobile first</p>
                <p className="mt-1 text-sm font-medium">Esperienza fluida da smartphone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-5">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Il sito del tuo ristorante ti sta davvero aiutando?
            </h2>
            <p className="text-muted-foreground">
              Molti ristoranti hanno un sito web che esiste, ma non aiuta davvero il locale.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {problemPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/70 p-4"
                >
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              Un sito web progettato bene puo invece diventare uno strumento per ricevere piu
              prenotazioni, piu ordini e piu contatti diretti.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="w-fit">
              Soluzione
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Una presenza online piu chiara, piu credibile e piu utile per il tuo locale
            </h2>
            <p className="text-muted-foreground">
              Progetto siti web per ristoranti pensati per essere semplici da capire e facili da
              usare. Un sito ben progettato puo diventare uno strumento concreto per aumentare
              visibilita e clienti.
            </p>
            <ul className="space-y-3">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-full">
              <Link href={bookingHref}>
                Prenota una call gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/60 p-6 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-background p-4">
                <Smartphone className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold">Esperienza mobile ottimizzata</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Navigazione rapida e contenuti chiari anche da telefono.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background p-4">
                <Store className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold">Più identita al locale</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Stile visivo coerente con cucina, ambiente e posizionamento.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background p-4 sm:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Design e contenuti vengono costruiti per guidare le persone verso una azione
                  concreta: prenotare, ordinare o contattarti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6">
            <Badge variant="outline" className="w-fit">
              Mini case study
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Esperienza concreta nel settore ristorazione
            </h2>
            <p className="text-muted-foreground">
              Ho lavorato direttamente con il settore food progettando una web app di gestione
              ordini per un ristorante takeaway.
            </p>
            <p className="text-muted-foreground">
              Questo progetto mi ha permesso di comprendere da vicino le esigenze operative di un
              ristorante: velocita, chiarezza del menu, gestione degli ordini e semplicita di
              utilizzo.
            </p>

            <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-background">
                <Image
                  src="/delivery-app-mockup.jpg"
                  alt="Mockup app cliente per ordini takeaway"
                  width={760}
                  height={980}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-background">
                  <Image
                    src="/delivery-dashboard-mockup.jpg"
                    alt="Dashboard gestione ordini ristorante"
                    width={1300}
                    height={780}
                    className="w-full object-cover"
                  />
                </div>
                <div className="rounded-2xl border border-border/60 bg-background p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Logo-Amico-Fritto.jpg"
                      alt="Logo progetto ristorante takeaway"
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <p className="font-medium">Web app ordini per ristorante takeaway</p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {caseStudyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cosa posso realizzare</h2>
            <p className="text-muted-foreground">
              Servizi focalizzati su ristorazione e conversione, con struttura modulare per crescere
              nel tempo.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border border-border/60 bg-card/70">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Alcuni progetti</h2>
            <p className="text-muted-foreground">
              Anche quando il settore cambia, il focus resta lo stesso: creare esperienze digitali
              chiare e orientate all'azione.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden border border-border/60">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <CardContent className="space-y-2 p-5">
                  <h3 className="font-semibold leading-snug">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Il mio metodo di lavoro</h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border/60 bg-card/60 p-5"
              >
                <p className="text-sm font-medium text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prezzi indicativi</h2>
            <p className="text-muted-foreground">
              Prezzi chiari, presentati in modo semplice e professionale.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {prices.map((price) => (
              <Card
                key={price.name}
                className={`border ${
                  price.highlighted
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border/60 bg-card/70"
                }`}
              >
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold">{price.name}</h3>
                  <p className="text-3xl font-bold">{price.price}</p>
                  <p className="text-sm text-muted-foreground">{price.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="faq">
        <div className="container">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Domande frequenti</h2>
          </div>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/60 p-2 sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index + 1}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-[radial-gradient(circle_at_bottom,rgba(217,133,83,0.1),transparent_58%)] py-16 md:py-20" id="contatti">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl sm:p-10">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Vuoi migliorare la presenza online del tuo ristorante?
              </h2>
              <p className="text-muted-foreground">
                Se il sito del tuo ristorante non comunica bene il valore del tuo locale, possiamo
                migliorarlo. Prenota una call gratuita oppure scrivimi su WhatsApp per parlarne.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="rounded-full">
                <Link href={bookingHref}>
                  Prenota una call gratuita
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Scrivimi su WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href={mailHref}>
                  Inviami una mail
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Rispondo entro 24 ore. Se preferisci, puoi compilare il form qui sotto.
            </p>

            <div className="mt-8">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
