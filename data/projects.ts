import type { SupportedLanguage } from "@/lib/i18n"

interface ProjectCopy {
  title: string
  description: string
  tags: string[]
}

interface PortfolioProject {
  id: string
  image: string
  link: string
  category: string[]
  showOnHome: boolean
  copy: Record<SupportedLanguage, ProjectCopy>
}

// The array order is the display order on both Home and Works.
const projects: PortfolioProject[] = [
  {
    "id": "centro-studi-metis",
    "image": "/metis-bg.png",
    "link": "https://centrostudimetis.it/",
    "category": [
      "Website"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "Centro Studi Metis",
        "description": "Sito web per presentare i servizi di orientamento, formazione e supporto allo studio di Centro Studi Metis.",
        "tags": [
          "Website",
          "UX/UI",
          "Branding"
        ]
      },
      "en": {
        "title": "Centro Studi Metis",
        "description": "Website presenting Centro Studi Metis and its education, university guidance, and study support services.",
        "tags": [
          "Website",
          "UX/UI",
          "Branding"
        ]
      }
    }
  },
  {
    "id": "catmatildabeat",
    "image": "/CatMatildabeat_Dsk.png",
    "link": "https://www.matildathecat.com/",
    "category": [
      "Website"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "Matilda The Cat Beat Marketplace",
        "description": "Sito per un beatmaker con catalogo musicale e collegamenti a BeatStars per acquistare le tracce e a YouTube per ascoltarle.",
        "tags": [
          "Website",
          "Marketplace",
          "Music",
          "Branding"
        ]
      },
      "en": {
        "title": "Matilda The Cat Beat Marketplace",
        "description": "Website for a beatmaker, featuring a music catalogue with links to purchase tracks on BeatStars and listen on YouTube.",
        "tags": [
          "Website",
          "Marketplace",
          "Music",
          "Branding"
        ]
      }
    }
  },
  {
    "id": "amicofritto-delivery-app",
    "image": "/Logo-Amico-Fritto.jpg",
    "link": "https://amicofritto.store",
    "category": [
      "Case Study",
      "Website"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "Amico Fritto Delivery App",
        "description": "Interfaccia per un takeaway: consultazione del menu, personalizzazione dei prodotti e percorso di ordinazione.",
        "tags": [
          "App Design",
          "UX/UI",
          "Food Delivery",
          "Branding"
        ]
      },
      "en": {
        "title": "Amico Fritto Delivery App",
        "description": "Interface for a takeaway business, covering menu browsing, item customisation, and the ordering flow.",
        "tags": [
          "App Design",
          "UX/UI",
          "Food Delivery",
          "Branding"
        ]
      }
    }
  },
  {
    "id": "topos-network",
    "image": "/Topos.png",
    "link": "https://www.topos.com.ng/",
    "category": [
      "Website"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "Topos Network",
        "description": "Startup innovativa nel settore finance e crypto che porta soluzioni di pagamento decentralizzate nei paesi in via di sviluppo.",
        "tags": [
          "Website",
          "Webflow",
          "Fintech",
          "Crypto"
        ]
      },
      "en": {
        "title": "Topos Network",
        "description": "Innovative fintech and crypto startup bringing decentralised payment solutions to developing countries.",
        "tags": [
          "Website",
          "Webflow",
          "Fintech",
          "Crypto"
        ]
      }
    }
  },
  {
    "id": "palermointour",
    "image": "/Palermointour website.png",
    "link": "https://palermointour.com",
    "category": [
      "Website"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "Palermointour",
        "description": "Sito web dedicato a una guida turistica palermitana per aumentare la visibilità online e favorire le prenotazioni.",
        "tags": [
          "Website",
          "Wordpress",
          "Branding",
          "Tourism"
        ]
      },
      "en": {
        "title": "Palermointour",
        "description": "Website for a Palermo tour guide, built to boost online visibility and drive bookings.",
        "tags": [
          "Website",
          "Wordpress",
          "Branding",
          "Tourism"
        ]
      }
    }
  },
  {
    "id": "whatsapp-case-study",
    "image": "/WhatsappStudy.png",
    "link": "https://www.behance.net/gallery/190797495/Beyond-Messaging-Redefining-WhatsApps-User-Experience",
    "category": [
      "Case Study"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "WhatsApp UX Case Study",
        "description": "Analisi dell'usabilità di WhatsApp con focus su opportunità di miglioramento per ottimizzare l'esperienza utente.",
        "tags": [
          "Case Study",
          "UX Research",
          "Product"
        ]
      },
      "en": {
        "title": "WhatsApp UX Case Study",
        "description": "Usability analysis of WhatsApp, highlighting opportunities to optimise the user experience.",
        "tags": [
          "Case Study",
          "UX Research",
          "Product"
        ]
      }
    }
  },
  {
    "id": "mavi-pesca",
    "image": "/MavipescaStudy.png",
    "link": "https://www.behance.net/gallery/175839809/Mavi-Pesca-Reservation-App-Case-study-UX",
    "category": [
      "Case Study"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "Mavi Pesca",
        "description": "App mobile progettata per un'azienda ittica per gestire ordini dei clienti e ottimizzare l'intero processo di vendita.",
        "tags": [
          "Case Study",
          "Product Design",
          "Mobile"
        ]
      },
      "en": {
        "title": "Mavi Pesca",
        "description": "Mobile app designed for a seafood company to manage customer orders and streamline the sales process.",
        "tags": [
          "Case Study",
          "Product Design",
          "Mobile"
        ]
      }
    }
  },
  {
    "id": "color-palette-generator-tool",
    "image": "/UI_bg.png",
    "link": "/works/tools/color-palette-generator",
    "category": [
      "Tools"
    ],
    "showOnHome": false,
    "copy": {
      "it": {
        "title": "Color Palette Generator",
        "description": "Strumento interattivo per generare palette armoniose con codici HEX pronti all'uso e condivisione community.",
        "tags": [
          "Tool",
          "Color",
          "UI/UX"
        ]
      },
      "en": {
        "title": "Color Palette Generator",
        "description": "Interactive tool to build harmonious palettes with ready-to-use HEX codes and community sharing.",
        "tags": [
          "Tool",
          "Color",
          "UI/UX"
        ]
      }
    }
  },
  {
    "id": "washlabservice-website",
    "image": "/WashLabService.png",
    "link": "https://washlabservice.it",
    "category": [
      "Website"
    ],
    "showOnHome": true,
    "copy": {
      "it": {
        "title": "WashLabServices",
        "description": "Sito web per un servizio di Autolavaggio di provincia.",
        "tags": [
          "Website",
          "Branding"
        ]
      },
      "en": {
        "title": "WashLabServices",
        "description": "Carwash website for a local business.",
        "tags": [
          "Website",
          "UX/UI",
          "Branding"
        ]
      }
    }
  }
]

export function getProjects(language: SupportedLanguage) {
  return projects.map(({ copy, ...project }) => ({ ...project, ...copy[language] }))
}
