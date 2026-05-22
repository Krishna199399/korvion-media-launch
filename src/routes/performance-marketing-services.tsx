import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Target, TrendingUp, BarChart3, Zap, DollarSign } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { InteractiveFlow3D } from "@/components/animations/InteractiveFlow3D";
import { MagneticButton } from "@/components/animations/MagneticButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mediaPlanningImage from "@/assets/media-planning-optimization.png";
import heroBackground from "@/assets/pro_hero_bg_white_rising_bars.svg";

export const Route = createFileRoute("/performance-marketing-services")({
  head: () => ({
    meta: [
      { 
        title: "Performance Marketing and Lead Generation Services | Korvion Media" 
      },
      {
        name: "description",
        content: "Korvion Media delivers performance marketing services, including Google Ads, LinkedIn Ads, conversion rate optimization, and lead generation systems focused on measurable ROI and growth.",
      },
      { property: "og:title", content: "Performance Marketing Services — Korvion Media" },
      { property: "og:description", content: "Marketing focused on 3 core metrics that drive revenue." },
    ],
  }),
  component: PerformanceMarketingPage,
});

const services = [
  {
    icon: Target,
    title: "Google Ads Management",
    description: "High intent traffic that converts.",
    items: [
      "Google Ads management services",
      "Search, display, and remarketing campaigns",
      "Keyword targeting and bid optimization",
    ],
    outcome: "We focus on capturing demand and converting it into qualified leads.",
  },
  {
    icon: TrendingUp,
    title: "LinkedIn Ads and B2B Marketing",
    description: "Precision targeting for high-value audiences.",
    items: [
      "LinkedIn ads agency approach",
      "LinkedIn marketing services",
      "B2B lead generation campaigns",
    ],
    outcome: "Ideal for businesses targeting decision makers and professionals.",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimization",
    description: "Traffic without conversion is wasted spend.",
    items: [
      "Conversion rate optimization services",
      "Conversion funnel optimization",
      "A/B testing and landing page improvements",
    ],
    outcome: "We improve how your traffic converts into actual revenue.",
  },
  {
    icon: Zap,
    title: "Lead Generation Systems",
    description: "Not just leads. Qualified leads.",
    items: [
      "Lead generation services",
      "Paid lead generation services",
      "Funnel-based lead systems",
    ],
    outcome: "We build systems that consistently generate and nurture leads.",
  },
];

const wrongApproaches = [
  "Spending without tracking ROI",
  "Optimizing for clicks, not conversions",
  "Ignoring funnel performance",
  "Running campaigns without testing",
];

const growthPrinciples = [
  {
    title: "Traffic Without Strategy Fails",
    description: "We align campaigns with business goals before spending the budget.",
  },
  {
    title: "Conversion Is Where Profit Happens",
    description: "Every campaign is tied to funnel performance and conversion metrics.",
  },
  {
    title: "Optimization Never Stops",
    description: "Performance marketing is continuous testing, not a one-time setup.",
  },
];

const whyChooseUs = [
  "Performance marketing services focused on ROI",
  "Data-driven campaign decisions",
  "Continuous optimization and testing",
  "Integrated approach across ads, funnels, and analytics",
];

const expectations = [
  "Lower cost per lead",
  "Higher conversion rates",
  "Better return on ad spend",
  "Scalable growth systems",
];

const clientTypes = [
  "Businesses scaling paid acquisition",
  "Startups looking for fast growth",
  "Companies struggling with ad performance",
  "Teams needing better conversion rates",
];

const faqs = [
  {
    question: "What are performance marketing services?",
    answer:
      "Performance marketing services focus on measurable outcomes such as leads, conversions, and revenue. At Korvion Media, this includes paid advertising, conversion rate optimization services, and lead generation systems designed to improve return on ad spend and overall business growth.",
  },
  {
    question: "How is performance marketing different from traditional marketing?",
    answer:
      "Traditional marketing focuses on visibility and brand awareness, while performance marketing is driven by measurable results such as cost per lead, conversion rate, and return on investment. It allows businesses to track performance and optimize campaigns continuously.",
  },
  {
    question: "What platforms do you use for performance marketing?",
    answer:
      "We use platforms such as Google Ads, LinkedIn Ads, and other paid channels based on your business goals and audience. Korvion Media selects the right platforms to maximize reach, improve targeting, and drive qualified leads.",
  },
  {
    question: "What is conversion rate optimization?",
    answer:
      "Conversion rate optimization improves how effectively your website or landing pages convert visitors into leads or customers. This includes A/B testing, funnel improvements, and data-driven changes to increase overall conversion performance.",
  },
  {
    question: "Do you provide lead generation services?",
    answer:
      "Yes. Korvion Media provides lead generation services that combine paid campaigns, targeting strategies, and conversion funnel optimization to generate high-quality and qualified leads for your business.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by calling +91 9480156345 or booking a consultation. The team at Korvion Media will analyze your current performance and build a tailored performance marketing strategy for your business.",
  },
];

function PerformanceMarketingPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Nav />

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all animate-pulse-glow"
          >
            Get Free Performance Audit
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
          {/* SVG Background with Animation */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={heroBackground} 
              alt="Performance Marketing Growth Chart" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/80" />
          </motion.div>
          
          {/* Animated Overlay Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Subtle animated glow on the chart area */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full"
              animate={{
                background: [
                  "radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.12) 0%, transparent 50%)",
                  "radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SplitText
                  splitBy="words"
                  stagger={0.05}
                  delay={0.03}
                >
                  Performance Marketing Focused on 3 Core Metrics That Drive Revenue
                </SplitText>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10"
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                  >
                    Get Free Performance Audit
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Opening Section */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Marketing is not an expense. It is an investment that should generate returns.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              If your campaigns are not producing measurable revenue, the problem is not the budget.
              <br />
              It is strategy, execution, and optimization.
            </p>
            <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              At Korvion Media, we focus on performance marketing services that are built to generate leads, improve conversions, and maximize return on ad spend.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Talk to a Performance Expert <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* What Most Brands Get Wrong */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  What Most Brands Get <span className="text-gradient-primary">Wrong</span> About Performance Marketing
                </h2>
                <p className="mt-6 text-xl text-destructive font-semibold">This is where growth stops.</p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-4">
                  {wrongApproaches.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-destructive text-sm font-bold">
                          ✕
                        </span>
                        <p className="text-foreground font-medium">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Metrics Section */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  What Performance Marketing<br />
                  Should <span className="text-gradient-primary">Actually Do</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                  Most campaigns focus on clicks.<br />
                  We focus on outcomes.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Cost per lead", icon: Target },
                { label: "Conversion rate", icon: TrendingUp },
                { label: "Customer acquisition cost", icon: BarChart3 },
                { label: "Return on ad spend", icon: Zap },
              ].map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative rounded-2xl border border-border bg-background p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-foreground">{metric.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xl text-foreground font-semibold">
                If these are not improving, your marketing is not working.
              </p>
            </div>
          </div>
        </section>

        {/* How We Think About Growth */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  How We Think About <span className="text-gradient-primary">Growth</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  We don't run ads. We build systems.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {growthPrinciples.map((item, i) => (
                <TiltCard key={i} tiltAmount={15}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-3xl border border-border bg-background p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring" }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm mb-6"
                    >
                      <Check className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Build a Performance Strategy That Works <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Services */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Our Performance <span className="text-gradient-primary">Marketing Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <TiltCard key={i} tiltAmount={15}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="rounded-3xl border border-border bg-surface p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
                    >
                      <motion.div
                        initial={{ rotate: 0, scale: 1 }}
                        whileInView={{ rotate: 360, scale: [1, 1.1, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm mb-6"
                      >
                        <Icon className="h-7 w-7" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-primary">{service.outcome}</p>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                >
                  Get Free Performance Audit
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Media Planning Section with Image */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                {/* Image with Advanced Animations */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="relative aspect-[4/3] rounded-3xl border border-border bg-background backdrop-blur-xl shadow-elegant overflow-hidden group"
                  style={{ perspective: "1000px" }}
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 107, 0, 0.3)",
                        "0 0 40px rgba(255, 107, 0, 0.5)",
                        "0 0 20px rgba(255, 107, 0, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Image with Hover Effect */}
                  <motion.img 
                    src={mediaPlanningImage} 
                    alt="Media Planning and Optimization - ROI Metrics Visual" 
                    className="w-full h-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  
                  {/* Animated Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-20, 20, -20],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </div>
              <div className="lg:col-span-6">
                <motion.h2 
                  className="text-4xl sm:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Media Planning and <span className="text-gradient-primary">Optimization</span>
                </motion.h2>
                <motion.p 
                  className="mt-6 text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  We ensure every rupee or dollar is spent with intent.
                </motion.p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Media planning services",
                    "Budget allocation strategies",
                    "Campaign optimization services",
                    "Channel performance tracking",
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    >
                      <motion.span 
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="h-4 w-4" />
                      </motion.span>
                      <span className="text-lg text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.p 
                  className="mt-8 text-lg font-semibold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  We focus on efficiency, not just scale.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Brands Work With Us */}
        <section className="section-isolate py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Why Businesses Choose <span className="text-gradient-primary">Korvion Media</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  We do not chase impressions. We focus on revenue.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <p className="text-foreground font-medium">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Schedule Your Strategy Call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              What You Can <span className="text-gradient-primary">Expect</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-background p-8 text-center hover:border-primary/40 hover:shadow-glow-sm transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow-sm mx-auto mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Request a Custom Growth Plan <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="section-isolate py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Who This Is <span className="text-gradient-primary">For</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {clientTypes.map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-left p-5 rounded-xl border border-border bg-surface/50"
                >
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground font-medium">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              Let's Turn Your Marketing Into <span className="text-gradient-primary">Revenue</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              If your marketing is not generating measurable returns, it is time to rethink your approach.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
              >
                Get Free Performance Audit
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:+919480156345"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-all"
              >
                <Phone className="h-5 w-5" />
                Call +91 9480156345
              </a>
            </div>
          </div>
        </section>

              {/* 3D Flow Animation Section */}
      <section className="section-isolate py-32 bg-background border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-gradient-primary">The Performance Marketing Engine</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A disconnected strategy leaks revenue. We build interconnected systems where every step amplifies the next.
          </p>
        </div>
        <InteractiveFlow3D nodes={["Market Research", "Offer Creation", "Funnel Building", "Ad Creative", "Media Buying", "A/B Testing", "Scale"]} />
      </section>

      {/* FAQ Section */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Frequently Asked <span className="text-gradient-primary">Questions</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to know about our performance marketing services.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-2xl border border-border bg-surface/50 px-8 overflow-hidden hover:border-primary/40 transition-all data-[state=open]:border-primary/60 data-[state=open]:shadow-glow-sm"
                  >
                    <AccordionTrigger className="py-6 text-left hover:no-underline group">
                      <span className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-6">Still have questions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

