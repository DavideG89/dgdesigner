"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

import { appendLanguageParam, type SupportedLanguage } from "@/lib/i18n"

interface NavigationItem {
  name: string
  href: string
}

const navigationItems: Record<SupportedLanguage, NavigationItem[]> = {
  it: [
    { name: "Home", href: "/" },
    { name: "Chi sono", href: "/about" },
    { name: "Servizi", href: "/services" },
    { name: "Progetti", href: "/projects" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ],
}

const ctaCopy: Record<SupportedLanguage, string> = {
  it: "Contattami",
  en: "Let's Connect",
}

function buildLanguageHref(pathname: string, searchParams: URLSearchParams, lang: SupportedLanguage) {
  const params = new URLSearchParams(searchParams)
  if (lang === "en") {
    params.set("lang", "en")
  } else {
    params.delete("lang")
  }
  const queryString = params.toString()
  return queryString ? `${pathname}?${queryString}` : pathname
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lang: SupportedLanguage = searchParams.get("lang") === "en" ? "en" : "it"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const items = useMemo(() => navigationItems[lang], [lang])
  const contactHref = appendLanguageParam("/contact", lang)

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href={appendLanguageParam("/", lang)} className="flex items-center">
              <Image
                src="/favicon.png"
                alt="DG Designer logo"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-8">
            {items.map((item) => (
              <Link
                key={item.name}
                href={appendLanguageParam(item.href, lang)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-x-4">
            <div className="flex space-x-2">
              <Link
                href={buildLanguageHref(pathname, new URLSearchParams(searchParams), "it")}
                className="flex h-8 w-8 items-center justify-center"
              >
                <span className="text-sm" role="img" aria-label="Italiano">
                  🇮🇹
                </span>
              </Link>
              <Link
                href={buildLanguageHref(pathname, new URLSearchParams(searchParams), "en")}
                className="flex h-8 w-8 items-center justify-center"
              >
                <span className="text-sm" role="img" aria-label="English">
                  🇺🇸
                </span>
              </Link>
            </div>
            <Button asChild className="rounded-full">
              <Link href={contactHref}>{ctaCopy[lang]}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-64 bg-background shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <span className="flex items-center gap-2 font-space text-xl font-bold">
            <Image src="/favicon.png" alt="DG Designer logo" width={24} height={24} className="h-6 w-6" />
            designer
          </span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="space-y-1 p-4">
          {items.map((item) => (
            <Link
              key={item.name}
              href={appendLanguageParam(item.href, lang)}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center space-x-2 px-3 py-2">
              <Link
                href={buildLanguageHref(pathname, new URLSearchParams(searchParams), "it")}
                className="flex h-8 w-8 items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-sm" role="img" aria-label="Italiano">
                  🇮🇹
                </span>
              </Link>
              <Link
                href={buildLanguageHref(pathname, new URLSearchParams(searchParams), "en")}
                className="flex h-8 w-8 items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-sm" role="img" aria-label="English">
                  🇺🇸
                </span>
              </Link>
            </div>
            <Button asChild size="sm" className="mt-2 w-full rounded-full">
              <Link href={contactHref} onClick={() => setMobileMenuOpen(false)}>
                {ctaCopy[lang]}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
