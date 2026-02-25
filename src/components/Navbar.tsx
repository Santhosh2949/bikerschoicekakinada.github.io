import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "home", label: "Home" },
  { to: "services", label: "Services" },
  { to: "gallery", label: "Gallery" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <img src="/images/logo.jpeg" alt="Bikers Choice Kakinada" className="h-9 w-9 rounded-full object-cover border border-primary" />
          <span className="font-display text-xl tracking-wider text-primary hidden sm:inline">BIKERS CHOICE</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <button
              key={l.to}
              onClick={() => scrollTo(l.to)}
              className="font-body text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary text-muted-foreground"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in-up">
          <div className="flex flex-col px-4 py-4 gap-4">
            {links.map((l) => (
              <button
                key={l.to}
                onClick={() => scrollTo(l.to)}
                className="font-body text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary text-muted-foreground text-left"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
