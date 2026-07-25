import type { Metadata } from "next";
import { WebsiteDesignClient } from "./WebsiteDesignClient";

export const metadata: Metadata = {
  title: "Website Design Services | UI UX and Web Development | Korvion Media",
  description:
    "Korvion Media offers website design services, UI UX design, and web development focused on conversion, performance, and real business growth.",
  openGraph: {
    title: "Website Design Services — Korvion Media",
    description: "Build a website that drives leads, sales, and business growth.",
    type: "website",
  },
};

export default function Page() {
  return <WebsiteDesignClient />;
}
