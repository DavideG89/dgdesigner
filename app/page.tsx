import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

import {
  contactSectionCopy,
  heroCopy,
  heroStats,
  projectsCopy,
  projectsSection,
  servicesCopy,
  servicesSection,
  skillMarquee,
} from "@/data/home"
import { appendLanguageParam, getLanguage } from "@/lib/i18n"
import { ExplainerCard } from "@/components/explainer-card"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams
  const lang = getLanguage(params)

  if (lang === "en") {
    return {
      title: "Davide Giuliano | UI/Web Designer",
      description:
        "Hi! I’m Davide, a UX/UI Designer passionate about creating intuitive, functional, and visually refined digital experiences.",
      alternates: {
        canonical: "/web-design-palermo",
      },
    }
  }

  return {
    title: "Davide Giuliano | UI/Web Designer",
    description:
      "Ciao! Sono Davide, un designer UX/UI che ama creare esperienze digitali intuitive, funzionali ed esteticamente piacevoli.",
    alternates: {
      canonical: "/web-design-palermo",
    },
  }
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams
  const lang = getLanguage(params)
  const hero = heroCopy[lang]
  const stats = heroStats[lang]
  const serviceSectionContent = servicesSection[lang]
  const servicesCards = servicesCopy.map(({ icon: Icon, copy }) => ({ icon: Icon, ...copy[lang] }))
  const projectsSectionContent = projectsSection[lang]
  const projects = projectsCopy[lang]
  const contactSection = contactSectionCopy[lang]

  const contactHref = appendLanguageParam("/contact", lang)
  const projectsHref = appendLanguageParam("/works", lang)

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24" aria-labelledby="home-hero-title">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="motion-rise order-2 flex flex-col gap-6 lg:order-1">
            
            <h1 id="home-hero-title" className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              {hero.titlePrefix}{" "}
              <span className="gradient-text">{hero.titleHighlight}</span>{" "}
              {hero.titleSuffix}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{hero.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="pill">
                <Link href={contactHref}>
                  {hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="pill">
                <Link href={projectsHref}>{hero.secondaryCta}</Link>
              </Button>
            </div>
            <dl className="grid gap-3 pt-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-panel rounded-lg border border-foreground/10 p-4">
                  <dt className="text-2xl font-bold text-foreground">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="motion-rise-delay order-1 relative mx-auto w-full max-w-lg lg:order-2">
            <div className="surface-panel motion-float relative aspect-[4/5] overflow-hidden rounded-lg border border-foreground/10 p-4">
              <div className="absolute left-4 right-4 top-4 z-10 h-px scan-line" />
              <div className="absolute bottom-5 left-5 z-10 rounded-lg border border-white/20 bg-background/80 px-4 py-3 shadow-xl backdrop-blur">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">DG Designer</p>
                <p className="mt-1 text-sm font-semibold">Palermo / Remote</p>
              </div>
              <Image
                src="/Me-Gif.gif"
                alt="Davide - UI/UX Designer"
                width={500}
                height={500}
                className="h-full w-full rounded-md object-cover object-center scale-125"
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mt-12 overflow-hidden border-y border-foreground/10 py-4" aria-hidden="true">
          <div className="marquee-track flex w-max gap-8 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {[...skillMarquee, ...skillMarquee].map((skill, index) => (
              <span key={`${skill}-${index}`} className="flex items-center gap-8">
                {skill}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="services-title">
        <div className="container">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
            <div>
            
              <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-5xl">{serviceSectionContent.title}</h2>
              <p className="mt-4 text-lg leading-16 text-muted-foreground md:justify-self-end">{serviceSectionContent.description}</p>
            </div>
            
          </div>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesCards.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <ExplainerCard icon={Icon} title={title} description={description} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" aria-labelledby="projects-title">
        <div className="container">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
            
              <h2 id="projects-title" className="text-3xl font-bold tracking-tight sm:text-5xl">{projectsSectionContent.title}</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground ">{projectsSectionContent.description}</p>
            </div>
          </div>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.title}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="tertiary" size="lg" className="rounded-full">
              <Link
                href="https://www.behance.net/davidegiuliano89bdff"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsSectionContent.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">{projectsSectionContent.orLabel}</span>
            <Button asChild variant="tertiary" size="lg" className="rounded-full">
              <Link href="https://www.linkedin.com/in/dav-giu/" target="_blank" rel="noopener noreferrer">
                {projectsSectionContent.linkedInCta}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" id="contact" aria-labelledby="contact-title">
        <div className="mx-auto w-full px-0 sm:px-6 lg:container">
          <div className="surface-panel overflow-hidden rounded-none border-y border-foreground/10 sm:rounded-lg sm:border">
            <div className="grid gap-10 px-5 py-10 sm:px-8 md:grid-cols-[0.8fr_1fr] md:p-10 lg:p-12">
              <div className="flex justify-between flex-col gap-8">
                <div>
                  <h2 id="contact-title" className="text-4xl font-bold tracking-tight sm:text-5xl">{contactSection.title}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{contactSection.description}</p>
                </div>
                <address className=" rounded-lg  text-sm not-italic leading-7 text-muted-foreground">
                  <p className="text-lg text-foreground font-semibold">Contatti</p>
                  <a className="transition-colors hover:text-foreground" href="mailto:davidegiuliano.free@gmail.com">
                    davidegiuliano.free@gmail.com
                  </a>
                  <br />
                  <a className="transition-colors hover:text-foreground" href="tel:+393205671678">
                   +39 320 567 1678
                  </a>
                </address>
              </div>
              <Suspense fallback={null}>
                <ContactForm key={lang} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
