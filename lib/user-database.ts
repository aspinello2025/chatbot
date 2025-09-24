"use client"

import { sendConfirmationEmail, generateConfirmationToken } from "./email-service"

export interface UserAccount {
  id: string
  email: string
  password: string // Em produção, seria hash
  name: string
  createdAt: number
  isEmailConfirmed: boolean
  confirmationToken?: string
}

export interface AuthSession {
  userId: string
  email: string
  name: string
  loginTime: number
}

const USERS_KEY = "plantas-users-db"
const AUTH_KEY = "plantas-auth"

export function createUser(
  email: string,
  password: string,
  name: string,
): Promise<{ success: boolean; message: string; requiresConfirmation?: boolean }> {
  return new Promise(async (resolve) => {
    try {
      const users = getUsers()

      // Verifica se email já existe
      if (users.find((user) => user.email === email)) {
        resolve({ success: false, message: "Este email já está cadastrado" })
        return
      }

      const confirmationToken = generateConfirmationToken()

      const newUser: UserAccount = {
        id: Date.now().toString(),
        email,
        password, // Em produção, seria hash da senha
        name,
        createdAt: Date.now(),
        isEmailConfirmed: false, // Usuário precisa confirmar email
        confirmationToken, // Salva token de confirmação
      }

      users.push(newUser)
      localStorage.setItem(USERS_KEY, JSON.stringify(users))

      console.log("[v0] Usuário criado:", { email, name, id: newUser.id })

      const emailResult = await sendConfirmationEmail(email, name, confirmationToken)

      if (emailResult.success) {
        resolve({
          success: true,
          message: "Conta criada! Verifique seu email para confirmar o cadastro.",
          requiresConfirmation: true,
        })
      } else {
        // Remove usuário se não conseguiu enviar email
        const updatedUsers = users.filter((u) => u.id !== newUser.id)
        localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers))

        resolve({
          success: false,
          message: emailResult.message,
        })
      }
    } catch (error) {
      console.error("[v0] Erro ao criar usuário:", error)
      resolve({ success: false, message: "Erro ao criar usuário" })
    }
  })
}

export function authenticateUser(
  email: string,
  password: string,
): Promise<{ success: boolean; message: string; user?: UserAccount }> {
  return new Promise((resolve) => {
    try {
      console.log("[v0] Tentativa de login para:", email)
      const users = getUsers()
      console.log("[v0] Usuários cadastrados:", users.length)

      const user = users.find((u) => u.email === email && u.password === password)

      if (!user) {
        console.log("[v0] Usuário não encontrado ou senha incorreta")
        resolve({ success: false, message: "Email ou senha incorretos" })
        return
      }

      console.log("[v0] Usuário encontrado:", { email: user.email, isEmailConfirmed: user.isEmailConfirmed })

      if (!user.isEmailConfirmed) {
        resolve({
          success: false,
          message: "Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada.",
        })
        return
      }

      console.log("[v0] Login bem-sucedido para:", email)
      resolve({ success: true, message: "Login realizado com sucesso", user })
    } catch (error) {
      console.error("[v0] Erro ao fazer login:", error)
      resolve({ success: false, message: "Erro ao fazer login" })
    }
  })
}

export function confirmEmail(token: string): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    try {
      console.log("[v0] Tentativa de confirmação de email com token:", token)
      const users = getUsers()
      const userIndex = users.findIndex((u) => u.confirmationToken === token)

      if (userIndex === -1) {
        console.log("[v0] Token não encontrado")
        resolve({ success: false, message: "Token de confirmação inválido ou expirado" })
        return
      }

      // Confirma o email do usuário
      users[userIndex].isEmailConfirmed = true
      users[userIndex].confirmationToken = undefined

      localStorage.setItem(USERS_KEY, JSON.stringify(users))

      console.log("[v0] Email confirmado para usuário:", users[userIndex].email)
      resolve({ success: true, message: "Email confirmado com sucesso! Agora você pode fazer login." })
    } catch (error) {
      console.error("[v0] Erro ao confirmar email:", error)
      resolve({ success: false, message: "Erro ao confirmar email" })
    }
  })
}

export function forceConfirmEmail(email: string): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    try {
      const users = getUsers()
      const userIndex = users.findIndex((u) => u.email === email)

      if (userIndex === -1) {
        resolve({ success: false, message: "Usuário não encontrado" })
        return
      }

      users[userIndex].isEmailConfirmed = true
      users[userIndex].confirmationToken = undefined
      localStorage.setItem(USERS_KEY, JSON.stringify(users))

      console.log("[v0] Email confirmado manualmente para:", email)
      resolve({ success: true, message: "Email confirmado com sucesso!" })
    } catch (error) {
      console.error("[v0] Erro ao confirmar email manualmente:", error)
      resolve({ success: false, message: "Erro ao confirmar email" })
    }
  })
}

export function getUsers(): UserAccount[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(USERS_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveAuthSession(user: UserAccount): void {
  const session: AuthSession = {
    userId: user.id,
    email: user.email,
    name: user.name,
    loginTime: Date.now(),
  }
  localStorage.setItem(AUTH_KEY, JSON.stringify(session))
  console.log("[v0] Sessão salva para:", user.email)
}

export function getAuthSession(): AuthSession | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem(AUTH_KEY)
    if (!stored) return null

    const session: AuthSession = JSON.parse(stored)

    // Sessão expira em 24 horas
    const twentyFourHours = 24 * 60 * 60 * 1000
    if (Date.now() - session.loginTime > twentyFourHours) {
      localStorage.removeItem(AUTH_KEY)
      console.log("[v0] Sessão expirada para:", session.email)
      return null
    }

    return session
  } catch {
    return null
  }
}

export function clearAuthSession(): void {
  const session = getAuthSession()
  if (session) {
    console.log("[v0] Limpando sessão para:", session.email)
  }
  localStorage.removeItem(AUTH_KEY)
}

export function isAuthenticated(): boolean {
  return getAuthSession() !== null
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): { valid: boolean; message: string } {
  if (password.length < 6) {
    return { valid: false, message: "A senha deve ter pelo menos 6 caracteres" }
  }
  return { valid: true, message: "" }
}
