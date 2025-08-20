# SecuriServ - Site Vitrine Serrurerie

Site vitrine professionnel pour une entreprise de serrurerie, développé avec Next.js 15 et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design responsive** - Optimisé mobile et desktop
- **5 pages principales** :
  - Accueil avec hero section
  - Galerie des réalisations
  - À propos de l'entreprise
  - Contact avec formulaire fonctionnel
  - Horaires et zones d'intervention
- **Formulaire de contact** avec validation
- **SEO optimisé** avec métadonnées appropriées
- **Page 404 personnalisée**
- **Pages légales** (Mentions légales, CGV)
- **Service d'urgence 24h/24** mis en avant
- **Design professionnel** avec couleurs adaptées au secteur

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **Tailwind CSS v4** - Framework CSS utilitaire
- **TypeScript** - Typage statique
- **Lucide React** - Icônes
- **shadcn/ui** - Composants UI
- **Google Fonts** - Space Grotesk & DM Sans

## 📦 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation locale

1. **Cloner le projet**
\`\`\`bash
git clone <url-du-repo>
cd securiserv-website
\`\`\`

2. **Installer les dépendances**
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. **Lancer le serveur de développement**
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. **Ouvrir dans le navigateur**
\`\`\`
http://localhost:3000
\`\`\`

## 🚀 Déploiement

### Déploiement sur Vercel (Recommandé)

1. **Via GitHub (méthode recommandée)**
   - Pusher le code sur GitHub
   - Connecter le repo à Vercel
   - Le déploiement se fait automatiquement

2. **Via Vercel CLI**
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

3. **Via l'interface Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Importer le projet depuis GitHub
   - Le déploiement se lance automatiquement

### Autres plateformes

**Netlify**
\`\`\`bash
npm run build
# Déployer le dossier .next
\`\`\`

**Hébergement traditionnel**
\`\`\`bash
npm run build
npm run export
# Déployer le dossier out/
\`\`\`

## 📁 Structure du projet

\`\`\`
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── realisations/      # Galerie des réalisations
│   ├── a-propos/          # À propos
│   ├── contact/           # Contact et formulaire
│   ├── horaires/          # Horaires et zones
│   ├── mentions-legales/  # Mentions légales
│   ├── cgv/              # Conditions générales
│   ├── not-found.tsx     # Page 404 personnalisée
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Styles globaux
├── components/            # Composants réutilisables
│   ├── header.tsx        # En-tête avec navigation
│   ├── footer.tsx        # Pied de page
│   ├── contact-form.tsx  # Formulaire de contact
│   └── ui/               # Composants UI (shadcn)
├── public/               # Assets statiques
│   └── images/           # Images du site
└── README.md            # Documentation
\`\`\`

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `app/globals.css` :
- **Primaire** : Bleu foncé (#1E3A8A) - Confiance et professionnalisme
- **Secondaire** : Bleu clair (#2563EB) - Accents et CTA
- **Neutre** : Gris clair (#F8FAFC) - Arrière-plans

### Typographie

- **Titres** : Space Grotesk (Google Fonts)
- **Texte** : DM Sans (Google Fonts)

### Contenu

Pour personnaliser le contenu :
1. Modifier les textes dans chaque page
2. Remplacer les images dans `/public/`
3. Ajuster les informations de contact
4. Personnaliser les services proposés

## 📱 Responsive Design

Le site est optimisé pour :
- **Mobile** : 320px - 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : 1024px+

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` pour la configuration :

\`\`\`env
# Optionnel : Configuration email pour le formulaire
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
\`\`\`

### Formulaire de contact

Le formulaire est actuellement configuré avec une simulation. Pour l'activer :

1. Créer une API route dans `app/api/contact/route.ts`
2. Configurer l'envoi d'emails (Nodemailer, SendGrid, etc.)
3. Modifier `components/contact-form.tsx` pour utiliser l'API

## 📈 SEO

Le site inclut :
- Métadonnées optimisées pour chaque page
- Structure sémantique HTML5
- Balises Open Graph
- Sitemap automatique (Next.js)
- Robots.txt

## 🛡️ Sécurité

- Validation côté client et serveur
- Protection CSRF
- Headers de sécurité (Next.js)
- Sanitisation des données

## 📞 Support

Pour toute question technique :
- Consulter la [documentation Next.js](https://nextjs.org/docs)
- Consulter la [documentation Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**SecuriServ** - Votre serrurerie de confiance 🔐
