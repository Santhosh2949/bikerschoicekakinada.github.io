import { useState } from "react";
import { Instagram, Phone, MessageCircle, Facebook, Paintbrush, Lightbulb, Gauge, Compass, CheckCircle, Mail, MapPin, Clock } from "lucide-react";
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

const serviceCategories = [
  {
    title: "Customization", icon: Paintbrush,
    services: ["Full body modification", "Custom premium painting", "Wraps & sticker work", "Alloy customization"],
  },
  {
    title: "Lighting", icon: Lightbulb,
    services: ["LED strips", "Neon underglow", "Headlight upgrades", "Switch integration"],
  },
  {
    title: "Performance", icon: Gauge,
    services: ["Exhaust modification", "Air filter tuning"],
  },
  {
    title: "Touring", icon: Compass,
    services: ["Windshield setup", "Saddlebag installation", "Crash guard mounting"],
  },
];

const galleryCategories = ["All", "Before & After", "Custom Builds", "LED & Neon Mods", "Exhaust Work", "Wraps & Paint", "Touring Setups", "Workshop Shots"];
const realImages = [
  { id: "1", category: "Custom Builds", img: "/images/custom-build-1.png", label: "Custom Build" },
  { id: "2", category: "Wraps & Paint", img: "/images/wraps-1.png", label: "Wrap Design" },
  { id: "3", category: "Custom Builds", img: "/images/delivery-1.png", label: "Bike Delivery" },
  { id: "4", category: "LED & Neon Mods", img: "/images/led-mods-1.png", label: "LED Mod" },
  { id: "5", category: "Wraps & Paint", img: "/images/custom-paint-1.png", label: "Custom Paint" },
  { id: "6", category: "Workshop Shots", img: "/images/helmets-1.jpeg", label: "Helmet Collection" },
  { id: "7", category: "Workshop Shots", img: "/images/workshop-1.jpeg", label: "Workshop" },
];

const aboutHighlights = ["Premium finishing", "Unique custom builds", "LED & exhaust expertise", "Clean workshop", "Fast delivery", "Friendly customer communication"];

const Index = () => {
  const [activeGallery, setActiveGallery] = useState("All");
  const filtered = activeGallery === "All" ? realImages : realImages.filter((i) => i.category === activeGallery);

  return (
    <>
      {/* ===== HOME ===== */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 bg-gradient-to-b from-background via-card to-background">
        <img src="/images/logo.jpeg" alt="Bikers Choice Kakinada" className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-primary neon-glow mb-6 animate-fade-in-up" />
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
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
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
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram className="mr-2" size={20} /> Instagram</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <a href="#" target="_blank" rel="noopener noreferrer"><Facebook className="mr-2" size={20} /> Facebook</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" size={20} /> WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-16 px-4">
        <h2 className="font-display text-4xl sm:text-5xl text-center neon-text mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {serviceCategories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-lg p-6 border border-border flex flex-col gap-4 hover-scale">
              <div className="flex items-center gap-3">
                <cat.icon className="text-primary" size={28} />
                <h3 className="font-display text-2xl">{cat.title}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm flex-1">
                {cat.services.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Button asChild className="neon-glow mt-2">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={16} /> Contact on WhatsApp
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-16 px-4 bg-card">
        <h2 className="font-display text-4xl sm:text-5xl text-center neon-text mb-8">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveGallery(c)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                activeGallery === c ? "bg-primary text-primary-foreground neon-glow" : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {filtered.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-lg bg-background aspect-square hover-scale group">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />
              <span className="absolute bottom-2 left-2 text-xs font-body text-foreground drop-shadow-lg">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl neon-text text-center mb-8">About Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 text-center">
          Bikers Choice Kakinada delivers premium custom bike builds, LED mods, exhaust upgrades,
          wraps, paint jobs, and performance-focused styling. With 4+ years of experience and a
          strong Instagram community of 4.8k followers, we focus on high-end customization and
          aggressive street-bike aesthetics.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {aboutHighlights.map((h) => (
            <div key={h} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
              <CheckCircle className="text-primary shrink-0" size={20} />
              <span className="text-sm">{h}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="neon-glow text-lg px-8 py-6">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" size={20} /> Follow Us on Instagram
            </a>
          </Button>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl neon-text text-center mb-10">Contact Us</h2>
        <div className="text-center mb-10">
          <Button asChild size="lg" className="neon-glow text-lg px-10 py-6">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={22} /> Tap to Chat on WhatsApp
            </a>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <InfoCard icon={Phone} label="Call Us" value="+91 85238 76978" href="tel:+918523876978" />
          <InfoCard icon={Mail} label="Email" value="bikerschoicekakinada390@gmail.com" href="mailto:bikerschoicekakinada390@gmail.com" />
          <InfoCard icon={Instagram} label="Instagram" value="@bikers_choice_kakinada" href={INSTAGRAM} />
          <InfoCard icon={Facebook} label="Facebook" value="Bikers Choice Kakinada" href="#" />
          <InfoCard icon={MapPin} label="Location" value="Kakinada, Andhra Pradesh" href="https://www.google.com/maps?q=16.972073,82.232049" />
          <InfoCard icon={Clock} label="Hours" value="Mon–Sat: 9 AM – 9:30 PM · Sun: 9 AM – 1 PM" />
        </div>
        <div className="rounded-lg overflow-hidden border border-border aspect-video">
          <iframe
            title="Bikers Choice Kakinada Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src="https://maps.google.com/maps?q=16.972073,82.232049&z=15&output=embed"
          />
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) => {
  const content = (
    <div className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border hover-scale">
      <Icon className="text-primary shrink-0 mt-0.5" size={20} />
      <div>
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-medium break-all">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
};

export default Index;
