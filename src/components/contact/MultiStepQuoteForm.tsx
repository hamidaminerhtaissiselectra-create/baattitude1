import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Calendar, 
  User,
  Send,
  Loader2
} from "lucide-react";

interface FormData {
  // Step 1: Type de projet
  projectType: string;
  
  // Step 2: Lieu
  location: string;
  venue: string;
  country: string;
  
  // Step 3: Calendrier
  eventDate: string;
  montageDate: string;
  demontageDate: string;
  
  // Step 4: Contact
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const projectTypes = [
  { id: "salon", label: "Salon professionnel", description: "Foire, exposition, trade show" },
  { id: "congres", label: "Congrès / Convention", description: "Événement corporate, séminaire" },
  { id: "montage", label: "Montage / Démontage", description: "Installation de stand ou décor" },
  { id: "logistique", label: "Logistique", description: "Transport, stockage, manutention" },
  { id: "international", label: "Événement international", description: "Projet hors France" },
  { id: "autre", label: "Autre projet", description: "Demande spécifique" },
];

const steps = [
  { id: 1, label: "Type de projet", icon: Building2 },
  { id: 2, label: "Lieu", icon: MapPin },
  { id: 3, label: "Calendrier", icon: Calendar },
  { id: 4, label: "Contact", icon: User },
];

export function MultiStepQuoteForm() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    location: "",
    venue: "",
    country: "France",
    eventDate: "",
    montageDate: "",
    demontageDate: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== "";
      case 2:
        return formData.location !== "";
      case 3:
        return formData.eventDate !== "";
      case 4:
        return formData.name !== "" && formData.email !== "";
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous répondrons sous 24h avec un devis personnalisé.",
    });

    // Reset form
    setFormData({
      projectType: "",
      location: "",
      venue: "",
      country: "France",
      eventDate: "",
      montageDate: "",
      demontageDate: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-xl">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: currentStep >= step.id ? "hsl(var(--primary))" : "hsl(var(--muted))",
                  borderColor: currentStep >= step.id ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                  currentStep >= step.id ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {currentStep > step.id ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </motion.div>
              <span className="text-xs mt-2 text-muted-foreground hidden md:block">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block w-16 lg:w-24 h-0.5 bg-border mx-2">
                <motion.div
                  initial={false}
                  animate={{ width: currentStep > step.id ? "100%" : "0%" }}
                  className="h-full bg-primary"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Step 1: Type de projet */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Quel est votre projet ?
                </h3>
                <p className="text-muted-foreground">
                  Sélectionnez le type d'événement pour lequel vous avez besoin de nos services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    type="button"
                    onClick={() => handleProjectTypeSelect(type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      formData.projectType === type.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-semibold text-card-foreground block">{type.label}</span>
                    <span className="text-sm text-muted-foreground">{type.description}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Lieu */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Où se déroule l'événement ?
                </h3>
                <p className="text-muted-foreground">
                  Indiquez-nous le lieu de votre événement.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Pays *</Label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-md border border-border bg-muted px-3 py-2 text-card-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="France">France</option>
                    <option value="Belgique">Belgique</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Allemagne">Allemagne</option>
                    <option value="Espagne">Espagne</option>
                    <option value="Italie">Italie</option>
                    <option value="Royaume-Uni">Royaume-Uni</option>
                    <option value="Pays-Bas">Pays-Bas</option>
                    <option value="Autre">Autre pays</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Ville *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Paris, Lyon, Marseille..."
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue">Lieu / Parc d'exposition</Label>
                  <Input
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="Ex: Paris Expo Porte de Versailles, Villepinte..."
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Calendrier */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Quand a lieu l'événement ?
                </h3>
                <p className="text-muted-foreground">
                  Précisez les dates pour que nous puissions planifier notre intervention.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Date de l'événement *</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="montageDate">Date de montage souhaitée</Label>
                    <Input
                      id="montageDate"
                      name="montageDate"
                      type="date"
                      value={formData.montageDate}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="demontageDate">Date de démontage souhaitée</Label>
                    <Input
                      id="demontageDate"
                      name="demontageDate"
                      type="date"
                      value={formData.demontageDate}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Vos coordonnées
                </h3>
                <p className="text-muted-foreground">
                  Comment pouvons-nous vous recontacter ?
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Détails complémentaires</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins spécifiques, contraintes particulières..."
                    rows={4}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </Button>

          {currentStep < 4 ? (
            <Button
              type="button"
              variant="gold"
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2"
            >
              Suivant
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="gold"
              disabled={!canProceed() || isSubmitting}
              className="flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
