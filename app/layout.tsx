import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "As Plantas que Curam - Enciclopédia de Plantas Medicinais",
  description:
    "Enciclopédia completa de plantas medicinais que funciona 100% offline. Encontre plantas por nome ou doença, com informações sobre indicações, preparo e contraindicações.",
  generator: "v0.app",
  manifest: "/manifest.json",
  themeColor: "#22c55e",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  keywords: "plantas medicinais, fitoterapia, medicina natural, ervas, chás medicinais, saúde natural",
  authors: [{ name: "As Plantas que Curam" }],
  creator: "As Plantas que Curam",
  publisher: "As Plantas que Curam",
  robots: "index, follow",
  openGraph: {
    title: "As Plantas que Curam",
    description: "Enciclopédia de plantas medicinais que funciona offline",
    type: "website",
    locale: "pt_BR",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Plantas que Curam",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
