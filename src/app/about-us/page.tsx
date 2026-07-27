import type { Metadata } from "next";
import { AboutUsClient } from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Korvion Media | Digital Marketing & Growth Partner",
  description:
    "Learn about Korvion Media, a results-driven digital marketing company helping businesses grow through SEO, branding, websites, performance marketing, and technology.",
  openGraph: {
    title: "About Korvion Media | Digital Marketing & Growth Partner",
    description:
      "Learn about Korvion Media, a results-driven digital marketing company helping businesses grow through SEO, branding, websites, performance marketing, and technology.",
    type: "website",
    url: "https://www.korvionmedia.com/about-us/",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.korvionmedia.com/about-us/#webpage",
      "url": "https://www.korvionmedia.com/about-us/",
      "name": "About Korvion Media | Digital Marketing & Growth Partner",
      "description":
        "Learn about Korvion Media, a results-driven digital marketing company helping businesses grow through SEO, branding, websites, performance marketing, and technology.",
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
        "@id": "https://www.korvionmedia.com/about-us/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/about-us/#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.korvionmedia.com/about-us/",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutUsClient />
    </>
  );
}
