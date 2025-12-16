import { motion } from "framer-motion";
import { MessageSquare, Palette, Wrench, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Brief & Écoute",
    description: "Nous prenons le temps de comprendre votre vision, vos objectifs et vos contraintes pour créer un projet sur mesure.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Conception Créative",
    description: "Nos designers élaborent des concepts uniques avec visualisations 3D et plans détaillés pour validation.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Production & Installation",
    description: "Nos artisans fabriquent chaque élément dans nos ateliers. L'installation est assurée par nos équipes expertes.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "L'Événement & Démontage",
    description: "Nous restons présents pendant votre événement et assurons un démontage soigné avec remise en état des lieux.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Notre Méthodologie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
          >
            Un processus <span className="text-gradient-gold">éprouvé</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <span className="text-7xl font-display font-bold text-primary/10">
                  {step.number}
                </span>
                <h3 className="text-2xl font-display font-semibold text-card-foreground mb-3 -mt-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
