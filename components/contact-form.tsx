"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    e.preventDefault()
    setIsSubmitting(true)

    try {

      const formData = new FormData(form)
      const payload = {
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        subject: formData.get("subject")?.toString() ?? "",
        service: formData.get("service")?.toString() ?? "",
        message: formData.get("message")?.toString() ?? "",
        company: formData.get("company")?.toString() ?? "",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      let data: Record<string, unknown> = {}
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error("Errore lettura risposta", jsonError)
      }

      if (response.ok) {
        toast({
          title: "Messaggio inviato!",
          description:
            typeof data.message === "string"
              ? data.message
              : "Grazie per avermi contattato. Ti risponderò al più presto.",
        })
        form.reset()
      } else {
        const errorMessage =
          typeof data.error === "string"
            ? data.error
            : typeof data.message === "string"
              ? data.message
              : "Si è verificato un errore durante l'invio del messaggio."
        throw new Error(errorMessage)
      }
    } catch (error) {
      toast({
        title: "Errore",
        description:
          error instanceof Error ? error.message : "Si è verificato un errore durante l'invio del messaggio.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inviami un messaggio</CardTitle>
        <CardDescription>Compila il modulo sottostante per contattarmi riguardo al tuo progetto.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="company">Azienda</Label>
            <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" placeholder="Il tuo nome" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="La tua email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Oggetto</Label>
            <Input id="subject" name="subject" placeholder="Oggetto del messaggio" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Servizio richiesto</Label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="" disabled>
                Seleziona un servizio
              </option>
              <option value="UI Design">UI Design</option>
              <option value="UX Design">UX Design</option>
              <option value="Web Development">Web Development</option>
              <option value="App Design">App Design</option>
              <option value="Branding">Branding</option>
              <option value="Altro">Altro</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Messaggio</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Descrivi il tuo progetto o la tua richiesta..."
              rows={5}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Invio in corso...</>
            ) : (
              <>
                Invia messaggio
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
