"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já aceitou o disclaimer
    const hasAccepted = localStorage.getItem("disclaimer-accepted")
    if (!hasAccepted) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("disclaimer-accepted", "true")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-red-600">⚠️ Aviso Legal Importante</DialogTitle>
          <DialogDescription className="text-center text-base leading-relaxed pt-4">
            As informações neste aplicativo são para fins educativos e não substituem a consulta de um médico ou
            profissional de saúde.
            <br />
            <br />
            <strong>Não se automedique.</strong>
            <br />
            <br />
            Ao continuar, você concorda com estes termos.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button onClick={handleAccept} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
            Eu entendi e aceito
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
