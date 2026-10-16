import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Korvion Media | Digital Marketing Company in India",
  description:
    "Korvion Media helps businesses accelerate digital growth through SEO, branding, website development, performance marketing, CRM solutions, marketing automation, content production, and custom mobile app development.",
  alternates: {
    canonical: "https://www.korvionmedia.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Korvion Media | Digital Marketing Company in India",
    description:
      "Korvion Media helps businesses accelerate digital growth through SEO, branding, website development, performance marketing, CRM solutions, marketing automation, content production, and custom mobile app development.",
    type: "website",
    url: "https://www.korvionmedia.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korvion Media | Digital Marketing Company in India",
    description:
      "Korvion Media helps businesses accelerate digital growth through SEO, branding, website development, performance marketing, CRM solutions, marketing automation, content production, and custom mobile app development.",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.korvionmedia.com/#organization",
      "name": "Korvion Media",
      "url": "https://www.korvionmedia.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.korvionmedia.com/#logo",
        "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
        "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      },
      "image": {
        "@id": "https://www.korvionmedia.com/#logo",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "@id": "https://www.korvionmedia.com/#primary-contact",
        "contactType": "Customer Support",
        "telephone": "+91 9480156345",
        "email": "info@korvionmedia.com",
        "availableLanguage": ["English", "Kannada", "Hindi"],
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India",
        },
        {
          "@type": "City",
          "name": "Belagavi",
        },
        {
          "@type": "City",
          "name": "Bengaluru",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/company/korvion-media/",
        "https://www.instagram.com/korvionmedia/",
        "https://www.facebook.com/korvionmedia/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.korvionmedia.com/#website",
      "url": "https://www.korvionmedia.com/",
      "name": "Korvion Media",
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization",
      },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.korvionmedia.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/#webpage",
      "url": "https://www.korvionmedia.com/",
      "name": "Korvion Media | Digital Marketing Company in India",
      "description":
        "Korvion Media helps businesses accelerate digital growth through SEO, branding, website development, performance marketing, CRM solutions, marketing automation, content production, and custom mobile app development.",
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
        "@id": "https://www.korvionmedia.com/#breadcrumb",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.korvionmedia.com/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomePageClient />
    </>
  );
}
