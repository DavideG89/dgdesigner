import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import {
  ArrowRight,
  Check,
  ShoppingBag,
  BarChart3,
  Smartphone,
  Globe,
  Ban,
  Bell,
  Utensils,
  ChefHat,
  Star,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Web App Delivery per Ristoranti | Davide Giuliano – DG Designer",
  description:
    "Sono Davide Giuliano, designer e sviluppatore freelance. Realizzo web app delivery su misura per ristoratori che vogliono gestire ordini online senza pagare commissioni a intermediari.",
  alternates: {
    canonical: "/landing/delivery",
  },
  openGraph: {
    title: "Web App Delivery per Ristoranti | Davide Giuliano – DG Designer",
    description:
      "Designer e sviluppatore freelance. Web app delivery su misura per ristoratori: ordini diretti, menu digitale, dashboard admin. Zero commissioni.",
  },
}

const features = [
  {
    icon: ShoppingBag,
    title: "Ordini diretti",
    description:
      "I clienti ordinano direttamente dal tuo sito. Nessun intermediario, nessuna commissione da pagare.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description:
      "Esperienza ottimizzata per smartphone. I tuoi clienti ordinano in pochi tap da qualsiasi dispositivo.",
  },
  {
    icon: BarChart3,
    title: "Dashboard ordini",
    description:
      "Pannello di controllo per gestire ordini in tempo reale, visualizzare lo storico e monitorare le vendite.",
  },
  {
    icon: Globe,
    title: "Menu digitale",
    description:
      "Menu sempre aggiornabile con foto, descrizioni e prezzi. Modificabile in autonomia, senza tecnici.",
  },
  {
    icon: Bell,
    title: "Notifiche real-time",
    description:
      "Ricevi una notifica immediata a ogni nuovo ordine. Zero ritardi, massima reattivita in cucina.",
  },
  {
    icon: Ban,
    title: "Zero commissioni",
    description:
      "Paghi solo lo sviluppo, una volta sola. Nessuna percentuale sugli ordini, nessun abbonamento nascosto.",
  },
]

const included = [
  "Web app responsive (mobile, tablet, desktop)",
  "Menu digitale personalizzato con foto e categorie",
  "Sistema di ordini con stato (nuovo, in preparazione, pronto)",
  "Dashboard admin per gestire ordini e menu",
  "Integrazione pagamenti online (Stripe)",
  "Notifiche ordini via email o WhatsApp",
  "Dominio e hosting per il primo anno inclusi",
  "Assistenza post-lancio per 30 giorni",
]

const steps = [
  {
    number: "01",
    icon: Utensils,
    title: "Analisi e brief",
    description:
      "Capiamo insieme le esigenze del tuo ristorante: menu, fasce orarie, zone di consegna e flusso degli ordini.",
  },
  {
    number: "02",
    icon: ChefHat,
    title: "Design e sviluppo",
    description:
      "Progetto l'interfaccia e sviluppo la web app su misura per il tuo brand. Ogni dettaglio rispecchia la tua identita.",
  },
  {
    number: "03",
    icon: Star,
    title: "Lancio e supporto",
    description:
      "Messa online, test completi e formazione per usare la dashboard in autonomia. Poi gestisci tutto tu.",
  },
]

export default function DeliveryLandingPage() {
  return (
    <main className="bg-background text-foreground">

      {/* ── INTRO FREELANCER ──────────────────────────────────── */}
      <section className="relative flex min-h-[480px] overflow-hidden border-b border-border/50">
        {/* Left: image ~40%, h-full */}
        <div className="relative hidden w-[40%] shrink-0 md:block">
          <Image
            src="/Me-About.gif"
            alt="Davide Giuliano – Designer e sviluppatore freelance"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right: text ~60% */}
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
              pronti a generare fatturato dal primo giorno.
            </p>
            <p className="max-w-xl text-pretty text-muted-foreground leading-relaxed">
              Negli ultimi anni ho sviluppato un prodotto specifico pensato per il settore
              della ristorazione: una web app delivery su misura che ti permette di ricevere
              ordini online in autonomia, senza cedere commissioni a nessuno.
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(217,133,83,0.1),transparent_60%)]" />
        <div className="flex min-h-[600px] md:min-h-[700px]">
          {/* Left: text content ~60% */}
          <div className="flex w-full flex-col justify-center px-6 py-20 md:w-[60%] md:px-12 lg:px-20">
            <Badge className="mb-6 w-fit" variant="outline">
              Web App Delivery per Ristoratori
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Il tuo delivery,{" "}
              <span className="gradient-text">senza intermediari</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground leading-relaxed">
              Ti costruisco una web app delivery professionale e su misura per il tuo
              ristorante. Ordini diretti, menu digitale e dashboard gestionale. Smetti di
              pagare il 15–30% a Glovo e JustEat su ogni singolo ordine.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#contact">
                  Richiedi un preventivo gratuito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="#come-funziona">Scopri come funziona</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Risposta entro 24 ore · Consulenza gratuita e senza impegno
            </p>
          </div>

          {/* Right: image ~40%, h-full */}
          <div className="relative hidden md:block md:w-[40%]">
            <Image
              src="/delivery-app-mockup.jpg"
              alt="Mockup web app delivery per ristoranti"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="border-y border-border/50 bg-muted/20 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { value: "0%", label: "Commissioni sugli ordini" },
              { value: "~30gg", label: "Dal brief al lancio" },
              { value: "100%", label: "Proprieta del tuo brand" },
              { value: "5+", label: "Anni di esperienza" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IL PROBLEMA ───────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="outline" className="w-fit">Il problema</Badge>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Stai cedendo una fetta del tuo incasso ogni giorno
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le piattaforme terze ti danno visibilita, ma a un costo enorme. Ogni ordine
                che arriva tramite loro e un ricavo che si assottiglia.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Paghi il 15–30% di commissioni a Glovo, JustEat o Deliveroo su ogni ordine",
                "Non hai accesso ai dati e ai contatti dei tuoi clienti",
                "Non puoi costruire fedelta e programmi di retention",
                "Il tuo brand e schiacciato dentro piattaforme di terzi",
                "Non controlli recensioni e comunicazione col cliente",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <Ban className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
              Con una web app tua, tieni il 100% di ogni ordine.
            </p>
          </div>
          <Card className="border-0 bg-muted/30 shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/delivery-dashboard-mockup.jpg"
                  alt="Dashboard ordini del ristorante"
                  width={700}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-12 space-y-3 text-center">
            <Badge variant="outline" className="w-fit">Cosa include</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Tutto quello che serve al tuo ristorante
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Una soluzione completa, progettata su misura per la tua attivita.
              Nessun template generico, nessuna funzione inutile.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardContent className="space-y-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
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

      {/* ── CHECKLIST ─────────────────────────────────────────── */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 space-y-3 text-center">
              <Badge variant="outline" className="w-fit">Nel pacchetto</Badge>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Cosa ricevi con il tuo progetto
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/50 bg-background px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ─────────────────────────────────────── */}
      <section className="py-16 md:py-20" id="come-funziona">
        <div className="container">
          <div className="mb-12 space-y-3 text-center">
            <Badge variant="outline" className="w-fit">Come funziona</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Dal brief al lancio in tre fasi
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Un processo semplice e trasparente. Sai sempre a che punto siamo e cosa aspettarti.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="relative border-0 bg-muted/30 shadow-lg">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ROI EXAMPLE ───────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 space-y-3 text-center">
              <Badge variant="outline" className="w-fit">Perche vale l'investimento</Badge>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                I numeri parlano chiaro
              </h2>
            </div>
            <Card className="border-0 bg-primary/5 shadow-xl">
              <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:items-center">
                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-widest text-primary">
                    Esempio reale
                  </p>
                  <p className="text-2xl font-bold">Una pizzeria a domicilio</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Una pizzeria tipica con 50 ordini a settimana su Glovo paga circa{" "}
                    <strong className="text-foreground">€300–500 al mese</strong> solo di
                    commissioni. Con una web app propria, quegli stessi clienti ordinano
                    direttamente, azzerando il costo per ogni ordine ricevuto.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl border border-primary/20 bg-background p-4">
                    <p className="text-sm font-semibold text-primary">Ritorno sull'investimento</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Con il risparmio sulle commissioni, il costo della web app si recupera
                      spesso entro i primi 3–6 mesi. Dal secondo anno, e tutto guadagno netto.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background p-4">
                    <p className="text-sm font-semibold">Chi ci guadagna di piu</p>
                    <ul className="mt-2 space-y-1">
                      {[
                        "Pizzerie e trattorie con servizio a domicilio",
                        "Dark kitchen e cloud kitchen",
                        "Bar con menu da ordinare online",
                        "Catene con piu punti vendita",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <Card className="border-0 bg-primary text-primary-foreground shadow-2xl">
            <CardContent className="flex flex-col items-center gap-6 p-10 text-center md:p-16">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Parliamoci. Senza impegno.
              </h2>
              <p className="max-w-2xl text-pretty text-primary-foreground/80 leading-relaxed">
                Descrivimi come funziona oggi il tuo delivery e ti mostro concretamente
                come posso aiutarti a renderlo piu redditizio e indipendente.
                La consulenza iniziale e gratuita.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-background px-8 text-foreground hover:bg-background/90"
              >
                <Link href="#contact">
                  Scrivimi adesso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-primary-foreground/60">
                Risposta entro 24 ore · Nessun impegno
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section className="py-20" id="contact">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Contattami</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Parliamo del tuo ristorante
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Compila il form e ti rispondo entro 24 ore con una proposta su misura.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
