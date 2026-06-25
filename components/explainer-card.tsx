import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

import { CardContent } from "@/components/ui/card"

interface ExplainerCardProps {
  icon?: LucideIcon
  marker?: ReactNode
  title: string
  description?: string
  children?: ReactNode
}

export function ExplainerCard({ icon: Icon, marker, title, description, children }: ExplainerCardProps) {
  const hasVisual = Icon || marker

  return (
    <article className="group h-full overflow-hidden rounded-lg border border-foreground/10 bg-card/80 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
        {hasVisual && (
          <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
            {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : marker}
          </div>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </CardContent>
    </article>
  )
}
