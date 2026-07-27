import type { Metadata } from "next";
import { TermsAndConditionsClient } from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | Korvion Media",
  description:
    "Review Korvion Media's Terms & Conditions to understand the rules, responsibilities, intellectual property, payments, and service terms when using our website and digital marketing services.",
  openGraph: {
    title: "Terms & Conditions | Korvion Media",
    description:
      "Review Korvion Media's Terms & Conditions to understand the rules, responsibilities, intellectual property, payments, and service terms when using our website and digital marketing services.",
    type: "website",
    url: "https://www.korvionmedia.com/terms-and-conditions/",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/terms-and-conditions/#webpage",
      "url": "https://www.korvionmedia.com/terms-and-conditions/",
      "name": "Terms & Conditions | Korvion Media",
      "description":
        "Review Korvion Media's Terms & Conditions to understand the rules, responsibilities, intellectual property, payments, and service terms when using our website and digital marketing services.",
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
        "@id": "https://www.korvionmedia.com/terms-and-conditions/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/terms-and-conditions/#breadcrumb",
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
          "name": "Terms & Conditions",
          "item": "https://www.korvionmedia.com/terms-and-conditions/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsAndConditionsClient />
    </>
  );
}
