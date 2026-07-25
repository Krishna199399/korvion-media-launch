import type { Metadata } from "next";
import { BangaloreClient } from "./BangaloreClient";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Bangalore | Korvion Media",
  description:
    "Korvion Media is a digital marketing company in Bangalore helping businesses grow through SEO, performance marketing, branding, websites, automation, and connected digital growth systems.",
  openGraph: {
    title: "Best Digital Marketing Company in Bangalore | Korvion Media",
    description:
      "Build connected digital growth systems for SEO, performance marketing, branding, websites, automation, and scalable technology in Bangalore.",
    type: "website",
  },
};

export default function Page() {
  return <BangaloreClient />;
}
