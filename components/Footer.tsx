"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { restaurantInfo } from "@/data/restaurantInfo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center text-white shadow">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  3reelicious
                </span>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-[#D97706]">
                  South Indian & Chinese
                </p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {restaurantInfo.description}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={restaurantInfo.socials[0].url}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#D97706] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={restaurantInfo.socials[1].url}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#D97706] text-white-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
               href={`https://wa.me/${restaurantInfo.contact.whatsapp}?text=${encodeURIComponent(
                  restaurantInfo.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#15803D] text-white hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 720 720">
                  <path d="M360,0C161.18,0,0,161.18,0,360c0,65.41,17.45,126.75,47.94,179.61L0,720l187.02-44.21c51.34,28.18,110.28,44.21,172.98,44.21,198.82,0,360-161.18,360-360S558.82,0,360,0ZM360,655.52c-60.17,0-116.13-17.98-162.82-48.87l-110.49,28.14,30.99-105.61c-33.53-47.93-53.2-106.26-53.2-169.19,0-163.21,132.31-295.52,295.52-295.52s295.52,132.31,295.52,295.52-132.31,295.52-295.52,295.52Z" />
                  <path d="M444.35,407.52l87.1,41.06c4,1.88,6.56,5.94,6.2,10.34-.94,11.46-5.54,34.43-26.13,55.02-58.12,58.12-162.49-7.64-166.74-10.18-25.67-13.79-50.06-32.24-73.19-55.36-23.12-23.12-41.58-47.52-55.37-73.19-2.55-4.24-68.31-108.61-10.18-166.74,20.59-20.59,43.56-25.19,55.02-26.13,4.41-.36,8.46,2.2,10.34,6.2l41.07,87.1c1.94,4.12,1.09,9.02-2.13,12.24l-30.61,30.61c-6.62,6.62-8.56,16.93-4,25.11,11.17,20.03,26.19,39.32,43.59,57.07,17.75,17.4,37.04,32.43,57.07,43.59,8.18,4.56,18.48,2.62,25.11-4l30.61-30.61c3.22-3.22,8.12-4.08,12.24-2.13Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase font-sans text-xs">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D97706] transition-colors">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#D97706] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D97706] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D97706] transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours of Service */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase font-sans text-xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D97706]" />
              Opening Hours
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="border-b border-slate-800/80 pb-2">
                <span className="block font-medium text-slate-200">Mon – Thu:</span>
                <span className="text-slate-400">Lunch: 12:00 PM – 3:30 PM</span>
                <br />
                <span className="text-slate-400">Dinner: 6:30 PM – 11:00 PM</span>
              </li>
              <li className="border-b border-slate-800/80 pb-2">
                <span className="block font-medium text-slate-200">Fri – Sat:</span>
                <span className="text-slate-400">Lunch: 12:00 PM – 4:00 PM</span>
                <br />
                <span className="text-slate-400">Dinner: 6:30 PM – 11:30 PM</span>
              </li>
              <li>
                <span className="block font-medium text-slate-200">Sunday Feast:</span>
                <span className="text-slate-400">12:00 PM – 11:00 PM (All Day)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase font-sans text-xs">
              Location & Updates
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                <span>{restaurantInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                <a href={`tel:${restaurantInfo.contact.phone}`} className="hover:text-white transition-colors">
                  {restaurantInfo.contact.phoneDisplay}
                </a>
              </div>
              {/* <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                <a href={`mailto:${restaurantInfo.contact.email}`} className="hover:text-white transition-colors">
                  {restaurantInfo.contact.email}
                </a>
              </div> */}
            </div>

            {/* Newsletter */}
            {/* <div className="pt-2">
              <p className="text-xs text-slate-300 font-medium mb-2">
                Subscribe for seasonal tasting events:
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Welcome to the 3reelicious Circle!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 bg-slate-800/90 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-[#D97706] placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-[#D97706] hover:bg-[#B45309] text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 3reelicious Restaurant. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-400">
            <div className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#D97706] fill-[#D97706]" />
              <span>for passionate food lovers</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <p>
              Developed by{" "}
              <a
                href="https://wa.me/919897266808"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97706] hover:text-amber-400 font-medium transition-colors hover:underline"
              >
                Digital Mongers Softech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
