import type { Metadata } from "next";
import { SEOClient } from "./SEOClient";

export const metadata: Metadata = {
  title: "Best SEO Services | Korvion Media",
  description: "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
  alternates: {
    canonical: "https://www.korvionmedia.com/best-seo-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Best SEO Services | Korvion Media",
    description: "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
    type: "website",
    url: "https://www.korvionmedia.com/best-seo-services/",
  },
};

const schema = {
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
        "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png"
      },
      "image": {
        "@id": "https://www.korvionmedia.com/#logo"
      },
      "telephone": "+91-9480156345",
      "sameAs": [
        "https://www.linkedin.com/company/korvion-media/",
        "https://www.facebook.com/people/Korvion-Media/61592265010920/",
        "https://www.instagram.com/korvionmedia"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.korvionmedia.com/#website",
      "url": "https://www.korvionmedia.com/",
      "name": "Korvion Media",
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.korvionmedia.com/best-seo-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "SEO Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/best-seo-services/#webpage",
      "url": "https://www.korvionmedia.com/best-seo-services/",
      "name": "Best SEO Services",
      "headline": "SEO Services That Help Your Business Rank, Grow, and Stay Ahead | Korvion Media",
      "description": "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/best-seo-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/best-seo-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/best-seo-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "SEO Services",
        "Technical SEO Services",
        "SEO Website Audit",
        "SEO Keyword Research",
        "Content Optimization",
        "On Page SEO",
        "Local SEO Services",
        "Google Business Profile Optimization",
        "Google My Business Management",
        "Ecommerce SEO",
        "Shopify SEO",
        "WooCommerce SEO",
        "Link Building Services",
        "SEO Reporting",
        "Google Analytics Setup"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Get Free SEO Audit"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/best-seo-services/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.korvionmedia.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.korvionmedia.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services",
          "item": "https://www.korvionmedia.com/best-seo-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/best-seo-services/#service",
      "name": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "url": "https://www.korvionmedia.com/best-seo-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides technical SEO, keyword research, content optimization, local SEO, ecommerce SEO, authority building, analytics, and SEO reporting services that improve search visibility, qualified traffic, and long-term organic growth.",
      "image": {
        "@id": "https://www.korvionmedia.com/best-seo-services/#primaryimage"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Growing Businesses, SMEs, Ecommerce Brands, Enterprises"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.korvionmedia.com/best-seo-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/best-seo-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO and Organic Growth Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Technical SEO Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Services",
              "description": "Technical SEO audits, Core Web Vitals improvements, crawlability optimization, indexing fixes, and website structure optimization."
            }
          },
          {
            "@type": "Offer",
            "name": "Keyword Research and Content Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Keyword Research and Content Optimization",
              "description": "Keyword research, search intent mapping, on-page optimization, and content structure improvements."
            }
          },
          {
            "@type": "Offer",
            "name": "Local SEO and Google Business Profile Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO Services",
              "description": "Google Business Profile management, local SEO optimization, local keyword targeting, and location-based search visibility."
            }
          },
          {
            "@type": "Offer",
            "name": "Ecommerce SEO Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Ecommerce SEO Services",
              "description": "Shopify SEO, WooCommerce SEO, product optimization, category optimization, and ecommerce search visibility."
            }
          },
          {
            "@type": "Offer",
            "name": "Link Building and Authority Growth",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Link Building Services",
              "description": "Authority building, high-quality backlink acquisition, and topical authority development."
            }
          },
          {
            "@type": "Offer",
            "name": "Analytics and SEO Reporting",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Analytics and Reporting",
              "description": "Google Analytics setup, SEO dashboards, search visibility reporting, and organic performance tracking."
            }
          }
        ]
      },
      "knowsAbout": [
        "Search Engine Optimization",
        "Technical SEO",
        "SEO Audit",
        "Keyword Research",
        "Search Intent",
        "On Page SEO",
        "Content Optimization",
        "Local SEO",
        "Google Business Profile",
        "Google My Business",
        "Ecommerce SEO",
        "Shopify SEO",
        "WooCommerce SEO",
        "Link Building",
        "Core Web Vitals",
        "Website Crawlability",
        "Indexing",
        "SEO Reporting",
        "Google Analytics",
        "Organic Search"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/best-seo-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO services involve optimizing websites to improve search visibility, rankings, and organic traffic. Korvion Media provides technical SEO, keyword research, content optimization, local SEO, ecommerce SEO, and authority-building strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Why are technical SEO services important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO services improve how search engines crawl, index, and understand your website. Optimizing website structure, Core Web Vitals, and technical issues helps improve rankings and user experience."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in local SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO services include Google Business Profile optimization, local keyword targeting, reputation management, and location-based search optimization to improve visibility in local search results."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ecommerce SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media provides ecommerce SEO services for Shopify, WooCommerce, and other ecommerce platforms, including technical optimization, product SEO, category optimization, and search visibility improvements."
          }
        },
        {
          "@type": "Question",
          "name": "Why is keyword research important in SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keyword research identifies how people search for products, services, and information online. It helps build content aligned with search intent, improving ranking opportunities and attracting higher-quality organic traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call +91 9480156345 or schedule a consultation. The Korvion Media team will analyze your website and recommend an SEO strategy focused on long-term organic growth."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SEOClient />
    </>
  );
}
