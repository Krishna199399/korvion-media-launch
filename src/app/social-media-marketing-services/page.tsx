import type { Metadata } from "next";
import { SocialMediaClient } from "./SocialMediaClient";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Korvion Media",
  description: "Korvion Media delivers social media marketing services, strategy, influencer campaigns, and reputation management to help brands grow, engage, and build communities.",
  openGraph: {
    title: "Social Media Marketing Services | Korvion Media",
    description: "Korvion Media delivers social media marketing services, strategy, influencer campaigns, and reputation management to help brands grow, engage, and build communities.",
    type: "website",
    url: "https://www.korvionmedia.com/social-media-marketing-services/",
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
      "@id": "https://www.korvionmedia.com/social-media-marketing-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "Social Media Marketing Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/social-media-marketing-services/#webpage",
      "url": "https://www.korvionmedia.com/social-media-marketing-services/",
      "name": "Social Media Marketing Services",
      "headline": "Social Media Marketing Services That Make Your Brand Impossible to Ignore | Korvion Media",
      "description": "Korvion Media delivers social media marketing services, strategy, influencer campaigns, and reputation management to help brands grow, engage, and build communities.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/social-media-marketing-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/social-media-marketing-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/social-media-marketing-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "Social Media Marketing Services",
        "Social Media Marketing Agency",
        "Social Media Marketing Strategy",
        "Social Media Marketing Plan",
        "Social Media Marketing Campaign",
        "Content Publishing",
        "Influencer Marketing",
        "UGC Strategy",
        "Community Building",
        "Reputation Management",
        "Online Reputation Management",
        "Social Media Management"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Book a Free Social Media Consultation"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/social-media-marketing-services/#breadcrumb",
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
          "name": "Social Media Marketing Services",
          "item": "https://www.korvionmedia.com/social-media-marketing-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/social-media-marketing-services/#service",
      "name": "Social Media Marketing Services",
      "serviceType": "Social Media Marketing",
      "url": "https://www.korvionmedia.com/social-media-marketing-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides social media marketing services including strategy development, content planning, platform management, influencer marketing, community building, reputation management, and performance tracking to help businesses achieve sustainable growth.",
      "image": {
        "@id": "https://www.korvionmedia.com/social-media-marketing-services/#primaryimage"
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
        "serviceUrl": "https://www.korvionmedia.com/social-media-marketing-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/social-media-marketing-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Strategy and Planning",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Strategy and Planning",
              "description": "Social media marketing strategy, campaign planning, and business growth planning."
            }
          },
          {
            "@type": "Offer",
            "name": "Management and Execution",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Management",
              "description": "Content publishing, engagement management, and performance tracking."
            }
          },
          {
            "@type": "Offer",
            "name": "Influencer and UGC Campaigns",
            "itemOffered": {
              "@type": "Service",
              "name": "Influencer Marketing",
              "description": "Influencer campaign management, UGC strategy, and creator collaborations."
            }
          },
          {
            "@type": "Offer",
            "name": "Community and Growth Systems",
            "itemOffered": {
              "@type": "Service",
              "name": "Community Building",
              "description": "Audience engagement systems, community management, and growth frameworks."
            }
          },
          {
            "@type": "Offer",
            "name": "Reputation Management",
            "itemOffered": {
              "@type": "Service",
              "name": "Online Reputation Management",
              "description": "Online reputation management and brand perception management."
            }
          }
        ]
      },
      "knowsAbout": [
        "Social Media Marketing",
        "Social Media Strategy",
        "Content Marketing",
        "Content Publishing",
        "Influencer Marketing",
        "UGC Marketing",
        "Community Building",
        "Audience Engagement",
        "Brand Awareness",
        "Online Reputation Management",
        "Social Media Campaigns",
        "Performance Tracking"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/social-media-marketing-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a social media marketing agency do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A social media marketing agency helps businesses plan, execute, and optimize their presence across social media platforms. Korvion Media provides strategy development, content management, influencer campaigns, and reputation management to support long term growth."
          }
        },
        {
          "@type": "Question",
          "name": "Why is social media marketing important for business growth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media marketing helps businesses increase visibility, strengthen brand perception, build audience trust, and improve engagement through a structured long term strategy."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide social media marketing services for all industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media provides social media marketing services for startups, growing businesses, and enterprises across different industries with customized strategies based on business goals and audience behavior."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in social media marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Services include strategy development, content planning, content publishing, audience engagement, influencer marketing, reputation management, and performance tracking."
          }
        },
        {
          "@type": "Question",
          "name": "How do influencer marketing campaigns work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Influencer marketing campaigns involve identifying suitable creators, planning campaigns, managing collaborations, and measuring campaign performance to increase authentic audience engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a free consultation or call +91 9480156345. The Korvion Media team will understand your business goals and recommend the right social media marketing strategy."
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
      <SocialMediaClient />
    </>
  );
}
