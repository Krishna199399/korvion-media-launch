import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Korvion Media | Brand, Marketing, Tech & Automation",
  description:
    "Eight integrated services — branding, content, social, performance, web, automation, e-learning and engineering. One team. One revenue system.",
  openGraph: {
    title: "Korvion Services — Full-Stack Growth Under One Roof",
    description: "Plug into the disciplines you need or run the full stack.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Korvion Media | Brand, Marketing, Tech & Automation",
    description: "Eight integrated services — branding, content, social, performance, web, automation, e-learning and engineering.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
