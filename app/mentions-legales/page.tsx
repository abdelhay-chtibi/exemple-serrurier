import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | SecuriServ Serrurerie",
  description: "Mentions légales de SecuriServ, serrurerie professionnelle. Informations légales et réglementaires.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">Mentions Légales</h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informations sur l'entreprise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Raison sociale</h3>
                  <p className="text-muted-foreground">SecuriServ SARL</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Siège social</h3>
                  <p className="text-muted-foreground">
                    123 Avenue de la République
                    <br />
                    75011 Paris, France
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Téléphone : 06 12 34 56 78
                    <br />
                    Email : contact@securiserv.fr
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Informations légales</h3>
                  <p className="text-muted-foreground">
                    SIRET : 123 456 789 00012
                    <br />
                    RCS Paris B 123 456 789
                    <br />
                    TVA Intracommunautaire : FR12 123456789
                    <br />
                    Code APE : 4332B
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Directeur de publication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Jean-Pierre Martin, Gérant de SecuriServ SARL</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hébergement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ce site est hébergé par Vercel Inc.
                  <br />
                  340 S Lemon Ave #4133
                  <br />
                  Walnut, CA 91789, États-Unis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
                  propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                  téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-muted-foreground">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Protection des données personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général
                  sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de
                  suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-muted-foreground">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@securiserv.fr
                </p>
                <p className="text-muted-foreground">
                  Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos
                  demandes et ne sont pas transmises à des tiers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking
                  ou publicitaire n'est utilisé sans votre consentement explicite.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement
                  remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous
                  constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le
                  signaler par email à contact@securiserv.fr
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
