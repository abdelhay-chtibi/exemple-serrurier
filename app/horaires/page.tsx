import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Phone, AlertTriangle, MapPin, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Horaires | Serrurerie Professionnelle SecuriServ",
  description:
    "Horaires d'ouverture de SecuriServ. Service d'urgence 24h/24, 7j/7. Consultez nos disponibilités et zones d'intervention.",
}

export default function HorairesPage() {
  const regularHours = [
    { day: "Lundi", hours: "8h00 - 19h00", available: true },
    { day: "Mardi", hours: "8h00 - 19h00", available: true },
    { day: "Mercredi", hours: "8h00 - 19h00", available: true },
    { day: "Jeudi", hours: "8h00 - 19h00", available: true },
    { day: "Vendredi", hours: "8h00 - 19h00", available: true },
    { day: "Samedi", hours: "9h00 - 17h00", available: true },
    { day: "Dimanche", hours: "Urgences uniquement", available: false },
  ]

  const emergencyInfo = [
    {
      title: "Temps d'intervention",
      description: "Moins de 30 minutes",
      icon: Clock,
    },
    {
      title: "Zone couverte",
      description: "Paris et petite couronne",
      icon: MapPin,
    },
    {
      title: "Équipe disponible",
      description: "3 serruriers d'astreinte",
      icon: Users,
    },
  ]

  const specialDays = [
    {
      date: "1er Janvier",
      status: "Urgences uniquement",
      note: "Tarif majoré de 50%",
    },
    {
      date: "1er Mai",
      status: "Urgences uniquement",
      note: "Tarif majoré de 50%",
    },
    {
      date: "25 Décembre",
      status: "Urgences uniquement",
      note: "Tarif majoré de 50%",
    },
    {
      date: "Jours fériés",
      status: "Horaires réduits",
      note: "9h00 - 17h00",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Nos Horaires</h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Découvrez nos horaires d'ouverture et notre service d'urgence disponible 24h/24 pour tous vos besoins en
                serrurerie.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-destructive text-destructive-foreground py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-heading text-xl font-bold">SERVICE D'URGENCE 24H/24</span>
              </div>
              <p className="text-lg mb-4">
                Porte claquée ? Serrure cassée ? Cambriolage ? Nous intervenons immédiatement !
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0612345678" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  06 12 34 56 78
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Regular Hours */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Hours Table */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Horaires d'Ouverture</h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {regularHours.map((schedule, index) => (
                        <div key={index} className="flex items-center justify-between p-4">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-foreground w-20">{schedule.day}</span>
                            {schedule.available ? (
                              <Badge variant="default" className="bg-green-100 text-green-800">
                                Ouvert
                              </Badge>
                            ) : (
                              <Badge variant="secondary">Urgences</Badge>
                            )}
                          </div>
                          <span className="text-muted-foreground font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Note importante</p>
                      <p className="text-sm text-blue-700">
                        Les horaires peuvent varier selon les jours fériés. Pour les urgences, nous sommes disponibles
                        24h/24, 7j/7 avec un service d'astreinte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Service Info */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Service d'Urgence</h2>
                <div className="space-y-6">
                  {emergencyInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading text-lg font-semibold">{info.title}</h3>
                            <p className="text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Contact d'Urgence</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary mb-2">06 12 34 56 78</p>
                      <p className="text-muted-foreground mb-4">Disponible 24h/24, 7j/7</p>
                      <Button asChild className="w-full">
                        <a href="tel:0612345678">Appeler maintenant</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Special Days */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">Jours Spéciaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialDays.map((day, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-lg font-semibold">{day.date}</h3>
                      <Badge variant={day.status.includes("Urgences") ? "destructive" : "secondary"}>
                        {day.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{day.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">Zones d'Intervention</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Paris</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Tous les arrondissements de Paris</p>
                  <ul className="text-sm space-y-1">
                    <li>• Intervention sous 20 minutes</li>
                    <li>• Pas de frais de déplacement</li>
                    <li>• Service prioritaire</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Petite Couronne</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Hauts-de-Seine, Val-de-Marne, Seine-Saint-Denis</p>
                  <ul className="text-sm space-y-1">
                    <li>• Intervention sous 30 minutes</li>
                    <li>• Déplacement gratuit</li>
                    <li>• Couverture complète</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Grande Couronne</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Sur demande et selon disponibilité</p>
                  <ul className="text-sm space-y-1">
                    <li>• Intervention sous 45 minutes</li>
                    <li>• Frais de déplacement possibles</li>
                    <li>• Devis préalable</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Besoin d'Aide ?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              N'hésitez pas à nous contacter pour toute question sur nos horaires ou nos services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0612345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
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
