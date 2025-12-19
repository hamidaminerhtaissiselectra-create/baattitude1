import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Globe, Truck, Clock, Users, Phone, Building2 } from "lucide-react";
import { FadeInSection, StaggerContainer, staggerItem } from "@/components/animations/ParallaxSection";
import { LocalBusinessSchema, FAQSchema, SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";
import heroImage from "@/assets/hero-event.jpg";

const regions = [
  {
    name: "Île-de-France",
    cities: ["Paris", "La Défense", "Villepinte", "Le Bourget", "Versailles"],
    venues: ["Paris Expo Porte de Versailles", "Paris Nord Villepinte", "Palais des Congrès"],
    majorEvents: ["Maison & Objet", "SIAL Paris", "Première Vision"]
  },
  {
    name: "Auvergne-Rhône-Alpes",
    cities: ["Lyon", "Grenoble", "Saint-Étienne", "Chambéry", "Annecy"],
    venues: ["Eurexpo Lyon", "Centre de Congrès de Lyon", "Alpexpo Grenoble"],
    majorEvents: ["Sirha", "Pollutec", "Global Industrie"]
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    cities: ["Marseille", "Nice", "Cannes", "Monaco", "Aix-en-Provence"],
    venues: ["Parc Chanot", "Palais des Festivals Cannes", "Grimaldi Forum Monaco"],
    majorEvents: ["MIPIM", "MAPIC", "Cannes Lions"]
  },
  {
    name: "Nouvelle-Aquitaine",
    cities: ["Bordeaux", "Toulouse", "Pau", "La Rochelle", "Biarritz"],
    venues: ["Parc des Expositions Bordeaux", "MEETT Toulouse", "Zénith de Pau"],
    majorEvents: ["Vinexpo", "Vinitech-Sifel", "Siane"]
  },
  {
    name: "Hauts-de-France",
    cities: ["Lille", "Amiens", "Roubaix", "Dunkerque", "Calais"],
    venues: ["Lille Grand Palais", "Zénith de Lille", "Stade Pierre Mauroy"],
    majorEvents: ["World Forum Lille", "SIMI Nord", "Salon des Entrepreneurs"]
  },
  {
    name: "Grand Est",
    cities: ["Strasbourg", "Metz", "Nancy", "Reims", "Mulhouse"],
    venues: ["Parc des Expositions Strasbourg", "Metz Expo", "Centre Prouvé Nancy"],
    majorEvents: ["Foire Européenne", "Salon Made in France Est"]
  },
  {
    name: "Pays de la Loire",
    cities: ["Nantes", "Le Mans", "Angers", "Saint-Nazaire", "La Roche-sur-Yon"],
    venues: ["Parc des Expositions Beaujoire", "Cité des Congrès Nantes", "Exponantes"],
    majorEvents: ["Salon du Végétal", "Serbotel", "Carrefour International du Bois"]
  },
  {
    name: "Bretagne",
    cities: ["Rennes", "Brest", "Lorient", "Saint-Malo", "Vannes"],
    venues: ["Parc Expo Rennes", "Brest Arena", "Palais des Congrès Saint-Malo"],
    majorEvents: ["CFIA Rennes", "Salon Nautique Brest", "Breizh Fab"]
  }
];

const faqData = [
  {
    question: "Dans quelles villes intervenez-vous en France ?",
    answer: "BA Attitude intervient sur l'ensemble du territoire français. Nous sommes particulièrement présents en Île-de-France, Lyon, Marseille, Bordeaux, Lille, Nantes, Strasbourg et Toulouse. Notre réseau de partenaires locaux nous permet de couvrir toutes les régions avec la même qualité de service."
  },
  {
    question: "Quel est votre délai d'intervention sur site ?",
    answer: "Nous garantissons une intervention sous 24 à 48 heures en Île-de-France et sous 72 heures sur le reste du territoire français. Pour les événements internationaux, le délai dépend de la destination et de la logistique requise."
  },
  {
    question: "Intervenez-vous à l'international ?",
    answer: "Oui, BA Attitude intervient à l'international sur tous les continents. Nous accompagnons nos clients français sur les salons européens (Allemagne, Italie, Espagne, Royaume-Uni) et internationaux (États-Unis, Moyen-Orient, Asie). Notre équipe gère la logistique, les formalités douanières et la coordination locale."
  },
  {
    question: "Comment gérez-vous la logistique pour les salons en région ?",
    answer: "Nous disposons d'un réseau de partenaires logistiques dans chaque grande région française. Nous organisons le transport du matériel depuis notre entrepôt ou directement depuis vos locaux, avec un suivi GPS en temps réel. Nos équipes se déplacent sur site pour le montage et le démontage."
  },
  {
    question: "Proposez-vous un accompagnement régulier pour plusieurs salons par an ?",
    answer: "Oui, nous proposons des contrats-cadres pour les entreprises participant à plusieurs salons par an. Cela inclut une tarification préférentielle, un chef de projet dédié, le stockage de votre matériel entre les salons et une planification annuelle optimisée."
  },
  {
    question: "Quels types de salons couvrez-vous ?",
    answer: "Nous intervenons sur tous types de salons professionnels : industrie, agroalimentaire, mode et textile, high-tech, bâtiment, automobile, luxe, santé, etc. Notre expertise couvre les foires, expositions, congrès et tous les événements B2B."
  }
];

const stats = [
  { value: "500+", label: "Salons accompagnés par an", icon: Building2 },
  { value: "15+", label: "Années d'expertise", icon: Clock },
  { value: "24h", label: "Délai d'intervention IDF", icon: Truck },
  { value: "100%", label: "Territoire français couvert", icon: MapPin }
];

export default function ZonesIntervention() {
  return (
    <Layout>
      <SEOHead
        title="Zones d'Intervention France & International | BA Attitude"
        description="BA Attitude intervient sur tous vos salons professionnels en France et à l'international. Montage, démontage de stands et logistique événementielle sur l'ensemble du territoire."
        canonical="https://baattitude.fr/zones-intervention"
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Zones d'intervention", url: "https://baattitude.fr/zones-intervention" }
      ]} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Intervention salons professionnels France"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Couverture nationale & internationale
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Zones d'Intervention pour vos <span className="text-gradient-gold">Salons Professionnels</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              BA Attitude intervient sur l'ensemble du territoire français et à l'international pour accompagner vos participations à des salons professionnels, foires et événements B2B. Notre organisation logistique et notre réseau de partenaires nous permettent de vous garantir un service de qualité partout où vous exposez.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  <Phone className="w-4 h-4 mr-2" />
                  06 01 59 19 20
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction SEO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-card-foreground mb-6 text-center">
              Une Présence Nationale pour vos <span className="text-gradient-gold">Événements B2B</span>
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="mb-4">
                Depuis plus de 15 ans, <strong>BA Attitude</strong> accompagne les entreprises françaises et internationales sur leurs participations à des salons professionnels partout en France. Notre expertise couvre l'ensemble de la chaîne de valeur : de la conception de votre stand à son installation, de la coordination terrain au démontage final.
              </p>
              <p className="mb-4">
                Que vous exposiez à <strong>Paris Expo Porte de Versailles</strong>, à <strong>Eurexpo Lyon</strong>, au <strong>Parc Chanot de Marseille</strong> ou au <strong>Palais des Festivals de Cannes</strong>, notre équipe se déplace avec le même niveau d'exigence et de professionnalisme. Nous connaissons les spécificités de chaque lieu d'exposition, les réglementations locales et les interlocuteurs clés.
              </p>
              <p className="mb-4">
                Notre organisation logistique repose sur un entrepôt central en région parisienne et un réseau de partenaires locaux dans chaque grande métropole. Cette structure nous permet d'optimiser les coûts de transport tout en garantissant une réactivité maximale, même pour les demandes de dernière minute.
              </p>
              <p>
                Pour les salons internationaux, nous disposons d'une équipe dédiée qui gère les formalités douanières, la coordination avec les prestataires locaux et l'adaptation aux normes de chaque pays. Allemagne, Italie, Espagne, Royaume-Uni, États-Unis, Moyen-Orient, Asie : BA Attitude vous accompagne sur tous les continents.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Couverture France
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Nos Régions d'<span className="text-gradient-gold">Intervention</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Nous intervenons sur les principaux sites d'exposition et centres de congrès de chaque région française.
            </p>
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <motion.div
                key={region.name}
                variants={staggerItem}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-display font-bold text-card-foreground">
                    {region.name}
                  </h3>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">Villes</p>
                  <p className="text-sm text-muted-foreground">
                    {region.cities.join(", ")}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">Lieux phares</p>
                  <ul className="space-y-1">
                    {region.venues.slice(0, 2).map((venue) => (
                      <li key={venue} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        {venue}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* International */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Accompagnement international
              </span>
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
                Vos Salons à l'<span className="text-gradient-gold">International</span>
              </h2>
              <div className="prose text-muted-foreground">
                <p className="mb-4">
                  BA Attitude accompagne les entreprises françaises sur les principaux salons internationaux. Notre équipe gère l'ensemble de la logistique export : transport, formalités douanières, coordination avec les partenaires locaux.
                </p>
                <p>
                  Nous intervenons régulièrement sur les salons majeurs en Europe (Foire de Hanovre, Fiera Milano, IFEMA Madrid), aux États-Unis (CES Las Vegas, NRF New York) et au Moyen-Orient (Gulfood Dubaï, Arab Health).
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { zone: "Europe", countries: "Allemagne, Italie, Espagne, UK, Benelux" },
                  { zone: "Amérique", countries: "États-Unis, Canada, Mexique, Brésil" },
                  { zone: "Moyen-Orient", countries: "Émirats, Arabie Saoudite, Qatar" },
                  { zone: "Asie-Pacifique", countries: "Chine, Japon, Singapour, Australie" }
                ].map((item) => (
                  <div key={item.zone} className="bg-card border border-border rounded-lg p-4">
                    <Globe className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-card-foreground">{item.zone}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.countries}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Organization Logistique */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-card-foreground">
              Notre Organisation <span className="text-gradient-gold">Logistique</span>
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Entrepôt Central",
                description: "Basé en Île-de-France, notre entrepôt de 2000m² permet de stocker votre matériel entre les salons et de préparer les expéditions."
              },
              {
                icon: Truck,
                title: "Flotte Dédiée",
                description: "Véhicules utilitaires et semi-remorques pour acheminer votre matériel partout en France avec suivi GPS en temps réel."
              },
              {
                icon: Users,
                title: "Équipes Terrain",
                description: "Monteurs, techniciens et régisseurs qualifiés se déplacent sur site pour l'installation et la coordination de votre stand."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-card border border-border rounded-xl p-8 text-center"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-card-foreground">
              Questions <span className="text-gradient-gold">Fréquentes</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Tout ce que vous devez savoir sur nos zones d'intervention
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Un Salon en <span className="text-gradient-gold">Vue</span> ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que votre prochain événement soit à Paris, Lyon, Marseille ou à l'international, BA Attitude vous accompagne. Contactez-nous pour obtenir un devis personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
