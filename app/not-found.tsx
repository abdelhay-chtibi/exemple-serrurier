"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Phone, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const quickLinks = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Nos réalisations", href: "/realisations", icon: Search },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Hero */}
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Page Introuvable</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Mais ne vous inquiétez pas, nous
              sommes toujours là pour vous aider !
            </p>
          </div>

          {/* Emergency Contact */}
          <Card className="mb-12 border-primary bg-primary/5">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Une urgence en serrurerie ?</h2>
              <p className="text-muted-foreground mb-6">
                Même si cette page n'existe pas, notre service d'urgence est toujours disponible 24h/24 !
              </p>
              <Button size="lg" asChild>
                <a href="tel:0612345678" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  06 12 34 56 78
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Où souhaitez-vous aller ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <Card key={link.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <link.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{link.name}</h3>
                    <Button variant="outline" asChild>
                      <Link href={link.href}>Accéder</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
