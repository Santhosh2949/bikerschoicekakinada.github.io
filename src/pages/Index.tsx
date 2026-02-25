import { useState } from "react";
import { Instagram, Phone, MessageCircle, Facebook, Paintbrush, Lightbulb, Compass, Wrench, Truck, CheckCircle, Mail, MapPin, Clock, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { highlights, galleryImages, logoPath } from "@/config/photos";

const INSTAGRAM = "https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==";
const WHATSAPP = "https://wa.me/918523876978";
const PHONE = "+918523876978";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/hsZwRRgjuvdUguUTA?g_st=aw";
const GOOGLE_REVIEW_LINK = "https://maps.app.goo.gl/hsZwRRgjuvdUguUTA?g_st=aw";

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
    title: "Parts & Accessories", icon: Wrench,
    services: ["Tyre fitting & selling", "Brake levers", "Helmets", "Spare parts", "Parts selling"],
  },
  {
    title: "Touring", icon: Compass,
    services: ["Windshield setup", "Saddlebag installation", "Crash guard mounting"],
  },
];

const galleryCategories = ["All", "Custom Builds", "LED & Neon Mods", "Wraps & Paint", "Touring Setups", "Workshop Shots", "Parts & Tyres"];

const aboutHighlights = ["Premium finishing", "Unique custom builds", "LED & lighting expertise", "Clean workshop", "Fast delivery", "Friendly customer communication"];

const Index = () => {
  const [activeGallery, setActiveGallery] = useState("All");
  const filtered = activeGallery === "All" ? galleryImages : galleryImages.filter((i) => i.category === activeGallery);

  return (
    <>
      {/* ===== HOME ===== */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 bg-gradient-to-b from-background via-card to-background">
        <img src={logoPath} alt="Bikers Choice Kakinada" className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-primary neon-glow mb-6 animate-fade-in-up" />
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight neon-text max-w-4xl animate-fade-in-up">
          Premium Bike Modification & Custom Builds in Kakinada
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          We create aggressive, premium, custom-styled bikes with LED mods, custom painting, tyre fitting, spare parts & precision finishing. Online delivery available!
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

      {/* ===== ONLINE DELIVERY ===== */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-card to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/20 p-4 rounded-full">
              <Truck className="text-primary" size={40} />
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl neon-text mb-4">Online Delivery Available</h2>
          <p className="text-muted-foreground mb-2 text-lg">
            We deliver tyres, spare parts, brake levers & accessories across India!
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            <Package className="inline mr-1" size={14} /> Order via WhatsApp or Call — Fast & Secure Shipping
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="neon-glow text-lg px-8 py-6 font-semibold">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} /> Order on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold">
              <a href={`tel:${PHONE}`}>
                <Phone className="mr-2" size={20} /> Call to Order
              </a>
            </Button>
          </div>
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

      {/* ===== REVIEWS ===== */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-card to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/20 p-4 rounded-full">
              <Star className="text-primary" size={40} />
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl neon-text mb-4">Love Our Work? Leave a Review!</h2>
          <p className="text-muted-foreground mb-2 text-lg">
            Your feedback helps us grow and helps other riders find us on Google.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Tap below to rate us on Google Maps — it takes less than a minute!
          </p>
          <Button asChild size="lg" className="neon-glow text-lg px-8 py-6 font-semibold">
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2" size={20} /> Rate Us on Google ⭐
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
          <InfoCard icon={MapPin} label="Location" value="Kakinada, Andhra Pradesh" href={GOOGLE_MAPS_LINK} />
          <InfoCard icon={Clock} label="Hours" value="Mon–Sat: 9 AM – 9:30 PM · Sun: 9 AM – 1 PM" />
        </div>
        <div className="rounded-lg overflow-hidden border border-border aspect-video">
          <iframe
            title="Bikers Choice Kakinada Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.5!2d82.232049!3d16.972073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU4JzE5LjUiTiA4MsKwMTMnNTUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000"
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
