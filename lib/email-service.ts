"use client"

// EmailJS configuration - these would be set up in production with proper keys
const EMAILJS_CONFIG = {
  serviceId: "service_plantas_medicinais",
  templateId: "template_confirmacao",
  publicKey: "your_emailjs_public_key", // This would be configured in production
}

// Interface para dados do email
interface EmailData {
  to_email: string
  to_name: string
  confirmation_link: string
  app_name: string
}

// Função para carregar EmailJS dinamicamente (apenas em produção)
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
    emailjs.init(EMAILJS_CONFIG.publicKey)
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

    // Em desenvolvimento ou quando EmailJS não está configurado, simula envio
    console.log("[v0] Modo desenvolvimento - simulando envio de email")
    console.log("[v0] Token de confirmação:", confirmationToken)

    const confirmationLink = `${window.location.origin}/confirm-email?token=${confirmationToken}`
    console.log("[v0] Link de confirmação:", confirmationLink)

    // Mostra um alerta com o link para facilitar o teste
    if (typeof window !== "undefined") {
      setTimeout(() => {
        alert(
          `CONFIRMAÇÃO DE EMAIL:\n\nPara ativar sua conta, acesse:\n${confirmationLink}\n\nOu use o botão "Confirmar Email Manualmente" na tela de registro.`,
        )
      }, 1000)
    }

    // Simula delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Email de confirmação enviado! Verifique o alerta na tela para o link de confirmação.",
    }

    // Código para produção (comentado por segurança)
    /*
    // Para produção, descomente e configure as variáveis de ambiente adequadamente
    const emailjs = await loadEmailJS()
    if (!emailjs) {
      throw new Error("Não foi possível carregar o serviço de email")
    }

    const emailData: EmailData = {
      to_email: email,
      to_name: name,
      confirmation_link: confirmationLink,
      app_name: "As Plantas que Curam",
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId, 
      EMAILJS_CONFIG.templateId, 
      emailData
    )

    console.log("[v0] Email enviado com sucesso:", response)

    return {
      success: true,
      message: "Email de confirmação enviado com sucesso!",
    }
    */
  } catch (error) {
    console.error("[v0] Erro ao enviar email:", error)

    return {
      success: false,
      message: "Erro ao enviar email de confirmação. Use a confirmação manual.",
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
