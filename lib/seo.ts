export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://3reelicious-restrau.vercel.app");

export const DEFAULT_OG_IMAGE = {
  url: "/images/sitting3.webp",
  width: 765,
  height: 1020,
  alt: "3reelicious Restaurant — Family-Friendly Multi-Cuisine Dining in Civil Lines, Bareilly",
  type: "image/webp",
};
