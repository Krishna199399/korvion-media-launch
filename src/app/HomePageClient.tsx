"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Star, Play, Search, Megaphone, MonitorPlay, Settings, Database, Network } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { RippleButton } from "@/components/animations/RippleButton";
import { useBookACall } from "@/context/BookACallContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRef } from "react";
import heroOrbPng from "@/assets/hero-orb.jpg.png";
import MagicRings from '@/components/MagicRings';
import { ClientLogosSection } from "@/components/ClientLogosSection";

const heroOrbSrc = typeof heroOrbPng === "string" ? heroOrbPng : heroOrbPng.src;

const problems = [
  "Traffic without conversions",
  "Content without reach",
  "Websites without performance",
  "Leads without follow-up systems",
  "Campaigns without customer retention",
  "Disconnected digital tools",
];

const solutions = [
  "Integrated growth ecosystems",
  "Scalable marketing systems",
  "Search visibility frameworks",
  "Conversion-focused experiences",
  "Automation-driven workflows",
  "Digital infrastructure designed for scale",
];

const ecosystems = [
  {
    title: "SEO & Organic Growth Systems",
    desc: "Search visibility compounds when technical optimization, authority building, content strategy, and user experience work together.",
    links: [
      { label: "Best SEO Services", to: "/best-seo-services" },
      { label: "Advanced SEO & Performance", to: "/advanced-seo-performance-services" },
    ],
    support: "We focus on sustainable visibility, qualified traffic, and measurable organic growth through SEO ecosystems designed for long-term business impact.",
  },
  {
    title: "Brand Visibility & Audience Engagement",
    desc: "Modern audiences connect with brands visually before they engage commercially. We help businesses build stronger brand perception through content, visuals, storytelling, and audience engagement.",
    links: [
      { label: "Branding & Creative", to: "/branding-agency-creative-services" },
      { label: "Content & Production", to: "/video-production-photography-services" },
      { label: "Social Media & Marketing", to: "/social-media-marketing-services" },
    ],
    support: "Every brand interaction should feel consistent, memorable, and strategically connected across platforms.",
  },
  {
    title: "Performance Marketing & Lead Acquisition",
    desc: "Paid growth works best when campaigns, landing experiences, targeting, and conversion systems operate together.",
    links: [
      { label: "Performance Marketing", to: "/performance-marketing-services" },
    ],
    support: "We focus on scalable acquisition systems that improve lead quality, conversion efficiency, and long-term revenue growth.",
  },
];

const infrastructure = [
  {
    title: "Web & Digital Experience",
    desc: "Your website should function as a growth platform, not a static brochure.",
    links: [{ label: "Web & Digital Experience", to: "/website-design-services" }],
    support: "Every experience is designed around usability, conversion, scalability, and customer engagement.",
    icon: MonitorPlay,
  },
  {
    title: "CRM, Automation & Business Systems",
    desc: "Manual workflows reduce efficiency and slow growth.",
    links: [{ label: "CRM, Automation & Tech", to: "/crm-setup-marketing-automation-services" }],
    support: "Connected systems improve visibility, customer journeys, reporting, follow-ups, and operational scalability.",
    icon: Database,
  },
  {
    title: "IT, Product & Engineering",
    desc: "Beyond marketing and automation, businesses also require scalable technology infrastructure. As a product engineering company, Korvion Media helps businesses build systems designed for scale, flexibility, and long-term growth.",
    links: [{ label: "IT, Product & Engineering", to: "/custom-mobile-web-app-development" }],
    support: "From web applications to backend infrastructure and DevOps systems, technology should support growth instead of creating future limitations.",
    icon: Network,
  },
];

const approach = [
  { step: "Discover", text: "Visibility gaps, growth barriers, conversion friction, infrastructure limitations, and audience behavior." },
  { step: "Build", text: "Brand systems, SEO frameworks, content ecosystems, acquisition strategies, websites, automation systems, and scalable infrastructure." },
  { step: "Optimize", text: "Search visibility, conversion performance, customer journeys, workflows, reporting systems, and operational efficiency." },
  { step: "Scale", text: "Authority growth, automation maturity, scalable architecture, analytics systems, and long term business expansion." },
];

const faqs = [
  {
    q: "What does Korvion Media do?",
    a: "Korvion Media is a digital growth company that helps businesses improve visibility, acquisition, engagement, automation, and digital infrastructure through connected marketing and technology systems.",
  },
  {
    q: "How is Korvion Media different from a regular digital marketing company?",
    a: "Most digital marketing companies focus on isolated services such as SEO or paid advertising. Korvion Media combines branding, performance marketing, automation, websites, and product engineering into scalable digital growth ecosystems.",
  },
  {
    q: "Does Korvion Media provide both marketing and technology services?",
    a: "Yes. Korvion Media combines SEO, branding, automation, CRM systems, web experiences, performance marketing, and product engineering capabilities under one connected ecosystem.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. Although Korvion Media operates from India, we work with businesses globally through remote collaboration, scalable systems, and integrated growth strategies.",
  },
  {
    q: "What industries does Korvion Media work with?",
    a: "Korvion Media works with startups, growing businesses, ecommerce brands, SaaS companies, healthcare organizations, and enterprises looking to improve digital growth and operational scalability.",
  },
  {
    q: "How do I get started?",
    a: "You can call +91 9480156345 or schedule a consultation. The team at Korvion Media will understand your business goals and recommend the right digital growth strategy.",
  },
];

function InteractiveFlow3DComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const z = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const nodes = [
    "SEO", "Content", "Social Media", "Paid Campaigns", 
    "Landing Pages", "CRM", "Automation", "Analytics", "Product Infrastructure"
  ];

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full flex items-center justify-center perspective-[1500px] overflow-hidden">
      <motion.div 
        style={{ rotateX, rotateY, z }}
        className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center transform-style-3d gap-6"
      >
        {nodes.map((node, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={node}
              initial={{ opacity: 0, x: isLeft ? -50 : 50, translateZ: -100 }}
              whileInView={{ opacity: 1, x: 0, translateZ: i * 20 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative z-10 p-5 rounded-2xl backdrop-blur-md bg-surface/80 border border-primary/20 shadow-glow-sm flex items-center gap-4 w-[280px] sm:w-[350px] ${isLeft ? 'self-start ml-[10%]' : 'self-end mr-[10%]'}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                {i + 1}
              </div>
              <span className="font-semibold text-lg">{node}</span>
              {i < nodes.length - 1 && (
                <div className={`absolute top-full h-12 w-0.5 bg-gradient-to-b from-primary to-transparent ${isLeft ? 'left-10' : 'left-10'}`} />
              )}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background z-20" />
    </div>
  );
}

export function HomePageClient() {
  const { openBookACall } = useBookACall();

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
          <button
            onClick={openBookACall}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all animate-pulse-glow cursor-pointer"
          >
            Get Free Growth Consultation
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden perspective-[1000px]">
          <div className="absolute inset-0 bg-hero-glow opacity-40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* 3D Background Elements */}
          <motion.div 
            animate={{ 
              rotateZ: [0, 360],
              rotateX: [20, 40, 20],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-primary/10 rounded-full transform-style-3d opacity-50"
          >
            <div className="absolute inset-20 border border-primary/20 rounded-full" />
            <div className="absolute inset-40 border border-primary/30 rounded-full border-dashed" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 0.4, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeOut" },
              scale: { duration: 1.5, ease: "easeOut" },
              rotate: { duration: 50, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
          >
            <img src={heroOrbSrc} alt="Hero Orb" className="w-full h-full object-contain mix-blend-multiply" />
          </motion.div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="max-w-5xl text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-8"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
                Integrated Digital Growth Ecosystems for Modern Businesses
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
                <SplitText splitBy="words" stagger={0.04}>
                  A Digital Growth Company Building Connected Marketing & Technology Systems
                </SplitText>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Korvion Media combines SEO, branding, performance marketing, websites, automation, and product engineering into scalable digital growth ecosystems that drive sustainable business revenue.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <MagneticButton as="div" strength={0.2}>
                  <RippleButton
                    onClick={openBookACall}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                  >
                    Get Free Growth Consultation
                    <ArrowUpRight className="h-5 w-5" />
                  </RippleButton>
                </MagneticButton>
                
                <MagneticButton as="div" strength={0.15}>
                  <RippleButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur-md px-8 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
                    <Link href="/services/" className="flex items-center gap-2">
                      Explore Growth Services
                    </Link>
                  </RippleButton>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS SECTION */}
        <ClientLogosSection />

        {/* 3D INTERACTIVE FLOW SHOWCASE */}
        <section className="py-20 relative bg-surface/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-12">
            <FadeInSection>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">Connected Architecture</p>
              <h2 className="text-3xl sm:text-5xl font-bold">The Connected <span className="text-gradient-primary">Growth Engine</span></h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Scroll to see how every layer of your business technology and marketing interacts seamlessly in 3D space.
              </p>
            </FadeInSection>
          </div>
          <InteractiveFlow3DComponent />
        </section>

        {/* PROBLEM / SOLUTION COMPARISON */}
        <section className="py-24 relative bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="The Paradigm Shift"
              title="Why Isolated Digital Marketing Effort Fails Growing Businesses"
              description="Most digital marketing companies sell isolated tactics: an SEO campaign here, a paid ad campaign there, or a standalone website build. Without connection, growth stalls."
            />

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <FadeInSection direction="left">
                <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-8 sm:p-10 h-full">
                  <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-sm">✕</span>
                    Disconnected Marketing Activities
                  </h3>
                  <ul className="space-y-4">
                    {problems.map((prob, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              <FadeInSection direction="right">
                <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 sm:p-10 h-full shadow-glow-sm">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground text-sm">✓</span>
                    The Korvion Media Ecosystem Approach
                  </h3>
                  <ul className="space-y-4">
                    {solutions.map((sol, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ECOSYSTEMS OVERVIEW */}
        <section className="py-24 relative bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Ecosystem Architecture"
              title="Integrated Digital Ecosystems for Sustainable Scale"
              description="We build growth systems that connect visibility, brand positioning, audience engagement, customer acquisition, and technology infrastructure."
            />

            <div className="mt-16 grid lg:grid-cols-3 gap-8">
              {ecosystems.map((eco, i) => (
                <FadeInSection key={i} delay={i * 0.15}>
                  <TiltCard className="rounded-3xl border border-border bg-background p-8 h-full flex flex-col justify-between hover:border-primary/50 transition-all shadow-elegant">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground font-bold text-xl mb-6 shadow-glow-sm">
                        0{i + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{eco.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{eco.desc}</p>
                      
                      <div className="space-y-2 mb-6">
                        {eco.links.map((link, j) => (
                          <Link key={j} href={link.to} className="flex items-center justify-between p-3 rounded-xl bg-surface/60 hover:bg-primary/10 text-sm font-semibold transition-colors group">
                            <span>{link.label}</span>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground/80 italic border-t border-border pt-4">
                      {eco.support}
                    </p>
                  </TiltCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE & ENGINEERING */}
        <section className="py-24 relative bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Technical Foundation"
              title="Digital Infrastructure & Product Engineering"
              description="A growth system requires reliable digital architecture. We build web experiences, automation workflows, and software infrastructure engineered for scale."
            />

            <div className="mt-16 grid lg:grid-cols-3 gap-8">
              {infrastructure.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeInSection key={i} delay={i * 0.15}>
                    <div className="rounded-3xl border border-border bg-surface/30 p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface border border-border text-primary mb-6">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{item.desc}</p>
                        
                        <div className="space-y-2 mb-6">
                          {item.links.map((link, j) => (
                            <Link key={j} href={link.to} className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group">
                              {link.label} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground/80 border-t border-border/60 pt-4">
                        {item.support}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* GEOGRAPHIC & REGIONAL GROWTH HUBS */}
        <section className="py-20 relative bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <FadeInSection className="lg:col-span-6" direction="left">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Regional Growth Studios</p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Digital Marketing & Growth Studios in <span className="text-gradient-primary">Karnataka</span>
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Korvion Media operates regional digital growth hubs supporting businesses across Karnataka and globally. From search engine optimization and branding to software development and automated marketing systems.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="p-5 rounded-2xl border border-border bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg">Belagavi Studio</h4>
                      <p className="text-xs text-muted-foreground">Digital Marketing & SEO Services in Belagavi</p>
                    </div>
                    <Link href="/digital-marketing-company-in-belagavi/" className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all group">
                      Belagavi Hub <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="p-5 rounded-2xl border border-border bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg">Bengaluru Studio</h4>
                      <p className="text-xs text-muted-foreground">Digital Marketing Company in Bangalore</p>
                    </div>
                    <Link href="/digital-marketing-company-in-bangalore/" className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all group">
                      Bengaluru Hub <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection className="lg:col-span-6" direction="right">
                <div className="p-8 sm:p-10 rounded-3xl border border-border bg-background shadow-elegant">
                  <h3 className="text-2xl font-bold mb-6">Our 4-Step Growth Approach</h3>
                  <div className="space-y-6">
                    {approach.map((app, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold text-xs">
                          0{i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-base">{app.step}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1">{app.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ADDITIONAL SPECIALIZED SOLUTIONS */}
        <section className="py-20 relative bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Additional Solutions for Specialized Digital Experiences</h3>
                <p className="text-xl text-muted-foreground">Designed for businesses and organizations that require scalable learning, training, and engagement ecosystems.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {["E Learning & Animation", "LMS Content Production", "Interactive Learning Experiences", "Animated Training Systems"].map((sol, i) => (
                    <div key={i} className="p-4 rounded-xl border border-border bg-surface/50 flex items-center gap-3">
                      <Play className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-sm">{sol}</span>
                    </div>
                  ))}
                </div>
                <Link href="/e-learning-content-development/" className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all group">
                  Explore Learning Solutions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <CTASection 
          title={<>Build a Smarter Digital <span className="text-gradient-primary">Growth Ecosystem</span></>}
          subtitle="The businesses growing fastest today are not relying on disconnected marketing activities. They are building systems where visibility, branding, conversion, automation, customer experience, and technology work together to support long-term growth. Build yours with Korvion Media."
          primaryBtn="Get Free Growth Consultation"
        />

        {/* FAQ SECTION */}
        <section className="section-isolate py-32 bg-background border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <FadeInSection className="text-center mb-16">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Frequently Asked <span className="text-gradient-primary">Questions</span>
              </h2>
            </FadeInSection>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-surface/50 px-8 overflow-hidden hover:border-primary/40 transition-all data-[state=open]:border-primary/60 data-[state=open]:shadow-glow-sm"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <span className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}
