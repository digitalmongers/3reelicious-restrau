import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFBF7",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "3reelicious | Multi-Cuisine Family Restaurant in Civil Lines, Bareilly",
    template: "%s | 3reelicious",
  },
  description:
    "Family-friendly pure vegetarian multi-cuisine restaurant in Civil Lines, Bareilly — known for signature South Indian dosas, Chinese favorites, stone-baked pizzas, sizzling tandoor platters, and craft beverages.",
  applicationName: "3reelicious",
  keywords: [
    "3reelicious",
    "3Ree licious",
    "3reelicious Bareilly",
    "Restaurant in Civil Lines Bareilly",
    "Pure Vegetarian Restaurant Bareilly",
    "South Indian & Chinese",
    "Signature Dosa Bareilly",
    "Family Restaurant Bareilly",
    "Stone Baked Pizza",
    "Artisan Dining",
  ],
  authors: [{ name: "3reelicious Restaurant" }],
  creator: "3reelicious",
  publisher: "3reelicious",
  category: "Restaurant & Dining",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "3reelicious",
    title: "3reelicious | Multi-Cuisine Family Restaurant in Civil Lines, Bareilly",
    description:
      "Family-friendly multi-cuisine restaurant known for flavorful food, signature dosas, stone-baked pizzas, and warm hospitality in Civil Lines, Bareilly.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "3reelicious | Multi-Cuisine Family Restaurant in Civil Lines, Bareilly",
    description:
      "Family-friendly multi-cuisine restaurant known for flavorful food, signature dosas, stone-baked pizzas, and warm hospitality in Civil Lines, Bareilly.",
    images: [DEFAULT_OG_IMAGE.url],
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
