import type { Metadata } from "next";
import { CareersClient } from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Korvion Media",
  description:
    "Explore career opportunities at Korvion Media. We hire operators, engineers, designers, and growth marketers.",
  alternates: {
    canonical: "https://www.korvionmedia.com/careers/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers | Korvion Media",
    description: "Explore career opportunities at Korvion Media.",
    type: "website",
    url: "https://www.korvionmedia.com/careers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Korvion Media",
    description: "Explore career opportunities at Korvion Media.",
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.korvionmedia.com/careers/#webpage",
      "url": "https://www.korvionmedia.com/careers/",
      "name": "Careers | Korvion Media",
      "description": "Explore career opportunities at Korvion Media.",
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
        "@id": "https://www.korvionmedia.com/careers/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/careers/#breadcrumb",
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
          "name": "Careers",
          "item": "https://www.korvionmedia.com/careers/",
        },
      ],
    },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />
      <CareersClient />
    </>
  );
}
