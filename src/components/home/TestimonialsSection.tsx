import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BA Attitude a su transformer notre vision en une réalité spectaculaire. Leur professionnalisme et leur créativité sont remarquables.",
    author: "Marie Dupont",
    role: "Directrice Événementiel",
    company: "Agence Premier",
  },
  {
    quote: "Une équipe exceptionnelle qui comprend les exigences du luxe. Chaque détail est parfait, du brief au démontage.",
    author: "Jean-Pierre Martin",
    role: "Chef de Projet",
    company: "EventLux Paris",
  },
  {
    quote: "Partenaires fidèles depuis des années, BA Attitude ne cesse de nous impressionner par leur réactivité et leur expertise.",
    author: "Sophie Laurent",
    role: "Responsable Communication",
    company: "Maison de Luxe",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
          >
            Ce que nos{" "}
            <span className="text-gradient-gold">clients</span>
            {" "}disent
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <blockquote className="text-card-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-card-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary mt-1">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
