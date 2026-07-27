import type { Metadata } from "next";
import { VideoProductionClient } from "./VideoProductionClient";

export const metadata: Metadata = {
  title: "Video Production & Photography Services | Korvion Media",
  description: "Korvion Media offers video production services, photography services, and social media content creation to help brands engage, convert, and grow with high impact visual content.",
  openGraph: {
    title: "Video Production & Photography Services | Korvion Media",
    description: "Korvion Media offers video production services, photography services, and social media content creation to help brands engage, convert, and grow with high impact visual content.",
    type: "website",
    url: "https://www.korvionmedia.com/video-production-photography-services/",
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
      "@id": "https://www.korvionmedia.com/video-production-photography-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "Video Production & Photography Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/video-production-photography-services/#webpage",
      "url": "https://www.korvionmedia.com/video-production-photography-services/",
      "name": "Video Production & Photography Services",
      "headline": "Build a More Recognizable Brand With Video Production & Photography Services | Korvion Media",
      "description": "Korvion Media offers video production services, photography services, and social media content creation to help brands engage, convert, and grow with high impact visual content.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/video-production-photography-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/video-production-photography-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/video-production-photography-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "Video Production Services",
        "Photography Services",
        "Video Production Agency",
        "Commercial Video Production Services",
        "Corporate Video Production",
        "Social Media Content Creation",
        "Social Media Content Creation Services",
        "Short Form Video Production",
        "Creative Photography Services",
        "Product Photography",
        "Motion Graphics Services",
        "Motion Graphic Design Company",
        "Motion Graphics Animation Company",
        "Content Production Services"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Book a Free Content Consultation"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/video-production-photography-services/#breadcrumb",
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
          "name": "Video Production & Photography Services",
          "item": "https://www.korvionmedia.com/video-production-photography-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/video-production-photography-services/#service",
      "name": "Video Production & Photography Services",
      "serviceType": "Video Production and Photography Services",
      "url": "https://www.korvionmedia.com/video-production-photography-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides video production services, photography services, social media content creation, motion graphics, and animation solutions that help businesses increase engagement, strengthen brand identity, and improve conversions through strategic visual storytelling.",
      "image": {
        "@id": "https://www.korvionmedia.com/video-production-photography-services/#primaryimage"
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
        "serviceUrl": "https://www.korvionmedia.com/video-production-photography-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/video-production-photography-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Video Production and Photography Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Video Production Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Production Services",
              "description": "Commercial video production, corporate videos, promotional videos, and brand storytelling."
            }
          },
          {
            "@type": "Offer",
            "name": "Social Media Content Creation",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Content Creation",
              "description": "Platform specific content, reels, short form videos, and social media content creation services."
            }
          },
          {
            "@type": "Offer",
            "name": "Photography Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Photography Services",
              "description": "Creative photography, product photography, corporate photography, and brand visuals."
            }
          },
          {
            "@type": "Offer",
            "name": "Motion Graphics and Animation",
            "itemOffered": {
              "@type": "Service",
              "name": "Motion Graphics and Animation",
              "description": "Motion graphics, explainer videos, animation, and visual storytelling."
            }
          }
        ]
      },
      "knowsAbout": [
        "Video Production",
        "Commercial Video Production",
        "Corporate Video Production",
        "Photography Services",
        "Creative Photography",
        "Product Photography",
        "Social Media Content Creation",
        "Short Form Video Production",
        "Motion Graphics",
        "Animation",
        "Visual Storytelling",
        "Creative Direction",
        "Content Strategy"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/video-production-photography-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a video production service include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A video production service covers planning, scripting, shooting, editing, and final delivery of video content. At Korvion Media, we combine creative direction with strategy to produce commercial video production, brand videos, and social content that align with your business goals and drive measurable results."
          }
        },
        {
          "@type": "Question",
          "name": "How is a video production agency different from freelancers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A video production agency offers structured workflows, creative strategy, and consistent quality across projects. Unlike freelancers, agencies provide end to end execution including concept development, production, editing, and optimization for platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide social media content creation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media provides social media content creation services including reels, short form videos, and platform specific content designed to improve engagement, reach, and conversions."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you provide photography services for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide photography services for startups, growing businesses, and enterprises across industries including ecommerce, corporate, hospitality, and personal branding."
          }
        },
        {
          "@type": "Question",
          "name": "What types of motion graphics and animation services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide motion graphics services including explainer animations, brand videos, visual storytelling, and custom animation solutions for businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How long does content production take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Production timelines depend on project scope. Social media content may take a few days, while commercial video production and larger campaigns may require several weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get video production or photography services separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can choose standalone video production services, photography services, or a complete content production solution based on your business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with your content production services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a free consultation or call +91 9480156345. The Korvion Media team will recommend the right video production, photography, and content strategy for your business."
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
      <VideoProductionClient />
    </>
  );
}
