import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgdesigner.site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DG Designer | UI/UX Designer",
    template: "%s | DG Designer",
  },
  description: "Portfolio di Davide Giuliano, UI/UX designer e Web Designer che crea esperienze digitali intuitive, accessibili ed efficaci.",
  generator: "Next.js",
  keywords: [
    "UI designer",
    "UX designer",
    "Davide Giuliano",
    "designer freelance",
    "product design",
    "design system",
    "Sicily designer",
  ],
  authors: [{ name: "Davide Giuliano" }],
  creator: "Davide Giuliano",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "DG Designer",
    title: "DG Designer | UI/UX Designer",
    description: "Scopri i progetti e i servizi di Davide Giuliano, designer UX/UI e front-end developer.",
    images: [
      {
        url: `${siteUrl}/Me-About.gif`,
        width: 1280,
        height: 720,
        alt: "Davide Giuliano - UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DG Designer | UI/UX Designer",
    description: "Portfolio di Davide Giuliano, designer UX/UI e front-end developer.",
    creator: "@davidegiuliano",
    images: [`${siteUrl}/Me-About.gif`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Suspense fallback={null}>
              <Header />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
          <div className="fixed bottom-4 right-4 z-50 hidden sm:flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 text-xs font-medium shadow-lg backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            <span>Sito in lavorazione · Website in progress</span>
          </div>
          <div className="fixed bottom-3 right-3 z-50 inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide shadow-md backdrop-blur sm:hidden">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            <span>Sito in lavorazione</span>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
