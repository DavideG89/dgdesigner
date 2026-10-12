"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LandingMotion() {
  useLayoutEffect(() => {
    const page = document.querySelector<HTMLElement>("[data-landing-page]")
    if (!page) return

    const motion = gsap.matchMedia()

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]", page)
      const heroImage = page.querySelector<HTMLElement>("[data-hero-image]")

      const hero = gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
      hero.fromTo(heroItems, { autoAlpha: 0, x: -32 }, { autoAlpha: 1, x: 0, stagger: 0.12 })

      if (heroImage) {
        hero.fromTo(heroImage, { autoAlpha: 0, x: 40 }, { autoAlpha: 1, x: 0 }, 0.18)
      }

      gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]", page).forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        )
      })
    }, page)

    return () => motion.revert()
  }, [])

  return null
}
