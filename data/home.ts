import type { LucideIcon } from "lucide-react"
import { Code, Figma, Layers, Rocket, Smartphone, Zap } from "lucide-react"

import type { SupportedLanguage } from "@/lib/i18n"

interface ServiceCardCopy {
  title: string
  description: string
}

export const heroCopy: Record<SupportedLanguage, {
  badge: string
  titlePrefix: string
  titleHighlight: string
  titleSuffix: string
  description: string
  primaryCta: string
  secondaryCta: string
}> = {
  it: {
    badge: "UI/UX & Web Designer",
    titlePrefix: "Siti web per imprese.",
    titleHighlight: "Design",
    titleSuffix: "per prodotti digitali.",
    description:
      "Sono Davide Giuliano. Realizzo siti per piccole e medie imprese e affianco agenzie e team nella progettazione UI/UX. Da Palermo, lavoro da remoto con clienti in tutto il mondo.",
    primaryCta: "Parliamo del tuo progetto",
    secondaryCta: "Esplora i lavori",
  },
  en: {
    badge: "UI/UX & Web Designer",
    titlePrefix: "Websites for businesses.",
    titleHighlight: "Design",
    titleSuffix: "for digital products.",
    description:
      "I'm Davide Giuliano. I build websites for small and medium-sized businesses and support agencies and product teams with UI/UX design. Based in Palermo, I work remotely with clients worldwide.",
    primaryCta: "Tell me about your project",
    secondaryCta: "View selected work",
  },
}

export const servicesCopy: Array<{
  icon: LucideIcon
  copy: Record<SupportedLanguage, ServiceCardCopy>
}> = [
  {
    icon: Layers,
    copy: {
      it: {
        title: "UI Design",
        description:
          "Interfacce per SaaS e web app, con layout responsive e componenti coerenti pronti da condividere con gli sviluppatori.",
      },
      en: {
        title: "UI Design",
        description:
          "Interfaces for SaaS and web apps, with responsive layouts and consistent components ready to share with developers.",
      },
    },
  },
  {
    icon: Figma,
    copy: {
      it: {
        title: "UX Design",
        description:
          "Analisi dei percorsi utente, wireframe e prototipi per chiarire navigazione e azioni prima dello sviluppo.",
      },
      en: {
        title: "UX Design",
        description:
          "User flow analysis, wireframes, and prototypes to clarify navigation and key actions before development.",
      },
    },
  },
  {
    icon: Code,
    copy: {
      it: {
        title: "Web Design",
        description:
          "Siti per piccole e medie imprese: struttura dei contenuti, design responsive e sviluppo con WordPress o Webflow.",
      },
      en: {
        title: "Web Design",
        description:
          "Websites for small and medium-sized businesses: content structure, responsive design, and WordPress or Webflow development.",
      },
    },
  },
  {
    icon: Smartphone,
    copy: {
      it: {
        title: "App Design",
        description:
          "Schermate e prototipi di app mobile per definire flussi, contenuti e interazioni prima di passare allo sviluppo.",
      },
      en: {
        title: "App Design",
        description:
          "Mobile app screens and prototypes to define flows, content, and interactions before development.",
      },
    },
  },
  {
    icon: Zap,
    copy: {
      it: {
        title: "Branding",
        description:
          "Logo, colori e tipografia per dare coerenza alla presenza visiva della tua attività, sul sito e nei materiali digitali.",
      },
      en: {
        title: "Branding",
        description:
          "Logos, colour palettes, and typography for a consistent visual identity across your website and digital materials.",
      },
    },
  },
  {
    icon: Rocket,
    copy: {
      it: {
        title: "Consulenza UX",
        description:
          "Revisione di siti e interfacce esistenti per individuare ostacoli alla navigazione e definire le priorità di miglioramento.",
      },
      en: {
        title: "UX Consulting",
        description:
          "Reviews of existing websites and interfaces to identify navigation obstacles and prioritise improvements.",
      },
    },
  },
]

export const servicesSection: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
}> = {
  it: {
    badge: "Servizi",
    title: "Come posso aiutarti",
    description:
      "Dalla realizzazione del sito al supporto UI/UX per il tuo team: definiamo insieme attività, consegne e tempi in base al progetto.",
  },
  en: {
    badge: "Services",
    title: "How I can help",
    description:
      "From a complete website to UI/UX support for your team: we agree on scope, deliverables, and timelines around your project.",
  },
}

export const projectsSection: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
  viewAll: string
  orLabel: string
  linkedInCta: string
}> = {
  it: {
    badge: "Works",
    title: "Progetti selezionati",
    description:
      "Siti web, interfacce e studi UX per attività di settori diversi. Esplora i progetti e visita i siti realizzati.",
    viewAll: "Segui su Behance",
    orLabel: "o",
    linkedInCta: "Seguimi su LinkedIn",
  },
  en: {
    badge: "Works",
    title: "Selected work",
    description:
      "Websites, interfaces, and UX studies across different industries. Explore the projects and visit the live websites.",
    viewAll: "Follow on Behance",
    orLabel: "or",
    linkedInCta: "Follow me on LinkedIn",
  },
}

export const contactSectionCopy: Record<SupportedLanguage, {
  badge: string
  title: string
  description: string
}> = {
  it: {
    badge: "Contatti",
    title: "Hai un progetto in mente?",
    description:
      "Raccontami cosa vuoi realizzare, a chi si rivolge e quando vorresti partire. Ti rispondo entro 24 ore per capire insieme i prossimi passi.",
  },
  en: {
    badge: "Contact",
    title: "Have a project in mind?",
    description:
      "Tell me what you want to build, who it is for, and when you would like to start. I reply within 24 hours to discuss the next steps.",
  },
}

export const heroStats: Record<SupportedLanguage, Array<{ value: string; label: string }>> = {
  it: [
    { value: "UI/UX", label: "Design strategico" },
    { value: "Web", label: "Siti veloci e chiari" },
    { value: "App", label: "Prodotti digitali" },
  ],
  en: [
    { value: "UI/UX", label: "Strategic design" },
    { value: "Web", label: "Fast, clear websites" },
    { value: "App", label: "Digital products" },
  ],
}

export const skillMarquee = ["UI Design", "UX Research", "Web Design", "Product Design", "Branding", "Prototyping"]
