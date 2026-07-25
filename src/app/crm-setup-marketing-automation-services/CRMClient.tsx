"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Database,
  Workflow,
  MessageSquare,
  BarChart3,
  Bot,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Layers,
  Cpu,
  Mail,
  Zap,
  Target,
  Search,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { InteractiveFlow3D } from "@/components/animations/InteractiveFlow3D";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const withoutSystemPitfalls = [
  "Leads are missed or delayed",
  "Follow-ups depend on manual effort",
  "Teams work with incomplete data",
  "Conversion opportunities are lost",
];

const services = [
  {
    icon: Database,
    title: "CRM Implementation Services",
    subhead: "We build a structured foundation for your sales process.",
    items: [
      "CRM implementation services",
      "CRM setup and configuration",
      "HubSpot CRM setup",
      "Zoho CRM setup",
    ],
    outcome: "Your leads, contacts, and pipeline are organized in one place.",
  },
  {
    icon: Workflow,
    title: "CRM Automation and Customization",
    subhead: "We remove manual work from your daily operations.",
    items: [
      "CRM automation services",
      "CRM customization services",
      "Lead assignment workflows",
      "Follow-up triggers",
    ],
    outcome: "Your team spends less time managing data and more time closing deals.",
  },
  {
    icon: Cpu,
    title: "CRM Integration Services",
    subhead: "We connect your entire ecosystem.",
    items: [
      "CRM integration services",
      "Website and form integrations",
      "Marketing and sales tool connections",
    ],
    outcome: "No more scattered data across platforms.",
  },
  {
    icon: Zap,
    title: "Marketing Automation Services",
    subhead: "We build workflows that engage leads without manual effort.",
    items: [
      "Marketing automation services",
      "Marketing automation for small business",
      "Email marketing automation workflow",
    ],
    outcome: "Every lead receives timely and relevant communication.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp and Email Automation",
    subhead: "We improve response time and consistency.",
    items: [
      "WhatsApp marketing automation",
      "Automated email sequences",
      "Lead nurturing workflows",
    ],
    outcome: "Communication becomes faster and more reliable.",
  },
];

const systemSteps = [
  {
    step: "01",
    title: "Capture",
    desc: "Every lead from your website, ads, or campaigns is automatically recorded.",
    icon: Target,
  },
  {
    step: "02",
    title: "Track",
    desc: "Each interaction is stored and visible to your team.",
    icon: Search,
  },
  {
    step: "03",
    title: "Automate",
    desc: "Follow-ups, reminders, and workflows run without manual input.",
    icon: Bot,
  },
  {
    step: "04",
    title: "Convert",
    desc: "Better timing and consistency improve conversion rates.",
    icon: TrendingUp,
  },
];

const aiReportingPoints = [
  "AI-powered reporting dashboards",
  "Real-time lead tracking",
  "Funnel visibility",
  "Performance insights",
];

const whyBusinessesChooseUs = [
  "Structured CRM implementation services",
  "Practical automation that fits real workflows",
  "Integration across tools and platforms",
  "Focus on efficiency and measurable outcomes",
];

const whatChangesPoints = [
  "Faster lead response time",
  "Better follow-up consistency",
  "Improved team productivity",
  "Higher conversion efficiency",
];

const faqs = [
  {
    q: "What is CRM implementation, and why is it important?",
    a: "CRM implementation involves setting up and configuring a system to manage leads, customer data, and sales processes. At Korvion Media, CRM implementation services help businesses organize their pipeline, track interactions, and improve overall efficiency and conversion outcomes.",
  },
  {
    q: "What are marketing automation services?",
    a: "Marketing automation services involve creating workflows that automatically handle communication, such as emails, follow-ups, and lead nurturing. These systems reduce manual work and ensure consistent engagement with potential customers.",
  },
  {
    q: "Do you provide HubSpot and Zoho CRM setup?",
    a: "Yes. Korvion Media provides HubSpot CRM setup and Zoho CRM setup services tailored to your business workflows, ensuring proper configuration, automation, and integration.",
  },
  {
    q: "How does WhatsApp marketing automation help businesses?",
    a: "WhatsApp marketing automation allows businesses to send instant responses, follow-ups, and updates to leads and customers. It improves response time, increases engagement, and ensures no lead is left unattended.",
  },
  {
    q: "Can CRM systems integrate with existing tools?",
    a: "Yes. CRM integration services connect your CRM with websites, marketing platforms, and communication tools to create a unified system where data flows seamlessly.",
  },
  {
    q: "How do I get started?",
    a: "You can call +91 9480156345 or schedule a consultation. The team at Korvion Media will assess your current process and recommend the right CRM and automation setup.",
  },
];

export function CRMClient() {
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
            Get Free Automation Audit
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
                  <Bot className="h-4 w-4" />
                  Lead Systems & CRM Architecture
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Build a CRM and Automation System That Never Misses a Lead
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Most businesses do not lose leads because of marketing. They lose them because there is no system to capture, track, and follow up consistently.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we implement CRM systems and marketing automation services that bring structure to your sales and marketing process. Every lead is tracked. Every follow-up is triggered. Every interaction is recorded.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Talk to an Automation Expert
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
                        <Workflow className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Lead Pipeline Engine</h3>
                        <p className="text-xs text-muted-foreground">Automated CRM Architecture</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Zero Leakage
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Automation Layers:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Instant Lead Capture", "WhatsApp API Workflows", "Stage-Based Triggers", "CRM Pipeline Sync", "AI Lead Scoring", "Automated Drip Journeys"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Pipeline Accuracy</p>
                      <p className="text-sm font-bold text-foreground">100% Lead Auditability</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Database className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS WITHOUT A PROPER SYSTEM */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">System Failure</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                What Happens Without a Proper System
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                When there is no CRM or automation in place, problems show up quickly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {withoutSystemPitfalls.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-gradient-primary mt-8">
              Growth becomes inconsistent because the system is inconsistent.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                CRM Setup and Marketing Automation Services
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                We design and implement systems that bring clarity, control, and consistency.
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
                👉 Get Free Automation Audit <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* HOW THE SYSTEM WORKS (Different Section Style - Interactive Step Cards) */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">System Architecture</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">How the System Works</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Instead of adding more tools, we simplify how everything works together.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemSteps.map((s) => {
                const Icon = s.icon;
                return (
                  <TiltCard
                    key={s.step}
                    className="rounded-3xl border border-border bg-background p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-3xl font-bold text-gradient-primary">{s.step}</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
                👉 Build a System That Works <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* AI-POWERED REPORTING AND VISIBILITY */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Intelligence</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              AI-Powered Reporting and Visibility
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
              You should not have to guess what is happening.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiReportingPoints.map((pt) => (
                <div key={pt} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <BarChart3 className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{pt}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-gradient-primary">
              You see where leads come from, how they move, and where they convert.
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
                We build systems that support growth, not complexity.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your Automation Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT CHANGES AFTER IMPLEMENTATION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Impact</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What Changes After Implementation</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatChangesPoints.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-muted-foreground">
              The difference is not just in tools. It is in how your business runs.
            </p>

            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom Automation Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Fix Your Lead <span className="text-gradient-primary">Management System</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your process depends on manual effort, it will break as you scale. Build a system that works every time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Get Free Automation Audit
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
              Trusted by Growing <span className="text-gradient-primary">Businesses</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses that want structured systems, not scattered tools.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Process-Driven</h3>
                <p className="mt-1 text-xs text-muted-foreground">Process-driven CRM implementation</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Data Visibility</h3>
                <p className="mt-1 text-xs text-muted-foreground">Full data visibility and control</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Long-Term Scalability</h3>
                <p className="mt-1 text-xs text-muted-foreground">Long-term scalability focus</p>
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
              Ready to Streamline Your <span className="text-gradient-primary">Operations</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Build a system that captures leads, automates workflows, and improves conversions.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Automation Setup Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
