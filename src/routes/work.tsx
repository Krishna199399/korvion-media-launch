import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies — Korvion Media | Real Brands. Real Numbers." },
      {
        name: "description",
        content:
          "See how Korvion Media engineered revenue systems for D2C, SaaS, coaching and enterprise brands. Problem → Solution → Result.",
      },
      { property: "og:title", content: "Korvion Case Studies — Receipts From The Front Line" },
      { property: "og:description", content: "Brand stories with hard numbers attached." },
    ],
  }),
  component: WorkPage,
});

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

function WorkPage() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        
        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 left-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
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
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-isolate pb-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <StaggerChildren className="space-y-8" staggerDelay={0.15}>
              {studies.map((s, i) => (
                <StaggerChild key={s.brand}>
                  <TiltCard
                    tiltAmount={3}
                    className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 lg:p-12 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                  >
                    <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                    
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

                        {/* Metrics */}
                        <StaggerChildren className="mt-8 grid grid-cols-3 gap-4" staggerDelay={0.1}>
                          {s.metrics.map((m) => (
                            <StaggerChild key={m.l}>
                              <motion.div
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="rounded-xl border border-border bg-background p-4"
                              >
                                <div className="text-xl lg:text-2xl font-bold text-gradient-primary">
                                  <CounterAnimation value={m.v} duration={2} />
                                </div>
                                <div className="mt-1 text-[11px] text-muted-foreground leading-tight">{m.l}</div>
                              </motion.div>
                            </StaggerChild>
                          ))}
                        </StaggerChildren>
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
        <Footer />
      </div>
    </SmoothScroll>
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
