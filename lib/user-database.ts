"use client"

export interface UserAccount {
  id: string
  email: string
  password: string // Em produção, seria hash
  name: string
  createdAt: number
}

export interface AuthSession {
  userId: string
  email: string
  name: string
  loginTime: number
}

const USERS_KEY = "plantas-users-db"
const AUTH_KEY = "plantas-auth"

// Simula envio de email de confirmação
export function sendConfirmationEmail(email: string): Promise<boolean> {
  return new Promise((resolve) => {
    // Simula delay de envio de email
    setTimeout(() => {
      console.log(`[v0] Email de confirmação enviado para: ${email}`)
      resolve(true)
    }, 1000)
  })
}

export function createUser(
  email: string,
  password: string,
  name: string,
): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    try {
      const users = getUsers()

      // Verifica se email já existe
      if (users.find((user) => user.email === email)) {
        resolve({ success: false, message: "Este email já está cadastrado" })
        return
      }

      const newUser: UserAccount = {
        id: Date.now().toString(),
        email,
        password, // Em produção, seria hash da senha
        name,
        createdAt: Date.now(),
      }

      users.push(newUser)
      localStorage.setItem(USERS_KEY, JSON.stringify(users))

      resolve({ success: true, message: "Usuário criado com sucesso" })
    } catch (error) {
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
      const users = getUsers()
      const user = users.find((u) => u.email === email && u.password === password)

      if (user) {
        resolve({ success: true, message: "Login realizado com sucesso", user })
      } else {
        resolve({ success: false, message: "Email ou senha incorretos" })
      }
    } catch (error) {
      resolve({ success: false, message: "Erro ao fazer login" })
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
      return null
    }

    return session
  } catch {
    return null
  }
}

export function clearAuthSession(): void {
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
