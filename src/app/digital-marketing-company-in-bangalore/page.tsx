import type { Metadata } from "next";
import { BangaloreClient } from "./BangaloreClient";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Bangalore | Korvion Media",
  description:
    "Partner with Korvion Media for SEO, branding, performance marketing, website development, and digital growth services in Bengaluru.",
  alternates: {
    canonical: "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Marketing Company in Bangalore | Korvion Media",
    description:
      "Partner with Korvion Media for SEO, branding, performance marketing, website development, and digital growth services in Bengaluru.",
    type: "website",
    url: "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/",
  },
};

const bangaloreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/#service",
      "name": "Korvion Media",
      "url": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/",
      "description":
        "Korvion Media provides SEO, performance marketing, branding, website development, CRM implementation, automation, and digital marketing services for businesses across Bengaluru.",
      "image": {
        "@id": "https://www.korvionmedia.com/#logo",
      },
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization",
      },
      "telephone": "+91 9480156345",
      "email": "info@korvionmedia.com",
      "areaServed": {
        "@type": "City",
        "name": "Bengaluru",
      },
      "availableLanguage": ["English", "Kannada", "Hindi"],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/#webpage",
      "url": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/",
      "name": "Digital Marketing Company in Bangalore | Korvion Media",
      "description":
        "Partner with Korvion Media for SEO, branding, performance marketing, website development, and digital growth services in Bengaluru.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website",
      },
      "about": {
        "@id": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/#service",
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/#breadcrumb",
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/#logo",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/#breadcrumb",
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
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Digital Marketing Company in Bangalore",
          "item": "https://www.korvionmedia.com/digital-marketing-company-in-bangalore/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bangaloreSchema) }}
      />
      <BangaloreClient />
    </>
  );
}
