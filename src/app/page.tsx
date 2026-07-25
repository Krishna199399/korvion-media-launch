import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company for Business Growth | Korvion Media",
  description:
    "Korvion Media is a digital growth company helping businesses scale through SEO, branding, performance marketing, automation, product engineering, and connected digital systems.",
  openGraph: {
    title: "Best Digital Marketing Company for Business Growth | Korvion Media",
    description:
      "Korvion Media is a digital growth company helping businesses scale through SEO, branding, performance marketing, automation, product engineering, and connected digital systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company for Business Growth | Korvion Media",
    description:
      "Korvion Media is a digital growth company helping businesses scale through SEO, branding, performance marketing, automation, product engineering, and connected digital systems.",
  },
};

export default function Page() {
  return <HomePageClient />;
}
