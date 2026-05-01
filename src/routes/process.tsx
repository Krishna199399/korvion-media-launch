import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Our Process"
            title={
              <>
                Four phases.<br />
                <span className="text-gradient-primary">Built for compounding.</span>
              </>
            }
            subtitle="From day one, you'll know exactly what we're doing, why we're doing it, and what number it's expected to move."
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-16">
            {phases.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative grid lg:grid-cols-2 gap-8 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={`absolute left-8 lg:left-1/2 top-6 -translate-x-1/2 flex h-4 w-4 items-center justify-center`}>
                  <span className="absolute h-4 w-4 rounded-full bg-primary/30 animate-pulse-glow" />
                  <span className="relative h-2 w-2 rounded-full bg-primary shadow-glow-sm" />
                </div>

                <div className={`pl-16 lg:pl-0 ${i % 2 === 1 ? "lg:pr-16 lg:[direction:ltr]" : "lg:pr-16 lg:text-right"}`}>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{p.duration}</div>
                  <div className="mt-2 text-7xl font-display font-bold text-gradient-primary leading-none">{p.n}</div>
                  <h3 className="mt-4 text-3xl font-bold">{p.title}</h3>
                </div>

                <div className={`pl-16 lg:pl-16 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <p className="text-lg text-muted-foreground leading-relaxed">{p.body}</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-2">
                    {p.deliverables.map((d) => (
                      <div key={d} className="rounded-lg border border-border bg-surface/50 px-3 py-2 text-sm text-foreground">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
