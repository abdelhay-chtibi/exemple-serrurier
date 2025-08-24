import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | Serrurerie Professionnelle SecuriServ",
  description:
    "Découvrez SecuriServ, votre serrurerie de confiance depuis 15 ans. Expertise, rapidité et qualité au service de votre sécurité.",
}

export default function AProposPage() {
  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "2000+", label: "Interventions réalisées" },
    { number: "24h/24", label: "Service d'urgence" },
    { number: "98%", label: "Clients satisfaits" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description:
        "Votre sécurité est notre priorité absolue. Nous utilisons uniquement des équipements certifiés et respectons les normes les plus strictes.",
    },
    {
      icon: Clock,
      title: "Rapidité",
      description:
        "Intervention d'urgence sous 30 minutes dans toute la région parisienne. Nous comprenons l'urgence de vos situations.",
    },
    {
      icon: Award,
      title: "Qualité",
      description:
        "Artisan certifié avec une garantie sur tous nos travaux. Notre expertise reconnue nous permet d'offrir des solutions durables.",
    },
    {
      icon: Users,
      title: "Proximité",
      description:
        "Une relation de confiance avec nos clients basée sur l'écoute, la transparence et un service personnalisé.",
    },
  ]

  const certifications = [
    "Artisan certifié RGE",
    "Assurance décennale",
    "Formation continue sécurité",
    "Membre de la Chambre des Métiers",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Qui Sommes-Nous ?</h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                SecuriServ, votre partenaire de confiance en serrurerie depuis plus de 15 ans. Une expertise reconnue au
                service de votre sécurité.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondée en 2009, SecuriServ est née de la passion de son fondateur, Jean-Pierre Martin, pour les
                    métiers de la sécurité et de la serrurerie. Fort de son expérience de plus de 20 ans dans le
                    domaine, il a créé cette entreprise avec une vision claire : offrir un service de qualité, rapide et
                    accessible à tous.
                  </p>
                  <p>
                    Aujourd'hui, notre équipe de serruriers qualifiés intervient 24h/24 dans toute la région parisienne.
                    Nous avons développé une expertise reconnue dans tous les domaines de la serrurerie, du simple
                    dépannage aux installations les plus complexes.
                  </p>
                  <p>
                    Notre réputation s'est construite sur la confiance de nos clients, la qualité de nos interventions
                    et notre engagement à toujours proposer des solutions adaptées à chaque situation.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/high-security-lock-replacement.png"
                  alt="Jean-Pierre Martin, fondateur de SecuriServ"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Valeurs</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Des principes qui guident chacune de nos interventions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/commercial-security-door-shop.png"
                  alt="Certifications et outils professionnels"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Certifications & Garanties
                </h2>
                <p className="text-muted-foreground mb-6">
                  Notre professionnalisme reconnu par les organismes officiels et notre engagement qualité vous
                  garantissent des interventions dans les règles de l'art.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ils Nous Font Confiance
              </h2>
              <p className="text-muted-foreground text-lg">Quelques témoignages de nos clients satisfaits</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Dubois",
                  location: "Paris 15ème",
                  text: "Intervention très rapide pour une ouverture de porte. Serrurier professionnel et prix honnête. Je recommande !",
                  rating: 5,
                },
                {
                  name: "Pierre Martin",
                  location: "Boulogne-Billancourt",
                  text: "Excellent travail pour l'installation de ma serrure connectée. Explications claires et finition parfaite.",
                  rating: 5,
                },
                {
                  name: "Sophie Laurent",
                  location: "Neuilly-sur-Seine",
                  text: "Dépannage d'urgence un dimanche soir. Arrivé en 20 minutes, problème résolu rapidement. Merci !",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Prêt à Nous Faire Confiance ?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contactez-nous dès maintenant pour tous vos besoins en serrurerie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
