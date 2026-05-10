import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2, Palette, Megaphone, Bot } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Korvion Media | Build the Next Era of Growth" },
      {
        name: "description",
        content:
          "Join Korvion Media. We hire operators, not employees. Open roles across engineering, design, performance marketing and AI automation.",
      },
      { property: "og:title", content: "Careers at Korvion Media" },
      { property: "og:description", content: "Operators wanted. Build revenue systems for the world's most ambitious brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers — Korvion Media" },
      { name: "twitter:description", content: "Join Korvion Media. We hire operators, not employees. Open roles across engineering, design, performance marketing and AI automation." },
    ],
  }),
  component: CareersPage,
});

const values = [
  { title: "Outcome over output", body: "We don't measure hours. We measure what moved." },
  { title: "Default to ownership", body: "If you see it, you own it. No handoffs, no excuses." },
  { title: "Speed × Craft", body: "We ship fast — and we ship beautiful. Both, not either." },
  { title: "Compound learners", body: "Every week you should be sharper than the last." },
];

const roles = [
  { icon: Code2, title: "Senior Full-Stack Engineer", type: "Full-time · Remote", tags: ["React", "Node", "AI"] },
  { icon: Palette, title: "Brand & Visual Designer", type: "Full-time · Mumbai", tags: ["Identity", "Web", "Motion"] },
  { icon: Megaphone, title: "Performance Marketing Lead", type: "Full-time · Remote", tags: ["Meta", "Google", "CRO"] },
  { icon: Bot, title: "AI Automation Engineer", type: "Contract · Remote", tags: ["LLMs", "n8n", "CRM"] },
  { icon: Palette, title: "Content Producer / Editor", type: "Full-time · Mumbai", tags: ["Reels", "Edit", "Story"] },
  { icon: Megaphone, title: "Account Strategist", type: "Full-time · Hybrid", tags: ["Strategy", "Client", "Ops"] },
];

// Orbiting particles for hero
function OrbitalSystem() {
  return (
    <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] pointer-events-none hidden lg:block">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-primary/10 rounded-full"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/60 shadow-glow-sm"
        />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[15%] border border-primary/15 rounded-full"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40"
        />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[30%] border border-primary/20 rounded-full"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/70 shadow-glow-sm"
        />
      </motion.div>
      {/* Center core */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-[45%] rounded-full bg-primary/30 blur-sm"
      />
    </div>
  );
}

function CareersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />

        {/* Hero Section */}
        <section ref={heroRef} className="section-isolate relative pt-36 pb-20 overflow-hidden min-h-[55vh] flex items-center">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <OrbitalSystem />

          <motion.div style={{ y: heroY }} className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Careers
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  We don't hire employees.
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.05} delay={0.3}>
                    We recruit operators.
                  </SplitText>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                If you ship faster than you talk, sweat the details no one notices, and care more about the result than the role — we should talk.
              </motion.p>
            </FadeInSection>
          </motion.div>
        </section>

        {/* Values — 3D Cards */}
        <section className="section-isolate py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="text-center mb-16">
              <h2 className="text-4xl font-bold">How we operate</h2>
              <p className="mt-4 text-muted-foreground text-lg">The principles that drive every decision we make.</p>
            </FadeInSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 perspective-1000">
              {values.map((v, i) => (
                <TiltCard key={v.title} tiltAmount={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 25, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, type: "spring" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="bg-background border border-border rounded-2xl p-7 h-full hover:border-primary/40 hover:shadow-glow-sm transition-all group"
                  >
                    <motion.div
                      animate={{ rotateY: [0, 15, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                      className="font-mono text-3xl text-gradient-primary mb-4"
                    >
                      0{i + 1}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Roles — 3D List */}
        <section className="section-isolate py-20 bg-surface/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Open Positions</p>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Find your{" "}
                <span className="text-gradient-primary">arena.</span>
              </h2>
            </FadeInSection>

            <StaggerChildren className="space-y-3" staggerDelay={0.07}>
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <StaggerChild key={r.title}>
                    <motion.a
                      href="#apply"
                      whileHover={{ x: 8, transition: { type: "spring", stiffness: 300 } }}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                    >
                      <div className="flex items-center gap-5">
                        <motion.div
                          whileHover={{ rotateY: 180, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          style={{ transformStyle: "preserve-3d" }}
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{r.title}</h3>
                          <p className="text-sm text-muted-foreground">{r.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                          {r.tags.map((t) => (
                            <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground group-hover:border-primary/30 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </motion.a>
                  </StaggerChild>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* Apply CTA */}
        <section id="apply" className="section-isolate py-32 overflow-hidden">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-3xl border border-border bg-surface/50 backdrop-blur-xl p-12 shadow-elegant"
            >
              {/* glow orbs */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl pointer-events-none"
              />
              <h2 className="text-4xl sm:text-5xl font-bold">Don't see your role?</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                We're always looking for category-defining talent. Send your work, your wins, and the system you'd build first.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all group"
              >
                Join Korvion
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
