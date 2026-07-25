import type { Metadata } from "next";
import { VideoProductionClient } from "./VideoProductionClient";

export const metadata: Metadata = {
  title: "Video Production & Photography Services | Korvion Media",
  description:
    "Korvion Media offers video production services, photography services, and social media content creation to help brands engage, convert, and grow with high-impact visual content.",
  openGraph: {
    title: "Video Production & Photography Services | Korvion Media",
    description: "Create high-impact visual content that drives engagement and conversions.",
    type: "website",
  },
};

export default function Page() {
  return <VideoProductionClient />;
}
