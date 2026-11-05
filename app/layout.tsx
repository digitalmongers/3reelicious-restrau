import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://3reelicious.in"),
  title: "3reelicious | Modern Dining & Artisan Flavors",
  description:
    "Experience artisanal dining, handcrafted stone-baked pizzas, sizzling clay oven grills, and craft beverages at 3reelicious restaurant.",
  keywords: [
    "3reelicious",
    "Restaurant",
    "Artisan Dining",
    "Pure Vegetarian",
    "South Indian & Chinese",
    "Stone Baked Pizza",
  ],
  authors: [{ name: "3reelicious Culinary Team" }],
  openGraph: {
    title: "3reelicious Restaurant — Modern Flavors, Artisan Soul",
    description:
      "A culinary sanctuary celebrating fresh ingredients, wood-fired artisan cooking, and vibrant mocktail mixology.",
    images: [{ url: "/images/front.webp", width: 1200, height: 630, alt: "3reelicious Restaurant" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#0F172A] font-sans antialiased selection:bg-[#D97706]/20 selection:text-[#92400E]">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
