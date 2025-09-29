import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm font-medium text-primary">Errore 404</p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Pagina non trovata</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        La pagina che stai cercando potrebbe essere stata spostata o non esiste. Torna alla home page per continuare a
        esplorare il sito.
      </p>
      <Button asChild className="rounded-full">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna alla home
        </Link>
      </Button>
    </main>
  )
}
