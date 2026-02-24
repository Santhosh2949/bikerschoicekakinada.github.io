import { CheckCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM = "https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==";

const highlights = [
  "Premium finishing",
  "Unique custom builds",
  "LED & exhaust expertise",
  "Clean workshop",
  "Fast delivery",
  "Friendly customer communication",
];

const About = () => (
  <section className="py-16 px-4 max-w-3xl mx-auto">
    <h1 className="font-display text-4xl sm:text-5xl neon-text text-center mb-8">About Us</h1>

    <p className="text-muted-foreground leading-relaxed mb-8 text-center">
      Bikers Choice Kakinada delivers premium custom bike builds, LED mods, exhaust upgrades,
      wraps, paint jobs, and performance-focused styling. With 4+ years of experience and a
      strong Instagram community of 4.8k followers, we focus on high-end customization and
      aggressive street-bike aesthetics.
    </p>

    <div className="grid sm:grid-cols-2 gap-3 mb-10">
      {highlights.map((h) => (
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
);

export default About;
