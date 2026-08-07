import type { Metadata } from "next";
import { CookiePolicyClient } from "./CookiePolicyClient";

export const metadata: Metadata = {
  title: "Cookie Policy | Korvion Media",
  description:
    "Learn how Korvion Media uses cookies and similar technologies to enhance website functionality, improve user experience, analyze traffic, and deliver relevant marketing content.",
  alternates: {
    canonical: "https://www.korvionmedia.com/cookie-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cookie Policy | Korvion Media",
    description:
      "Learn how Korvion Media uses cookies and similar technologies to enhance website functionality, improve user experience, analyze traffic, and deliver relevant marketing content.",
    type: "website",
    url: "https://www.korvionmedia.com/cookie-policy/",
  },
};

const cookieSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/cookie-policy/#webpage",
      "url": "https://www.korvionmedia.com/cookie-policy/",
      "name": "Cookie Policy | Korvion Media",
      "description":
        "Learn how Korvion Media uses cookies and similar technologies to enhance website functionality, improve user experience, analyze traffic, and deliver relevant marketing content.",
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
        "@id": "https://www.korvionmedia.com/cookie-policy/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/cookie-policy/#breadcrumb",
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
          "name": "Cookie Policy",
          "item": "https://www.korvionmedia.com/cookie-policy/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieSchema) }}
      />
      <CookiePolicyClient />
    </>
  );
}
