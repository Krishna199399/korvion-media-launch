import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Marketing & Technology Services | Korvion Media",
  description:
    "Explore Korvion Media's full range of digital marketing, branding, website development, CRM, automation, SEO, and custom application development services designed to accelerate business growth.",
  alternates: {
    canonical: "https://www.korvionmedia.com/services/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Marketing & Technology Services | Korvion Media",
    description:
      "Explore Korvion Media's full range of digital marketing, branding, website development, CRM, automation, SEO, and custom application development services designed to accelerate business growth.",
    type: "website",
    url: "https://www.korvionmedia.com/services/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Technology Services | Korvion Media",
    description:
      "Explore Korvion Media's full range of digital marketing, branding, website development, CRM, automation, SEO, and custom application development services designed to accelerate business growth.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.korvionmedia.com/services/#webpage",
      "url": "https://www.korvionmedia.com/services/",
      "name": "Digital Marketing & Technology Services | Korvion Media",
      "description":
        "Explore Korvion Media's full range of digital marketing, branding, website development, CRM, automation, SEO, and custom application development services designed to accelerate business growth.",
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
        "@id": "https://www.korvionmedia.com/services/#breadcrumb",
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/best-seo-services/#webpage",
          "url": "https://www.korvionmedia.com/best-seo-services/",
          "name": "Best SEO Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#webpage",
          "url": "https://www.korvionmedia.com/advanced-seo-performance-services/",
          "name": "Advanced SEO Performance Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/performance-marketing-services/#webpage",
          "url": "https://www.korvionmedia.com/performance-marketing-services/",
          "name": "Performance Marketing Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/social-media-marketing-services/#webpage",
          "url": "https://www.korvionmedia.com/social-media-marketing-services/",
          "name": "Social Media Marketing Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#webpage",
          "url": "https://www.korvionmedia.com/branding-agency-creative-services/",
          "name": "Branding Agency & Creative Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/video-production-photography-services/#webpage",
          "url": "https://www.korvionmedia.com/video-production-photography-services/",
          "name": "Video Production & Photography Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/website-design-services/#webpage",
          "url": "https://www.korvionmedia.com/website-design-services/",
          "name": "Website Design Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#webpage",
          "url": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/",
          "name": "CRM Setup & Marketing Automation Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/custom-mobile-web-app-development/#webpage",
          "url": "https://www.korvionmedia.com/custom-mobile-web-app-development/",
          "name": "Custom Mobile & Web App Development",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.korvionmedia.com/e-learning-content-development/#webpage",
          "url": "https://www.korvionmedia.com/e-learning-content-development/",
          "name": "E-Learning Content Development",
        },
      ],
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/services/#breadcrumb",
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
          "name": "Services",
          "item": "https://www.korvionmedia.com/services/",
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  );
}
