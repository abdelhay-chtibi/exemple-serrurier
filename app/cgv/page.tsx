import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | SecuriServ Serrurerie",
  description: "Conditions générales de vente de SecuriServ. Tarifs, garanties et conditions d'intervention.",
}

export default function CGVPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">
            Conditions Générales de Vente
          </h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Article 1 - Champ d'application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les présentes conditions générales de vente s'appliquent à toutes les prestations de services
                  réalisées par SecuriServ SARL, ci-après dénommée "la Société", dans le domaine de la serrurerie,
                  auprès de sa clientèle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 2 - Devis et commandes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Tout devis établi par la Société a une durée de validité de 30 jours. Au-delà de cette période, les
                  prix sont susceptibles d'être révisés.
                </p>
                <p className="text-muted-foreground">
                  Les devis sont gratuits et sans engagement. L'acceptation du devis vaut commande ferme.
                </p>
                <p className="text-muted-foreground">
                  Pour les interventions d'urgence, l'accord du client est recueilli verbalement avant toute
                  intervention, avec confirmation des tarifs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 3 - Prix et paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Les prix sont exprimés en euros TTC. Ils comprennent la main-d'œuvre, les fournitures et le
                  déplacement dans la zone d'intervention habituelle.
                </p>
                <p className="text-muted-foreground">
                  Le paiement s'effectue comptant à la fin de l'intervention par chèque, espèces ou carte bancaire.
                </p>
                <p className="text-muted-foreground">
                  <strong>Tarifs d'urgence :</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Nuits (20h-8h) : majoration de 30%</li>
                  <li>Dimanches et jours fériés : majoration de 50%</li>
                  <li>Jours fériés de nuit : majoration de 80%</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 4 - Exécution des prestations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  La Société s'engage à intervenir dans les meilleurs délais, en fonction de ses disponibilités et de
                  l'urgence de la situation.
                </p>
                <p className="text-muted-foreground">
                  Pour les interventions d'urgence, la Société s'efforce d'intervenir dans un délai de 30 minutes
                  maximum dans Paris et la petite couronne.
                </p>
                <p className="text-muted-foreground">
                  Le client doit être présent lors de l'intervention ou désigner une personne habilitée à prendre les
                  décisions nécessaires.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 5 - Garanties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  La Société garantit ses prestations contre tout vice de fabrication ou de pose pendant une durée de :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>2 ans pour les installations neuves</li>
                  <li>1 an pour les réparations</li>
                  <li>6 mois pour les dépannages d'urgence</li>
                </ul>
                <p className="text-muted-foreground">
                  Cette garantie ne couvre pas l'usure normale, les dégradations volontaires ou accidentelles, ni les
                  interventions réalisées par des tiers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 6 - Responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  La Société est assurée pour sa responsabilité civile professionnelle et décennale auprès de la
                  compagnie d'assurance Allianz.
                </p>
                <p className="text-muted-foreground">
                  La responsabilité de la Société ne peut être engagée qu'en cas de faute prouvée dans l'exécution de
                  ses prestations.
                </p>
                <p className="text-muted-foreground">
                  En cas de dommage, l'indemnisation ne pourra excéder le montant de la prestation concernée.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 7 - Annulation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Toute annulation d'intervention doit être signalée au moins 2 heures avant l'heure prévue.
                </p>
                <p className="text-muted-foreground">
                  En cas d'annulation tardive ou de rendez-vous manqué, des frais de déplacement pourront être facturés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 8 - Litiges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
                </p>
                <p className="text-muted-foreground">
                  À défaut d'accord amiable, les tribunaux de Paris seront seuls compétents.
                </p>
                <p className="text-muted-foreground">Le droit français est seul applicable.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Article 9 - Données personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les données personnelles collectées sont utilisées uniquement dans le cadre de l'exécution des
                  prestations et du suivi client. Elles ne sont pas transmises à des tiers et sont conservées pendant la
                  durée légale requise.
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground mt-12">
              <p>Conditions générales de vente en vigueur au 1er janvier 2024</p>
              <p>SecuriServ SARL - RCS Paris B 123 456 789</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
