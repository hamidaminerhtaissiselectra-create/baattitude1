import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels types d'événements prenez-vous en charge ?",
    answer: "Nous intervenons sur tous types d'événements : lancements de produits, galas, séminaires, conventions, soirées privées, mariages haut de gamme, pop-up stores, fashion weeks et bien plus. Chaque projet est unique et traité avec la même exigence d'excellence.",
  },
  {
    question: "Intervenez-vous à l'international ?",
    answer: "Oui, nous avons une solide expérience à l'international. Nous avons réalisé des projets en Europe, au Moyen-Orient, en Asie et aux États-Unis. Notre réseau de partenaires locaux nous permet de garantir la même qualité d'exécution partout dans le monde.",
  },
  {
    question: "Quel est votre délai minimum pour un projet ?",
    answer: "Nous recommandons un délai de 4 à 6 semaines pour un projet standard. Cependant, grâce à notre expertise et nos ressources, nous pouvons intervenir en urgence avec des délais plus courts selon la disponibilité de nos équipes.",
  },
  {
    question: "Proposez-vous des services de location uniquement ?",
    answer: "Absolument ! Notre catalogue de location comprend du mobilier haut de gamme, de l'éclairage professionnel, des textiles, de la vaisselle et de nombreux accessoires décoratifs. La location peut être indépendante ou intégrée à une prestation complète.",
  },
  {
    question: "Comment se déroule une première collaboration ?",
    answer: "Tout commence par un brief approfondi pour comprendre vos besoins, votre vision et vos contraintes. Nous vous proposons ensuite des concepts créatifs avec visualisations 3D. Une fois validé, nous prenons en charge la production, l'installation et le démontage.",
  },
  {
    question: "Travaillez-vous avec des agences événementielles ?",
    answer: "Oui, 80% de notre clientèle est composée d'agences événementielles. Nous sommes habitués à travailler en marque blanche et à nous intégrer parfaitement dans vos processus. Discrétion et professionnalisme sont au cœur de notre approche.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
            >
              Questions Fréquentes
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
            >
              Tout ce que vous devez <span className="text-gradient-gold">savoir</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-card-foreground hover:text-primary font-medium py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
