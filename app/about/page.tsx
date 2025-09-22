import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Badge className="mb-4">About Me</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Ciao, sono <span className="gradient-text">Davide</span>
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                Sono un designer UX/UI con oltre 5 anni di esperienza nella creazione di esperienze digitali intuitive e
                coinvolgenti.
              </p>
              <p className="mb-6 text-muted-foreground">
                La mia passione è trasformare idee complesse in interfacce semplici e intuitive che gli utenti adorano
                utilizzare. Credo che il buon design debba essere tanto funzionale quanto bello, e mi impegno a creare
                prodotti che soddisfino entrambi questi criteri.
              </p>
              <p className="mb-8 text-muted-foreground">
                Quando non sto progettando, mi piace esplorare nuove tecnologie, leggere libri sul design e l'usabilità,
                e fare escursioni all'aria aperta.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Contattami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/projects">Vedi i miei lavori</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Davide - UI/UX Designer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Competenze</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Le mie specializzazioni</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ecco alcune delle competenze e tecnologie che utilizzo quotidianamente nel mio lavoro.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      UI Design
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      UX Design
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Wireframing
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Prototyping
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Responsive Design
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Design System
                    </Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Strumenti</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Figma
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Adobe XD
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Sketch
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Photoshop
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Illustrator
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      InVision
                    </Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Sviluppo</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      HTML/CSS
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      JavaScript
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      React
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Next.js
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Tailwind CSS
                    </Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      Responsive Web
                    </Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Esperienza</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Il mio percorso professionale</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ecco alcune delle tappe più significative della mia carriera professionale.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-muted pl-8 before:absolute before:left-[-5px] before:top-0 before:h-full before:w-10 before:bg-gradient-to-b before:from-background before:to-transparent before:content-['']">
              <div className="mb-12 relative">
                <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
                  <Badge variant="outline">2021 - Presente</Badge>
                </div>
                <p className="mb-2 text-muted-foreground">DigitalCraft Studio</p>
                <p className="text-muted-foreground">
                  Progettazione di interfacce utente per applicazioni web e mobile, creazione di sistemi di design,
                  conduzione di ricerche utente e test di usabilità, collaborazione con team di sviluppo.
                </p>
              </div>

              <div className="mb-12 relative">
                <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">UI Designer</h3>
                  <Badge variant="outline">2018 - 2021</Badge>
                </div>
                <p className="mb-2 text-muted-foreground">TechInnovate</p>
                <p className="text-muted-foreground">
                  Progettazione di interfacce utente per prodotti digitali, creazione di prototipi interattivi,
                  collaborazione con team di UX e sviluppo.
                </p>
              </div>

              <div className="mb-12 relative">
                <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Web Designer</h3>
                  <Badge variant="outline">2016 - 2018</Badge>
                </div>
                <p className="mb-2 text-muted-foreground">CreativeWeb Agency</p>
                <p className="text-muted-foreground">
                  Progettazione di siti web responsive, creazione di banner e materiali grafici, ottimizzazione
                  dell'esperienza utente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Formazione</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Il mio percorso formativo</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La mia formazione accademica e i corsi di specializzazione che ho seguito.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-muted pl-8 before:absolute before:left-[-5px] before:top-0 before:h-full before:w-10 before:bg-gradient-to-b before:from-background before:to-transparent before:content-['']">
              <div className="mb-12 relative">
                <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-3 w-3" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Master in User Experience Design</h3>
                  <Badge variant="outline">2015 - 2016</Badge>
                </div>
                <p className="mb-2 text-muted-foreground">Politecnico di Milano</p>
                <p className="text-muted-foreground">
                  Specializzazione in progettazione dell'esperienza utente, ricerca utente, architettura
                  dell'informazione e usabilità.
                </p>
              </div>

              <div className="mb-12 relative">
                <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-3 w-3" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Laurea in Design della Comunicazione</h3>
                  <Badge variant="outline">2012 - 2015</Badge>
                </div>
                <p className="mb-2 text-muted-foreground">Università degli Studi di Milano</p>
                <p className="text-muted-foreground">
                  Formazione in design grafico, comunicazione visiva, tipografia, branding e web design.
                </p>
              </div>

              <div className="mb-12 relative">
                <div className="absolute left-[-35px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BookOpen className="h-3 w-3" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Certificazione in UI/UX Design</h3>
                  <Badge variant="outline">2014</Badge>
                </div>
                <p className="mb-2 text-muted-foreground">Interaction Design Foundation</p>
                <p className="text-muted-foreground">
                  Corso specializzato in design dell'interfaccia utente e dell'esperienza utente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Valori</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">I miei principi di design</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Questi sono i valori che guidano il mio approccio al design e alla collaborazione.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">User-Centered</h3>
                <p className="text-muted-foreground">
                  Metto sempre l'utente al centro del processo di design, creando soluzioni che rispondono alle sue
                  esigenze e aspettative.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Qualità</h3>
                <p className="text-muted-foreground">
                  Mi impegno a fornire lavori di alta qualità, curando ogni dettaglio e assicurandomi che ogni elemento
                  sia perfettamente realizzato.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Professionalità</h3>
                <p className="text-muted-foreground">
                  Mantengo sempre un approccio professionale, rispettando scadenze, budget e comunicando in modo chiaro
                  e trasparente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Pronto a realizzare il tuo progetto?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Contattami per discutere del tuo progetto e scoprire come posso aiutarti a trasformare la tua idea in
                realtà.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Iniziamo a collaborare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
