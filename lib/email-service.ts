"use client"

// Configuração do EmailJS
const EMAILJS_SERVICE_ID = "service_plantas_medicinais"
const EMAILJS_TEMPLATE_ID = "template_confirmacao"
const EMAILJS_PUBLIC_KEY = "your_emailjs_public_key"

// Interface para dados do email
interface EmailData {
  to_email: string
  to_name: string
  confirmation_link: string
  app_name: string
}

// Função para carregar EmailJS dinamicamente
async function loadEmailJS() {
  if (typeof window === "undefined") return null

  try {
    // Carrega EmailJS via CDN
    if (!(window as any).emailjs) {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      document.head.appendChild(script)

      await new Promise((resolve, reject) => {
        script.onload = resolve
        script.onerror = reject
      })
    }

    const emailjs = (window as any).emailjs
    emailjs.init(EMAILJS_PUBLIC_KEY)
    return emailjs
  } catch (error) {
    console.error("[v0] Erro ao carregar EmailJS:", error)
    return null
  }
}

// Função para enviar email de confirmação
export async function sendConfirmationEmail(
  email: string,
  name: string,
  confirmationToken: string,
): Promise<{ success: boolean; message: string }> {
  try {
    console.log("[v0] Iniciando envio de email para:", email)

    // Para desenvolvimento, simula envio bem-sucedido
    if (process.env.NODE_ENV === "development") {
      console.log("[v0] Modo desenvolvimento - simulando envio de email")
      console.log("[v0] Token de confirmação:", confirmationToken)
      console.log(
        "[v0] Link de confirmação seria:",
        `${window.location.origin}/confirm-email?token=${confirmationToken}`,
      )

      // Simula delay de envio
      await new Promise((resolve) => setTimeout(resolve, 1500))

      return {
        success: true,
        message: "Email de confirmação enviado com sucesso! (Modo desenvolvimento - verifique o console)",
      }
    }

    // Carrega EmailJS
    const emailjs = await loadEmailJS()
    if (!emailjs) {
      throw new Error("Não foi possível carregar o serviço de email")
    }

    // Dados do email
    const emailData: EmailData = {
      to_email: email,
      to_name: name,
      confirmation_link: `${window.location.origin}/confirm-email?token=${confirmationToken}`,
      app_name: "As Plantas que Curam",
    }

    // Envia o email
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)

    console.log("[v0] Email enviado com sucesso:", response)

    return {
      success: true,
      message: "Email de confirmação enviado com sucesso!",
    }
  } catch (error) {
    console.error("[v0] Erro ao enviar email:", error)

    return {
      success: false,
      message: "Erro ao enviar email de confirmação. Tente novamente.",
    }
  }
}

// Função para gerar token de confirmação
export function generateConfirmationToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Função para validar token de confirmação
export function validateConfirmationToken(token: string): boolean {
  // Validação básica - em produção seria mais robusta
  return token && token.length > 10
}
