import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "SecuriServ | Serrurerie Professionnelle 24h/24",
    template: "%s | SecuriServ",
  },
  description:
    "Serrurerie professionnelle à votre service 24h/24. Dépannage, installation, sécurisation. Intervention rapide et devis gratuit dans Paris et région parisienne.",
  keywords: "serrurerie, serrurier, dépannage, urgence, sécurité, serrure, blindage, Paris, 24h/24",
  authors: [{ name: "SecuriServ" }],
  creator: "SecuriServ",
  publisher: "SecuriServ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://securiserv.fr",
    siteName: "SecuriServ",
    title: "SecuriServ | Serrurerie Professionnelle 24h/24",
    description: "Serrurerie professionnelle à votre service 24h/24. Dépannage, installation, sécurisation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SecuriServ - Serrurerie Professionnelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecuriServ | Serrurerie Professionnelle 24h/24",
    description: "Serrurerie professionnelle à votre service 24h/24. Dépannage, installation, sécurisation.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1E3A8A" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
