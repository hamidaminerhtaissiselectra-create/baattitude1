import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";

const mentionsBreadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "Mentions légales", url: "https://baattitude.fr/mentions-legales" },
];

export default function MentionsLegales() {
  return (
    <Layout>
      <SEOHead
        title="Mentions Légales | BA ATTITUDE - Prestataire Événementiel"
        description="Mentions légales du site BA ATTITUDE. Informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la protection des données personnelles."
        canonical="https://baattitude.fr/mentions-legales"
        noindex={true}
      />
      <BreadcrumbSchema items={mentionsBreadcrumbs} />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-12"
            >
              Mentions <span className="text-gradient-gold">Légales</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-invert max-w-none"
            >
              <div className="space-y-8 text-muted-foreground">
                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    1. Éditeur du site
                  </h2>
                  <p>
                    <strong className="text-card-foreground">BA Attitude</strong><br />
                    16 Rue des Pendants de La Queue-en-Brie<br />
                    77340 Pontault-Combault<br />
                    France
                  </p>
                  <p className="mt-4">
                    <strong className="text-card-foreground">Téléphone :</strong> 01 77 00 09 52 / 06 01 59 19 20<br />
                    <strong className="text-card-foreground">Email :</strong> contact@baattitude.fr
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    2. Hébergement
                  </h2>
                  <p>
                    Le site baattitude.fr est hébergé par :<br />
                    <strong className="text-card-foreground">Lovable</strong><br />
                    Service d'hébergement web
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    3. Propriété intellectuelle
                  </h2>
                  <p>
                    L'ensemble des contenus présents sur le site baattitude.fr (textes, images, 
                    graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive 
                    de BA Attitude ou de ses partenaires.
                  </p>
                  <p className="mt-4">
                    Toute reproduction, représentation, modification, publication, adaptation 
                    de tout ou partie des éléments du site, quel que soit le moyen ou le procédé 
                    utilisé, est interdite, sauf autorisation écrite préalable de BA Attitude.
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    4. Données personnelles
                  </h2>
                  <p>
                    Les informations recueillies via le formulaire de contact sont enregistrées 
                    dans un fichier informatisé par BA Attitude pour la gestion des demandes 
                    de devis et le suivi commercial.
                  </p>
                  <p className="mt-4">
                    Conformément à la loi « informatique et libertés », vous pouvez exercer 
                    votre droit d'accès aux données vous concernant et les faire rectifier 
                    en contactant : contact@baattitude.fr
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    5. Cookies
                  </h2>
                  <p>
                    Le site baattitude.fr peut être amené à utiliser des cookies pour améliorer 
                    l'expérience utilisateur et réaliser des statistiques de visite.
                  </p>
                  <p className="mt-4">
                    Vous pouvez à tout moment désactiver les cookies en configurant votre navigateur.
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    6. Limitation de responsabilité
                  </h2>
                  <p>
                    BA Attitude ne pourra être tenue responsable des dommages directs et indirects 
                    causés au matériel de l'utilisateur, lors de l'accès au site baattitude.fr, 
                    et résultant soit de l'utilisation d'un matériel ne répondant pas aux 
                    spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
