"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowLeft } from "lucide-react"
import {
  diseaseCategories,
  getPlantsByDisease,
  type Plant,
  type DiseaseCategory,
  type Disease,
} from "@/lib/plants-data"

interface DiseaseCategoriesProps {
  onPlantSelect: (plant: Plant) => void
}

type ViewState = "categories" | "diseases" | "plants"

export function DiseaseCategories({ onPlantSelect }: DiseaseCategoriesProps) {
  const [currentView, setCurrentView] = useState<ViewState>("categories")
  const [selectedCategory, setSelectedCategory] = useState<DiseaseCategory | null>(null)
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null)
  const [plantsForDisease, setPlantsForDisease] = useState<Plant[]>([])

  const handleCategorySelect = (category: DiseaseCategory) => {
    setSelectedCategory(category)
    setCurrentView("diseases")
  }

  const handleDiseaseSelect = (disease: Disease) => {
    setSelectedDisease(disease)
    const plants = getPlantsByDisease(disease.id)
    setPlantsForDisease(plants)
    setCurrentView("plants")
  }

  const goBack = () => {
    if (currentView === "plants") {
      setCurrentView("diseases")
      setSelectedDisease(null)
      setPlantsForDisease([])
    } else if (currentView === "diseases") {
      setCurrentView("categories")
      setSelectedCategory(null)
    }
  }

  const renderBreadcrumb = () => {
    const items = []

    if (currentView === "diseases" && selectedCategory) {
      items.push(selectedCategory.name)
    } else if (currentView === "plants" && selectedCategory && selectedDisease) {
      items.push(selectedCategory.name, selectedDisease.name)
    }

    if (items.length === 0) return null

    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <button onClick={goBack} className="flex items-center gap-1 text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <span>•</span>
        <span>{items.join(" > ")}</span>
      </div>
    )
  }

  if (currentView === "categories") {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Buscar por Categoria de Saúde</h2>
          <p className="text-muted-foreground">Selecione uma categoria para encontrar plantas específicas</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {diseaseCategories.map((category) => (
            <Card
              key={category.id}
              className="plant-card cursor-pointer"
              onClick={() => handleCategorySelect(category)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.diseases.length} condições disponíveis</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (currentView === "diseases" && selectedCategory) {
    return (
      <div className="space-y-6">
        {renderBreadcrumb()}

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">{selectedCategory.name}</h2>
          <p className="text-muted-foreground">Selecione uma condição específica</p>
        </div>

        <div className="grid gap-3">
          {selectedCategory.diseases.map((disease) => (
            <Card key={disease.id} className="plant-card cursor-pointer" onClick={() => handleDiseaseSelect(disease)}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-primary">{disease.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {disease.plantIds.length} planta{disease.plantIds.length !== 1 ? "s" : ""} indicada
                      {disease.plantIds.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (currentView === "plants" && selectedDisease) {
    return (
      <div className="space-y-6">
        {renderBreadcrumb()}

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Plantas para {selectedDisease.name}</h2>
          <p className="text-muted-foreground">
            {plantsForDisease.length} planta{plantsForDisease.length !== 1 ? "s" : ""} encontrada
            {plantsForDisease.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid gap-3">
          {plantsForDisease.map((plant) => (
            <Card key={plant.id} className="plant-card cursor-pointer" onClick={() => onPlantSelect(plant)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-primary mb-1">{plant.nomePlanta}</h4>
                    <p className="text-sm text-muted-foreground italic mb-2">{plant.nomeCientifico}</p>
                    <p className="text-sm text-foreground line-clamp-2">
                      {plant.indicacoes.length > 120 ? `${plant.indicacoes.substring(0, 120)}...` : plant.indicacoes}
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
    )
  }

  return null
}
