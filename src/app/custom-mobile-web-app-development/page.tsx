import type { Metadata } from "next";
import { AppDevClient } from "./AppDevClient";

export const metadata: Metadata = {
  title: "Custom Mobile and Web App Development Services | Korvion Media",
  description:
    "Korvion Media delivers custom mobile app development, web app development, DevOps, backend systems, and product engineering solutions built for scalability, security, and performance.",
  openGraph: {
    title: "Custom Mobile and Web App Development | Korvion Media",
    description: "Web and mobile app development services designed for real business growth.",
    type: "website",
  },
};

export default function Page() {
  return <AppDevClient />;
}
