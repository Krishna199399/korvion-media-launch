import type { Metadata } from "next";
import { ProcessClient } from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process | Korvion Media",
  description:
    "Discover Korvion Media's strategic process for digital marketing, branding, web development, automation, and business growth. Learn how we plan, execute, optimize, and scale measurable results for every client.",
  openGraph: {
    title: "Our Process | Korvion Media",
    description:
      "Discover Korvion Media's strategic process for digital marketing, branding, web development, automation, and business growth. Learn how we plan, execute, optimize, and scale measurable results for every client.",
    type: "website",
    url: "https://www.korvionmedia.com/process/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | Korvion Media",
    description:
      "Discover Korvion Media's strategic process for digital marketing, branding, web development, automation, and business growth.",
  },
};

const processSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/process/#webpage",
      "url": "https://www.korvionmedia.com/process/",
      "name": "Our Process | Korvion Media",
      "description":
        "Discover Korvion Media's strategic process for digital marketing, branding, web development, automation, and business growth. Learn how we plan, execute, optimize, and scale measurable results for every client.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website",
      },
      "about": {
        "@id": "https://www.korvionmedia.com/#organization",
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/#logo",
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/process/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/process/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.korvionmedia.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Process",
          "item": "https://www.korvionmedia.com/process/",
        },
      ],
    },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <ProcessClient />
    </>
  );
}
