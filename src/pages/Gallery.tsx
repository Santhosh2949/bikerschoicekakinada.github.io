import { useState } from "react";

const categories = [
  "All",
  "Before & After",
  "Custom Builds",
  "LED & Neon Mods",
  "Exhaust Work",
  "Wraps & Paint",
  "Touring Setups",
  "Workshop Shots",
];

const realImages = [
  { id: "1", category: "Custom Builds", img: "/images/custom-build-1.png", label: "Custom Build" },
  { id: "2", category: "Wraps & Paint", img: "/images/wraps-1.png", label: "Wrap Design" },
  { id: "3", category: "Custom Builds", img: "/images/delivery-1.png", label: "Bike Delivery" },
  { id: "4", category: "LED & Neon Mods", img: "/images/led-mods-1.png", label: "LED Mod" },
  { id: "5", category: "Wraps & Paint", img: "/images/custom-paint-1.png", label: "Custom Paint" },
  { id: "6", category: "Workshop Shots", img: "/images/helmets-1.jpeg", label: "Helmet Collection" },
  { id: "7", category: "Workshop Shots", img: "/images/workshop-1.jpeg", label: "Workshop" },
];

const items = realImages;

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section className="py-16 px-4">
      <h1 className="font-display text-4xl sm:text-5xl text-center neon-text mb-8">Gallery</h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs sm:text-sm px-4 py-2 rounded-full font-medium transition-colors ${
              active === c
                ? "bg-primary text-primary-foreground neon-glow"
                : "bg-secondary text-secondary-foreground hover:bg-primary/20"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {filtered.map((item) => (
          <div key={item.id} className="relative overflow-hidden rounded-lg bg-card aspect-square hover-scale group">
            <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />
            <span className="absolute bottom-2 left-2 text-xs font-body text-foreground drop-shadow-lg">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
