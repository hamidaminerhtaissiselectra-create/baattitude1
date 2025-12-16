import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceLogistique from "@/assets/service-logistique.jpg";
import serviceInternational from "@/assets/service-international.jpg";
import { FAQSection } from "@/components/home/FAQSection";

const services = [
  {
    id: "decoration-ephemere",
    title: "Décoration Éphémère",
    description: "Conception et installation de décors temporaires pour événements. Nous créons des ambiances uniques qui marquent les esprits.",
    image: serviceDecoration,
    features: ["Décors sur mesure", "Installation rapide", "Démontage inclus"],
  },
  {
    id: "scenographie",
    title: "Scénographie",
    description: "Création de l'espace et de l'ambiance visuelle. Design d'événement et conception d'espaces immersifs.",
    image: serviceScenography,
    features: ["Conception 3D", "Design spatial", "Ambiances lumineuses"],
  },
  {
    id: "location-materiel",
    title: "Location de Matériel",
    description: "Mise à disposition d'un catalogue de mobilier, éclairage et accessoires haut de gamme pour sublimer vos événements.",
    image: serviceLocation,
    features: ["Mobilier de luxe", "Éclairage professionnel", "Accessoires déco"],
  },
  {
    id: "evenements-corporatifs",
    title: "Événements Corporatifs",
    description: "Gestion complète de la décoration pour séminaires, lancements de produits et galas d'entreprise.",
    image: serviceCorporate,
    features: ["Séminaires", "Lancements produits", "Galas"],
  },
  {
    id: "logistique",
    title: "Logistique",
    description: "Expertise en transport, montage, installation et démontage rapide et efficace pour garantir le succès de votre événement.",
    image: serviceLogistique,
    features: ["Transport sécurisé", "Montage expert", "Démontage rapide"],
  },
  {
    id: "support-international",
    title: "Support International",
    description: "Capacité à gérer des projets de décoration événementielle à l'étranger avec la même qualité d'exécution.",
    image: serviceInternational,
    features: ["Projets internationaux", "Coordination globale", "Expertise export"],
  },
];

const advantages = [
  "Un interlocuteur unique du brief au démontage",
  "Visualisation 3D avant fabrication",
  "Ateliers intégrés de 800m²",
  "Disponibilité 24/7 pendant vos événements",
  "Réseau de partenaires internationaux",
  "15 ans d'expérience dans le luxe",
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Nos Expertises
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Des services <span className="text-gradient-gold">complets</span> pour vos événements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Du brief initial au démontage, nous vous accompagnons à chaque étape 
              pour créer des événements d'exception.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
            >
              Notre Processus
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
            >
              Comment nous <span className="text-gradient-gold">travaillons</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Brief", description: "Analyse approfondie de vos besoins, contraintes et objectifs. Visite du lieu si nécessaire." },
              { step: "02", title: "Conception", description: "Design créatif avec visualisation 3D et planches tendances pour validation." },
              { step: "03", title: "Installation", description: "Montage professionnel par nos équipes formées. Coordination sur site jusqu'à la livraison." },
              { step: "04", title: "Démontage", description: "Repli soigné après l'événement. Nettoyage et remise en état des lieux." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4"
          >
            Un projet en tête ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
