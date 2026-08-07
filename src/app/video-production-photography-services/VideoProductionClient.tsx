"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  Video,
  Camera,
  Film,
  Play,
  CheckCircle2,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap,
  Award,
  Rocket,
  Building2,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
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

const services = [
  {
    icon: Video,
    title: "Video Production Services",
    subhead: "High-quality visuals that communicate clearly and perform across platforms.",
    items: [
      "Video production service",
      "Video production agency",
      "Commercial video production services",
      "Corporate and promotional videos",
    ],
  },
  {
    icon: Film,
    title: "Social Media Content Creation",
    subhead: "Content designed for reach, engagement, and consistency.",
    items: [
      "Social media content creation agency",
      "Social media content creation services",
      "Short-form video production",
      "Platform-specific content",
    ],
  },
  {
    icon: Camera,
    title: "Photography Services",
    subhead: "Professional visuals that strengthen your brand identity.",
    items: [
      "Photography services",
      "Creative photography services",
      "Product photography",
      "Corporate shoots",
    ],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics and Animation",
    subhead: "Content that simplifies ideas and enhances engagement.",
    items: [
      "Motion graphics services",
      "Motion graphic design company",
      "Motion graphics animation company",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "1. Strategy and Planning",
    desc: "We align content with your goals, audience, and platforms.",
  },
  {
    step: "02",
    title: "2. Concept and Scripting",
    desc: "We develop creative ideas that capture attention and communicate clearly.",
  },
  {
    step: "03",
    title: "3. Production and Creation",
    desc: "We execute high-quality shoots, edits, and designs.",
  },
  {
    step: "04",
    title: "4. Optimization and Delivery",
    desc: "We ensure content performs across channels and formats.",
  },
];

const whyChooseUsPoints = [
  "Video production agency with a strategic approach",
  "Platform-focused content execution",
  "Scalable production systems",
  "Integrated creative and marketing thinking",
];

const businessImpactPoints = [
  "Higher engagement rates",
  "Better audience retention",
  "Stronger brand perception",
  "Improved conversions",
];

const targetAudienceCards = [
  {
    icon: Rocket,
    title: "Startups & Emerging Brands",
    description: "Launch with high-impact visual identity, promo videos, and brand storytelling built for instant market trust.",
    bullets: ["Brand Launch Videos", "Product Photography", "Explainer Animations"],
  },
  {
    icon: TrendingUp,
    title: "Growing D2C & SaaS Brands",
    description: "Scale ad performance and organic reach with high-converting short-form videos, UGCs, and social campaigns.",
    bullets: ["Short-Form Reels & Shorts", "Performance Video Ads", "Creative Social Content"],
  },
  {
    icon: Building2,
    title: "Enterprises & Scale-Ups",
    description: "Maintain multi-channel brand alignment, corporate documentaries, and scalable high-end commercial production.",
    bullets: ["Corporate Brand Films", "Executive Interviews", "Multi-Market Campaigns"],
  },
];

const faqs = [
  {
    q: "1. What does a video production service include?",
    a: "A video production service covers planning, scripting, shooting, editing, and final delivery of video content. At Korvion Media, we combine creative direction with strategy to produce commercial video production, brand videos, and social content that align with your business goals and drive measurable results.",
  },
  {
    q: "2. How is a video production agency different from freelancers?",
    a: "A video production agency offers structured workflows, creative strategy, and consistent quality across projects. Unlike freelancers, agencies provide end-to-end execution, including concept development, production, editing, and optimization for platforms, ensuring better scalability and performance.",
  },
  {
    q: "3. Do you provide social media content creation services?",
    a: "Yes. We offer social media content creation services designed for engagement and growth. This includes reels, short-form videos, and platform-specific content created to increase reach, audience retention, and conversions.",
  },
  {
    q: "4. What industries do you provide photography services for?",
    a: "We provide photography services for startups, brands, and enterprises across industries such as e-commerce, corporate, hospitality, and personal branding. Our creative photography services are tailored to reflect your brand identity and improve visual communication.",
  },
  {
    q: "5. What types of motion graphics and animation services do you offer?",
    a: "We provide motion graphics services, including explainer animations, brand videos, and visual storytelling content. As a motion graphic design company, we create engaging animations that simplify complex ideas and improve audience understanding.",
  },
  {
    q: "6. How long does content production take?",
    a: "Timelines depend on project scope and complexity. Simple social media content may take a few days, while commercial video production services and larger campaigns may take several weeks, including planning, production, and post-production.",
  },
  {
    q: "7. Can I get video production or photography services separately?",
    a: "Yes. You can choose individual services such as video production service or photography services, or opt for a complete content production solution, depending on your business needs.",
  },
  {
    q: "8. How do I get started with your content production services?",
    a: "You can get started by booking a consultation or calling +91 9480156345. The team at Korvion Media will understand your requirements and recommend the right video production, photography, or content strategy for your business.",
  },
];

export function VideoProductionClient() {
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
            Free Content Consultation
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION (Matches Screenshot 1) */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Radial Geometry Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none z-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="max-w-4xl text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-8"
              >
                <Video className="h-4 w-4" />
                Visual Content & Video Production
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
                Video Production Services and Photography Services{" "}
                <span className="text-gradient-primary">
                  That Drive Results
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Build a More Recognizable Brand With Video Production & Photography Services | Korvion Media
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <MagneticButton strength={0.2}>
                  <RippleButton
                    onClick={openBookACall}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                  >
                    Book a Free Content Consultation
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </RippleButton>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AFTER HERO SECTION (Matches Screenshot 2) */}
        <section className="py-16 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold leading-snug max-w-4xl mx-auto">
              Content is not just about creation. It is about <span className="text-gradient-primary">capturing attention, building trust, and driving action.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Korvion Media, we deliver video production services, photography services, and content strategies that help brands stand out and grow.
            </p>
            <div className="mt-8">
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <span>About Us</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Video Production and Content Services That Drive Growth
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We create content assets designed for engagement, visibility, and conversion.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <TiltCard className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
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
                👉 Book a Free Content Consultation <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CONTENT PRODUCTION PROCESS */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Methodology</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Our Content Production Process</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Great content is not random. It is structured, strategic, and scalable.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="rounded-3xl border border-border bg-background p-8 flex flex-col justify-between hover:border-primary/40 transition-all">
                  <div>
                    <span className="font-mono text-3xl font-bold text-gradient-primary">{s.step}</span>
                    <h3 className="text-xl font-bold mt-4">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Create Content That Converts <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE KORVION MEDIA */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Choose Korvion Media</h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyChooseUsPoints.map((point) => (
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

            <div className="mt-10 text-center">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your Content Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT OF BETTER CONTENT */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Performance</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              Business Impact of Better Content
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessImpactPoints.map((out) => (
                <div key={out} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{out}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom Content Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH (Interactive 3-Card Grid) */}
        <section className="section-isolate py-24 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Target Audience</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Who We Work With</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                We partner with ambitious startups, growing brands, and enterprises scaling visual content systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudienceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <TiltCard
                    key={card.title}
                    className="rounded-3xl border border-border bg-surface/40 p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant group"
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold">{card.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.description}</p>

                      <ul className="mt-6 space-y-2.5">
                        {card.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2.5 text-sm font-medium">
                            <Check className="h-4 w-4 text-primary shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-border/60 pt-5">
                      <button
                        onClick={openBookACall}
                        className="inline-flex items-center gap-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider hover:gap-3 transition-all cursor-pointer"
                      >
                        <span>Discuss Content Needs</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
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
                👉 Let’s Discuss Your Content Needs <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Create Content That <span className="text-gradient-primary">Drives Results</span>
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Book a Free Content Consultation
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
                <p className="mt-1 text-xs text-muted-foreground">Proven creative & video frameworks</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Data-Informed</h3>
                <p className="mt-1 text-xs text-muted-foreground">Platform analytics and conversion focus</p>
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
              Ready to Elevate Your <span className="text-gradient-primary">Visual Brand</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s create something that not only looks great but also performs.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your Content Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
