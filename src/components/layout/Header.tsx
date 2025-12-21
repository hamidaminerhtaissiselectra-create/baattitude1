import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "Salons Professionnels", href: "/services/salons-professionnels" },
  { name: "Support Technique", href: "/services/support-technique" },
  { name: "Montage & Démontage", href: "/services/montage-demontage" },
  { name: "Logistique & Coordination", href: "/services/logistique-coordination" },
  { name: "Scénographie Stands", href: "/services/scenographie-stands" },
  { name: "International", href: "/services/international" },
];

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Réalisations", href: "/realisations" },
  { name: "Zones d'intervention", href: "/zones-intervention" },
  { name: "International", href: "/international" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl lg:text-3xl font-display font-bold text-primary tracking-tight">
                BA
              </span>
              <span className="text-2xl lg:text-3xl font-display font-light text-card-foreground tracking-tight ml-1">
                ATTITUDE
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 flex items-center gap-1",
                    location.pathname === item.href || (item.hasDropdown && location.pathname.startsWith("/services"))
                      ? "text-primary"
                      : "text-card-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  {(location.pathname === item.href || (item.hasDropdown && location.pathname.startsWith("/services"))) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold"
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block px-4 py-3 text-sm text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <div className="border-t border-border">
                          <Link
                            to="/services"
                            className="block px-4 py-3 text-sm text-primary font-medium hover:bg-primary/10 transition-colors"
                          >
                            Tous nos services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+33601591920"
              className="flex items-center gap-2 text-sm text-card-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>06 01 59 19 20</span>
            </a>
            <Button variant="gold" asChild>
              <Link to="/contact">Demander un Devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-card-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "block py-3 text-lg font-medium transition-colors border-b border-border",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-card-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="pl-4 py-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/contact">Demander un Devis</Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}