import type { Metadata } from "next";
import { LocationsClient } from "./LocationsClient";

export const metadata: Metadata = {
  title: "Our Locations | Korvion Media",
  description:
    "Explore Korvion Media's service locations across India. Find our Belagavi office and discover our digital marketing services available in Bengaluru.",
  alternates: {
    canonical: "https://www.korvionmedia.com/locations/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Locations | Korvion Media",
    description:
      "Explore Korvion Media's service locations across India. Find our Belagavi office and discover our digital marketing services available in Bengaluru.",
    type: "website",
    url: "https://www.korvionmedia.com/locations/",
  },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.korvionmedia.com/locations/#webpage",
      "url": "https://www.korvionmedia.com/locations/",
      "name": "Our Locations | Korvion Media",
      "description":
        "Explore Korvion Media's service locations across India. Find our Belagavi office and discover our digital marketing services available in Bengaluru.",
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
        "@id": "https://www.korvionmedia.com/locations/#breadcrumb",
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/belagavi-digital-marketing-company/#webpage",
          "url": "https://www.korvionmedia.com/belagavi-digital-marketing-company/",
          "name": "Digital Marketing Company in Belagavi",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/bangalore-digital-marketing-company/#webpage",
          "url": "https://www.korvionmedia.com/bangalore-digital-marketing-company/",
          "name": "Digital Marketing Company in Bengaluru",
        },
      ],
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/locations/#breadcrumb",
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
          "name": "Locations",
          "item": "https://www.korvionmedia.com/locations/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
      />
      <LocationsClient />
    </>
  );
}
