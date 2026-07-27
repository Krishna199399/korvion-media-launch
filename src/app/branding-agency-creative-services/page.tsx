import type { Metadata } from "next";
import { BrandingClient } from "./BrandingClient";

export const metadata: Metadata = {
  title: "Branding Agency and Creative Services | Korvion Media",
  description: "Korvion Media is a branding agency offering brand identity design, logo design services, and creative campaigns that help businesses build strong, scalable brands.",
  openGraph: {
    title: "Branding Agency and Creative Services | Korvion Media",
    description: "Korvion Media is a branding agency offering brand identity design, logo design services, and creative campaigns that help businesses build strong, scalable brands.",
    type: "website",
    url: "https://www.korvionmedia.com/branding-agency-creative-services/",
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
      "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "Branding Agency and Creative Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#webpage",
      "url": "https://www.korvionmedia.com/branding-agency-creative-services/",
      "name": "Branding Agency and Creative Services",
      "headline": "Branding Agency and Creative Services That Build Strong Brands",
      "description": "Korvion Media is a branding agency offering brand identity design, logo design services, and creative campaigns that help businesses build strong, scalable brands.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "Branding Agency",
        "Creative Services",
        "Brand Identity Design",
        "Brand Strategy",
        "Brand Positioning",
        "Logo Design Services",
        "Graphic Design Services",
        "Creative Campaigns",
        "Visual Identity",
        "Brand Consulting"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Book a Free Brand Consultation"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#breadcrumb",
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
          "name": "Branding Agency and Creative Services",
          "item": "https://www.korvionmedia.com/branding-agency-creative-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#service",
      "name": "Branding Agency and Creative Services",
      "serviceType": "Branding Services",
      "url": "https://www.korvionmedia.com/branding-agency-creative-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides branding and creative services including brand strategy, brand positioning, logo design, visual identity design, creative campaigns, graphic design, and brand consulting to help businesses build scalable brands.",
      "image": {
        "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#primaryimage"
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
        "serviceUrl": "https://www.korvionmedia.com/branding-agency-creative-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/branding-agency-creative-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Branding and Creative Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Brand Identity and Positioning",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Identity and Positioning",
              "description": "Brand strategy, positioning, consulting, and brand development systems."
            }
          },
          {
            "@type": "Offer",
            "name": "Logo and Visual Identity Design",
            "itemOffered": {
              "@type": "Service",
              "name": "Logo and Visual Identity Design",
              "description": "Logo design services, visual identity, brand guidelines, and scalable identity systems."
            }
          },
          {
            "@type": "Offer",
            "name": "Creative Campaigns",
            "itemOffered": {
              "@type": "Service",
              "name": "Creative Campaigns",
              "description": "Creative direction, campaign strategy, advertising creatives, and storytelling."
            }
          },
          {
            "@type": "Offer",
            "name": "Graphic Design Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Graphic Design Services",
              "description": "Marketing creatives, social media graphics, print design, and brand collateral."
            }
          }
        ]
      },
      "knowsAbout": [
        "Brand Strategy",
        "Brand Positioning",
        "Brand Identity",
        "Logo Design",
        "Creative Direction",
        "Graphic Design",
        "Visual Identity",
        "Campaign Strategy",
        "Advertising Creatives",
        "Brand Consulting"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/branding-agency-creative-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a branding agency do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A branding agency helps businesses define their identity, positioning, and communication. At Korvion Media, this includes brand strategy, brand identity design, logo design services, and creative campaigns that help businesses build consistent and recognizable brands."
          }
        },
        {
          "@type": "Question",
          "name": "How is branding different from advertising?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branding builds long term perception, trust, and recognition, while advertising focuses on promoting campaigns and generating leads or sales. Strong branding improves the effectiveness of advertising by creating consistent messaging."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a branding agency for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your business lacks clarity, consistency, or differentiation, a branding agency can help create a scalable brand system that improves recognition, customer trust, and business growth."
          }
        },
        {
          "@type": "Question",
          "name": "How long does branding take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most branding projects including strategy, positioning, and visual identity design take between three and eight weeks depending on project scope and complexity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer logo design services separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media offers standalone logo design services as well as complete brand identity solutions for businesses seeking a new visual identity or complete rebranding."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a free brand consultation or call +91 9480156345 to discuss your branding requirements with the Korvion Media team."
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
      <BrandingClient />
    </>
  );
}
