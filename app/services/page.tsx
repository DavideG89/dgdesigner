import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Figma, Layers, Smartphone, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "UI design, UX research, sviluppo front-end e branding: scopri come Davide Giuliano può supportare il tuo progetto digitale.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Servizi</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              I miei <span className="gradient-text">servizi</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Offro una gamma completa di servizi di design per aiutarti a creare esperienze digitali eccezionali.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12" id="ui-design">
        <div className="container">
          <div className="grid gap-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">UI Design</h2>
                <p className="mb-4 text-muted-foreground">
                  Creo interfacce utente intuitive e accattivanti che migliorano l'esperienza dell'utente e aumentano la
                  conversione.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Il mio approccio al design dell'interfaccia utente si concentra sulla creazione di esperienze
                  visivamente coerenti e funzionali che guidano gli utenti verso i loro obiettivi in modo intuitivo.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Design di interfacce web e mobile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Creazione di sistemi di design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Design responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ottimizzazione dell'usabilità</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Richiedi un preventivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-xl bg-muted/50 p-6">
                <div className="aspect-video rounded-lg bg-muted"></div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2" id="ux-design">
              <div className="order-2 md:order-1 rounded-xl bg-muted/50 p-6">
                <div className="aspect-video rounded-lg bg-muted"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Figma className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">UX Design</h2>
                <p className="mb-4 text-muted-foreground">
                  Conduco ricerche utente, creo wireframe e prototipi per garantire esperienze utente fluide e
                  coinvolgenti.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Il mio processo di UX design si basa sulla comprensione approfondita degli utenti e dei loro bisogni,
                  per creare prodotti che risolvano problemi reali in modo efficace.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ricerca utente e personas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Wireframing e prototyping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Test di usabilità</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Architettura dell'informazione</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Richiedi un preventivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2" id="web-design">
              <div>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">Web Development</h2>
                <p className="mb-4 text-muted-foreground">
                  Sviluppo siti web moderni, reattivi e ottimizzati per le prestazioni utilizzando le tecnologie più
                  recenti.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Creo siti web che non solo sono belli da vedere, ma anche veloci, accessibili e facili da gestire,
                  utilizzando le migliori pratiche di sviluppo web.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sviluppo frontend con React e Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Siti web responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ottimizzazione delle prestazioni</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Accessibilità web</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Richiedi un preventivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-xl bg-muted/50 p-6">
                <div className="aspect-video rounded-lg bg-muted"></div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2" id="app-design">
              <div className="order-2 md:order-1 rounded-xl bg-muted/50 p-6">
                <div className="aspect-video rounded-lg bg-muted"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">App Design</h2>
                <p className="mb-4 text-muted-foreground">
                  Progetto applicazioni mobile intuitive e funzionali per iOS e Android che gli utenti adoreranno.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Il mio approccio al design di app mobile si concentra sulla creazione di esperienze fluide e intuitive
                  che rispettano le linee guida delle piattaforme e soddisfano le aspettative degli utenti.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Design di app iOS e Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Prototipi interattivi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Design di icone e assets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ottimizzazione per diverse dimensioni di schermo</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Richiedi un preventivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2" id="branding">
              <div>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">Branding</h2>
                <p className="mb-4 text-muted-foreground">
                  Creo identità di marca distintive che comunicano i valori e la personalità del tuo business.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Il mio approccio al branding si basa sulla creazione di identità visive coerenti e memorabili che
                  aiutano i brand a distinguersi dalla concorrenza e a connettersi con il loro pubblico.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Design di logo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Palette colori e tipografia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Linee guida del brand</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Materiali di marketing</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Richiedi un preventivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-xl bg-muted/50 p-6">
                <div className="aspect-video rounded-lg bg-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Processo</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Il mio processo di lavoro</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un approccio strutturato per garantire risultati di qualità e soddisfazione del cliente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Scoperta</h3>
                <p className="text-muted-foreground">
                  Comprendo le tue esigenze, obiettivi e il tuo pubblico attraverso interviste e ricerche approfondite.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Strategia</h3>
                <p className="text-muted-foreground">
                  Definisco una strategia chiara basata sulle informazioni raccolte e sugli obiettivi del progetto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Design</h3>
                <p className="text-muted-foreground">
                  Creo wireframe, prototipi e design finali, collaborando strettamente con te per perfezionare ogni
                  dettaglio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Implementazione</h3>
                <p className="text-muted-foreground">
                  Trasformo i design in prodotti funzionali, assicurandomi che ogni elemento sia implementato
                  correttamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Prezzi</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Piani trasparenti</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Offro soluzioni flessibili per adattarmi alle tue esigenze e al tuo budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Base</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">€1.000</span>
                  <span className="text-muted-foreground"> / progetto</span>
                </div>
                <p className="mb-6 text-muted-foreground">Ideale per piccoli progetti o startup con budget limitato.</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>UI Design per 5 schermate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>1 round di revisioni</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>File sorgente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span>
                    <span className="text-muted-foreground">Prototipi interattivi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span>
                    <span className="text-muted-foreground">Sviluppo frontend</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href="/contact">Contattami</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <Badge>Popolare</Badge>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">€2.500</span>
                  <span className="text-muted-foreground"> / progetto</span>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Perfetto per progetti di medie dimensioni con esigenze specifiche.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>UI Design per 10 schermate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>2 round di revisioni</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>File sorgente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Prototipi interattivi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-muted-foreground">✗</span>
                    <span className="text-muted-foreground">Sviluppo frontend</span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-full">
                  <Link href="/contact">Contattami</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">€5.000+</span>
                  <span className="text-muted-foreground"> / progetto</span>
                </div>
                <p className="mb-6 text-muted-foreground">Soluzione completa per progetti complessi e aziende.</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>UI Design illimitato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Revisioni illimitate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>File sorgente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Prototipi interattivi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sviluppo frontend</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href="/contact">Contattami</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Hai esigenze specifiche? Contattami per un preventivo personalizzato.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Domande frequenti</h2>
            <p className="mt-4 text-lg text-muted-foreground">Risposte alle domande più comuni sui miei servizi.</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold">Quanto tempo ci vuole per completare un progetto?</h3>
                <p className="text-muted-foreground">
                  La durata di un progetto dipende dalla sua complessità e portata. In generale, un progetto di UI/UX
                  design può richiedere da 2 a 8 settimane, mentre un progetto completo di design e sviluppo può
                  richiedere da 1 a 3 mesi.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Come funziona il processo di pagamento?</h3>
                <p className="text-muted-foreground">
                  Generalmente richiedo un acconto del 50% all'inizio del progetto e il saldo al completamento. Per
                  progetti più grandi, possiamo concordare un piano di pagamento a milestone.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Lavori con clienti internazionali?</h3>
                <p className="text-muted-foreground">
                  Assolutamente sì! Lavoro con clienti da tutto il mondo. La comunicazione avviene principalmente via
                  email, videochiamate e strumenti di project management.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Posso richiedere modifiche dopo la consegna del progetto?</h3>
                <p className="text-muted-foreground">
                  Sì, offro un periodo di supporto post-consegna durante il quale puoi richiedere piccole modifiche. Per
                  modifiche più sostanziali, possiamo discutere un accordo separato.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Quali strumenti utilizzi per il design?</h3>
                <p className="text-muted-foreground">
                  Utilizzo principalmente Figma per il design e la prototipazione, ma ho esperienza anche con Adobe XD,
                  Sketch e altri strumenti di design. Per lo sviluppo, utilizzo React, Next.js e altre tecnologie
                  moderne.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold">Offri servizi di manutenzione dopo il lancio?</h3>
                <p className="text-muted-foreground">
                  Sì, offro servizi di manutenzione e supporto continuo per i progetti che ho sviluppato. Possiamo
                  discutere un piano di manutenzione personalizzato in base alle tue esigenze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-muted p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Pronto a trasformare la tua idea in realtà?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Contattami oggi stesso per discutere del tuo progetto e scoprire come posso aiutarti a raggiungere i
                tuoi obiettivi.
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
