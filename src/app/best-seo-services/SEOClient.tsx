"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Search,
  Target,
  MapPin,
  ShoppingCart,
  Link as LinkIcon,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Layers,
  Zap,
  Globe,
  Compass,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const struggles = [
  "declining rankings",
  "poor organic visibility",
  "low quality traffic",
  "weak local presence",
  "technical SEO issues",
  "content that never ranks",
];

const services = [
  {
    icon: Search,
    title: "Technical SEO Services",
    subhead: "Search engines cannot rank what they cannot properly crawl and understand.",
    items: [
      "Technical SEO services",
      "Website structure optimization",
      "Core Web Vitals improvements",
      "Crawlability and indexing fixes",
      "SEO website audit service",
    ],
    outcome: "We fix the technical issues that hold rankings back.",
  },
  {
    icon: Target,
    title: "Keyword Research and Content Optimization",
    subhead: "Good SEO starts with understanding search intent.",
    items: [
      "SEO keyword research service",
      "On-page optimization",
      "Content structure improvements",
      "Search intent mapping",
    ],
    outcome: "We build content strategies aligned with how people actually search.",
  },
  {
    icon: MapPin,
    title: "Local SEO and Google Business Optimization",
    subhead: "Visibility matters most when customers are searching nearby.",
    items: [
      "Local SEO services",
      "Google My Business management service",
      "Google My Business optimization service",
      "Local search visibility improvements",
    ],
    outcome: "We help businesses improve local rankings, trust, and discovery.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO Services",
    subhead: "Product visibility directly impacts revenue.",
    items: [
      "Best e-commerce SEO services",
      "Shopify SEO optimization",
      "WooCommerce SEO improvements",
      "Product and category optimization",
    ],
    outcome: "We improve organic visibility across e-commerce search journeys.",
  },
  {
    icon: LinkIcon,
    title: "Link Building and Authority Growth",
    subhead: "Search engines trust websites with strong authority signals.",
    items: [
      "Best SEO link-building services",
      "Authority-building strategies",
      "High-quality backlink acquisition",
      "Topical relevance strengthening",
    ],
    outcome: "We focus on sustainable authority growth, not spam tactics.",
  },
  {
    icon: BarChart3,
    title: "Analytics and SEO Reporting",
    subhead: "SEO without data is guesswork.",
    items: [
      "Google Analytics setup services",
      "SEO reporting services",
      "Performance tracking dashboards",
      "Search visibility reporting",
    ],
    outcome: "We measure what actually impacts growth.",
  },
];

const realSEOImproves = [
  "visibility",
  "authority",
  "trust",
  "user experience",
  "conversions",
];

const campaignPrinciples = [
  {
    icon: Compass,
    title: "Search Intent Matters More Than Keywords",
    desc: "Ranking means nothing if traffic does not convert.",
  },
  {
    icon: Search,
    title: "Technical SEO Impacts Everything",
    desc: "A technically weak website limits growth potential.",
  },
  {
    icon: ShieldCheck,
    title: "Authority Drives Competitive Rankings",
    desc: "Google rewards trusted websites with stronger visibility.",
  },
  {
    icon: TrendingUp,
    title: "SEO is a long-term growth system",
    desc: "The businesses that win search build consistency over time.",
  },
];

const focusAreas = [
  "qualified organic visibility",
  "local search growth",
  "search-driven lead generation",
  "ecommerce performance",
  "measurable SEO outcomes",
];

const whyBusinessesChooseUs = [
  "Strategy-driven SEO services",
  "Strong technical SEO expertise",
  "Search intent-focused content optimization",
  "Sustainable authority growth approach",
  "Transparent reporting and performance tracking",
];

const whatToExpect = [
  "Improved keyword rankings",
  "Better local visibility",
  "Higher quality organic traffic",
  "Stronger website authority",
  "Better long-term search performance",
];

const faqs = [
  {
    q: "What are SEO services?",
    a: "SEO services involve optimizing websites to improve visibility, rankings, and organic traffic from search engines. At Korvion Media, SEO services include technical SEO, keyword research, content optimization, local SEO, e-commerce SEO, and authority-building strategies.",
  },
  {
    q: "Why are technical SEO services important?",
    a: "Technical SEO services help search engines crawl, index, and understand your website properly. Technical issues such as slow performance, indexing problems, and poor structure can negatively impact rankings and user experience.",
  },
  {
    q: "What is included in local SEO services?",
    a: "Local SEO services focus on improving visibility in location-based searches through Google Business Profile optimization, local keyword targeting, reputation signals, and local search optimization strategies.",
  },
  {
    q: "Do you provide e-commerce SEO services?",
    a: "Yes. Korvion Media provides e-commerce SEO services for platforms such as Shopify and WooCommerce. This includes product optimization, category structure improvements, technical SEO, and search visibility enhancement.",
  },
  {
    q: "Why is keyword research important in SEO?",
    a: "Keyword research helps identify how users search for products, services, and information online. A strong keyword strategy improves content relevance, ranking opportunities, and organic traffic quality.",
  },
  {
    q: "How do I get started?",
    a: "You can call +91 9480156345 or book a consultation. The team at Korvion Media will analyze your website and recommend the right SEO growth strategy.",
  },
];

export function SEOClient() {
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
            Get Free SEO Audit
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION (2-Column Visual Layout) */}
        <section className="section-isolate relative pt-36 pb-24 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Radial Geometry Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none z-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-6"
                >
                  <Search className="h-4 w-4" />
                  Search Engine Optimization & Authority Systems
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  SEO Services That Help Your Business Rank, Grow, and Stay Ahead
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Ranking on Google is no longer just about visibility. It is about credibility, traffic, leads, and long-term business growth.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we provide SEO services designed to improve how your business appears, performs, and grows across search engines — from technical SEO and local search maps to e-commerce optimization and authority building.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Talk to an SEO Growth Expert
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>

                  <button
                    onClick={openBookACall}
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 backdrop-blur-md px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all shadow-sm cursor-pointer"
                  >
                    Get Free SEO Audit <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column Graphic Card */}
              <div className="lg:col-span-5">
                <TiltCard className="rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Search Authority Engine</h3>
                        <p className="text-xs text-muted-foreground">Organic Growth Ecosystem</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Page 1 Dominance
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Organic Systems:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Google Maps Pack", "Technical Architecture", "Keyword Mapping", "Content Authority", "E-Commerce SEO", "Backlink Growth"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Organic Trajectory</p>
                      <p className="text-sm font-bold text-foreground">Sustainable Search Leads</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* MOST BUSINESSES DO SEO WITHOUT A REAL STRATEGY */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">SEO Struggles</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Most Businesses Do SEO Without a Real Strategy
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Publishing blogs and adding keywords is not enough anymore. Businesses struggle with:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {struggles.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base capitalize">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-gradient-primary mt-8">
              SEO fails when there is no long term strategy behind it.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                SEO and Growth Services Built for Long-Term Results
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                We combine technical optimization, content strategy, authority building, and performance tracking to create sustainable organic growth.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <TiltCard className="rounded-3xl border border-border bg-surface/40 p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
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

                      <div className="mt-8 border-t border-border/60 pt-4">
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
                👉 Build Long-Term Organic Growth <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* WHY MOST SEO CAMPAIGNS STOP WORKING */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">SEO Realities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Most SEO Campaigns Stop Working</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Many SEO campaigns focus only on rankings. But rankings alone do not grow businesses. Real SEO should improve:
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {realSEOImproves.map((item) => (
                  <span key={item} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary capitalize">
                    ✓ {item}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs font-mono text-muted-foreground">Without this, rankings become temporary.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {campaignPrinciples.map((p) => {
                const Icon = p.icon;
                return (
                  <TiltCard
                    key={p.title}
                    className="rounded-3xl border border-border bg-background p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            <div className="mt-14 text-center">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Create an SEO Strategy That Lasts <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* SEO DESIGNED AROUND BUSINESS GROWTH, NOT VANITY METRICS */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Focus</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              SEO Designed Around Business Growth, Not Vanity Metrics
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
              We do not chase random traffic. We focus on:
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {focusAreas.map((fa) => (
                <div key={fa} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 flex items-center gap-3 shadow-glow-sm hover:border-primary/40 transition-all text-left">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="font-bold text-base capitalize">{fa}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-gradient-primary">
              Because growth matters more than impressions.
            </p>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE KORVION MEDIA */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Businesses Choose Korvion Media</h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyBusinessesChooseUs.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-background p-6 flex items-start gap-4 hover:border-primary/40 transition-all">
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
                We do not treat SEO as a checklist. We build search visibility designed for long-term business growth.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your SEO Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN EXPECT */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What You Can Expect</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {whatToExpect.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-surface/40 p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-muted-foreground">
              SEO done right compounds over time.
            </p>

            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom SEO Growth Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Build Search Visibility <span className="text-gradient-primary">That Lasts</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your website is not generating consistent organic visibility or qualified traffic, it is time to rethink your SEO strategy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Get Free SEO Audit
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
              Trusted by Businesses Focused on <span className="text-gradient-primary">Long-Term Growth</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses that want sustainable visibility, measurable traffic growth, and stronger search performance.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Technical Expertise</h3>
                <p className="mt-1 text-xs text-muted-foreground">Technical SEO expertise</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Search Intent Driven</h3>
                <p className="mt-1 text-xs text-muted-foreground">Search intent-driven strategies</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Long-Term Growth</h3>
                <p className="mt-1 text-xs text-muted-foreground">Long-term organic growth focus</p>
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
              Ready to Grow <span className="text-gradient-primary">Through Search</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s build an SEO strategy that improves visibility, authority, and long-term business growth.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your SEO Growth Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
