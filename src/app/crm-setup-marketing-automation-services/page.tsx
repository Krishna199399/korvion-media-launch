import type { Metadata } from "next";
import { CRMClient } from "./CRMClient";

export const metadata: Metadata = {
  title: "CRM Setup and Marketing Automation Services | Korvion Media",
  description:
    "Korvion Media provides CRM implementation services, marketing automation, WhatsApp workflows, and reporting dashboards to streamline lead management and improve conversions.",
  openGraph: {
    title: "CRM Setup and Marketing Automation Services | Korvion Media",
    description: "Build a CRM and automation system that never misses a lead.",
    type: "website",
  },
};

export default function Page() {
  return <CRMClient />;
}
