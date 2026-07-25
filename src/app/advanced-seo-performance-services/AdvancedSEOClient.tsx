"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Rocket,
  BrainCircuit,
  Zap,
  Target,
  Server,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Layers,
  Gauge,
  Workflow,
  Cpu,
  MousePointerClick,
  Building2,
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

const traditionalSeoProblems = [
  "slow website performance",
  "poor conversion rates",
  "weak content authority",
  "technical limitations",
  "inefficient SEO workflows",
  "traffic that does not convert",
];

const services = [
  {
    icon: Rocket,
    title: "SaaS SEO Services",
    subhead: "SEO strategies designed for scalable SaaS and digital products.",
    items: [
      "SaaS SEO services",
      "Product-led search growth",
      "Feature and solution page optimization",
      "Scalable content structures",
    ],
    outcome: "We help SaaS businesses build sustainable acquisition through search.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimization Services",
    subhead: "Visibility means little if users do not convert.",
    items: [
      "Conversion rate optimization services",
      "Conversion funnel optimization",
      "Landing page behavior analysis",
      "User journey improvements",
    ],
    outcome: "We optimize websites for measurable business outcomes, not just traffic.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals and Speed Optimization",
    subhead: "Performance directly impacts rankings and user experience.",
    items: [
      "Page speed optimization service",
      "Core Web Vitals optimization",
      "Website performance improvements",
      "Technical loading optimization",
    ],
    outcome: "Faster websites improve retention, rankings, and conversions.",
  },
  {
    icon: BrainCircuit,
    title: "AI SEO Services and Automation",
    subhead: "Modern SEO requires smarter systems.",
    items: [
      "AI SEO services",
      "Automated SEO services",
      "AI-driven optimization workflows",
      "Search data automation",
    ],
    outcome: "We use AI strategically to improve efficiency, scalability, and performance analysis.",
  },
  {
    icon: Layers,
    title: "Content Marketing and Topical Authority",
    subhead: "Search engines reward depth and expertise.",
    items: [
      "Best content marketing services",
      "Topical authority strategy",
      "Content cluster planning",
      "Search intent content systems",
    ],
    outcome: "We help businesses build authority that compounds over time.",
  },
];

const advancedSeoPillars = [
  {
    icon: Gauge,
    title: "Better Website Performance",
    desc: "Faster websites improve rankings and user retention.",
  },
  {
    icon: MousePointerClick,
    title: "Smarter Conversion Paths",
    desc: "Traffic should move users toward action.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger Search Authority",
    desc: "Topical depth improves long-term visibility.",
  },
  {
    icon: Workflow,
    title: "SEO Automation and Efficiency",
    desc: "Scalable systems reduce operational bottlenecks.",
  },
  {
    icon: TrendingUp,
    title: "Search Strategies Built Around Business Outcomes",
    desc: "The goal is not traffic alone. The goal is growth.",
  },
];

const targetAudiences = [
  "SaaS businesses",
  "scaling startups",
  "digital platforms",
  "high-growth e-commerce brands",
  "businesses focused on conversion efficiency",
];

const whyBusinessesChooseUs = [
  "Advanced SEO services focused on performance",
  "Strong technical and CRO expertise",
  "AI-driven optimization workflows",
  "Search strategies built around scalability",
  "Focus on measurable business growth",
];

const whatToExpect = [
  "Faster websites and improved Core Web Vitals",
  "Better organic conversion rates",
  "Higher quality search traffic",
  "Stronger topical authority",
  "More scalable organic growth systems",
];

const faqs = [
  {
    q: "What are advanced SEO services?",
    a: "Advanced SEO services go beyond basic optimization and focus on scalability, technical performance, conversion optimization, automation, and long-term search growth. At Korvion Media, advanced SEO services include SaaS SEO, Core Web Vitals optimization, AI SEO workflows, CRO, and topical authority strategies.",
  },
  {
    q: "What is the difference between traditional SEO and advanced SEO?",
    a: "Traditional SEO mainly focuses on rankings and keyword visibility, while advanced SEO focuses on performance factors such as speed, user experience, conversions, technical infrastructure, and scalable growth systems.",
  },
  {
    q: "Why are conversion rate optimization services important?",
    a: "Conversion rate optimization services improve how effectively your website converts visitors into leads or customers. This includes optimizing landing pages, user flows, messaging, and website behavior to improve business outcomes from existing traffic.",
  },
  {
    q: "What are AI SEO services?",
    a: "AI SEO services use automation and data-driven workflows to improve SEO efficiency, content optimization, search analysis, and scalability. Korvion Media uses AI strategically to support faster decision-making and advanced optimization processes.",
  },
  {
    q: "How does page speed optimization affect SEO?",
    a: "Page speed directly impacts user experience, bounce rate, search rankings, and conversions. Faster websites improve engagement and support stronger long-term organic performance.",
  },
  {
    q: "Who should invest in advanced SEO services?",
    a: "Advanced SEO services are ideal for SaaS businesses, ecommerce brands, scaling startups, and companies that already have traffic but want better performance, conversions, and scalable organic growth.",
  },
];

export function AdvancedSEOClient() {
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
            Get Advanced SEO Audit
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
                  <Rocket className="h-4 w-4" />
                  Advanced SEO & CRO Engineering
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Scale Smarter With Advanced SEO Services and Conversion Optimization
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Modern SEO is no longer just about rankings. It is about faster websites, better user experience, higher conversions, and sustainable search visibility.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we combine advanced SEO services, conversion optimization, AI-driven workflows, and performance engineering to help businesses scale organic growth efficiently. Because traffic alone does not grow businesses. Performance does.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Talk to an SEO Performance Expert
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>

                  <button
                    onClick={openBookACall}
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 backdrop-blur-md px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all shadow-sm cursor-pointer"
                  >
                    Get Advanced SEO Audit <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column Graphic Card */}
              <div className="lg:col-span-5">
                <TiltCard className="rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <Gauge className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">SEO & CRO Performance Matrix</h3>
                        <p className="text-xs text-muted-foreground">Search Engine Authority System</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Top 1% Core Vitals
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">CRO & SEO Pillars:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Core Web Vitals 100", "AI Workflows", "Intent Funnels", "Technical Audit", "Semantic Schema", "CRO Testing"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Acquisition Index</p>
                      <p className="text-sm font-bold text-foreground">Measable ROAS & Growth</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BrainCircuit className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TRADITIONAL SEO STOPS SCALING */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Scalability Bottlenecks</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Why Traditional SEO Stops Scaling
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Many businesses reach a point where rankings improve, but growth slows down. Why? Because modern search performance depends on much more than keywords.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {traditionalSeoProblems.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base capitalize">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-gradient-primary mt-8">
              SEO without performance optimization eventually plateaus.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Advanced SEO and Performance Services
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                We combine search visibility, technical performance, and conversion optimization into one scalable growth system.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <TiltCard className="rounded-3xl border border-border bg-surface/40 p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
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

                      <div className="mt-8 border-t border-border/60 pt-4">
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
                👉 Build an SEO System That Scales <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT ADVANCED SEO ACTUALLY MEANS */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Engineering Framework</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">What Advanced SEO Actually Means</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Advanced SEO is not about adding more keywords. It is about removing the friction that limits growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedSeoPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <TiltCard
                    key={p.title}
                    className="rounded-3xl border border-border bg-background p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant"
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
                👉 Scale Beyond Traditional SEO <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* BUILT FOR BUSINESSES THAT NEED MORE THAN RANKINGS */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Audience</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              Built for Businesses That Need More Than Rankings
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {targetAudiences.map((aud) => (
                <div key={aud} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 flex items-center gap-3 shadow-glow-sm hover:border-primary/40 transition-all text-left">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="font-bold text-base capitalize">{aud}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-gradient-primary max-w-2xl mx-auto">
              If your SEO strategy is generating visibility but not meaningful growth, the problem is usually performance.
            </p>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE KORVION MEDIA */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Businesses Choose Korvion Media</h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyBusinessesChooseUs.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-background p-6 flex items-start gap-4 hover:border-primary/40 transition-all">
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
                We do not treat SEO as isolated optimization. We build integrated organic growth systems.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your SEO Performance Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN EXPECT */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What You Can Expect</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {whatToExpect.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-muted-foreground">
              The difference between average SEO and advanced SEO is performance at scale.
            </p>

            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request an Advanced SEO Growth Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Build an SEO Strategy <span className="text-gradient-primary">That Performs Beyond Rankings</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your organic growth is slowing down despite increasing SEO efforts, it is time to optimize the system behind the traffic.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Get Advanced SEO Audit
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
              Trusted by Businesses Focused on <span className="text-gradient-primary">Scalable Organic Growth</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses that need performance-driven SEO systems, not just rankings.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Advanced Technical</h3>
                <p className="mt-1 text-xs text-muted-foreground">Advanced technical SEO expertise</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Conversion Focused</h3>
                <p className="mt-1 text-xs text-muted-foreground">Conversion-focused optimization</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Scalable Authority</h3>
                <p className="mt-1 text-xs text-muted-foreground">Scalable content & authority strategy</p>
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
              Ready to Scale <span className="text-gradient-primary">Beyond Traditional SEO</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s build an SEO system designed for speed, conversions, and long-term growth.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Advanced SEO Strategy Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
