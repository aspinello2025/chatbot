"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchPlants, type Plant } from "@/lib/plants-data"
import { Card, CardContent } from "@/components/ui/card"

interface SearchBarProps {
  onPlantSelect: (plant: Plant) => void
}

export function SearchBar({ onPlantSelect }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Plant[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (searchQuery.trim().length > 0) {
      setIsSearching(true)
      const searchResults = searchPlants(searchQuery)
      setResults(searchResults)
    } else {
      setIsSearching(false)
      setResults([])
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsSearching(false)
  }

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text

    const regex = new RegExp(`(${query.trim()})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="search-highlight">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Busque por planta ou doença (ex: camomila, dor de cabeça)..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 h-12 text-base border-2 border-primary/20 focus:border-primary rounded-xl"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isSearching && (
        <Card className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto z-50 shadow-lg">
          <CardContent className="p-0">
            {results.length > 0 ? (
              <div className="divide-y">
                {results.map((plant) => (
                  <button
                    key={plant.id}
                    onClick={() => {
                      onPlantSelect(plant)
                      clearSearch()
                    }}
                    className="w-full text-left p-4 hover:bg-accent transition-colors"
                  >
                    <div className="font-semibold text-primary">{highlightMatch(plant.nomePlanta, query)}</div>
                    <div className="text-sm text-muted-foreground italic">
                      {highlightMatch(plant.nomeCientifico, query)}
                    </div>
                    <div className="text-sm text-foreground mt-1 line-clamp-2">
                      {highlightMatch(plant.indicacoes.substring(0, 100) + "...", query)}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                Nenhuma planta encontrada para "{query}"
                <br />
                <span className="text-xs">Tente buscar por: camomila, dor de cabeça, digestão, ansiedade...</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
