import type { Metadata } from "next";
import { ProcessClient } from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process — Korvion Media | Audit, Strategy, Execution, Growth",
  description:
    "Korvion's 4-phase growth system: Audit & Discovery, Strategy & Planning, Execution & Scaling, Optimization & Growth. Transparent, fast, accountable.",
  openGraph: {
    title: "Our Process — Korvion Media",
    description: "Four phases. Built for compounding growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process — Korvion Media",
    description: "Korvion's 4-phase growth system: Audit & Discovery, Strategy & Planning, Execution & Scaling, Optimization & Growth.",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
