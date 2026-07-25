"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Palette,
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  Users,
  CheckCircle2,
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

import brandIdentityMockup from "@/assets/brand-identity-mockup.png";

const mockupSrc =
  typeof brandIdentityMockup === "string"
    ? brandIdentityMockup
    : brandIdentityMockup.src;

const services = [
  {
    icon: Target,
    title: "Brand Identity and Positioning",
    subhead: "We define what your brand stands for and how it should be perceived.",
    items: [
      "Brand strategy and positioning",
      "Brand consulting approach",
      "Brand positioning and repositioning",
      "Brand development systems",
    ],
    outcome: "Your brand becomes clear, consistent, and differentiated.",
  },
  {
    icon: Palette,
    title: "Logo and Visual Identity Design",
    subhead: "Your identity is your first impression. We make it count.",
    items: [
      "Logo design services",
      "Custom logo design services",
      "Visual identity services",
      "Brand guidelines",
    ],
    outcome: "We create scalable design systems that stay consistent across platforms.",
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns",
    subhead: "Ideas that do not just look good but perform.",
    items: [
      "Brand campaign strategy",
      "Creative direction",
      "Advertising creatives",
      "Campaign storytelling",
    ],
    outcome: "Every campaign is built to capture attention and drive action.",
  },
  {
    icon: Sparkles,
    title: "Graphic Design Services",
    subhead: "Design that supports marketing, not just aesthetics.",
    items: [
      "Marketing creatives",
      "Social media design",
      "Digital and print design",
      "Brand collaterals",
    ],
    outcome: "Every asset aligns with your brand and business goals.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "1. Discovery and Research",
    desc: "We understand your market, audience, and competition.",
  },
  {
    step: "02",
    title: "2. Strategy and Positioning",
    desc: "We define your brand foundation and direction.",
  },
  {
    step: "03",
    title: "3. Design and Identity",
    desc: "We create visual systems that bring your brand to life.",
  },
  {
    step: "04",
    title: "4. Execution and Rollout",
    desc: "We ensure consistency across all platforms and campaigns.",
  },
];

const whyChooseUsPoints = [
  "Strategy first approach, not just design",
  "Focus on business outcomes, not just visuals",
  "Scalable branding systems",
  "Integrated creative and marketing thinking",
];

const businessOutcomes = [
  "Stronger brand recall",
  "Higher conversion rates",
  "Better campaign performance",
  "Consistent brand communication",
];

const faqs = [
  {
    q: "1. What does a branding agency do?",
    a: "A branding agency helps businesses define their identity, positioning, and communication. At Korvion Media, this includes brand strategy, brand identity design, logo design services, and creative campaigns that ensure your brand stands out and remains consistent across all platforms.",
  },
  {
    q: "2. How is branding different from advertising?",
    a: "Branding focuses on building long-term perception, trust, and recognition, while advertising drives short-term campaigns and conversions. A strong brand makes advertising more effective by ensuring consistent messaging and identity across every campaign.",
  },
  {
    q: "3. Do I need a branding agency for my business?",
    a: "If your business lacks clarity, consistency, or differentiation, working with a branding agency can help you build a strong foundation. Korvion Media helps businesses create scalable brand systems that improve recognition, engagement, and overall growth.",
  },
  {
    q: "4. How long does branding take?",
    a: "The timeline depends on the scope of work. Most branding projects, including brand strategy, positioning, and visual identity design, take between 3 to 8 weeks. Larger rebranding or multi-market projects may take longer based on complexity.",
  },
  {
    q: "5. Do you offer logo design services separately?",
    a: "Yes. We offer standalone logo design services as well as complete brand identity systems. Whether you need a new logo or a full brand transformation, Korvion Media ensures consistency across all visual and communication elements.",
  },
  {
    q: "6. How do I get started?",
    a: "You can get started by booking a consultation or calling +91 9480156345. The team at Korvion Media will understand your business needs and recommend the right branding and creative services to help you grow.",
  },
];

export function BrandingClient() {
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
            Free Brand Consultation
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION (Matches Screenshot 1) */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Identity Grid Geometry Circle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none z-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="max-w-4xl text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-8"
              >
                <Sparkles className="h-4 w-4" />
                Strategic Branding & Creative Services
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
                Branding Agency and Creative Services That{" "}
                <span className="text-gradient-primary">Build Strong Brands</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Your brand is not just how it looks. It is how people recognize, trust, and choose you. At Korvion Media, we combine brand strategy, identity design, and creative execution to help businesses stand out and grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <MagneticButton strength={0.2}>
                  <RippleButton
                    onClick={openBookACall}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                  >
                    Book a Free Brand Consultation
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </RippleButton>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION / CLARITY SECTION (2-Column Layout matching Screenshot 2) */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Brand Identity Stationery Mockup */}
                <div className="lg:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden border border-border/80 bg-background shadow-2xl p-4 group"
                  >
                    <img
                      src={mockupSrc}
                      alt="Korvion Media Brand Identity Stationery System"
                      className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-background/90 backdrop-blur-md p-4 border border-border/60">
                      <p className="font-mono text-xs text-primary uppercase tracking-wider">Visual Brand Architecture</p>
                      <p className="text-sm font-bold text-foreground">Stationery, Guidelines, & Identity Kit</p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Narrative Content */}
                <div className="lg:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Introduction</p>
                    <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                      Most businesses do not struggle with visibility.{" "}
                      <span className="text-gradient-primary block mt-2">They struggle with clarity.</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      As a branding agency, we help businesses define their identity, positioning, and communication so they can compete and scale effectively.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={openBookACall}
                        className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:gap-3 transition-all cursor-pointer group"
                      >
                        <span>Talk to a Branding Expert</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Core Services</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Branding and Creative Services That Drive Real Impact
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We provide complete branding and creative services designed to build consistent and scalable brand systems.
              </p>
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
                Book a Free Brand Consultation <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* OUR BRANDING PROCESS SECTION */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Methodology</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Our Branding Process</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                A strong brand is never accidental. It is built with intention.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all">
                  <div>
                    <span className="font-mono text-3xl font-bold text-gradient-primary">{s.step}</span>
                    <h3 className="text-xl font-bold mt-4">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Build a Brand That Converts <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE KORVION MEDIA */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Businesses Choose Korvion Media</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                There are many branding agencies. Few build brands that actually perform.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyChooseUsPoints.map((point) => (
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
                We do not just make brands look good. We make them work.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Schedule Your Brand Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* REAL BUSINESS OUTCOMES */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Results</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              Real Business Outcomes, Not Just Creative Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A brand is not an expense. It is a growth asset. Our clients see:
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessOutcomes.map((out) => (
                <div key={out} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{out}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-sm font-mono text-muted-foreground mb-6">
                Because branding is not decoration. It is a direction.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Request a Custom Branding Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH (2-Column Layout matching Screenshot 3) */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Client Success Graphic Card */}
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="rounded-3xl border border-border/80 bg-surface/50 p-12 text-center flex flex-col items-center justify-center min-h-[380px] shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Client Success Visual</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Tailored brand architecture built for modern founders and enterprise teams.
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Checkmarks List */}
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Audience Fit</p>
                  <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                    Who We <span className="text-gradient-primary">Work With</span>
                  </h2>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-lg font-semibold">Startups building from scratch</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-lg font-semibold">Growing businesses scaling identity</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-lg font-semibold">Enterprises refining brand systems</p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground pt-2">
                    If your brand needs clarity, consistency, or growth, we are built for it.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={openBookACall}
                      className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:gap-3 transition-all cursor-pointer group"
                    >
                      <span>Let’s Discuss Your Brand Goals</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* LET'S BUILD A BRAND THAT DRIVES GROWTH */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Build a Brand That <span className="text-gradient-primary">Drives Growth</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your brand is unclear, inconsistent, or underperforming, it is costing you more than you think. Let’s fix that.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Book a Free Brand Consultation
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
                <p className="mt-1 text-xs text-muted-foreground">Proven creative and branding frameworks</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Data-Informed</h3>
                <p className="mt-1 text-xs text-muted-foreground">Data-informed decision-making</p>
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
              Ready to Elevate Your <span className="text-gradient-primary">Brand</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s create something that not only looks great but also performs.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Branding Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
