import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: "Dépannage d'urgence",
      description: "Intervention rapide 24h/24 pour tous vos problèmes de serrurerie",
    },
    {
      icon: Clock,
      title: "Installation & Réparation",
      description: "Installation et réparation de serrures, blindages et systèmes de sécurité",
    },
    {
      icon: Users,
      title: "Conseil personnalisé",
      description: "Étude de vos besoins et conseils adaptés à votre situation",
    },
  ]

  const advantages = [
    "Intervention rapide sous 30 minutes",
    "Devis gratuit et transparent",
    "Artisan certifié et assuré",
    "Garantie sur tous nos travaux",
    "Tarifs compétitifs",
    "Service client de qualité",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                Serrurerie Professionnelle
                <span className="block text-accent">24h/24</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
                Dépannage d'urgence, installation et sécurisation. Intervention rapide dans toute la région parisienne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Appel d'urgence
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/contact">Devis gratuit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une expertise complète au service de votre sécurité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Pourquoi nous choisir ?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{advantage}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/a-propos">En savoir plus</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/locksmith-door-security.png"
                  alt="Serrurier professionnel au travail"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Besoin d'un serrurier ?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contactez-nous dès maintenant pour une intervention rapide ou un devis gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                06 12 34 56 78
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Formulaire de contact</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
