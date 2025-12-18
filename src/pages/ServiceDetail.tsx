import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft, Phone, CheckCircle } from "lucide-react";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import heroImage from "@/assets/hero-event.jpg";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  metaTitle: string;
  description: string;
  longDescription: string;
  image: string;
  clientNeeds: string[];
  features: string[];
  benefits: string[];
  methodology: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}> = {
  "salons-professionnels": {
    title: "Salons Professionnels",
    subtitle: "Votre partenaire technique pour tous vos salons B2B",
    metaTitle: "Prestations Salons Professionnels | BA Attitude",
    description: "BA Attitude vous accompagne sur tous vos salons professionnels en France et à l'international : montage, démontage, logistique et coordination terrain.",
    longDescription: "Spécialiste des prestations techniques pour salons professionnels depuis plus de 15 ans, BA Attitude est votre partenaire de confiance pour la réussite de vos participations à des foires, expositions et événements B2B. Nous intervenons sur l'ensemble du territoire français et à l'international.",
    image: heroImage,
    clientNeeds: [
      "Vous participez à un salon professionnel et avez besoin d'une équipe technique fiable",
      "Vous organisez une exposition et recherchez un prestataire pour le montage des stands",
      "Vous avez besoin de coordonner plusieurs prestataires sur un même événement",
      "Vous souhaitez un interlocuteur unique pour gérer toute la logistique terrain",
    ],
    features: [
      "Montage et démontage de stands sur mesure",
      "Installation de mobilier et équipements",
      "Pose de moquette et revêtements de sol",
      "Signalétique et habillage graphique",
      "Éclairage et connexions électriques",
      "Coordination avec les organisateurs du salon",
    ],
    benefits: [
      "Un interlocuteur unique de A à Z",
      "Équipes expérimentées et formées",
      "Respect strict des délais",
      "Intervention 24h/24 si nécessaire",
      "Assurance et garanties complètes",
      "Tarification transparente et compétitive",
    ],
    methodology: [
      { title: "Brief & Étude", description: "Analyse de vos besoins, visite du lieu si nécessaire, devis détaillé" },
      { title: "Planification", description: "Rétroplanning précis, coordination avec les parties prenantes" },
      { title: "Montage", description: "Installation par nos équipes selon le planning convenu" },
      { title: "Suivi", description: "Présence terrain pendant l'événement, ajustements si besoin" },
      { title: "Démontage", description: "Repli soigné, évacuation des matériaux, état des lieux" },
    ],
    faq: [
      { question: "Dans quels délais pouvez-vous intervenir ?", answer: "Nous pouvons mobiliser nos équipes sous 24 à 48h en Île-de-France, et sous 72h sur le reste du territoire français." },
      { question: "Intervenez-vous sur tous types de salons ?", answer: "Oui, nous intervenons sur tous les salons professionnels : industrie, mode, alimentaire, high-tech, etc. Notre expertise couvre tous les secteurs." },
      { question: "Proposez-vous des forfaits tout compris ?", answer: "Oui, nous proposons des forfaits incluant montage, démontage, mobilier et coordination. Chaque devis est personnalisé selon vos besoins." },
    ],
  },
  "support-technique": {
    title: "Support Technique Événementiel",
    subtitle: "L'expertise technique au service de vos événements",
    metaTitle: "Support Technique Événementiel | BA Attitude",
    description: "Nos équipes techniques interviennent sur tous vos événements professionnels : installation, maintenance, assistance terrain et coordination des prestataires.",
    longDescription: "Le support technique événementiel de BA Attitude vous garantit une exécution parfaite de vos événements. Nos techniciens qualifiés assurent l'installation, la maintenance et la coordination de l'ensemble des éléments techniques de votre événement.",
    image: serviceScenography,
    clientNeeds: [
      "Vous avez besoin d'une équipe technique sur site pendant votre événement",
      "Vous recherchez des techniciens qualifiés pour des installations spécifiques",
      "Vous souhaitez externaliser la gestion technique de vos événements",
      "Vous avez besoin d'un support réactif en cas d'imprévu",
    ],
    features: [
      "Techniciens qualifiés sur site",
      "Installation audiovisuelle",
      "Gestion des flux électriques",
      "Maintenance préventive et curative",
      "Hotline technique 24/7",
      "Rapport d'intervention détaillé",
    ],
    benefits: [
      "Réactivité maximale",
      "Équipes certifiées et assurées",
      "Matériel professionnel",
      "Intervention jour et nuit",
      "Compte-rendu systématique",
      "Tarifs transparents",
    ],
    methodology: [
      { title: "Audit", description: "Analyse des besoins techniques et contraintes du lieu" },
      { title: "Préparation", description: "Sélection des équipes et du matériel adapté" },
      { title: "Installation", description: "Mise en place des équipements techniques" },
      { title: "Exploitation", description: "Présence sur site et support pendant l'événement" },
      { title: "Clôture", description: "Démontage, reporting et retour d'expérience" },
    ],
    faq: [
      { question: "Vos techniciens sont-ils certifiés ?", answer: "Oui, tous nos techniciens disposent des certifications requises (habilitations électriques, CACES, etc.) et sont régulièrement formés." },
      { question: "Proposez-vous un service d'astreinte ?", answer: "Oui, nous proposons un service d'astreinte 24h/24 et 7j/7 pour les événements qui le nécessitent." },
      { question: "Pouvez-vous gérer plusieurs événements simultanés ?", answer: "Oui, notre structure nous permet de déployer plusieurs équipes en parallèle sur différents sites." },
    ],
  },
  "montage-demontage": {
    title: "Montage & Démontage de Stands",
    subtitle: "Installation professionnelle de vos espaces d'exposition",
    metaTitle: "Montage Démontage Stands Exposition | BA Attitude",
    description: "Montage et démontage professionnel de stands d'exposition, décors événementiels et structures temporaires. Équipes expérimentées, respect des délais garantis.",
    longDescription: "BA Attitude est spécialisé dans le montage et démontage de stands d'exposition pour les salons professionnels. Nos équipes expérimentées assurent une installation soignée et rapide, dans le respect des normes de sécurité et des délais imposés par les organisateurs.",
    image: serviceLocation,
    clientNeeds: [
      "Vous avez un stand à monter pour un salon professionnel",
      "Vous recherchez une équipe fiable pour le démontage de votre espace d'exposition",
      "Vous avez des contraintes de timing serrées",
      "Vous avez besoin de stocker votre stand entre deux salons",
    ],
    features: [
      "Montage de stands modulaires et sur mesure",
      "Assemblage de structures aluminium",
      "Pose de cloisons et habillages",
      "Installation de mobilier d'exposition",
      "Pose de moquette et sols techniques",
      "Démontage et conditionnement soigné",
    ],
    benefits: [
      "Équipes formées aux normes salon",
      "Respect des plannings organisateurs",
      "Matériel et outillage professionnel",
      "Gestion des badges et accès",
      "Stockage inter-salons possible",
      "Tarification à la journée ou au forfait",
    ],
    methodology: [
      { title: "Réception plans", description: "Étude des plans de montage et liste du matériel" },
      { title: "Logistique", description: "Livraison du matériel sur site selon planning" },
      { title: "Montage", description: "Installation par nos équipes selon les plans" },
      { title: "Recette", description: "Vérification avec le client, ajustements" },
      { title: "Démontage", description: "Repli, conditionnement et évacuation" },
    ],
    faq: [
      { question: "Travaillez-vous avec tous les types de stands ?", answer: "Oui, nous montons tous types de stands : modulaires (Octanorm, Maxima...), sur mesure en bois ou métal, stands parapluie et roll-up." },
      { question: "Gérez-vous les formalités auprès des organisateurs ?", answer: "Oui, nous pouvons gérer les badges, les demandes de prestations organisateur et la coordination avec la technique du lieu." },
      { question: "Proposez-vous le stockage des stands ?", answer: "Oui, nous disposons d'un espace de stockage sécurisé pour entreposer vos stands entre deux salons." },
    ],
  },
  "logistique-terrain": {
    title: "Logistique & Coordination Terrain",
    subtitle: "La logistique événementielle de A à Z",
    metaTitle: "Logistique Événementielle | Coordination Terrain | BA Attitude",
    description: "Gestion logistique complète de vos événements : transport, stockage, manutention, coordination des prestataires et pilotage terrain.",
    longDescription: "La logistique est la clé de voûte d'un événement réussi. BA Attitude prend en charge l'ensemble de la chaîne logistique de vos salons et événements professionnels : du transport au stockage, de la manutention à la coordination terrain.",
    image: serviceCorporate,
    clientNeeds: [
      "Vous avez besoin de transporter du matériel pour un salon",
      "Vous recherchez un coordinateur terrain pour votre événement",
      "Vous souhaitez externaliser toute la logistique de vos participations salon",
      "Vous avez besoin de stocker du matériel événementiel",
    ],
    features: [
      "Transport de matériel événementiel",
      "Manutention et levage",
      "Stockage sécurisé",
      "Coordination des prestataires",
      "Gestion des flux et planning",
      "Reporting en temps réel",
    ],
    benefits: [
      "Flotte de véhicules adaptés",
      "Entrepôt sécurisé et accessible",
      "Équipes de manutentionnaires",
      "Suivi GPS des livraisons",
      "Assurance tous risques",
      "Réactivité 7j/7",
    ],
    methodology: [
      { title: "Inventaire", description: "Liste précise du matériel à gérer" },
      { title: "Planning", description: "Rétroplanning logistique détaillé" },
      { title: "Transport", description: "Acheminement sécurisé sur site" },
      { title: "Coordination", description: "Pilotage terrain et interface prestataires" },
      { title: "Repli", description: "Évacuation et retour au dépôt" },
    ],
    faq: [
      { question: "Quelle est votre zone d'intervention pour le transport ?", answer: "Nous couvrons toute la France et l'Europe. Pour les destinations plus lointaines, nous travaillons avec des partenaires de confiance." },
      { question: "Proposez-vous un service de régisseur ?", answer: "Oui, nous pouvons mettre à disposition un régisseur dédié pour coordonner l'ensemble des prestataires sur votre événement." },
      { question: "Comment gérez-vous les urgences ?", answer: "Nous disposons d'une astreinte logistique et pouvons mobiliser des moyens supplémentaires sous 24h en cas d'imprévu." },
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
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {service.longDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un Devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  <Phone className="w-4 h-4 mr-2" />
                  Contacter un Expert
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Needs */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-card-foreground mb-8 text-center">
              Ce service est fait pour vous si...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.clientNeeds.map((need, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{need}</span>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Features & Benefits */}
      <ParallaxSection className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <FadeInSection>
              <div className="bg-card border border-border rounded-lg p-8 h-full">
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
              </div>
            </FadeInSection>

            {/* Benefits */}
            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8 h-full">
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
              </div>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Methodology */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Notre approche
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
              Méthodologie <span className="text-gradient-gold">d'intervention</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {service.methodology.map((step, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
              Questions <span className="text-gradient-gold">fréquentes</span>
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {service.faq.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-3">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Intéressé par ce service ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un Devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  <Phone className="w-4 h-4 mr-2" />
                  06 01 59 19 20
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}