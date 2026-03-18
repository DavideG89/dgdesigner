import { randomUUID } from "node:crypto"
import { promises as fs } from "node:fs"
import path from "node:path"

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIR, "shared-palettes.json")
const MAX_SAVED_PALETTES = 300

export type SharedPaletteMode =
  | "analogous"
  | "monochromatic"
  | "triadic"
  | "complementary"
  | "split-complementary"

export interface SharedPalette {
  id: string
  name: string
  author?: string
  baseColor: string
  mode: SharedPaletteMode
  colors: string[]
  createdAt: string
}

type SharedPaletteInput = Omit<SharedPalette, "id" | "createdAt">

const ensureStore = async () => {
  await fs.mkdir(DATA_DIR, { recursive: true })

  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8")
  }
}

const sanitizeFromDisk = (data: unknown): SharedPalette[] => {
  if (!Array.isArray(data)) return []

  return data.filter((item): item is SharedPalette => {
    if (!item || typeof item !== "object") return false

    const candidate = item as Partial<SharedPalette>

    return (
      typeof candidate.id === "string" &&
      typeof candidate.name === "string" &&
      typeof candidate.baseColor === "string" &&
      typeof candidate.mode === "string" &&
      typeof candidate.createdAt === "string" &&
      Array.isArray(candidate.colors) &&
      candidate.colors.every((color) => typeof color === "string")
    )
  })
}

const readStore = async (): Promise<SharedPalette[]> => {
  await ensureStore()
  const raw = await fs.readFile(DATA_FILE, "utf8")

  try {
    return sanitizeFromDisk(JSON.parse(raw))
  } catch {
    return []
  }
}

let writeQueue: Promise<void> = Promise.resolve()

export const listSharedPalettes = async () => {
  const palettes = await readStore()
  return palettes.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export const addSharedPalette = async (input: SharedPaletteInput) => {
  let savedPalette: SharedPalette | null = null

  writeQueue = writeQueue.then(async () => {
    const current = await readStore()
    const nextPalette: SharedPalette = {
      id: randomUUID(),
      name: input.name,
      author: input.author,
      baseColor: input.baseColor,
      mode: input.mode,
      colors: input.colors,
      createdAt: new Date().toISOString(),
    }
    savedPalette = nextPalette

    const nextList = [nextPalette, ...current].slice(0, MAX_SAVED_PALETTES)
    const payload = JSON.stringify(nextList, null, 2)
    const tmpFile = `${DATA_FILE}.tmp`
    await fs.writeFile(tmpFile, payload, "utf8")
    await fs.rename(tmpFile, DATA_FILE)
  })

  await writeQueue

  if (!savedPalette) {
    throw new Error("Failed to save shared palette.")
  }

  return savedPalette
}
