import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  service?: string
  message?: string
  company?: string
}

const smtpHost = process.env.EMAIL_HOST
const smtpPort = process.env.EMAIL_PORT
const smtpUser = process.env.EMAIL_USER
const smtpPass = process.env.EMAIL_PASS

const fallbackRecipient = "davidegiuliano.free@gmail.com"

const ensureTransporter = () => {
  if (!smtpUser || !smtpPass) {
    throw new Error(
      "Email credentials missing. Set EMAIL_USER and EMAIL_PASS (and optionally EMAIL_HOST / EMAIL_PORT).",
    )
  }

  if (smtpHost) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort ?? 465),
      secure: (process.env.EMAIL_SECURE ?? "true") !== "false",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  }

  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE ?? "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload
    const { name, email, subject, service, message, company } = data

    if (!name || !email || !subject || !service || !message) {
      return NextResponse.json(
        { error: "Dati mancanti. Compila tutti i campi obbligatori e riprova." },
        { status: 400 },
      )
    }

    if (company) {
      return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 })
    }

    const transporter = ensureTransporter()

    const toAddress = process.env.CONTACT_EMAIL_TO ?? fallbackRecipient
    const fromAddress = process.env.EMAIL_FROM ?? smtpUser

    const emailSubject = `Dgdesigner: ${subject}`
    const plainText = `Nome: ${name}
Email: ${email}
Servizio: ${service}

Messaggio:
${message}`

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servizio richiesto:</strong> ${service}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: emailSubject,
      text: plainText,
      html: htmlContent,
    })

    return NextResponse.json({ success: true, message: "Messaggio inviato correttamente." })
  } catch (error) {
    console.error("Contact form error", error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Errore durante l'invio dell'email.",
        message: "Invio non riuscito. Riprova tra qualche minuto.",
      },
      { status: 500 },
    )
  }
}
