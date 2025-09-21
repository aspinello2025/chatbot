"use client"

// Sistema de favoritos usando localStorage para funcionar offline
export function getFavorites(): number[] {
  if (typeof window === "undefined") return []

  try {
    const favorites = localStorage.getItem("plant-favorites")
    return favorites ? JSON.parse(favorites) : []
  } catch {
    return []
  }
}

export function addToFavorites(plantId: number): void {
  if (typeof window === "undefined") return

  const favorites = getFavorites()
  if (!favorites.includes(plantId)) {
    favorites.push(plantId)
    localStorage.setItem("plant-favorites", JSON.stringify(favorites))
  }
}

export function removeFromFavorites(plantId: number): void {
  if (typeof window === "undefined") return

  const favorites = getFavorites()
  const updatedFavorites = favorites.filter((id) => id !== plantId)
  localStorage.setItem("plant-favorites", JSON.stringify(updatedFavorites))
}

export function isFavorite(plantId: number): boolean {
  return getFavorites().includes(plantId)
}
