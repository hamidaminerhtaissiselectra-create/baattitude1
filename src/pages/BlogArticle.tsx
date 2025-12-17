import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLogistique from "@/assets/service-logistique.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceInternational from "@/assets/service-international.jpg";

const articlesData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "organisation-technique-salon-professionnel": {
    title: "Organisation technique d'un salon professionnel : le guide complet",
    excerpt: "De la planification au démontage, découvrez les étapes clés pour réussir votre participation à un salon professionnel et optimiser votre retour sur investissement.",
    image: heroImage,
    category: "Salons",
    author: "Équipe BA ATTITUDE",
    date: "15 Décembre 2024",
    readTime: "8 min",
    content: [
      "Participer à un salon professionnel représente un investissement significatif pour une entreprise. Entre la location de l'espace, la conception du stand, la logistique et les ressources humaines mobilisées, les coûts peuvent rapidement s'accumuler. Une organisation technique rigoureuse est donc essentielle pour maximiser le retour sur investissement.",
      
      "## Étape 1 : La planification en amont",
      "La réussite d'un salon se prépare plusieurs mois à l'avance. Dès que vous avez confirmé votre participation, établissez un rétroplanning détaillé incluant : le choix du prestataire pour le stand, les validations créatives, les délais de fabrication, la logistique de transport et les autorisations nécessaires auprès de l'organisateur.",
      
      "## Étape 2 : Le choix du stand et de la scénographie",
      "Votre stand est votre vitrine pendant l'événement. Il doit refléter l'image de votre entreprise tout en étant fonctionnel. Pensez à l'accueil des visiteurs, aux espaces de démonstration, aux zones de discussion privées si nécessaire. Un bon prestataire saura vous conseiller sur les meilleures options en fonction de votre budget et de vos objectifs.",
      
      "## Étape 3 : La coordination logistique",
      "C'est souvent l'étape la plus complexe. Elle comprend le transport du matériel, le stockage éventuel, la manutention sur site, le montage dans les temps impartis par l'organisateur. Faire appel à un prestataire expérimenté comme BA ATTITUDE vous garantit une coordination sans faille.",
      
      "## Étape 4 : Le montage et les tests",
      "Le jour J du montage, chaque minute compte. Nos équipes sont formées pour optimiser les temps d'installation tout en garantissant la qualité. Prévoyez toujours une marge pour les imprévus et testez tous vos équipements (éclairage, écrans, connexions) avant l'ouverture.",
      
      "## Étape 5 : Pendant le salon",
      "Votre prestataire doit rester joignable pendant toute la durée de l'événement pour gérer les éventuels ajustements ou problèmes techniques. Chez BA ATTITUDE, nous assurons une permanence 24/7 sur les salons que nous équipons.",
      
      "## Étape 6 : Le démontage",
      "Souvent négligé, le démontage est pourtant crucial. Il doit être aussi bien organisé que le montage pour éviter les pénalités de retard et préserver votre matériel pour de futures utilisations. Nous assurons le repli complet, le nettoyage et la remise en état des lieux.",
      
      "## Conclusion",
      "L'organisation technique d'un salon professionnel ne s'improvise pas. En vous entourant de partenaires expérimentés et en planifiant chaque étape avec rigueur, vous maximisez vos chances de succès. N'hésitez pas à nous contacter pour discuter de vos prochains projets."
    ]
  },
  "logistique-evenementielle-internationale": {
    title: "Logistique événementielle internationale : défis et solutions",
    excerpt: "Comment organiser la logistique d'un événement à l'étranger ? Transport, douanes, coordination locale : nos conseils d'experts.",
    image: serviceInternational,
    category: "International",
    author: "Équipe BA ATTITUDE",
    date: "10 Décembre 2024",
    readTime: "6 min",
    content: [
      "Organiser un événement à l'international ajoute une couche de complexité significative à la logistique. Décalages horaires, réglementations douanières, partenaires locaux à coordonner... Voici nos conseils pour réussir vos projets internationaux.",
      
      "## Les défis spécifiques de l'international",
      "Chaque pays a ses propres réglementations concernant l'importation temporaire de matériel événementiel. Les documents douaniers (carnets ATA, déclarations d'importation) doivent être préparés avec soin pour éviter les blocages à la frontière.",
      
      "## La coordination multi-fuseau horaire",
      "Travailler avec des équipes dans différents fuseaux horaires nécessite une organisation impeccable. Définissez clairement les créneaux de communication et utilisez des outils collaboratifs adaptés.",
      
      "## Le choix des partenaires locaux",
      "Disposer d'un réseau de partenaires fiables dans les pays où vous intervenez est essentiel. Chez BA ATTITUDE, nous avons développé des relations de confiance avec des prestataires locaux dans plus de 12 pays.",
      
      "## Anticiper les imprévus",
      "À l'international, les imprévus sont plus fréquents et plus complexes à gérer. Prévoyez toujours des plans B et des marges de sécurité dans vos plannings."
    ]
  },
  "montage-demontage-stands-bonnes-pratiques": {
    title: "Montage et démontage de stands : les bonnes pratiques",
    excerpt: "Optimisez vos temps de montage et démontage grâce à nos conseils issus de 15 ans d'expérience sur les plus grands salons.",
    image: serviceLogistique,
    category: "Conseils",
    author: "Équipe BA ATTITUDE",
    date: "5 Décembre 2024",
    readTime: "5 min",
    content: [
      "Le montage et le démontage sont des phases critiques de tout événement. Un retard peut entraîner des pénalités, du stress et une image dégradée auprès de vos visiteurs. Voici nos meilleures pratiques.",
      
      "## Préparer le montage en amont",
      "Une bonne préparation fait toute la différence. Plans détaillés, listes de matériel, fiches de montage... Tout doit être documenté et partagé avec les équipes terrain.",
      
      "## Optimiser la logistique d'accès",
      "Connaître parfaitement les contraintes d'accès au site (horaires, zones de déchargement, ascenseurs) permet d'éviter les temps morts.",
      
      "## Former les équipes",
      "Nos monteurs sont formés aux techniques spécifiques de chaque type de stand et aux normes de sécurité en vigueur sur les parcs d'exposition.",
      
      "## Anticiper le démontage",
      "Le démontage commence dès la conception du stand. Privilégiez les systèmes modulaires qui se démontent rapidement et se stockent facilement."
    ]
  },
  "tendances-stands-2024": {
    title: "Tendances des stands d'exposition en 2024",
    excerpt: "Éco-conception, technologie immersive, espaces modulables : les grandes tendances qui transforment les stands sur les salons professionnels.",
    image: serviceScenography,
    category: "Salons",
    author: "Équipe BA ATTITUDE",
    date: "28 Novembre 2024",
    readTime: "7 min",
    content: [
      "Les stands d'exposition évoluent constamment pour répondre aux attentes des visiteurs et aux enjeux environnementaux. Découvrez les tendances majeures de 2024.",
      
      "## L'éco-conception au cœur des préoccupations",
      "Les exposants sont de plus en plus sensibles à l'impact environnemental de leurs stands. Matériaux recyclés, stands réutilisables, réduction des déchets... L'éco-conception devient un critère de choix.",
      
      "## La technologie immersive",
      "Réalité augmentée, écrans interactifs, expériences sensorielles... Les technologies immersives permettent de créer des expériences mémorables pour les visiteurs.",
      
      "## La modularité et la flexibilité",
      "Les stands modulables qui s'adaptent à différentes configurations et tailles d'espace gagnent en popularité. Ils permettent une meilleure rentabilisation de l'investissement.",
      
      "## L'importance du confort",
      "Les visiteurs passent de longues heures sur les salons. Les stands qui proposent des espaces de repos confortables, des rafraîchissements et une bonne climatisation sortent du lot."
    ]
  },
  "choisir-prestataire-evenementiel": {
    title: "Comment choisir son prestataire événementiel B2B ?",
    excerpt: "Les critères essentiels pour sélectionner un partenaire fiable pour vos salons et événements professionnels.",
    image: serviceCorporate,
    category: "Conseils",
    author: "Équipe BA ATTITUDE",
    date: "20 Novembre 2024",
    readTime: "4 min",
    content: [
      "Le choix de votre prestataire événementiel impacte directement la réussite de vos projets. Voici les critères à prendre en compte pour faire le bon choix.",
      
      "## L'expérience et les références",
      "Un prestataire expérimenté connaît les spécificités des différents parcs d'exposition et a déjà fait face à de nombreuses situations. Demandez des références et n'hésitez pas à les contacter.",
      
      "## La réactivité et la disponibilité",
      "Dans l'événementiel, les imprévus sont fréquents. Votre prestataire doit être joignable et capable de réagir rapidement.",
      
      "## La capacité d'intervention",
      "Assurez-vous que le prestataire dispose des équipes et du matériel nécessaires pour gérer votre projet, même en cas de pic d'activité.",
      
      "## L'interlocuteur unique",
      "Un chef de projet dédié qui vous accompagne de bout en bout facilite grandement la communication et la coordination."
    ]
  },
  "securite-salons-professionnels": {
    title: "Sécurité sur les salons professionnels : normes et obligations",
    excerpt: "Réglementation, normes ERP, équipements obligatoires : tout ce que vous devez savoir sur la sécurité lors de vos événements.",
    image: serviceDecoration,
    category: "Logistique",
    author: "Équipe BA ATTITUDE",
    date: "15 Novembre 2024",
    readTime: "6 min",
    content: [
      "La sécurité est un enjeu majeur sur les salons professionnels. Les réglementations sont strictes et leur non-respect peut entraîner des sanctions importantes.",
      
      "## Les normes ERP",
      "Les parcs d'exposition sont classés ERP (Établissements Recevant du Public). Votre stand doit respecter des règles précises concernant les matériaux, les issues de secours, l'éclairage de sécurité, etc.",
      
      "## Les équipements obligatoires",
      "Extincteurs, signalétique de sécurité, largeur des allées... Chaque détail compte et doit être vérifié avant l'ouverture du salon.",
      
      "## La formation des équipes",
      "Vos équipes sur stand doivent connaître les procédures d'évacuation et l'emplacement des équipements de sécurité.",
      
      "## L'accompagnement d'un professionnel",
      "Un prestataire expérimenté comme BA ATTITUDE connaît parfaitement ces réglementations et s'assure que votre stand est conforme."
    ]
  }
};

const relatedArticles = [
  { id: "organisation-technique-salon-professionnel", title: "Organisation technique d'un salon professionnel", category: "Salons" },
  { id: "logistique-evenementielle-internationale", title: "Logistique événementielle internationale", category: "International" },
  { id: "montage-demontage-stands-bonnes-pratiques", title: "Montage et démontage de stands", category: "Conseils" },
];

export default function BlogArticle() {
  const { articleId } = useParams();
  const article = articleId ? articlesData[articleId] : null;

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-card-foreground mb-4">
              Article non trouvé
            </h1>
            <Button variant="gold" asChild>
              <Link to="/blog">Retour au blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-card-foreground mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="aspect-[16/9] rounded-2xl overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              {article.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-display font-bold text-card-foreground mt-10 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </motion.div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager cet article
                </span>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                    <Linkedin className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                    <Twitter className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors">
                    <Facebook className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-card-foreground mb-8 text-center">
            Articles <span className="text-gradient-gold">similaires</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedArticles.filter(a => a.id !== articleId).slice(0, 3).map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
              >
                <span className="text-xs text-primary mb-2 block">{related.category}</span>
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-card-foreground mb-4">
            Besoin d'un accompagnement ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour vous accompagner sur vos projets événementiels.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Nous contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
