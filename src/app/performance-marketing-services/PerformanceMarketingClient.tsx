"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  BarChart3,
  Zap,
  DollarSign,
  ShieldCheck,
  Award,
  CheckCircle2,
  PieChart,
  Layers,
  Activity,
  Users,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import mediaPlanningImage from "@/assets/media-planning-optimization.png";

const mediaPlanningSrc =
  typeof mediaPlanningImage === "string"
    ? mediaPlanningImage
    : mediaPlanningImage.src;

const coreMetrics = [
  { label: "Cost per Lead", desc: "Lowering acquisition friction and cost" },
  { label: "Conversion Rate", desc: "Maximizing landing page traffic yield" },
  { label: "Customer Acquisition Cost", desc: "Building profitable CAC payback windows" },
  { label: "Return on Ad Spend", desc: "Scaling scalable revenue multiplier" },
];

const services = [
  {
    icon: Target,
    title: "Google Ads Management",
    subhead: "High intent traffic that converts.",
    items: [
      "Google Ads management services",
      "Search, display, and remarketing campaigns",
      "Keyword targeting and bid optimization",
    ],
    outcome: "We focus on capturing demand and converting it into qualified leads.",
  },
  {
    icon: TrendingUp,
    title: "LinkedIn Ads and B2B Marketing",
    subhead: "Precision targeting for high-value audiences.",
    items: [
      "LinkedIn ads agency approach",
      "LinkedIn marketing services",
      "B2B lead generation campaigns",
    ],
    outcome: "Ideal for businesses targeting decision makers and professionals.",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimization",
    subhead: "Traffic without conversion is wasted spend.",
    items: [
      "Conversion rate optimization services",
      "Conversion funnel optimization",
      "A/B testing and landing page improvements",
    ],
    outcome: "We improve how your traffic converts into actual revenue.",
  },
  {
    icon: Zap,
    title: "Lead Generation Systems",
    subhead: "Not just leads. Qualified leads.",
    items: [
      "Lead generation services",
      "Paid lead generation services",
      "Funnel-based lead systems",
    ],
    outcome: "We build systems that consistently generate and nurture leads.",
  },
];

const thinkingPillars = [
  {
    icon: Target,
    title: "Traffic Without Strategy Fails",
    desc: "We align campaigns with business goals before spending the budget.",
  },
  {
    icon: DollarSign,
    title: "Conversion Is Where Profit Happens",
    desc: "Every campaign is tied to funnel performance and conversion metrics.",
  },
  {
    icon: Activity,
    title: "Optimization Never Stops",
    desc: "Performance marketing is continuous testing, not a one-time setup.",
  },
];

const mediaPlanningPoints = [
  "Media planning services",
  "Budget allocation strategies",
  "Campaign optimization services",
  "Channel performance tracking",
];

const whyBusinessesChooseUs = [
  "Performance marketing services focused on ROI",
  "Data-driven campaign decisions",
  "Continuous optimization and testing",
  "Integrated approach across ads, funnels, and analytics",
];

const whatToExpect = [
  "Lower cost per lead",
  "Higher conversion rates",
  "Better return on ad spend",
  "Scalable growth systems",
];

const targetAudiences = [
  { title: "Businesses scaling paid acquisition", desc: "Ready to scale monthly budget profitably." },
  { title: "Startups looking for fast growth", desc: "Need immediate pipeline and user acquisition." },
  { title: "Companies struggling with ad performance", desc: "Tired of burning budget on unoptimized campaigns." },
  { title: "Teams needing better conversion rates", desc: "Have traffic but missing funnel optimization." },
];

const faqs = [
  {
    q: "What are performance marketing services?",
    a: "Performance marketing services focus on measurable outcomes such as leads, conversions, and revenue. At Korvion Media, this includes paid advertising, conversion rate optimization services, and lead generation systems designed to improve return on ad spend and overall business growth.",
  },
  {
    q: "How is performance marketing different from traditional marketing?",
    a: "Traditional marketing focuses on visibility and brand awareness, while performance marketing is driven by measurable results such as cost per lead, conversion rate, and return on investment. It allows businesses to track performance and optimize campaigns continuously.",
  },
  {
    q: "What platforms do you use for performance marketing?",
    a: "We use platforms such as Google Ads, LinkedIn Ads, and other paid channels based on your business goals and audience. Korvion Media selects the right platforms to maximize reach, improve targeting, and drive qualified leads.",
  },
  {
    q: "What is conversion rate optimization?",
    a: "Conversion rate optimization improves how effectively your website or landing pages convert visitors into leads or customers. This includes A/B testing, funnel improvements, and data-driven changes to increase overall conversion performance.",
  },
  {
    q: "Do you provide lead generation services?",
    a: "Yes. Korvion Media provides lead generation services that combine paid campaigns, targeting strategies, and conversion funnel optimization to generate high-quality and qualified leads for your business.",
  },
  {
    q: "How do I get started?",
    a: "You can get started by calling +91 9480156345 or booking a consultation. The team at Korvion Media will analyze your current performance and build a tailored performance marketing strategy for your business.",
  },
];

export function PerformanceMarketingClient() {
  const { openBookACall } = useBookACall();

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <button
            onClick={openBookACall}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all animate-pulse-glow cursor-pointer"
          >
            Get Free Performance Audit
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION (2-Column Visual Layout) */}
        <section className="section-isolate relative pt-36 pb-24 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Radial Geometry Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none z-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-6"
                >
                  <DollarSign className="h-4 w-4" />
                  Data-Driven Paid Acquisition & ROAS Optimization
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Performance Marketing Services Focused on Revenue, Not Just Reach
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Marketing is not an expense. It is an investment that should generate returns. If your campaigns are not producing measurable revenue, the problem is strategy and optimization.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we focus on performance marketing services that generate qualified leads, improve conversion rates, and maximize return on ad spend (ROAS) across Google Ads, Meta Ads, and LinkedIn.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Get Free Performance Audit
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column Graphic Card */}
              <div className="lg:col-span-5">
                <TiltCard className="rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">ROAS Acquisition Engine</h3>
                        <p className="text-xs text-muted-foreground">Paid Performance System</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      ROAS Positive
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Acquisition Pillars:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Google Search & Shopping", "Meta Ads Scaling", "LinkedIn B2B Leads", "Funnel Conversion Audit", "CAPI Pixel Sync", "Attribution Tracking"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Revenue Impact</p>
                      <p className="text-sm font-bold text-foreground">Measurable Growth CAC</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT PERFORMANCE MARKETING SHOULD ACTUALLY DO */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes Focus</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              What Performance Marketing Should Actually Do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Most campaigns focus on clicks. We focus on outcomes.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreMetrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg">{m.label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm font-mono text-muted-foreground">
              If these are not improving, your marketing is not working.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Our Performance Marketing Services
              </h2>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <TiltCard className="rounded-3xl border border-border bg-background p-8 lg:p-10 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.subhead}</p>

                        <ul className="mt-6 space-y-2.5">
                          {item.items.map((sub, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm font-medium">
                              <Check className="h-4 w-4 text-primary shrink-0" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 border-t border-border/60 pt-5">
                        <p className="text-xs font-mono text-primary uppercase tracking-wider">{item.outcome}</p>
                      </div>
                    </TiltCard>
                  </div>
                );
              })}
            </div>

            {/* SINGLE CTA AFTER SERVICES */}
            <div className="mt-14 text-center">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Get Free Performance Audit <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* HOW WE THINK ABOUT GROWTH */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Growth Mindset</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">How We Think About Growth</h2>
              <p className="mt-4 text-lg font-semibold text-gradient-primary">
                We don’t run ads. We build systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {thinkingPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <TiltCard
                    key={p.title}
                    className="rounded-3xl border border-border bg-surface/40 p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            <div className="mt-14 text-center">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Build a Performance Strategy That Works <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* MEDIA PLANNING & OPTIMIZATION SHOWCASE */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-3xl overflow-hidden border border-border shadow-2xl group"
                >
                  <img src={mediaPlanningSrc} alt="Media Planning & Optimization" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                </motion.div>
              </div>

              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Efficiency</p>
                <h2 className="text-3xl sm:text-5xl font-bold mt-3">Media Planning and Optimization</h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We ensure every rupee or dollar is spent with intent. We focus on efficiency, not just scale.
                </p>

                <ul className="mt-6 space-y-3">
                  {mediaPlanningPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE KORVION MEDIA */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Businesses Choose Korvion Media</h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyBusinessesChooseUs.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-surface/40 p-6 flex items-start gap-4 hover:border-primary/40 transition-all">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{point}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-base font-semibold text-gradient-primary mb-6">
                We do not chase impressions. We focus on revenue.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN EXPECT */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Expectations</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What You Can Expect</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatToExpect.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom Growth Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Fit</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">Who This Is For</h2>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {targetAudiences.map((aud) => (
                <div key={aud.title} className="rounded-3xl border border-border bg-surface/40 p-8 text-left hover:border-primary/40 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg">{aud.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{aud.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Turn Your Marketing <span className="text-gradient-primary">Into Revenue</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your marketing is not generating measurable returns, it is time to rethink your approach.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Get Free Performance Audit
              </button>

              <a
                href="tel:+919480156345"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call +91 9480156345
              </a>
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

        {/* REUSABLE SERVICE SECTIONS */}
        <section className="section-isolate py-24 bg-surface/40 border-t border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Trusted by Growing Brands <span className="text-gradient-primary">Worldwide</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses that want more than just marketing. They want measurable growth.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Proven Frameworks</h3>
                <p className="mt-1 text-xs text-muted-foreground">Proven paid acquisition frameworks</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Data-Informed</h3>
                <p className="mt-1 text-xs text-muted-foreground">Conversion metrics and ROAS focus</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Long-Term Partner</h3>
                <p className="mt-1 text-xs text-muted-foreground">Long-term partnership approach</p>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Work With Korvion Media <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* FINAL HERO CTA */}
        <section className="section-isolate py-20 bg-background border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Ready to Scale Your <span className="text-gradient-primary">Performance Funnel</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s create a paid advertising & CRO strategy focused on real profit and growth.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Performance Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
