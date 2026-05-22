import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Rocket, TrendingUp, Zap, Server, BrainCircuit, Target, BarChart3, Settings } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { InteractiveFlow3D } from "@/components/animations/InteractiveFlow3D";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ImagePlaceholder3D } from "@/components/animations/ImagePlaceholder3D";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/advanced-seo-performance-services")({
  head: () => ({
    meta: [
      { title: "Advanced SEO Services & CRO for Scalable Growth | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
      },
      { property: "og:title", content: "Advanced SEO Services & CRO for Scalable Growth | Korvion Media" },
      {
        property: "og:description",
        content: "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Advanced SEO Services & CRO for Scalable Growth | Korvion Media" },
      { name: "twitter:description", content: "Korvion Media provides advanced SEO services, including SaaS SEO, AI SEO, Core Web Vitals optimization, CRO, and content authority strategies focused on scalable organic growth." },
    ],
  }),
  component: AdvancedSEOPerformancePage,
});

const services = [
  {
    icon: Rocket,
    title: "SaaS SEO Services",
    description: "SEO strategies designed for scalable SaaS and digital products. We help SaaS businesses build sustainable acquisition through search.",
    items: [
      "SaaS SEO services",
      "Product-led search growth",
      "Feature and solution page optimization",
      "Scalable content structures",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description: "Visibility means little if users do not convert. We optimize websites for measurable business outcomes, not just traffic.",
    items: [
      "Conversion rate optimization services",
      "Conversion funnel optimization",
      "Landing page behavior analysis",
      "User journey improvements",
    ],
  },
  {
    icon: Zap,
    title: "Core Web Vitals & Speed",
    description: "Performance directly impacts rankings and user experience. Faster websites improve retention, rankings, and conversions.",
    items: [
      "Page speed optimization service",
      "Core Web Vitals optimization",
      "Website performance improvements",
      "Technical loading optimization",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI SEO Services & Automation",
    description: "Modern SEO requires smarter systems. We use AI strategically to improve efficiency, scalability, and performance analysis.",
    items: [
      "AI SEO services",
      "Automated SEO services",
      "AI-driven optimization workflows",
      "Search data automation",
    ],
  },
  {
    icon: Target,
    title: "Content Marketing & Authority",
    description: "Search engines reward depth and expertise. We help businesses build authority that compounds over time.",
    items: [
      "Best content marketing services",
      "Topical authority strategy",
      "Content cluster planning",
      "Search intent content systems",
    ],
  },
];

const limitations = [
  "slow website performance",
  "poor conversion rates",
  "weak content authority",
  "technical limitations",
  "inefficient SEO workflows",
  "traffic that does not convert",
];

const advancedMeanings = [
  {
    title: "Better Website Performance",
    description: "Faster websites improve rankings and user retention.",
  },
  {
    title: "Smarter Conversion Paths",
    description: "Traffic should move users toward action.",
  },
  {
    title: "Stronger Search Authority",
    description: "Topical depth improves long-term visibility.",
  },
  {
    title: "SEO Automation and Efficiency",
    description: "Scalable systems reduce operational bottlenecks.",
  },
  {
    title: "Search Strategies Built Around Business Outcomes",
    description: "The goal is not traffic alone. The goal is growth.",
  },
];

const idealFor = [
  "SaaS businesses",
  "scaling startups",
  "digital platforms",
  "high-growth e-commerce brands",
  "businesses focused on conversion efficiency",
];

const whyChooseUs = [
  "Advanced SEO services focused on performance",
  "Strong technical and CRO expertise",
  "AI-driven optimization workflows",
  "Search strategies built around scalability",
  "Focus on measurable business growth",
];

const expectations = [
  "Faster websites and improved Core Web Vitals",
  "Better organic conversion rates",
  "Higher quality search traffic",
  "Stronger topical authority",
  "More scalable organic growth systems",
];

const faqs = [
  {
    question: "What are advanced SEO services?",
    answer:
      "Advanced SEO services go beyond basic optimization and focus on scalability, technical performance, conversion optimization, automation, and long-term search growth. At Korvion Media, advanced SEO services include SaaS SEO, Core Web Vitals optimization, AI SEO workflows, CRO, and topical authority strategies.",
  },
  {
    question: "What is the difference between traditional SEO and advanced SEO?",
    answer:
      "Traditional SEO mainly focuses on rankings and keyword visibility, while advanced SEO focuses on performance factors such as speed, user experience, conversions, technical infrastructure, and scalable growth systems.",
  },
  {
    question: "Why are conversion rate optimization services important?",
    answer:
      "Conversion rate optimization services improve how effectively your website converts visitors into leads or customers. This includes optimizing landing pages, user flows, messaging, and website behavior to improve business outcomes from existing traffic.",
  },
  {
    question: "What are AI SEO services?",
    answer:
      "AI SEO services use automation and data-driven workflows to improve SEO efficiency, content optimization, search analysis, and scalability. Korvion Media uses AI strategically to support faster decision-making and advanced optimization processes.",
  },
  {
    question: "How does page speed optimization affect SEO?",
    answer:
      "Page speed directly impacts user experience, bounce rate, search rankings, and conversions. Faster websites improve engagement and support stronger long-term organic performance.",
  },
  {
    question: "Who should invest in advanced SEO services?",
    answer:
      "Advanced SEO services are ideal for SaaS businesses, ecommerce brands, scaling startups, and companies that already have traffic but want better performance, conversions, and scalable organic growth.",
  },
];

function AdvancedSEOPerformancePage() {
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
            Get Advanced SEO Audit
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0">
            <ImagePlaceholder3D text="HERO BACKGROUND 3D" className="w-full h-full opacity-40 [&>div]:rounded-none [&>div]:border-none absolute inset-0 z-[-1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-40" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Traffic without conversions is just expensive visibility
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                <SplitText
                  splitBy="words"
                  stagger={0.05}
                  delay={0.03}
                >
                  Scale Smarter With Advanced SEO Services and Conversion Optimization
                </SplitText>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                  >
                    Talk to an SEO Performance Expert
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
                <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold hover:border-primary hover:text-primary transition-all"
                  >
                    Get Advanced SEO Audit
                  </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Section Content */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Modern SEO is no longer just about rankings.
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              It is about faster websites, better user experience, higher conversions, scalable organic acquisition, and sustainable search visibility.
            </p>
            <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              At Korvion Media, we combine advanced SEO services, conversion optimization, AI-driven workflows, and performance engineering to help businesses scale organic growth more efficiently.
            </p>
            <p className="mt-6 text-xl font-semibold text-foreground">
              Because traffic alone does not grow businesses. Performance does.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Get Advanced SEO Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Traditional SEO Stops Scaling */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Why Traditional SEO <span className="text-gradient-primary">Stops Scaling</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">Many businesses reach a point where rankings improve, but growth slows down.</p>
                <p className="mt-4 text-lg text-foreground font-medium">Why? Because modern search performance depends on much more than keywords.</p>
                <p className="mt-6 text-lg text-destructive font-semibold">SEO without performance optimization eventually plateaus.</p>
              </div>
              <div className="lg:col-span-7">
                <p className="mb-6 text-xl font-medium">Common problems include:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {limitations.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex items-center"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-destructive text-sm font-bold mr-3 shrink-0">
                        ✕
                      </span>
                      <p className="text-foreground font-medium capitalize">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced SEO and Performance Services */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Advanced SEO and <span className="text-gradient-primary">Performance Services</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We combine search visibility, technical performance, and conversion optimization into one scalable growth system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <TiltCard key={i} tiltAmount={15}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="rounded-3xl border border-border bg-surface/50 p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
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
                      <p className="text-muted-foreground mb-6 font-medium">{service.description}</p>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
              className="mt-16 text-center"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                >
                  Build an SEO System That Scales
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* What Advanced SEO Actually Means */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <Settings className="h-20 w-20 mx-auto mb-4 text-primary" />
                      <p className="text-sm font-mono">Performance Engineering Visual</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  What Advanced SEO <span className="text-gradient-primary">Actually Means</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  Advanced SEO is not about adding more keywords. It is about removing the friction that limits growth.
                </p>
                <div className="mt-8 space-y-6">
                  {advancedMeanings.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg"
                  >
                    Scale Beyond Traditional SEO <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Businesses That Need More Than Rankings */}
        <section className="section-isolate py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Built for Businesses That Need <span className="text-gradient-primary">More Than Rankings</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground mb-10">
              This page is designed for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {idealFor.map((audience, i) => (
                <span key={i} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-base font-medium text-foreground">
                  {audience}
                </span>
              ))}
            </div>
            <p className="mt-10 text-xl font-semibold text-foreground">
              If your SEO strategy is generating visibility but not meaningful growth, the problem is usually performance.
            </p>
          </div>
        </section>

        {/* Why Businesses Choose Korvion Media */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Why Businesses Choose <span className="text-gradient-primary">Korvion Media</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">We do not treat SEO as isolated optimization.</p>
                <p className="mt-2 text-xl text-foreground">We build integrated organic growth systems.</p>
                <div className="mt-10">
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                    >
                      Schedule Your SEO Performance Call
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
              <div className="grid sm:grid-cols-1 gap-4">
                {whyChooseUs.map((reason, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-background p-6 hover:border-primary/40 transition-all flex items-center"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0 mr-4" />
                    <p className="text-foreground font-medium text-lg">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                What You Can <span className="text-gradient-primary">Expect</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                The difference between average SEO and advanced SEO is performance at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center">
              {expectations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-surface/50 p-8 text-center hover:border-primary/40 hover:shadow-glow-sm transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow-sm mx-auto mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg"
              >
                Request an Advanced SEO Growth Plan <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Reusable Sections - Let's Build / Trusted By */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              Let’s Build an SEO Strategy That Performs <span className="text-gradient-primary">Beyond Rankings</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              If your organic growth is slowing down despite increasing SEO efforts, it is time to optimize the system behind the traffic.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
                Advanced technical SEO expertise
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
                Conversion-focused optimization
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
                Scalable content strategies
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
              >
                Start Your Advanced SEO Strategy Today
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
            <span className="text-gradient-primary">The SEO & CRO Ecosystem</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A disconnected strategy leaks revenue. We build interconnected systems where every step amplifies the next.
          </p>
        </div>
        <InteractiveFlow3D nodes={["Technical SEO", "Content Strategy", "Link Authority", "Core Web Vitals", "CRO", "Revenue Growth"]} />
      </section>

      {/* FAQ Section */}
        <section className="section-isolate py-32 bg-background">
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
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-base">
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
                Work With Korvion Media <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}


