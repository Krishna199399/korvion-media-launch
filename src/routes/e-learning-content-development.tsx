import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, BookOpen, GraduationCap, Sparkles, Play, Users, Target } from "lucide-react";
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

export const Route = createFileRoute("/e-learning-content-development")({
  head: () => ({
    meta: [
      { title: "Create Interactive E-Learning Modules for LMS | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media creates e-learning content, LMS training modules, and animated learning experiences designed to improve engagement, retention, and training effectiveness.",
      },
      { property: "og:title", content: "E-Learning Content Development | Korvion Media" },
      {
        property: "og:description",
        content: "Build interactive e-learning experiences that people actually remember.",
      },
    ],
  }),
  component: ELearningPage,
});

const services = [
  {
    icon: BookOpen,
    title: "E Learning Module Development",
    description: "Structured digital learning built around learner experience.",
    items: [
      "E-learning module development",
      "E-learning training modules",
      "E-learning content creation",
      "Training content development",
    ],
  },
  {
    icon: Target,
    title: "LMS Content Development",
    description: "Training content designed for modern learning platforms.",
    items: [
      "LMS content development",
      "LMS content creation",
      "SCORM compatible modules",
      "Structured assessments and quizzes",
    ],
  },
  {
    icon: Users,
    title: "Interactive E-Learning Content",
    description: "Learning becomes more effective when people participate.",
    items: [
      "Interactive e learning content",
      "Create interactive learning modules",
      "Scenario-based learning",
      "Gamified interactions",
    ],
  },
  {
    icon: Play,
    title: "Animated Training Video Production",
    description: "Complex topics become easier with visual storytelling.",
    items: [
      "Animated training video production",
      "2D and 3D animation services",
      "Motion-based explainer modules",
      "Process visualization",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Frame",
    description: "Audience, transformation, outcome.",
  },
  {
    number: "02",
    title: "Design",
    description: "Modules, scripts, storyboards.",
  },
  {
    number: "03",
    title: "Produce",
    description: "Animation, recording, post.",
  },
  {
    number: "04",
    title: "Launch",
    description: "LMS, payments, marketing & support.",
  },
];

const whyChooseUs = [
  "Structured approach to e-learning content development",
  "Interactive and animation-driven learning systems",
  "LMS-ready content production",
  "Focus on learner engagement and retention",
];

const businessImpact = [
  "Higher training completion rates",
  "Better learner engagement",
  "Improved knowledge retention",
  "Consistent learning delivery",
  "Easier scalability across teams",
];

const faqs = [
  {
    question: "What is e-learning content development?",
    answer:
      "E-learning content development involves creating structured digital learning materials such as interactive modules, videos, assessments, and animations designed to improve understanding and retention. At Korvion Media, we focus on making learning more engaging, accessible, and effective.",
  },
  {
    question: "What are e-learning training modules?",
    answer:
      "E-learning training modules are structured digital lessons designed for online learning environments. These modules can include videos, quizzes, animations, and interactive elements to improve learner participation and knowledge retention.",
  },
  {
    question: "Do you provide LMS content development services?",
    answer:
      "Yes. Korvion Media provides LMS content development and LMS content creation services designed for seamless integration with learning management systems. This includes structured modules, assessments, and SCORM-compatible learning content.",
  },
  {
    question: "What is interactive e-learning content?",
    answer:
      "Interactive e-learning content allows learners to actively participate through quizzes, simulations, scenarios, and clickable elements instead of passively consuming information. This improves engagement and learning outcomes.",
  },
  {
    question: "Why use animated training video production for learning?",
    answer:
      "Animated training video production simplifies complex topics through visual storytelling and motion design. Animation helps learners understand concepts faster and improves long-term retention.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can call +91 73536 48428 or schedule a consultation. The team at Korvion Media will understand your training requirements and recommend the right e-learning solution for your organization.",
  },
];

function ELearningPage() {
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
          Book a Free Learning Strategy Call
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
                Build Interactive E-Learning Experiences That People Actually Remember
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
                  Get Free Learning Consultation
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
            Most training programs overload people with information and expect retention.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            That rarely works.
          </p>
          <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            People learn better when content is visual, interactive, and structured around real understanding.
            At Korvion Media, we create e-learning content, LMS training modules, and animated learning experiences 
            that simplify complex topics and improve how people absorb information.
          </p>
          <p className="mt-6 text-xl font-semibold text-foreground">
            Because effective learning is not about delivering more content.<br />
            It is about making learning easier to understand, engage with, and retain.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Talk to a Learning Expert <ArrowUpRight className="h-4 w-4" />
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
                    <BookOpen className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">E-Learning Training Visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Why Most Training Content Gets <span className="text-gradient-primary">Ignored</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                The problem is not the information.<br />
                The problem is how it is delivered.
              </p>
              <p className="mt-6 text-lg text-foreground">Most businesses struggle with:</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Low learner engagement",
                  "Poor completion rates",
                  "Information overload",
                  "Weak knowledge retention",
                  "Static and outdated training formats",
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
                If learning feels boring, people disconnect quickly.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Build Interactive Learning Experiences <ArrowUpRight className="h-4 w-4" />
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
                Video Production and Content Services That Drive{" "}
                <span className="text-gradient-primary">Growth</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We create content assets designed for engagement, visibility, and conversion.
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
              Our Content <span className="text-gradient-primary">Production Process</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Great content is not random. It is structured, strategic, and scalable.
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
              Create Content That Converts <ArrowUpRight className="h-4 w-4" />
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
                    <ImageIcon className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Photography Services Visual</p>
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
              Business Impact of <span className="text-gradient-primary">Better Content</span>
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
              Request a Custom Content Plan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-isolate py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Who We <span className="text-gradient-primary">Work With</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Startups, growing brands, and businesses scaling content.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Let's Discuss Your Content Needs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-isolate py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
            Let's Create Content That Drives <span className="text-gradient-primary">Results</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
            >
              Book a Free Content Consultation
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
                Everything you need to know about our video production and photography services.
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
