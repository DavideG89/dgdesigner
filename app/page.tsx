import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Figma, Layers, Rocket, Smartphone, Zap } from "lucide-react"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="container grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4">
            <Badge className="w-fit" variant="outline">
              UI/UX Designer & Developer
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Crafting <span className="gradient-text">impactful</span> User Experiences
            </h1>
            <p className="text-xl text-muted-foreground">
              Ciao! Sono Davide, un designer UX/UI che ama creare esperienze digitali intuitive, funzionali ed
              esteticamente piacevoli.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Iniziamo a collaborare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/projects">Esplora i progetti</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 p-4 md:p-8">
            <div className="overflow-hidden rounded-full bg-muted">
              <Image
                src="https://sjc.microlink.io/9Qa8bimCNS-LbYiRCeZ0g3DboqmVnThIjPV6dNjizFgINuG6sZbwT_CNlfQlHKIjMSMtF9wmF0qbkPSqS9I_Fw.jpeg"
                alt="Davide - UI/UX Designer"
                width={500}
                height={500}
                className="h-full w-full object-cover grayscale"
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
            <Badge className="mb-4">Servizi</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Soluzioni creative per ogni esigenza digitale
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Offro una gamma completa di servizi di design per aiutarti a creare esperienze digitali eccezionali.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">UI Design</h3>
                <p className="text-muted-foreground">
                  Interfacce utente intuitive e accattivanti che migliorano l'esperienza dell'utente e aumentano la
                  conversione.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Figma className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">UX Design</h3>
                <p className="text-muted-foreground">
                  Ricerca utente, wireframing e prototyping per creare esperienze utente fluide e coinvolgenti.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-muted-foreground">
                  Sviluppo di siti web moderni, reattivi e ottimizzati per le prestazioni utilizzando le tecnologie più
                  recenti.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">App Design</h3>
                <p className="text-muted-foreground">
                  Design di applicazioni mobile intuitive e funzionali per iOS e Android che gli utenti adoreranno.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Branding</h3>
                <p className="text-muted-foreground">
                  Creazione di identità di marca distintive che comunicano i valori e la personalità del tuo business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Consulenza UX</h3>
                <p className="text-muted-foreground">
                  Analisi e ottimizzazione delle tue interfacce esistenti per migliorare l'usabilità e la conversione.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Progetti</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lavori recenti</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Esplora alcuni dei miei progetti più recenti e scopri come ho aiutato i miei clienti a raggiungere i loro
              obiettivi.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce App Redesign"
              description="Riprogettazione completa dell'interfaccia utente di un'app di e-commerce per migliorare l'esperienza di acquisto."
              image="/placeholder.svg?height=600&width=800"
              tags={["UI Design", "UX Design", "Mobile App"]}
              link="/projects/ecommerce-app"
            />

            <ProjectCard
              title="Dashboard Analytics"
              description="Design di una dashboard analitica intuitiva per aiutare le aziende a monitorare le loro prestazioni in tempo reale."
              image="/placeholder.svg?height=600&width=800"
              tags={["UI Design", "Data Visualization", "Web App"]}
              link="/projects/dashboard-analytics"
            />

            <ProjectCard
              title="Portfolio Fotografico"
              description="Sito web minimalista per un fotografo professionista con galleria responsive e sistema di prenotazione."
              image="/placeholder.svg?height=600&width=800"
              tags={["Web Design", "Development", "Branding"]}
              link="/projects/photography-portfolio"
            />

            <ProjectCard
              title="App di Fitness"
              description="App mobile per il tracciamento dell'attività fisica con interfaccia intuitiva e visualizzazione dei progressi."
              image="/placeholder.svg?height=600&width=800"
              tags={["UI Design", "UX Design", "Mobile App"]}
              link="/projects/fitness-app"
            />

            <ProjectCard
              title="Applicazione Meteo Interattiva"
              description="App web interattiva per le previsioni meteo con visualizzazioni animate e interfaccia personalizzabile."
              image="/placeholder.svg?height=600&width=800"
              tags={["Web App", "UI Design", "Development"]}
              link="/projects/weather-app"
            />

            <ProjectCard
              title="Piattaforma di Apprendimento"
              description="Piattaforma educativa con interfaccia intuitiva, tracciamento dei progressi e contenuti interattivi."
              image="/placeholder.svg?height=600&width=800"
              tags={["UI Design", "UX Research", "Web Platform"]}
              link="/projects/learning-platform"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/projects">
                Vedi tutti i progetti
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Demo Interattive</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prova le mie applicazioni</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Esplora alcune delle applicazioni interattive che ho creato per mostrare le mie competenze di design e
              sviluppo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <iframe
                  src="/color-palette-generator"
                  title="Color Palette Generator"
                  className="h-full w-full border-0"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Generatore di Palette Colori</h3>
                <p className="mb-4 text-muted-foreground">
                  Uno strumento interattivo per generare palette di colori armoniose per i tuoi progetti di design.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/demos/color-palette-generator">
                    Apri demo completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <iframe
                  src="/interactive-pricing"
                  title="Interactive Pricing Component"
                  className="h-full w-full border-0"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Componente di Prezzo Interattivo</h3>
                <p className="mb-4 text-muted-foreground">
                  Un componente di prezzo interattivo con slider per selezionare diversi piani di abbonamento.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/demos/interactive-pricing">
                    Apri demo completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Testimonianze</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cosa dicono i clienti</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Scopri cosa pensano i miei clienti del mio lavoro e della mia collaborazione.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Davide ha trasformato completamente il nostro sito web. Il design è moderno, intuitivo e ha aumentato significativamente le nostre conversioni."
              author="Marco Rossi"
              role="CEO, TechSolutions"
              image="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              quote="Lavorare con Davide è stato un piacere. Ha compreso perfettamente le nostre esigenze e ha consegnato un prodotto che ha superato le nostre aspettative."
              author="Laura Bianchi"
              role="Marketing Director, CreativeAgency"
              image="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              quote="Il redesign della nostra app ha migliorato drasticamente l'esperienza utente. I nostri clienti adorano la nuova interfaccia e l'usabilità."
              author="Giovanni Verdi"
              role="Product Manager, AppInnovation"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Contatti</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hai un progetto in mente?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contattami per discutere del tuo progetto e scoprire come posso aiutarti a realizzare la tua visione.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
