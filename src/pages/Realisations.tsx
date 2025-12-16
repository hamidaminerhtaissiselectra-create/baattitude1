import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceLogistique from "@/assets/service-logistique.jpg";
import serviceInternational from "@/assets/service-international.jpg";
import heroImage from "@/assets/hero-event.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { FeaturedProject } from "@/components/realisations/FeaturedProject";

const categories = ["Tous", "Luxe", "Corporate", "Événementiel"];

const projects = [
  {
    id: 1,
    title: "Gala Annuel DIOR",
    client: "DIOR",
    category: "Luxe",
    image: heroImage,
    description: "Décoration complète pour le gala annuel de la maison DIOR",
    year: "2023",
    location: "Paris, France",
  },
  {
    id: 2,
    title: "Lancement Produit BVLGARI",
    client: "BVLGARI",
    category: "Luxe",
    image: serviceDecoration,
    description: "Scénographie immersive pour le lancement d'une nouvelle collection",
    year: "2023",
    location: "Rome, Italie",
  },
  {
    id: 3,
    title: "Convention Internationale GOOGLE",
    client: "GOOGLE",
    category: "Corporate",
    image: serviceScenography,
    description: "Aménagement et décoration de l'espace convention",
    year: "2023",
    location: "Dublin, Irlande",
  },
  {
    id: 4,
    title: "Dîner Fashion Week",
    client: "FENDI",
    category: "Luxe",
    image: serviceCorporate,
    description: "Décoration du dîner VIP pendant la Fashion Week Paris",
    year: "2022",
    location: "Paris, France",
  },
  {
    id: 5,
    title: "Séminaire ARAMCO",
    client: "ARAMCO",
    category: "Corporate",
    image: serviceInternational,
    description: "Organisation complète du séminaire international",
    year: "2022",
    location: "Riyad, Arabie Saoudite",
  },
  {
    id: 6,
    title: "Soirée de Gala CHAUMET",
    client: "CHAUMET Paris",
    category: "Luxe",
    image: serviceLocation,
    description: "Mise en scène luxueuse pour la soirée anniversaire",
    year: "2022",
    location: "Paris, France",
  },
  {
    id: 7,
    title: "Événement G20",
    client: "G20",
    category: "Événementiel",
    image: serviceLogistique,
    description: "Logistique et décoration pour l'événement officiel",
    year: "2021",
    location: "Paris, France",
  },
  {
    id: 8,
    title: "Expérience DisneyLand",
    client: "DisneyLand Paris",
    category: "Événementiel",
    image: aboutTeam,
    description: "Décoration thématique pour un événement privé",
    year: "2021",
    location: "Marne-la-Vallée, France",
  },
];

const allClients = [
  "DIOR", "BVLGARI", "CHAUMET", "FENDI", "GIVENCHY", "GOOGLE", 
  "ARAMCO", "L'ORÉAL", "CARTIER", "CHANEL", "HERMÈS", "LOUIS VUITTON"
];

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Tous" || project.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Nos <span className="text-gradient-gold">réalisations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Découvrez une sélection de nos projets les plus emblématiques 
              réalisés pour des marques prestigieuses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projets réalisés" },
              { value: "12", label: "Pays d'intervention" },
              { value: "50+", label: "Clients prestige" },
              { value: "15", label: "Années d'expertise" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProject />

      {/* Filters */}
      <section className="py-8 bg-muted border-y border-border sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-card-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/realisations/${project.id}`}
                    className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-background/80 text-card-foreground text-xs font-medium rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-primary mb-1">{project.client}</p>
                          <h3 className="text-xl font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {project.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            📍 {project.location}
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
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            Ils nous ont fait confiance
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-display font-bold text-card-foreground mb-8"
          >
            Des marques <span className="text-gradient-gold">prestigieuses</span>
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-xl md:text-2xl font-display text-muted-foreground/50"
          >
            {allClients.map((client) => (
              <span key={client} className="hover:text-primary transition-colors cursor-default">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4"
          >
            Votre projet sera le prochain ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Discutons de votre événement et créons ensemble une expérience inoubliable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Démarrer un projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
