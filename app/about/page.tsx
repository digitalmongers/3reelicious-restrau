import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Heart,
  Leaf,
  Flame,
  Users,
  UtensilsCrossed,
  ArrowRight,
  HandPlatter,
} from "lucide-react";
import { restaurantImages } from "@/data/images";
import { restaurantInfo } from "@/data/restaurantInfo";
import { Button } from "@/components/ui/button"


export const metadata = {
  title: "Our Story & Culinary Philosophy | 3reelicious",
  description:
    "Learn about 3reelicious restaurant, our passion for seasonal farm produce, artisan stone ovens, and the culinary team behind our Civil Lines, Bareilly kitchen.",
};

const coreValues = [
  {
    icon: Leaf,
    title: "Farm-to-Table Integrity",
    desc: "We source our vegetables, herbs, and cold-pressed oils from certified regional organic farms, celebrating produce picked at the height of its flavor profile.",
  },
  {
    icon: Flame,
    title: "Artisan Craftsmanship",
    desc: "From slow-fermented 48-hour sourdough pizza crusts to tandoor charcoal roasting, our techniques honor traditional slow cooking with modern culinary precision.",
  },
  {
    icon: Heart,
    title: "Heartfelt Indian Hospitality",
    desc: "Guided by 'Atithi Devo Bhava', our front-of-house team treats every diner not as a transaction, but as a cherished guest in our own home.",
  },
  {
    icon: Users,
    title: "Sustainable Community",
    desc: "Zero single-use plastics, energy-efficient induction prep, clean food waste composting, and ethical fair-wage kitchen practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* HERO TITLE SECTION */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Our Heritage & Journey</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4">
            Born from a Love of Pure Flavors & Honest Food
          </h1>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light">
            3reelicious began with a straightforward conviction: vegetarian cuisine should never be an afterthought.
            It should be vibrant, deeply satisfying, and crafted with the same uncompromising artistry found in the world’s top kitchens.
          </p>
        </section>

        {/* ORIGIN STORY TWO-COLUMN */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#E6DFD5]">
            <Image
              src="/images/front.webp"
              alt="3reelicious Restaurant Exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
              A Culinary Sanctuary in the Heart of Civil Lines, Bareilly
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Founded in 2022, 3reelicious was designed as an escape from the city’s rush — a warm haven where friends, families, and solo epicures gather over sourdough pizzas blistered in high-heat stone decks, aromatic clay-pot teas, and botanical coolers.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Our kitchen combines the best of two worlds: the bold, comforting spice palettes of northern Indian tandoor cooking alongside contemporary global street gourmet favorites like loaded burgers, al dente Italian pasta, and thick handcrafted shakes.
            </p>

            <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#E6DFD5]">
              <div>
                <span className="font-serif text-2xl font-bold text-[#D97706]">50+</span>
                <p className="text-xs text-[#64748B]">Artisan Dishes</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#D97706]">100%</span>
                <p className="text-xs text-[#64748B]">Pure Vegetarian</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#D97706]">4.9★</span>
                <p className="text-xs text-[#64748B]">Diner Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* MEET THE EXECUTIVE CHEF */}
        <section className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-500/30">
              <Image
                src="/images/food2.webp"
                alt="Executive Chef Crafting Special Platter"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Executive Culinary Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Chef's Special
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                &ldquo;Cooking isn&apos;t just about recipes; it is about respecting where the crop grew, understanding how heat transforms the sugar in roasted tomatoes, and evoking nostalgia with every bite.&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                With over 10 years leading kitchens across Mumbai, Chef brings a philosophy centered on clean flavors, natural emulsifications, and balanced textures without unnecessary heavy starches.
              </p>
              <div className="pt-2 text-xs text-amber-400 font-semibold">
                Personal Favorite: Stone-Baked Farmhouse Pizza & Royal Malai Soya Chaap
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES GRID */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mb-2">
              Our Core Pillars
            </h2>
            <p className="text-sm text-[#475569]">
              Every dish we serve and every table we set is rooted in four steadfast values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E6DFD5] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F6F1E7] text-[#D97706] flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MASONRY PHOTO GALLERY GRID */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* BOTTOM CTA */}
        <section className="bg-white rounded-3xl border border-[#E6DFD5] p-8 sm:p-12 text-center shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-[#0F172A] mb-3">
            Come Taste the 3reelicious Difference
          </h2>
          <p className="text-sm text-[#475569] max-w-lg mx-auto mb-6">
            Whether for a quick artisan lunch, an evening mocktail, or a memorable family celebration, we have a seat waiting for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918393833933"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#D97706] text-white font-semibold text-sm transition-colors shadow cursor-pointer"
            >
                <Image
                src="/whatsapp-logo.svg"
                alt="Executive Chef Crafting Special Platter"
                width={15}
                height={15}
                className="color-white"
                />
              Contact Us
            </a>
            
            <a
              href="/menu"
              className="flex items-center gap-2 px-8 rounded-full bg-[#F6F1E7] hover:bg-[#E6DFD5] text-[#0F172A] font-semibold text-sm transition-colors border border-[#F6F1E7] cursor-pointer"
            >
              <HandPlatter className="size-4"/>
              Explore Menu
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
