import type { Metadata } from "next";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Korvion Media",
  description:
    "Read Korvion Media's Privacy Policy to understand how we collect, use, store, and protect your personal information when you interact with our website and digital marketing services.",
  alternates: {
    canonical: "https://www.korvionmedia.com/privacy-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Korvion Media",
    description:
      "Read Korvion Media's Privacy Policy to understand how we collect, use, store, and protect your personal information when you interact with our website and digital marketing services.",
    type: "website",
    url: "https://www.korvionmedia.com/privacy-policy/",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/privacy-policy/#webpage",
      "url": "https://www.korvionmedia.com/privacy-policy/",
      "name": "Privacy Policy | Korvion Media",
      "description":
        "Read Korvion Media's Privacy Policy to understand how we collect, use, store, and protect your personal information when you interact with our website and digital marketing services.",
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
        "@id": "https://www.korvionmedia.com/privacy-policy/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/privacy-policy/#breadcrumb",
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
          "name": "Privacy Policy",
          "item": "https://www.korvionmedia.com/privacy-policy/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <PrivacyPolicyClient />
    </>
  );
}
