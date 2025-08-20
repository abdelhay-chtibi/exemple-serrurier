import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Réalisations | Serrurerie Professionnelle",
  description:
    "Découvrez nos dernières réalisations en serrurerie : installations, dépannages, blindages. Travaux de qualité garantis.",
}

export default function RealisationsPage() {
  const projects = [
    {
      id: 1,
      title: "Blindage de porte d'entrée",
      location: "Paris 15ème",
      date: "Décembre 2024",
      category: "Sécurisation",
      image: "/reinforced-door-security.png",
      description: "Installation complète d'un blindage de porte avec serrure multipoints A2P.",
    },
    {
      id: 2,
      title: "Ouverture de porte sans dégâts",
      location: "Boulogne-Billancourt",
      date: "Novembre 2024",
      category: "Dépannage",
      image: "/placeholder-1z7ys.png",
      description: "Ouverture d'urgence d'une porte claquée sans aucun dégât sur la serrure.",
    },
    {
      id: 3,
      title: "Installation serrure connectée",
      location: "Neuilly-sur-Seine",
      date: "Novembre 2024",
      category: "Installation",
      image: "/placeholder-x7bja.png",
      description: "Pose d'une serrure connectée avec contrôle smartphone et codes d'accès.",
    },
    {
      id: 4,
      title: "Remplacement cylindre haute sécurité",
      location: "Paris 8ème",
      date: "Octobre 2024",
      category: "Réparation",
      image: "/high-security-lock-replacement.png",
      description: "Changement d'un cylindre défaillant par un modèle haute sécurité A2P.",
    },
    {
      id: 5,
      title: "Sécurisation commerce",
      location: "Levallois-Perret",
      date: "Octobre 2024",
      category: "Sécurisation",
      image: "/commercial-security-door-shop.png",
      description: "Installation complète de sécurité pour un commerce : rideau, serrures, alarme.",
    },
    {
      id: 6,
      title: "Dépannage d'urgence nuit",
      location: "Paris 12ème",
      date: "Septembre 2024",
      category: "Urgence",
      image: "/emergency-locksmith-night.png",
      description: "Intervention d'urgence à 2h du matin pour ouverture de porte.",
    },
  ]

  const categories = ["Tous", "Sécurisation", "Dépannage", "Installation", "Réparation", "Urgence"]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Découvrez quelques-unes de nos interventions récentes. Chaque projet témoigne de notre expertise et de
                notre engagement qualité.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Tous" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Votre projet nous intéresse</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contactez-nous pour discuter de vos besoins en serrurerie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0612345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Appeler maintenant
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
