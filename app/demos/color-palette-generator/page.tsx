"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type ColorMode = "analogous" | "monochromatic" | "triadic" | "complementary" | "split-complementary"

export default function ColorPaletteGenerator() {
  const { toast } = useToast()
  const [baseColor, setBaseColor] = useState("#0070f3")
  const [colorMode, setColorMode] = useState<ColorMode>("analogous")
  const [palette, setPalette] = useState<string[]>([])

  const generatePalette = () => {
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
      let h = 0,
        s = 0,
        l = (max + min) / 2

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

      let r, g, b

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
        return hex.length === 1 ? "0" + hex : hex
      }

      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }

    const hsl = hexToHSL(baseColor)
    let newPalette: string[] = []

    switch (colorMode) {
      case "analogous":
        // Colors adjacent to each other on the color wheel
        newPalette = [
          hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h - 15 + 360) % 360, hsl.s, hsl.l),
          baseColor,
          hslToHex((hsl.h + 15) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l),
        ]
        break

      case "monochromatic":
        // Different shades and tints of the base color
        newPalette = [
          hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 30)),
          hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 15)),
          baseColor,
          hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 15)),
          hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 30)),
        ]
        break

      case "triadic":
        // Three colors equally spaced on the color wheel
        newPalette = [
          hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 60) % 360, hsl.s, hsl.l),
          baseColor,
          hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 300) % 360, hsl.s, hsl.l),
        ]
        break

      case "complementary":
        // Colors opposite each other on the color wheel
        newPalette = [
          hslToHex((hsl.h + 180) % 360, hsl.s, Math.max(0, hsl.l - 15)),
          hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
          baseColor,
          hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 15)),
          hslToHex((hsl.h + 180) % 360, hsl.s, Math.min(100, hsl.l + 15)),
        ]
        break

      case "split-complementary":
        // Base color and two colors adjacent to its complement
        newPalette = [
          hslToHex((hsl.h + 150) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 165) % 360, hsl.s, hsl.l),
          baseColor,
          hslToHex((hsl.h + 195) % 360, hsl.s, hsl.l),
          hslToHex((hsl.h + 210) % 360, hsl.s, hsl.l),
        ]
        break
    }

    setPalette(newPalette)
  }

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
    toast({
      title: "Colore copiato!",
      description: `${color} è stato copiato negli appunti.`,
    })
  }

  // Generate palette on initial load and when parameters change
  useState(() => {
    generatePalette()
  })

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Generatore di Palette Colori</h1>
          <p className="text-muted-foreground">Crea palette di colori armoniose per i tuoi progetti di design.</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="base-color">Colore Base</Label>
                <div className="mt-1.5 flex gap-2">
                  <Input
                    id="base-color"
                    type="color"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="h-10 w-10 cursor-pointer p-0"
                  />
                  <Input
                    type="text"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <Label>Tipo di Palette</Label>
                <Tabs
                  defaultValue="analogous"
                  value={colorMode}
                  onValueChange={(value) => setColorMode(value as ColorMode)}
                  className="mt-1.5"
                >
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                    <TabsTrigger value="analogous">Analoga</TabsTrigger>
                    <TabsTrigger value="monochromatic">Monocromatica</TabsTrigger>
                    <TabsTrigger value="triadic">Triadica</TabsTrigger>
                    <TabsTrigger value="complementary">Complementare</TabsTrigger>
                    <TabsTrigger value="split-complementary">Split Complementare</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <Button onClick={generatePalette} className="mb-6 w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Genera Palette
            </Button>

            <div className="grid grid-cols-5 gap-2">
              {palette.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="mb-2 h-16 w-full cursor-pointer rounded-md border"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color)}
                  ></div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-mono">{color}</span>
                    <button onClick={() => copyToClipboard(color)} className="rounded-full p-1 hover:bg-muted">
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
