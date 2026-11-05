"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Flame,
  Star,
  X,
  UtensilsCrossed,
  ArrowUp,
} from "lucide-react";
import { menuCategories, menuItems } from "@/data/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSpicyOnly, setFilterSpicyOnly] = useState(false);
  const [filterPopularOnly, setFilterPopularOnly] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory === "Chef's Signatures") {
        if (!item.isPopular) return false;
      } else if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }

      // Filter toggles
      if (filterSpicyOnly && !item.isSpicy) return false;
      if (filterPopularOnly && !item.isPopular) return false;

      return true;
    });
  }, [activeCategory, searchQuery, filterSpicyOnly, filterPopularOnly]);

  // Categories to render in itemised sections
  const sectionsToRender = useMemo(() => {
    if (activeCategory === "All") {
      const distinctCategories = Array.from(new Set(menuItems.map((i) => i.category)));
      return distinctCategories
        .map((catName) => ({
          name: catName,
          items: filteredItems.filter((i) => i.category === catName),
        }))
        .filter((sec) => sec.items.length > 0);
    } else if (activeCategory === "Chef's Signatures") {
      return [
        {
          name: "Chef's Signatures",
          items: filteredItems.filter((i) => i.isPopular),
        },
      ];
    } else {
      return [
        {
          name: activeCategory,
          items: filteredItems.filter((i) => i.category === activeCategory),
        },
      ];
    }
  }, [activeCategory, filteredItems]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-[#F6F1E7] to-[#FDFBF7] py-6 sm:py-12 px-3 sm:px-6 lg:px-8 border-b border-[#E6DFD5]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Pure Vegetarian Artisanal Kitchen</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-2 sm:mb-3 tracking-tight">
            Artisan Food & Beverage Menu
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#475569] mb-5 sm:mb-8 leading-relaxed">
            Explore our curated culinary collection — from stone-baked Italian sourdough pizzas to aromatic Awadhi tandoor appetizers and signature craft mocktails.
          </p>

          {/* SEARCH & FILTERS BAR */}
          <div className="max-w-3xl mx-auto bg-white p-2.5 sm:p-3 rounded-2xl shadow-xs border border-[#E6DFD5] flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-72 lg:w-80">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dish name or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-[#F6F1E7]/50 border border-[#E6DFD5] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter buttons row */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 justify-start sm:justify-end">
              <button
                type="button"
                onClick={() => setFilterPopularOnly(!filterPopularOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border whitespace-nowrap flex-shrink-0 cursor-pointer ${
                  filterPopularOnly
                    ? "bg-[#D97706] text-white border-[#D97706]"
                    : "bg-[#FDFBF7] text-[#475569] border-[#E6DFD5] hover:bg-[#F6F1E7]"
                }`}
              >
                <Star className="w-3.5 h-3.5" />
                <span>Bestsellers</span>
              </button>

              <button
                type="button"
                onClick={() => setFilterSpicyOnly(!filterSpicyOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border whitespace-nowrap flex-shrink-0 cursor-pointer ${
                  filterSpicyOnly
                    ? "bg-rose-600 text-white border-rose-600"
                    : "bg-[#FDFBF7] text-[#475569] border-[#E6DFD5] hover:bg-[#F6F1E7]"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Spicy Only</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CATEGORY PILLS BAR (Mobile optimized) */}
      <section className="sticky top-[60px] sm:top-[69px] z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E6DFD5] py-2 sm:py-2.5 shadow-xs">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            data-lenis-prevent
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5 -mx-1 px-1"
          >
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                  }}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-xs"
                      : "bg-white text-[#475569] border border-[#E6DFD5] hover:bg-[#F6F1E7] hover:text-[#0F172A]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITEMISED LIST MENU */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-[#E6DFD5] p-6 sm:p-8 max-w-md mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F172A] mb-1">
              No matching dishes found
            </h3>
            <p className="text-xs text-[#64748B] mb-4">
              Try adjusting your search terms or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
                setFilterSpicyOnly(false);
                setFilterPopularOnly(false);
              }}
              className="px-4 py-2 bg-[#0F172A] hover:bg-[#D97706] text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-10">
            {sectionsToRender.map((section) => (
              <div key={section.name} className="space-y-2.5 sm:space-y-3">
                {/* Category Section Header */}
                <div className="flex items-center justify-between pb-1.5 border-b border-[#E6DFD5]/80 px-1">
                  <h2 className="font-serif text-lg sm:text-2xl font-bold text-[#0F172A]">
                    {section.name}
                  </h2>
                  <span className="text-[11px] sm:text-xs font-medium text-[#64748B] bg-[#F6F1E7] px-2.5 py-0.5 rounded-full border border-[#E6DFD5]">
                    {section.items.length} items
                  </span>
                </div>

                {/* Itemised Table matching user screenshot */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E6DFD5] shadow-xs overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F8F6F2] border-b border-[#E6DFD5] text-[#0F172A] text-xs sm:text-sm font-semibold">
                        <th className="py-3 sm:py-3.5 px-3.5 sm:px-6">Item Name</th>
                        <th className="py-3 sm:py-3.5 px-3.5 sm:px-6 text-right whitespace-nowrap">
                          Price (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6DFD5]/60 text-[#0F172A]">
                      {section.items.map((dish) => (
                        <tr
                          key={dish.id}
                          className="hover:bg-[#FDFBF7] transition-colors"
                        >
                          <td className="py-3 sm:py-3.5 px-3.5 sm:px-6 align-top">
                            <div className="flex items-start sm:items-center gap-1.5 sm:gap-2 flex-wrap">
                              <span
                                className="w-2 h-2 rounded-full bg-emerald-600 inline-block flex-shrink-0 mt-1.5 sm:mt-0"
                                title="100% Pure Veg"
                              />
                              <span className="font-medium text-slate-900 text-xs sm:text-base leading-snug">
                                {dish.name}
                              </span>

                              {dish.isSpicy && (
                                <span title="Spicy" className="inline-flex items-center">
                                  <Flame className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 inline" />
                                </span>
                              )}

                              {dish.isPopular && (
                                <span className="inline-flex items-center text-[9px] sm:text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded">
                                  Bestseller
                                </span>
                              )}
                            </div>

                            {dish.description && (
                              <p className="text-[11px] sm:text-xs text-slate-500 mt-1 pl-3.5 sm:pl-4 line-clamp-2 leading-relaxed">
                                {dish.description}
                              </p>
                            )}
                          </td>

                          <td className="py-3 sm:py-3.5 px-3.5 sm:px-6 text-right text-xs sm:text-base font-semibold text-slate-900 whitespace-nowrap align-top sm:align-middle">
                            {dish.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FLOATING SCROLL-TO-TOP BUTTON (MOBILE DINING COMFORT) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-5 z-40 p-3 rounded-full bg-[#0F172A] text-white shadow-xl hover:bg-[#D97706] transition-all transform hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
