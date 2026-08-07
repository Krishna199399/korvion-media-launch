import type { Metadata } from "next";
import { PerformanceMarketingClient } from "./PerformanceMarketingClient";

export const metadata: Metadata = {
  title: "Performance Marketing & Lead Generation Services | Korvion Media",
  description: "Korvion Media delivers performance marketing services including Google Ads, LinkedIn Ads, conversion rate optimization, and lead generation systems focused on measurable ROI and business growth.",
  alternates: {
    canonical: "https://www.korvionmedia.com/performance-marketing-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Performance Marketing & Lead Generation Services | Korvion Media",
    description: "Korvion Media delivers performance marketing services including Google Ads, LinkedIn Ads, conversion rate optimization, and lead generation systems focused on measurable ROI and business growth.",
    type: "website",
    url: "https://www.korvionmedia.com/performance-marketing-services/",
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
      "@id": "https://www.korvionmedia.com/performance-marketing-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "Performance Marketing and Lead Generation Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/performance-marketing-services/#webpage",
      "url": "https://www.korvionmedia.com/performance-marketing-services/",
      "name": "Performance Marketing and Lead Generation Services",
      "headline": "Performance Marketing Services Focused on Revenue, Not Just Reach | Korvion Media",
      "description": "Korvion Media delivers performance marketing services including Google Ads, LinkedIn Ads, conversion rate optimization, and lead generation systems focused on measurable ROI and business growth.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/performance-marketing-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/performance-marketing-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/performance-marketing-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "Performance Marketing Services",
        "Lead Generation Services",
        "Google Ads Management",
        "Google Ads Management Services",
        "LinkedIn Ads",
        "LinkedIn Marketing Services",
        "LinkedIn Ads Agency",
        "Conversion Rate Optimization",
        "Conversion Rate Optimization Services",
        "Lead Generation",
        "Paid Lead Generation",
        "Media Planning",
        "Campaign Optimization",
        "Return on Ad Spend",
        "Conversion Funnel Optimization"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Get Free Performance Audit"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/performance-marketing-services/#breadcrumb",
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
          "name": "Performance Marketing Services",
          "item": "https://www.korvionmedia.com/performance-marketing-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/performance-marketing-services/#service",
      "name": "Performance Marketing and Lead Generation Services",
      "serviceType": "Performance Marketing",
      "url": "https://www.korvionmedia.com/performance-marketing-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides performance marketing services including Google Ads management, LinkedIn Ads, conversion rate optimization, media planning, and lead generation systems that maximize return on ad spend and business growth.",
      "image": {
        "@id": "https://www.korvionmedia.com/performance-marketing-services/#primaryimage"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Growing Businesses, SMEs, Enterprises"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.korvionmedia.com/performance-marketing-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/performance-marketing-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Performance Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Google Ads Management",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management",
              "description": "Search, display, remarketing campaigns, keyword targeting, and bid optimization."
            }
          },
          {
            "@type": "Offer",
            "name": "LinkedIn Ads and B2B Marketing",
            "itemOffered": {
              "@type": "Service",
              "name": "LinkedIn Ads and B2B Marketing",
              "description": "LinkedIn advertising, B2B lead generation, and professional audience targeting."
            }
          },
          {
            "@type": "Offer",
            "name": "Conversion Rate Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Rate Optimization",
              "description": "Landing page optimization, funnel improvements, and A B testing."
            }
          },
          {
            "@type": "Offer",
            "name": "Lead Generation Systems",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Generation Services",
              "description": "Paid lead generation, funnel based lead systems, and qualified lead acquisition."
            }
          },
          {
            "@type": "Offer",
            "name": "Media Planning and Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Media Planning Services",
              "description": "Budget allocation, campaign optimization, and channel performance tracking."
            }
          }
        ]
      },
      "knowsAbout": [
        "Performance Marketing",
        "Google Ads",
        "LinkedIn Ads",
        "Lead Generation",
        "Paid Advertising",
        "Conversion Rate Optimization",
        "Landing Page Optimization",
        "Media Planning",
        "Campaign Optimization",
        "Remarketing",
        "B2B Marketing",
        "Customer Acquisition",
        "Return on Ad Spend",
        "Conversion Funnel Optimization"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/performance-marketing-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are performance marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance marketing services focus on measurable outcomes such as leads, conversions, and revenue. Korvion Media provides paid advertising, conversion rate optimization, and lead generation systems designed to maximize return on ad spend."
          }
        },
        {
          "@type": "Question",
          "name": "How is performance marketing different from traditional marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional marketing focuses on visibility and brand awareness, while performance marketing measures results such as cost per lead, conversion rate, customer acquisition cost, and return on investment."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms do you use for performance marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Korvion Media uses Google Ads, LinkedIn Ads, and other paid advertising platforms based on your business objectives, target audience, and campaign goals."
          }
        },
        {
          "@type": "Question",
          "name": "What is conversion rate optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conversion rate optimization improves how effectively visitors become leads or customers through A B testing, landing page optimization, funnel improvements, and data driven optimization."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide lead generation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media provides lead generation services using paid campaigns, audience targeting, funnel optimization, and continuous campaign improvements to generate qualified leads."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a free performance audit or call +91 9480156345. The Korvion Media team will evaluate your campaigns and recommend a tailored performance marketing strategy."
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
      <PerformanceMarketingClient />
    </>
  );
}
