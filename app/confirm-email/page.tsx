"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Loader2, Leaf } from "lucide-react"
import { confirmEmail } from "@/lib/user-database"

export default function ConfirmEmailPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get("token")

  useEffect(() => {
    const handleConfirmation = async () => {
      if (!token) {
        setStatus("error")
        setMessage("Token de confirmação não encontrado")
        return
      }

      try {
        const result = await confirmEmail(token)

        if (result.success) {
          setStatus("success")
          setMessage(result.message)
        } else {
          setStatus("error")
          setMessage(result.message)
        }
      } catch (error) {
        setStatus("error")
        setMessage("Erro ao confirmar email. Tente novamente.")
      }
    }

    handleConfirmation()
  }, [token])

  const handleGoToLogin = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              {status === "loading" && <Loader2 className="h-12 w-12 text-primary animate-spin" />}
              {status === "success" && <CheckCircle className="h-12 w-12 text-green-600" />}
              {status === "error" && <XCircle className="h-12 w-12 text-red-600" />}
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              {status === "loading" && "Confirmando Email..."}
              {status === "success" && "Email Confirmado!"}
              {status === "error" && "Erro na Confirmação"}
            </CardTitle>
            <CardDescription className="mt-2">{message}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          {status !== "loading" && (
            <Button onClick={handleGoToLogin} className="w-full" variant={status === "success" ? "default" : "outline"}>
              {status === "success" ? "Fazer Login" : "Voltar ao Início"}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
