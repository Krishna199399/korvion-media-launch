import type { Metadata } from "next";
import { SEOClient } from "./SEOClient";

export const metadata: Metadata = {
  title: "Best SEO Services for Long-Term Organic Growth | Korvion Media",
  description:
    "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
  openGraph: {
    title: "Best SEO Services for Long-Term Organic Growth | Korvion Media",
    description:
      "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
    type: "website",
  },
};

export default function Page() {
  return <SEOClient />;
}
