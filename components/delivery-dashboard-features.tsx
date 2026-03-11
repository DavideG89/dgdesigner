import {
  ShoppingBag,
  BarChart3,
  Bell,
  Clock,
  MapPin,
  TrendingUp,
  BookOpen,
  Layers,
  Settings2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const dashboardFeatures = [
  {
    icon: ShoppingBag,
    title: "Gestione ordini",
    description:
      "Vedi tutti gli ordini in tempo reale, aggiorna lo stato (ricevuto, in preparazione, pronto, consegnato) e consulta lo storico completo.",
  },
  {
    icon: BookOpen,
    title: "Menu digitale",
    description:
      "Aggiungi, modifica o rimuovi piatti, categorie, foto e prezzi in autonomia. Nessun tecnico, zero attese.",
  },
  {
    icon: Clock,
    title: "Orari di apertura",
    description:
      "Imposta gli orari di servizio per ogni giorno della settimana. I clienti vedono solo quando sei aperto e disponibile a ricevere ordini.",
  },
  {
    icon: MapPin,
    title: "Zone di consegna",
    description:
      "Definisci le zone di delivery, i costi di spedizione per area e il raggio massimo direttamente dalla dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Upselling intelligente",
    description:
      "Scegli quali prodotti mostrare come suggerimenti durante l'ordine. Aumenta lo scontrino medio decidendo tu cosa promuovere e quando.",
  },
  {
    icon: Bell,
    title: "Notifiche real-time",
    description:
      "Ricevi una notifica immediata a ogni nuovo ordine, sulla dashboard o via email. Zero ritardi, massima reattivita.",
  },
  {
    icon: Layers,
    title: "Categorie e varianti",
    description:
      "Organizza il menu in categorie, aggiungi varianti (taglie, ingredienti, extra) e gestisci la disponibilita di ogni voce.",
  },
  {
    icon: BarChart3,
    title: "Statistiche e vendite",
    description:
      "Monitora ordini, incassi e prodotti piu venduti nel tempo. Dati tuoi, sempre accessibili, senza condividerli con nessuno.",
  },
  {
    icon: Settings2,
    title: "Impostazioni generali",
    description:
      "Gestisci info del ristorante, metodi di pagamento, messaggi di conferma ordine e ogni dettaglio operativo da un'unica interfaccia.",
  },
]

export default function DeliveryDashboardFeatures() {
  return (
    <section className="bg-muted/20 py-16 md:py-20">
      <div className="container">
        <div className="mb-12 space-y-3 text-center">
          <Badge variant="outline" className="w-fit">
            La dashboard
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Gestisci tutto dal tuo pannello
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Una dashboard pensata per i ristoratori, non per i tecnici. Ogni funzione
            e accessibile in pochi click, senza formazione specifica.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="space-y-3 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
