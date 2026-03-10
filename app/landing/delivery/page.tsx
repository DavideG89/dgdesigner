import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ShoppingBag,
  BarChart3,
  User,
  Clock,
  MapPin,
  BookOpen,
  Layers,
  Utensils,
  ChefHat,
  Star,
  Smartphone,
  QrCode,
  Users,
  PhoneOff,
  ClipboardList,
  RefreshCcw,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Web App Delivery per Ristoranti | Davide Giuliano – DG Designer",
  description:
    "Ricevi ordini online direttamente dal tuo ristorante. Un sistema semplice per gestire delivery, pickup e ordini dal tavolo, controllato da una dashboard facile da usare.",
  alternates: {
    canonical: "/landing/delivery",
  },
  openGraph: {
    title: "Web App Delivery per Ristoranti | Davide Giuliano – DG Designer",
    description:
      "Ricevi ordini online direttamente dal tuo ristorante. Delivery, pickup, QR menu e ordini dal tavolo — tutto in una dashboard.",
  },
}

const features = [
  {
    icon: ShoppingBag,
    title: "Delivery con rider del ristorante",
    description:
      "I clienti ordinano online e tu gestisci la consegna con i tuoi rider. Nessuna piattaforma di mezzo.",
  },
  {
    icon: Utensils,
    title: "Ordini da asporto (pickup)",
    description:
      "Il cliente prenota il ritiro direttamente dall'app. Arriva, ritira e va. Niente attese inutili al telefono.",
  },
  {
    icon: QrCode,
    title: "Menu digitale con QR code",
    description:
      "Un QR code sul tavolo apre il menu digitale dal telefono. Sempre aggiornato, senza stampare niente.",
  },
  {
    icon: ClipboardList,
    title: "Ordini direttamente dal tavolo",
    description:
      "I clienti al tavolo possono ordinare e pagare dal proprio smartphone, riducendo il carico sui camerieri.",
  },
  {
    icon: BarChart3,
    title: "Dashboard per gestire gli ordini",
    description:
      "Tutti gli ordini in un unico pannello, con stato aggiornabile in tempo reale. Niente fogli, niente confusione.",
  },
  {
    icon: BookOpen,
    title: "Menu aggiornabile in autonomia",
    description:
      "Aggiungi, modifica o rimuovi piatti in qualsiasi momento. Nessun tecnico necessario, lo fai tu direttamente.",
  },
]

const steps = [
  {
    number: "01",
    icon: ChefHat,
    title: "Configuriamo il sistema per il tuo ristorante",
    description:
      "Capiamo insieme le esigenze specifiche: tipologia di servizio, menu, zone di consegna e flusso degli ordini.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Carichiamo il menu e impostiamo ordini e consegne",
    description:
      "Preparo il menu digitale con foto e categorie, configuro i metodi di pagamento e le impostazioni di consegna.",
  },
  {
    number: "03",
    icon: Star,
    title: "I clienti possono iniziare a ordinare online",
    description:
      "Il sistema va online, testato e pronto. Ti mostro come usare la dashboard e poi gestisci tutto in autonomia.",
  },
]

const benefits = [
  {
    icon: PhoneOff,
    title: "Meno telefonate durante il servizio",
    description:
      "Gli ordini arrivano direttamente nella dashboard. Niente piu interruzioni in cucina o errori da trascrizione.",
  },
  {
    icon: ClipboardList,
    title: "Ordini piu chiari e organizzati",
    description:
      "Ogni ordine e scritto, dettagliato e tracciabile. Elimini gli errori e servi meglio i tuoi clienti.",
  },
  {
    icon: RefreshCcw,
    title: "Menu aggiornabile facilmente",
    description:
      "Hai piena autonomia sul menu. Cambi prezzi, aggiungi piatti del giorno o disattivi temporaneamente un prodotto.",
  },
  {
    icon: Users,
    title: "Possibilita di conoscere i propri clienti",
    description:
      "Il sistema raccoglie dati sugli ordini: chi compra, cosa ordina, quando. Informazioni che le piattaforme terze non ti danno mai.",
  },
]

export default function DeliveryLandingPage() {
  return (
    <main className="bg-background text-foreground">

      {/* ── INTRO FREELANCER ──────────────────────────────────── */}
      <section className="relative flex min-h-[440px] overflow-hidden border-b border-border/50">
        <div className="relative hidden w-[40%] shrink-0 md:block">
          <Image
            src="/Me-About.gif"
            alt="Davide Giuliano – Designer e sviluppatore freelance"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex w-full flex-col justify-center px-6 py-14 md:w-[60%] md:px-12 lg:px-16">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              <User className="mr-1.5 h-3 w-3" />
              Freelancer
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ciao, sono{" "}
              <span className="text-primary">Davide Giuliano</span>
            </h2>
            <p className="max-w-xl text-pretty text-muted-foreground leading-relaxed">
              Sono un designer e sviluppatore freelance con oltre 5 anni di esperienza nella
              progettazione di interfacce digitali. Lavoro con ristoratori, piccole imprese e
              startup per trasformare idee in prodotti web concreti, curati nei dettagli e
              pronti a generare risultati fin dal primo giorno.
            </p>
            <p className="max-w-xl text-pretty text-muted-foreground leading-relaxed">
              Ho sviluppato un sistema di ordinazione digitale pensato specificamente per i
              ristoranti — e in questa pagina ti spiego esattamente cosa fa e come puo
              aiutare il tuo locale.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["UX/UI Design", "Web Development", "React & Next.js", "Figma", "Stripe"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(217,133,83,0.08),transparent_60%)]" />
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 w-fit" variant="outline">
              Web App per Ristoratori
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Ricevi ordini online{" "}
              <span className="gradient-text">direttamente dal tuo ristorante</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground leading-relaxed">
              Un sistema semplice per gestire delivery, pickup e ordini dal tavolo.
              Tutto controllato da una dashboard facile da usare.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#contact">
                  Richiedi una demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="#come-funziona">Scopri come funziona</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {["Delivery", "Pickup", "QR Menu", "Ordini dal tavolo"].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-4">
                  <span>{tag}</span>
                  {i < arr.length - 1 && <span className="h-1 w-1 rounded-full bg-border" />}
                </span>
              ))}
            </div>
          </div>

          {/* Real screenshots */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid items-end gap-6 md:grid-cols-[180px_1fr]">
              <div className="mx-auto w-[180px] overflow-hidden rounded-[2rem] border-[6px] border-foreground/10 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-09%20at%2001.12.03-g5uQvwnIkJrJ0gscueniL2pKjslOJY.jpeg"
                  alt="App cliente – esempio Amico Fritto"
                  width={440}
                  height={880}
                  className="w-full"
                  priority
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-uPojBG4aiDMJ7b4HHXgGTharwKY5dG.png"
                  alt="Dashboard admin ristoratore – esempio Amico Fritto"
                  width={1200}
                  height={750}
                  className="w-full"
                  priority
                />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Esempio reale:{" "}
              <span className="font-medium text-foreground">Amico Fritto</span>
              {" "}— web app cliente e dashboard admin ristoratore
            </p>
          </div>
        </div>
      </section>

      {/* ── IL PROBLEMA ───────────────────────────────────────── */}
      <section className="border-t border-border/50 bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge variant="outline" className="w-fit">Il problema</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Gestire gli ordini non dovrebbe essere complicato
            </h2>
            <div className="space-y-4 text-left text-muted-foreground leading-relaxed">
              <p>
                Molti ristoranti ricevono ordini tramite telefonate, messaggi o WhatsApp.
                Questo spesso crea confusione, errori negli ordini e perdita di tempo durante
                il servizio.
              </p>
              <p>
                Un sistema di ordinazione digitale permette di organizzare tutto in modo semplice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA SOLUZIONE ──────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="w-fit">La soluzione</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Un sistema di ordinazione pensato per i ristoranti
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ho sviluppato una web app che permette ai ristoranti di ricevere e gestire
                gli ordini online in modo semplice.
              </p>
              <p>
                I clienti possono vedere il menu, scegliere cosa ordinare e inviare l'ordine
                direttamente al ristorante.
              </p>
              <p>
                Il ristorante riceve tutto nella dashboard e puo gestire ogni ordine in
                pochi secondi.
              </p>
            </div>
            <Button asChild className="rounded-full px-6">
              <Link href="#contact">
                Richiedi una demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-uPojBG4aiDMJ7b4HHXgGTharwKY5dG.png"
              alt="Dashboard admin ristoratore"
              width={700}
              height={520}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ── COSA PUO FARE ─────────────────────────────────────── */}
      <section className="border-t border-border/50 bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 space-y-3 text-center">
            <Badge variant="outline" className="w-fit">Funzionalita</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Cosa puo fare il sistema
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group border border-border/60 bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <CardContent className="space-y-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold leading-snug">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ─────────────────────────────────────── */}
      <section id="come-funziona" className="py-16 md:py-20">
        <div className="container">
          <div className="mb-12 space-y-3 text-center">
            <Badge variant="outline" className="w-fit">Come funziona</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Tre passi per partire
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="space-y-4 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="block text-sm font-mono font-medium text-muted-foreground">
                    {step.number}
                  </span>
                  <h3 className="text-pretty font-semibold leading-snug">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── VANTAGGI ──────────────────────────────────────────── */}
      <section className="border-t border-border/50 bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 space-y-3 text-center">
            <Badge variant="outline" className="w-fit">Vantaggi</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Vantaggi per il ristorante
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="flex gap-4 rounded-2xl border border-border/50 bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold leading-snug">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ────────────────────────────────────────── */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-6 w-fit">Contatti</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Parliamone
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground leading-relaxed">
              Raccontami il tuo ristorante. Ti rispondo entro 24 ore con una valutazione
              gratuita e senza impegno.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  )
}
