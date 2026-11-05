"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, UtensilsCrossed, Phone, ArrowRight } from "lucide-react";
import { restaurantInfo } from "@/data/restaurantInfo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#E6DFD5]/80 py-3"
            : "bg-[#FDFBF7] border-b border-[#E6DFD5]/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-[#D97706] shadow-md group-hover:scale-105 transition-transform duration-200">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                  3Ree licious
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D97706] -mt-0.5">
                  South Indian & Chinese
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#D97706] bg-[#D97706]/10 font-semibold"
                        : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F6F1E7]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${restaurantInfo.contact.phone}`}
                className="p-2 text-[#475569] hover:text-[#0F172A] hover:bg-[#F6F1E7] rounded-full transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Call 3reelicious"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span className="hidden lg:inline">{restaurantInfo.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#D97706] shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-[#D97706]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden gap-2">
              <Link
                href="/menu"
                className="p-2 rounded-full bg-[#0F172A] text-white"
                aria-label="Menu"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D97706]" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-[#0F172A] hover:bg-[#F6F1E7] focus:outline-none transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE LEFT SLIDE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE LEFT DRAWER PANEL (Slides smoothly from left) */}
      <aside
        data-lenis-prevent
        className={`fixed top-0 bottom-0 left-0 z-50 w-[285px] sm:w-[320px] max-w-[85vw] bg-[#FDFBF7] shadow-2xl flex flex-col justify-between border-r border-[#E6DFD5] transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div>
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E6DFD5]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center text-[#D97706] shadow-sm">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-[#0F172A]">
                  3Ree licious
                </span>
                <span className="text-[9px] tracking-wider uppercase font-semibold text-[#D97706] -mt-0.5">
                  South Indian & Chinese
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-[#F6F1E7] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="p-3 sm:p-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#D97706]/10 text-[#D97706] shadow-xs"
                      : "text-[#1E293B] hover:bg-[#F6F1E7] hover:text-[#0F172A]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#D97706] translate-x-0.5" : "text-slate-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom CTAs */}
        <div className="p-4 sm:p-5 border-t border-[#E6DFD5] bg-[#F6F1E7]/50 space-y-2.5">
          <Link
            href="/menu"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#D97706] shadow transition-colors"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D97706]" />
            <span>Explore Menu</span>
          </Link>

          <a
            href={`tel:${restaurantInfo.contact.phone}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#475569] bg-white border border-[#E6DFD5] hover:bg-[#F6F1E7] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Call {restaurantInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
