import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="border-0 bg-muted/50 transition-all hover:bg-muted">
      <CardContent className="p-6">
        <QuoteIcon className="mb-4 h-8 w-8 text-primary/40" />
        <p className="mb-6 text-lg italic text-muted-foreground">"{quote}"</p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
