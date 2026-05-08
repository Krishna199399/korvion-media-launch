import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Database, Zap, GitBranch, BarChart3, MessageSquare, Mail, Bot } from "lucide-react";
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

export const Route = createFileRoute("/crm-setup-marketing-automation-services")({
  head: () => ({
    meta: [
      { 
        title: "CRM Setup and Marketing Automation Services | Korvion Media" 
      },
      {
        name: "description",
        content: "Korvion Media provides CRM implementation services, marketing automation, WhatsApp workflows, and reporting dashboards to streamline lead management and improve conversions.",
      },
      { property: "og:title", content: "CRM Setup and Marketing Automation Services | Korvion Media" },
      { property: "og:description", content: "Build a CRM and automation system that never misses a lead." },
    ],
  }),
  component: CRMAutomationPage,
});

const services = [
  {
    icon: Database,
    title: "CRM Implementation Services",
    description: "We build a structured foundation for your sales process.",
    items: [
      "CRM implementation services",
      "CRM setup and configuration",
      "HubSpot CRM setup",
      "Zoho CRM setup",
    ],
    outcome: "Your leads, contacts, and pipeline are organized in one place.",
  },
  {
    icon: Zap,
    title: "CRM Automation and Customization",
    description: "We remove manual work from your daily operations.",
    items: [
      "CRM automation services",
      "CRM customization services",
      "Lead assignment workflows",
      "Follow-up triggers",
    ],
    outcome: "Your team spends less time managing data and more time closing deals.",
  },
  {
    icon: GitBranch,
    title: "CRM Integration Services",
    description: "We connect your entire ecosystem.",
    items: [
      "CRM integration services",
      "Website and form integrations",
      "Marketing and sales tool connections",
    ],
    outcome: "No more scattered data across platforms.",
  },
  {
    icon: Bot,
    title: "Marketing Automation Services",
    description: "We build workflows that engage leads without manual effort.",
    items: [
      "Marketing automation services",
      "Marketing automation for small business",
      "Email marketing automation workflow",
    ],
    outcome: "Every lead receives timely and relevant communication.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp and Email Automation",
    description: "We improve response time and consistency.",
    items: [
      "WhatsApp marketing automation",
      "Automated email sequences",
      "Lead nurturing workflows",
    ],
    outcome: "Communication becomes faster and more reliable.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Reporting and Visibility",
    description: "You should not have to guess what is happening.",
    items: [
      "AI-powered reporting dashboards",
      "Real-time lead tracking",
      "Funnel visibility",
      "Performance insights",
    ],
    outcome: "You see where leads come from, how they move, and where they convert.",
  },
];

const problems = [
  "Leads are missed or delayed",
  "Follow-ups depend on manual effort",
  "Teams work with incomplete data",
  "Conversion opportunities are lost",
];

const systemSteps = [
  {
    title: "Capture",
    description: "Every lead from your website, ads, or campaigns is automatically recorded.",
  },
  {
    title: "Track",
    description: "Each interaction is stored and visible to your team.",
  },
  {
    title: "Automate",
    description: "Follow-ups, reminders, and workflows run without manual input.",
  },
  {
    title: "Convert",
    description: "Better timing and consistency improve conversion rates.",
  },
];

const whyChooseUs = [
  "Structured CRM implementation services",
  "Practical automation that fits real workflows",
  "Integration across tools and platforms",
  "Focus on efficiency and measurable outcomes",
];

const outcomes = [
  "Faster lead response time",
  "Better follow-up consistency",
  "Improved team productivity",
  "Higher conversion efficiency",
];

const faqs = [
  {
    question: "What is CRM implementation, and why is it important?",
    answer:
      "CRM implementation involves setting up and configuring a system to manage leads, customer data, and sales processes. At Korvion Media, CRM implementation services help businesses organize their pipeline, track interactions, and improve overall efficiency and conversion outcomes.",
  },
  {
    question: "What are marketing automation services?",
    answer:
      "Marketing automation services involve creating workflows that automatically handle communication, such as emails, follow-ups, and lead nurturing. These systems reduce manual work and ensure consistent engagement with potential customers.",
  },
  {
    question: "Do you provide HubSpot and Zoho CRM setup?",
    answer:
      "Yes. Korvion Media provides HubSpot CRM setup and Zoho CRM setup services tailored to your business workflows, ensuring proper configuration, automation, and integration.",
  },
  {
    question: "How does WhatsApp marketing automation help businesses?",
    answer:
      "WhatsApp marketing automation allows businesses to send instant responses, follow-ups, and updates to leads and customers. It improves response time, increases engagement, and ensures no lead is left unattended.",
  },
  {
    question: "Can CRM systems integrate with existing tools?",
    answer:
      "Yes. CRM integration services connect your CRM with websites, marketing platforms, and communication tools to create a unified system where data flows seamlessly.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can call +91 73536 48428 or schedule a consultation. The team at Korvion Media will assess your current process and recommend the right CRM and automation setup.",
  },
];

function CRMAutomationPage() {
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
            Get Free Automation Audit
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
          {/* Background overlays */}
          <div className="absolute inset-0 bg-hero-glow opacity-30" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Your leads are not the problem. Your system is.
              </motion.div>

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
                  Build a CRM and Automation System That Never Misses a Lead
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
                    Talk to an Automation Expert
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
              Most businesses do not lose leads because of marketing.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              They lose them because there is no system to capture, track, and follow up consistently.
            </p>
            <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              At Korvion Media, we implement CRM systems and marketing automation services that bring structure to your sales and marketing process. Every lead is tracked. Every follow-up is triggered. Every interaction is recorded.
            </p>
            <p className="mt-6 text-xl font-semibold text-foreground">
              This is not about tools. It is about how your business operates every day.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Talk to an Automation Expert <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* What Happens Without a Proper System */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  What Happens Without a <span className="text-gradient-primary">Proper System</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  When there is no CRM or automation in place, problems show up quickly.
                </p>
                <p className="mt-6 text-lg font-semibold text-destructive">
                  Growth becomes inconsistent because the system is inconsistent.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-4">
                  {problems.map((item, i) => (
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

        {/* Our Services */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                CRM Setup and <span className="text-gradient-primary">Marketing Automation Services</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We design and implement systems that bring clarity, control, and consistency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <TiltCard key={i} tiltAmount={8}>
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
                  Get Free Automation Audit
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* How the System Works */}
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
                  How the <span className="text-gradient-primary">System Works</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  Instead of adding more tools, we simplify how everything works together.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemSteps.map((step, i) => (
                <TiltCard key={i} tiltAmount={6}>
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
                      <span className="text-xl font-bold">{i + 1}</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
                Build a System That Works <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Visual Placeholder 1 - CRM Dashboard */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                {/* Placeholder Image with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] rounded-3xl border-2 border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden group"
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(249, 115, 22, 0.3)",
                        "0 0 40px rgba(249, 115, 22, 0.5)",
                        "0 0 20px rgba(249, 115, 22, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Icon and Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-6"
                    >
                      <Database className="h-12 w-12" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-sm font-mono text-muted-foreground"
                    >
                      CRM Dashboard Visual
                    </motion.p>
                  </div>
                  
                  {/* Floating Particles */}
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
                  Centralized Lead <span className="text-gradient-primary">Management</span>
                </motion.h2>
                <motion.p 
                  className="mt-6 text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Every lead, every interaction, every opportunity — visible in one place.
                </motion.p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Real-time pipeline visibility",
                    "Automated lead scoring",
                    "Custom reporting dashboards",
                    "Team performance tracking",
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
              </div>
            </div>
          </div>
        </section>

        {/* Visual Placeholder 2 - Automation Workflow */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <motion.h2 
                  className="text-4xl sm:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Intelligent <span className="text-gradient-primary">Automation Workflows</span>
                </motion.h2>
                <motion.p 
                  className="mt-6 text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Set it once. Let it run forever. Your team focuses on closing, not chasing.
                </motion.p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Automated follow-up sequences",
                    "Smart lead assignment rules",
                    "WhatsApp & email triggers",
                    "Task and reminder automation",
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
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                {/* Placeholder Image with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] rounded-3xl border-2 border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden group"
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(249, 115, 22, 0.3)",
                        "0 0 40px rgba(249, 115, 22, 0.5)",
                        "0 0 20px rgba(249, 115, 22, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Icon and Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-6"
                    >
                      <Zap className="h-12 w-12" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-sm font-mono text-muted-foreground"
                    >
                      Automation Workflow Visual
                    </motion.p>
                  </div>
                  
                  {/* Floating Particles */}
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Placeholder 3 - Analytics Dashboard */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                {/* Placeholder Image with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] rounded-3xl border-2 border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden group"
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(249, 115, 22, 0.3)",
                        "0 0 40px rgba(249, 115, 22, 0.5)",
                        "0 0 20px rgba(249, 115, 22, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Icon and Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-6"
                    >
                      <BarChart3 className="h-12 w-12" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-sm font-mono text-muted-foreground"
                    >
                      Analytics Dashboard Visual
                    </motion.p>
                  </div>
                  
                  {/* Floating Particles */}
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
                  Data-Driven <span className="text-gradient-primary">Insights</span>
                </motion.h2>
                <motion.p 
                  className="mt-6 text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Stop guessing. Start knowing. Real-time visibility into what's working and what's not.
                </motion.p>
                <ul className="mt-8 space-y-4">
                  {[
                    "AI-powered reporting dashboards",
                    "Conversion funnel analytics",
                    "Team performance metrics",
                    "Revenue forecasting",
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
                  Make decisions based on data, not gut feeling.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Why Businesses Choose <span className="text-gradient-primary">Korvion Media</span>
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  We build systems that support growth, not complexity.
                </p>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Schedule Your Automation Strategy Call <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((reason, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/40 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <p className="text-foreground font-medium">{reason}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section-isolate py-20 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                What Changes After <span className="text-gradient-primary">Implementation</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                The difference is not just in tools. It is in how your business runs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((item, i) => (
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

            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Request a Custom Automation Plan <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-isolate py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              Let's Fix Your Lead <span className="text-gradient-primary">Management System</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              If your process depends on manual effort, it will break as you scale.
              <br />
              Build a system that works every time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
              >
                Book a Consultation
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
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Frequently Asked <span className="text-gradient-primary">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-background px-6 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Trusted Section */}
        <section className="section-isolate py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Trusted by <span className="text-gradient-primary">Growing Businesses</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We work with businesses that want structured systems, not scattered tools.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-foreground font-medium">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Process-driven implementation
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Data visibility and control
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Long-term scalability
              </li>
            </ul>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow transition-all"
                >
                  Work With Korvion Media
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-isolate py-20 bg-surface border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Streamline Your <span className="text-gradient-primary">Operations</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Build a system that captures leads, automates workflows, and improves conversions.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg"
              >
                Start Your Automation Setup Today <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
