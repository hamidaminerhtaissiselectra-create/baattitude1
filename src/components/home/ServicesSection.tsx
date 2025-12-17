import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Nos Expertises
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground mb-6"
          >
            Des services{" "}
            <span className="text-gradient-gold">sur mesure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-muted-foreground text-lg"
          >
            De la conception à la réalisation, nous vous accompagnons à chaque étape 
            pour créer des événements d'exception.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
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

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
    >
      <Link
        to={service.href}
        className="group block relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500"
      >
        {/* Image with Parallax */}
        <div className="aspect-[4/5] overflow-hidden relative">
          <motion.img
            src={service.image}
            alt={service.title}
            style={{ y: imageY, scale: imageScale }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {service.description}
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
            >
              <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
