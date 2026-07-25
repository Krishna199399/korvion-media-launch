"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Building2,
  Store,
  Phone,
  Search,
  Sparkles,
  Megaphone,
  Globe2,
  Workflow,
  Settings2,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
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

const locationsList = [
  {
    icon: Building2,
    city: "Bangalore (Bengaluru)",
    hubName: "Bangalore Studio & Digital Growth Hub",
    tagline: "India's Tech Capital & Startup Ecosystem Hub",
    description:
      "Serving tech startups, SaaS platforms, D2C e-commerce brands, healthcare networks, and enterprise teams across Koramangala, Indiranagar, Whitefield, HSR Layout, and Electronic City.",
    href: "/digital-marketing-company-in-bangalore",
    highlights: [
      "SaaS & Tech Product Engineering",
      "High-Intent Performance Ads",
      "Advanced SEO & CRO Systems",
      "Automated CRM Lead Pipelines",
    ],
    audience: "Startups, SaaS, E-commerce, Enterprises",
    badge: "Tech & Scale Hub",
  },
  {
    icon: Store,
    city: "Belagavi (Belgaum)",
    hubName: "Belagavi Studio & Regional Growth Hub",
    tagline: "Regional Growth & Industrial Commerce Studio",
    description:
      "Supporting local enterprises, manufacturers, healthcare institutions, educational academies, startups, and growing regional businesses across Belagavi and Belgaum.",
    href: "/digital-marketing-company-in-belagavi",
    highlights: [
      "Local & Regional SEO Systems",
      "Brand Positioning & Visual Identity",
      "Lead Capture & WhatsApp Automation",
      "Digital Presence Modernization",
    ],
    audience: "Regional Businesses, Health, Education, Manufacturing",
    badge: "Regional Growth Hub",
  },
];

const sharedCapabilities = [
  {
    icon: Search,
    title: "Search & Visibility",
    desc: "Technical SEO, local search dominance, Google Business optimization, and search intent mapping.",
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    desc: "Brand strategy, visual identity design, video production, and multi-channel engagement.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    desc: "High-ROI paid campaigns (Google & Meta Ads), conversion funnels, and landing page optimization.",
  },
  {
    icon: Workflow,
    title: "CRM & Automation",
    desc: "Lead capture workflows, WhatsApp/Email automation, and pipeline tracking.",
  },
];

const faqs = [
  {
    q: "Where are Korvion Media's growth studios located?",
    a: "Korvion Media operates regional digital growth studios in Bangalore and Belagavi, serving clients locally across Karnataka, pan-India, and internationally.",
  },
  {
    q: "Can I work with Korvion Media if my business is located outside Bangalore or Belagavi?",
    a: "Yes! While Bangalore and Belagavi are our primary studio hubs, we manage digital growth systems, software engineering, and performance campaigns for clients across India and global markets remotely.",
  },
  {
    q: "How do I choose between your Bangalore and Belagavi studio offerings?",
    a: "Both studios provide our full 6-layer growth ecosystem (SEO, Branding, Performance Marketing, Web Design, Automation, and App Engineering). You can select the studio closest to your headquarters or explore both location pages to see specialized regional insights.",
  },
  {
    q: "How do I schedule a consultation with your regional strategy team?",
    a: "You can click 'Book a Call', call +91 9480156345, or visit either location page (/digital-marketing-company-in-bangalore or /digital-marketing-company-in-belagavi) to discuss your business goals.",
  },
];

export function LocationsClient() {
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
            Talk to Regional Strategy Team
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION */}
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
                <MapPin className="h-4 w-4" />
                Bangalore & Belagavi Growth Studios
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
                Regional Digital Growth Studios &{" "}
                <span className="text-gradient-primary">
                  Technology Hubs
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Connecting businesses across Bangalore, Belagavi, Karnataka, and beyond with scalable digital growth systems — combining SEO, branding, performance marketing, website design, automation, and custom product engineering.
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
                    👉 Schedule Regional Strategy Call
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </RippleButton>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LOCATIONS SHOWCASE GRID */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Our Studios</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Explore Our Regional Growth Studios
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Select a studio hub to view specialized local growth insights and ecosystem solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {locationsList.map((loc) => {
                const Icon = loc.icon;
                return (
                  <TiltCard
                    key={loc.city}
                    className="rounded-3xl border border-border bg-background p-8 lg:p-10 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-bold text-primary">
                          {loc.badge}
                        </span>
                      </div>

                      <p className="font-mono text-xs text-primary uppercase tracking-widest font-bold">{loc.city}</p>
                      <h3 className="text-2xl sm:text-3xl font-bold mt-1 group-hover:text-primary transition-colors">{loc.hubName}</h3>
                      <p className="text-sm font-semibold text-gradient-primary mt-2">{loc.tagline}</p>
                      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{loc.description}</p>

                      <div className="mt-6 pt-6 border-t border-border/60">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Core Location Capabilities:</p>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {loc.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs font-semibold">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">{loc.audience}</span>
                      <Link
                        href={loc.href}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                      >
                        Explore {loc.city.split(" ")[0]} Hub <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* SHARED CAPABILITIES */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Unified System</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Full-Stack Growth Architecture Across Every Location
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Regardless of location, every business gets access to our complete connected growth engine.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sharedCapabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="rounded-3xl border border-border bg-surface/40 p-8 flex flex-col justify-between hover:border-primary/40 transition-all shadow-glow-sm">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{cap.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Ready to Connect With Our <span className="text-gradient-primary">Regional Team</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discuss your growth goals, visibility requirements, and technology setup with our senior strategy team in Bangalore or Belagavi.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Book a Regional Consultation
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
      </div>
    </>
  );
}
