import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Esperienza, valori e formazione di Davide Giuliano: UX/UI designer e front-end developer con focus su design system, ricerca e usabilità.",
}

const experiences = [
  {
    id: "greatpixel",
    role: "UX/UI Designer – Greatpixel",
    period: "02/2025 – Presente",
    location: "Remoto",
    highlights: [
      "Supporto la progettazione di interfacce web ottimizzate per l'usabilità, contribuendo a wireframe, micro-copy e revisione dei layout.",
      "Collaboro con il team per analizzare flussi e punti critici, riducendo la frizione e chiarendo le azioni chiave (form, pulsanti, funnel di contatto).",
      "Utilizzo Eyequant per studiare attenzione visiva e chiarezza del design, individuando interventi per potenziare le call-to-action.",
    ],
  },
  {
    id: "relybytes",
    role: "UX/UI Designer – Relybytes",
    period: "02/2024 – 01/2025",
    location: "Remoto",
    highlights: [
      "Ho collaborato alla progettazione di una piattaforma SaaS modulare (CRM, HR, website builder, to-do list), contribuendo ai flussi principali e alla struttura dei moduli.",
      "Ho creato un design system riutilizzabile in Figma, migliorando la coerenza tra le sezioni e velocizzando lo sviluppo front-end.",
      "In team con sviluppatori e PM ho supportato il passaggio da wireframe a prototipo interattivo, validando layout e componenti in modo iterativo.",
      "Mi sono approcciato a user journey semplificati e metriche di task completion, analizzando i percorsi utente per renderli più efficienti e chiari.",
    ],
  },
  {
    id: "softstrategy",
    role: "UX/UI Designer – Softstrategy (via Oneblade)",
    period: "01/2024 – 01/2025",
    location: "Remoto",
    highlights: [
      "Ho fatto parte del team incaricato del redesign di una piattaforma legacy per Edenred, concentrandomi sulla semplificazione dei flussi.",
      "Ho riprogettato sezioni critiche del portale, ottimizzando navigazione e leggibilità per scenari ad alta frequenza d'uso.",
      "Ho collaborato con business analyst e stakeholder per allineare il design alle logiche di business e ai vincoli tecnici enterprise.",
      "Ho lavorato in modo iterativo, producendo prototipi navigabili in Figma valutati internamente e testati rapidamente con gli utenti finali.",
    ],
  },
  {
    id: "galileo146",
    role: "UX/UI Designer – Galileo146",
    period: "02/2023 – 02/2024",
    location: "Remoto",
    highlights: [
      "Ho realizzato wireframe e prototipi per siti istituzionali e piattaforme informative, con attenzione a usabilità mobile e accessibilità di base.",
      "Ho raccolto feedback diretti dai clienti per adattare le soluzioni alle esigenze reali.",
      "Ho supportato il team nella creazione di pattern di design condivisi, standardizzando componenti ricorrenti.",
      "Ho applicato gerarchia visiva, microcopy UX e layout semplificati per migliorare la comprensione immediata dell'utente.",
    ],
  },
  {
    id: "topos-network",
    role: "Front-end / UI Designer – Topos Network",
    period: "01/2022 – 02/2023",
    location: "Remoto",
    highlights: [
      "Ho progettato e sviluppato l'interfaccia del sito aziendale e della piattaforma Topos Finance con React, HTML/CSS e Webflow.",
      "Ho collaborato costantemente con il team di sviluppo per tradurre i prototipi UI in codice funzionale e responsive.",
      "Ho ottimizzato interazioni e gerarchia visiva in contesti crypto/fintech.",
      "Ho applicato principi di mobile first, scalabilità e coerenza UI, contribuendo alla documentazione del design system interno.",
    ],
  },
]

const education = [
  {
    id: "idf",
    school: "Interaction Design Foundation",
    title: "User Experience Design",
    period: "2024",
    description: "Percorso avanzato focalizzato su metodologie e strumenti di UX design.",
  },
  {
    id: "develhope",
    school: "Develhope, Palermo",
    title: "Web Development",
    period: "2021 – 2022",
    description: "Programma intensivo di sviluppo web front-end e back-end.",
  },
  {
    id: "aba",
    school: "Accademia di Belle Arti Santa Giulia, Brescia",
    title: "Web e Comunicazione d'Impresa",
    period: "2017 – 2020",
    description: "Corso triennale centrato su web design, comunicazione visiva e branding.",
  },
  {
    id: "liceo",
    school: "Liceo Artistico, Palermo",
    title: "Indirizzo Artistico",
    period: "2003 – 2007",
    description: "Formazione di base in discipline artistiche e progettuali.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Badge className="mb-4">About Me</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Ciao, sono <span className="gradient-text">Davide</span>
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                Sono un designer UX/UI con oltre 5 anni di esperienza nella creazione di esperienze digitali intuitive e
                coinvolgenti.
              </p>
              <p className="mb-6 text-muted-foreground">
                La mia passione è trasformare idee complesse in interfacce semplici e intuitive che gli utenti adorano
                utilizzare. Credo che il buon design debba essere tanto funzionale quanto bello, e mi impegno a creare
                prodotti che soddisfino entrambi questi criteri.
              </p>
              <p className="mb-8 text-muted-foreground">
                Quando non sto progettando, mi piace esplorare nuove tecnologie, leggere libri sul design e l'usabilità,
                e fare escursioni all'aria aperta.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Contattami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/projects">Vedi i miei lavori</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/Me-About.gif"
                alt="Davide - UI/UX Designer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Competenze</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Le mie specializzazioni</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ecco alcune delle competenze e tecnologie che utilizzo quotidianamente nel mio lavoro.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      UI Design
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      UX Design
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Wireframing
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Prototyping
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Responsive Design
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Design System
                    </Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Strumenti</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Figma
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Adobe XD
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Sketch
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Photoshop
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Illustrator
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      InVision
                    </Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Sviluppo</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      HTML/CSS
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      JavaScript
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      React
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Next.js
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Wordpress
                    </Badge>
                  </li>
                  
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Esperienza</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Il mio percorso professionale</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ecco alcune delle tappe più significative della mia carriera professionale.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="md:hidden">
              {experiences.map((experience) => (
                <AccordionItem key={experience.id} value={experience.id}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    <span className="flex flex-col text-left">
                      <span>{experience.role}</span>
                      <span className="text-sm font-normal text-muted-foreground">{experience.period} · {experience.location}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {experience.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="relative hidden border-l border-muted pl-8 before:absolute before:left-[-5px] before:top-0 before:h-full before:w-10 before:bg-gradient-to-b before:from-background before:to-transparent before:content-[''] md:block">
              {experiences.map((experience) => (
                <div key={experience.id} className="relative mb-12">
                  <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="h-3 w-3" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <Badge variant="outline">{experience.period}</Badge>
                  </div>
                  <p className="mb-2 text-muted-foreground">{experience.location}</p>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    {experience.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Formazione</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Il mio percorso formativo</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La mia formazione accademica e i corsi di specializzazione che ho seguito.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="md:hidden">
              {education.map((entry) => (
                <AccordionItem key={entry.id} value={entry.id}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    <span className="flex flex-col text-left">
                      <span>{entry.school}</span>
                      <span className="text-sm font-normal text-muted-foreground">{entry.period}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">{entry.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="relative hidden border-l border-muted pl-8 before:absolute before:left-[-5px] before:top-0 before:h-full before:w-10 before:bg-gradient-to-b before:from-background before:to-transparent before:content-[''] md:block">
              {education.map((entry) => (
                <div key={entry.id} className="relative mb-12">
                  <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {entry.id === "liceo" ? <BookOpen className="h-3 w-3" /> : <GraduationCap className="h-3 w-3" />}
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{entry.school}</h3>
                    <Badge variant="outline">{entry.period}</Badge>
                  </div>
                  <p className="mb-2 text-muted-foreground">{entry.title}</p>
                  <p className="text-muted-foreground">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Valori</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">I miei principi di design</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Questi sono i valori che guidano il mio approccio al design e alla collaborazione.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">User-Centered</h3>
                <p className="text-muted-foreground">
                  Metto sempre l'utente al centro del processo di design, creando soluzioni che rispondono alle sue
                  esigenze e aspettative.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Qualità</h3>
                <p className="text-muted-foreground">
                  Mi impegno a fornire lavori di alta qualità, curando ogni dettaglio e assicurandomi che ogni elemento
                  sia perfettamente realizzato.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Professionalità</h3>
                <p className="text-muted-foreground">
                  Mantengo sempre un approccio professionale, rispettando scadenze, budget e comunicando in modo chiaro
                  e trasparente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Pronto a realizzare il tuo progetto?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Contattami per discutere del tuo progetto e scoprire come posso aiutarti a trasformare la tua idea in
                realtà.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Iniziamo a collaborare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
