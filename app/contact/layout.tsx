import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us & Directions",
  description:
    "Visit 3reelicious at Number 12, Civil Lines, Bareilly, Uttar Pradesh 243001. Call +91 83938 33933 for inquiries, private dining, catering, or directions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/contact",
    siteName: "3reelicious",
    title: "Contact Us & Directions | 3reelicious",
    description:
      "Visit 3reelicious at Number 12, Civil Lines, Bareilly, Uttar Pradesh 243001. Call +91 83938 33933 for inquiries, private dining, catering, or directions.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Directions | 3reelicious",
    description:
      "Visit 3reelicious at Number 12, Civil Lines, Bareilly, Uttar Pradesh 243001. Call +91 83938 33933 for inquiries, private dining, catering, or directions.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
