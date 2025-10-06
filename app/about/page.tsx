import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"

import { appendLanguageParam, getLanguage, type SupportedLanguage } from "@/lib/i18n"

interface TimelineEntry {
  id: string
  role: string
  period: string
  location: string
  highlights: string[]
}

interface EducationEntry {
  id: string
  school: string
  title: string
  period: string
  description: string
}

interface ValueCard {
  icon: typeof Users
  title: string
  description: string
}

const experiencesByLanguage: Record<SupportedLanguage, TimelineEntry[]> = {
  it: [
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
  ],
  en: [
    {
      id: "greatpixel",
      role: "UX/UI Designer – Greatpixel",
      period: "Feb 2025 – Present",
      location: "Remote",
      highlights: [
        "I support the design of usability-optimised web interfaces, contributing wireframes, microcopy, and layout reviews.",
        "I collaborate with the team to analyse flows and pain points, reducing friction and clarifying key actions such as forms, buttons, and contact funnels.",
        "I use Eyequant to study visual attention and design clarity, identifying enhancements that strengthen calls to action.",
      ],
    },
    {
      id: "relybytes",
      role: "UX/UI Designer – Relybytes",
      period: "Feb 2024 – Jan 2025",
      location: "Remote",
      highlights: [
        "I helped design a modular SaaS platform (CRM, HR, website builder, to-do list), shaping the main flows and module structure.",
        "I built a reusable Figma design system that improved consistency across sections and accelerated front-end delivery.",
        "Partnering with developers and PMs, I guided the shift from wireframes to interactive prototypes, iteratively validating layouts and components.",
        "I refined simplified user journeys and task-completion metrics, analysing paths to make them more efficient and easier to follow.",
      ],
    },
    {
      id: "softstrategy",
      role: "UX/UI Designer – Softstrategy (via Oneblade)",
      period: "Jan 2024 – Jan 2025",
      location: "Remote",
      highlights: [
        "I joined the team redesigning a legacy platform for Edenred, focusing on simplifying user flows.",
        "I redesigned critical portal sections, improving navigation and readability for high-frequency use cases.",
        "I worked with business analysts and stakeholders to align the design with business logic and enterprise constraints.",
        "I iterated through navigable Figma prototypes, reviewing them internally and validating rapidly with end users.",
      ],
    },
    {
      id: "galileo146",
      role: "UX/UI Designer – Galileo146",
      period: "Feb 2023 – Feb 2024",
      location: "Remote",
      highlights: [
        "I crafted wireframes and prototypes for institutional sites and information platforms, focusing on mobile usability and baseline accessibility.",
        "I gathered direct client feedback to tailor solutions to real needs.",
        "I helped the team establish shared design patterns, standardising recurring components.",
        "I applied visual hierarchy, UX microcopy, and streamlined layouts to improve immediate comprehension.",
      ],
    },
    {
      id: "topos-network",
      role: "Front-end / UI Designer – Topos Network",
      period: "Jan 2022 – Feb 2023",
      location: "Remote",
      highlights: [
        "I designed and developed the company site and the Topos Finance platform using React, HTML/CSS, and Webflow.",
        "I worked closely with the engineering team to translate UI prototypes into functional, responsive code.",
        "I optimised interactions and visual hierarchy within crypto/fintech contexts.",
        "I applied mobile-first, scalability, and UI consistency principles, contributing to the internal design system documentation.",
      ],
    },
  ],
}

const educationByLanguage: Record<SupportedLanguage, EducationEntry[]> = {
  it: [
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
  ],
  en: [
    {
      id: "idf",
      school: "Interaction Design Foundation",
      title: "User Experience Design",
      period: "2024",
      description: "Advanced programme focused on UX design methodologies and tools.",
    },
    {
      id: "develhope",
      school: "Develhope, Palermo",
      title: "Web Development",
      period: "2021 – 2022",
      description: "Intensive programme covering front-end and back-end web development.",
    },
    {
      id: "aba",
      school: "Accademia di Belle Arti Santa Giulia, Brescia",
      title: "Web and Corporate Communication",
      period: "2017 – 2020",
      description: "Three-year course centred on web design, visual communication, and branding.",
    },
    {
      id: "liceo",
      school: "Liceo Artistico, Palermo",
      title: "Art Curriculum",
      period: "2003 – 2007",
      description: "Foundational training in artistic and design disciplines.",
    },
  ],
}

const valuesByLanguage: Record<SupportedLanguage, ValueCard[]> = {
  it: [
    {
      icon: Users,
      title: "User-Centered",
      description:
        "Metto sempre l'utente al centro del processo di design, creando soluzioni che rispondono alle sue esigenze e aspettative.",
    },
    {
      icon: Award,
      title: "Qualità",
      description:
        "Mi impegno a fornire lavori di alta qualità, curando ogni dettaglio e assicurandomi che ogni elemento sia perfettamente realizzato.",
    },
    {
      icon: Briefcase,
      title: "Professionalità",
      description:
        "Mantengo sempre un approccio professionale, rispettando scadenze, budget e comunicando in modo chiaro e trasparente.",
    },
  ],
  en: [
    {
      icon: Users,
      title: "User-centred",
      description:
        "I always put the user at the centre of the design process, creating solutions that meet their needs and expectations.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "I am committed to high-quality work, caring for every detail and ensuring each element is executed impeccably.",
    },
    {
      icon: Briefcase,
      title: "Professionalism",
      description:
        "I maintain a professional approach, respecting deadlines and budgets while communicating clearly and transparently.",
    },
  ],
}

const pageCopy: Record<SupportedLanguage, {
  metadata: { title: string; description: string }
  heroBadge: string
  heroGreeting: string
  heroTitleHighlight: string
  heroParagraphs: string[]
  primaryCta: string
  secondaryCta: string
  skillsBadge: string
  skillsTitle: string
  skillsDescription: string
  designLabel: string
  toolsLabel: string
  devLabel: string
  experienceBadge: string
  experienceTitle: string
  experienceSubtitle: string
  educationBadge: string
  educationTitle: string
  educationSubtitle: string
  valuesBadge: string
  valuesTitle: string
  valuesSubtitle: string
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
}> = {
  it: {
    metadata: {
      title: "Chi sono",
      description:
        "Esperienza, valori e formazione di Davide Giuliano: UX/UI designer e Web Designer con focus su design system, ricerca e usabilità.",
    },
    heroBadge: "About Me",
    heroGreeting: "Ciao, sono",
    heroTitleHighlight: "Davide",
    heroParagraphs: [
      "Sono un designer UX/UI con oltre 5 anni di esperienza nella creazione di esperienze digitali intuitive e coinvolgenti.",
      "La mia passione è trasformare idee complesse in interfacce semplici e intuitive che gli utenti adorano utilizzare. Credo che il buon design debba essere tanto funzionale quanto bello, e mi impegno a creare prodotti che soddisfino entrambi questi criteri.",
      "Quando non sto progettando, mi piace esplorare nuove tecnologie, leggere libri sul design e l'usabilità, e fare escursioni all'aria aperta.",
    ],
    primaryCta: "Contattami",
    secondaryCta: "Vedi i miei lavori",
    skillsBadge: "Competenze",
    skillsTitle: "Le mie specializzazioni",
    skillsDescription:
      "Ecco alcune delle competenze e tecnologie che utilizzo quotidianamente nel mio lavoro.",
    designLabel: "Design",
    toolsLabel: "Strumenti",
    devLabel: "Sviluppo",
    experienceBadge: "Esperienza",
    experienceTitle: "Il mio percorso professionale",
    experienceSubtitle: "Ecco alcune delle tappe più significative della mia carriera professionale.",
    educationBadge: "Formazione",
    educationTitle: "Il mio percorso formativo",
    educationSubtitle: "La mia formazione accademica e i corsi di specializzazione che ho seguito.",
    valuesBadge: "Valori",
    valuesTitle: "I miei principi di design",
    valuesSubtitle: "Questi sono i valori che guidano il mio approccio al design e alla collaborazione.",
    ctaTitle: "Pronto a realizzare il tuo progetto?",
    ctaSubtitle:
      "Contattami per discutere del tuo progetto e scoprire come posso aiutarti a trasformare la tua idea in realtà.",
    ctaButton: "Iniziamo a collaborare",
  },
  en: {
    metadata: {
      title: "About",
      description:
        "Experience, values, and education of Davide Giuliano: a UX/UI and web designer focused on design systems, research, and usability.",
    },
    heroBadge: "About Me",
    heroGreeting: "Hi, I'm",
    heroTitleHighlight: "Davide",
    heroParagraphs: [
      "I'm a UX/UI designer with over five years of experience creating intuitive, engaging digital experiences.",
      "I'm passionate about turning complex ideas into simple, intuitive interfaces that people love. I believe great design should be as functional as it is beautiful, and I strive to deliver products that balance both.",
      "When I'm not designing, I explore new technologies, read about design and usability, and head outdoors for hikes.",
    ],
    primaryCta: "Contact me",
    secondaryCta: "See my work",
    skillsBadge: "Skills",
    skillsTitle: "What I specialise in",
    skillsDescription: "Here are some of the skills and technologies I rely on every day.",
    designLabel: "Design",
    toolsLabel: "Tools",
    devLabel: "Development",
    experienceBadge: "Experience",
    experienceTitle: "My professional journey",
    experienceSubtitle: "These are some of the key milestones in my career.",
    educationBadge: "Education",
    educationTitle: "My educational path",
    educationSubtitle: "My academic background and the specialist courses I've completed.",
    valuesBadge: "Values",
    valuesTitle: "My design principles",
    valuesSubtitle: "These are the values that guide how I design and collaborate.",
    ctaTitle: "Ready to bring your project to life?",
    ctaSubtitle:
      "Contact me to discuss your project and see how I can help turn your idea into reality.",
    ctaButton: "Let's start working together",
  },
}

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>
}

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const lang = getLanguage(searchParams)
  return {
    ...pageCopy[lang].metadata,
    alternates: {
      canonical: "/about",
    },
  }
}

export default function AboutPage({ searchParams }: PageProps) {
  const lang = getLanguage(searchParams)
  const copy = pageCopy[lang]
  const experiences = experiencesByLanguage[lang]
  const education = educationByLanguage[lang]
  const values = valuesByLanguage[lang]

  const contactHref = appendLanguageParam("/contact", lang)
  const projectsHref = appendLanguageParam("/projects", lang)

  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Badge className="mb-4">{copy.heroBadge}</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {copy.heroGreeting}{" "}
                <span className="gradient-text">{copy.heroTitleHighlight}</span>
              </h1>
              {copy.heroParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`mb-6 text-muted-foreground${index === 0 ? " text-xl" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href={contactHref}>
                    {copy.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href={projectsHref}>{copy.secondaryCta}</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-muted">
              <Image src="/Me-About.gif" alt="Davide - UI/UX Designer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{copy.skillsBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.skillsTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.skillsDescription}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">{copy.designLabel}</h3>
                <ul className="space-y-2">
                  {[
                    "UI Design",
                    "UX Design",
                    "Wireframing",
                    "Prototyping",
                    "Responsive Design",
                    "Design System",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">{copy.toolsLabel}</h3>
                <ul className="space-y-2">
                  {[
                    "Figma",
                    "Adobe XD",
                    "Sketch",
                    "Photoshop",
                    "Illustrator",
                    "InVision",
                  ].map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">{copy.devLabel}</h3>
                <ul className="space-y-2">
                  {[
                    "HTML/CSS",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "WordPress",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {skill}
                      </Badge>
                    </li>
                  ))}
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
            <Badge className="mb-4">{copy.experienceBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.experienceTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.experienceSubtitle}</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="md:hidden">
              {experiences.map((experience) => (
                <AccordionItem key={experience.id} value={experience.id}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    <span className="flex flex-col text-left">
                      <span>{experience.role}</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        {experience.period} · {experience.location}
                      </span>
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
            <Badge className="mb-4">{copy.educationBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.educationTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.educationSubtitle}</p>
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
            <Badge className="mb-4">{copy.valuesBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.valuesTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.valuesSubtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border-0 bg-muted/50">
                  <CardContent className="p-6">
                    <div className="mb-4 w-fit rounded-full bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{copy.ctaTitle}</h2>
              <p className="mb-8 text-lg text-muted-foreground">{copy.ctaSubtitle}</p>
              <Button asChild size="lg" className="rounded-full">
                <Link href={contactHref}>
                  {copy.ctaButton}
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
