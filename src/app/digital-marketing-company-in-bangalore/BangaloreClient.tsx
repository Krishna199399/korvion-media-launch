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
  "SEO generates traffic",
  "landing pages fail to convert",
  "campaigns create inconsistent leads",
  "customer journeys feel fragmented",
  "follow-ups slow down",
  "reporting becomes unclear",
  "growth loses momentum",
];

const growthLayers = [
  {
    icon: Search,
    layerName: "Visibility Layer",
    title: "SEO Systems Designed for Competitive Bangalore Markets",
    desc: "Search visibility in Bangalore requires more than keyword optimization alone. Businesses need technical SEO, content ecosystems, authority growth, Core Web Vitals optimization, and search strategies aligned with how customers actually discover brands online. Korvion Media builds SEO ecosystems designed to improve long-term organic visibility, qualified traffic, and scalable acquisition.",
    buttons: [
      { label: "Explore SEO & Growth Services", href: "/seo-services" },
      { label: "Explore Advanced SEO & Performance", href: "/advanced-seo-performance-services" },
    ],
  },
  {
    icon: Sparkles,
    layerName: "Engagement Layer",
    title: "Brand Systems That Improve Recall and Audience Trust",
    desc: "People remember brands before they remember services. In competitive Bangalore markets, businesses require stronger visual identity, consistent communication, audience engagement, and content systems that improve recall across digital platforms. Korvion Media helps businesses strengthen digital presence through branding, content production, video systems, photography, and social media engagement strategies.",
    tagline: "The strongest brands are not always the loudest. They are the easiest to remember.",
    buttons: [
      { label: "Explore Branding & Creative", href: "/branding-agency-creative-services" },
      { label: "Explore Video Production & Photography Services", href: "/video-production-photography-services" },
      { label: "Explore Social Media Marketing Services", href: "/social-media-marketing-services" },
    ],
  },
  {
    icon: Megaphone,
    layerName: "Conversion Layer",
    title: "Performance Marketing Systems Focused on Measurable Growth",
    desc: "Paid acquisition becomes expensive when campaigns operate without proper conversion systems. Businesses require landing experiences, audience targeting, analytics, testing frameworks, and automation workflows designed to improve lead quality and acquisition efficiency. Korvion Media builds performance marketing systems designed to support scalable customer acquisition and long-term business growth.",
    buttons: [
      { label: "Explore Performance Marketing Services", href: "/performance-marketing-services" },
    ],
  },
  {
    icon: Globe2,
    layerName: "Experience Layer",
    title: "Website Experiences Built for Visibility, Conversion, and Scalability",
    desc: "Your website should support customer acquisition, engagement, trust, and conversion, not simply exist online. Modern businesses require digital experiences designed around performance, usability, mobile behavior, search visibility, and conversion optimization. Korvion Media creates scalable web experiences that support long-term business growth across Bangalore’s evolving digital landscape.",
    buttons: [
      { label: "Explore Website Design Services", href: "/website-design-services" },
    ],
  },
  {
    icon: Workflow,
    layerName: "Automation Layer",
    title: "CRM and Automation Systems That Reduce Operational Friction",
    desc: "As businesses grow, operational inefficiencies begin slowing customer acquisition and follow-ups. Manual workflows, disconnected reporting, inconsistent lead management, and fragmented communication systems eventually impact scalability. Korvion Media helps businesses across Bangalore implement CRM systems, automation workflows, reporting dashboards, WhatsApp systems, and customer lifecycle automation.",
    buttons: [
      { label: "Explore CRM Setup Services", href: "/crm-setup-marketing-automation-services" },
      { label: "Explore Marketing Automation Services", href: "/crm-setup-marketing-automation-services" },
    ],
  },
  {
    icon: Settings2,
    layerName: "Infrastructure Layer",
    title: "Technology Infrastructure Designed for Scalable Digital Growth",
    desc: "Modern digital growth increasingly depends on infrastructure that can scale with business requirements. Businesses require connected systems, flexible architecture, product ecosystems, backend infrastructure, and operational scalability that support future expansion. As a product engineering company in Bangalore, Korvion Media helps businesses build scalable web applications, mobile applications, backend systems, and connected digital platforms.",
    buttons: [
      { label: "Explore Custom Mobile App Development", href: "/custom-mobile-web-app-development" },
      { label: "Explore Custom Web App Development", href: "/custom-mobile-web-app-development" },
    ],
  },
];

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: Cpu, name: "SaaS Companies" },
  { icon: ShoppingCart, name: "E-commerce Brands" },
  { icon: HeartPulse, name: "Healthcare Businesses" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: Building2, name: "Technology Companies" },
  { icon: Factory, name: "Manufacturing Businesses" },
  { icon: Briefcase, name: "Service Businesses" },
];

const faqs = [
  {
    q: "What does Korvion Media do?",
    a: "Korvion Media is a digital marketing company in Bangalore helping businesses improve visibility, acquisition, branding, automation, customer experience, and scalability through connected digital growth systems.",
  },
  {
    q: "How is Korvion Media different from a regular digital marketing company in Bangalore?",
    a: "Most digital marketing companies focus on isolated services such as SEO or paid advertising. Korvion Media approaches growth as a connected ecosystem involving branding, SEO, performance marketing, websites, automation, analytics, and scalable infrastructure.",
  },
  {
    q: "Does Korvion Media provide both marketing and technology services?",
    a: "Yes. Korvion Media combines SEO, branding, performance marketing, CRM automation, website development, and product engineering services into a single connected digital ecosystem.",
  },
  {
    q: "Does Korvion Media work with startups and SaaS companies in Bangalore?",
    a: "Yes. Korvion Media works with startups, SaaS companies, E-commerce businesses, healthcare organizations, educational institutions, and growth-focused companies across Bangalore.",
  },
  {
    q: "What SEO services does Korvion Media provide in Bangalore?",
    a: "Korvion Media provides SEO services in Bangalore, including technical SEO, content optimization, authority growth, e-commerce SEO, Core Web Vitals optimization, local SEO, and advanced SEO performance strategies. Businesses searching for SEO services near me in Bangalore often look for long-term visibility systems that support sustainable digital growth instead of short-term ranking improvements.",
  },
  {
    q: "Does Korvion Media provide performance marketing services in Bangalore?",
    a: "Yes. Korvion Media provides performance marketing services in Bangalore, including Google Ads, Meta Ads, conversion optimization, landing page systems, analytics integration, and scalable acquisition strategies. Many businesses searching for performance marketing services near me are looking for connected systems that improve lead quality and customer acquisition efficiency together.",
  },
  {
    q: "Can Korvion Media help businesses with CRM and automation systems?",
    a: "Yes. Korvion Media helps businesses implement CRM systems, marketing automation workflows, reporting dashboards, WhatsApp automation, email journeys, and customer lifecycle systems.",
  },
  {
    q: "Does Korvion Media provide web and app development services?",
    a: "Yes. Korvion Media provides website development, web application development, mobile app development, backend systems, and scalable product engineering solutions. Businesses searching for website development services near me in Bangalore often require digital experiences that support branding, SEO visibility, customer engagement, and long-term scalability.",
  },
  {
    q: "Why do businesses in Bangalore require connected digital systems?",
    a: "Businesses in Bangalore operate in highly competitive digital environments where visibility, customer acquisition, automation, and operational efficiency directly impact scalability. Connected systems help businesses scale more efficiently than disconnected marketing activities.",
  },
  {
    q: "How do I get started with Korvion Media?",
    a: "Businesses can contact Korvion Media to discuss growth challenges, operational bottlenecks, visibility goals, and digital requirements. Based on business needs, Korvion Media recommends connected growth systems designed for long-term scalability.",
  },
];

export function BangaloreClient() {
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
            Talk to Bangalore Strategy Team
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
                  Bangalore Tech & Scale Hub
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Best Digital Marketing Company in Bangalore for Businesses Ready to Scale Smarter
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Trusted by startups, SaaS companies, E-commerce brands, healthcare businesses, and growth-focused teams across Bangalore.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  Your business does not need more disconnected marketing activities. It needs systems that help visibility, branding, acquisition, customer experience, automation, and infrastructure work together. Korvion Media helps businesses across Bangalore build scalable digital growth ecosystems designed for long-term business performance.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Talk to a Growth Expert
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
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Bangalore Studio</h3>
                        <p className="text-xs text-muted-foreground">Bengaluru · Karnataka · India</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Active Hub
                    </span>
                  </div>

                  <div className="py-6 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Connected Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Technical SEO", "Brand Engineering", "Performance Ads", "CRM Automation", "Custom Apps", "SaaS Engineering"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Ecosystem Architecture</p>
                      <p className="text-sm font-bold text-foreground">6 Connected Growth Layers</p>
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

        {/* SECTION - THE DIGITAL GROWTH SHIFT (3-CARD GRID) */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Market Dynamics</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Bangalore Businesses Are Competing in a Different Digital Environment
                </h2>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <TiltCard className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">High Competition Market</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bangalore is one of India’s most competitive digital markets. Businesses compete for visibility across search engines, paid campaigns, social media, marketplaces, content platforms, and multiple customer touchpoints every day.
                  </p>
                </div>
              </TiltCard>

              <TiltCard className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Omnichannel Discovery</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Customers discover brands differently now. They search, compare, validate, and interact across several digital platforms before making decisions.
                  </p>
                </div>
              </TiltCard>

              <TiltCard className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Disconnected System Failure</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    That is why businesses relying on disconnected SEO, ads, websites, and automation systems often struggle to scale consistently. Korvion Media helps businesses across Bangalore build connected digital growth systems where every layer supports the next, from visibility and branding to conversion, automation, analytics, and infrastructure.
                  </p>
                </div>
              </TiltCard>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 max-w-3xl mx-auto text-center backdrop-blur-md shadow-glow-sm">
              <p className="text-base sm:text-lg font-bold text-gradient-primary">
                Growth slows down when your digital systems stop communicating with each other.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION - HOW DIGITAL GROWTH BREAKS (COMPARISON & FLOW) */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The Disconnection Friction</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Most Businesses Do Not Lack Marketing. They Lack Connected Systems.
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
                    <h3 className="text-xl font-bold">The Disconnection Problem</h3>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-4">
                    Many businesses already invest in digital marketing services in Bangalore.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    The real problem is that systems often operate separately:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>Marketing teams work independently from developers.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>Paid campaigns are disconnected from CRM workflows.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>Websites fail to support customer journeys.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-destructive font-bold">•</span>
                      <span>Automation is introduced after operational complexity begins affecting growth.</span>
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
                    Korvion Media helps businesses simplify digital growth by connecting visibility, acquisition, engagement, automation, and infrastructure into one scalable ecosystem.
                  </p>
                  <div className="space-y-3 pt-2">
                    {["Integrated Team Execution", "Connected CRM & Ad Pipelines", "Customer Journey Driven Web Design", "Scalable Infrastructure Architecture"].map((point) => (
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

        {/* SECTION - THE GROWTH OPERATING SYSTEM (6 LAYERS) */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Operating System</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Built Around How Modern Businesses Actually Grow
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Businesses scale faster when branding, SEO, websites, paid acquisition, automation, analytics, and technology infrastructure work together instead of operating independently. Korvion Media approaches growth as one connected operating system designed to support long-term scalability for businesses across Bangalore.
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

        {/* SECTION - WHY CONNECTED SYSTEMS MATTER */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Integration Advantage</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                  Scaling Digital Growth Requires More Than Individual Services
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Customers no longer interact with businesses through a single platform. They move between search engines, social media, paid campaigns, websites, videos, reviews, marketplaces, and multiple digital touchpoints before making decisions.
                </p>
                <p className="mt-3 text-base sm:text-lg font-bold text-destructive">
                  Disconnected systems create inconsistent experiences.
                </p>
              </div>
            </FadeInSection>

            {/* 4 Cards Matrix */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <Zap className="h-6 w-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-foreground">SEO without conversion systems</p>
                  <p className="text-xs text-muted-foreground mt-1">Reduces acquisition efficiency across search traffic.</p>
                </div>
              </TiltCard>

              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <AlertTriangle className="h-6 w-6 text-amber-500 mb-3" />
                  <p className="text-xs font-bold text-foreground">Paid campaigns without automation</p>
                  <p className="text-xs text-muted-foreground mt-1">Increase operational complexity and slow follow-ups.</p>
                </div>
              </TiltCard>

              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-foreground">Branding without consistency</p>
                  <p className="text-xs text-muted-foreground mt-1">Weakens audience trust across channels.</p>
                </div>
              </TiltCard>

              <TiltCard className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col justify-between">
                <div>
                  <Globe2 className="h-6 w-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-foreground">Websites without content ecosystems</p>
                  <p className="text-xs text-muted-foreground mt-1">Fail to support long-term search visibility.</p>
                </div>
              </TiltCard>
            </div>

            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 max-w-4xl mx-auto text-center shadow-glow-sm">
              <p className="text-base sm:text-xl font-bold text-foreground leading-relaxed mb-4">
                Businesses that scale successfully usually build connected digital ecosystems instead of isolated marketing activities.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Korvion Media helps businesses across Bangalore create integrated systems where visibility, acquisition, customer experience, automation, analytics, and infrastructure work together as one scalable growth engine.
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
                Built for Bangalore’s Modern Business Ecosystem
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Every business ecosystem requires different visibility strategies, acquisition systems, automation maturity, and infrastructure requirements. Korvion Media works with businesses across Bangalore that are focused on long-term digital growth and operational scalability.
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
                👉 Explore Industry Growth Solutions <ArrowUpRight className="h-5 w-5" />
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
                  A Digital Growth Company Built Around Connected Business Systems
                </h2>
              </div>
            </FadeInSection>

            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-primary/30 bg-surface/50 p-8 shadow-xl">
                  <span className="font-mono text-xs text-primary uppercase font-bold tracking-wider">Core Philosophy</span>
                  <h3 className="text-2xl font-bold mt-2">Built around one simple observation:</h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Most businesses struggle online not because they lack ambition, but because their digital systems operate separately.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs font-mono text-gradient-primary font-bold">ECOSYSTEM PERSPECTIVE</p>
                    <p className="text-sm font-semibold text-foreground mt-1">We built Korvion Media to solve digital growth from an ecosystem perspective.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-border bg-surface/40">
                    <p className="font-bold text-foreground text-sm">Isolated Team Operations</p>
                    <p className="text-xs text-muted-foreground mt-1">SEO teams work independently from developers. Paid campaigns lack conversion systems.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-border bg-surface/40">
                    <p className="font-bold text-foreground text-sm">Disconnected Customer Journeys</p>
                    <p className="text-xs text-muted-foreground mt-1">Websites fail to support customer journeys. Automation is implemented too late.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-border bg-surface/40">
                    <p className="font-bold text-foreground text-sm">Fragmented Scalability</p>
                    <p className="text-xs text-muted-foreground mt-1">Reporting becomes fragmented as businesses scale, making decision-making unclear.</p>
                  </div>

                  <div className="p-5 rounded-2xl border border-primary/30 bg-primary/10">
                    <p className="text-sm font-bold text-gradient-primary">
                      The businesses scaling fastest today are building systems, not just campaigns.
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
                    Ecosystem Strategy Consultation
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Build a Smarter Digital Growth Ecosystem <span className="text-gradient-primary">for Your Business</span>
                  </h2>

                  <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Your business needs more than isolated digital services. It needs connected systems designed to improve visibility, acquisition, customer experience, automation, and operational scalability together. Korvion Media helps businesses across Bangalore build digital ecosystems designed for measurable long-term growth.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Connected Growth Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Direct Senior Strategy Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Custom Roadmap</span>
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
                    Direct Team Access · Fast Implementation · Scalable Architecture
                  </p>
                </div>
              </div>
            </FadeInSection>
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
