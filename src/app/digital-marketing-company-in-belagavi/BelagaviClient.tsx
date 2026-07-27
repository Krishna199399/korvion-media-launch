"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Search,
  Target,
  MapPin,
  Globe2,
  Workflow,
  Settings2,
  Megaphone,
  Layers,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Building2,
  GraduationCap,
  HeartPulse,
  Rocket,
  ShoppingCart,
  Factory,
  Briefcase,
  Cpu,
  Store,
  Activity,
  Compass,
  AlertTriangle,
  Zap,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const breakdownFlow = [
  "A website gets launched",
  "social media becomes inactive",
  "SEO rankings fluctuate",
  "campaigns generate poor-quality leads",
  "follow-ups slow down",
  "reporting stays unclear",
  "customer engagement drops",
];

const growthLayers = [
  {
    icon: Search,
    layerName: "Visibility Layer",
    title: "SEO Systems That Help Customers Discover Your Business Faster",
    desc: "Search visibility directly influences how modern customers discover businesses online. Businesses across Belagavi increasingly compete through Google search, maps visibility, content ecosystems, and local digital authority. Korvion Media builds SEO systems focused on improving organic visibility, search rankings, local discoverability, technical performance, and long-term acquisition growth.",
    buttons: [
      { label: "Explore Best SEO Services", href: "/best-seo-services" },
      { label: "Explore Advanced SEO & Performance", href: "/advanced-seo-performance-services" },
    ],
  },
  {
    icon: Sparkles,
    layerName: "Engagement Layer",
    title: "Branding and Content Systems That Build Digital Trust",
    desc: "Customers trust businesses that feel professional, consistent, and recognizable online. Strong branding improves how customers remember your business across websites, social platforms, videos, campaigns, and digital experiences. Korvion Media helps businesses across Belagavi improve digital identity through branding systems, photography, video production, content ecosystems, and social media engagement strategies.",
    tagline: "People trust businesses that feel established before the first conversation begins.",
    buttons: [
      { label: "Explore Branding & Creative", href: "/branding-agency-creative-services" },
      { label: "Explore Video Production & Photography Services", href: "/video-production-photography-services" },
      { label: "Explore Social Media Marketing Services", href: "/social-media-marketing-services" },
    ],
  },
  {
    icon: Megaphone,
    layerName: "Conversion Layer",
    title: "Performance Marketing Systems Built for Better Customer Acquisition",
    desc: "Running ads alone does not guarantee business growth. Businesses require stronger landing experiences, audience targeting, analytics systems, campaign optimization, and customer acquisition workflows that improve conversion quality. Korvion Media helps businesses create performance marketing systems designed to improve lead generation, customer acquisition efficiency, and long-term revenue growth.",
    buttons: [
      { label: "Explore Performance Marketing Services", href: "/performance-marketing-services" },
    ],
  },
  {
    icon: Globe2,
    layerName: "Experience Layer",
    title: "Website Experiences That Improve Visibility and Customer Confidence",
    desc: "Your website often becomes the first real interaction customers have with your business. A slow, outdated, or disconnected website reduces trust quickly. Korvion Media creates modern website systems designed around performance, usability, mobile experience, customer engagement, and long-term digital scalability for businesses across Belagavi.",
    buttons: [
      { label: "Explore Website Design Services", href: "/website-design-services" },
    ],
  },
  {
    icon: Workflow,
    layerName: "Automation Layer",
    title: "Automation Systems That Help Businesses Operate More Efficiently",
    desc: "As businesses grow, manual workflows begin slowing customer communication, lead management, reporting, and operational efficiency. Modern businesses require systems that simplify workflows and improve visibility across customer journeys. Korvion Media helps businesses across Belagavi implement CRM systems, automation workflows, reporting dashboards, WhatsApp systems, and operational processes.",
    buttons: [
      { label: "Explore CRM Setup Services", href: "/crm-setup-marketing-automation-services" },
      { label: "Explore Marketing Automation Services", href: "/crm-setup-marketing-automation-services" },
    ],
  },
  {
    icon: Settings2,
    layerName: "Infrastructure Layer",
    title: "Technology Infrastructure Built for Long-Term Business Expansion",
    desc: "Modern businesses increasingly require connected digital infrastructure that supports scalability, operational flexibility, customer experience, and future growth requirements. As a product engineering company supporting businesses across Belagavi and Belgaum, Korvion Media helps companies build scalable web applications, mobile applications, backend systems, and connected business platforms.",
    buttons: [
      { label: "Explore Custom Mobile App Development", href: "/custom-mobile-web-app-development" },
      { label: "Explore Custom Web App Development", href: "/custom-mobile-web-app-development" },
    ],
  },
];

const industries = [
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: HeartPulse, name: "Healthcare Businesses" },
  { icon: Rocket, name: "Startups" },
  { icon: ShoppingCart, name: "E-commerce Brands" },
  { icon: Factory, name: "Manufacturing Businesses" },
  { icon: Briefcase, name: "Service Businesses" },
  { icon: Cpu, name: "Technology Companies" },
  { icon: Store, name: "Local Business Ecosystems" },
];

const faqs = [
  {
    q: "What does Korvion Media do?",
    a: "Korvion Media is a digital marketing company in Belagavi helping businesses improve visibility, branding, customer acquisition, automation, websites, and operational scalability through connected digital growth systems.",
  },
  {
    q: "How is Korvion Media different from a regular digital marketing company in Belagavi?",
    a: "Most digital marketing companies focus on individual services such as SEO or paid advertising. Korvion Media helps businesses build connected ecosystems involving branding, websites, SEO, performance marketing, automation, analytics, and scalable infrastructure.",
  },
  {
    q: "Does Korvion Media provide both marketing and technology services?",
    a: "Yes. Korvion Media combines SEO, branding, performance marketing, CRM automation, website development, and product engineering services into a single connected digital ecosystem.",
  },
  {
    q: "Does Korvion Media work with businesses in both Belagavi and Belgaum?",
    a: "Yes. Korvion Media works with businesses across Belagavi and Belgaum, including startups, healthcare businesses, educational institutions, ecommerce brands, manufacturing companies, and service-based businesses.",
  },
  {
    q: "What SEO services does Korvion Media provide in Belagavi?",
    a: "Korvion Media provides SEO services in Belagavi, including technical SEO, content optimization, local SEO, e-commerce SEO, authority growth, Core Web Vitals optimization, and advanced SEO performance strategies. Businesses searching for SEO services near me in Belagavi often look for long-term visibility systems that support sustainable digital growth.",
  },
  {
    q: "Does Korvion Media provide performance marketing services in Belagavi?",
    a: "Yes. Korvion Media provides performance marketing services in Belagavi, including Google Ads, Meta Ads, conversion optimization, landing page systems, analytics integration, and scalable acquisition strategies. Many businesses searching for performance marketing services near me want better lead quality and measurable customer acquisition systems.",
  },
  {
    q: "Can Korvion Media help businesses with CRM and automation systems?",
    a: "Yes. Korvion Media helps businesses implement CRM systems, marketing automation workflows, reporting dashboards, WhatsApp automation, email journeys, and customer lifecycle systems designed to improve operational efficiency.",
  },
  {
    q: "Does Korvion Media provide web and app development services?",
    a: "Yes. Korvion Media provides website development, web application development, mobile app development, backend systems, and scalable product engineering solutions. Businesses searching for website development services near me in Belagavi often require digital platforms designed around visibility, trust, customer engagement, and long-term scalability.",
  },
  {
    q: "Why do businesses in Belagavi require connected digital systems?",
    a: "Businesses across Belagavi operate in increasingly competitive digital environments where visibility, customer trust, operational efficiency, and acquisition systems directly influence long-term growth. Connected systems help businesses scale more efficiently than disconnected digital activities.",
  },
  {
    q: "How do I get started with Korvion Media?",
    a: "Businesses can contact Korvion Media to discuss visibility goals, operational bottlenecks, customer acquisition challenges, and digital growth requirements. Based on business needs, Korvion Media recommends connected growth systems designed for long-term scalability.",
  },
];

export function BelagaviClient() {
  const { openBookACall } = useBookACall();

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground pb-28 lg:pb-36">
        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <button
            onClick={openBookACall}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all animate-pulse-glow cursor-pointer"
          >
            Talk to Belagavi Strategy Team
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION (2-Column Visual Layout) */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Radial Geometry Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none z-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-6"
                >
                  <MapPin className="h-4 w-4" />
                  Belagavi Regional Growth Studio
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Best Digital Marketing Company in Belagavi for Businesses Ready to Grow Beyond Local Limits
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Supporting businesses, startups, educational institutions, healthcare brands, and modern growth-focused companies across Belagavi and Belgaum.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  Customers no longer choose businesses only through referrals or offline visibility. They search online, compare brands, visit websites, explore social media, and build trust digitally before making decisions. Korvion Media helps businesses across Belagavi build stronger visibility, customer trust, digital reach, and scalable growth systems designed for long-term business expansion.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Talk to a Digital Growth Expert
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column - Studio Growth Matrix Graphic Card */}
              <div className="lg:col-span-5">
                <TiltCard className="rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <Store className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Belagavi Studio</h3>
                        <p className="text-xs text-muted-foreground">Belagavi · Belgaum · Karnataka</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Active Studio
                    </span>
                  </div>

                  <div className="py-6 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Regional Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Local SEO Systems", "Brand Positioning", "Lead Automation", "WhatsApp Workflows", "Modern Web Systems", "Regional Growth"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Regional Ecosystem</p>
                      <p className="text-sm font-bold text-foreground">6 Connected Layers</p>
                    </div>
                    <Link
                      href="/locations"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      All Locations <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION - THE REGIONAL DIGITAL SHIFT (3-CARD GRID) */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Regional Shift</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  The Way Customers Discover Businesses in Belagavi Has Completely Changed
                </h2>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <TiltCard className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Evolving Digital Environment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Businesses across Belagavi are entering a very different digital environment compared to a few years ago. Customers now expect professional digital touchpoints before making buying decisions.
                  </p>
                </div>
              </TiltCard>

              <TiltCard className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Digital-First Credibility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Customers now expect professional websites, active digital presence, faster communication, better online credibility, and stronger brand visibility before they engage with a business.
                  </p>
                </div>
              </TiltCard>

              <TiltCard className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Regional Growth Opportunity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Even businesses built on strong offline reputation are now competing in digital-first customer journeys. Korvion Media helps businesses build connected digital ecosystems where every layer supports growth.
                  </p>
                </div>
              </TiltCard>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 max-w-3xl mx-auto text-center backdrop-blur-md shadow-glow-sm">
              <p className="text-base sm:text-lg font-bold text-gradient-primary">
                Strong businesses are no longer built only through visibility in the city. They are built through visibility everywhere customers search.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION - HOW DIGITAL GROWTH BREAKS (COMPARISON & FLOW) */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The Real Problem</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Most Businesses Don’t Lack Marketing. They Lack Connected Systems
                </h2>
              </div>
            </FadeInSection>

            {/* Visual Breakdown Flow Pills */}
            <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-8 lg:p-10 mb-14 max-w-5xl mx-auto backdrop-blur-md">
              <p className="font-mono text-xs text-destructive uppercase tracking-widest mb-6 font-bold text-center">The Disconnected Breakdown Flow</p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
                {breakdownFlow.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-xl border border-destructive/30 bg-background/90 px-4 py-2 text-foreground shadow-sm">
                      {step}
                    </span>
                    {idx < breakdownFlow.length - 1 && <span className="text-destructive font-bold">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* 2-Column Comparison Layout */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="rounded-3xl border border-destructive/20 bg-surface/40 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="h-6 w-6 text-destructive" />
                    <h3 className="text-xl font-bold">The Disconnection Frustration</h3>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-4">
                    The problem is not always effort.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Many businesses invest in websites, social media, paid campaigns, or SEO services in Belagavi individually. But when every activity works separately, growth becomes difficult to sustain:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>A website without visibility struggles to generate inquiries.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>SEO without conversion systems creates traffic without business impact.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>Paid campaigns without follow-up systems reduce lead quality.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>Branding without consistency weakens customer trust.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 flex flex-col justify-between shadow-glow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">The Korvion Connected Solution</h3>
                  </div>
                  <p className="text-base font-bold text-foreground leading-relaxed mb-6">
                    Korvion Media helps businesses simplify digital growth by connecting visibility, customer acquisition, engagement, automation, and operational systems into one scalable ecosystem.
                  </p>
                  <div className="space-y-3 pt-2">
                    {["Integrated Regional Strategy", "Local & Search SEO Engines", "Trust-Building Web Platforms", "WhatsApp & CRM Automation"].map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/20 mt-6">
                  <button
                    onClick={openBookACall}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all cursor-pointer"
                  >
                    <span>Connect Your Business Ecosystem</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION - THE MODERN BUSINESS GROWTH SYSTEM (6 LAYERS) */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Connected System</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Businesses Scale Faster When Every Digital System Supports the Next
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Modern business growth is no longer driven by isolated marketing activities. Businesses grow stronger when branding, websites, customer acquisition, SEO, automation, and operational systems work together instead of functioning independently.
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {growthLayers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.title}>
                    <TiltCard className="rounded-3xl border border-border bg-background p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="font-mono text-xs text-primary uppercase tracking-widest font-bold">{layer.layerName}</p>
                        <h3 className="mt-2 text-xl font-bold">{layer.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
                        {layer.tagline && (
                          <p className="mt-4 text-xs font-semibold text-gradient-primary border-l-2 border-primary pl-3">
                            {layer.tagline}
                          </p>
                        )}
                      </div>

                      <div className="mt-8 border-t border-border/60 pt-4 space-y-2">
                        {layer.buttons.map((btn) => (
                          <Link
                            key={btn.label}
                            href={btn.href}
                            className="flex items-center justify-between text-xs font-semibold text-primary hover:underline group"
                          >
                            <span>[ {btn.label} ]</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION - WHY CONNECTED DIGITAL SYSTEMS MATTER */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Integration Philosophy</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Digital Growth Becomes Easier When Businesses Stop Treating Every System Separately
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Customers move across multiple platforms before they trust a business. They search online, compare websites, check reviews, watch videos, visit social profiles, and interact with several digital touchpoints before making decisions.
                </p>
                <p className="mt-3 text-base sm:text-lg font-bold text-destructive">
                  Disconnected systems create disconnected customer experiences.
                </p>
              </div>
            </FadeInSection>

            {/* 4 Cards Matrix */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <Zap className="h-6 w-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-foreground">SEO without branding</p>
                  <p className="text-xs text-muted-foreground mt-1">Weakens audience trust and search conversion.</p>
                </div>
              </TiltCard>

              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <AlertTriangle className="h-6 w-6 text-amber-500 mb-3" />
                  <p className="text-xs font-bold text-foreground">Websites without conversion systems</p>
                  <p className="text-xs text-muted-foreground mt-1">Reduce business inquiries and lead capture.</p>
                </div>
              </TiltCard>

              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-foreground">Paid campaigns without automation</p>
                  <p className="text-xs text-muted-foreground mt-1">Create operational pressure on follow-ups.</p>
                </div>
              </TiltCard>

              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <Globe2 className="h-6 w-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-foreground">Social media without a strategy</p>
                  <p className="text-xs text-muted-foreground mt-1">Loses consistency and audience recall.</p>
                </div>
              </TiltCard>
            </div>

            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 max-w-4xl mx-auto text-center shadow-glow-sm">
              <p className="text-base sm:text-xl font-bold text-foreground leading-relaxed mb-4">
                Businesses that grow sustainably usually build connected ecosystems instead of isolated digital activities.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Korvion Media helps businesses across Belagavi build scalable digital systems where visibility, branding, acquisition, automation, customer experience, and infrastructure support each other.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION - BUSINESS ECOSYSTEMS WE SUPPORT */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <FadeInSection>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Industries</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Built for Businesses Across Belagavi’s Evolving Digital Ecosystem
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Every business ecosystem requires different visibility strategies, customer acquisition systems, operational workflows, and digital infrastructure. Korvion Media works with businesses across Belagavi and Belgaum that are focused on improving visibility, customer engagement, business credibility, and long-term scalability.
              </p>
            </FadeInSection>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.name} className="p-6 rounded-2xl border border-border bg-background flex flex-col items-center justify-center text-center hover:border-primary/40 transition-all shadow-glow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-4 shadow-glow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-base">{ind.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Explore Growth Systems Built Around Your Business Goals <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION - ABOUT KORVION MEDIA */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">About Korvion</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  A Digital Growth Company Focused on Building Connected Business Ecosystems
                </h2>
              </div>
            </FadeInSection>

            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-primary/30 bg-surface/50 p-8 shadow-xl">
                  <span className="font-mono text-xs text-primary uppercase font-bold tracking-wider">Core Reality</span>
                  <h3 className="text-2xl font-bold mt-2">Built around a simple reality:</h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Most businesses struggle digitally, not because they lack potential, but because every growth activity operates independently.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs font-mono text-gradient-primary font-bold">CONNECTED FOUNDATION</p>
                    <p className="text-sm font-semibold text-foreground mt-1">We help businesses solve growth challenges through connected systems instead of isolated marketing activities.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-border bg-surface/40">
                    <p className="font-bold text-foreground text-sm">Disconnected Lead Platforms</p>
                    <p className="text-xs text-muted-foreground mt-1">Websites are disconnected from lead systems. SEO lacks long-term structure.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-border bg-surface/40">
                    <p className="font-bold text-foreground text-sm">Inconsistent Communication</p>
                    <p className="text-xs text-muted-foreground mt-1">Branding becomes inconsistent. Campaigns operate without automated follow-ups.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-border bg-surface/40">
                    <p className="font-bold text-foreground text-sm">Fragmented Scalability</p>
                    <p className="text-xs text-muted-foreground mt-1">Reporting stays fragmented as businesses scale in regional markets.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-primary/30 bg-primary/10">
                    <p className="text-sm font-bold text-gradient-primary">
                      The businesses growing fastest today are creating better customer systems - not just more marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <FadeInSection>
              <div className="relative rounded-[2.5rem] border border-primary/30 bg-surface/60 backdrop-blur-2xl p-10 sm:p-16 shadow-2xl overflow-hidden">
                {/* Dual Floating Ambient Radial Glows */}
                <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold text-primary mb-6">
                    <Sparkles className="h-3.5 w-3.5" />
                    Regional Strategy Consultation
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Build a Stronger Digital Growth System <span className="text-gradient-primary">for Your Business</span>
                  </h2>

                  <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Modern business growth requires more than disconnected digital activities. It requires systems designed to improve visibility, branding, customer acquisition, automation, customer experience, and operational scalability together. Korvion Media helps businesses across Belagavi and Belgaum build scalable digital ecosystems designed for measurable long-term growth.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Connected Regional Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Direct Strategy Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Scalable Business Architecture</span>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton strength={0.2}>
                      <RippleButton
                        onClick={openBookACall}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                      >
                        👉 Talk to Korvion Media
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </RippleButton>
                    </MagneticButton>

                    <a
                      href="tel:+919480156345"
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 backdrop-blur-md px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all shadow-sm"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      Call +91 9480156345
                    </a>
                  </div>

                  <p className="mt-6 text-xs font-mono text-muted-foreground">
                    Direct Team Access · Fast Implementation · Regional Growth
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* BELAGAVI OFFICE LOCATION & MAP SECTION */}
        <section className="section-isolate py-20 border-t border-border/60 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">OFFICE LOCATION</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3">Visit Our Belagavi Office</h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                RGJ4+8HF, Fourth Cross Rd, Bhagya Nagar, Angol, Belagavi, Karnataka 590006
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl border border-border bg-surface/60 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-base">Office Address</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        RGJ4+8HF, Fourth Cross Rd, Bhagya Nagar, Angol, Belagavi, Karnataka 590006
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Direct Phone</h4>
                      <a href="tel:+919480156345" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 9480156345
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                    <Globe2 className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Official Email</h4>
                      <a href="mailto:korvionmedia@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        korvionmedia@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=RGJ4%2B8HF%2C+Fourth+Cross+Rd%2C+Bhagya+Nagar%2C+Angol%2C+Belagavi%2C+Karnataka+590006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions on Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-border shadow-2xl relative">
                <iframe
                  title="Korvion Media Belagavi Office Google Map"
                  src="https://maps.google.com/maps?q=RGJ4%2B8HF%2C%20Fourth%20Cross%20Rd%2C%20Bhagya%20Nagar%2C%20Angol%2C%20Belagavi%2C%20Karnataka%20590006&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-border bg-surface/50 px-6 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}
