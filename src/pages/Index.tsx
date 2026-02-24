import { Instagram, Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM = "https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==";
const WHATSAPP = "https://wa.me/918523876978";

const highlights = [
  { label: "LED Mods", img: "/images/led-mods-1.png" },
  { label: "Custom Build", img: "/images/custom-build-1.png" },
  { label: "Custom Paint", img: "/images/custom-paint-1.png" },
  { label: "Wraps", img: "/images/wraps-1.png" },
  { label: "Delivery", img: "/images/delivery-1.png" },
  { label: "Workshop", img: "/images/helmets-1.jpeg" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 bg-gradient-to-b from-background via-card to-background">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight neon-text max-w-4xl animate-fade-in-up">
          Premium Bike Modification & Custom Builds in Kakinada
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          We create aggressive, premium, custom-styled bikes with performance upgrades, LED mods, exhaust work & precision finishing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="neon-glow text-lg px-8 py-6 font-semibold">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold">
            <a href="tel:+918523876978">
              <Phone className="mr-2" size={20} /> Call Now
            </a>
          </Button>
        </div>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Instagram size={18} /> Follow us on Instagram — 4,800+ riders
        </a>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-center neon-text mb-10">Our Signature Custom Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {highlights.map((h) => (
            <div key={h.label} className="group relative overflow-hidden rounded-lg bg-card aspect-square hover-scale">
              <img src={h.img} alt={h.label} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />
              <span className="absolute bottom-3 left-3 font-display text-lg text-foreground drop-shadow-lg">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl neon-text mb-4">Follow Our Build Journey</h2>
          <p className="text-muted-foreground mb-2">We post daily custom work, transformations & delivery updates.</p>
          <p className="text-primary font-semibold mb-8">Join 4,800+ riders following us.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="neon-glow text-lg px-8 py-6">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2" size={20} /> Instagram
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2" size={20} /> Facebook
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
