import type { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

import { getLanguage, type SupportedLanguage } from "@/lib/i18n"

interface ContactDetail {
  icon: typeof Mail
  title: string
  value: string
  note: string
}

const pageCopy: Record<SupportedLanguage, {
  metadata: { title: string; description: string }
  heroBadge: string
  heroTitlePrefix: string
  heroTitleHighlight: string
  heroDescription: string
  contactInfoTitle: string
  contactInfoDescription: string
  followMe: string
  mapAlt: string
  formTitle: string
  details: ContactDetail[]
}> = {
  it: {
    metadata: {
      title: "Contatti",
      description: "Contattami per collaborazioni, preventivi o consulenze UX/UI e WebDesign.",
    },
    heroBadge: "Contatti",
    heroTitlePrefix: "Parliamo del tuo",
    heroTitleHighlight: "progetto",
    heroDescription:
      "Hai un'idea o un progetto in mente? Contattami per discuterne e trasformarla in realtà.",
    contactInfoTitle: "Informazioni di contatto",
    contactInfoDescription:
      "Sono sempre disponibile per nuove opportunità di collaborazione. Non esitare a contattarmi per qualsiasi domanda o proposta.",
    followMe: "Seguimi",
    mapAlt: "Mappa di Milano",
    formTitle: "Inviami un messaggio",
    details: [
      {
        icon: Mail,
        title: "Email",
        value: "davidegiuliano.free@gmail.com",
        note: "Rispondo entro 24 ore",
      },
      {
        icon: Phone,
        title: "Telefono",
        value: "+39 3205671678",
        note: "Lun-Ven, 9:00-18:00 CET",
      },
      {
        icon: MapPin,
        title: "Località",
        value: "Italia, Worldwide",
        note: "Disponibile per lavoro remoto",
      },
    ],
  },
  en: {
    metadata: {
      title: "Contact",
      description: "Get in touch for collaborations, quotes, or UX/UI and web design consultations.",
    },
    heroBadge: "Contact",
    heroTitlePrefix: "Let's talk about your",
    heroTitleHighlight: "project",
    heroDescription:
      "Have an idea or a project in mind? Reach out so we can turn it into reality.",
    contactInfoTitle: "Contact information",
    contactInfoDescription:
      "I'm always open to new collaboration opportunities. Feel free to contact me with any question or proposal.",
    followMe: "Follow me",
    mapAlt: "Map of Milan",
    formTitle: "Send me a message",
    details: [
      {
        icon: Mail,
        title: "Email",
        value: "davidegiuliano.free@gmail.com",
        note: "I reply within 24 hours",
      },
      {
        icon: Phone,
        title: "Phone",
        value: "+39 3205671678",
        note: "Mon-Fri, 9:00-18:00 CET",
      },
      {
        icon: MapPin,
        title: "Location",
        value: "Italy,Worldwide",
        note: "Available for remote work",
      },
    ],
  },
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams
  const lang = getLanguage(params)
  return {
    ...pageCopy[lang].metadata,
    alternates: {
      canonical: "/contact",
    },
  }
}

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams
  const lang = getLanguage(params)
  const copy = pageCopy[lang]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">{copy.heroBadge}</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {copy.heroTitlePrefix}{" "}
              <span className="gradient-text">{copy.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{copy.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">{copy.contactInfoTitle}</h2>
              <p className="mb-8 text-muted-foreground">{copy.contactInfoDescription}</p>

              <div className="space-y-6">
                {copy.details.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">{detail.title}</h3>
                        <p className="text-muted-foreground">{detail.value}</p>
                        <p className="text-sm text-muted-foreground">{detail.note}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-12">
                <h3 className="mb-4 text-xl font-bold">{copy.followMe}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/dave.julian89"
                    className="rounded-full bg-muted p-3 text-foreground/60 hover:bg-primary/10 hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a
                    href="https://github.com"
                    className="rounded-full bg-muted p-3 text-foreground/60 hover:bg-primary/10 hover:text-primary"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dav-giu/"
                    className="rounded-full bg-muted p-3 text-foreground/60 hover:bg-primary/10 hover:text-primary"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">{copy.formTitle}</h2>
              <Suspense fallback={null}>
                <ContactForm key={lang} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.854087811755!2d9.186501776537555!3d45.46433623566531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e08!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1682341234567!5m2!1sit!2sit"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={copy.mapAlt}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
