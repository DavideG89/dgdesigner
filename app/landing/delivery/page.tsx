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
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Web App Delivery per Ristoranti | DG Designer",
  description:
    "Web app delivery su misura per ristoratori. Gestisci ordini, menu e consegne in autonomia senza commissioni a intermediari. Contatta DG Designer.",
  alternates: {
    canonical: "/landing/delivery",
  },
  openGraph: {
    title: "Web App Delivery per Ristoranti | DG Designer",
    description:
      "Il tuo ristorante merita un sistema di delivery diretto, senza commissioni. Una web app professionale su misura.",
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
      "Menu sempre aggiornabile con foto, descrizioni, prezzi e categorie. Modificabile in autonomia.",
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
      "Paghi solo per lo sviluppo. Nessuna percentuale sugli ordini, nessun abbonamento nascosto.",
  },
]

const painPoints = [
  "Paghi il 15-30% di commissioni a Glovo, JustEat o Deliveroo su ogni ordine",
  "Non hai accesso ai dati dei tuoi clienti",
  "Non puoi costruire fedelta e programmi fedelta",
  "Il tuo brand e schiacciato dentro piattaforme di terzi",
  "Non controlli le recensioni e la comunicazione con il cliente",
]

const included = [
  "Web app responsive (mobile, tablet, desktop)",
  "Menu digitale personalizzato con foto e categorie",
  "Sistema di ordini con gestione stato (nuovo, in preparazione, pronto)",
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
      "Capiamo insieme le esigenze del tuo ristorante: tipologia di menu, fasce orarie, zone di consegna e flusso ideale degli ordini.",
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
      "Messa online, test completi e formazione per usare la dashboard in autonomia. Poi sei libero di gestire tutto da solo.",
  },
]

export default function DeliveryLandingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(217,133,83,0.12),transparent_60%)]" />
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 w-fit" variant="outline">
              Web App Delivery per Ristoratori
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Il tuo delivery,{" "}
              <span className="gradient-text">senza intermediari</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
              Smetti di pagare commissioni a Glovo e JustEat. Ti costruisco una web app delivery
              su misura per il tuo ristorante: ordini diretti, menu digitale e dashboard per
              gestire tutto in autonomia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
            <p className="mt-4 text-sm text-muted-foreground">Risposta entro 24 ore · Consulenza gratuita e senza impegno</p>
          </div>

          {/* Hero image */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20 shadow-2xl">
              <Image
                src="/delivery-app-mockup.jpg"
                alt="Mockup web app delivery per ristoranti"
                width={1200}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/50 bg-muted/20 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { value: "0%", label: "Commissioni sugli ordini" },
              { value: "30gg", label: "Tempo medio di consegna" },
              { value: "100%", label: "Proprieta del tuo brand" },
              { value: "24h", label: "Supporto post-lancio" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 md:py-20">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="outline" className="w-fit">Il problema</Badge>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Stai cedendo una fetta del tuo incasso ogni giorno
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le piattaforme di delivery terze ti danno visibilita, ma a un costo enorme.
                Ogni ordine che arriva tramite loro e un ricavo che si riduce.
              </p>
            </div>
            <ul className="space-y-3">
              {painPoints.map((point) => (
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

      {/* Features */}
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
                <Card key={feature.title} className="border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's included checklist */}
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

      {/* Process */}
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
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge variant="outline" className="w-fit">Per chi e</Badge>
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Pensato per i ristoratori che vogliono crescere
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Ristoranti, pizzerie, trattorie e osterie",
                  "Locali con servizio di asporto o consegna a domicilio",
                  "Bar e paninoteche con menu da ordinare",
                  "Dark kitchen e cloud kitchen",
                  "Attivita che vogliono smettere di dipendere da Glovo o JustEat",
                  "Catene con piu punti vendita",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-0 bg-primary/5 shadow-xl">
              <CardContent className="space-y-4 p-8">
                <div className="space-y-1">
                  <p className="text-sm font-medium uppercase tracking-widest text-primary">Esempio reale</p>
                  <p className="text-2xl font-bold">Una pizzeria a domicilio</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Una pizzeria tipica con 50 ordini/settimana su Glovo paga circa
                  <strong className="text-foreground"> €300-500/mese di commissioni</strong>.
                  Con una web app propria, quegli stessi clienti ordinano direttamente,
                  azzerando i costi fissi di intermediazione.
                </p>
                <div className="rounded-xl border border-primary/20 bg-background p-4">
                  <p className="text-sm font-semibold text-primary">Ritorno sull'investimento</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Con il risparmio sulle commissioni, il costo della web app si recupera
                    in pochi mesi. Dal secondo anno, e tutto guadagno netto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20">
        <div className="container">
          <Card className="border-0 bg-primary text-primary-foreground shadow-2xl">
            <CardContent className="flex flex-col items-center gap-6 p-10 text-center md:p-16">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Pronto a portare il tuo delivery a un livello superiore?
              </h2>
              <p className="max-w-2xl text-pretty text-primary-foreground/80 leading-relaxed">
                Parliamoci. Dimmi come funziona oggi il tuo delivery e ti mostro
                come posso aiutarti a renderlo piu redditizio e indipendente.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-background px-8 text-foreground hover:bg-background/90"
              >
                <Link href="#contact">
                  Prenota la tua consulenza gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-primary-foreground/60">
                Nessun impegno · Risposta entro 24 ore
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20" id="contact">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Contatti</Badge>
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
