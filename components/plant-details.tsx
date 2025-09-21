"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, AlertTriangle, Leaf, FlaskConical, Info } from "lucide-react"
import { addToFavorites, removeFromFavorites, isFavorite } from "@/lib/favorites"
import type { Plant } from "@/lib/plants-data"

interface PlantDetailsProps {
  plant: Plant
}

export function PlantDetails({ plant }: PlantDetailsProps) {
  const [isPlantFavorite, setIsPlantFavorite] = useState(false)

  useEffect(() => {
    setIsPlantFavorite(isFavorite(plant.id))
  }, [plant.id])

  const toggleFavorite = () => {
    if (isPlantFavorite) {
      removeFromFavorites(plant.id)
      setIsPlantFavorite(false)
    } else {
      addToFavorites(plant.id)
      setIsPlantFavorite(true)
    }
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho da planta */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <div className="bg-primary/10 p-4 rounded-full">
            <Leaf className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-balance">{plant.nomePlanta}</h1>
            <p className="text-lg text-muted-foreground italic">{plant.nomeCientifico}</p>
            <div className="text-sm text-muted-foreground mt-1">Planta #{plant.id.toString().padStart(3, "0")}</div>
          </div>
          <Button
            onClick={toggleFavorite}
            variant={isPlantFavorite ? "default" : "outline"}
            size="lg"
            className="shrink-0"
          >
            <Heart className={`h-5 w-5 mr-2 ${isPlantFavorite ? "fill-current" : ""}`} />
            {isPlantFavorite ? "Favoritada" : "Favoritar"}
          </Button>
        </div>
      </div>

      {/* Seções de informações */}
      <div className="grid gap-6">
        {/* Indicações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Info className="h-5 w-5" />
              Indicações e Benefícios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{plant.indicacoes}</p>
          </CardContent>
        </Card>

        {/* Modo de Preparo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FlaskConical className="h-5 w-5" />
              Modo de Preparo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-foreground leading-relaxed whitespace-pre-line">{plant.modoPreparo}</p>
            </div>
          </CardContent>
        </Card>

        {/* Contraindicações - Seção destacada */}
        <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
              <AlertTriangle className="h-5 w-5" />
              Contraindicações e Cuidados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="warning-section">
              <p className="text-yellow-900 dark:text-yellow-100 leading-relaxed font-medium">
                {plant.contraindicacoes}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tags de doenças para referência */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-base">Palavras-chave relacionadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {plant.tagsDoencas.split(", ").map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Aviso legal na parte inferior */}
      <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div className="text-sm text-red-800 dark:text-red-200">
              <p className="font-semibold mb-1">Importante:</p>
              <p>
                As informações apresentadas são para fins educativos. Sempre consulte um médico ou profissional de saúde
                qualificado antes de usar qualquer planta medicinal. Não se automedique.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
