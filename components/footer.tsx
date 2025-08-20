import Link from "next/link"
import { Shield, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="font-heading font-bold text-xl">SecuriServ</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Votre serrurerie de confiance depuis plus de 15 ans. Intervention rapide 24h/24 pour tous vos besoins de
              sécurité.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">06 12 34 56 78</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Dépannage d'urgence</li>
              <li>Installation de serrures</li>
              <li>Blindage de porte</li>
              <li>Ouverture de porte</li>
              <li>Sécurisation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@securiserv.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris et région parisienne</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">© 2025 SecuriServ. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/mentions-legales"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/cgv"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
