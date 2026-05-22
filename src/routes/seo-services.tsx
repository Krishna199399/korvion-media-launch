import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Search, Target, MapPin, ShoppingCart, Link as LinkIcon, BarChart3, TrendingUp } from "lucide-react";
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

export const Route = createFileRoute("/seo-services")({
  head: () => ({
    meta: [
      { title: "SEO Services for Long-Term Organic Growth | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
      },
      { property: "og:title", content: "SEO Services for Long-Term Organic Growth | Korvion Media" },
      {
        property: "og:description",
        content: "Korvion Media provides SEO services, including technical SEO, local SEO, ecommerce SEO, keyword strategy, audits, and content optimization focused on long-term business growth.",
      },
    ],
  }),
  component: SEOServicesPage,
});

const struggles = [
  "Declining rankings",
  "Poor organic visibility",
  "Low quality traffic",
  "Weak local presence",
  "Technical SEO issues",
  "Content that never ranks",
];

const services = [
  {
    icon: Search,
    title: "Technical SEO Services",
    description: "Search engines cannot rank what they cannot properly crawl and understand. We fix the technical issues that hold rankings back.",
    items: [
      "Technical SEO services",
      "Website structure optimization",
      "Core Web Vitals improvements",
      "Crawlability and indexing fixes",
      "SEO website audit service",
    ],
  },
  {
    icon: Target,
    title: "Keyword Research & Content",
    description: "Good SEO starts with understanding search intent. We build content strategies aligned with how people actually search.",
    items: [
      "SEO keyword research service",
      "On-page optimization",
      "Content structure improvements",
      "Search intent mapping",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business",
    description: "Visibility matters most when customers are searching nearby. We help businesses improve local rankings, trust, and discovery.",
    items: [
      "Local SEO services",
      "Google My Business management service",
      "Google My Business optimization service",
      "Local search visibility improvements",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO Services",
    description: "Product visibility directly impacts revenue. We improve organic visibility across e-commerce search journeys.",
    items: [
      "E-commerce SEO services",
      "Shopify SEO optimization",
      "WooCommerce SEO improvements",
      "Product and category optimization",
    ],
  },
  {
    icon: LinkIcon,
    title: "Link Building & Authority",
    description: "Search engines trust websites with strong authority signals. We focus on sustainable authority growth, not spam tactics.",
    items: [
      "SEO link-building services",
      "Authority-building strategies",
      "High-quality backlink acquisition",
      "Topical relevance strengthening",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO Reporting",
    description: "SEO without data is guesswork. We measure what actually impacts growth.",
    items: [
      "Google Analytics setup services",
      "SEO reporting services",
      "Performance tracking dashboards",
      "Search visibility reporting",
    ],
  },
];

const campaignIssues = [
  {
    title: "Search Intent Matters More Than Keywords",
    description: "Ranking means nothing if traffic does not convert.",
  },
  {
    title: "Technical SEO Impacts Everything",
    description: "A technically weak website limits growth potential.",
  },
  {
    title: "Authority Drives Competitive Rankings",
    description: "Google rewards trusted websites with stronger visibility.",
  },
  {
    title: "SEO is a long-term growth system",
    description: "The businesses that win search build consistency over time.",
  },
];

const realSEOImproves = [
  "Visibility",
  "Authority",
  "Trust",
  "User experience",
  "Conversions",
];

const growthMetrics = [
  "Qualified organic visibility",
  "Local search growth",
  "Search-driven lead generation",
  "Ecommerce performance",
  "Measurable SEO outcomes",
];

const whyChooseUs = [
  "Strategy-driven SEO services",
  "Strong technical SEO expertise",
  "Search intent-focused content optimization",
  "Sustainable authority growth approach",
  "Transparent reporting and performance tracking",
];

const expectations = [
  "Improved keyword rankings",
  "Better local visibility",
  "Higher quality organic traffic",
  "Stronger website authority",
  "Better long-term search performance",
];

const faqs = [
  {
    question: "What are SEO services?",
    answer:
      "SEO services involve optimizing websites to improve visibility, rankings, and organic traffic from search engines. At Korvion Media, SEO services include technical SEO, keyword research, content optimization, local SEO, e-commerce SEO, and authority-building strategies.",
  },
  {
    question: "Why are technical SEO services important?",
    answer:
      "Technical SEO services help search engines crawl, index, and understand your website properly. Technical issues such as slow performance, indexing problems, and poor structure can negatively impact rankings and user experience.",
  },
  {
    question: "What is included in local SEO services?",
    answer:
      "Local SEO services focus on improving visibility in location-based searches through Google Business Profile optimization, local keyword targeting, reputation signals, and local search optimization strategies.",
  },
  {
    question: "Do you provide e-commerce SEO services?",
    answer:
      "Yes. Korvion Media provides e-commerce SEO services for platforms such as Shopify and WooCommerce. This includes product optimization, category structure improvements, technical SEO, and search visibility enhancement.",
  },
  {
    question: "Why is keyword research important in SEO?",
    answer:
      "Keyword research helps identify how users search for products, services, and information online. A strong keyword strategy improves content relevance, ranking opportunities, and organic traffic quality.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can call +91 9480156345 or book a consultation. The team at Korvion Media will analyze your website and recommend the right SEO growth strategy.",
  },
];

function SEOServicesPage() {
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
            Get Free SEO Audit
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
                If your business is invisible on search, your competitors are taking your customers.
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                <SplitText
                  splitBy="words"
                  stagger={0.05}
                  delay={0.03}
                >
                  SEO Services That Help Your Business Rank, Grow, and Stay Ahead
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
                    Talk to an SEO Growth Expert
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
                <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold hover:border-primary hover:text-primary transition-all"
                  >
                    Get Free SEO Audit
                  </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Section Content */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ranking on Google is no longer just about visibility.
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              It is about credibility, traffic, leads, and long-term business growth.
            </p>
            <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              At Korvion Media, we provide SEO services designed to improve how your business appears, performs, and grows across search engines. From technical SEO and keyword strategy to local SEO, ecommerce optimization, and authority building, we create scalable SEO systems built around measurable growth.
            </p>
            <p className="mt-6 text-lg font-semibold text-foreground">
              Because traffic means nothing if it does not convert into business outcomes.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Talk to an SEO Expert <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Most Businesses Do SEO Without a Real Strategy */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Most Businesses Do SEO Without a <span className="text-gradient-primary">Real Strategy</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">Publishing blogs and adding keywords is not enough anymore.</p>
                <p className="mt-4 text-lg text-destructive font-semibold">SEO fails when there is no long term strategy behind it.</p>
              </div>
              <div className="lg:col-span-7">
                <p className="mb-6 text-xl font-medium">Businesses struggle with:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {struggles.map((item, i) => (
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

        {/* SEO and Growth Services Built for Long-Term Results */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                SEO and Growth Services Built for <span className="text-gradient-primary">Long-Term Results</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We combine technical optimization, content strategy, authority building, and performance tracking to create sustainable organic growth.
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
                  Build Long-Term Organic Growth
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Why Most SEO Campaigns Stop Working */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Why Most SEO Campaigns <span className="text-gradient-primary">Stop Working</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">Many SEO campaigns focus only on rankings. But rankings alone do not grow businesses.</p>
                <p className="mt-4 text-lg text-foreground font-semibold">Real SEO should improve:</p>
                <ul className="mt-4 space-y-2">
                  {realSEOImproves.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg text-foreground">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xl text-destructive font-semibold">Without this, rankings become temporary.</p>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Create an SEO Strategy That Lasts <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {campaignIssues.map((issue, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-2xl border border-border bg-background p-6 hover:border-primary/40 transition-all"
                    >
                      <h3 className="text-xl font-bold mb-2">{issue.title}</h3>
                      <p className="text-muted-foreground">{issue.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Designed Around Business Growth */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <BarChart3 className="h-20 w-20 mx-auto mb-4 text-primary" />
                      <p className="text-sm font-mono">SEO Performance Visual</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  SEO Designed Around <br/><span className="text-gradient-primary">Business Growth</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  We do not chase random traffic. Because growth matters more than impressions.
                </p>
                <p className="mt-4 text-lg text-foreground">We focus on:</p>
                <ul className="mt-6 space-y-4">
                  {growthMetrics.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Discuss Your SEO Goals <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
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
                <p className="mt-6 text-xl text-muted-foreground">We do not treat SEO as a checklist.</p>
                <p className="mt-2 text-xl text-foreground">We build search visibility designed for long-term business growth.</p>
                <div className="mt-10">
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                    >
                      Schedule Your SEO Strategy Call
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
                SEO done right compounds over time.
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
                Request a Custom SEO Growth Plan <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Reusable Sections - Let's Build / Trusted By */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              Let’s Build Search Visibility That <span className="text-gradient-primary">Lasts</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              If your website is not generating consistent organic visibility or qualified traffic, it is time to rethink your SEO strategy.
            </p>
            <p className="mt-4 text-lg text-foreground">
              We work with businesses that want sustainable visibility, measurable traffic growth, and stronger search performance.
            </p>
            
            <div className="flex justify-center gap-4 mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
                Technical SEO expertise
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
                Search intent-driven strategies
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
                Long-term organic growth focus
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
              >
                Start Your SEO Growth Journey Today
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
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to know about our SEO and growth services.
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


