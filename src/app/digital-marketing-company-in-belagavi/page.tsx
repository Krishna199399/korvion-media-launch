import type { Metadata } from "next";
import { BelagaviClient } from "./BelagaviClient";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Belagavi | Korvion Media",
  description:
    "Korvion Media is a digital marketing company in Belagavi helping businesses grow through SEO, branding, websites, performance marketing, automation, and connected digital growth systems.",
  openGraph: {
    title: "Best Digital Marketing Company in Belagavi | Korvion Media",
    description:
      "Build connected digital growth systems for SEO, branding, websites, performance marketing, automation, and scalable technology in Belagavi.",
    type: "website",
  },
};

export default function Page() {
  return <BelagaviClient />;
}
