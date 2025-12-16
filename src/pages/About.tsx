import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Chaque projet est traité avec le plus haut niveau d'exigence et d'attention aux détails.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Votre participation est essentielle : c'est à travers elle que se construit notre confiance réciproque.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Notre passion pour la décoration événementielle se reflète dans chaque création.",
  },
  {
    icon: Shield,
    title: "Engagement",
    description: "Aucune mauvaise surprise : chaque détail est analysé, proposé et mis en œuvre avec votre accord.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Notre Histoire
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Plus de 15 ans au service de l'
              <span className="text-gradient-gold">excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              BA ATTITUDE est spécialiste de la décoration événementielle en France 
              et à l'étranger. Pour chaque projet, un interlocuteur vous est entièrement 
              dédié, du brief initial au démontage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="L'équipe BA Attitude"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-lg -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Notre Philosophie
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
                "Choisis un travail que tu aimes, et tu n'auras pas à travailler un seul jour de ta vie"
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cette citation de Confucius résume parfaitement notre état d'esprit. 
                Notre passion pour la décoration événementielle nous pousse à donner 
                le meilleur de nous-mêmes sur chaque projet.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dans notre atelier, nos collaborateurs et nos partenaires mettent en œuvre 
                tous les moyens de construction, de peinture, de tapisserie, de métallerie, 
                de logistique pour mener à bien notre mission : vous livrer le meilleur 
                de leurs savoir-faire.
              </p>
              <p className="text-lg text-card-foreground font-medium">
                Nous voulons que nos réalisations restent gravées dans vos mémoires 
                et celles de vos clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
            >
              Nos Valeurs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
            >
              Ce qui nous <span className="text-gradient-gold">définit</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Années d'expérience" },
              { value: "80%", label: "Clients agences" },
              { value: "500+", label: "Événements réalisés" },
              { value: "100%", label: "Clients satisfaits" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6"
          >
            Prêt à travailler avec nous ?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Contactez-nous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
