import type { Metadata } from "next";
import { BrandingClient } from "./BrandingClient";

export const metadata: Metadata = {
  title: "Branding Agency and Creative Services | Korvion Media",
  description:
    "Korvion Media is a branding agency offering brand identity design, logo design services, and creative campaigns that help businesses build strong, scalable brands.",
  openGraph: {
    title: "Branding Agency and Creative Services | Korvion Media",
    description: "Build strong, scalable brands with strategic branding and creative services.",
    type: "website",
  },
};

export default function Page() {
  return <BrandingClient />;
}
