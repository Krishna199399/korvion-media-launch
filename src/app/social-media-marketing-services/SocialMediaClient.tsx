"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Share2,
  Users,
  MessageSquare,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  AlertCircle,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const wrongApproachPoints = [
  "Posting without a strategy",
  "Chasing trends without relevance",
  "Ignoring audience behavior",
  "Measuring vanity metrics",
];

const differentPillars = [
  {
    icon: Layers,
    title: "We Build Strategy Before Content",
    desc: "Every brand we work with starts with a clear social media marketing strategy and structured planning.",
  },
  {
    icon: Users,
    title: "We Focus on Audience, Not Algorithms",
    desc: "We design content based on how your audience consumes, engages, and responds.",
  },
  {
    icon: Zap,
    title: "We Create Systems, Not Random Posts",
    desc: "From content calendars to engagement loops, everything is structured for consistency.",
  },
];

const services = [
  {
    icon: Share2,
    title: "Strategy and Planning",
    subhead: "We define your direction before execution.",
    items: [
      "Social media marketing strategy",
      "Social media marketing plan",
      "Social media marketing campaign plan",
      "Social media marketing for business growth",
    ],
  },
  {
    icon: Megaphone,
    title: "Management and Execution",
    subhead: "We handle your day-to-day presence.",
    items: [
      "Social media marketing services",
      "Content publishing",
      "Engagement handling",
      "Performance tracking",
    ],
  },
  {
    icon: Users,
    title: "Influencer and UGC Campaigns",
    subhead: "We help your brand reach new audiences.",
    items: [
      "Influencer marketing campaign management",
      "Social media influencer marketing strategy",
      "UGC content strategy",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Community and Growth Systems",
    subhead: "We turn attention into engagement.",
    items: [
      "Community building",
      "Audience interaction systems",
      "Growth frameworks",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Reputation Management",
    subhead: "We manage how your brand is perceived.",
    items: [
      "Online reputation management services",
      "Online business reputation management",
    ],
  },
];

const growthPillars = [
  "Your content is consistent",
  "Your messaging is clear",
  "Your audience trusts you",
  "Your engagement is active",
];

const whyBrandsChooseUs = [
  "Social media marketing agency with a structured approach",
  "Focus on real engagement, not vanity metrics",
  "Strategy-driven execution",
  "Long-term growth mindset",
];

const whatToExpect = [
  "Better audience engagement",
  "Consistent brand presence",
  "Stronger brand perception",
  "Measurable growth over time",
];

const faqs = [
  {
    q: "1. What does a social media marketing agency do?",
    a: "A social media marketing agency helps businesses plan, execute, and optimize their presence across platforms. At Korvion Media, this includes building a structured social media marketing strategy, managing content, running influencer campaigns, and handling reputation management to drive consistent growth and engagement.",
  },
  {
    q: "2. Why is social media marketing important for business growth?",
    a: "Social media marketing helps brands increase visibility, connect with their audience, and build long-term trust. A well-planned social media marketing strategy improves engagement, strengthens brand perception, and supports sustainable business growth over time.",
  },
  {
    q: "3. Do you provide social media marketing services for all industries?",
    a: "Yes. Korvion Media provides social media marketing services for startups, growing brands, and enterprises across industries. We customize strategies based on your business goals, audience behavior, and platform requirements to ensure effective results.",
  },
  {
    q: "4. What is included in social media marketing services?",
    a: "Social media marketing services include strategy development, content planning, posting, audience engagement, and performance tracking. These elements work together to maintain a consistent presence and improve overall engagement and growth.",
  },
  {
    q: "5. How do influencer marketing campaigns work?",
    a: "Influencer marketing campaigns involve collaborating with relevant creators to promote your brand. Korvion Media manages influencer selection, campaign planning, and execution to ensure authentic engagement and measurable reach.",
  },
  {
    q: "6. How do I get started?",
    a: "You can get started by calling +91 9480156345 or booking a consultation. The team at Korvion Media will understand your requirements and help you build a tailored social media marketing strategy for your business.",
  },
];

export function SocialMediaClient() {
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
            Free Social Media Consultation
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
                  <Share2 className="h-4 w-4" />
                  Strategic Social Media & Content Engineering
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Social Media Marketing Services That Make Your Brand Impossible to Ignore
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    You can post every day and still not grow. Growth is not about frequency — it is about direction, positioning, and consistency.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  At Korvion Media, we operate as a social media marketing agency that builds structured systems for visibility, engagement, short-form video creation, and long-term brand authority.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Book a Free Social Consultation
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column Graphic Card */}
              <div className="lg:col-span-5">
                <TiltCard className="rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <Megaphone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Content Growth Hub</h3>
                        <p className="text-xs text-muted-foreground">Multi-Platform Brand Authority</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      High Engagement
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Social Channels:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Short-Form Video / Reels", "LinkedIn Thought Leadership", "Instagram Visual Systems", "YouTube Micro-Content", "Community Management", "Brand Authority"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Audience Growth</p>
                      <p className="text-sm font-bold text-foreground">Consistent Brand Loyalty</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Users className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT MOST BRANDS GET WRONG */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Pitfalls</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                What Most Brands Get Wrong About Social Media
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {wrongApproachPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-mono text-muted-foreground mt-8">
              This is where growth stops.
            </p>
          </div>
        </section>

        {/* WHAT WE DO DIFFERENTLY */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Our Approach</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">What We Do Differently</h2>
              <p className="mt-4 text-lg font-semibold text-gradient-primary">
                We don’t treat social media as content. We treat it as a growth channel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentPillars.map((p) => {
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
                      <h3 className="text-xl font-bold">{p.title}</h3>
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
                👉 Talk to a Social Media Expert <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Our Social Media Marketing Services
              </h2>
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
                👉 Book a Free Social Media Consultation <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* HOW GROWTH ACTUALLY HAPPENS */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Framework</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">How Growth Actually Happens</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
              This is not about one viral post. Growth happens when:
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {growthPillars.map((pillar) => (
                <div key={pillar} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{pillar}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-gradient-primary">
              We build all four together.
            </p>

            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Build a Social Media Strategy That Works <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHY BRANDS WORK WITH KORVION MEDIA */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Brands Work With Korvion Media</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Because they are tired of random posting.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyBrandsChooseUs.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-surface/40 p-6 flex items-start gap-4 hover:border-primary/40 transition-all">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{point}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN EXPECT */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What You Can Expect</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatToExpect.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom Social Media Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Fix Your <span className="text-gradient-primary">Social Media</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your social media is not growing, there is a reason. Let’s find it and fix it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Book a Free Social Media Consultation
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
              Trusted by Growing Brands <span className="text-gradient-primary">Worldwide</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses that want more than just marketing. They want measurable growth.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Proven Frameworks</h3>
                <p className="mt-1 text-xs text-muted-foreground">Proven social growth frameworks</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Data-Informed</h3>
                <p className="mt-1 text-xs text-muted-foreground">Audience research and analytics</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Long-Term Partner</h3>
                <p className="mt-1 text-xs text-muted-foreground">Long-term partnership approach</p>
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
              Ready to Elevate Your <span className="text-gradient-primary">Social Brand</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s create a social media presence that not only gets attention but drives real growth.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Social Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
