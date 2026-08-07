"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTASection } from "@/components/CTASection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";

const phases = [
  {
    n: "01",
    title: "Audit & Discovery",
    duration: "Week 1–2",
    color: "from-primary/20 to-primary/5",
    body: "We deep-dive your brand, funnel, analytics, tech stack, customer data and competitive landscape. You leave this phase with a brutally honest map of every leak in your revenue engine.",
    deliverables: ["Growth audit report", "Funnel & data diagnostics", "Competitive teardown", "Opportunity scoring"],
  },
  {
    n: "02",
    title: "Strategy & Planning",
    duration: "Week 2–3",
    color: "from-primary/25 to-primary/10",
    body: "We architect your custom growth blueprint — positioning, messaging, channel mix, KPIs, tech stack and the 90-day roadmap. No 80-page deck. A working operating system.",
    deliverables: ["Growth blueprint", "Channel strategy", "KPI tree & dashboards", "90-day execution roadmap"],
  },
  {
    n: "03",
    title: "Execution & Scaling",
    duration: "Day 30 →",
    color: "from-primary/30 to-primary/15",
    body: "Our pod ships. Brand, content, ads, web, automation — built and launched in tight weekly sprints. You get a single point of contact, weekly demos and full Loom transparency.",
    deliverables: ["Weekly sprint reviews", "Live production pipeline", "Always-on creative & ads", "Tech & automation rollouts"],
  },
  {
    n: "04",
    title: "Optimization & Growth",
    duration: "Ongoing",
    color: "from-primary/35 to-primary/20",
    body: "Continuous testing, monthly business reviews, quarterly growth planning. We optimize for compounding — every system we run gets sharper, faster and more profitable each month.",
    deliverables: ["A/B testing engine", "Monthly business reviews", "Quarterly growth plans", "Retention & LTV systems"],
  },
];

function PhaseCard3D({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <div ref={ref} className="perspective-1000">
      <motion.div
        style={{ y, opacity, rotateX, scale, transformStyle: "preserve-3d" }}
      >
        <TiltCard tiltAmount={6}>
          <div className={`relative rounded-3xl border border-border bg-gradient-to-br ${phase.color} backdrop-blur-sm p-8 lg:p-12 overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all group`}>
            {/* Depth layer */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />

            {/* Floating number */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-4 text-[10rem] font-display font-bold text-primary/5 leading-none select-none pointer-events-none"
              style={{ transform: "translateZ(20px)" }}
            >
              {phase.n}
            </motion.div>

            <div className="relative grid lg:grid-cols-12 gap-8 items-start">
              {/* Left */}
              <div className="lg:col-span-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{phase.duration}</span>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="mt-4 text-6xl lg:text-8xl font-display font-bold text-gradient-primary leading-none"
                >
                  {phase.n}
                </motion.div>

                <h3 className="mt-6 text-2xl lg:text-3xl font-bold">{phase.title}</h3>
              </div>

              {/* Right */}
              <div className="lg:col-span-8">
                <p className="text-lg text-muted-foreground leading-relaxed">{phase.body}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {phase.deliverables.map((d, di) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 6, translateZ: 10 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: di * 0.08 }}
                      className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {d}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}

function PipelineConnector({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="my-4 flex items-center justify-center gap-4 perspective-1000">
      <motion.div style={{ scaleX }} className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left" />
      <motion.div
        initial={{ scale: 0, rotateZ: -90 }}
        whileInView={{ scale: 1, rotateZ: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-8 h-8 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary text-xs font-mono flex-shrink-0"
      >
        →
      </motion.div>
      <motion.div style={{ scaleX }} className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-right" />
    </div>
  );
}

export function ProcessClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section ref={heroRef} className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background min-h-[55vh] flex items-center">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Rotating 3D wireframe */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotateY: [0, 360], rotateX: [0, 180, 0] }}
                transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear" }}
                className="absolute border border-primary/10 rounded-full"
                style={{
                  width: `${200 + i * 120}px`,
                  height: `${200 + i * 120}px`,
                  left: `${70 - i * 5}%`,
                  top: `${10 + i * 10}%`,
                  transformStyle: "preserve-3d",
                }}
              />
            ))}
          </div>

          <motion.div style={{ y: heroY }} className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Our Process
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  Four phases.
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.05} delay={0.3}>
                    Built for compounding.
                  </SplitText>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                From day one, you'll know exactly what we're doing, why we're doing it, and what number it's expected to move.
              </motion.p>
            </FadeInSection>
          </motion.div>
        </section>

        {/* 3D Phase Cards */}
        <section className="section-isolate pb-32 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={p.n}>
                  <PhaseCard3D phase={p} index={i} />
                  {i < phases.length - 1 && <PipelineConnector index={i} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee section */}
        <section className="section-isolate py-24 border-y border-border bg-surface/30 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { title: "Full Transparency", body: "Weekly Loom recaps, shared dashboards, and no hidden deliverables. You see everything." },
                { title: "Outcome-First Billing", body: "We don't get paid for effort. We get paid for moving the number." },
                { title: "One Point of Contact", body: "No account-manager relay race. One strategist owns your entire growth system." },
              ].map((item, i) => (
                <TiltCard key={item.title} tiltAmount={10}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="h-full rounded-2xl border border-border bg-background p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <span className="font-mono text-primary text-sm">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
