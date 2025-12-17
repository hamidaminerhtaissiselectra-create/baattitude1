import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated Decorative Element */}
      <motion.div 
        style={{ y: decorY, opacity: decorOpacity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
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
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, rotateX, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px -20px rgba(212, 175, 55, 0.3)"
      }}
      className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors duration-500"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
      >
        <Quote className="w-10 h-10 text-primary/30 mb-6" />
      </motion.div>
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
  );
}
