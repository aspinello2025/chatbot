"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { plantsDatabase, type Plant } from "@/lib/plants-data"

interface PlantIndexProps {
  onPlantSelect: (plant: Plant) => void
}

export function PlantIndex({ onPlantSelect }: PlantIndexProps) {
  const [filterQuery, setFilterQuery] = useState("")

  // Organizar plantas em ordem alfabética e agrupar por letra
  const organizedPlants = useMemo(() => {
    const filtered = plantsDatabase.filter((plant) =>
      plant.nomePlanta.toLowerCase().includes(filterQuery.toLowerCase()),
    )

    const sorted = filtered.sort((a, b) => a.nomePlanta.localeCompare(b.nomePlanta, "pt-BR"))

    const grouped = sorted.reduce(
      (acc, plant) => {
        const firstLetter = plant.nomePlanta.charAt(0).toUpperCase()
        if (!acc[firstLetter]) {
          acc[firstLetter] = []
        }
        acc[firstLetter].push(plant)
        return acc
      },
      {} as Record<string, Plant[]>,
    )

    return grouped
  }, [filterQuery])

  const alphabetLetters = Object.keys(organizedPlants).sort()

  return (
    <div className="space-y-6">
      {/* Filtro rápido */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Filtrar plantas..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Estatísticas */}
      <div className="text-center text-sm text-muted-foreground">
        {filterQuery
          ? `${Object.values(organizedPlants).flat().length} plantas encontradas`
          : `${plantsDatabase.length} plantas disponíveis`}
      </div>

      {/* Navegação por letras */}
      {!filterQuery && alphabetLetters.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 pb-4 border-b">
          {alphabetLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => {
                const element = document.getElementById(`letter-${letter}`)
                element?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-colors"
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* Lista de plantas agrupadas por letra */}
      <div className="space-y-8">
        {alphabetLetters.length > 0 ? (
          alphabetLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="space-y-3">
              <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">{letter}</h3>
              <div className="grid gap-3">
                {organizedPlants[letter].map((plant) => (
                  <Card key={plant.id} className="plant-card cursor-pointer" onClick={() => onPlantSelect(plant)}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-primary mb-1">{plant.nomePlanta}</h4>
                          <p className="text-sm text-muted-foreground italic mb-2">{plant.nomeCientifico}</p>
                          <p className="text-sm text-foreground line-clamp-2">
                            {plant.indicacoes.length > 120
                              ? `${plant.indicacoes.substring(0, 120)}...`
                              : plant.indicacoes}
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full whitespace-nowrap">
                          #{plant.id.toString().padStart(3, "0")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-2">Nenhuma planta encontrada</div>
            <div className="text-sm text-muted-foreground">
              Tente ajustar o filtro ou{" "}
              <button onClick={() => setFilterQuery("")} className="text-primary hover:underline">
                ver todas as plantas
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Botão voltar ao topo */}
      {alphabetLetters.length > 3 && (
        <div className="text-center pt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            ↑ Voltar ao topo
          </button>
        </div>
      )}
    </div>
  )
}
