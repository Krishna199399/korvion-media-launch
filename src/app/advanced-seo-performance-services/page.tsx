import type { Metadata } from "next";
import { AdvancedSEOClient } from "./AdvancedSEOClient";

export const metadata: Metadata = {
  title: "Advanced SEO Services & CRO for Scalable Growth | Korvion Media",
  description:
    "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
  openGraph: {
    title: "Advanced SEO Services & CRO for Scalable Growth | Korvion Media",
    description:
      "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
    type: "website",
  },
};

export default function Page() {
  return <AdvancedSEOClient />;
}
