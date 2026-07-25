import type { Metadata } from "next";
import { LocationsClient } from "./LocationsClient";

export const metadata: Metadata = {
  title: "Our Locations & Digital Growth Studios | Korvion Media",
  description:
    "Explore Korvion Media's regional digital growth hubs in Bangalore and Belagavi, engineered for connected business systems, SEO, branding, performance marketing, and software engineering.",
  openGraph: {
    title: "Our Locations & Digital Growth Studios | Korvion Media",
    description:
      "Regional digital growth studios in Bangalore and Belagavi supporting startups, SaaS, enterprises, and regional growth.",
    type: "website",
  },
};

export default function Page() {
  return <LocationsClient />;
}
