import type { Metadata } from "next";
import { CareersClient } from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers — Korvion Media | Build the Next Era of Growth",
  description:
    "Join Korvion Media. We hire operators, not employees. Open roles across engineering, design, performance marketing and AI automation.",
  openGraph: {
    title: "Careers at Korvion Media",
    description: "Operators wanted. Build revenue systems for the world's most ambitious brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Korvion Media",
    description: "Join Korvion Media. We hire operators, not employees. Open roles across engineering, design, performance marketing and AI automation.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
