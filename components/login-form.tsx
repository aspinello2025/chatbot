"use client"

import type React from "react"
import { useState } from "react"
import { Leaf, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { authenticateUser, saveAuthSession } from "@/lib/user-database"

interface LoginFormProps {
  onLogin: (email: string, name: string) => void
  onShowRegister: () => void
}

export function LoginForm({ onLogin, onShowRegister }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      console.log("[v0] Tentando fazer login com:", email)
      const result = await authenticateUser(email, password)

      if (result.success && result.user) {
        console.log("[v0] Login bem-sucedido, salvando sessão")
        saveAuthSession(result.user)
        onLogin(result.user.email, result.user.name)
      } else {
        console.log("[v0] Falha no login:", result.message)
        setError(result.message)
      }
    } catch (error) {
      console.error("[v0] Erro no processo de login:", error)
      setError("Erro ao fazer login. Tente novamente.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-primary">As Plantas que Curam</CardTitle>
            <CardDescription>Faça login para acessar a enciclopédia</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                {error}
                {error.includes("confirme seu email") && (
                  <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-800">
                    <p className="text-xs text-red-500 mb-2">Precisa confirmar seu email?</p>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="text-xs h-7 w-full bg-transparent"
                      onClick={async () => {
                        if (!email) {
                          alert("Digite seu email primeiro")
                          return
                        }
                        const { forceConfirmEmail } = await import("@/lib/user-database")
                        const result = await forceConfirmEmail(email)
                        if (result.success) {
                          setError("")
                          alert("Email confirmado! Tente fazer login novamente.")
                        } else {
                          alert("Email não encontrado. Verifique se você se cadastrou com este email.")
                        }
                      }}
                    >
                      Confirmar Email Automaticamente
                    </Button>
                  </div>
                )}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button variant="link" onClick={onShowRegister} className="text-sm">
              Não tem uma conta? Cadastre-se
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
