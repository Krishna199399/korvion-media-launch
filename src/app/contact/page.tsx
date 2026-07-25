import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Korvion Media | Book a Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Korvion Media. We'll map exactly where your revenue is leaking and how to engineer the system that fixes it.",
  openGraph: {
    title: "Book a Strategy Call — Korvion Media",
    description: "30 minutes. Custom growth audit. Zero fluff.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
