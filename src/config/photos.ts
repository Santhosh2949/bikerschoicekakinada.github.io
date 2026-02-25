/**
 * ============================================
 * PHOTO CONFIGURATION FILE
 * ============================================
 * 
 * HOW TO UPDATE PHOTOS:
 * 1. Add your new image files to the /public/images/ folder
 * 2. Update the paths below to point to your new images
 * 3. Save this file — the website will update automatically
 * 
 * IMAGE FORMAT: Use .png, .jpg, or .jpeg files
 * RECOMMENDED SIZE: At least 800x800px for best quality
 * ============================================
 */

// ===== HOMEPAGE HIGHLIGHT PHOTOS =====
// These appear in the "Our Signature Custom Work" grid on the homepage
export const highlights = [
  { label: "LED Mods", img: "/images/led-mods-1.png" },
  { label: "Custom Build", img: "/images/custom-build-1.png" },
  { label: "Custom Paint", img: "/images/custom-paint-1.png" },
  { label: "Wraps", img: "/images/wraps-1.png" },
  { label: "Delivery", img: "/images/delivery-1.png" },
  { label: "Workshop", img: "/images/helmets-1.jpeg" },
];

// ===== GALLERY PHOTOS =====
// These appear in the Gallery section
// Available categories: "Custom Builds", "LED & Neon Mods", "Wraps & Paint", 
//                       "Touring Setups", "Workshop Shots", "Parts & Tyres"
export const galleryImages = [
  { id: "1", category: "Custom Builds", img: "/images/custom-build-1.png", label: "Custom Build" },
  { id: "2", category: "Wraps & Paint", img: "/images/wraps-1.png", label: "Wrap Design" },
  { id: "3", category: "Custom Builds", img: "/images/delivery-1.png", label: "Bike Delivery" },
  { id: "4", category: "LED & Neon Mods", img: "/images/led-mods-1.png", label: "LED Mod" },
  { id: "5", category: "Wraps & Paint", img: "/images/custom-paint-1.png", label: "Custom Paint" },
  { id: "6", category: "Workshop Shots", img: "/images/helmets-1.jpeg", label: "Helmet Collection" },
  { id: "7", category: "Workshop Shots", img: "/images/workshop-1.jpeg", label: "Workshop" },
];

// ===== LOGO =====
export const logoPath = "/images/logo.jpeg";
