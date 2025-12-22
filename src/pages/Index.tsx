import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { SEOHead, LocalBusinessSchema } from "@/components/seo/StructuredData";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="BA ATTITUDE | Prestations Techniques Événementielles - Salons Professionnels France"
        description="Spécialiste des prestations techniques pour salons professionnels, foires et événements B2B. Montage de stands, logistique, coordination terrain en France et à l'international. Devis gratuit sous 48h."
        canonical="https://baattitude.fr"
        ogImage="https://baattitude.fr/og-image.jpg"
      />
      <LocalBusinessSchema
        serviceType={[
          "Montage et démontage de stands",
          "Logistique événementielle",
          "Support technique salons",
          "Coordination terrain",
          "Scénographie événementielle",
          "Prestations internationales"
        ]}
      />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
