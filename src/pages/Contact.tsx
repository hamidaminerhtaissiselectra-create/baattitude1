import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { ContactCTA } from "@/components/contact/ContactCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactFaqs = [
  {
    question: "Quel est votre délai de réponse ?",
    answer: "Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées. Pour les demandes urgentes, n'hésitez pas à nous appeler directement.",
  },
  {
    question: "Proposez-vous des visites de votre showroom ?",
    answer: "Absolument ! Notre showroom est ouvert sur rendez-vous du lundi au vendredi. Vous pourrez y découvrir nos collections de mobilier et nos créations.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer: "Remplissez le formulaire ci-contre avec les détails de votre projet. Plus vous êtes précis (date, lieu, nombre d'invités, budget), plus notre proposition sera adaptée.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      eventType: "",
      eventDate: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Parlons de votre <span className="text-gradient-gold">projet</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Notre équipe est à votre disposition pour étudier votre projet 
              et vous proposer une solution sur mesure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <ContactCTA />

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted" id="form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground text-sm">
                      16 Rue des Pendants<br />
                      de La Queue-en-Brie<br />
                      77340 Pontault-Combault
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Téléphone</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+33177000952" className="hover:text-primary transition-colors">
                        01 77 00 09 52
                      </a>
                      <br />
                      <a href="tel:+33601591920" className="hover:text-primary transition-colors">
                        06 01 59 19 20
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="mailto:contact@baattitude.fr"
                        className="hover:text-primary transition-colors"
                      >
                        contact@baattitude.fr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Horaires</h3>
                    <p className="text-muted-foreground text-sm">
                      Lundi - Vendredi : 9h - 18h<br />
                      Disponibilité 24/7 pour les événements
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-card-foreground mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.7!2d2.6!3d48.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ4JzAwLjAiTiAywrAzNicwMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation BA Attitude"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
                <h2 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Demande de devis
                </h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24h.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Société / Agence</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre société"
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Type d'événement *</Label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-card-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="gala">Gala / Soirée</option>
                        <option value="corporate">Événement corporate</option>
                        <option value="lancement">Lancement produit</option>
                        <option value="seminaire">Séminaire / Convention</option>
                        <option value="mariage">Mariage</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Date prévue</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget estimé</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-card-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="5000-10000">5 000 € - 10 000 €</option>
                      <option value="10000-25000">10 000 € - 25 000 €</option>
                      <option value="25000-50000">25 000 € - 50 000 €</option>
                      <option value="50000-100000">50 000 € - 100 000 €</option>
                      <option value="100000+">+ 100 000 €</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre événement : lieu, nombre d'invités, thématique souhaitée, contraintes particulières..."
                      rows={6}
                      className="bg-muted border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>
                      En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                      pour vous recontacter dans le cadre de votre demande.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* FAQ */}
              <div className="mt-8">
                <h3 className="text-xl font-display font-bold text-card-foreground mb-4">
                  Questions fréquentes
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {contactFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left text-card-foreground hover:text-primary font-medium py-4 text-sm hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
