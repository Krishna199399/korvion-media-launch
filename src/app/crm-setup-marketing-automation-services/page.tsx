import type { Metadata } from "next";
import { CRMClient } from "./CRMClient";

export const metadata: Metadata = {
  title: "CRM Setup & Marketing Automation Services | Korvion Media",
  description: "Korvion Media provides CRM implementation services, marketing automation, WhatsApp workflows, and reporting dashboards to streamline lead management and improve conversions.",
  openGraph: {
    title: "CRM Setup & Marketing Automation Services | Korvion Media",
    description: "Korvion Media provides CRM implementation services, marketing automation, WhatsApp workflows, and reporting dashboards to streamline lead management and improve conversions.",
    type: "website",
    url: "https://www.korvionmedia.com/crm-setup-marketing-automation-services/",
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
      "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "CRM Setup and Marketing Automation Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#webpage",
      "url": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/",
      "name": "CRM Setup and Marketing Automation Services",
      "headline": "Build a CRM and Automation System That Never Misses a Lead | Korvion Media",
      "description": "Korvion Media provides CRM implementation services, marketing automation, WhatsApp workflows, and reporting dashboards to streamline lead management and improve conversions.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "CRM Implementation Services",
        "CRM Setup",
        "CRM Configuration",
        "HubSpot CRM Setup",
        "Zoho CRM Setup",
        "CRM Automation",
        "CRM Customization",
        "CRM Integration Services",
        "Marketing Automation Services",
        "Marketing Automation",
        "WhatsApp Marketing Automation",
        "Email Marketing Automation",
        "Lead Management",
        "Lead Nurturing",
        "Reporting Dashboard",
        "AI Reporting"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Get Free Automation Audit"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#breadcrumb",
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
          "name": "CRM Setup and Marketing Automation Services",
          "item": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#service",
      "name": "CRM Setup and Marketing Automation Services",
      "serviceType": "CRM Implementation and Marketing Automation",
      "url": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media provides CRM implementation, CRM automation, CRM integration, marketing automation, WhatsApp automation, email automation, and AI powered reporting solutions that help businesses improve lead management, operational efficiency, and conversions.",
      "image": {
        "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#primaryimage"
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
        "serviceUrl": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "CRM Setup and Marketing Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "CRM Implementation Services",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM Implementation Services",
              "description": "CRM setup, CRM configuration, HubSpot CRM setup, Zoho CRM setup, and sales pipeline implementation."
            }
          },
          {
            "@type": "Offer",
            "name": "CRM Automation and Customization",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM Automation Services",
              "description": "CRM automation, workflow automation, lead assignment, CRM customization, and follow up automation."
            }
          },
          {
            "@type": "Offer",
            "name": "CRM Integration Services",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM Integration Services",
              "description": "CRM integrations with websites, forms, marketing platforms, and sales tools."
            }
          },
          {
            "@type": "Offer",
            "name": "Marketing Automation Services",
            "itemOffered": {
              "@type": "Service",
              "name": "Marketing Automation Services",
              "description": "Marketing automation, email automation workflows, lead nurturing, and customer engagement automation."
            }
          },
          {
            "@type": "Offer",
            "name": "WhatsApp and Email Automation",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Marketing Automation",
              "description": "WhatsApp automation, automated email sequences, lead nurturing, and customer communication workflows."
            }
          },
          {
            "@type": "Offer",
            "name": "AI Reporting and Dashboard",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Powered Reporting",
              "description": "AI reporting dashboards, real time lead tracking, funnel reporting, and business performance insights."
            }
          }
        ]
      },
      "knowsAbout": [
        "CRM",
        "CRM Implementation",
        "CRM Setup",
        "HubSpot CRM",
        "Zoho CRM",
        "CRM Automation",
        "CRM Integration",
        "Marketing Automation",
        "Email Marketing Automation",
        "WhatsApp Marketing Automation",
        "Lead Management",
        "Lead Nurturing",
        "Workflow Automation",
        "Sales Pipeline",
        "AI Reporting Dashboard",
        "Lead Tracking"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/crm-setup-marketing-automation-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is CRM implementation and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRM implementation involves setting up and configuring a customer relationship management system to organize leads, customer information, and sales processes. Korvion Media helps businesses improve lead management, visibility, and conversion efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "What are marketing automation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marketing automation services create automated workflows for emails, follow ups, lead nurturing, and customer communication, reducing manual work while improving consistency and engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide HubSpot CRM setup and Zoho CRM setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media provides HubSpot CRM setup, Zoho CRM setup, customization, workflow automation, and integration services based on your business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How does WhatsApp marketing automation help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WhatsApp marketing automation enables instant responses, automated follow ups, lead nurturing, and customer communication, improving response time and reducing missed opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "Can CRM systems integrate with existing tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CRM integration services connect your CRM with websites, forms, marketing platforms, email tools, and communication systems to create a unified workflow."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call +91 9480156345 or schedule a consultation. The Korvion Media team will review your existing lead management process and recommend the right CRM and automation solution."
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
      <CRMClient />
    </>
  );
}
