import type { Metadata } from "next";
import { ELearningClient } from "./ELearningClient";

export const metadata: Metadata = {
  title: "E-Learning Content Development | Korvion Media",
  description: "Korvion Media creates e-learning content, LMS training modules, and animated learning experiences designed to improve engagement, retention, and training effectiveness.",
  alternates: {
    canonical: "https://www.korvionmedia.com/e-learning-content-development/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "E-Learning Content Development | Korvion Media",
    description: "Korvion Media creates e-learning content, LMS training modules, and animated learning experiences designed to improve engagement, retention, and training effectiveness.",
    type: "website",
    url: "https://www.korvionmedia.com/e-learning-content-development/",
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
      "@id": "https://www.korvionmedia.com/e-learning-content-development/#primaryimage",
      "url": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "contentUrl": "https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png",
      "caption": "E-Learning Content Development Services"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.korvionmedia.com/e-learning-content-development/#webpage",
      "url": "https://www.korvionmedia.com/e-learning-content-development/",
      "name": "E-Learning Content Development",
      "headline": "Build Interactive E-Learning Experiences That People Actually Remember | Korvion Media",
      "description": "Korvion Media creates e-learning content, LMS training modules, and animated learning experiences designed to improve engagement, retention, and training effectiveness.",
      "isPartOf": {
        "@id": "https://www.korvionmedia.com/#website"
      },
      "about": {
        "@id": "https://www.korvionmedia.com/e-learning-content-development/#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.korvionmedia.com/e-learning-content-development/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://www.korvionmedia.com/e-learning-content-development/#breadcrumb"
      },
      "publisher": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "inLanguage": "en",
      "keywords": [
        "E Learning Content Development",
        "E Learning Module Development",
        "E Learning Training Modules",
        "E Learning Content Creation",
        "Training Content Development",
        "LMS Content Development",
        "LMS Content Creation",
        "Interactive E Learning Content",
        "Interactive Learning Modules",
        "SCORM Modules",
        "Animated Training Video Production",
        "Corporate Training",
        "Employee Onboarding",
        "Compliance Training",
        "Learning Management System"
      ],
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.korvionmedia.com/contact/",
        "name": "Book a Free Learning Strategy Call"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.korvionmedia.com/e-learning-content-development/#breadcrumb",
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
          "name": "E-Learning Content Development",
          "item": "https://www.korvionmedia.com/e-learning-content-development/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.korvionmedia.com/e-learning-content-development/#service",
      "name": "E-Learning Content Development Services",
      "serviceType": "E-Learning Content Development",
      "url": "https://www.korvionmedia.com/e-learning-content-development/",
      "provider": {
        "@id": "https://www.korvionmedia.com/#organization"
      },
      "description": "Korvion Media develops interactive e-learning content, LMS training modules, SCORM-compatible courses, animated learning experiences, and corporate training solutions designed to improve learner engagement, knowledge retention, and training effectiveness.",
      "image": {
        "@id": "https://www.korvionmedia.com/e-learning-content-development/#primaryimage"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Businesses, Educational Institutions, Training Teams, Enterprises"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.korvionmedia.com/e-learning-content-development/"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.korvionmedia.com/e-learning-content-development/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "E-Learning Content Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "E-Learning Module Development",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Learning Module Development",
              "description": "Interactive e-learning module development, training content development, and structured digital learning experiences."
            }
          },
          {
            "@type": "Offer",
            "name": "LMS Content Development",
            "itemOffered": {
              "@type": "Service",
              "name": "LMS Content Development",
              "description": "LMS content creation, SCORM compatible modules, assessments, quizzes, and learning management system content."
            }
          },
          {
            "@type": "Offer",
            "name": "Interactive E-Learning Content",
            "itemOffered": {
              "@type": "Service",
              "name": "Interactive E-Learning Content",
              "description": "Interactive learning modules, scenario-based learning, gamification, and learner engagement solutions."
            }
          },
          {
            "@type": "Offer",
            "name": "Animated Training Video Production",
            "itemOffered": {
              "@type": "Service",
              "name": "Animated Training Video Production",
              "description": "2D animation, 3D animation, explainer videos, process visualization, and motion-based learning content."
            }
          }
        ]
      },
      "knowsAbout": [
        "E Learning",
        "E Learning Content Development",
        "LMS Content Development",
        "SCORM",
        "Interactive Learning",
        "Instructional Design",
        "Training Content Development",
        "Corporate Training",
        "Employee Onboarding",
        "Compliance Training",
        "Knowledge Retention",
        "Gamification",
        "Animated Training Videos",
        "2D Animation",
        "3D Animation",
        "Learning Experience Design"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.korvionmedia.com/e-learning-content-development/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is e-learning content development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-learning content development involves creating structured digital learning materials such as interactive modules, videos, assessments, and animations that improve learner engagement, understanding, and knowledge retention."
          }
        },
        {
          "@type": "Question",
          "name": "What are e-learning training modules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-learning training modules are structured digital lessons designed for online learning environments. They can include videos, quizzes, animations, scenarios, and interactive elements that improve learner participation and retention."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide LMS content development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Korvion Media develops LMS-ready training content, SCORM-compatible modules, assessments, and interactive learning experiences that integrate seamlessly with learning management systems."
          }
        },
        {
          "@type": "Question",
          "name": "What is interactive e-learning content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interactive e-learning content encourages learners to participate through quizzes, clickable interactions, simulations, and scenario-based learning instead of passively consuming information, leading to better engagement and learning outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "Why use animated training video production for learning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Animated training videos simplify complex concepts using visual storytelling, motion graphics, and animation, making learning easier to understand while improving engagement and long-term knowledge retention."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call +91 9480156345 or schedule a consultation. The Korvion Media team will understand your training objectives and recommend the right e-learning and LMS content solution for your organization."
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
      <ELearningClient />
    </>
  );
}
