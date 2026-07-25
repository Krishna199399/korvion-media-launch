"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Layout,
  Code,
  Smartphone,
  Zap,
  MonitorPlay,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Layers,
  MousePointerClick,
  Gauge,
  Workflow,
  RefreshCw,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whereWebsitesFail = [
  "No clear user journey",
  "Weak calls to action",
  "Slow performance",
  "Poor mobile experience",
];

const highPerformingPillars = [
  { title: "Capture Attention Instantly", desc: "Engage visitors within the first 3 seconds of page load." },
  { title: "Build Trust Within Seconds", desc: "Establish immediate industry authority and brand credibility." },
  { title: "Guide Users Toward Action", desc: "Intuitive conversion pathways designed to eliminate friction." },
  { title: "Convert Consistently", desc: "Turn passive traffic into predictable inbound leads & sales." },
];

const services = [
  {
    icon: Layout,
    title: "UI UX Design Services",
    subhead: "We design how users think, move, and act on your website.",
    items: [
      "UI UX design services",
      "User journey mapping",
      "Interaction design",
      "Experience optimization",
    ],
  },
  {
    icon: MonitorPlay,
    title: "Website Design Services",
    subhead: "Every page has a purpose.",
    items: [
      "Website design services",
      "Responsive website design services",
      "Mobile optimized layouts",
      "Scalable design systems",
    ],
  },
  {
    icon: Code,
    title: "Custom Web Development",
    subhead: "Performance and flexibility are built together.",
    items: [
      "Customize web development",
      "Website design and development services",
      "Secure and scalable builds",
      "High-performance architecture",
    ],
  },
  {
    icon: Zap,
    title: "Landing Pages That Convert",
    subhead: "Designed for action, not just traffic.",
    items: [
      "Conversion-focused landing pages",
      "A B testing-ready design",
      "Funnel-aligned structure",
    ],
  },
];

const conversionGapFixes = [
  "Improve clarity",
  "Reduce friction",
  "Optimize user flow",
  "Strengthen the call to action",
];

const webExperiencePillars = [
  {
    icon: Layers,
    title: "User First Thinking",
    desc: "We design based on how users interact, not assumptions.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    desc: "Speed and responsiveness directly impact results.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Structure",
    desc: "Every page is designed to guide action.",
  },
  {
    icon: Workflow,
    title: "Continuous Improvement",
    desc: "We optimize based on real data, not guesswork.",
  },
];

const redesignPoints = [
  "Website redesign services",
  "UX improvements",
  "Performance upgrades",
  "Conversion-focused redesign",
];

const whyBusinessesChooseUs = [
  "Website design services focused on conversion",
  "Strong UI UX design approach",
  "Scalable web development systems",
  "Performance-driven execution",
];

const whatToExpect = [
  "Better user engagement",
  "Higher conversion rates",
  "Faster website performance",
  "Improved user experience",
];

const faqs = [
  {
    q: "What are website design services?",
    a: "Website design services involve planning, designing, and structuring a website to improve user experience, usability, and overall performance. At Korvion Media, this includes UI UX design services, responsive layouts, and conversion-focused elements that guide users, improve engagement, and support business goals.",
  },
  {
    q: "What is the difference between web design and web development?",
    a: "Web design focuses on layout, visual structure, and user experience, while web development handles functionality, performance, and backend systems. Both are essential parts of website design and development services, working together to create a fast, scalable, and high-performing website.",
  },
  {
    q: "Do you provide UI UX design services?",
    a: "Yes. Korvion Media provides UI UX design services focused on improving user journeys, reducing friction, and enhancing usability. Our approach ensures that users can navigate easily, engage effectively, and take meaningful actions on your website.",
  },
  {
    q: "Do you offer website redesign services?",
    a: "Yes. We offer website redesign services to improve usability, performance, and conversion rates for existing websites. This includes updating design, optimizing user experience, and restructuring content to align with current business goals.",
  },
  {
    q: "How long does website design and development take?",
    a: "The timeline depends on the complexity and scope of the project. Most website design and development projects take a few weeks to a couple of months, including design, development, testing, and final optimization.",
  },
  {
    q: "How do I get started?",
    a: "You can get started by calling +91 9480156345 or booking a consultation. The team at Korvion Media will understand your requirements and recommend the right website design and development approach for your business.",
  },
];

export function WebsiteDesignClient() {
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
            Get Free Website Audit
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
                  <MonitorPlay className="h-4 w-4" />
                  Web Design & Conversion Experience Architecture
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Build a Website That Drives Leads, Sales, and Business Growth
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Website design is not about how it looks. It is about how it works. We don’t just build websites. We build systems that turn visitors into customers.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we provide website design services, UI UX design, and web development focusing on user behavior, Core Web Vitals performance, search visibility, and conversion optimization.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Get Free Website Audit
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
                        <Layout className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Web Architecture System</h3>
                        <p className="text-xs text-muted-foreground">High-Converting Digital Experience</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      100 Performance
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Design Standards:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Mobile-First UX", "Conversion Funnels", "Core Web Vitals", "Custom Next.js / CMS", "Brand Systems", "SEO Structural Code"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Conversion Rate</p>
                      <p className="text-sm font-bold text-foreground">Optimized User Journeys</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Smartphone className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE MOST WEBSITES FAIL */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">UX Pitfalls</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Where Most Websites Fail</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Most websites don’t fail because of design. They fail because they don’t guide users.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whereWebsitesFail.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-mono text-muted-foreground mt-8">
              Every one of these directly impacts conversions.
            </p>
          </div>
        </section>

        {/* WHAT A HIGH-PERFORMING WEBSITE ACTUALLY DOES */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Purpose</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              What a High-Performing Website Actually Does
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highPerformingPillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-base">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-muted-foreground">
              If it doesn’t do this, it’s not working.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Our Website Design and Development Services
              </h2>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <TiltCard className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
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
                👉 Get Free Website Audit <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* THE CONVERSION GAP */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Optimization</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">The Conversion Gap</h2>
            <p className="mt-4 text-lg font-semibold text-foreground max-w-2xl mx-auto">
              You are already getting traffic. But here’s the real problem: <span className="text-gradient-primary">👉 Traffic ≠ Conversions</span>
            </p>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Most businesses lose 70 to 90 percent of their visitors because their website is not designed to convert. We focus on closing that gap.
            </p>

            <div className="mt-10 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-left mb-6 text-primary font-mono uppercase tracking-wider">How do we fix it:</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {conversionGapFixes.map((fix) => (
                  <div key={fix} className="rounded-2xl border border-primary/20 bg-background p-5 text-center shadow-glow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="font-bold text-sm">{fix}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Fix Your Conversion Gap <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* HOW WE APPROACH WEB EXPERIENCE */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Philosophy</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">How We Approach Web Experience</h2>
              <p className="mt-4 text-lg font-semibold text-gradient-primary">
                We don’t follow templates. We build around behavior.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {webExperiencePillars.map((p) => {
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
                👉 Build a Website That Performs <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* WEBSITE REDESIGN SERVICES THAT IMPROVE RESULTS */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Redesign</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Website Redesign Services That Improve Results
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                If your current website is underperforming, a redesign is a strategic move.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {redesignPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-background p-6 flex items-center gap-4 hover:border-primary/40 transition-all">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-base">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-gradient-primary mt-8">
              We improve what actually matters.
            </p>
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
                We don’t build websites for launch. We build them for results.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your Website Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN EXPECT */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
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
                👉 Request a Custom Website Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Build a Website <span className="text-gradient-primary">That Works</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your website is not generating leads or sales, it’s time to fix it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Get Free Website Audit
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
              We work with businesses that want more than just a website.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Proven Frameworks</h3>
                <p className="mt-1 text-xs text-muted-foreground">Proven UX & CRO engineering systems</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Data-Informed</h3>
                <p className="mt-1 text-xs text-muted-foreground">User behavior analytics and speed focus</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Long-Term Partner</h3>
                <p className="mt-1 text-xs text-muted-foreground">Long-term collaboration approach</p>
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
              Ready to Elevate Your <span className="text-gradient-primary">Digital Experience</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s build something that not only looks good but also performs.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Website Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
