"use client"

import { useEffect, useRef, useState } from "react"

type LottieInstance = {
  destroy: () => void
}

type LottieGlobal = {
  loadAnimation: (options: {
    container: Element
    renderer: "svg" | "canvas" | "html"
    loop: boolean
    autoplay: boolean
    animationData: unknown
    rendererSettings?: {
      preserveAspectRatio?: string
      progressiveLoad?: boolean
    }
  }) => LottieInstance
}

declare global {
  interface Window {
    lottie?: LottieGlobal
    bodymovin?: LottieGlobal
  }
}

const LOTTIE_SCRIPT_ID = "bodymovin-lottie-script"
const LOTTIE_SCRIPT_SRC = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"

let lottieScriptPromise: Promise<void> | null = null

function isWhiteFill(fill: string | null) {
  if (!fill) {
    return false
  }

  const normalized = fill.trim().toLowerCase()

  if (normalized === "#fff" || normalized === "#ffffff") {
    return true
  }

  if (normalized === "white") {
    return true
  }

  if (normalized.startsWith("rgb(")) {
    return normalized === "rgb(255,255,255)" || normalized === "rgb(255, 255, 255)"
  }

  if (normalized.startsWith("rgba(")) {
    return normalized === "rgba(255,255,255,1)" || normalized === "rgba(255, 255, 255, 1)"
  }

  return false
}

function parseDimension(value: string | null, fallback: number) {
  if (!value) {
    return 0
  }

  const normalized = value.trim().toLowerCase()

  if (normalized.endsWith("%")) {
    const percent = Number.parseFloat(normalized)
    if (Number.isNaN(percent)) {
      return 0
    }
    return (percent / 100) * fallback
  }

  const numeric = Number.parseFloat(normalized)
  if (Number.isNaN(numeric)) {
    return 0
  }

  return numeric
}

function stripWhiteSvgBackground(container: HTMLDivElement) {
  const svg = container.querySelector("svg")
  if (!svg) {
    return
  }

  svg.style.background = "transparent"
  svg.style.backgroundColor = "transparent"

  const viewBox = svg.getAttribute("viewBox")?.split(/\s+/).map(Number.parseFloat)
  const viewBoxWidth = viewBox && viewBox.length === 4 ? viewBox[2] : 0
  const viewBoxHeight = viewBox && viewBox.length === 4 ? viewBox[3] : 0
  const svgWidth = viewBoxWidth || parseDimension(svg.getAttribute("width"), 0)
  const svgHeight = viewBoxHeight || parseDimension(svg.getAttribute("height"), 0)

  if (!svgWidth || !svgHeight) {
    return
  }

  const rects = Array.from(svg.querySelectorAll("rect"))
  for (const rect of rects) {
    const fill = rect.getAttribute("fill")
    if (!isWhiteFill(fill)) {
      continue
    }

    const rectWidth = parseDimension(rect.getAttribute("width"), svgWidth)
    const rectHeight = parseDimension(rect.getAttribute("height"), svgHeight)
    const rectX = parseDimension(rect.getAttribute("x"), svgWidth)
    const rectY = parseDimension(rect.getAttribute("y"), svgHeight)

    const coversCanvas =
      rectX <= 1 &&
      rectY <= 1 &&
      rectWidth >= svgWidth * 0.95 &&
      rectHeight >= svgHeight * 0.95

    if (coversCanvas) {
      rect.remove()
    }
  }
}

function getLottieGlobal() {
  if (typeof window === "undefined") {
    return undefined
  }

  return window.lottie ?? window.bodymovin
}

function loadLottieScript() {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }

  if (getLottieGlobal()) {
    return Promise.resolve()
  }

  if (!lottieScriptPromise) {
    lottieScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.getElementById(LOTTIE_SCRIPT_ID) as HTMLScriptElement | null

      if (existingScript) {
        if (getLottieGlobal()) {
          resolve()
          return
        }

        existingScript.addEventListener("load", () => resolve(), { once: true })
        existingScript.addEventListener(
          "error",
          () => reject(new Error("Failed to load Lottie player script")),
          { once: true },
        )
        return
      }

      const script = document.createElement("script")
      script.id = LOTTIE_SCRIPT_ID
      script.src = LOTTIE_SCRIPT_SRC
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error("Failed to load Lottie player script"))
      document.head.appendChild(script)
    })
  }

  return lottieScriptPromise
}

type LottieAnimationProps = {
  src: string
  alt: string
  className?: string
}

export default function LottieAnimation({ src, alt, className }: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<LottieInstance | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    loadLottieScript()
      .then(() => {
        if (!cancelled) {
          setReady(true)
        }
      })
      .catch((error) => {
        console.error(error)
      })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!ready || !containerRef.current) {
      return
    }

    const lottieGlobal = getLottieGlobal()
    if (!lottieGlobal) {
      return
    }
    const lottie = lottieGlobal

    let cancelled = false
    const container = containerRef.current
    const encodedSrc = encodeURI(src)

    async function mountAnimation() {
      try {
        const response = await fetch(encodedSrc)
        if (!response.ok) {
          throw new Error(`Failed to fetch Lottie data from ${src}`)
        }

        const animationData = await response.json()

        if (cancelled || !containerRef.current) {
          return
        }

        animationRef.current?.destroy()
        container.innerHTML = ""

        animationRef.current = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
          },
        })

        requestAnimationFrame(() => {
          if (!cancelled) {
            stripWhiteSvgBackground(container)
          }
        })

        window.setTimeout(() => {
          if (!cancelled) {
            stripWhiteSvgBackground(container)
          }
        }, 120)
      } catch (error) {
        console.error(error)
      }
    }

    void mountAnimation()

    return () => {
      cancelled = true
      animationRef.current?.destroy()
      animationRef.current = null
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [ready, src])

  return <div ref={containerRef} role="img" aria-label={alt} className={className ? `bg-transparent ${className}` : "bg-transparent"} />
}
