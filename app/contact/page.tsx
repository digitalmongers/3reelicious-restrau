"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  UtensilsCrossed,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Send,
  Navigation,
} from "lucide-react";
import { restaurantInfo } from "@/data/restaurantInfo";

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Inquiry form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER TITLE */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            <span>Find & Connect With Us</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] mb-3">
            Contact & Directions
          </h1>
          <p className="text-sm sm:text-base text-[#475569]">
            Have a question about our menu, interested in private party buyouts, or looking for directions?
            We are always delighted to assist.
          </p>
        </div>

        {/* 3 QUICK CONTACT TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white p-6 rounded-2xl border border-[#E6DFD5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F6F1E7] text-[#D97706] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">
                Our Location
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                {restaurantInfo.address.full}
              </p>
            </div>
            <a
              href={restaurantInfo.address.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] hover:text-[#B45309]"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-[#E6DFD5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F6F1E7] text-[#D97706] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">
                Direct Contact
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Call our dining room concierge or send us a WhatsApp text for quick replies.
              </p>
            </div>
            <div className="space-y-1">
              <a
                href={`tel:${restaurantInfo.contact.phone}`}
                className="block text-xs font-bold text-[#0F172A] hover:text-[#D97706]"
              >
                Phone: {restaurantInfo.contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${restaurantInfo.contact.whatsapp}?text=${encodeURIComponent(
                  restaurantInfo.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="block text-xs font-bold text-[#15803D] hover:underline"
              >
                WhatsApp: Direct Chat
              </a>
            </div>
          </div>

          {/* Card 3: Multi-Cuisine Family Dining */}
          <div className="bg-white p-6 rounded-2xl border border-[#E6DFD5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F6F1E7] text-[#D97706] flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">
                Multi-Cuisine Dining
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Family-friendly multi-cuisine restaurant known for flavorful food and signature dosa.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block w-fit">
              Pure Vegetarian
            </span>
          </div>
        </div>

        {/* TWO-COLUMN SECTION: INQUIRY FORM & SERVICE TIMINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DFD5] shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#0F172A] mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#D97706]" />
              Event Inquiries & Feedback
            </h2>
            <p className="text-xs text-[#64748B] mb-6">
              Planning a birthday, private dining buyout, or corporate catering event? Let us know your requirements.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-xs text-[#64748B]">
                  Our hospitality manager will contact you within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] bg-[#FDFBF7] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] bg-[#FDFBF7] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] bg-[#FDFBF7] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase mb-1">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] bg-[#FDFBF7] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Private Dining Buyout">Private Dining Salon Buyout</option>
                      <option value="Corporate Event">Corporate Group Event</option>
                      <option value="Catering Service">Outdoor Catering Inquiry</option>
                      <option value="Feedback">Diner Feedback / Compliments</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475569] uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your event, expected guest count, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD5] bg-[#FDFBF7] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#D97706]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#D97706] text-white text-sm font-semibold transition-colors shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Service Hours & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F172A] text-white p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D97706]" />
                Operating Timings
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                {restaurantInfo.hours.schedule.map((item, i) => (
                  <div key={i} className="pb-3 border-b border-slate-800 last:border-none">
                    <span className="block font-semibold text-white mb-1">
                      {item.days}
                    </span>
                    <div className="flex justify-between text-slate-400">
                      <span>Lunch: {item.lunch}</span>
                      <span>Dinner: {item.dinner}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-amber-400">
                {restaurantInfo.hours.kitchenCloseNotice}
              </div>
            </div>

            {/* Styled Map Location Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#E6DFD5] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase text-[#475569]">
                  Civil Lines, Bareilly
                </span>
                <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Open Today
                </span>
              </div>
              <p className="text-xs text-[#64748B] mb-4">
                Conveniently located at Number 12, Civil Lines, Bareilly.
              </p>
              <a
                href={restaurantInfo.address.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#F6F1E7] hover:bg-[#E6DFD5] text-[#0F172A] text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-[#E6DFD5]"
              >
                <Navigation className="w-4 h-4 text-[#D97706]" />
                Open Live Map
              </a>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <div className="pt-8 border-t border-[#E6DFD5]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0F172A] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              Everything you need to know about dining at 3reelicious.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {restaurantInfo.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E6DFD5] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#0F172A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D97706] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#F6F1E7]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
