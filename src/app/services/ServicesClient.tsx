"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowUpRight, Zap, Globe2, ChartBar } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { InteractiveFlow3D } from "@/components/animations/InteractiveFlow3D";
import { services } from "@/lib/services-data";

function EcosystemOrbs() {
  const orbs = [
    { label: "SEO", x: "15%", y: "25%", size: 80, delay: 0 },
    { label: "ADS", x: "75%", y: "15%", size: 70, delay: 0.5 },
    { label: "CRM", x: "85%", y: "60%", size: 65, delay: 1 },
    { label: "WEB", x: "10%", y: "65%", size: 75, delay: 1.5 },
    { label: "BRAND", x: "50%", y: "80%", size: 85, delay: 2 },
    { label: "AI", x: "55%", y: "10%", size: 60, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={orb.label}
          animate={{
            y: [0, -15, 5, 0],
            rotate: [0, 5, -3, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{ duration: 6 + (i % 3), repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          className="absolute flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-mono text-xs font-bold"
          style={{ left: orb.x, top: orb.y, width: orb.size, height: orb.size }}
        />
      ))}

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <path d="M 150 250 Q 500 100 750 150" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="5 5" />
        <path d="M 750 150 Q 850 400 850 600" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="5 5" />
        <path d="M 100 650 Q 350 800 500 800" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="5 5" />
      </svg>
    </div>
  );
}

export function ServicesClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  const getServiceHref = (slug: string) => {
    if (slug === "social-media-marketing") return "/social-media-marketing-services";
    if (slug === "branding-creative") return "/branding-agency-creative-services";
    if (slug === "content-production") return "/video-production-photography-services";
    if (slug === "performance-marketing") return "/performance-marketing-services";
    if (slug === "web-digital-experience") return "/website-design-services";
    if (slug === "crm-automation-tech") return "/crm-setup-marketing-automation-services";
    if (slug === "e-learning-animation") return "/e-learning-content-development";
    if (slug === "it-product-engineering") return "/custom-mobile-web-app-development";
    if (slug === "advanced-seo-performance") return "/seo-services";
    if (slug === "advanced-seo-cro") return "/advanced-seo-performance-services";
    return `/services/${slug}`;
  };

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section ref={heroRef} className="section-isolate relative pt-36 pb-12 overflow-hidden bg-background min-h-[55vh] flex items-center">
          <EcosystemOrbs />
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />

          <motion.div style={{ y: heroY }} className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Services
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  Every discipline you need.
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.05} delay={0.3}>
                    Wired into one system.
                  </SplitText>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                From positioning to pipeline, creative to code. Each service is benefit-driven, outcome-tracked, and built to compound with the next.
              </motion.p>
            </FadeInSection>
          </motion.div>
        </section>

        {/* 3D Ecosystem Flow */}
        <section className="section-isolate py-16 bg-surface/30 border-y border-border overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-12">
            <FadeInSection>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">The Connected System</p>
              <h2 className="text-3xl sm:text-4xl font-bold">How Every Service Feeds the Next</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Siloed services stall growth. Ours are engineered to amplify each other.
              </p>
            </FadeInSection>
          </div>
          <InteractiveFlow3D
            nodes={["Branding", "SEO", "Content", "Social", "Paid Ads", "Web & CRO", "CRM & Automation", "AI Engineering"]}
          />
        </section>

        {/* Services Grid */}
        <section className="section-isolate pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <StaggerChildren className="space-y-6" staggerDelay={0.1}>
              {services.map((s, i) => {
                const Icon = s.icon;
                const linkHref = getServiceHref(s.slug);

                return (
                  <StaggerChild key={s.slug}>
                    <TiltCard
                      tiltAmount={4}
                      className="group relative rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 hover:border-primary/40 hover:shadow-glow transition-all overflow-hidden"
                    >
                      {/* Animated gradient orb */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0, 0.15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                        className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary blur-3xl pointer-events-none"
                      />

                      <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                        {/* Service Number */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="lg:col-span-1 font-mono text-sm text-primary"
                        >
                          {s.number}
                        </motion.div>

                        {/* Icon & Title */}
                        <div className="lg:col-span-4">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotateY: -45, rotateZ: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateZ: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                            whileHover={{ rotateY: 15, rotateZ: 5, scale: 1.1 }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-5"
                          >
                            <Icon className="h-7 w-7" />
                          </motion.div>

                          <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl lg:text-4xl font-bold leading-tight"
                          >
                            {s.title}
                          </motion.h2>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-7">
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl text-foreground leading-snug"
                          >
                            {s.headline}
                          </motion.p>

                          <StaggerChildren className="mt-6 grid sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                            {s.outcomes.map((o, idx) => (
                              <StaggerChild key={idx}>
                                <motion.li
                                  whileHover={{ x: 6 }}
                                  className="flex items-start gap-3 text-muted-foreground"
                                >
                                  <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                                  <span>{o}</span>
                                </motion.li>
                              </StaggerChild>
                            ))}
                          </StaggerChildren>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-7 flex flex-wrap items-center gap-5"
                          >
                            <MagneticButton strength={0.15}>
                              <Link
                                href={linkHref}
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                              >
                                Explore {s.title}
                                <ArrowUpRight className="h-4 w-4" />
                              </Link>
                            </MagneticButton>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              or book a call →
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerChild>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Why the full stack section */}
        <section className="section-isolate py-24 border-y border-border bg-surface/30 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 perspective-1000">
            <FadeInSection className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold">Why the full stack wins</h2>
              <p className="mt-5 text-xl text-muted-foreground">
                Most agencies hand you a channel. We hand you a compounding system.
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "10× Speed of Execution", body: "One pod, zero handoffs. Faster iteration, faster results." },
                { icon: Globe2, title: "Compound Growth", body: "Every service amplifies the next. SEO feeds content feeds ads." },
                { icon: ChartBar, title: "One Source of Truth", body: "All data, dashboards, and decisions live in one system." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <TiltCard key={item.title} tiltAmount={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 30, rotateX: 20 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1, type: "spring" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="h-full rounded-2xl border border-border bg-background p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all text-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm mx-auto mb-6">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
