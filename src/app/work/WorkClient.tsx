"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTASection } from "@/components/CTASection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";

const studies = [
  {
    tag: "D2C · Wellness",
    brand: "NordIQ Wellness",
    title: "From cluttered brand to category leader",
    metrics: [
      { v: "+312%", l: "Revenue in 90 days" },
      { v: "4.7x", l: "Blended ROAS" },
      { v: "−42%", l: "CAC reduction" },
    ],
    problem:
      "Premium supplement brand stuck under a 1.4x ROAS, indistinguishable from 50 competitors, with creative fatigue and no retention loop.",
    solution:
      "Repositioned around a clear founder narrative, rebuilt the funnel from ad to upsell, and launched a creator-led UGC engine producing 40+ assets/month.",
    result:
      "Hit ₹3.2Cr revenue in Q2 with the same ad budget. LTV up 58%. Retention email flow now drives 28% of monthly revenue.",
  },
  {
    tag: "SaaS · B2B",
    brand: "Vaulthaus Cloud",
    title: "Predictable pipeline, on autopilot",
    metrics: [
      { v: "−61%", l: "Cost per lead" },
      { v: "8x", l: "SQL volume" },
      { v: "23%", l: "Demo → close rate" },
    ],
    problem:
      "Cold outbound was burning their SDRs. Inbound was non-existent. Ad spend was generating MQLs that never closed.",
    solution:
      "Designed a LinkedIn thought-leadership engine, content + SEO play, and an automated lead scoring + routing flow into HubSpot. Sales team focuses only on warm SQLs.",
    result:
      "Pipeline now compounds month over month. CAC payback dropped from 14 months to 6. Their SDR team was reallocated to expansion.",
  },
  {
    tag: "Coach · Education",
    brand: "Strata Performance",
    title: "Personal brand to ₹2Cr launch",
    metrics: [
      { v: "₹2.1Cr", l: "Cohort revenue" },
      { v: "21 days", l: "Launch window" },
      { v: "1,400+", l: "Qualified applicants" },
    ],
    problem:
      "World-class operator with deep expertise, zero distribution, no offer architecture, and no launch system.",
    solution:
      "Built the brand narrative, 90-day content runway, paid ad funnel, webinar engine and CRM automation end-to-end. Trained their team to run it on repeat.",
    result:
      "Sold out cohort in 3 weeks. Built an asset that now produces predictable launches every quarter.",
  },
  {
    tag: "E-commerce · Fashion",
    brand: "Atelier 09",
    title: "Rebrand → revenue inflection",
    metrics: [
      { v: "2.8x", l: "AOV growth" },
      { v: "+187%", l: "Repeat customer rate" },
      { v: "₹1.6Cr", l: "Add'l revenue / yr" },
    ],
    problem:
      "Beautiful product, forgettable brand. Couldn't justify premium pricing. Discounting was killing margin.",
    solution:
      "Strategic rebrand, editorial content engine, retention flows, and a redesigned high-converting Shopify build with bundles and post-purchase upsells.",
    result:
      "Stopped discounting entirely. Premium positioning held. Repeat purchase became their largest revenue lever.",
  },
];

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className="absolute rounded-full bg-primary/20 blur-3xl"
          style={{
            width: `${150 + i * 80}px`,
            height: `${150 + i * 80}px`,
            left: `${10 + i * 20}%`,
            top: `${5 + i * 15}%`,
          }}
        />
      ))}
    </div>
  );
}

function Stats3D() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const stats = [
    { value: "₹50Cr+", label: "Revenue Generated" },
    { value: "4.2x", label: "Avg. ROAS Improvement" },
    { value: "12+", label: "Industry Verticals" },
    { value: "100%", label: "Client Retention Rate" },
  ];

  return (
    <div ref={ref} className="perspective-1000 py-16">
      <motion.div
        style={{ rotateX, scale, transformStyle: "preserve-3d" }}
        className="mx-auto max-w-7xl px-6 lg:px-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ translateZ: 30, scale: 1.05 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-glow-sm hover:shadow-glow transition-all group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="text-3xl lg:text-4xl font-display font-bold text-gradient-primary">
                <CounterAnimation value={s.value} duration={2.5} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-mono tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function WorkClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section — 3D Parallax */}
        <section ref={heroRef} className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background min-h-[55vh] flex items-center">
          <FloatingOrbs />
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* 3D rotating wireframe ring */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-[-5%] top-1/4 w-[500px] h-[500px] border border-primary/10 rounded-full pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ rotateX: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[20%] border border-primary/15 rounded-full"
            />
          </motion.div>

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Case Studies
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  Brands we built.
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.05} delay={0.3}>
                    Numbers we moved.
                  </SplitText>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                No fluff slides. No vanity metrics. Just the problem, the system we engineered, and the revenue it printed.
              </motion.p>
            </FadeInSection>
          </motion.div>
        </section>

        {/* 3D Stats Bar */}
        <Stats3D />

        {/* Case Studies */}
        <section className="section-isolate pb-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <StaggerChildren className="space-y-8" staggerDelay={0.15}>
              {studies.map((s, i) => (
                <StaggerChild key={s.brand}>
                  <TiltCard
                    tiltAmount={5}
                    className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 lg:p-12 hover:border-primary/40 hover:shadow-glow transition-all"
                  >
                    {/* Gradient orb */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none"
                    />

                    <div className="relative grid lg:grid-cols-12 gap-10">
                      {/* Left Column */}
                      <div className="lg:col-span-4">
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
                        >
                          {s.tag}
                        </motion.span>

                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="mt-4 text-3xl lg:text-4xl font-bold leading-tight"
                        >
                          {s.title}
                        </motion.h2>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="mt-3 text-muted-foreground"
                        >
                          — {s.brand}
                        </motion.p>

                        {/* Metrics — 3D hover cards */}
                        <div className="mt-8 grid grid-cols-3 gap-3 perspective-1000">
                          {s.metrics.map((m, mi) => (
                            <motion.div
                              key={m.l}
                              initial={{ opacity: 0, y: 20, rotateX: -30 }}
                              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                              whileHover={{ scale: 1.08, rotateY: 8, translateZ: 20 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: mi * 0.1, type: "spring" }}
                              style={{ transformStyle: "preserve-3d" }}
                              className="rounded-xl border border-border bg-background p-3 text-center shadow-elegant"
                            >
                              <div className="text-xl font-bold text-gradient-primary">
                                <CounterAnimation value={m.v} duration={2} />
                              </div>
                              <div className="mt-1 text-[10px] text-muted-foreground leading-tight">{m.l}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="lg:col-span-8">
                        <StaggerChildren className="space-y-6" staggerDelay={0.1}>
                          <StaggerChild>
                            <Block label="Problem" body={s.problem} />
                          </StaggerChild>
                          <StaggerChild>
                            <Block label="Solution" body={s.solution} />
                          </StaggerChild>
                          <StaggerChild>
                            <Block label="Result" body={s.result} highlight />
                          </StaggerChild>
                        </StaggerChildren>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerChild>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}

function Block({ label, body, highlight }: { label: string; body: string; highlight?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative pl-5 border-l-2 ${highlight ? "border-primary" : "border-border"}`}
    >
      <div className={`text-xs uppercase tracking-[0.2em] font-mono mb-2 ${highlight ? "text-primary" : "text-muted-foreground"}`}>
        {label}
      </div>
      <p className={`leading-relaxed ${highlight ? "text-foreground text-lg" : "text-muted-foreground"}`}>{body}</p>
    </motion.div>
  );
}
