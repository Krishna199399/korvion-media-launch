import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Code2, Smartphone, Cloud, Database, Shield, Cpu } from "lucide-react";
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

export const Route = createFileRoute("/custom-mobile-web-app-development")({
  head: () => ({
    meta: [
      { title: "Custom Mobile and Web App Development Services | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media delivers custom mobile app development, web app development, DevOps, backend systems, and product engineering solutions built for scalability, security, and performance.",
      },
      { property: "og:title", content: "Custom Mobile and Web App Development | Korvion Media" },
      {
        property: "og:description",
        content: "Web and mobile app development services designed for real business growth.",
      },
    ],
  }),
  component: ITProductEngineeringPage,
});

const scalabilityPrinciples = [
  {
    title: "Strong Architecture",
    description: "Systems should support future growth without constant rebuilding.",
  },
  {
    title: "Reliable Backend Logic",
    description: "The backend should remain stable under increasing demand.",
  },
  {
    title: "Integration Flexibility",
    description: "Modern products need seamless communication across tools and platforms.",
  },
  {
    title: "Security by Design",
    description: "Security should be part of the engineering process, not an afterthought.",
  },
  {
    title: "Continuous Deployment and Optimization",
    description: "Modern applications evolve continuously through testing, deployment, and iteration.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Web App Development Services",
    description: "Custom web applications designed for business operations and digital products.",
    items: [
      "Web app development services",
      "Enterprise application architecture",
      "Scalable frontend and backend systems",
      "High-performance web experiences",
    ],
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    description: "Mobile experiences built for usability and performance.",
    items: [
      "Custom mobile app development",
      "Mobile app development services",
      "Android and iOS applications",
      "User-focused mobile experiences",
    ],
  },
  {
    icon: Database,
    title: "LMS and Product Development",
    description: "Learning and workflow systems built for modern organizations.",
    items: [
      "LMS app development",
      "LMS software development",
      "Custom LMS development",
      "Interactive platform architecture",
    ],
  },
  {
    icon: Cpu,
    title: "Backend Systems and API Integrations",
    description: "Strong systems create reliable products.",
    items: [
      "Backend development services",
      "API integration services",
      "Scalable backend architecture",
      "System integrations and workflows",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps, Cloud, and Security",
    description: "Infrastructure built for reliability and scale.",
    items: [
      "DevOps development services",
      "Cloud infrastructure management services",
      "Application security services",
      "Performance monitoring and deployment automation",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Frame",
    description: "Requirements, architecture, scalability planning.",
  },
  {
    number: "02",
    title: "Design",
    description: "System design, database schema, API contracts.",
  },
  {
    number: "03",
    title: "Produce",
    description: "Development, testing, integration.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deployment, monitoring, optimization.",
  },
];

const whyChooseUs = [
  "Scalable product engineering approach",
  "Strong backend and infrastructure expertise",
  "Performance and security-focused development",
  "Integration-ready systems and applications",
];

const businessImpact = [
  "Faster and more stable applications",
  "Better scalability and performance",
  "Reliable integrations and workflows",
  "Stronger security and infrastructure",
];

const faqs = [
  {
    question: "What are web app development services?",
    answer:
      "Web app development services involve designing and developing browser-based applications that support business operations, customer experiences, and digital products. At Korvion Media, these services focus on scalability, performance, backend architecture, and seamless user experience.",
  },
  {
    question: "What is custom mobile app development?",
    answer:
      "Custom mobile app development involves creating applications tailored specifically to your business requirements instead of using generic templates. Korvion Media develops scalable Android and iOS applications designed for usability, performance, and long-term maintainability.",
  },
  {
    question: "Do you provide LMS app and software development?",
    answer:
      "Yes. Korvion Media provides LMS app development, LMS software development, and custom LMS development services for organizations that require scalable learning and training platforms with interactive functionality.",
  },
  {
    question: "Why are backend systems important for digital products?",
    answer:
      "Backend systems handle application logic, data processing, integrations, and system communication. A strong backend architecture improves application stability, scalability, security, and overall performance.",
  },
  {
    question: "What are DevOps and cloud infrastructure services?",
    answer:
      "DevOps and cloud infrastructure services help businesses automate deployment, improve system reliability, and manage scalable environments. These services support faster releases, better monitoring, and secure infrastructure management.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can call +91 73536 48428 or schedule a consultation. The team at Korvion Media will understand your product requirements and recommend the right engineering and development approach.",
  },
];

function ITProductEngineeringPage() {
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
          Book a Product Strategy Call
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-isolate relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/content-hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] tracking-tight">
              <SplitText
                splitBy="words"
                stagger={0.05}
                delay={0.03}
              >
                Web and Mobile App Development Services Designed for Real Business Growth
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
                  Talk to a Product Engineering Expert
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section Content */}
      <section className="section-isolate py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Great products fail when the engineering behind them cannot scale
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A good idea is not enough.
          </p>
          <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            A modern digital product must perform under pressure, scale with growth, and deliver a seamless user experience.
            At Korvion Media, we combine product thinking, engineering, and scalable architecture to build high-performance 
            web applications, mobile apps, and backend systems for growing businesses.
          </p>
          <p className="mt-6 text-xl font-semibold text-foreground">
            From custom LMS platforms to enterprise-grade applications, we develop systems designed for long-term scalability, 
            integration, and reliability.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Discuss Your Product Vision <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-isolate py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-8">
                    <Code2 className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Product Engineering Visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Modern Digital Products Need More Than <span className="text-gradient-primary">Development</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Many applications fail because they are built only for launch, not for long-term growth.
              </p>
              <p className="mt-6 text-lg text-foreground">Common challenges businesses face:</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Applications that slow down as users grow",
                  "Weak backend architecture",
                  "Security vulnerabilities",
                  "Poor integration between systems",
                  "Products that become difficult to scale",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/15 text-destructive shrink-0 mt-1">
                      ✕
                    </span>
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg font-semibold text-foreground">
                The problem is rarely the idea. It is the engineering foundation behind it.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Build a Scalable Digital Product <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-isolate py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                IT, Product, and Engineering{" "}
                <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We build scalable systems designed around performance, usability, and long term maintainability.
              </p>
            </motion.div>
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
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-3xl border border-border bg-surface p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
                  >
                    <motion.div
                      initial={{ rotate: 0, scale: 1 }}
                      whileInView={{ rotate: 360, scale: [1, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
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
                Book a Free Content Consultation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-isolate py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Our Product Engineering <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Great products are not random. They are structured, strategic, and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="font-mono text-sm text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Build for Scale from Day One <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scalability Principles */}
      <section className="section-isolate py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              What Makes a Product <span className="text-gradient-primary">Scalable</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Most businesses think scalability means adding more servers. It is much deeper than that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scalabilityPrinciples.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Build for Scale from Day One <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Engineering Approach */}
      <section className="section-isolate py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Product Engineering That Supports <span className="text-gradient-primary">Business Growth</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            We approach development as product engineering, not just coding.
          </p>
          <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            That means understanding business logic, planning scalability early, optimizing user experience, 
            and designing maintainable systems.
          </p>
          <p className="mt-6 text-xl font-semibold text-foreground">
            Because successful products are built through long-term engineering decisions, not short-term development shortcuts.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Schedule Your Product Strategy Call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-isolate py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              {/* Image Placeholder */}
              <div className="relative aspect-square rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-8">
                    <Shield className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Scalable Architecture Visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Why Choose <span className="text-gradient-primary">Korvion Media</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {whyChooseUs.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-lg text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Schedule Your Content Strategy Call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="section-isolate py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              What You Can <span className="text-gradient-primary">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpact.map((item, i) => (
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
              Request a Custom Development Plan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-isolate py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Trusted by Businesses Building <span className="text-gradient-primary">Digital Products</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            We work with organizations that need scalable systems, reliable infrastructure, and long-term engineering support.
          </p>
          <ul className="mt-8 space-y-2 text-lg text-foreground max-w-2xl mx-auto">
            <li>Product-focused engineering</li>
            <li>Scalable architecture planning</li>
            <li>Secure and performance-driven development</li>
          </ul>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Work With Korvion Media <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-isolate py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
            Let's Build the Right <span className="text-gradient-primary">Engineering Foundation</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            If your product is expected to scale, the engineering behind it must be designed for it from the beginning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
            >
              Start Your Product Journey Today
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="tel:+917353648428"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="h-5 w-5" />
              Call +91 73536 48428
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
                Everything you need to know about our IT, product, and engineering services.
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
