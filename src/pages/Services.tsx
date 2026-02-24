import { Paintbrush, Lightbulb, Gauge, Compass, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/918523876978";

const categories = [
  {
    title: "Customization",
    icon: Paintbrush,
    services: [
      "Full body modification",
      "Custom premium painting",
      "Wraps & sticker work",
      "Alloy customization",
    ],
  },
  {
    title: "Lighting",
    icon: Lightbulb,
    services: [
      "LED strips",
      "Neon underglow",
      "Headlight upgrades",
      "Switch integration",
    ],
  },
  {
    title: "Performance",
    icon: Gauge,
    services: [
      "Exhaust modification",
      "Air filter tuning",
    ],
  },
  {
    title: "Touring",
    icon: Compass,
    services: [
      "Windshield setup",
      "Saddlebag installation",
      "Crash guard mounting",
    ],
  },
];

const Services = () => (
  <section className="py-16 px-4">
    <h1 className="font-display text-4xl sm:text-5xl text-center neon-text mb-12">Our Services</h1>
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {categories.map((cat) => (
        <div key={cat.title} className="bg-card rounded-lg p-6 border border-border flex flex-col gap-4 hover-scale">
          <div className="flex items-center gap-3">
            <cat.icon className="text-primary" size={28} />
            <h2 className="font-display text-2xl">{cat.title}</h2>
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
);

export default Services;
