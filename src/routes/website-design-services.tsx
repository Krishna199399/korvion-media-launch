import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Layout, Zap, Code2, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/website-design-services")({
  head: () => ({
    meta: [
      { 
        title: "Website Design Services | UI UX and Web Development | Korvion Media" 
      },
      {
        name: "description",
        content: "Korvion Media offers website design services, UI UX design, and web development focused on conversion, performance, and real business growth.",
      },
      { property: "og:title", content: "Website Design Services — Korvion Media" },
      { property: "og:description", content: "Build a website that drives leads, sales, and business growth." },
    ],
  }),
  component: WebsiteDesignPage,
});

const services = [
  {
    icon: Layout,
    title: "UI UX Design Services",
    description: "We design how users think, move, and act on your website.",
    items: [
      "UI UX design services",
      "User journey mapping",
      "Interaction design",
      "Experience optimization",
    ],
  },
  {
    icon: Sparkles,
    title: "Website Design Services",
    description: "Every page has a purpose.",
    items: [
      "Website design services",
      "Responsive website design services",
      "Mobile optimized layouts",
      "Scalable design systems",
    ],
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Performance and flexibility are built together.",
    items: [
      "Custom web development",
      "Website design and development services",
      "Secure and scalable builds",
      "High-performance architecture",
    ],
  },
  {
    icon: Target,
    title: "Landing Pages That Convert",
    description: "Designed for action, not just traffic.",
    items: [
      "Conversion-focused landing pages",
      "A/B testing-ready design",
      "Funnel-aligned structure",
    ],
  },
];

const wrongApproaches = [
  "No clear user journey",
  "Weak calls to action",
  "Slow performance",
  "Poor mobile experience",
];

const websiteGoals = [
  "Capture attention instantly",
  "Build trust within seconds",
  "Guide users toward action",
  "Convert consistently",
];

const conversionPrinciples = [
  {
    title: "User First Thinking",
    description: "We design based on how users interact, not assumptions.",
  },
  {
    title: "Performance Focus",
    description: "Speed and responsiveness directly impact results.",
  },
  {
    title: "Conversion Structure",
    description: "Every page is designed to guide action.",
  },
  {
    title: "Continuous Improvement",
    description: "We optimize based on real data, not guesswork.",
  },
];

const whyChooseUs = [
  "Website design services focused on conversion",
  "Strong UI UX design approach",
  "Scalable web development systems",
  "Performance-driven execution",
];

const expectations = [
  "Better user engagement",
  "Higher conversion rates",
  "Faster website performance",
  "Improved user experience",
];

const faqs = [
  {
    question: "What are website design services?",
    answer:
      "Website design services involve planning, designing, and structuring a website to improve user experience, usability, and overall performance. At Korvion Media, this includes UI UX design services, responsive layouts, and conversion-focused elements that guide users, improve engagement, and support business goals.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on layout, visual structure, and user experience, while web development handles functionality, performance, and backend systems. Both are essential parts of website design and development services, working together to create a fast, scalable, and high-performing website.",
  },
  {
    question: "Do you provide UI UX design services?",
    answer:
      "Yes. Korvion Media provides UI UX design services focused on improving user journeys, reducing friction, and enhancing usability. Our approach ensures that users can navigate easily, engage effectively, and take meaningful actions on your website.",
  },
  {
    question: "Do you offer website redesign services?",
    answer:
      "Yes. We offer website redesign services to improve usability, performance, and conversion rates for existing websites. This includes updating design, optimizing user experience, and restructuring content to align with current business goals.",
  },
  {
    question: "How long does website design and development take?",
    answer:
      "The timeline depends on the complexity and scope of the project. Most website design and development projects take a few weeks to a couple of months, including design, development, testing, and final optimization.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by calling 1234567890 or booking a consultation. The team at Korvion Media will understand your requirements and recommend the right website design and development approach for your business.",
  },
];

function WebsiteDesignPage() {
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
            Get Free Website Audit
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/website-hero-bg.jpg" 
              alt="" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-40" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl text-destructive font-semibold mb-6"
              >
                If Your Website Design Isn't Converting, It's Costing You Business
              </motion.p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] tracking-tight">
                <SplitText
                  splitBy="words"
                  stagger={0.05}
                  delay={0.03}
                >
                  Build a Website That Drives Leads, Sales, and Business Growth
                </SplitText>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-10"
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                  >
                    Get Free Website Audit
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Supporting Section */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Website design is not about how it looks. It is about how it works.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At Korvion Media, we provide website design services, UI UX design, and web development that focus on user behavior, performance, and conversion.
            </p>
            <p className="mt-6 text-lg text-foreground font-semibold leading-relaxed max-w-3xl mx-auto">
              We don't just build websites. We build systems that turn visitors into customers.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Talk to a Web Strategy Expert <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Where Most Websites Fail */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Where Most Websites <span className="text-gradient-primary">Fail</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  Most websites don't fail because of design.
                  <br />
                  They fail because they don't guide users.
                </p>
                <p className="mt-6 text-lg text-destructive font-semibold">
                  Every one of these directly impacts conversions.
                </p>
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

        {/* What a High-Performing Website Does */}
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
                  What a High-Performing Website<br />
                  <span className="text-gradient-primary">Actually Does</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                  A website should:
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteGoals.map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-2xl border border-border bg-surface p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                      <Check className="h-7 w-7" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-foreground">{goal}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xl text-foreground font-semibold">
                If it doesn't do this, it's not working.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Our Website Design and <span className="text-gradient-primary">Development Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <TiltCard key={i} tiltAmount={8}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="rounded-3xl border border-border bg-background p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
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
              className="mt-12 text-center"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all"
                >
                  Get Free Website Audit
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* The Conversion Gap with Image */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <TrendingUp className="h-20 w-20 mx-auto mb-4 text-primary" />
                      <p className="text-sm font-mono">Conversion Funnel Visual</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  The <span className="text-gradient-primary">Conversion Gap</span>
                </h2>
                <p className="mt-6 text-xl text-foreground">
                  You are already getting traffic.
                </p>
                <p className="mt-4 text-xl text-muted-foreground">
                  But here's the real problem:
                </p>
                <p className="mt-4 text-2xl font-bold text-primary">
                  👉 Traffic ≠ Conversions
                </p>
                <p className="mt-6 text-lg text-foreground leading-relaxed">
                  Most businesses lose 70 to 90 percent of their visitors because their website is not designed to convert.
                </p>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  We focus on closing that gap.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">How do we fix it</h3>
                  <ul className="space-y-3">
                    {[
                      "Improve clarity",
                      "Reduce friction",
                      "Optimize user flow",
                      "Strengthen the call to action",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-lg text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Fix Your Conversion Gap <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Approach Web Experience */}
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
                  How We Approach <span className="text-gradient-primary">Web Experience</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  We don't follow templates. We build around behavior.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conversionPrinciples.map((item, i) => (
                <TiltCard key={i} tiltAmount={8}>
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
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
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
                Build a Website That Performs <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Website Redesign Section with Image */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Website Redesign Services That <span className="text-gradient-primary">Improve Results</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  If your current website is underperforming, a redesign is a strategic move.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Website redesign services",
                    "UX improvements",
                    "Performance upgrades",
                    "Conversion-focused redesign",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-lg font-semibold text-foreground">
                  We improve what actually matters.
                </p>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <Zap className="h-20 w-20 mx-auto mb-4 text-primary" />
                      <p className="text-sm font-mono">Website Redesign Visual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose Us */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Why Businesses Choose <span className="text-gradient-primary">Korvion Media</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  We don't build websites for launch. We build them for results.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-background p-6 hover:border-primary/40 transition-all"
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
                Schedule Your Website Strategy Call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="section-isolate py-32">
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
                  className="rounded-2xl border border-border bg-surface/50 p-8 text-center hover:border-primary/40 hover:shadow-glow-sm transition-all"
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
                Request a Custom Website Plan <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              Let's Build a Website That <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              If your website is not generating leads or sales, it's time to fix it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
              >
                Get Free Website Audit
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:1234567890"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-all"
              >
                <Phone className="h-5 w-5" />
                Call 1234567890
              </a>
            </div>
          </div>
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
                  Everything you need to know about our website design services.
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

        {/* Trusted Section */}
        <section className="section-isolate py-20 bg-surface border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Trusted by <span className="text-gradient-primary">Growing Brands</span> Worldwide
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We work with businesses that want more than just a website.
            </p>
            <ul className="mt-8 grid sm:grid-cols-3 gap-6 text-left">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-foreground">Proven frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-foreground">Data-informed decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-foreground">Long-term collaboration</span>
              </li>
            </ul>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Work With Korvion Media <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Elevate Your <span className="text-gradient-primary">Digital Experience</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Let's build something that not only looks good but also performs.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
              >
                Start Your Website Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
