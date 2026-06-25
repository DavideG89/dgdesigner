import Link from "next/link"
import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const isExternal = /^https?:\/\//i.test(link)
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer", prefetch: false as const }
    : {}

  return (
    <article className="group overflow-hidden rounded-lg border border-foreground/10 bg-card/80 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 rounded-full bg-background/85 p-2 text-foreground opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
      <CardContent className="p-6">
        <ul className="mb-4 flex flex-wrap gap-2" aria-label="Categorie progetto">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary" className="rounded-full bg-foreground/10 font-normal text-foreground">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
          <Link href={link} className="flex items-center gap-1" {...linkProps}>
            {title}
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" aria-hidden="true" />
          </Link>
        </h3>
        <p className="leading-7 text-muted-foreground">{description}</p>
      </CardContent>
    </article>
  )
}
