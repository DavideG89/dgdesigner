"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, RefreshCw, Share2, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type ColorMode = "analogous" | "monochromatic" | "triadic" | "complementary" | "split-complementary"

interface SharedPalette {
  id: string
  name: string
  author?: string
  baseColor: string
  mode: ColorMode
  colors: string[]
  createdAt: string
}

const paletteModeOptions: Array<{ value: ColorMode; label: string }> = [
  { value: "analogous", label: "Analoga" },
  { value: "monochromatic", label: "Monocromatica" },
  { value: "triadic", label: "Triadica" },
  { value: "complementary", label: "Complementare" },
  { value: "split-complementary", label: "Split Complementare" },
]

const modeLabels: Record<ColorMode, string> = {
  analogous: "Analoga",
  monochromatic: "Monocromatica",
  triadic: "Triadica",
  complementary: "Complementare",
  "split-complementary": "Split Complementare",
}

const isHexColor = (value: string) => /^#?[0-9a-fA-F]{6}$/.test(value)

const normalizeHex = (value: string) => {
  const prefixed = value.startsWith("#") ? value : `#${value}`
  return prefixed.toUpperCase()
}

export default function ColorPaletteGenerator() {
  const { toast } = useToast()
  const [baseColor, setBaseColor] = useState("#0070F3")
  const [colorMode, setColorMode] = useState<ColorMode>("analogous")
  const [palette, setPalette] = useState<string[]>([])

  const [paletteName, setPaletteName] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [isSharing, setIsSharing] = useState(false)
  const [isLoadingShared, setIsLoadingShared] = useState(true)
  const [sharedPalettes, setSharedPalettes] = useState<SharedPalette[]>([])

  const safeBaseColor = isHexColor(baseColor) ? normalizeHex(baseColor) : "#0070F3"

  const generatePalette = useCallback(() => {
    // Convert hex to HSL for easier manipulation
    const hexToHSL = (hex: string) => {
      // Remove the # if present
      hex = hex.replace(/^#/, "")

      // Parse the hex values
      const r = Number.parseInt(hex.substring(0, 2), 16) / 255
      const g = Number.parseInt(hex.substring(2, 4), 16) / 255
      const b = Number.parseInt(hex.substring(4, 6), 16) / 255

      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h = 0
      let s = 0
      let l = (max + min) / 2

      if (max !== min) {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0)
            break
          case g:
            h = (b - r) / d + 2
            break
          case b:
            h = (r - g) / d + 4
            break
        }

        h /= 6
      }

      return { h: h * 360, s: s * 100, l: l * 100 }
    }

    // Convert HSL to hex
    const hslToHex = (h: number, s: number, l: number) => {
      h /= 360
      s /= 100
      l /= 100

      let r: number
      let g: number
      let b: number

      if (s === 0) {
        r = g = b = l
      } else {
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1
          if (t > 1) t -= 1
          if (t < 1 / 6) return p + (q - p) * 6 * t
          if (t < 1 / 2) return q
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
          return p
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q

        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
      }

      const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16)
        return hex.length === 1 ? `0${hex}` : hex
      }

      return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
    }

    const hsl = hexToHSL(safeBaseColor)
    let newPalette: string[] = []

    switch (colorMode) {
      case "analogous":
        newPalette = [
          hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h - 15 + 360) % 360, hsl.s, hsl.l),
          safeBaseColor,
          hslToHex((hsl.h + 15) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l),
        ]
        break
      case "monochromatic":
        newPalette = [
          hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 30)),
          hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 15)),
          safeBaseColor,
          hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 15)),
          hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 30)),
        ]
        break
      case "triadic":
        newPalette = [
          hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 60) % 360, hsl.s, hsl.l),
          safeBaseColor,
          hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 300) % 360, hsl.s, hsl.l),
        ]
        break
      case "complementary":
        newPalette = [
          hslToHex((hsl.h + 180) % 360, hsl.s, Math.max(0, hsl.l - 15)),
          hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
          safeBaseColor,
          hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 15)),
          hslToHex((hsl.h + 180) % 360, hsl.s, Math.min(100, hsl.l + 15)),
        ]
        break
      case "split-complementary":
        newPalette = [
          hslToHex((hsl.h + 150) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 165) % 360, hsl.s, hsl.l),
          safeBaseColor,
          hslToHex((hsl.h + 195) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 210) % 360, hsl.s, hsl.l),
        ]
        break
    }

    setPalette(newPalette)
  }, [colorMode, safeBaseColor])

  const loadSharedPalettes = useCallback(async () => {
    try {
      setIsLoadingShared(true)
      const response = await fetch("/api/palettes", { cache: "no-store" })
      const result = (await response.json()) as { palettes?: SharedPalette[]; error?: string }

      if (!response.ok) {
        throw new Error(result.error ?? "Errore nel caricamento.")
      }

      setSharedPalettes(result.palettes ?? [])
    } catch (error) {
      toast({
        title: "Caricamento non riuscito",
        description: error instanceof Error ? error.message : "Impossibile leggere le palette condivise.",
        variant: "destructive",
      })
    } finally {
      setIsLoadingShared(false)
    }
  }, [toast])

  useEffect(() => {
    generatePalette()
  }, [generatePalette])

  useEffect(() => {
    void loadSharedPalettes()
  }, [loadSharedPalettes])

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
    toast({
      title: "Copiato",
      description: `${value} è stato copiato negli appunti.`,
    })
  }

  const copyPalette = (colors: string[]) => {
    const text = colors.join(", ")
    navigator.clipboard.writeText(text)
    toast({
      title: "Palette copiata",
      description: "Hai copiato tutti i colori della palette.",
    })
  }

  const useSharedPalette = (item: SharedPalette) => {
    setBaseColor(item.baseColor)
    setColorMode(item.mode)
    setPalette(item.colors)

    toast({
      title: "Palette caricata",
      description: `Hai applicato "${item.name}".`,
    })
  }

  const sharePalette = async () => {
    if (palette.length < 3) {
      toast({
        title: "Palette non pronta",
        description: "Genera una palette prima di condividerla.",
        variant: "destructive",
      })
      return
    }

    const cleanName = paletteName.trim()
    if (cleanName.length < 2) {
      toast({
        title: "Nome richiesto",
        description: "Inserisci un nome palette di almeno 2 caratteri.",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSharing(true)

      const response = await fetch("/api/palettes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          author: authorName.trim() || undefined,
          baseColor: safeBaseColor,
          mode: colorMode,
          colors: palette,
        }),
      })

      const result = (await response.json()) as {
        success?: boolean
        palette?: SharedPalette
        error?: string
      }

      if (!response.ok || !result.palette) {
        throw new Error(result.error ?? "Pubblicazione non riuscita.")
      }

      setSharedPalettes((prev) => [result.palette as SharedPalette, ...prev])
      setPaletteName("")

      toast({
        title: "Palette condivisa",
        description: "La tua palette è ora visibile a tutti.",
      })
    } catch (error) {
      toast({
        title: "Errore condivisione",
        description: error instanceof Error ? error.message : "Riprova tra qualche istante.",
        variant: "destructive",
      })
    } finally {
      setIsSharing(false)
    }
  }

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("it-IT", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    [],
  )

  return (
    <div className="container py-8 sm:py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Free Color Palette Generator</h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Create harmonious color schemes for your web, mobile, and brand design projects in seconds.
          </p>
        </div>

        <Card className="overflow-hidden border-border/70">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="base-color">Base Color</Label>
                  <div className="mt-2 flex gap-2">
                    <Input
                      id="base-color"
                      type="color"
                      value={safeBaseColor}
                      onChange={(e) => setBaseColor(normalizeHex(e.target.value))}
                      className="h-11 w-14 cursor-pointer p-1"
                    />
                    <Input
                      type="text"
                      value={baseColor}
                      onChange={(e) => setBaseColor(e.target.value)}
                      onBlur={() => {
                        if (isHexColor(baseColor)) setBaseColor(normalizeHex(baseColor))
                      }}
                      className="h-11 flex-1 font-mono text-sm uppercase"
                    />
                  </div>
                </div>

                <div>
                  <Label>Palette Type</Label>
                  <Tabs
                    defaultValue="analogous"
                    value={colorMode}
                    onValueChange={(value) => setColorMode(value as ColorMode)}
                    className="mt-2"
                  >
                    <TabsList className="grid h-auto w-full grid-cols-1 gap-1 bg-muted/70 p-1 sm:grid-cols-2">
                      {paletteModeOptions.map((option) => (
                        <TabsTrigger key={option.value} value={option.value} className="px-3 py-2 text-xs sm:text-sm">
                          {option.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                <Button onClick={generatePalette} className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                      Generate Palette
                </Button>
              </div>

              <div className="space-y-4 rounded-2xl border bg-background/60 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Current Palette</h2>
                  <button
                    type="button"
                    onClick={() => copyPalette(palette)}
                    className="rounded-md p-1.5 transition-colors hover:bg-muted"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex h-14 overflow-hidden rounded-lg border">
                  {palette.map((color, index) => (
                    <button
                      key={`${color}-bar-${index}`}
                      type="button"
                      className="relative flex-1 transition-opacity hover:opacity-85"
                      style={{ backgroundColor: color }}
                      onClick={() => copyToClipboard(color)}
                    >
                      <span className="sr-only">Copy {color}</span>
                    </button>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {palette.map((color, index) => (
                    <div key={`${color}-${index}`} className="rounded-lg border bg-card p-2">
                      <button
                        type="button"
                        className="mb-2 h-16 w-full rounded-md border transition-transform hover:scale-[0.98]"
                        style={{ backgroundColor: color }}
                        onClick={() => copyToClipboard(color)}
                      >
                        <span className="sr-only">Copia {color}</span>
                      </button>
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate font-mono text-xs sm:text-sm">{color}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(color)}
                          className="rounded-md p-1.5 transition-colors hover:bg-muted"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardContent className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-base font-semibold">Share Your Palette</h2>
              </div>
              <div className="space-y-2">
                <Label htmlFor="palette-name">Palette Name</Label>
                <Input
                  id="palette-name"
                  value={paletteName}
                  onChange={(e) => setPaletteName(e.target.value)}
                  placeholder="Es. Sunset Editorial"
                  maxLength={40}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author-name">Author (opzional)</Label>
                <Input
                  id="author-name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Il tuo nome"
                  maxLength={30}
                />
              </div>
              <div className="grid grid-cols-5 gap-2 rounded-lg border p-2">
                {palette.map((color, index) => (
                  <div
                    key={`${color}-share-${index}`}
                    className="h-8 rounded-sm border"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <Button onClick={sharePalette} disabled={isSharing} className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                {isSharing ? "Pubblicazione..." : "Pubblica Palette"}
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-base font-semibold">Shared Palettes</h2>
                </div>
                <Button variant="outline" size="sm" onClick={() => void loadSharedPalettes()}>
                  Update
                </Button>
              </div>

              {isLoadingShared ? <p className="text-sm text-muted-foreground">Loading palettes...</p> : null}

              {!isLoadingShared && sharedPalettes.length === 0 ? (
                <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                  No shared palettes at the moment. Publish the first one.
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                {sharedPalettes.map((item) => (
                  <article key={item.id} className="rounded-lg border bg-card p-3">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="line-clamp-1 text-sm font-semibold">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {item.author ? `${item.author} · ` : ""}
                          {dateFormatter.format(new Date(item.createdAt))}
                        </p>
                      </div>
                      <span className="rounded-full bg-muted px-2 py-1 text-[11px] text-muted-foreground">
                        {modeLabels[item.mode]}
                      </span>
                    </div>

                    <div className="mb-3 flex h-9 overflow-hidden rounded-md border">
                      {item.colors.map((color, index) => (
                        <button
                          key={`${item.id}-${color}-${index}`}
                          type="button"
                          className="flex-1"
                          style={{ backgroundColor: color }}
                          onClick={() => copyToClipboard(color)}
                        >
                          <span className="sr-only">Copy {color}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" className="h-8 flex-1" onClick={() => useSharedPalette(item)}>
                        Use this
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 px-2.5" onClick={() => copyPalette(item.colors)}>
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
