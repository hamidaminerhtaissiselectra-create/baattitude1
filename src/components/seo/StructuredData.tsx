import { Helmet } from "react-helmet-async";

interface LocalBusinessProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  url?: string;
  logo?: string;
  priceRange?: string;
  openingHours?: string[];
  areaServed?: string[];
  serviceType?: string[];
}

export function LocalBusinessSchema({
  name = "BA Attitude",
  description = "Prestations techniques et logistiques pour salons professionnels, foires et événements B2B. Montage, démontage de stands et coordination terrain.",
  telephone = "+33601591920",
  email = "contact@baattitude.fr",
  address = {
    streetAddress: "Paris",
    addressLocality: "Paris",
    postalCode: "75000",
    addressCountry: "FR"
  },
  url = "https://baattitude.fr",
  logo = "https://baattitude.fr/logo.png",
  priceRange = "€€€",
  openingHours = ["Mo-Fr 08:00-19:00", "Sa 09:00-17:00"],
  areaServed = ["France", "Europe", "International"],
  serviceType = [
    "Montage de stands d'exposition",
    "Démontage de stands",
    "Logistique événementielle",
    "Coordination terrain salons professionnels",
    "Support technique événementiel"
  ]
}: LocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    name,
    description,
    telephone,
    email,
    url,
    logo,
    priceRange,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    openingHoursSpecification: openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1]?.split("-")[0],
      closes: hours.split(" ")[1]?.split("-")[1]
    })),
    areaServed: areaServed.map(area => ({
      "@type": "Place",
      name: area
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services BA Attitude",
      itemListElement: serviceType.map((service, index) => ({
        "@type": "Offer",
        "@id": `${url}/#service-${index}`,
        itemOffered: {
          "@type": "Service",
          name: service
        }
      }))
    },
    sameAs: [
      "https://www.linkedin.com/company/baattitude",
      "https://www.instagram.com/baattitude"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
}

export function SEOHead({ 
  title, 
  description, 
  canonical,
  noindex = false,
  ogImage = "https://baattitude.fr/og-image.jpg"
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
