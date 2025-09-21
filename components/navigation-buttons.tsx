"use client"
import { Card, CardContent } from "@/components/ui/card"
import { List, Search, Heart } from "lucide-react"

interface NavigationButtonsProps {
  onNavigate: (page: "index" | "diseases" | "favorites") => void
}

export function NavigationButtons({ onNavigate }: NavigationButtonsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
      <Card className="plant-card cursor-pointer" onClick={() => onNavigate("index")}>
        <CardContent className="p-6 text-center">
          <List className="h-12 w-12 mx-auto mb-3 text-primary" />
          <h3 className="font-semibold text-lg mb-2">Índice de Plantas</h3>
          <p className="text-sm text-muted-foreground">Navegue por todas as plantas de A-Z</p>
        </CardContent>
      </Card>

      <Card className="plant-card cursor-pointer" onClick={() => onNavigate("diseases")}>
        <CardContent className="p-6 text-center">
          <Search className="h-12 w-12 mx-auto mb-3 text-primary" />
          <h3 className="font-semibold text-lg mb-2">Buscar por Doença</h3>
          <p className="text-sm text-muted-foreground">Encontre plantas por categoria de saúde</p>
        </CardContent>
      </Card>

      <Card className="plant-card cursor-pointer" onClick={() => onNavigate("favorites")}>
        <CardContent className="p-6 text-center">
          <Heart className="h-12 w-12 mx-auto mb-3 text-primary" />
          <h3 className="font-semibold text-lg mb-2">Favoritos</h3>
          <p className="text-sm text-muted-foreground">Suas plantas salvas para acesso rápido</p>
        </CardContent>
      </Card>
    </div>
  )
}
