"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Smartphone,
  Code,
  Server,
  Network,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Layers,
  Cloud,
  Lock,
  RefreshCcw,
  BookOpen,
  Zap,
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

const productChallenges = [
  "Applications that slow down as users grow",
  "Weak backend architecture",
  "Security vulnerabilities",
  "Poor integration between systems",
  "Products that become difficult to scale",
];

const services = [
  {
    icon: Code,
    title: "Web App Development Services",
    subhead: "Custom web applications designed for business operations and digital products.",
    items: [
      "Web app development services",
      "Enterprise application architecture",
      "Scalable frontend and backend systems",
      "High-performance web experiences",
    ],
    outcome: "We develop platforms that remain stable, fast, and scalable as your business grows.",
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    subhead: "Mobile experiences built for usability and performance.",
    items: [
      "Custom mobile app development",
      "Mobile app development services",
      "Android and iOS applications",
      "User-focused mobile experiences",
    ],
    outcome: "Every application is designed for speed, engagement, and long-term maintainability.",
  },
  {
    icon: BookOpen,
    title: "LMS and Product Development",
    subhead: "Learning and workflow systems built for modern organizations.",
    items: [
      "LMS app development",
      "LMS software development",
      "Custom LMS development",
      "Interactive platform architecture",
    ],
    outcome: "We create platforms that support training, learning management, and scalable digital delivery.",
  },
  {
    icon: Server,
    title: "Backend Systems and API Integrations",
    subhead: "Strong systems create reliable products.",
    items: [
      "Backend development services",
      "API integration services",
      "Scalable backend architecture",
      "System integrations and workflows",
    ],
    outcome: "We ensure applications communicate efficiently across platforms and systems.",
  },
  {
    icon: Cloud,
    title: "DevOps, Cloud, and Security",
    subhead: "Infrastructure built for reliability and scale.",
    items: [
      "DevOps development services",
      "Cloud infrastructure management services",
      "Application security services",
      "Performance monitoring and deployment automation",
    ],
    outcome: "We build environments designed for stability, uptime, and secure operations.",
  },
];

const scalabilityPillars = [
  {
    icon: Layers,
    title: "Strong Architecture",
    desc: "Systems should support future growth without constant rebuilding.",
  },
  {
    icon: Server,
    title: "Reliable Backend Logic",
    desc: "The backend should remain stable under increasing demand.",
  },
  {
    icon: Network,
    title: "Integration Flexibility",
    desc: "Modern products need seamless communication across tools and platforms.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    desc: "Security should be part of the engineering process, not an afterthought.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Deployment & Optimization",
    desc: "Modern applications evolve continuously through testing, deployment, and iteration.",
  },
];

const engineeringGrowthPillars = [
  "Understanding business logic",
  "Planning scalability early",
  "Optimizing user experience",
  "Designing maintainable systems",
];

const whyBusinessesChooseUs = [
  "Scalable product engineering approach",
  "Strong backend and infrastructure expertise",
  "Performance and security-focused development",
  "Integration-ready systems and applications",
];

const whatToExpect = [
  "Faster and more stable applications",
  "Better scalability and performance",
  "Reliable integrations and workflows",
  "Stronger security and infrastructure",
];

const faqs = [
  {
    q: "What are web app development services?",
    a: "Web app development services involve designing and developing browser-based applications that support business operations, customer experiences, and digital products. At Korvion Media, these services focus on scalability, performance, backend architecture, and seamless user experience.",
  },
  {
    q: "What is custom mobile app development?",
    a: "Custom mobile app development involves creating applications tailored specifically to your business requirements instead of using generic templates. Korvion Media develops scalable Android and iOS applications designed for usability, performance, and long-term maintainability.",
  },
  {
    q: "Do you provide LMS app and software development?",
    a: "Yes. Korvion Media provides LMS app development, LMS software development, and custom LMS development services for organizations that require scalable learning and training platforms with interactive functionality.",
  },
  {
    q: "Why are backend systems important for digital products?",
    a: "Backend systems handle application logic, data processing, integrations, and system communication. A strong backend architecture improves application stability, scalability, security, and overall performance.",
  },
  {
    q: "What are DevOps and cloud infrastructure services?",
    a: "DevOps and cloud infrastructure services help businesses automate deployment, improve system reliability, and manage scalable environments. These services support faster releases, better monitoring, and secure infrastructure management.",
  },
  {
    q: "How do I get started?",
    a: "You can call +91 9480156345 or schedule a consultation. The team at Korvion Media will understand your product requirements and recommend the right engineering and development approach.",
  },
];

export function AppDevClient() {
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
            Book a Product Strategy Call
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
                  <Cpu className="h-4 w-4" />
                  IT Product Engineering & Custom Development
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Web and Mobile App Development Services Designed for Real Business Growth
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    A good idea is not enough. A modern digital product must perform under pressure, scale with growth, and deliver a seamless user experience.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we combine product thinking, engineering, and scalable architecture to build high-performance web applications, mobile apps, and backend systems for growing businesses — from LMS platforms to enterprise applications built for long-term reliability.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Talk to a Product Engineering Expert
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
                        <Code className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Product Architecture Matrix</h3>
                        <p className="text-xs text-muted-foreground">Scalable Tech Stack Ecosystem</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Production Ready
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Engineering Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {["React / Next.js", "React Native", "Flutter", "Node.js Microservices", "Cloud Serverless", "LMS Engines", "GraphQL APIs"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Reliability Index</p>
                      <p className="text-sm font-bold text-foreground">99.9% Uptime Architecture</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Zap className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* MODERN DIGITAL PRODUCTS NEED MORE THAN DEVELOPMENT */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Engineering Bottlenecks</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Modern Digital Products Need More Than Development
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Many applications fail because they are built only for launch, not for long-term growth. Common challenges businesses face:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {productChallenges.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-gradient-primary mt-8">
              The problem is rarely the idea. It is the engineering foundation behind it.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                IT, Product, and Engineering Services
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                We build scalable systems designed around performance, usability, and long term maintainability.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                👉 Build a Scalable Digital Product <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT MAKES A PRODUCT SCALABLE */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Scalability Architecture</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">What Makes a Product Scalable</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Most businesses think scalability means adding more servers. It is much deeper than that. Scalable products are built on:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {scalabilityPillars.map((p) => {
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
                👉 Build for Scale from Day One <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* PRODUCT ENGINEERING THAT SUPPORTS BUSINESS GROWTH */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Engineering Principles</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              Product Engineering That Supports Business Growth
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              We approach development as product engineering, not just coding. That means:
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {engineeringGrowthPillars.map((uc) => (
                <div key={uc} className="rounded-2xl border border-border bg-background p-6 flex flex-col items-center justify-center text-center shadow-glow-sm hover:border-primary/40 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                  <p className="font-bold text-base">{uc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-gradient-primary max-w-2xl mx-auto">
              Because successful products are built through long-term engineering decisions, not short-term development shortcuts.
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
                We do not just develop applications. We engineer digital products designed for growth.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your Product Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN EXPECT */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What You Can Expect</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {whatToExpect.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-muted-foreground">
              A well-engineered product reduces operational friction and supports long-term growth.
            </p>

            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom Development Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Build the Right <span className="text-gradient-primary">Engineering Foundation</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your product is expected to scale, the engineering behind it must be designed for it from the beginning.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Book a Consultation
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
              Trusted by Businesses Building <span className="text-gradient-primary">Digital Products</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with organizations that need scalable systems, reliable infrastructure, and long-term engineering support.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Product Engineering</h3>
                <p className="mt-1 text-xs text-muted-foreground">Product-focused engineering approach</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Scalable Architecture</h3>
                <p className="mt-1 text-xs text-muted-foreground">Scalable architecture planning early</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Secure Development</h3>
                <p className="mt-1 text-xs text-muted-foreground">Secure & performance-driven development</p>
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
              Ready to Build a Product <span className="text-gradient-primary">That Scales</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s create digital products designed for performance, flexibility, and growth.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Product Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
