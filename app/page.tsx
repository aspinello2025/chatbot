"use client"

import { useState, useEffect } from "react"
import { Leaf } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { NavigationButtons } from "@/components/navigation-buttons"
import { PlantIndex } from "@/components/plant-index"
import { DiseaseCategories } from "@/components/disease-categories"
import { PlantDetails } from "@/components/plant-details"
import { FavoritesList } from "@/components/favorites-list"
import { DisclaimerModal } from "@/components/disclaimer-modal"
import { LoginForm } from "@/components/login-form"
import { RegisterForm } from "@/components/register-form"
import { UserMenu } from "@/components/user-menu"
import { getAuthSession, clearAuthSession, type AuthSession } from "@/lib/user-database"
import type { Plant } from "@/lib/plants-data"

type CurrentPage = "home" | "index" | "diseases" | "favorites" | "plant-detail"
type AuthPage = "login" | "register"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("home")
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)
  const [user, setUser] = useState<AuthSession | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [authPage, setAuthPage] = useState<AuthPage>("login")

  useEffect(() => {
    const authUser = getAuthSession()
    setUser(authUser)
    setIsLoading(false)
  }, [])

  const handleLogin = (email: string, name: string) => {
    // Session is already saved by the login form
    const session = getAuthSession()
    setUser(session)
  }

  const handleLogout = () => {
    clearAuthSession()
    setUser(null)
    setCurrentPage("home")
    setSelectedPlant(null)
    setAuthPage("login")
  }

  const handleShowRegister = () => {
    setAuthPage("register")
  }

  const handleShowLogin = () => {
    setAuthPage("login")
  }

  const handleRegisterSuccess = () => {
    setAuthPage("login")
  }

  const handlePlantSelect = (plant: Plant) => {
    setSelectedPlant(plant)
    setCurrentPage("plant-detail")
  }

  const handleNavigate = (page: "index" | "diseases" | "favorites") => {
    setCurrentPage(page)
  }

  const goHome = () => {
    setCurrentPage("home")
    setSelectedPlant(null)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case "index":
        return <PlantIndex onPlantSelect={handlePlantSelect} />
      case "diseases":
        return <DiseaseCategories onPlantSelect={handlePlantSelect} />
      case "favorites":
        return <FavoritesList onPlantSelect={handlePlantSelect} />
      case "plant-detail":
        return selectedPlant ? <PlantDetails plant={selectedPlant} /> : null
      default:
        return null
    }
  }

  const getPageTitle = () => {
    switch (currentPage) {
      case "index":
        return "Índice de Plantas A-Z"
      case "diseases":
        return "Buscar por Categoria"
      case "favorites":
        return "Plantas Favoritas"
      case "plant-detail":
        return selectedPlant?.nomePlanta || "Detalhes da Planta"
      default:
        return ""
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Leaf className="h-8 w-8 text-primary mx-auto animate-pulse" />
          <p className="text-sm text-muted-foreground mt-2">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    if (authPage === "register") {
      return <RegisterForm onRegisterSuccess={handleRegisterSuccess} onBackToLogin={handleShowLogin} />
    }
    return <LoginForm onLogin={handleLogin} onShowRegister={handleShowRegister} />
  }

  if (currentPage !== "home") {
    return (
      <div className="min-h-screen bg-background">
        <DisclaimerModal />

        {/* Header simplificado para páginas internas */}
        <header className="bg-primary/5 border-b border-primary/10 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={goHome}
                className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
              >
                <Leaf className="h-5 w-5" />
                As Plantas que Curam
              </button>
              <div className="flex items-center gap-4">
                {currentPage !== "plant-detail" && (
                  <h1 className="text-lg font-semibold text-foreground hidden sm:block">{getPageTitle()}</h1>
                )}
                <UserMenu userName={user.name} userEmail={user.email} onLogout={handleLogout} />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">{renderPageContent()}</div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DisclaimerModal />

      {/* Header com Logo */}
      <header className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3 flex-1">
              <div className="bg-primary/10 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-primary">Medicina Natural</h1>
                <p className="text-sm text-muted-foreground">Enciclopédia de plantas medicinais</p>
              </div>
            </div>
            <UserMenu userName={user.name} userEmail={user.email} onLogout={handleLogout} />
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Barra de Busca Principal */}
          <div className="text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-balance">
              Encontre a planta ideal para sua necessidade
            </h2>
            <SearchBar onPlantSelect={handlePlantSelect} />
          </div>

          {/* Botões de Navegação */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-center">Ou navegue por categoria:</h3>
            <NavigationButtons onNavigate={handleNavigate} />
          </div>

          {/* Informação sobre funcionamento offline */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
            <p className="text-sm text-green-800 dark:text-green-200">
              ✓ Este aplicativo funciona 100% offline após o primeiro carregamento
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Desenvolvido para fins educativos • Sempre consulte um profissional de saúde
          </p>
        </div>
      </footer>
    </div>
  )
}
