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
  title: string;
  headline: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    icon: Sparkles,
    number: "01",
    title: "Branding & Creative",
    headline: "Identities engineered to command premium pricing.",
    outcomes: [
      "Strategic brand positioning & narrative",
      "Logo systems, visual identity, brand guidelines",
      "Packaging, pitch decks, sales collateral",
    ],
  },
  {
    icon: Film,
    number: "02",
    title: "Content & Production",
    headline: "Story-driven content built to stop the scroll.",
    outcomes: [
      "Cinematic ad films, brand documentaries, reels",
      "Photography, product shoots, founder content",
      "Scripting, direction, post-production",
    ],
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Social Media & Marketing",
    headline: "Channels that compound followers into customers.",
    outcomes: [
      "Organic content systems across IG, LinkedIn, YouTube",
      "Community building & creator collaborations",
      "Always-on content calendars with weekly reporting",
    ],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Performance Marketing",
    headline: "Paid media that prints predictable ROAS.",
    outcomes: [
      "Meta, Google, YouTube & LinkedIn ads",
      "Funnel architecture, creative testing, CRO",
      "Daily optimization for CAC, LTV and ROAS",
    ],
  },
  {
    icon: Layout,
    number: "05",
    title: "Web & Digital Experience",
    headline: "Websites that convert, not just look pretty.",
    outcomes: [
      "High-converting landing pages & e-commerce stores",
      "Brand sites, web apps, headless builds",
      "SEO, performance, analytics-first design",
    ],
  },
  {
    icon: Workflow,
    number: "06",
    title: "CRM, Automation & Tech",
    headline: "Revenue systems that run while you sleep.",
    outcomes: [
      "CRM setup (HubSpot, Salesforce, GoHighLevel)",
      "WhatsApp, email & SMS automation flows",
      "AI agents, lead routing, sales pipelines",
    ],
  },
  {
    icon: GraduationCap,
    number: "07",
    title: "E-Learning & Animation",
    headline: "Turn expertise into scalable digital products.",
    outcomes: [
      "Course design, LMS setup, cohort delivery",
      "2D/3D animation, motion graphics, explainers",
      "Edutainment content for creators & coaches",
    ],
  },
  {
    icon: Code2,
    number: "08",
    title: "IT, Product & Engineering",
    headline: "Custom software built for your unfair advantage.",
    outcomes: [
      "SaaS, mobile apps, internal tools",
      "API integrations, dashboards, data pipelines",
      "Cloud infra, DevOps, AI implementation",
    ],
  },
];
