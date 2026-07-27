"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Search,
  Sparkles,
  Globe2,
  Megaphone,
  Share2,
  FileText,
  Database,
  Cpu,
  Smartphone,
  ShieldCheck,
  Target,
  Users,
  Lightbulb,
  Heart,
  TrendingUp,
  Award,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Briefcase,
  Rocket,
  CheckCircle2,
  Phone,
  Compass,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { useBookACall } from "@/context/BookACallContext";

const servicesList = [
  { icon: Search, name: "Search Engine Optimization", href: "/best-seo-services" },
  { icon: Sparkles, name: "Branding and Creative Strategy", href: "/branding-agency-creative-services" },
  { icon: Globe2, name: "Website Design and Development", href: "/website-design-services" },
  { icon: Megaphone, name: "Performance Marketing", href: "/performance-marketing-services" },
  { icon: Share2, name: "Social Media Marketing", href: "/social-media-marketing-services" },
  { icon: FileText, name: "Content Marketing", href: "/best-seo-services" },
  { icon: Database, name: "CRM Solutions", href: "/crm-setup-marketing-automation-services" },
  { icon: Cpu, name: "Marketing Automation", href: "/crm-setup-marketing-automation-services" },
  { icon: Smartphone, name: "Mobile and Web App Development", href: "/custom-mobile-web-app-development" },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace new ideas, evolving technologies, and creative thinking to deliver solutions that keep our clients ahead of changing market trends.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Honesty, transparency, and accountability are at the heart of every partnership we build.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe the strongest results come from working closely with our clients and treating every project as a shared journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "From planning to execution, we are committed to maintaining high standards across every stage of our work.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "We measure our success by the success of our clients and continuously strive to create opportunities for long-term business growth.",
  },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Cpu, label: "Technology" },
  { icon: ShoppingCart, label: "Retail & D2C" },
  { icon: Building2, label: "Real Estate" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Rocket, label: "Startups & SaaS" },
];

const whyChooseUs = [
  "Strategic and practical thinking",
  "Transparent communication",
  "Research-based decision making",
  "Creative problem solving",
  "Quality-focused execution",
  "Measurable business outcomes",
  "Commitment to continuous improvement",
];

export function AboutUsClient() {
  const { openBookACall } = useBookACall();

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* HERO SECTION */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                ABOUT KORVION MEDIA
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                <SplitText splitBy="words" stagger={0.04}>
                  Empowering Businesses to
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.04} delay={0.2}>
                    Grow with Confidence.
                  </SplitText>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                At Korvion Media, we believe every business deserves a strong digital presence built on strategy, creativity, and measurable results. Our purpose is to help brands grow by combining marketing expertise with technology that creates meaningful business impact.
              </motion.p>
            </FadeInSection>
          </div>
        </section>

        {/* WHO WE ARE & OUR STORY */}
        <section className="section-isolate py-20 border-t border-border/60 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
            <FadeInSection className="lg:col-span-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">WHO WE ARE</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3 leading-tight">
                Your Strategic Growth & Marketing Partner
              </h2>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <Link href="/" className="text-primary font-semibold hover:underline">
                  Korvion Media
                </Link>{" "}
                is a digital marketing company that partners with ambitious businesses looking to grow in an increasingly competitive marketplace.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Rather than offering isolated services, we focus on building connected digital experiences that strengthen every stage of the customer journey — combining digital marketing, branding, web development, performance marketing, automation, and technology.
              </p>
            </FadeInSection>

            <FadeInSection className="lg:col-span-6" delay={0.2}>
              <TiltCard className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/60 to-background p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
                
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">OUR STORY</span>
                <h3 className="text-2xl font-bold mt-2">Built for Smarter Marketing Decisions</h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Korvion Media was founded with one clear objective: to help businesses make smarter marketing decisions.
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We recognized that many organizations invest in digital marketing without a clear direction or measurable outcomes.{" "}
                  <Link href="/process" className="text-primary font-semibold hover:underline">
                    Our process
                  </Link>{" "}
                  is different. We begin by understanding your business, your customers, and your goals before recommending the right strategy.
                </p>

                <div className="mt-6 pt-6 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">FOUNDED ON</p>
                    <p className="text-sm font-bold text-foreground">Research & Transparency</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">HUB LOCATIONS</p>
                    <p className="text-sm font-bold text-primary">Bangalore & Belagavi</p>
                  </div>
                </div>
              </TiltCard>
            </FadeInSection>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">WHAT WE DO</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3">
                Integrated Marketing & Technology Solutions
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Every solution is designed to work together, creating a seamless digital experience that supports brand awareness, customer engagement, and business growth.
              </p>
            </div>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
              {servicesList.map((srv) => {
                const Icon = srv.icon;
                return (
                  <StaggerChild key={srv.name}>
                    <Link href={srv.href}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="group rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/50 hover:shadow-glow-sm transition-all h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                            {srv.name}
                          </h3>
                        </div>
                        <div className="mt-6 flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                          <span>Explore Service</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </div>
                      </motion.div>
                    </Link>
                  </StaggerChild>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="section-isolate py-24 border-t border-border/60 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8">
            <FadeInSection>
              <TiltCard className="rounded-3xl border border-border bg-background p-8 lg:p-10 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                    <Compass className="h-7 w-7" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">OUR VISION</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-2">To Become Your Trusted Growth Partner</h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    To become a trusted digital growth partner for businesses by delivering innovative marketing and technology solutions that create lasting value, inspire confidence, and support sustainable success.
                  </p>
                </div>
              </TiltCard>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <TiltCard className="rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-surface/50 p-8 lg:p-10 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow">
                    <Target className="h-7 w-7" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">OUR MISSION</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-2">Unlocking True Potential Through Strategy</h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Our mission is to help businesses unlock their true potential through strategic thinking, creative execution, and technology-driven solutions. We are committed to building lasting relationships by delivering transparency, measurable outcomes, and exceptional experiences.
                  </p>
                </div>
              </TiltCard>
            </FadeInSection>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">OUR VALUES</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3">The Principles That Drive Our Work</h2>
            </div>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <StaggerChild key={val.title}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="rounded-2xl border border-border bg-surface/40 p-7 hover:border-primary/40 transition-all h-full"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{val.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                    </motion.div>
                  </StaggerChild>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* INDUSTRIES WE SUPPORT */}
        <section className="section-isolate py-20 border-t border-border/60 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">INDUSTRIES WE SUPPORT</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3">Tailored Strategies for Every Sector</h2>
              <p className="mt-4 text-base text-muted-foreground">
                By understanding each industry's unique landscape, we create solutions that are practical, relevant, and aligned with business objectives.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.label}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/80 p-6 text-center hover:border-primary/40 transition-all"
                  >
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <span className="font-semibold text-sm">{ind.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
            <FadeInSection className="lg:col-span-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">WHY KORVION MEDIA</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3">
                Partnerships Built on Trust & Measurable Outcomes
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Businesses choose Korvion Media because we focus on building long-term partnerships rather than simply delivering one-off projects.
              </p>

              <div className="mt-8 space-y-3.5">
                {whyChooseUs.map((reason) => (
                  <div key={reason} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection className="lg:col-span-6" delay={0.2}>
              <TiltCard className="rounded-3xl border border-primary/30 bg-surface/50 p-8 lg:p-10 text-center shadow-2xl relative overflow-hidden">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-6">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Ready to Move Forward with Clarity?</h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Every recommendation we make is aligned with your business goals, helping you move forward with confidence.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      Book a Strategy Session
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>

                  <a
                    href="tel:+919480156345"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +91 9480156345
                  </a>
                </div>
              </TiltCard>
            </FadeInSection>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="section-isolate py-20 border-t border-border/60 bg-surface/30 text-center">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <FadeInSection>
              <h2 className="text-3xl sm:text-5xl font-bold">Let's Grow Together</h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Whether you are launching a new brand, improving your online presence, or looking to scale your business, Korvion Media is here to help you move forward with clarity and confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton strength={0.2}>
                  <RippleButton
                    onClick={openBookACall}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                  >
                    👉 Talk to Korvion Media
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </RippleButton>
                </MagneticButton>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  Contact Page
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
