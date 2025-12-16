import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const services = [
  { name: "Décoration Éphémère", href: "/services/decoration-ephemere" },
  { name: "Scénographie", href: "/services/scenographie" },
  { name: "Location de Matériel", href: "/services/location-materiel" },
  { name: "Événements Corporatifs", href: "/services/evenements-corporatifs" },
  { name: "Logistique", href: "/services/logistique" },
  { name: "Support International", href: "/services/support-international" },
];

const links = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
  { name: "Mentions Légales", href: "/mentions-legales" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-primary">
                BA
              </span>
              <span className="text-2xl font-display font-light text-card-foreground ml-1">
                ATTITUDE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Spécialiste de la décoration événementielle haut de gamme. 
              Du brief initial au démontage, nous créons des expériences inoubliables.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Paris & Île-de-France · International
              </span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  16 Rue des Pendants<br />
                  77340 Pontault-Combault
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+33601591920"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  06 01 59 19 20
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@baattitude.fr"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@baattitude.fr
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BA Attitude. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">
            Décoration événementielle haut de gamme depuis plus de 15 ans
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
