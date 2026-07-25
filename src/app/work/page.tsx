import type { Metadata } from "next";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Case Studies — Korvion Media | Real Brands. Real Numbers.",
  description:
    "See how Korvion Media engineered revenue systems for D2C, SaaS, coaching and enterprise brands. Problem → Solution → Result.",
  openGraph: {
    title: "Korvion Case Studies — Receipts From The Front Line",
    description: "Brand stories with hard numbers attached.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Korvion Media | Real Brands. Real Numbers.",
    description: "See how Korvion Media engineered revenue systems for D2C, SaaS, coaching and enterprise brands.",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
