import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CtaBannerProps {
  title: string
  description: string
  href: string
  actionLabel: string
  titleId: string
  showIcon?: boolean
}

export function CtaBanner({
  title,
  description,
  href,
  actionLabel,
  titleId,
  showIcon = true,
}: CtaBannerProps) {
  return (
    <section className="py-20" aria-labelledby={titleId}>
      <div className="container">
        <div className="rounded-2xl bg-accent p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id={titleId} className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mb-8 text-lg text-foreground">{description}</p>
            <Button asChild variant="primary" size="pill">
              <Link href={href}>
                {actionLabel}
                {showIcon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
