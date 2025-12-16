import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-9xl font-display font-bold text-primary/20">
              404
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4"
          >
            Page non trouvée
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="gold" asChild>
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
