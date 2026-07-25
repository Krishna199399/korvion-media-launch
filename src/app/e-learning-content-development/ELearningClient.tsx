"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  GraduationCap,
  PlayCircle,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Layers,
  BrainCircuit,
  MousePointerClick,
  Video,
  Users,
  Building2,
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

const trainingPitfalls = [
  "Low learner engagement",
  "Poor completion rates",
  "Information overload",
  "Weak knowledge retention",
  "Static and outdated training formats",
];

const services = [
  {
    icon: GraduationCap,
    title: "E Learning Module Development",
    subhead: "Structured digital learning built around learner experience.",
    items: [
      "E-learning module development",
      "E-learning training modules",
      "E-learning content creation",
      "Training content development",
    ],
    outcome: "We organize information into easy-to-follow learning journeys that improve understanding.",
  },
  {
    icon: BookOpen,
    title: "LMS Content Development",
    subhead: "Training content designed for modern learning platforms.",
    items: [
      "LMS content development",
      "LMS content creation",
      "SCORM compatible modules",
      "Structured assessments and quizzes",
    ],
    outcome: "We build learning systems that work seamlessly across LMS platforms.",
  },
  {
    icon: MousePointerClick,
    title: "Interactive E-Learning Content",
    subhead: "Learning becomes more effective when people participate.",
    items: [
      "Interactive e learning content",
      "Create interactive learning modules",
      "Scenario-based learning",
      "Gamified interactions",
    ],
    outcome: "We create engaging experiences that encourage active learning instead of passive watching.",
  },
  {
    icon: Video,
    title: "Animated Training Video Production",
    subhead: "Complex topics become easier with visual storytelling.",
    items: [
      "Animated training video production",
      "2D and 3D animation services",
      "Motion-based explainer modules",
      "Process visualization",
    ],
    outcome: "Animation improves engagement, comprehension, and retention.",
  },
];

const howPeopleLearnPillars = [
  {
    icon: Sparkles,
    title: "Visual Learning Improves Understanding",
    desc: "Animation and visual storytelling simplify difficult concepts.",
  },
  {
    icon: MousePointerClick,
    title: "Interaction Increases Retention",
    desc: "Learners remember more when they actively participate.",
  },
  {
    icon: Layers,
    title: "Structured Learning Reduces Overload",
    desc: "Well-organized modules improve focus and completion rates.",
  },
  {
    icon: Zap,
    title: "Consistency Improves Training Outcomes",
    desc: "Digital learning ensures the same quality across teams and locations.",
  },
];

const targetUseCases = [
  "Employee onboarding",
  "Compliance training",
  "Product education",
  "Corporate training programs",
  "Internal learning systems",
  "Customer education platforms",
];

const whyBusinessesChooseUs = [
  "Structured approach to e-learning content development",
  "Interactive and animation-driven learning systems",
  "LMS-ready content production",
  "Focus on learner engagement and retention",
];

const whatBetterContentChanges = [
  "Higher training completion rates",
  "Better learner engagement",
  "Improved knowledge retention",
  "Consistent learning delivery",
  "Easier scalability across teams",
];

const faqs = [
  {
    q: "What is e-learning content development?",
    a: "E-learning content development involves creating structured digital learning materials such as interactive modules, videos, assessments, and animations designed to improve understanding and retention. At Korvion Media, we focus on making learning more engaging, accessible, and effective.",
  },
  {
    q: "What are e-learning training modules?",
    a: "E-learning training modules are structured digital lessons designed for online learning environments. These modules can include videos, quizzes, animations, and interactive elements to improve learner participation and knowledge retention.",
  },
  {
    q: "Do you provide LMS content development services?",
    a: "Yes. Korvion Media provides LMS content development and LMS content creation services designed for seamless integration with learning management systems. This includes structured modules, assessments, and SCORM-compatible learning content.",
  },
  {
    q: "What is interactive e-learning content?",
    a: "Interactive e-learning content allows learners to actively participate through quizzes, simulations, scenarios, and clickable elements instead of passively consuming information. This improves engagement and learning outcomes.",
  },
  {
    q: "Why use animated training video production for learning?",
    a: "Animated training video production simplifies complex topics through visual storytelling and motion design. Animation helps learners understand concepts faster and improves long-term retention.",
  },
  {
    q: "How do I get started?",
    a: "You can call +91 9480156345 or schedule a consultation. The team at Korvion Media will understand your training requirements and recommend the right e-learning solution for your organization.",
  },
];

export function ELearningClient() {
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
            Book a Free Learning Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* HERO SECTION (2-Column Visual Layout) */}
        <section className="section-isolate relative pt-36 pb-24 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Radial Geometry Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none z-0" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md mb-6"
                >
                  <GraduationCap className="h-4 w-4" />
                  Interactive Pedagogy & E-Learning Engineering
                </motion.div>

                <SplitText className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                  Build Interactive E-Learning Experiences That People Actually Remember
                </SplitText>

                <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm sm:text-base font-semibold text-primary">
                    Most training programs overload people with information and expect retention. That rarely works.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                  People learn better when content is visual, interactive, and structured around real understanding. At Korvion Media, we create e-learning content, LMS training modules, and animated learning experiences that simplify complex topics and improve retention.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <MagneticButton strength={0.2}>
                    <RippleButton
                      onClick={openBookACall}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                    >
                      👉 Get Free Learning Consultation
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </RippleButton>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column Graphic Card */}
              <div className="lg:col-span-5">
                <TiltCard className="rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Pedagogy Matrix</h3>
                        <p className="text-xs text-muted-foreground">Interactive Module System</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      SCORM Ready
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Module Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Interactive Scenarios", "3D Animation", "LMS Integration", "Micro-Learning", "Visual Storytelling", "Knowledge Checkpoints"].map((pill) => (
                        <span key={pill} className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60 bg-surface/40 -mx-8 -mb-8 p-6 rounded-b-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-primary uppercase">Learner Retention</p>
                      <p className="text-sm font-bold text-foreground">94% Completion Rate</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BrainCircuit className="h-4 w-4" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* WHY MOST TRAINING CONTENT GETS IGNORED */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Retention Bottlenecks</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                Why Most Training Content Gets Ignored
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                The problem is not the information. The problem is how it is delivered.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {trainingPitfalls.map((point) => (
                <div key={point} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive font-bold">
                    ✕
                  </div>
                  <p className="font-semibold text-base">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-mono text-muted-foreground mt-8">
              If learning feels boring, people disconnect quickly.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">
                E Learning Content Development Services
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                We create learning experiences designed for engagement, clarity, and retention.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <TiltCard className="rounded-3xl border border-border bg-background p-8 lg:p-10 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant">
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

                      <div className="mt-8 border-t border-border/60 pt-4">
                        <p className="text-xs font-mono text-primary uppercase tracking-wider">{item.outcome}</p>
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
                👉 Build Interactive Learning Experiences <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* HOW PEOPLE ACTUALLY LEARN */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Pedagogy</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">How People Actually Learn</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                People do not learn by reading long slides. They learn through clarity, repetition, and interaction. That is why modern e-learning works differently.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howPeopleLearnPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <TiltCard
                    key={p.title}
                    className="rounded-3xl border border-border bg-surface/40 p-8 h-full flex flex-col justify-between hover:border-primary/40 transition-all shadow-elegant"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
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
                👉 Create Training That People Remember <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* DESIGNED FOR TEAMS, TRAINING, AND SCALABLE LEARNING */}
        <section className="section-isolate py-24 bg-surface/50 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Use Cases</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">
              Designed for Teams, Training, and Scalable Learning
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Our e-learning and LMS content solutions are ideal for:
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {targetUseCases.map((uc) => (
                <div key={uc} className="rounded-2xl border border-border bg-background p-6 flex items-center gap-3 shadow-glow-sm hover:border-primary/40 transition-all text-left">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="font-bold text-base">{uc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-gradient-primary">
              Whether you are training 10 people or 10,000, the experience should stay engaging and effective.
            </p>
          </div>
        </section>

        {/* WHY BUSINESSES CHOOSE KORVION MEDIA */}
        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4">Why Businesses Choose Korvion Media</h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyBusinessesChooseUs.map((point) => (
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
              <p className="text-base font-semibold text-gradient-primary mb-6">
                We do not just create training materials. We create learning experiences people can actually follow and remember.
              </p>
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Schedule Your Learning Strategy Call <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* WHAT BETTER LEARNING CONTENT CHANGES */}
        <section className="section-isolate py-24 bg-surface/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-4">What Better Learning Content Changes</h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {whatBetterContentChanges.map((exp) => (
                <div key={exp} className="rounded-2xl border border-primary/20 bg-background p-6 text-center shadow-glow-sm hover:shadow-glow transition-all">
                  <TrendingUp className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-bold text-base">{exp}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-muted-foreground">
              Good learning content saves time, improves performance, and reduces confusion.
            </p>

            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Request a Custom E-Learning Plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CALLOUT & PHONE BOOKING */}
        <section className="section-isolate py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Let’s Build Learning Experiences <span className="text-gradient-primary">That Work</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              If your training content is difficult to follow, hard to retain, or failing to engage learners, it is time to rethink the experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBookACall}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                👉 Book a Free Consultation
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
              Trusted by Growing <span className="text-gradient-primary">Organizations</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with businesses that want effective learning systems, not just training documents.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Structured Learning</h3>
                <p className="mt-1 text-xs text-muted-foreground">Structured instructional frameworks</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Zap className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Interactive Experiences</h3>
                <p className="mt-1 text-xs text-muted-foreground">High retention interactive modules</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-left">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-base">Scalable Delivery</h3>
                <p className="mt-1 text-xs text-muted-foreground">SCORM-ready scalable learning</p>
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
              Ready to Modernize Your <span className="text-gradient-primary">Training Experience</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s create learning content that engages people, improves retention, and scales effectively.
            </p>
            <div className="mt-8">
              <button
                onClick={openBookACall}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
              >
                Start Your E Learning Journey Today
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
