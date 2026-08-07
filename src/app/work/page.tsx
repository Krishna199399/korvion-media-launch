import type { Metadata } from "next";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Korvion Media",
  description:
    "Explore Korvion Media's portfolio of successful digital marketing, SEO, branding, website development, automation, and business growth projects. Discover how we've helped businesses achieve measurable results across industries.",
  alternates: {
    canonical: "https://www.korvionmedia.com/work/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Work & Case Studies | Korvion Media",
    description:
      "Explore Korvion Media's portfolio of successful digital marketing, SEO, branding, website development, automation, and business growth projects.",
    type: "website",
    url: "https://www.korvionmedia.com/work/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | Korvion Media",
    description:
      "Explore Korvion Media's portfolio of successful digital marketing, SEO, branding, website development, automation, and business growth projects.",
  },
};

const workSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.korvionmedia.com/work/#webpage",
      "url": "https://www.korvionmedia.com/work/",
      "name": "Our Work & Case Studies | Korvion Media",
      "description":
        "Explore Korvion Media's portfolio of successful digital marketing, SEO, branding, website development, automation, and business growth projects. Discover how we've helped businesses achieve measurable results across industries.",
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
        "@id": "https://www.korvionmedia.com/work/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/work/#breadcrumb",
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
          "name": "Our Work",
          "item": "https://www.korvionmedia.com/work/",
        },
      ],
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      <WorkClient />
    </>
  );
}
