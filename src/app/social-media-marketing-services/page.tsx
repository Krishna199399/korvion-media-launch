import type { Metadata } from "next";
import { SocialMediaClient } from "./SocialMediaClient";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Korvion Media",
  description:
    "Korvion Media delivers social media marketing services, strategy, influencer campaigns, and reputation management to help brands grow, engage, and build communities.",
  openGraph: {
    title: "Social Media Marketing Services | Korvion Media",
    description: "Build structured systems for visibility, engagement, and long-term brand growth.",
    type: "website",
  },
};

export default function Page() {
  return <SocialMediaClient />;
}
