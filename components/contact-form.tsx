"use client";

import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";

export default function ContactForm() {
  // Utilisation du hook Formspree
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    address: "",
    message: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceTypes = [
    "Dépannage d'urgence",
    "Ouverture de porte",
    "Installation de serrure",
    "Blindage de porte",
    "Remplacement de cylindre",
    "Sécurisation",
    "Autre",
  ];

  const urgencyLevels = [
    "Très urgent (dans l'heure)",
    "Urgent (dans la journée)",
    "Normal (sous 48h)",
    "Pas urgent (dans la semaine)",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    } else if (!/^[0-9\s\-+()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Format de téléphone invalide";
    }
    if (!formData.serviceType)
      newErrors.serviceType = "Veuillez sélectionner un service";
    if (!formData.urgency)
      newErrors.urgency = "Veuillez indiquer le niveau d'urgence";
    if (!formData.message.trim())
      newErrors.message = "Veuillez décrire votre demande";
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "Vous devez accepter les conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Créer l'objet avec toutes les données formatées pour Formspree
    const formDataToSubmit = new FormData();

    // Champs individuels pour Formspree
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("serviceType", formData.serviceType);
    formDataToSubmit.append("urgency", formData.urgency);
    formDataToSubmit.append("address", formData.address);
    formDataToSubmit.append("message", formData.message);

    // Message formaté pour l'admin
    const adminMessage = `
NOUVELLE DEMANDE DE CONTACT - SECURISERV

👤 CLIENT:
- Nom: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Téléphone: ${formData.phone}
${formData.address ? `- Adresse: ${formData.address}` : ""}

🔧 DEMANDE:
- Service: ${formData.serviceType}
- Urgence: ${formData.urgency}

💬 MESSAGE:
${formData.message}

⏰ Reçu le: ${new Date().toLocaleDateString(
      "fr-FR"
    )} à ${new Date().toLocaleTimeString("fr-FR")}

${
  formData.urgency.includes("urgent")
    ? "🚨 INTERVENTION URGENTE DEMANDÉE !"
    : ""
}
    `;

    formDataToSubmit.append(
      "_subject",
      `${
        formData.urgency.includes("urgent") ? "🚨 URGENT" : "📧"
      } Nouvelle demande - ${formData.serviceType}`
    );
    formDataToSubmit.append("adminMessage", adminMessage);

    // Configuration Formspree
    formDataToSubmit.append("_replyto", formData.email);
    formDataToSubmit.append(
      "_next",
      "https://securiserv.fr/contact?success=true"
    );

    // Soumission via Formspree
    await handleSubmit(formDataToSubmit);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Succès
  if (state.succeeded) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-green-800 mb-2">
            Demande envoyée avec succès !
          </h3>
          <p className="text-green-700 mb-4">
            Nous avons bien reçu votre demande de devis. Notre équipe vous
            contactera dans les plus brefs délais.
          </p>
          {formData.urgency.includes("urgent") && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center space-x-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold">Urgence détectée !</span>
              </div>
              <p className="text-red-600 mt-2">
                Pour une intervention immédiate, appelez directement :
              </p>
              <a
                href="tel:0612345678"
                className="inline-block mt-2 bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                📞 06 12 34 56 78
              </a>
            </div>
          )}
          <p className="text-sm text-green-600">
            Un email de confirmation a été envoyé à votre adresse.
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="mt-4"
          >
            Envoyer une autre demande
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Erreur
  // @ts-ignore
  if (state.errors && state.errors.length > 0) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-8 text-center">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-red-800 mb-2">
            Erreur lors de l'envoi
          </h3>
          <p className="text-red-700 mb-4">
            Une erreur est survenue. Veuillez réessayer ou nous contacter
            directement.
          </p>
          <div className="space-y-2 mb-4">
            <a
              href="tel:0612345678"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors mr-2"
            >
              📞 06 12 34 56 78
            </a>
            <a
              href="mailto:contact@securiserv.fr"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              ✉️ contact@securiserv.fr
            </a>
          </div>
          <Button onClick={() => window.location.reload()} variant="outline">
            Réessayer
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={errors.firstName ? "border-destructive" : ""}
                disabled={state.submitting}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={errors.lastName ? "border-destructive" : ""}
                disabled={state.submitting}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
                disabled={state.submitting}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-destructive" : ""}
                disabled={state.submitting}
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="serviceType">Type de service *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) =>
                  handleInputChange("serviceType", value)
                }
                disabled={state.submitting}
              >
                <SelectTrigger
                  className={errors.serviceType ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className="text-sm text-destructive mt-1">
                  {errors.serviceType}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="urgency">Niveau d'urgence *</Label>
              <Select
                value={formData.urgency}
                onValueChange={(value) => handleInputChange("urgency", value)}
                disabled={state.submitting}
              >
                <SelectTrigger
                  className={errors.urgency ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Sélectionnez l'urgence" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.urgency && (
                <p className="text-sm text-destructive mt-1">
                  {errors.urgency}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="address">Adresse d'intervention</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Adresse complète (optionnel pour le devis)"
              disabled={state.submitting}
            />
          </div>

          <div>
            <Label htmlFor="message">Description de votre demande *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Décrivez votre problème ou votre besoin en détail..."
              rows={4}
              className={errors.message ? "border-destructive" : ""}
              disabled={state.submitting}
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) =>
                handleInputChange("acceptTerms", checked as boolean)
              }
              disabled={state.submitting}
              className="border border-gray-300 rounded-sm data-[state=checked]:bg-primary"
            />
            <Label htmlFor="acceptTerms" className="text-sm">
              J'accepte les{" "}
              <a
                href="/mentions-legales"
                className="text-primary hover:underline"
              >
                conditions générales
              </a>{" "}
              et la politique de confidentialité *
            </Label>
          </div>

          {errors.acceptTerms && (
            <p className="text-sm text-destructive">{errors.acceptTerms}</p>
          )}

          <Button type="submit" className="w-full" disabled={state.submitting}>
            {state.submitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Envoyer ma demande
              </>
            )}
          </Button>

          {/* Message d'urgence visible */}
          {formData.urgency.includes("urgent") && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <div className="flex items-center space-x-2 text-red-700 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold">Cas urgent détecté !</span>
              </div>
              <p className="text-red-600 text-sm mb-3">
                Pour une intervention immédiate, appelez-nous directement au
                lieu d'attendre la réponse par email.
              </p>
              <a
                href="tel:0612345678"
                className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                📞 Appeler maintenant : 06 12 34 56 78
              </a>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
