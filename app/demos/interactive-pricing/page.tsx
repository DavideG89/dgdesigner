"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function InteractivePricing() {
  const [pageviews, setPageviews] = useState(100)
  const [isYearly, setIsYearly] = useState(false)

  const pricePerMonth = pageviews / 10
  const discount = isYearly ? 0.25 : 0
  const finalPrice = pricePerMonth * (1 - discount)
  const yearlyPrice = finalPrice * 12

  const features = ["Analisi illimitate", "100% ownership dei dati", "Email reports", "Supporto prioritario"]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Prezzi Interattivi</h1>
          <p className="text-muted-foreground">Scegli il piano più adatto alle tue esigenze</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Semplice, trasparente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">{pageviews}K Pageviews</p>
              <div className="mb-2 flex items-center justify-center">
                <span className="text-4xl font-bold">${finalPrice.toFixed(2)}</span>
                <span className="ml-2 text-muted-foreground">/ mese</span>
              </div>
              {isYearly && (
                <p className="text-sm text-muted-foreground">${yearlyPrice.toFixed(2)} fatturati annualmente</p>
              )}
            </div>

            <div className="mb-8">
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={pageviews}
                onChange={(e) => setPageviews(Number.parseInt(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="text-sm">Fatturazione mensile</span>
              <div className="flex items-center space-x-2">
                <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
                <Label htmlFor="billing-toggle">Fatturazione annuale</Label>
              </div>
              <Badge variant="outline" className="text-xs font-normal text-primary">
                Sconto 25%
              </Badge>
            </div>

            <div className="mb-8 border-t pt-8">
              <ul className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full">Inizia la prova gratuita</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
