import { NextResponse } from "next/server"
import { addSharedPalette, listSharedPalettes, type SharedPaletteMode } from "@/lib/shared-palettes-store"

interface PalettePayload {
  name?: unknown
  author?: unknown
  baseColor?: unknown
  mode?: unknown
  colors?: unknown
}

const modeValues = new Set<SharedPaletteMode>([
  "analogous",
  "monochromatic",
  "triadic",
  "complementary",
  "split-complementary",
])

const isHexColor = (value: string) => /^#?[0-9a-fA-F]{6}$/.test(value)

const normalizeHex = (value: string) => {
  const prefixed = value.startsWith("#") ? value : `#${value}`
  return prefixed.toUpperCase()
}

export async function GET() {
  try {
    const palettes = await listSharedPalettes()
    return NextResponse.json({ palettes })
  } catch (error) {
    console.error("Shared palettes GET error", error)

    return NextResponse.json({ error: "Impossibile caricare le palette condivise." }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as PalettePayload

    const name = typeof data.name === "string" ? data.name.trim() : ""
    const author = typeof data.author === "string" ? data.author.trim() : ""
    const baseColor = typeof data.baseColor === "string" ? data.baseColor.trim() : ""
    const mode = typeof data.mode === "string" ? (data.mode as SharedPaletteMode) : undefined
    const colors = Array.isArray(data.colors) ? data.colors : []

    if (name.length < 2 || name.length > 40) {
      return NextResponse.json(
        { error: "Il nome della palette deve avere tra 2 e 40 caratteri." },
        { status: 400 },
      )
    }

    if (author.length > 30) {
      return NextResponse.json({ error: "Il nome autore può avere massimo 30 caratteri." }, { status: 400 })
    }

    if (!mode || !modeValues.has(mode)) {
      return NextResponse.json({ error: "Tipo palette non valido." }, { status: 400 })
    }

    if (!isHexColor(baseColor)) {
      return NextResponse.json({ error: "Colore base non valido." }, { status: 400 })
    }

    if (colors.length < 3 || colors.length > 8) {
      return NextResponse.json({ error: "La palette deve contenere da 3 a 8 colori." }, { status: 400 })
    }

    const normalizedColors = colors.map((value) => {
      if (typeof value !== "string" || !isHexColor(value)) {
        throw new Error("INVALID_COLOR")
      }

      return normalizeHex(value)
    })

    const saved = await addSharedPalette({
      name,
      author: author || undefined,
      baseColor: normalizeHex(baseColor),
      mode,
      colors: normalizedColors,
    })

    return NextResponse.json({ success: true, palette: saved }, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_COLOR") {
      return NextResponse.json({ error: "Uno o più colori non sono validi." }, { status: 400 })
    }

    console.error("Shared palettes POST error", error)

    return NextResponse.json({ error: "Impossibile salvare la palette. Riprova." }, { status: 500 })
  }
}
