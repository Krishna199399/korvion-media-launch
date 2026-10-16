import type { Metadata } from "next";
import { BelagaviClient } from "./BelagaviClient";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Belagavi | Korvion Media",
  description:
    "Korvion Media helps businesses in Belagavi grow through SEO, branding, performance marketing, website development, CRM, and automation solutions.",
  alternates: {
    canonical: "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Marketing Company in Belagavi | Korvion Media",
    description:
      "Korvion Media helps businesses in Belagavi grow through SEO, branding, performance marketing, website development, CRM, and automation solutions.",
    type: "website",
    url: "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/",
  },
};

const belagaviSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/#service",
      "name": "Korvion Media",
      "url": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/",
      "description":
        "Korvion Media is a digital marketing company in Belagavi offering SEO, branding, website development, CRM implementation, automation, and performance marketing services.",
      "image": {
        "@id": "https://www.korvionmedia.com/#logo",
      },
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization",
      },
      "telephone": "+91 9480156345",
      "email": "info@korvionmedia.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "RGJ4+8HF, Fourth Cross Rd, Bhagya Nagar, Angol",
        "addressLocality": "Belagavi",
        "addressRegion": "Karnataka",
        "postalCode": "590006",
        "addressCountry": "IN",
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Belagavi",
        },
        {
          "@type": "Country",
          "name": "India",
        },
      ],
      "availableLanguage": ["English", "Kannada", "Hindi"],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/#webpage",
      "url": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/",
      "name": "Digital Marketing Company in Belagavi | Korvion Media",
      "description":
        "Korvion Media helps businesses in Belagavi grow through SEO, branding, performance marketing, website development, CRM, and automation solutions.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website",
      },
      "about": {
        "@id": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/#service",
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/#breadcrumb",
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/#logo",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/#breadcrumb",
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
          "name": "Digital Marketing Company in Belagavi",
          "item": "https://www.korvionmedia.com/digital-marketing-company-in-belagavi/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(belagaviSchema) }}
      />
      <BelagaviClient />
    </>
  );
}
