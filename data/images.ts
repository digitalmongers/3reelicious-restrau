export interface ImageAsset {
  src: string;
  alt: string;
  title: string;
  category: "hero" | "interior" | "dishes" | "drinks" | "dessert";
}

export const restaurantImages = {
  hero: {
    src: "/images/ambience.webp",
    alt: "3reelicious Restaurant Front Entrance and Grand Ambience",
    title: "Welcome to 3reelicious",
  },
  exterior: {
    src: "/images/front.webp",
    alt: "3reelicious Warm Exterior & Welcoming Entrance",
    title: "Exterior View",
  },
  interior: [
    {
      src: "/images/Sittings.webp",
      alt: "Spacious Dining Area with Warm Ambient Lighting",
      title: "Main Dining Hall",
      category: "interior" as const,
    },
    {
      src: "/images/sitting2.webp",
      alt: "Cozy Family Booths and Velvet Seating",
      title: "Intimate Booths",
      category: "interior" as const,
    },
    {
      src: "/images/sitting3.webp",
      alt: "Chic Modern Seating with Natural Wooden Tones",
      title: "Casual Lounge Area",
      category: "interior" as const,
    },
  ],
  dishes: [
    {
      src: "/images/pizza.webp",
      alt: "Artisanal Wood-Fired Farmhouse Pizza with Fresh Mozzarella",
      title: "Artisanal Farmhouse Pizza",
      category: "dishes" as const,
    },
    {
      src: "/images/burger.webp",
      alt: "Gourmet Double Patty Cheese Burger with House Slaw",
      title: "Double Patty Cheese Burger",
      category: "dishes" as const,
    },
    {
      src: "/images/chilli-potato.webp",
      alt: "Crispy Honey Chilli Potato tossed with Sesame & Scallions",
      title: "Crispy Honey Chilli Potato",
      category: "dishes" as const,
    },
    {
      src: "/images/dosa.webp",
      alt: "Golden Crisp Traditional Dosa with Trio of Fresh Chutneys",
      title: "Special Masala Dosa",
      category: "dishes" as const,
    },
    {
      src: "/images/food.webp",
      alt: "Chef Plated Signature Pan-Asian Platter",
      title: "Signature Plated Feast",
      category: "dishes" as const,
    },
    {
      src: "/images/food2.webp",
      alt: "Handcrafted Gourmet Starters and Sizzling Platters",
      title: "Tandoori Special Sizzler",
      category: "dishes" as const,
    },
  ],
  beverages: [
    {
      src: "/images/juice.webp",
      alt: "Cold-Pressed Fresh Citrus and Exotic Fruit Coolers",
      title: "Exotic Fresh Coolers",
      category: "drinks" as const,
    },
  ],
  desserts: [
    {
      src: "/images/icecream.webp",
      alt: "Handcrafted Creamy Gelato and Artisanal Sundaes",
      title: "Artisan Gelato & Sundaes",
      category: "dessert" as const,
    },
  ],
  menuBoard: {
    src: "/images/menu.webp",
    alt: "Handwritten Chalkboard of Seasonal Chef Curations",
    title: "Seasonal Curations",
  },
  gallery: [
    { src: "/images/front2.webp", alt: "Modern architectural facade of 3reelicious", tag: "Architecture" },
    { src: "/images/sitting3.webp", alt: "Relaxed daytime cafe lounge seating", tag: "Ambiance" },
    { src: "/images/Sittings.webp", alt: "Warm interior dining hall with mood lighting", tag: "Ambiance" },
    { src: "/images/sitting2.webp", alt: "Intimate dining booth setting", tag: "Ambiance" },
    { src: "/images/pizza.webp", alt: "Handcrafted stone-baked pizza fresh out of the oven", tag: "Food" },
    { src: "/images/burger.webp", alt: "Chef's gourmet craft burger with crisp fries", tag: "Food" },
    { src: "/images/pavbhaji.webp", alt: "Authentic Mumbai style butter pav bhaji with fresh cilantro and lemon", tag: "Specialties" },
    { src: "/images/butter-missi.webp", alt: "Freshly baked butter missi roti from the clay tandoor", tag: "Tandoori" },
    { src: "/images/chilli-potato.webp", alt: "Sweet and spicy crispy potato appetizer", tag: "Starters" },
    { src: "/images/juice.webp", alt: "Refreshing mocktails and summer beverages", tag: "Drinks" },
    { src: "/images/icecream.webp", alt: "Decadent desserts and frozen treats", tag: "Desserts" },
    { src: "/images/dosa.webp", alt: "South Indian culinary classic", tag: "Classics" },
  ],
};
