import type { LucideIcon } from "lucide-react"
import { Code, Figma, Layers, Rocket, Smartphone, Zap } from "lucide-react"

import type { SupportedLanguage } from "@/lib/i18n"

interface ServiceCardCopy {
  title: string
  description: string
}

interface ShowcaseProject {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
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
    titlePrefix: "Crafting",
    titleHighlight: "impactful",
    titleSuffix: "User Experiences",
    description:
      "Ciao! Sono Davide, UX/UI & Web Designer che ama creare esperienze digitali intuitive, funzionali ed esteticamente piacevoli.",
    primaryCta: "Iniziamo a collaborare",
    secondaryCta: "Esplora i lavori",
  },
  en: {
    badge: "UI/UX & Web Designer",
    titlePrefix: "Crafting",
    titleHighlight: "impactful",
    titleSuffix: "User Experiences",
    description:
      "Hi! I'm Davide, a UX/UI & Web designer who loves crafting digital experiences that are intuitive, functional, and visually refined.",
    primaryCta: "Let's start working together",
    secondaryCta: "Explore my works",
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
          "Interfacce utente intuitive e accattivanti che migliorano l'esperienza dell'utente e aumentano la conversione.",
      },
      en: {
        title: "UI Design",
        description:
          "Intuitive, captivating interfaces that enhance the user experience and boost conversion.",
      },
    },
  },
  {
    icon: Figma,
    copy: {
      it: {
        title: "UX Design",
        description:
          "Ricerca utente, wireframing e prototyping per creare esperienze utente fluide e coinvolgenti.",
      },
      en: {
        title: "UX Design",
        description:
          "User research, wireframing, and prototyping to build seamless, engaging experiences.",
      },
    },
  },
  {
    icon: Code,
    copy: {
      it: {
        title: "Web Designer",
        description:
          "Sviluppo di siti web moderni, reattivi e ottimizzati per le prestazioni utilizzando le tecnologie più recenti.",
      },
      en: {
        title: "Web Designer",
        description:
          "Modern, responsive websites optimised for performance with the latest technologies.",
      },
    },
  },
  {
    icon: Smartphone,
    copy: {
      it: {
        title: "App Design",
        description:
          "Design di applicazioni mobile intuitive e funzionali per iOS e Android che gli utenti adoreranno.",
      },
      en: {
        title: "App Design",
        description:
          "Intuitive, high-performing mobile app design for iOS and Android that people love to use.",
      },
    },
  },
  {
    icon: Zap,
    copy: {
      it: {
        title: "Branding",
        description:
          "Creazione di identità di marca distintive che comunicano i valori e la personalità del tuo business.",
      },
      en: {
        title: "Branding",
        description:
          "Distinctive brand identities that communicate your values and personality.",
      },
    },
  },
  {
    icon: Rocket,
    copy: {
      it: {
        title: "Consulenza UX",
        description:
          "Analisi e ottimizzazione delle tue interfacce esistenti per migliorare l'usabilità e la conversione.",
      },
      en: {
        title: "UX Consulting",
        description:
          "Analysis and optimisation of your existing interfaces to improve usability and conversion.",
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
    title: "Soluzioni creative per ogni esigenza digitale",
    description:
      "Offro una gamma completa di servizi di design per aiutarti a creare esperienze digitali eccezionali.",
  },
  en: {
    badge: "Services",
    title: "Creative solutions for every digital challenge",
    description:
      "I offer a full spectrum of design services to help you craft outstanding digital experiences.",
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
    title: "Lavori recenti",
    description:
      "Esplora alcuni dei miei lavori più recenti e scopri come ho aiutato i miei clienti a raggiungere i loro obiettivi.",
    viewAll: "Segui su Behance",
    orLabel: "o",
    linkedInCta: "Seguimi su LinkedIn",
  },
  en: {
    badge: "Works",
    title: "Recent work",
    description:
      "Explore a selection of my latest work and see how I've helped clients reach their goals.",
    viewAll: "Follow on Behance",
    orLabel: "or",
    linkedInCta: "Follow me on LinkedIn",
  },
}

export const projectsCopy: Record<SupportedLanguage, ShowcaseProject[]> = {
  it: [
    {
      title: "Topos Network",
      description:
        "Startup innovativa nel settore finance e crypto che porta soluzioni di pagamento decentralizzate nei paesi in via di sviluppo.",
      image: "/Topos.png",
      tags: ["Website", "Webflow", "Fintech", "Crypto"],
      link: "https://www.topos.com.ng/",
    },
    {
      title: "Palermointour",
      description:
        "Sito web dedicato a una guida turistica palermitana per aumentare la visibilità online e favorire le prenotazioni.",
      image: "/Palermointour website.png",
      tags: ["Website", "Wordpress", "Branding", "Tourism"],
      link: "https://palermointour.com",
    },
    {
      title: "WhatsApp UX Case Study",
      description:
        "Analisi dell'usabilità di WhatsApp con focus su opportunità di miglioramento per ottimizzare l'esperienza utente.",
      image: "/WhatsappStudy.png",
      tags: ["Case Study", "UX Research", "Product"],
      link: "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    },
    {
      title: "Mavi Pesca",
      description:
        "App mobile progettata per un'azienda ittica per gestire ordini dei clienti e ottimizzare l'intero processo di vendita.",
      image: "/MavipescaStudy.png",
      tags: ["Case Study", "Product Design", "Mobile"],
      link: "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    },
    {
      title: "Matilda The Cat Beat Marketplace",
      description:
        "Marketplace su misura per un beatmaker, con catalogo tracce e call-to-action che indirizzano agli acquisti su BeatStars e al canale YouTube.",
      image: "/CatMatildabeat_Dsk.png",
      tags: ["Website", "Marketplace", "Music", "Branding"],
      link: "https://www.matildathecat.com/",
    },
    {
      title: "Amico Fritto Delivery App",
      description:
        "App di delivery progettata per un takeaway di Misilmeri, con un'interfaccia semplice e intuitiva che permette agli utenti di sfogliare il menu, personalizzare i prodotti e ordinare rapidamente.",
      image: "/Logo-Amico-Fritto.jpg",
      tags: ["App Design", "UX/UI", "Food Delivery", "Branding"],
      link: "https://amicofritto.store",
    },
        {
      title: "WashLabServices",
      description:
        "Sito web per un servizio di Autolavaggio di provincia.",
      image: "/WashLabService.png",
      tags: ["Website", "UX/UI", "Branding"],
      link: "https://washlabservice.it",
    },
  ],
  en: [
    {
      title: "Topos Network",
      description:
        "Innovative fintech and crypto startup bringing decentralised payment solutions to developing countries.",
      image: "/Topos.png",
      tags: ["Website", "Webflow", "Fintech", "Crypto"],
      link: "https://www.topos.com.ng/",
    },
    {
      title: "Palermointour",
      description:
        "Website for a Palermo tour guide, built to boost online visibility and drive bookings.",
      image: "/Palermointour website.png",
      tags: ["Website", "Wordpress", "Branding", "Tourism"],
      link: "https://palermointour.com",
    },
    {
      title: "WhatsApp UX Case Study",
      description:
        "Usability analysis of WhatsApp, highlighting opportunities to optimise the user experience.",
      image: "/WhatsappStudy.png",
      tags: ["Case Study", "UX Research", "Product"],
      link: "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    },
    {
      title: "Mavi Pesca",
      description:
        "Mobile app designed for a seafood company to manage customer orders and streamline the sales process.",
      image: "/MavipescaStudy.png",
      tags: ["Case Study", "Product Design", "Mobile"],
      link: "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    },
    {
      title: "Matilda The Cat Beat Marketplace",
      description:
        "Custom marketplace for a beatmaker with a track catalogue and calls to action for BeatStars and YouTube.",
      image: "/CatMatildabeat_Dsk.png",
      tags: ["Website", "Marketplace", "Music", "Branding"],
      link: "https://www.matildathecat.com/",
    },
    {
      title: "Amico Fritto Delivery App",
      description:
        "Delivery app designed for a takeaway in Misilmeri, featuring a simple and intuitive interface that allows users to browse the menu, customize items, and place orders quickly.",
      image: "/Logo-Amico-Fritto.jpg",
      tags: ["App Design", "UX/UI", "Food Delivery", "Branding"],
      link: "https://amicofritto.store",
    },
    {
      title: "WashLabServices",
      description:
        "Carwash website for a local business.",
      image: "/WashLabService.png",
      tags: ["Website", "UX/UI", "Branding"],
      link: "https://washlabservice.it",
    },
  ],
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
      "Contattami per discutere del tuo progetto e scoprire come posso aiutarti a realizzare la tua visione.",
  },
  en: {
    badge: "Contact",
    title: "Have a project in mind?",
    description:
      "Get in touch to discuss your project and discover how I can help bring your vision to life.",
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
