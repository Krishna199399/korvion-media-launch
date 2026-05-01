import {
  Sparkles,
  Film,
  Megaphone,
  TrendingUp,
  Layout,
  Workflow,
  GraduationCap,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  headline: string;
  outcomes: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  idealFor: string;
};

export const services: Service[] = [
  {
    icon: Sparkles,
    number: "01",
    slug: "branding-creative",
    title: "Branding & Creative",
    tagline: "Brand strategy, identity systems & visual design.",
    headline: "Identities engineered to command premium pricing.",
    outcomes: [
      "Strategic brand positioning & narrative",
      "Logo systems, visual identity, brand guidelines",
      "Packaging, pitch decks, sales collateral",
    ],
    deliverables: [
      "Brand strategy document & positioning",
      "Logo, typography & color system",
      "Brand guideline book (50+ pages)",
      "Packaging & print collateral",
      "Pitch decks & sales kits",
    ],
    process: [
      { step: "Discover", detail: "Audit your market, competitors and customer." },
      { step: "Define", detail: "Lock positioning, voice, and brand pillars." },
      { step: "Design", detail: "Build the visual identity system end-to-end." },
      { step: "Deploy", detail: "Roll out across every customer touchpoint." },
    ],
    idealFor: "Founders launching a new brand or scaling brands stuck looking 'cheap'.",
  },
  {
    icon: Film,
    number: "02",
    slug: "content-production",
    title: "Content & Production",
    tagline: "Cinematic ad films, reels, photography & post.",
    headline: "Story-driven content built to stop the scroll.",
    outcomes: [
      "Cinematic ad films, brand documentaries, reels",
      "Photography, product shoots, founder content",
      "Scripting, direction, post-production",
    ],
    deliverables: [
      "Brand films & TVCs",
      "Founder & podcast content systems",
      "Product & lifestyle photography",
      "30+ short-form reels per month",
      "Edits, color, sound design & motion",
    ],
    process: [
      { step: "Concept", detail: "Hooks, scripts and storyboards rooted in strategy." },
      { step: "Pre-Pro", detail: "Casting, locations, gear, shot lists." },
      { step: "Shoot", detail: "Cinema-grade production with our in-house crew." },
      { step: "Post", detail: "Edit, color, sound, motion — ready to ship." },
    ],
    idealFor: "Brands that need premium content at the volume modern channels demand.",
  },
  {
    icon: Megaphone,
    number: "03",
    slug: "social-marketing",
    title: "Social Media & Marketing",
    tagline: "Organic systems on IG, LinkedIn, YouTube.",
    headline: "Channels that compound followers into customers.",
    outcomes: [
      "Organic content systems across IG, LinkedIn, YouTube",
      "Community building & creator collaborations",
      "Always-on content calendars with weekly reporting",
    ],
    deliverables: [
      "Monthly content calendar",
      "Hooks, captions, hashtags, scheduling",
      "Community management & DM ops",
      "Creator & influencer partnerships",
      "Weekly performance reports",
    ],
    process: [
      { step: "Audit", detail: "Benchmark your channels vs category leaders." },
      { step: "Strategy", detail: "Pillars, formats, posting cadence." },
      { step: "Produce", detail: "Daily-ready creative engine." },
      { step: "Optimize", detail: "Double down on what compounds." },
    ],
    idealFor: "Founders & brands ready to be the top-of-mind name in their category.",
  },
  {
    icon: TrendingUp,
    number: "04",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Meta, Google, YouTube, LinkedIn paid media.",
    headline: "Paid media that prints predictable ROAS.",
    outcomes: [
      "Meta, Google, YouTube & LinkedIn ads",
      "Funnel architecture, creative testing, CRO",
      "Daily optimization for CAC, LTV and ROAS",
    ],
    deliverables: [
      "Full-funnel ad strategy",
      "Creative concepting & production",
      "Landing page & funnel builds",
      "Daily optimization & scaling",
      "Attribution & reporting dashboards",
    ],
    process: [
      { step: "Diagnose", detail: "Find the leaks in spend, creative & funnel." },
      { step: "Build", detail: "New funnels, creatives & tracking stack." },
      { step: "Launch", detail: "Test fast, kill losers, scale winners." },
      { step: "Scale", detail: "Compound spend without breaking ROAS." },
    ],
    idealFor: "DTC, SaaS, services & coaches ready to scale paid spend predictably.",
  },
  {
    icon: Layout,
    number: "05",
    slug: "web-digital-experience",
    title: "Web & Digital Experience",
    tagline: "Landing pages, e-commerce, web apps.",
    headline: "Websites that convert, not just look pretty.",
    outcomes: [
      "High-converting landing pages & e-commerce stores",
      "Brand sites, web apps, headless builds",
      "SEO, performance, analytics-first design",
    ],
    deliverables: [
      "Custom UX/UI design",
      "Headless / Shopify / Next builds",
      "Conversion-optimized landing pages",
      "SEO, schema & Core Web Vitals",
      "Analytics, heatmaps & A/B testing",
    ],
    process: [
      { step: "Strategy", detail: "Map user, offer, and conversion path." },
      { step: "Design", detail: "Premium, on-brand, mobile-first UI." },
      { step: "Build", detail: "Fast, SEO-ready, analytics-wired." },
      { step: "Iterate", detail: "Test, learn, push CR every week." },
    ],
    idealFor: "Brands whose website is silently leaking 50%+ of potential revenue.",
  },
  {
    icon: Workflow,
    number: "06",
    slug: "crm-automation-tech",
    title: "CRM, Automation & Tech",
    tagline: "CRM, automation, AI agents & RevOps.",
    headline: "Revenue systems that run while you sleep.",
    outcomes: [
      "CRM setup (HubSpot, Salesforce, GoHighLevel)",
      "WhatsApp, email & SMS automation flows",
      "AI agents, lead routing, sales pipelines",
    ],
    deliverables: [
      "CRM build, migration & training",
      "Email / WhatsApp / SMS automations",
      "AI agents & chatbots",
      "Lead scoring & routing",
      "Sales pipeline dashboards",
    ],
    process: [
      { step: "Map", detail: "Document the lead-to-revenue journey." },
      { step: "Architect", detail: "Design the CRM + automation stack." },
      { step: "Implement", detail: "Build, integrate, test, train your team." },
      { step: "Optimize", detail: "Tune flows for conversion & retention." },
    ],
    idealFor: "Teams losing leads in spreadsheets, inboxes and broken handoffs.",
  },
  {
    icon: GraduationCap,
    number: "07",
    slug: "elearning-animation",
    title: "E-Learning & Animation",
    tagline: "Courses, LMS, 2D/3D animation, explainers.",
    headline: "Turn expertise into scalable digital products.",
    outcomes: [
      "Course design, LMS setup, cohort delivery",
      "2D/3D animation, motion graphics, explainers",
      "Edutainment content for creators & coaches",
    ],
    deliverables: [
      "Course curriculum & instructional design",
      "LMS setup (Kajabi, Teachable, custom)",
      "2D/3D motion graphics & explainers",
      "Cohort & community ops",
      "Launch funnels & evergreen sales",
    ],
    process: [
      { step: "Frame", detail: "Audience, transformation, outcome." },
      { step: "Design", detail: "Modules, scripts, storyboards." },
      { step: "Produce", detail: "Animation, recording, post." },
      { step: "Launch", detail: "LMS, payments, marketing & support." },
    ],
    idealFor: "Creators, coaches & brands monetizing knowledge at scale.",
  },
  {
    icon: Code2,
    number: "08",
    slug: "it-product-engineering",
    title: "IT, Product & Engineering",
    tagline: "SaaS, mobile apps, AI & cloud infrastructure.",
    headline: "Custom software built for your unfair advantage.",
    outcomes: [
      "SaaS, mobile apps, internal tools",
      "API integrations, dashboards, data pipelines",
      "Cloud infra, DevOps, AI implementation",
    ],
    deliverables: [
      "Web & mobile product builds",
      "Internal tools & dashboards",
      "APIs, integrations, data pipelines",
      "Cloud infra, DevOps & monitoring",
      "AI features & model integration",
    ],
    process: [
      { step: "Discover", detail: "Problem, users, success metrics." },
      { step: "Architect", detail: "Stack, infra, integrations, security." },
      { step: "Ship", detail: "Sprint to MVP, then scale." },
      { step: "Operate", detail: "Monitor, iterate, harden." },
    ],
    idealFor: "Founders & ops leaders who need a serious engineering partner.",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
