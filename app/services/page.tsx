import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Figma, Layers, Smartphone, Zap } from "lucide-react"

import { appendLanguageParam, getLanguage, type SupportedLanguage } from "@/lib/i18n"

interface ServiceSection {
  id: string
  icon: typeof Layers
  mediaFirst?: boolean
  title: string
  paragraphs: string[]
  bullets: string[]
}

interface ProcessStep {
  title: string
  description: string
}

interface PricingFeature {
  label: string
  available: boolean
}

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: PricingFeature[]
  highlight?: string
  highlightVariant?: "outline" | "default"
}

interface FaqEntry {
  question: string
  answer: string
}

const servicesTranslations: Record<SupportedLanguage, {
  heroBadge: string
  heroTitlePrefix: string
  heroTitleHighlight: string
  heroDescription: string
  requestQuote: string
  sections: ServiceSection[]
  processBadge: string
  processTitle: string
  processSubtitle: string
  processSteps: ProcessStep[]
  pricingBadge: string
  pricingTitle: string
  pricingSubtitle: string
  pricingPlans: PricingPlan[]
  pricingNote: string
  faqBadge: string
  faqTitle: string
  faqSubtitle: string
  faqs: FaqEntry[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
}> = {
  it: {
    heroBadge: "Servizi",
    heroTitlePrefix: "I miei",
    heroTitleHighlight: "servizi",
    heroDescription:
      "Offro una gamma completa di servizi di design per aiutarti a creare esperienze digitali eccezionali.",
    requestQuote: "Richiedi un preventivo",
    sections: [
      {
        id: "ui-design",
        icon: Layers,
        title: "UI Design",
        paragraphs: [
          "Creo interfacce utente intuitive e accattivanti che migliorano l'esperienza dell'utente e aumentano la conversione.",
          "Il mio approccio al design dell'interfaccia utente si concentra sulla creazione di esperienze visivamente coerenti e funzionali che guidano gli utenti verso i loro obiettivi in modo intuitivo.",
        ],
        bullets: [
          "Design di interfacce web e mobile",
          "Creazione di sistemi di design",
          "Design responsive",
          "Ottimizzazione dell'usabilità",
        ],
      },
      {
        id: "ux-design",
        icon: Figma,
        mediaFirst: true,
        title: "UX Design",
        paragraphs: [
          "Conduco ricerche utente, creo wireframe e prototipi per garantire esperienze utente fluide e coinvolgenti.",
          "Il mio processo di UX design si basa sulla comprensione approfondita degli utenti e dei loro bisogni, per creare prodotti che risolvano problemi reali in modo efficace.",
        ],
        bullets: [
          "Ricerca utente e personas",
          "Wireframing e prototyping",
          "Test di usabilità",
          "Architettura dell'informazione",
        ],
      },
      {
        id: "web-design",
        icon: Code,
        title: "Web Development",
        paragraphs: [
          "Sviluppo siti web moderni, reattivi e ottimizzati per le prestazioni utilizzando le tecnologie più recenti.",
          "Creo siti web che non solo sono belli da vedere, ma anche veloci, accessibili e facili da gestire, utilizzando le migliori pratiche di sviluppo web.",
        ],
        bullets: [
          "Sviluppo frontend con React e Next.js",
          "Siti web responsive",
          "Ottimizzazione delle prestazioni",
          "Accessibilità web",
        ],
      },
      {
        id: "app-design",
        icon: Smartphone,
        mediaFirst: true,
        title: "App Design",
        paragraphs: [
          "Progetto applicazioni mobile intuitive e funzionali per iOS e Android che gli utenti adoreranno.",
          "Il mio approccio al design di app mobile si concentra sulla creazione di esperienze fluide e intuitive che rispettano le linee guida delle piattaforme e soddisfano le aspettative degli utenti.",
        ],
        bullets: [
          "Design di app iOS e Android",
          "Prototipi interattivi",
          "Design di icone e assets",
          "Ottimizzazione per diverse dimensioni di schermo",
        ],
      },
      {
        id: "branding",
        icon: Zap,
        title: "Branding",
        paragraphs: [
          "Creo identità di marca distintive che comunicano i valori e la personalità del tuo business.",
          "Il mio approccio al branding si basa sulla creazione di identità visive coerenti e memorabili che aiutano i brand a distinguersi dalla concorrenza e a connettersi con il loro pubblico.",
        ],
        bullets: [
          "Design di logo",
          "Palette colori e tipografia",
          "Linee guida del brand",
          "Materiali di marketing",
        ],
      },
    ],
    processBadge: "Processo",
    processTitle: "Il mio processo di lavoro",
    processSubtitle: "Un approccio strutturato per garantire risultati di qualità e soddisfazione del cliente.",
    processSteps: [
      {
        title: "Scoperta",
        description:
          "Comprendo le tue esigenze, obiettivi e il tuo pubblico attraverso interviste e ricerche approfondite.",
      },
      {
        title: "Strategia",
        description:
          "Definisco una strategia chiara basata sulle informazioni raccolte e sugli obiettivi del progetto.",
      },
      {
        title: "Design",
        description:
          "Creo wireframe, prototipi e design finali, collaborando strettamente con te per perfezionare ogni dettaglio.",
      },
      {
        title: "Implementazione",
        description:
          "Trasformo i design in prodotti funzionali, assicurandomi che ogni elemento sia implementato correttamente.",
      },
    ],
    pricingBadge: "Prezzi",
    pricingTitle: "Piani trasparenti",
    pricingSubtitle: "Offro soluzioni flessibili per adattarmi alle tue esigenze e al tuo budget.",
    pricingPlans: [
      {
        name: "Base",
        price: "€1.000",
        period: " / progetto",
        description: "Ideale per piccoli progetti o startup con budget limitato.",
        features: [
          { label: "UI Design per 5 schermate", available: true },
          { label: "1 round di revisioni", available: true },
          { label: "File sorgente", available: true },
          { label: "Prototipi interattivi", available: false },
          { label: "Sviluppo frontend", available: false },
        ],
        highlightVariant: "outline",
      },
      {
        name: "Pro",
        price: "€2.500",
        period: " / progetto",
        description: "Perfetto per progetti di medie dimensioni con esigenze specifiche.",
        features: [
          { label: "UI Design per 10 schermate", available: true },
          { label: "2 round di revisioni", available: true },
          { label: "File sorgente", available: true },
          { label: "Prototipi interattivi", available: true },
          { label: "Sviluppo frontend", available: false },
        ],
        highlight: "Popolare",
      },
      {
        name: "Enterprise",
        price: "€5.000+",
        period: " / progetto",
        description: "Soluzione completa per progetti complessi e aziende.",
        features: [
          { label: "UI Design illimitato", available: true },
          { label: "Revisioni illimitate", available: true },
          { label: "File sorgente", available: true },
          { label: "Prototipi interattivi", available: true },
          { label: "Sviluppo frontend", available: true },
        ],
        highlightVariant: "outline",
      },
    ],
    pricingNote: "Hai esigenze specifiche? Contattami per un preventivo personalizzato.",
    faqBadge: "FAQ",
    faqTitle: "Domande frequenti",
    faqSubtitle: "Risposte alle domande più comuni sui miei servizi.",
    faqs: [
      {
        question: "Quanto tempo ci vuole per completare un progetto?",
        answer:
          "La durata di un progetto dipende dalla sua complessità e portata. In generale, un progetto di UI/UX design può richiedere da 2 a 8 settimane, mentre un progetto completo di design e sviluppo può richiedere da 1 a 3 mesi.",
      },
      {
        question: "Come funziona il processo di pagamento?",
        answer:
          "Generalmente richiedo un acconto del 50% all'inizio del progetto e il saldo al completamento. Per progetti più grandi, possiamo concordare un piano di pagamento a milestone.",
      },
      {
        question: "Lavori con clienti internazionali?",
        answer:
          "Assolutamente sì! Lavoro con clienti da tutto il mondo. La comunicazione avviene principalmente via email, videochiamate e strumenti di project management.",
      },
      {
        question: "Posso richiedere modifiche dopo la consegna del progetto?",
        answer:
          "Sì, offro un periodo di supporto post-consegna durante il quale puoi richiedere piccole modifiche. Per modifiche più sostanziali, possiamo discutere un accordo separato.",
      },
      {
        question: "Quali strumenti utilizzi per il design?",
        answer:
          "Utilizzo principalmente Figma per il design e la prototipazione, ma ho esperienza anche con Adobe XD, Sketch e altri strumenti di design. Per lo sviluppo, utilizzo React, Next.js e altre tecnologie moderne.",
      },
      {
        question: "Offri servizi di manutenzione dopo il lancio?",
        answer:
          "Sì, offro servizi di manutenzione e supporto continuo per i progetti che ho sviluppato. Possiamo discutere un piano di manutenzione personalizzato in base alle tue esigenze.",
      },
    ],
    ctaTitle: "Pronto a trasformare la tua idea in realtà?",
    ctaSubtitle:
      "Contattami oggi stesso per discutere del tuo progetto e scoprire come posso aiutarti a raggiungere i tuoi obiettivi.",
    ctaButton: "Iniziamo a collaborare",
  },
  en: {
    heroBadge: "Services",
    heroTitlePrefix: "My",
    heroTitleHighlight: "services",
    heroDescription:
      "I offer a full spectrum of design services to help you craft exceptional digital experiences.",
    requestQuote: "Request a quote",
    sections: [
      {
        id: "ui-design",
        icon: Layers,
        title: "UI Design",
        paragraphs: [
          "I design intuitive, compelling interfaces that elevate the user experience and boost conversions.",
          "My interface design approach focuses on building visually coherent, purposeful experiences that guide people smoothly toward their goals.",
        ],
        bullets: [
          "Web and mobile interface design",
          "Design system creation",
          "Responsive design",
          "Usability optimisation",
        ],
      },
      {
        id: "ux-design",
        icon: Figma,
        mediaFirst: true,
        title: "UX Design",
        paragraphs: [
          "I conduct user research and craft wireframes and prototypes to deliver smooth, engaging experiences.",
          "My UX process is grounded in a deep understanding of users and their needs, so every product solves real problems effectively.",
        ],
        bullets: [
          "User research and persona development",
          "Wireframing and prototyping",
          "Usability testing",
          "Information architecture",
        ],
      },
      {
        id: "web-design",
        icon: Code,
        title: "Web Development",
        paragraphs: [
          "I build modern, responsive websites optimised for performance with the latest technologies.",
          "Every site I deliver looks great, loads fast, stays accessible, and is easy to maintain thanks to web development best practices.",
        ],
        bullets: [
          "Front-end development with React and Next.js",
          "Responsive websites",
          "Performance optimisation",
          "Web accessibility",
        ],
      },
      {
        id: "app-design",
        icon: Smartphone,
        mediaFirst: true,
        title: "App Design",
        paragraphs: [
          "I craft intuitive, high-performing mobile apps for iOS and Android that people love to use.",
          "My mobile design approach centres on fluid, intuitive experiences that respect platform guidelines and meet user expectations.",
        ],
        bullets: [
          "iOS and Android app design",
          "Interactive prototypes",
          "Icon and asset design",
          "Optimisation for multiple screen sizes",
        ],
      },
      {
        id: "branding",
        icon: Zap,
        title: "Branding",
        paragraphs: [
          "I craft distinctive brand identities that communicate your values and personality.",
          "My branding work builds cohesive, memorable visual systems that set you apart and connect with your audience.",
        ],
        bullets: [
          "Logo design",
          "Colour palettes and typography",
          "Brand guidelines",
          "Marketing collateral",
        ],
      },
    ],
    processBadge: "Process",
    processTitle: "How I work",
    processSubtitle: "A structured approach that guarantees quality outcomes and client satisfaction.",
    processSteps: [
      {
        title: "Discovery",
        description:
          "I explore your goals, audience, and constraints through interviews and in-depth research.",
      },
      {
        title: "Strategy",
        description:
          "I define a clear strategy based on the insights collected and the project objectives.",
      },
      {
        title: "Design",
        description:
          "I deliver wireframes, prototypes, and final designs, collaborating closely with you to refine every detail.",
      },
      {
        title: "Implementation",
        description:
          "I translate the designs into working products, ensuring every element is implemented correctly.",
      },
    ],
    pricingBadge: "Pricing",
    pricingTitle: "Transparent plans",
    pricingSubtitle: "Flexible solutions that adapt to your needs and budget.",
    pricingPlans: [
      {
        name: "Basic",
        price: "€1,000",
        period: " / project",
        description: "Ideal for small projects or early-stage startups working with tight budgets.",
        features: [
          { label: "UI design for up to 5 screens", available: true },
          { label: "One revision round", available: true },
          { label: "Source files", available: true },
          { label: "Interactive prototypes", available: false },
          { label: "Front-end development", available: false },
        ],
        highlightVariant: "outline",
      },
      {
        name: "Pro",
        price: "€2,500",
        period: " / project",
        description: "Perfect for mid-sized projects with specific requirements.",
        features: [
          { label: "UI design for up to 10 screens", available: true },
          { label: "Two revision rounds", available: true },
          { label: "Source files", available: true },
          { label: "Interactive prototypes", available: true },
          { label: "Front-end development", available: false },
        ],
        highlight: "Most popular",
      },
      {
        name: "Enterprise",
        price: "€5,000+",
        period: " / project",
        description: "Comprehensive solution for complex initiatives and established teams.",
        features: [
          { label: "Unlimited UI design", available: true },
          { label: "Unlimited revisions", available: true },
          { label: "Source files", available: true },
          { label: "Interactive prototypes", available: true },
          { label: "Front-end development", available: true },
        ],
        highlightVariant: "outline",
      },
    ],
    pricingNote: "Need something specific? Contact me for a tailored proposal.",
    faqBadge: "FAQ",
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Answers to the questions I hear most often about my services.",
    faqs: [
      {
        question: "How long does a project take to complete?",
        answer:
          "Timelines vary with scope and complexity: UI/UX design engagements usually run 2–8 weeks, while full design-and-build projects take 1–3 months.",
      },
      {
        question: "How does the payment process work?",
        answer:
          "I typically request 50% upfront and the balance on delivery. For larger projects we can agree on milestone-based payments.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Absolutely. I collaborate with clients worldwide, staying in touch via email, video calls, and project-management tools.",
      },
      {
        question: "Can I request changes after the project is delivered?",
        answer:
          "Yes—I include a post-delivery support window for minor tweaks. For substantial changes we can scope a separate engagement.",
      },
      {
        question: "Which design tools do you use?",
        answer:
          "Figma is my primary platform for design and prototyping, and I'm also comfortable with Adobe XD, Sketch, and other tools. On the development side I work with React, Next.js, and modern tooling.",
      },
      {
        question: "Do you offer maintenance services after launch?",
        answer:
          "Yes, I provide ongoing maintenance and support for the projects I deliver. We can define a maintenance plan tailored to your needs.",
      },
    ],
    ctaTitle: "Ready to turn your idea into reality?",
    ctaSubtitle:
      "Reach out today to discuss your project and see how I can help you achieve your goals.",
    ctaButton: "Let's start working together",
  },
}

type ServicesPageProps = {
  searchParams?: Record<string, string | string[] | undefined>
}

export function generateMetadata({ searchParams }: ServicesPageProps): Metadata {
  const lang = getLanguage(searchParams)

  if (lang === "en") {
    return {
      title: "Services",
      description:
        "UI design, UX research, front-end development, and branding: discover how Davide Giuliano can elevate your digital project.",
      alternates: {
        canonical: "/services",
      },
    }
  }

  return {
    title: "Servizi",
    description:
      "UI design, UX research, sviluppo front-end e branding: scopri come Davide Giuliano può supportare il tuo progetto digitale.",
    alternates: {
      canonical: "/services",
    },
  }
}

export default function ServicesPage({ searchParams }: ServicesPageProps) {
  const lang = getLanguage(searchParams)
  const content = servicesTranslations[lang]
  const contactHref = appendLanguageParam("/contact", lang)

  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">{content.heroBadge}</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {content.heroTitlePrefix}{" "}
              <span className="gradient-text">{content.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{content.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-12">
            {content.sections.map((section) => {
              const MediaIcon = section.icon

              return (
                <div key={section.id} className="grid gap-8 md:grid-cols-2" id={section.id}>
                  <div className={section.mediaFirst ? "order-1 md:order-2" : ""}>
                    <div className="mb-4 w-fit rounded-full bg-primary/10 p-3">
                      <MediaIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mb-4 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    <ul className="mb-6 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="rounded-full">
                      <Link href={contactHref}>
                        {content.requestQuote}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`rounded-xl bg-muted/50 p-6 ${
                      section.mediaFirst ? "order-2 md:order-1" : ""
                    }`}
                  >
                    <div className="aspect-video rounded-lg bg-muted"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{content.processBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.processTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{content.processSubtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content.processSteps.map((step, index) => (
              <Card key={step.title} className="border-0 bg-muted/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{content.pricingBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.pricingTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{content.pricingSubtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-muted/50 ${
                  plan.highlight ? "border-2 border-primary" : "border-0"
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {plan.highlight && <Badge>{plan.highlight}</Badge>}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mb-6 text-muted-foreground">{plan.description}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-center gap-2">
                        <span className={feature.available ? "text-primary" : "text-muted-foreground"}>
                          {feature.available ? "✓" : "✗"}
                        </span>
                        <span className={feature.available ? undefined : "text-muted-foreground"}>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full rounded-full"
                    variant={plan.highlight ? "default" : plan.highlightVariant ?? "outline"}
                  >
                    <Link href={contactHref}>{lang === "en" ? "Contact me" : "Contattami"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">{content.pricingNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">{content.faqBadge}</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.faqTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{content.faqSubtitle}</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 text-xl font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{content.ctaTitle}</h2>
              <p className="mb-8 text-lg text-muted-foreground">{content.ctaSubtitle}</p>
              <Button asChild size="lg" className="rounded-full">
                <Link href={contactHref}>
                  {content.ctaButton}
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
