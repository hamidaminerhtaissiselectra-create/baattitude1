import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";

const services = [
  {
    title: "Décoration Éphémère",
    description: "Conception et installation de décors temporaires sur mesure pour sublimer vos événements.",
    image: serviceDecoration,
    href: "/services/decoration-ephemere",
  },
  {
    title: "Scénographie",
    description: "Création d'espaces immersifs et d'ambiances visuelles qui marquent les esprits.",
    image: serviceScenography,
    href: "/services/scenographie",
  },
  {
    title: "Événements Corporatifs",
    description: "Décoration complète pour séminaires, lancements de produits et galas d'entreprise.",
    image: serviceCorporate,
    href: "/services/evenements-corporatifs",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Nos Expertises
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground mb-6"
          >
            Des services{" "}
            <span className="text-gradient-gold">sur mesure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            De la conception à la réalisation, nous vous accompagnons à chaque étape 
            pour créer des événements d'exception.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link
                to={service.href}
                className="group block relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            Découvrir tous nos services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
