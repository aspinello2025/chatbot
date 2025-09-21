"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf } from "lucide-react"
import { getFavorites } from "@/lib/favorites"
import { plantsDatabase, type Plant } from "@/lib/plants-data"

interface FavoritesListProps {
  onPlantSelect: (plant: Plant) => void
}

export function FavoritesList({ onPlantSelect }: FavoritesListProps) {
  const [favoritePlants, setFavoritePlants] = useState<Plant[]>([])

  useEffect(() => {
    const favoriteIds = getFavorites()
    const plants = plantsDatabase.filter((plant) => favoriteIds.includes(plant.id))
    setFavoritePlants(plants)
  }, [])

  // Recarregar favoritos quando a página for focada (para atualizar após mudanças)
  useEffect(() => {
    const handleFocus = () => {
      const favoriteIds = getFavorites()
      const plants = plantsDatabase.filter((plant) => favoriteIds.includes(plant.id))
      setFavoritePlants(plants)
    }

    window.addEventListener("focus", handleFocus)
    return () => window.removeEventListener("focus", handleFocus)
  }, [])

  if (favoritePlants.length === 0) {
    return (
      <div className="text-center py-16 space-y-4">
        <div className="bg-muted/30 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
          <Heart className="h-12 w-12 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Nenhuma planta favoritada</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Quando você favoritar plantas, elas aparecerão aqui para acesso rápido. Use o botão de coração nas páginas
            de detalhes das plantas.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-red-500 fill-current" />
          Suas Plantas Favoritas
        </h2>
        <p className="text-muted-foreground">
          {favoritePlants.length} planta{favoritePlants.length !== 1 ? "s" : ""} salva
          {favoritePlants.length !== 1 ? "s" : ""} para acesso rápido
        </p>
      </div>

      <div className="grid gap-3">
        {favoritePlants.map((plant) => (
          <Card key={plant.id} className="plant-card cursor-pointer" onClick={() => onPlantSelect(plant)}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-primary mb-1">{plant.nomePlanta}</h4>
                  <p className="text-sm text-muted-foreground italic mb-2">{plant.nomeCientifico}</p>
                  <p className="text-sm text-foreground line-clamp-2">
                    {plant.indicacoes.length > 120 ? `${plant.indicacoes.substring(0, 120)}...` : plant.indicacoes}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <Heart className="h-5 w-5 text-red-500 fill-current" />
                  <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    #{plant.id.toString().padStart(3, "0")}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Dica: Toque no coração nas páginas de plantas para adicionar ou remover dos favoritos
      </div>
    </div>
  )
}
