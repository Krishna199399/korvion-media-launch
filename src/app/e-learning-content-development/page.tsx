import type { Metadata } from "next";
import { ELearningClient } from "./ELearningClient";

export const metadata: Metadata = {
  title: "Create Interactive E-Learning Modules for LMS | Korvion Media",
  description:
    "Korvion Media creates e-learning content, LMS training modules, and animated learning experiences designed to improve engagement, retention, and training effectiveness.",
  openGraph: {
    title: "E-Learning Content Development | Korvion Media",
    description: "Build interactive e-learning experiences that people actually remember.",
    type: "website",
  },
};

export default function Page() {
  return <ELearningClient />;
}
