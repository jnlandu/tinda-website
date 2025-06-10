import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

// Update metadata to reflect mobile payment positioning instead of banking
export const metadata: Metadata = {
  title: "Tinda | Paiement Mobile et Transfert d'Argent en RD Congo",
  description:
    "Solution de paiement mobile et transfert d'argent pour la RD Congo. Sécurisée, rapide et fiable, avec fonctionnalité Moziki intégrée.",
  keywords:
    "paiement mobile, transfert d'argent, RD Congo, fintech, Moziki, Tontines, portefeuille mobile, Kinshasa, Lubumbashi",
  authors: [{ name: "Équipe Tinda" }],
  creator: "Tinda",
  publisher: "Tinda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Tinda | Paiement Mobile et Transfert d'Argent en RD Congo",
    description:
      "Solution de paiement mobile et transfert d'argent pour la RD Congo. Sécurisée, rapide et fiable, avec fonctionnalité Moziki intégrée.",
    url: "https:/www./tinda.cd",
    siteName: "Tinda",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_CD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinda | Paiement Mobile et Transfert d'Argent en RD Congo",
    description:
      "Solution de paiement mobile et transfert d'argent pour la RD Congo. Sécurisée, rapide et fiable, avec fonctionnalité Moziki intégrée.",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
