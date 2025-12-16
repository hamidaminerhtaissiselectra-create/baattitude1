import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceLogistique from "@/assets/service-logistique.jpg";
import serviceInternational from "@/assets/service-international.jpg";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { title: string; description: string }[];
}> = {
  "decoration-ephemere": {
    title: "Décoration Éphémère",
    subtitle: "Créez l'impossible, le temps d'un instant",
    description: "Nous concevons et installons des décors temporaires sur mesure qui transforment vos espaces en expériences mémorables. Notre expertise couvre tous les types d'événements, des plus intimes aux plus spectaculaires.",
    image: serviceDecoration,
    features: ["Décors floraux", "Installations artistiques", "Mise en scène thématique", "Accessoires sur mesure"],
    benefits: ["Conception personnalisée", "Installation rapide", "Démontage inclus", "Respect des délais"],
    process: [
      { title: "Analyse du brief", description: "Étude approfondie de vos besoins et contraintes" },
      { title: "Proposition créative", description: "Présentation de concepts visuels et maquettes" },
      { title: "Production", description: "Fabrication des éléments dans nos ateliers" },
      { title: "Installation", description: "Mise en place par notre équipe expérimentée" },
    ],
  },
  "scenographie": {
    title: "Scénographie",
    subtitle: "L'art de créer des espaces qui racontent",
    description: "Notre équipe de scénographes conçoit des environnements immersifs qui captivent vos invités. Nous maîtrisons l'art de la mise en scène spatiale pour créer des atmosphères uniques.",
    image: serviceScenography,
    features: ["Design d'espace", "Conception lumière", "Signalétique", "Parcours visiteur"],
    benefits: ["Conception 3D", "Études techniques", "Coordination artistique", "Direction de production"],
    process: [
      { title: "Immersion", description: "Compréhension de votre univers et vos objectifs" },
      { title: "Scénarisation", description: "Création d'un parcours et d'une narration" },
      { title: "Design", description: "Modélisation 3D et plans techniques" },
      { title: "Réalisation", description: "Production et installation sur site" },
    ],
  },
  "location-materiel": {
    title: "Location de Matériel",
    subtitle: "Le meilleur équipement pour vos événements",
    description: "Nous mettons à votre disposition un catalogue complet de mobilier, éclairage et accessoires haut de gamme pour sublimer vos événements professionnels et privés.",
    image: serviceLocation,
    features: ["Mobilier de luxe", "Éclairage événementiel", "Textiles & nappage", "Vaisselle & arts de la table"],
    benefits: ["Catalogue premium", "Livraison & reprise", "Conseil personnalisé", "Stock important"],
    process: [
      { title: "Consultation", description: "Analyse de vos besoins et du lieu" },
      { title: "Sélection", description: "Choix des éléments dans notre catalogue" },
      { title: "Livraison", description: "Transport et mise en place" },
      { title: "Reprise", description: "Collecte après l'événement" },
    ],
  },
  "evenements-corporatifs": {
    title: "Événements Corporatifs",
    subtitle: "L'excellence au service de votre image",
    description: "Nous prenons en charge la décoration complète de vos événements d'entreprise : séminaires, conventions, lancements de produits, soirées de gala. Une prestation clé en main pour une image parfaite.",
    image: serviceCorporate,
    features: ["Séminaires", "Conventions", "Lancements produits", "Galas & soirées"],
    benefits: ["Image de marque respectée", "Coordination totale", "Respect des budgets", "Retour sur investissement"],
    process: [
      { title: "Brief stratégique", description: "Alignement avec vos objectifs corporate" },
      { title: "Conception sur mesure", description: "Design adapté à votre charte graphique" },
      { title: "Production intégrée", description: "Gestion de A à Z" },
      { title: "Bilan", description: "Debriefing et recommandations" },
    ],
  },
  "logistique": {
    title: "Logistique",
    subtitle: "La précision au service de votre événement",
    description: "Notre expertise logistique garantit le bon déroulement de chaque projet : transport, montage, installation et démontage. Une équipe réactive disponible 24/7.",
    image: serviceLogistique,
    features: ["Transport sécurisé", "Montage professionnel", "Coordination équipes", "Gestion des délais"],
    benefits: ["Réactivité 24/7", "Flotte de véhicules", "Équipes formées", "Assurances complètes"],
    process: [
      { title: "Planning", description: "Élaboration du rétroplanning détaillé" },
      { title: "Préparation", description: "Conditionnement et chargement" },
      { title: "Exécution", description: "Transport et installation" },
      { title: "Repli", description: "Démontage et retour" },
    ],
  },
  "support-international": {
    title: "Support International",
    subtitle: "Votre partenaire décoration partout dans le monde",
    description: "Fort de notre expérience, nous intervenons à l'international pour des projets d'envergure. Notre réseau de partenaires et notre expertise logistique nous permettent de délivrer la même qualité partout.",
    image: serviceInternational,
    features: ["Coordination internationale", "Réseau de partenaires", "Gestion douanière", "Adaptation culturelle"],
    benefits: ["Expérience export", "Qualité constante", "Un seul interlocuteur", "Maîtrise des coûts"],
    process: [
      { title: "Étude de faisabilité", description: "Analyse des contraintes locales" },
      { title: "Coordination", description: "Mise en place du réseau de partenaires" },
      { title: "Production", description: "Fabrication et export" },
      { title: "Supervision", description: "Présence sur site et pilotage" },
    ],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId || ""];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-card-foreground mb-4">Service non trouvé</h1>
            <Button variant="gold" asChild>
              <Link to="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux services
          </Link>
          
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              {service.subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                Ce que nous proposons
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                Vos avantages
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-card-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-card-foreground"
            >
              Notre <span className="text-gradient-gold">processus</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6"
          >
            Intéressé par ce service ?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="hero" asChild>
              <Link to="/contact">
                Demander un Devis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
