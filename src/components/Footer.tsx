import { Phone, Mail, MapPin } from "lucide-react";

const INSTAGRAM = "https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==";
const WHATSAPP = "https://wa.me/918523876978";
const MAPS = "https://www.google.com/maps?q=16.972073,82.232049";

const Footer = () => (
  <footer className="bg-card border-t border-border py-10">
    <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
      <div>
        <img src="/images/logo.jpeg" alt="Bikers Choice Kakinada" className="h-14 w-14 rounded-full object-cover border border-primary mb-3" />
        <h3 className="font-display text-2xl text-primary mb-3">BIKERS CHOICE KAKINADA</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Premium bike modification & custom builds in Kakinada, Andhra Pradesh.
        </p>
      </div>

      <div className="space-y-3 text-sm">
        <a href="tel:+918523876978" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Phone size={16} /> +91 85238 76978
        </a>
        <a href="mailto:bikerschoicekakinada390@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Mail size={16} /> bikerschoicekakinada390@gmail.com
        </a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <MapPin size={16} /> Get Directions
        </a>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Bikers Choice Kakinada. All rights reserved.
    </div>
  </footer>
);

export default Footer;
