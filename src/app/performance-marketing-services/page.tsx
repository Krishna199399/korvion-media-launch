import type { Metadata } from "next";
import { PerformanceMarketingClient } from "./PerformanceMarketingClient";

export const metadata: Metadata = {
  title: "Performance Marketing and Lead Generation Services | Korvion Media",
  description:
    "Korvion Media delivers performance marketing services, including Google Ads, LinkedIn Ads, conversion rate optimization, and lead generation systems focused on measurable ROI and growth.",
  openGraph: {
    title: "Performance Marketing Services — Korvion Media",
    description: "Marketing focused on 3 core metrics that drive revenue.",
    type: "website",
  },
};

export default function Page() {
  return <PerformanceMarketingClient />;
}
