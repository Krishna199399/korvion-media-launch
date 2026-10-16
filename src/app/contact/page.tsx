import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Korvion Media | Book a Strategy Call & Growth Audit",
  description:
    "Contact Korvion Media for SEO, branding, website development, performance marketing, social media marketing, CRM implementation, marketing automation, custom mobile app development, and digital growth solutions.",
  alternates: {
    canonical: "https://www.korvionmedia.com/contact/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Korvion Media | Digital Growth & Performance Marketing Agency",
    description:
      "Contact Korvion Media for SEO, branding, website development, performance marketing, social media marketing, CRM implementation, marketing automation, custom mobile app development, and digital growth solutions.",
    type: "website",
    url: "https://www.korvionmedia.com/contact/",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.korvionmedia.com/contact/#contactpage",
      "url": "https://www.korvionmedia.com/contact/",
      "name": "Contact Korvion Media",
      "description":
        "Contact Korvion Media for SEO, branding, website development, performance marketing, social media marketing, CRM implementation, marketing automation, custom mobile app development, and digital growth solutions.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website",
      },
      "about": {
        "@id": "https://www.korvionmedia.com/#organization",
      },
      "mainEntity": {
        "@id": "https://www.korvionmedia.com/#primary-contact",
      },
      "inLanguage": "en-IN",
    },
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
    },
    {
      "@type": "ContactPoint",
      "@id": "https://www.korvionmedia.com/#primary-contact",
      "contactType": "Customer Support",
      "telephone": "+91 9480156345",
      "email": "info@korvionmedia.com",
      "availableLanguage": ["English", "Kannada", "Hindi"],
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/contact/#breadcrumb",
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
          "name": "Contact",
          "item": "https://www.korvionmedia.com/contact/",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
