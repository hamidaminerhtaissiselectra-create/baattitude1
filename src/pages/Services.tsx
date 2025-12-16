import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceLogistique from "@/assets/service-logistique.jpg";
import serviceInternational from "@/assets/service-international.jpg";

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
              { step: "01", title: "Brief", description: "Analyse de vos besoins et définition du projet" },
              { step: "02", title: "Conception", description: "Design et visualisation 3D de votre événement" },
              { step: "03", title: "Installation", description: "Montage professionnel par notre équipe" },
              { step: "04", title: "Démontage", description: "Repli soigné et nettoyage des lieux" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
