import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <span className="font-space text-2xl font-bold">
                <span className="text-primary">dg</span>designer
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Crafting impactful User Experiences, one pixel at a time.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://twitter.com" className="text-foreground/60 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com" className="text-foreground/60 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-foreground/60 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:info@dgdesigner.site" className="text-foreground/60 hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Navigazione</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Servizi</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#ui-design" className="text-sm text-muted-foreground hover:text-primary">
                  UI Design
                </Link>
              </li>
              <li>
                <Link href="/services#ux-design" className="text-sm text-muted-foreground hover:text-primary">
                  UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#web-design" className="text-sm text-muted-foreground hover:text-primary">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services#app-design" className="text-sm text-muted-foreground hover:text-primary">
                  App Design
                </Link>
              </li>
              <li>
                <Link href="/services#branding" className="text-sm text-muted-foreground hover:text-primary">
                  Branding
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contatti</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                <strong>Email:</strong> info@dgdesigner.site
              </li>
              <li className="text-sm text-muted-foreground">
                <strong>Telefono:</strong> +39 123 456 7890
              </li>
              <li className="text-sm text-muted-foreground">
                <strong>Località:</strong> Italia
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DG Designer. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
