import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Star, Quote } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AnimatedOrb } from "@/components/animations/AnimatedOrb";
import { SplitText } from "@/components/animations/SplitText";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { TiltCard } from "@/components/animations/TiltCard";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { HorizontalScroll } from "@/components/animations/HorizontalScroll";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { RippleButton } from "@/components/animations/RippleButton";
import { HorizontalScrollSection } from "@/components/animations/HorizontalScrollSection";
import { services } from "@/lib/services-data";
import heroOrb from "@/assets/hero-orb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Korvion Media — We Build Brands That Print Revenue" },
      {
        name: "description",
        content:
          "Korvion Media is a full-stack growth partner. Branding, performance marketing, content, web & automation — engineered into revenue systems that scale.",
      },
      { property: "og:title", content: "Korvion Media — Revenue Systems for Modern Brands" },
      { property: "og:description", content: "We don't just build brands. We build revenue systems." },
      { property: "og:image", content: heroOrb },
      { name: "twitter:image", content: heroOrb },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "₹10Cr+", label: "Revenue generated for clients" },
  { value: "120+", label: "Brands scaled across 14 industries" },
  { value: "4.8x", label: "Average ROAS on managed ad spend" },
  { value: "92%", label: "Retention after first 90 days" },
];

const logos = ["NORDIQ", "VAULTHAUS", "PEAK&CO", "OPULENT", "RUNWAYX", "ATELIER 09", "MONOMER", "STRATA"];

const testimonials = [
  {
    quote:
      "Korvion didn't sell us marketing — they architected a revenue system. In 6 months, we 3.2x'd MRR with the same ad budget.",
    name: "Aarav Mehta",
    role: "Founder, NordIQ Wellness",
  },
  {
    quote:
      "The most strategic, ROI-obsessed agency we've worked with. They think like operators, not vendors.",
    name: "Sara Khalid",
    role: "CMO, Vaulthaus",
  },
  {
    quote:
      "From brand identity to automation — one team, zero friction. Our cost per lead dropped 61% in the first quarter.",
    name: "Rohan Iyer",
    role: "CEO, Strata Performance",
  },
];

const cases = [
  {
    tag: "D2C · Wellness",
    title: "From cluttered brand to category leader",
    metric: "+312% Revenue · 90 days",
    problem: "Premium product, generic positioning, sub-1.4x ROAS.",
    solution: "Repositioned the brand, rebuilt the funnel, launched a creator-led content engine.",
  },
  {
    tag: "SaaS · B2B",
    title: "Predictable pipeline, on autopilot",
    metric: "−61% CPL · 8x SQL volume",
    problem: "Cold outbound was burning out. Inbound was nonexistent.",
    solution: "Designed an LinkedIn + content + automation stack feeding their CRM 24/7.",
  },
  {
    tag: "Coach · Education",
    title: "Personal brand to ₹2Cr launch",
    metric: "₹2.1Cr in 21 days",
    problem: "Strong expertise. Zero distribution. No launch system.",
    solution: "Built the brand narrative, content runway, ad funnel and webinar engine end-to-end.",
  },
];

const why = [
  { title: "Data over opinions", body: "Every decision tied to CAC, LTV, ROAS or pipeline — not feelings." },
  { title: "Full-stack execution", body: "One integrated team. Strategy, creative, media, tech, automation. No freelancers." },
  { title: "Automation-first", body: "We don't scale headcount, we scale systems. Your growth shouldn't depend on luck." },
  { title: "ROI, not vanity", body: "We optimize for revenue and retention — not impressions, likes or awards." },
];

const steps = [
  { n: "01", title: "Audit & Discovery", body: "Deep-dive into your brand, funnel, data, tech stack and competitors. We surface the gaps before we touch a thing." },
  { n: "02", title: "Strategy & Planning", body: "A custom growth blueprint with positioning, channels, KPIs and a 90-day roadmap your team can actually execute." },
  { n: "03", title: "Execution & Scaling", body: "Our pods build and ship — brand, content, ads, web, automation — in tight weekly sprints with full transparency." },
  { n: "04", title: "Optimization & Growth", body: "Continuous testing, weekly reviews, and compounding improvements. Systems that get sharper every month." },
];

function HomePage() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />

        {/* HERO */}
        <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
          {/* Background overlays */}
          <div className="absolute inset-0 bg-hero-glow opacity-30" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Full-Stack Growth Partner
              </motion.div>

              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  We Build Brands That Print Revenue.
                </SplitText>
              </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Korvion Media is the growth partner behind ambitious founders, D2C disruptors and scaling
              brands. We engineer branding, content, marketing, web and automation into one system —
              built for compounding revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                as="div"
                strength={0.2}
              >
                <RippleButton className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all">
                  <Link to="/contact" className="flex items-center gap-2">
                    Book a Strategy Call
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </RippleButton>
              </MagneticButton>
              <MagneticButton
                as="div"
                strength={0.15}
              >
                <RippleButton className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-7 py-4 text-base font-semibold hover:border-primary hover:text-primary transition-all">
                  <Link to="/work" className="flex items-center gap-2">
                    View Case Studies
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </RippleButton>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span>4.9/5 from 80+ founders & operators</span>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background p-6 lg:p-8"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary">
                  <CounterAnimation value={s.value} duration={2.5} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS MARQUEE */}
      <section className="section-isolate py-12 border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono mb-8">
            Trusted by ambitious teams worldwide
          </p>
          <HorizontalScroll speed={1.5} className="py-4">
            <div className="flex gap-16 items-center">
              {[...logos, ...logos].map((l, i) => (
                <span key={`${l}-${i}`} className="font-display font-bold text-xl text-muted-foreground/70 tracking-widest hover:text-foreground transition-colors whitespace-nowrap">
                  {l}
                </span>
              ))}
            </div>
          </HorizontalScroll>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-isolate py-32 bg-background">
        <ParallaxSection speed={0.3} className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <FadeInSection className="lg:col-span-5" direction="left">
            <SectionHeader
              eyebrow="About Korvion"
              title={
                <>
                  Built by operators.<br />
                  <span className="text-gradient-primary">Engineered for revenue.</span>
                </>
              }
            />
          </FadeInSection>
          <FadeInSection className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed" delay={0.2} direction="right">
            <p>
              Korvion Media isn't a "marketing agency." We're the in-house growth team for founders who
              refuse to play small. We combine brand strategists, performance marketers, full-stack
              engineers and automation experts under one roof — operating as one pod per client.
            </p>
            <p>
              While most agencies sell deliverables, we sell <span className="text-foreground font-semibold">outcomes</span>.
              Pipeline. ROAS. Retention. Revenue. Every tactic is engineered backwards from your
              business model.
            </p>
            <StaggerChildren className="grid sm:grid-cols-2 gap-4 pt-4" staggerDelay={0.08}>
              {[
                "Operator mindset, not vendor mindset",
                "Strategy → execution under one roof",
                "Marketing × Engineering × AI",
                "Senior talent on every account",
              ].map((p) => (
                <StaggerChild key={p} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground">{p}</span>
                </StaggerChild>
              ))}
            </StaggerChildren>
          </FadeInSection>
        </ParallaxSection>
      </section>

      {/* SERVICES - HORIZONTAL SCROLL */}
      <HorizontalScrollSection />

      {/* PROOF / CASE STUDIES */}
      <section className="section-isolate py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeInSection>
            <SectionHeader
              eyebrow="Proof, Not Promises"
              title={
                <>
                  Receipts from the <span className="text-gradient-primary">front line.</span>
                </>
              }
              subtitle="A few of the systems we've built and the numbers they moved. Names changed, results real."
            />
          </FadeInSection>

          <StaggerChildren className="mt-14 grid lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {cases.map((c, i) => (
              <StaggerChild key={c.title}>
                <TiltCard tiltAmount={8} className="group relative rounded-2xl border border-border bg-surface/50 p-7 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{c.tag}</span>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{c.title}</h3>
                  <div className="mt-5 text-2xl font-bold text-gradient-primary">{c.metric}</div>
                  <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-semibold">Problem · </span>{c.problem}</p>
                    <p><span className="text-foreground font-semibold">Solution · </span>{c.solution}</p>
                  </div>
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerChildren>

          {/* Testimonials */}
          <StaggerChildren className="mt-20 grid lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {testimonials.map((t, i) => (
              <StaggerChild key={t.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl border border-border bg-background p-7 h-full"
                >
                  <Quote className="h-7 w-7 text-primary/50 mb-4" />
                  <p className="text-foreground leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t border-border">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-isolate py-32 bg-surface border-y border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <FadeInSection>
            <SectionHeader
              eyebrow="How It Works"
              title={
                <>
                  A process built for <span className="text-gradient-primary">compounding wins.</span>
                </>
              }
              subtitle="No vague decks. No mystery deliverables. Four phases, run on a tight cadence, with full transparency from day one."
            />
          </FadeInSection>

          <StaggerChildren className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {steps.map((s, i) => (
              <StaggerChild key={s.n}>
                <TiltCard tiltAmount={6} className="relative rounded-2xl border border-border bg-background p-7 hover:border-primary/40 transition-all h-full">
                  <div className="text-5xl font-display font-bold text-gradient-primary mb-4">{s.n}</div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* WHY KORVION */}
      <section className="section-isolate py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <FadeInSection className="lg:col-span-5" direction="left">
            <SectionHeader
              eyebrow="Why Korvion"
              title={
                <>
                  Most agencies sell hours.<br />
                  <span className="text-gradient-primary">We sell outcomes.</span>
                </>
              }
              subtitle="Here's what changes the moment you stop hiring vendors and start working with operators."
            />
          </FadeInSection>
          <StaggerChildren className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden" staggerDelay={0.08}>
            {why.map((w, i) => (
              <StaggerChild key={w.title} className="bg-background p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-sm mb-5">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.body}</p>
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
