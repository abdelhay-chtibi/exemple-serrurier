import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Serrurerie Professionnelle SecuriServ",
  description:
    "Contactez SecuriServ pour tous vos besoins en serrurerie. Devis gratuit, intervention d'urgence 24h/24. Formulaire de contact et coordonnées.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["06 12 34 56 78", "Disponible 24h/24"],
      urgent: true,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@securiserv.fr", "Réponse sous 2h"],
      urgent: false,
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      details: ["Paris et région parisienne", "Déplacement gratuit"],
      urgent: false,
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 8h-19h", "Urgences: 24h/24"],
      urgent: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Contactez-Nous
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Une urgence ? Un devis ? Nous sommes à votre écoute 24h/24 pour
                répondre à tous vos besoins en serrurerie.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-destructive text-destructive-foreground py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2 text-center">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">URGENCE 24h/24 :</span>
              <a
                href="tel:0612345678"
                className="font-bold underline hover:no-underline"
              >
                06 12 34 56 78
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`text-center ${
                    info.urgent ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <info.icon
                      className={`h-8 w-8 mx-auto mb-4 ${
                        info.urgent ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className={`${
                          idx === 0 && info.urgent
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                        } ${idx === 0 ? "text-base" : "text-sm"}`}
                      >
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Demande de Devis
                </h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez ce formulaire pour recevoir un devis gratuit et
                  personnalisé. Nous vous recontactons dans les plus brefs
                  délais.
                </p>
                <ContactForm />
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Notre Zone d'Intervention
                </h2>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  {/* <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Carte de la zone d'intervention</p>
                      <p className="text-sm">Paris et région parisienne</p>
                    </div>
                  </div> */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41959.18680390659!2d2.2900841!3d48.8589506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f10c7bff3ef%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1690203496958!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Paris (tous arrondissements)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Hauts-de-Seine (92)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Val-de-Marne (94)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Seine-Saint-Denis (93)</span>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-4">
                      Informations Importantes
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Devis gratuit et sans engagement</li>
                      <li>• Intervention d'urgence sous 30 minutes</li>
                      <li>• Paiement par carte, chèque ou espèces</li>
                      <li>• Garantie sur tous nos travaux</li>
                      <li>• Tarifs transparents, pas de surprise</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Questions Fréquentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Combien coûte une intervention d'urgence ?",
                  answer:
                    "Le tarif dépend du type d'intervention et de l'heure. Nous pratiquons des tarifs transparents avec un devis gratuit avant toute intervention. Comptez entre 80€ et 150€ pour une ouverture de porte standard.",
                },
                {
                  question: "Intervenez-vous vraiment 24h/24 ?",
                  answer:
                    "Oui, nous sommes disponibles 24h/24, 7j/7 pour les urgences. Notre équipe d'astreinte peut intervenir dans les 30 minutes suivant votre appel, même la nuit, le weekend et les jours fériés.",
                },
                {
                  question: "Proposez-vous des devis gratuits ?",
                  answer:
                    "Absolument ! Tous nos devis sont gratuits et sans engagement. Nous nous déplaçons gratuitement dans notre zone d'intervention pour évaluer vos besoins et vous proposer la meilleure solution.",
                },
                {
                  question: "Quels moyens de paiement acceptez-vous ?",
                  answer:
                    "Nous acceptons les paiements par carte bancaire, chèque, espèces et virement. Pour les interventions d'urgence, nous acceptons également le paiement différé sous conditions.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
