import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.korvionmedia.com";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/best-seo-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/advanced-seo-performance-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/performance-marketing-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/social-media-marketing-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/branding-agency-creative-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/video-production-photography-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/website-design-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/crm-setup-marketing-automation-services/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/custom-mobile-web-app-development/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/e-learning-content-development/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/locations/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/industries/manufacturing/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-studies/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/digital-marketing-company-in-bangalore/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/digital-marketing-company-in-belagavi/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/process/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/careers/`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about-us/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy/`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms-and-conditions/`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/cookie-policy/`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
