"use client"

export {
  getAuthSession as getAuth,
  clearAuthSession as clearAuth,
  isAuthenticated,
  type AuthSession as User,
} from "./user-database"

export const AUTH_KEY = "plantas-auth"

export function saveAuth(email: string): void {
  // This function is now handled by saveAuthSession in user-database.ts
  console.log("[v0] saveAuth called with:", email)
}
