import type { Metadata } from "next";
import { WebsiteDesignClient } from "./WebsiteDesignClient";

export const metadata: Metadata = {
  title: "Website Design Services | Korvion Media",
  description: "Korvion Media offers website design services, UI UX design, and web development focused on conversion, performance, and real business growth.",
  alternates: {
    canonical: "https://www.korvionmedia.com/website-design-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Website Design Services | Korvion Media",
    description: "Korvion Media offers website design services, UI UX design, and web development focused on conversion, performance, and real business growth.",
    type: "website",
    url: "https://www.korvionmedia.com/website-design-services/",
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
      "@id": "https://www.korvionmedia.com/website-design-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "Website Design Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/website-design-services/#webpage",
      "url": "https://www.korvionmedia.com/website-design-services/",
      "name": "Website Design Services",
      "headline": "Build a Website That Drives Leads, Sales, and Business Growth | Korvion Media",
      "description": "Korvion Media offers website design services, UI UX design, and web development focused on conversion, performance, and real business growth.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/website-design-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/website-design-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/website-design-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "Website Design Services",
        "Website Design and Development",
        "UI UX Design Services",
        "Responsive Website Design",
        "Custom Web Development",
        "Website Redesign Services",
        "Landing Page Design",
        "Conversion Focused Website",
        "Web Development",
        "User Experience Design",
        "Website Performance",
        "Website Audit"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Get Free Website Audit"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/website-design-services/#breadcrumb",
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
          "name": "Website Design Services",
          "item": "https://www.korvionmedia.com/website-design-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/website-design-services/#service",
      "name": "Website Design Services",
      "serviceType": "Website Design and Development",
      "url": "https://www.korvionmedia.com/website-design-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides website design services, UI UX design, custom web development, website redesign, landing page design, and conversion focused web experiences that help businesses generate leads, improve user experience, and increase conversions.",
      "image": {
        "@id": "https://www.korvionmedia.com/website-design-services/#primaryimage"
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
        "serviceUrl": "https://www.korvionmedia.com/website-design-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/website-design-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Design and Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "UI UX Design Services",
            "itemOffered": {
              "@type": "Service",
              "name": "UI UX Design Services",
              "description": "User journey mapping, interaction design, and user experience optimization."
            }
          },
          {
            "@type": "Offer",
            "name": "Website Design Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Website Design Services",
              "description": "Responsive website design, mobile optimized layouts, and scalable design systems."
            }
          },
          {
            "@type": "Offer",
            "name": "Custom Web Development",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description": "Secure, scalable, and high performance web development solutions."
            }
          },
          {
            "@type": "Offer",
            "name": "Landing Page Design",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Focused Landing Pages",
              "description": "Landing pages optimized for conversions with A B testing ready structures."
            }
          },
          {
            "@type": "Offer",
            "name": "Website Redesign Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Redesign Services",
              "description": "Website redesign, UX improvements, performance upgrades, and conversion optimization."
            }
          }
        ]
      },
      "knowsAbout": [
        "Website Design",
        "Website Development",
        "Custom Web Development",
        "Responsive Web Design",
        "UI Design",
        "UX Design",
        "User Journey Mapping",
        "Interaction Design",
        "Landing Page Design",
        "Conversion Rate Optimization",
        "Website Redesign",
        "Website Performance",
        "Mobile Optimization",
        "User Experience"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/website-design-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are website design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website design services involve planning, designing, and structuring websites to improve user experience, usability, and business performance. Korvion Media combines UI UX design, responsive layouts, and conversion focused design to build websites that support business growth."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between web design and web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web design focuses on layout, visual structure, and user experience, while web development focuses on functionality, performance, security, and technical implementation. Both work together to create a complete website."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide UI UX design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media provides UI UX design services focused on improving user journeys, reducing friction, increasing usability, and guiding visitors toward meaningful actions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website redesign services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide website redesign services that improve user experience, website performance, usability, and conversion rates through strategic redesign and optimization."
          }
        },
        {
          "@type": "Question",
          "name": "How long does website design and development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines depend on scope and complexity. Most website design and development projects are completed within a few weeks to a couple of months, including planning, design, development, testing, and optimization."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a free website audit or call +91 9480156345. The Korvion Media team will evaluate your requirements and recommend the right website design and development solution."
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
      <WebsiteDesignClient />
    </>
  );
}
