import fs from "fs";
import path from "path";

const schemaMdPath = path.join(process.cwd(), "service pages schema.md");
const content = fs.readFileSync(schemaMdPath, "utf-8");

const slugMap = {
  "branding-agency-creative-services": {
    dir: "branding-agency-creative-services",
    client: "BrandingClient",
    title: "Branding Agency and Creative Services | Korvion Media",
    desc: "Korvion Media is a branding agency offering brand identity design, logo design services, and creative campaigns that help businesses build strong, scalable brands.",
  },
  "video-production-photography-services": {
    dir: "video-production-photography-services",
    client: "VideoProductionClient",
    title: "Video Production & Photography Services | Korvion Media",
    desc: "Korvion Media offers video production services, photography services, and social media content creation to help brands engage, convert, and grow with high impact visual content.",
  },
  "social-media-marketing-services": {
    dir: "social-media-marketing-services",
    client: "SocialMediaClient",
    title: "Social Media Marketing Services | Korvion Media",
    desc: "Korvion Media delivers social media marketing services, strategy, influencer campaigns, and reputation management to help brands grow, engage, and build communities.",
  },
  "performance-marketing-services": {
    dir: "performance-marketing-services",
    client: "PerformanceMarketingClient",
    title: "Performance Marketing & Lead Generation Services | Korvion Media",
    desc: "Korvion Media delivers performance marketing services including Google Ads, LinkedIn Ads, conversion rate optimization, and lead generation systems focused on measurable ROI and business growth.",
  },
  "website-design-services": {
    dir: "website-design-services",
    client: "WebsiteDesignClient",
    title: "Website Design Services | Korvion Media",
    desc: "Korvion Media offers website design services, UI UX design, and web development focused on conversion, performance, and real business growth.",
  },
  "crm-setup-marketing-automation-services": {
    dir: "crm-setup-marketing-automation-services",
    client: "CRMClient",
    title: "CRM Setup & Marketing Automation Services | Korvion Media",
    desc: "Korvion Media provides CRM implementation services, marketing automation, WhatsApp workflows, and reporting dashboards to streamline lead management and improve conversions.",
  },
  "e-learning-content-development": {
    dir: "e-learning-content-development",
    client: "ELearningClient",
    title: "E-Learning Content Development | Korvion Media",
    desc: "Korvion Media creates e-learning content, LMS training modules, and animated learning experiences designed to improve engagement, retention, and training effectiveness.",
  },
  "custom-mobile-web-app-development": {
    dir: "custom-mobile-web-app-development",
    client: "AppDevClient",
    title: "Custom Mobile & Web App Development Services | Korvion Media",
    desc: "Korvion Media delivers custom mobile app development, web app development, DevOps, backend systems, and product engineering solutions built for scalability, security, and performance.",
  },
  "best-seo-services": {
    dir: "best-seo-services",
    client: "SEOClient",
    title: "Best SEO Services | Korvion Media",
    desc: "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
  },
  "advanced-seo-performance-services": {
    dir: "advanced-seo-performance-services",
    client: "AdvancedSEOClient",
    title: "Advanced SEO Services & CRO | Korvion Media",
    desc: "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
  },
};

const parts = content.split(/Slug:\s*/i);

for (const part of parts) {
  if (!part.trim()) continue;

  const lines = part.trim().split("\n");
  const rawSlug = lines[0].trim().replace(/[`\/]/g, "");

  const config = slugMap[rawSlug];

  if (!config) {
    console.warn(`No config found for rawSlug: "${rawSlug}"`);
    continue;
  }

  const jsonStartIndex = part.indexOf("{");
  const jsonEndIndex = part.lastIndexOf("}");

  if (jsonStartIndex === -1 || jsonEndIndex === -1) {
    console.error(`Invalid JSON for slug: ${rawSlug}`);
    continue;
  }

  let rawJson = part.substring(jsonStartIndex, jsonEndIndex + 1);
  rawJson = rawJson
    .replace(/\\#/g, "#")
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]")
    .replace(/\\_/g, "_")
    .replace(/\\\+/g, "+")
    .replace(/\\\./g, ".");

  try {
    const parsedObj = JSON.parse(rawJson);
    const pageFilePath = path.join(process.cwd(), "src", "app", config.dir, "page.tsx");

    const pageContent = `import type { Metadata } from "next";
import { ${config.client} } from "./${config.client}";

export const metadata: Metadata = {
  title: "${config.title}",
  description: "${config.desc.replace(/"/g, '\\"')}",
  openGraph: {
    title: "${config.title}",
    description: "${config.desc.replace(/"/g, '\\"')}",
    type: "website",
    url: "https://www.korvionmedia.com/${config.dir}/",
  },
};

const schema = ${JSON.stringify(parsedObj, null, 2)};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <${config.client} />
    </>
  );
}
`;

    fs.writeFileSync(pageFilePath, pageContent, "utf-8");
    console.log(`✓ Updated ${config.dir}/page.tsx`);
  } catch (err) {
    console.error(`Error parsing JSON for ${rawSlug}:`, err.message);
  }
}
