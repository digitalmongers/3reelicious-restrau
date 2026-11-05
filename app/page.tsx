"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Utensils,
  Award,
  Leaf,
  ShieldCheck,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { restaurantImages } from "@/data/images";
import { restaurantInfo } from "@/data/restaurantInfo";

const signatureDishes = [
  {
    name: "Artisanal Farmhouse Pizza",
    category: "Cheesy-Pizzas",
    price: "₹549",
    description: "Hand-stretched sourdough, San Marzano tomato coulis, wild mushrooms, and whole milk mozzarella.",
    image: "/images/pizza.webp",
    badge: "Chef's Signature",
    isVeg: true,
    rating: 5.0,
  },
  {
    name: "Double Patty Monster Burger",
    category: "Variety of Burger",
    price: "₹279",
    description: "Crisp potato-herb patties, molten cheddar cheese, pickled jalapeños, and secret 3reelicious relish.",
    image: "/images/burger.webp",
    badge: "Bestseller",
    isVeg: true,
    rating: 4.9,
  },
  {
    name: "Crispy Honey Chilli Potato",
    category: "Fries - Style",
    price: "₹299",
    description: "Twice-crisped potato fingers tossed in sticky organic honey glaze, roasted sesame, and scallions.",
    image: "/images/chilli-potato.webp",
    badge: "Crowd Favorite",
    isVeg: true,
    isSpicy: true,
    rating: 4.8,
  },
  {
    name: "Virgin Exotic Mojito Cooler",
    category: "Soda-Licious",
    price: "₹249",
    description: "Muddled Persian lime wedges, garden spearmint, organic cane sugar, and effervescent soda.",
    image: "/images/juice.webp",
    badge: "Craft Beverage",
    isVeg: true,
    rating: 4.9,
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Food Critic & Blogger",
    comment:
      "3reelicious has redefined artisan dining in Indiranagar. The Farmhouse Pizza had the perfect leopard-spotted crust, and the ambiance is cozy and chic.",
    rating: 5,
    tag: "Verified Diner",
  },
  {
    name: "Rahul Verma",
    role: "Tech Entrepreneur",
    comment:
      "We hosted a 12-person gathering here. The online menu made ordering so smooth, and the Malai Soya Chaap and Shakes were phenomenal!",
    rating: 5,
    tag: "Group Dining",
  },
  {
    name: "Pooja Hegde",
    role: "Culinary Enthusiast",
    comment:
      "Warm hospitality, aesthetic interior design, and truly fresh ingredients you can actually taste. Definitely our new weekend family spot.",
    rating: 5,
    tag: "Regular Guest",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={restaurantImages.hero.src}
            alt={restaurantImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
            loading="eager"
          />
          {/* Multi-stage Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/75 to-[#0F172A]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D97706] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Artisan Kitchen & Craft Dining</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Where Every Dish Tells an{" "}
            <span className="italic font-normal text-[#F59E0B]">Artisanal Story</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-200 font-light leading-relaxed mb-10">
            Hand-stretched stone-baked pizzas, aromatic clay oven tandoori platters,
            and vibrant botanical mocktails made fresh daily in Indiranagar.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#D97706] hover:bg-[#B45309] shadow-lg shadow-amber-900/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Utensils className="w-5 h-5" />
              Full Menu
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>
          </div>

          {/* Stats Ticker */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-left sm:text-center">
            {restaurantInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F59E0B]">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-300 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF'S SIGNATURE SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Culinary Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Chef&apos;s Signature Creations
            </h2>
          </div>
          <Link
            href="/menu"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#D97706] hover:text-[#B45309] group"
          >
            <span>Browse Full 50+ Menu</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {signatureDishes.map((dish, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E6DFD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#F6F1E7]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow">
                  {dish.badge}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0F172A] text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>{dish.rating}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#15803D] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#15803D] inline-block" />
                      100% Veg
                    </span>
                    <span className="font-serif text-lg font-bold text-[#D97706]">
                      {dish.price}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <Link
                  href="/menu"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F6F1E7] hover:bg-[#0F172A] text-[#0F172A] hover:text-white text-xs font-semibold transition-colors"
                >
                  <span>View in Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE DINING EXPERIENCE SECTION */}
      <section className="py-20 bg-[#F6F1E7]/60 border-y border-[#E6DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={restaurantImages.interior[0].src}
                  alt={restaurantImages.interior[0].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src={restaurantImages.interior[1].src}
                  alt={restaurantImages.interior[1].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>The 3reelicious Difference</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                Crafted with Passion. Served with Elegance.
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                Step inside an atmosphere thoughtfully curated for relaxed conversation,
                sensory delight, and exceptional food. From the wood-fired ovens
                crackling in our kitchen to our warm ambient lighting, every detail is
                tailored to give you an unforgettable dining experience.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD5] flex items-center justify-center text-[#D97706] shadow-sm flex-shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0F172A]">
                      Farm-to-Table Fresh Produce
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      We partner with local organic growers to ensure every vegetable, herb, and spice is harvested at peak maturity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD5] flex items-center justify-center text-[#D97706] shadow-sm flex-shrink-0">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0F172A]">
                      Artisan Wood-Fired & Clay Tandoor
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Pizzas baked on volcanic stone decks and soya chaap roasted over natural charcoal for authentic smoky depth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD5] flex items-center justify-center text-[#D97706] shadow-sm flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0F172A]">
                      100% Pure Vegetarian Kitchen
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Strict hygienic separation, pure dairy preparations, and dedicated plant-based choices for your family.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#D97706] shadow transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY GRID */}
      <section className="py-20 w-full md:max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center  mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mb-2">
            Moments at 3reelicious
          </h2>
          <p className="text-sm text-[#475569]">
            A glimpse into our dining halls, stone ovens, and plated culinary creations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {restaurantImages.gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-sm border border-[#E6DFD5]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[11px] font-semibold text-white">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT US / LOCATION BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/20 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4" />
                <span>Visit Us in Civil Lines</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Your Neighborhood Artisan Dining Destination
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Drop by for lunch, an evening snack, or dinner with loved ones.
                Enjoy our warm indoor halls, comfortable booth seating, and complimentary valet parking.
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D97706]" />
                  <span>Open Daily: 12:00 PM – 11:30 PM (Continuous Weekend Service)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D97706]" />
                  <span>Direct Line: {restaurantInfo.contact.phoneDisplay}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={restaurantInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-sm transition-colors shadow"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors border border-slate-700"
                >
                  <span>Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/front.webp"
                  alt="3reelicious Restaurant Entrance"
                  fill
                  sizes="400px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUEST REVIEWS SECTION */}
      <section className="py-20 bg-white border-t border-[#E6DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2">
            <Star className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
            <span>Guest Praise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12">
            What Our Diners Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E6DFD5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-[#334155] leading-relaxed italic mb-6">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6DFD5] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0F172A]">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-[#64748B]">{item.role}</span>
                  </div>
                  <span className="text-[10px] font-semibold bg-[#D97706]/10 text-[#D97706] px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
