import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Korvion Media | Audit, Strategy, Execution, Growth" },
      {
        name: "description",
        content:
          "Korvion's 4-phase growth system: Audit & Discovery, Strategy & Planning, Execution & Scaling, Optimization & Growth. Transparent, fast, accountable.",
      },
    ],
  }),
  component: ProcessPage,
});

const phases = [
  {
    n: "01",
    title: "Audit & Discovery",
    duration: "Week 1–2",
    body: "We deep-dive your brand, funnel, analytics, tech stack, customer data and competitive landscape. You leave this phase with a brutally honest map of every leak in your revenue engine.",
    deliverables: ["Growth audit report", "Funnel & data diagnostics", "Competitive teardown", "Opportunity scoring"],
  },
  {
    n: "02",
    title: "Strategy & Planning",
    duration: "Week 2–3",
    body: "We architect your custom growth blueprint — positioning, messaging, channel mix, KPIs, tech stack and the 90-day roadmap. No 80-page deck. A working operating system.",
    deliverables: ["Growth blueprint", "Channel strategy", "KPI tree & dashboards", "90-day execution roadmap"],
  },
  {
    n: "03",
    title: "Execution & Scaling",
    duration: "Day 30 →",
    body: "Our pod ships. Brand, content, ads, web, automation — built and launched in tight weekly sprints. You get a single point of contact, weekly demos and full Loom transparency.",
    deliverables: ["Weekly sprint reviews", "Live production pipeline", "Always-on creative & ads", "Tech & automation rollouts"],
  },
  {
    n: "04",
    title: "Optimization & Growth",
    duration: "Ongoing",
    body: "Continuous testing, monthly business reviews, quarterly growth planning. We optimize for compounding — every system we run gets sharper, faster and more profitable each month.",
    deliverables: ["A/B testing engine", "Monthly business reviews", "Quarterly growth plans", "Retention & LTV systems"],
  },
];

function ProcessPage() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        
        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
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
          </div>
        </section>

        {/* Timeline */}
        <section className="section-isolate pb-32 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent origin-top"
            />
            
            <div className="space-y-16">
              {phases.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 -translate-x-1/2 flex h-4 w-4 items-center justify-center z-10">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                      className="absolute h-4 w-4 rounded-full bg-primary/30 animate-pulse-glow"
                    />
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                      className="relative h-2 w-2 rounded-full bg-primary shadow-glow-sm"
                    />
                  </div>

                  {/* Left Column */}
                  <div className={`pl-16 lg:pl-0 ${i % 2 === 1 ? "lg:pr-16 lg:[direction:ltr]" : "lg:pr-16 lg:text-right"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                      className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
                    >
                      {p.duration}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                      className="mt-2 text-7xl font-display font-bold text-gradient-primary leading-none"
                    >
                      {p.n}
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                      className="mt-4 text-3xl font-bold"
                    >
                      {p.title}
                    </motion.h3>
                  </div>

                  {/* Right Column */}
                  <div className={`pl-16 lg:pl-16 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.5 }}
                      className="text-lg text-muted-foreground leading-relaxed"
                    >
                      {p.body}
                    </motion.p>
                    
                    <StaggerChildren className="mt-6 grid sm:grid-cols-2 gap-2" staggerDelay={0.05}>
                      {p.deliverables.map((d) => (
                        <StaggerChild key={d}>
                          <motion.div
                            whileHover={{ scale: 1.02, x: 2 }}
                            className="rounded-lg border border-border bg-surface/50 px-3 py-2 text-sm text-foreground"
                          >
                            {d}
                          </motion.div>
                        </StaggerChild>
                      ))}
                    </StaggerChildren>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
