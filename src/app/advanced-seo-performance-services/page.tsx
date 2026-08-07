import type { Metadata } from "next";
import { AdvancedSEOClient } from "./AdvancedSEOClient";

export const metadata: Metadata = {
  title: "Advanced SEO Services & CRO | Korvion Media",
  description: "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
  alternates: {
    canonical: "https://www.korvionmedia.com/advanced-seo-performance-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Advanced SEO Services & CRO | Korvion Media",
    description: "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
    type: "website",
    url: "https://www.korvionmedia.com/advanced-seo-performance-services/",
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
      "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "Advanced SEO Services and Performance Optimization"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#webpage",
      "url": "https://www.korvionmedia.com/advanced-seo-performance-services/",
      "name": "Advanced SEO Services & CRO",
      "headline": "Scale Smarter With Advanced SEO Services and Conversion Optimization | Korvion Media",
      "description": "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "Advanced SEO Services",
        "Advanced SEO",
        "SaaS SEO Services",
        "Conversion Rate Optimization",
        "CRO Services",
        "Core Web Vitals Optimization",
        "Page Speed Optimization",
        "AI SEO Services",
        "Automated SEO",
        "Content Marketing Services",
        "Topical Authority",
        "Content Clusters",
        "SEO Performance",
        "SEO Automation",
        "Organic Growth"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Get Advanced SEO Audit"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#breadcrumb",
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
          "name": "Advanced SEO Services",
          "item": "https://www.korvionmedia.com/advanced-seo-performance-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#service",
      "name": "Advanced SEO Services",
      "serviceType": "Advanced Search Engine Optimization",
      "url": "https://www.korvionmedia.com/advanced-seo-performance-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides advanced SEO services including SaaS SEO, conversion rate optimization, Core Web Vitals optimization, AI-powered SEO workflows, page speed optimization, and topical authority strategies designed to improve scalable organic growth and business performance.",
      "image": {
        "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#primaryimage"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "SaaS Businesses, Startups, Ecommerce Brands, Digital Platforms, Enterprises"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.korvionmedia.com/advanced-seo-performance-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/advanced-seo-performance-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Advanced SEO and Performance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "SaaS SEO Services",
            "itemOffered": {
              "@type": "Service",
              "name": "SaaS SEO Services",
              "description": "Product-led SEO strategies, feature page optimization, solution page optimization, and scalable content architecture."
            }
          },
          {
            "@type": "Offer",
            "name": "Conversion Rate Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Rate Optimization Services",
              "description": "Landing page optimization, conversion funnel optimization, user journey improvements, and CRO strategy."
            }
          },
          {
            "@type": "Offer",
            "name": "Core Web Vitals and Speed Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Core Web Vitals Optimization",
              "description": "Page speed optimization, Core Web Vitals improvements, technical performance optimization, and website speed enhancements."
            }
          },
          {
            "@type": "Offer",
            "name": "AI SEO Services",
            "itemOffered": {
              "@type": "Service",
              "name": "AI SEO Services",
              "description": "AI-driven SEO workflows, automation, search data analysis, and scalable optimization processes."
            }
          },
          {
            "@type": "Offer",
            "name": "Content Marketing and Topical Authority",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Marketing Services",
              "description": "Content cluster planning, topical authority strategies, search intent optimization, and long-term content growth."
            }
          }
        ]
      },
      "knowsAbout": [
        "Advanced SEO",
        "Technical SEO",
        "SaaS SEO",
        "Conversion Rate Optimization",
        "Conversion Funnel Optimization",
        "Core Web Vitals",
        "Page Speed Optimization",
        "Website Performance",
        "AI SEO",
        "SEO Automation",
        "Search Intent",
        "Content Marketing",
        "Content Clusters",
        "Topical Authority",
        "Organic Growth",
        "User Experience",
        "Scalable SEO"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/advanced-seo-performance-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are advanced SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advanced SEO services focus on technical performance, scalability, conversion optimization, automation, and sustainable organic growth. Korvion Media combines SaaS SEO, Core Web Vitals optimization, AI SEO workflows, CRO, and topical authority strategies."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between traditional SEO and advanced SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional SEO primarily focuses on rankings and keyword visibility, while advanced SEO emphasizes website performance, user experience, technical infrastructure, conversion optimization, automation, and scalable organic growth."
          }
        },
        {
          "@type": "Question",
          "name": "Why are conversion rate optimization services important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conversion rate optimization improves how effectively visitors become leads or customers by optimizing landing pages, user journeys, messaging, and conversion funnels to generate better business outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "What are AI SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI SEO services use automation and data-driven workflows to improve SEO efficiency, content optimization, search analysis, and performance at scale. Korvion Media applies AI strategically to accelerate optimization and decision-making."
          }
        },
        {
          "@type": "Question",
          "name": "How does page speed optimization affect SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Page speed influences user experience, Core Web Vitals, search rankings, bounce rates, and conversions. Faster websites improve engagement while supporting stronger long-term organic growth."
          }
        },
        {
          "@type": "Question",
          "name": "Who should invest in advanced SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advanced SEO services are ideal for SaaS companies, ecommerce brands, scaling startups, digital platforms, and businesses that already generate organic traffic but want stronger performance, conversions, and scalable growth."
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
      <AdvancedSEOClient />
    </>
  );
}
