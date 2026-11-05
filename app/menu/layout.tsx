import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Food & Beverage Menu",
  description:
    "Explore the full pure vegetarian menu at 3reelicious — signature South Indian dosas, Chinese starters, stone-baked pizzas, burgers, tandoor chaap, breads, and craft shakes.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/menu",
    siteName: "3reelicious",
    title: "Food & Beverage Menu | 3reelicious",
    description:
      "Explore the full pure vegetarian menu at 3reelicious — signature South Indian dosas, Chinese starters, stone-baked pizzas, burgers, tandoor chaap, breads, and craft shakes.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food & Beverage Menu | 3reelicious",
    description:
      "Explore the full pure vegetarian menu at 3reelicious — signature South Indian dosas, Chinese starters, stone-baked pizzas, burgers, tandoor chaap, breads, and craft shakes.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
