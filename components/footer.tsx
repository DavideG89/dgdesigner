"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import { appendLanguageParam, type SupportedLanguage } from "@/lib/i18n"

const navigationCopy = {
  it: {
    navigation: "Navigazione",
    services: "Servizi",
    contact: "Contatti",
    home: "Home",
    about: "Chi sono",
    servicesLink: "Servizi",
    projects: "Works",
    contactLink: "Contatti",
    webdesign: "Web Design Palermo",
    servicesSections: {
      ui: "UI Design",
      ux: "UX Design",
      web: "Web Design",
      app: "App Design",
      branding: "Branding",
    },
    contactInfo: {
      title: "Contatti",
      email: "Email",
      phone: "Telefono",
      location: "Località",
    },
    contactValues: {
      email: "davidegiuliano.free@gmail.com",
      phone: "320 567 1678",
      location: "Italia",
    },
    tagline: "Web Designer Freelance a Palermo (PA).\nDisponibile per progetti in tutta Italia ed estero.",
    rights: (year: number) => `© ${year} Tutti i diritti riservati.`,
  },
  en: {
    navigation: "Navigation",
    services: "Services",
    contact: "Contact",
    home: "Home",
    about: "About",
    servicesLink: "Services",
    projects: "Works",
    contactLink: "Contact",
    webdesign: "Web Design Palermo ",
    servicesSections: {
      ui: "UI Design",
      ux: "UX Design",
      web: "Web Design",
      app: "App Design",
      branding: "Branding",
    },
    contactInfo: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    contactValues: {
      email: "davidegiuliano.free@gmail.com",
      phone: "320 567 1678",
      location: "Italy",
    },
    tagline: "Crafting impactful user experiences, one pixel at a time.",
    rights: (year: number) => `© ${year} DG Designer. All rights reserved.`,
  },
} satisfies Record<SupportedLanguage, any>

export default function Footer() {
  const searchParams = useSearchParams()
  const lang: SupportedLanguage = searchParams.get("lang") === "en" ? "en" : "it"
  const copy = navigationCopy[lang]
  const currentYear = new Date().getFullYear()

  const homeHref = appendLanguageParam("/", lang)
  const aboutHref = appendLanguageParam("/about", lang)
  const servicesHref = appendLanguageParam("/services", lang)
  const projectsHref = appendLanguageParam("/works", lang)
  const contactHref = appendLanguageParam("/contact", lang)
  const webdesignHref = appendLanguageParam("/web-design-palermo", lang)

  return (
    <footer className="border-t border-foreground/10 bg-foreground text-background">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <Link href={homeHref} className="flex w-fit items-center rounded-full border border-background/15 bg-background p-2">
              <Image src="/logo.png" alt="DG Designer logo" width={48} height={48} className="h-12 w-12" priority />
            </Link>
            <p className="mt-5 whitespace-pre-line text-sm leading-7 text-background/70">{copy.tagline}</p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://github.com" className="rounded-full border border-background/15 bg-background/10 p-2 text-background/70 transition-colors hover:text-background">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/dav-giu/" className="rounded-full border border-background/15 bg-background/10 p-2 text-background/70 transition-colors hover:text-background">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:davidegiuliano.free@gmail.com" className="rounded-full border border-background/15 bg-background/10 p-2 text-background/70 transition-colors hover:text-background">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-background">{copy.navigation}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={homeHref} className="text-sm text-background/65 hover:text-background">
                  {copy.home}
                </Link>
              </li>
              <li>
                <Link href={aboutHref} className="text-sm text-background/65 hover:text-background">
                  {copy.about}
                </Link>
              </li>
              <li>
                <Link href={servicesHref} className="text-sm text-background/65 hover:text-background">
                  {copy.servicesLink}
                </Link>
              </li>
              <li>
                <Link href={projectsHref} className="text-sm text-background/65 hover:text-background">
                  {copy.projects}
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="text-sm text-background/65 hover:text-background">
                  {copy.contactLink}
                </Link>
              </li>
              <li>
                <Link href={webdesignHref} className="text-sm text-background/65 hover:text-background">
                  {copy.webdesign}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-background">{copy.contact}</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-background/65">
                <strong>{copy.contactInfo.email}:</strong> {copy.contactValues.email}
              </li>
              <li className="text-sm text-background/65">
                <strong>{copy.contactInfo.phone}:</strong> {copy.contactValues.phone}
              </li>
              <li className="text-sm text-background/65">
                <strong>{copy.contactInfo.location}:</strong> {copy.contactValues.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <div className="flex flex-col items-center gap-3 text-sm text-background/60 md:flex-row md:justify-center">
            <Image src="/logo.png" alt="DG Designer logo" width={32} height={32} className="h-8 w-8" />
            <span>{copy.rights(currentYear)}</span> <a href="/privacy-policy" className="text-background/60 hover:text-background">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
