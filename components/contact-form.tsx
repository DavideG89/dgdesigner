"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

import type { SupportedLanguage } from "@/lib/i18n"

const formCopy: Record<SupportedLanguage, {
  cardTitle: string
  cardDescription: string
  hiddenLabel: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  subjectLabel: string
  subjectPlaceholder: string
  serviceLabel: string
  servicePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  options: Array<{ value: string; label: string }>
  submit: string
  submitting: string
  successTitle: string
  successDescription: string
  errorTitle: string
  genericError: string
}> = {
  it: {
    cardTitle: "Inviami un messaggio",
    cardDescription: "Descrivi obiettivo e tempi del progetto. Ti rispondo entro 24 ore.",
    hiddenLabel: "Azienda",
    nameLabel: "Nome",
    namePlaceholder: "Il tuo nome",
    emailLabel: "Email",
    emailPlaceholder: "La tua email",
    subjectLabel: "Oggetto",
    subjectPlaceholder: "Oggetto del messaggio",
    serviceLabel: "Servizio richiesto",
    servicePlaceholder: "Seleziona un servizio",
    messageLabel: "Messaggio",
    messagePlaceholder: "Cosa vuoi realizzare? Hai già un sito? Indica tempi e budget orientativo, se li conosci.",
    options: [
      { value: "Website", label: "Sito web per la mia attività" },
      { value: "UI/UX", label: "UI/UX per un prodotto digitale" },
      { value: "Collaboration", label: "Collaborazione con agenzia o team" },
      { value: "Other", label: "Altro / da definire insieme" },
    ],
    submit: "Invia messaggio",
    submitting: "Invio in corso...",
    successTitle: "Messaggio inviato!",
    successDescription: "Grazie per avermi contattato. Ti risponderò al più presto.",
    errorTitle: "Errore",
    genericError: "Si è verificato un errore durante l'invio del messaggio.",
  },
  en: {
    cardTitle: "Send me a message",
    cardDescription: "Share your project goals and timeline. I reply within 24 hours.",
    hiddenLabel: "Company",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "Your email",
    subjectLabel: "Subject",
    subjectPlaceholder: "Message subject",
    serviceLabel: "Requested service",
    servicePlaceholder: "Select a service",
    messageLabel: "Message",
    messagePlaceholder: "What would you like to build? Do you have a website already? Include your timeline and approximate budget, if known.",
    options: [
      { value: "Website", label: "Website for my business" },
      { value: "UI/UX", label: "UI/UX for a digital product" },
      { value: "Collaboration", label: "Agency or team collaboration" },
      { value: "Other", label: "Other / help me decide" },
    ],
    submit: "Send message",
    submitting: "Sending...",
    successTitle: "Message sent!",
    successDescription: "Thanks for reaching out. I'll get back to you soon.",
    errorTitle: "Error",
    genericError: "Something went wrong while sending the message.",
  },
}

export default function ContactForm() {
  const searchParams = useSearchParams()
  const lang: SupportedLanguage = searchParams.get("lang") === "en" ? "en" : "it"
  const copy = formCopy[lang]

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
        console.error("Error reading response", jsonError)
      }

      if (response.ok) {
        toast({
          title: copy.successTitle,
          description:
            copy.successDescription,
        })
        form.reset()
      } else {
        const errorMessage = copy.genericError
        throw new Error(errorMessage)
      }
    } catch (error) {
      toast({
        title: copy.errorTitle,
        description: error instanceof Error ? error.message : copy.genericError,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className=" border-0 bg-secondary/30">
      <CardHeader>
        <CardTitle>{copy.cardTitle}</CardTitle>
        <CardDescription>{copy.cardDescription}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="company">{copy.hiddenLabel}</Label>
            <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{copy.nameLabel}</Label>
              <Input id="name" name="name" placeholder={copy.namePlaceholder} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{copy.emailLabel}</Label>
              <Input id="email" name="email" type="email" placeholder={copy.emailPlaceholder} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">{copy.subjectLabel}</Label>
            <Input id="subject" name="subject" placeholder={copy.subjectPlaceholder} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">{copy.serviceLabel}</Label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="" disabled>
                {copy.servicePlaceholder}
              </option>
              {copy.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{copy.messageLabel}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={copy.messagePlaceholder}
              rows={5}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>{copy.submitting}</>
            ) : (
              <>
                {copy.submit}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
