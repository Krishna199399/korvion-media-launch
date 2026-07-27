import type { Metadata } from "next";
import { AboutUsClient } from "../about-us/AboutUsClient";

export const metadata: Metadata = {
  title: "About Korvion Media | Digital Marketing & Growth Partner",
  description:
    "Learn about Korvion Media, a results-driven digital marketing company helping businesses grow through SEO, branding, websites, performance marketing, and technology.",
};

export default function Page() {
  return <AboutUsClient />;
}
