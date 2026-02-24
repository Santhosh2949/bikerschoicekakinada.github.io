import { MessageCircle, Phone, Mail, Instagram, MapPin, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/918523876978";
const INSTAGRAM = "https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==";

const Contact = () => (
  <section className="py-16 px-4 max-w-3xl mx-auto">
    <h1 className="font-display text-4xl sm:text-5xl neon-text text-center mb-10">Contact Us</h1>

    {/* WhatsApp CTA */}
    <div className="text-center mb-10">
      <Button asChild size="lg" className="neon-glow text-lg px-10 py-6">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2" size={22} /> Tap to Chat on WhatsApp
        </a>
      </Button>
    </div>

    {/* Info cards */}
    <div className="grid sm:grid-cols-2 gap-4 mb-10">
      <InfoCard icon={Phone} label="Call Us" value="+91 85238 76978" href="tel:+918523876978" />
      <InfoCard icon={Mail} label="Email" value="bikerschoicekakinada390@gmail.com" href="mailto:bikerschoicekakinada390@gmail.com" />
      <InfoCard icon={Instagram} label="Instagram" value="@bikers_choice_kakinada" href={INSTAGRAM} />
      <InfoCard icon={Facebook} label="Facebook" value="Bikers Choice Kakinada" href="#" />
      <InfoCard icon={MapPin} label="Location" value="Kakinada, Andhra Pradesh" href="https://www.google.com/maps?q=16.972073,82.232049" />
      <InfoCard icon={Clock} label="Hours" value="Mon–Sat: 9 AM – 8 PM · Sun: Closed" />
    </div>

    {/* Map */}
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
);

const InfoCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border hover-scale">
      <Icon className="text-primary shrink-0 mt-0.5" size={20} />
      <div>
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-medium break-all">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default Contact;
