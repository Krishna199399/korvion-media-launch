import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Users, TrendingUp, Target, MessageCircle, BarChart3 } from "lucide-react";
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

export const Route = createFileRoute("/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Agency and Services | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media delivers social media marketing services, strategy, influencer campaigns, and reputation management to help brands grow, engage, and build communities.",
      },
      { property: "og:title", content: "Social Media Marketing Agency | Korvion Media" },
      {
        property: "og:description",
        content: "Build structured systems for visibility, engagement, and long-term brand growth.",
      },
    ],
  }),
  component: SocialMediaMarketingPage,
});

const wrongApproaches = [
  "Posting without a strategy",
  "Chasing trends without relevance",
  "Ignoring audience behavior",
  "Measuring vanity metrics",
];

const ourDifference = [
  {
    title: "We Build Strategy Before Content",
    description: "Every brand we work with starts with a clear social media marketing strategy and structured planning.",
  },
  {
    title: "We Focus on Audience, Not Algorithms",
    description: "We design content based on how your audience consumes, engages, and responds.",
  },
  {
    title: "We Create Systems, Not Random Posts",
    description: "From content calendars to engagement loops, everything is structured for consistency.",
  },
];

const services = [
  {
    icon: Target,
    title: "Strategy and Planning",
    description: "We define your direction before execution.",
    items: [
      "Social media marketing strategy",
      "Social media marketing plan",
      "Social media marketing campaign plan",
      "Social media marketing for business growth",
    ],
  },
  {
    icon: BarChart3,
    title: "Management and Execution",
    description: "We handle your day-to-day presence.",
    items: [
      "Social media marketing services",
      "Content publishing",
      "Engagement handling",
      "Performance tracking",
    ],
  },
  {
    icon: Users,
    title: "Influencer and UGC Campaigns",
    description: "We help your brand reach new audiences.",
    items: [
      "Influencer marketing campaign management",
      "Social media influencer marketing strategy",
      "UGC content strategy",
    ],
  },
  {
    icon: MessageCircle,
    title: "Community and Growth Systems",
    description: "We turn attention into engagement.",
    items: ["Community building", "Audience interaction systems", "Growth frameworks"],
  },
  {
    icon: TrendingUp,
    title: "Reputation Management",
    description: "We manage how your brand is perceived.",
    items: ["Online reputation management services", "Online business reputation management"],
  },
];

const growthFactors = [
  "Your content is consistent",
  "Your messaging is clear",
  "Your audience trusts you",
  "Your engagement is active",
];

const whyChooseUs = [
  "Social media marketing agency with a structured approach",
  "Focus on real engagement, not vanity metrics",
  "Strategy-driven execution",
  "Long-term growth mindset",
];

const expectations = [
  "Better audience engagement",
  "Consistent brand presence",
  "Stronger brand perception",
  "Measurable growth over time",
];

const faqs = [
  {
    question: "What does a social media marketing agency do?",
    answer:
      "A social media marketing agency helps businesses plan, execute, and optimize their presence across platforms. At Korvion Media, this includes building a structured social media marketing strategy, managing content, running influencer campaigns, and handling reputation management to drive consistent growth and engagement.",
  },
  {
    question: "Why is social media marketing important for business growth?",
    answer:
      "Social media marketing helps brands increase visibility, connect with their audience, and build long-term trust. A well-planned social media marketing strategy improves engagement, strengthens brand perception, and supports sustainable business growth over time.",
  },
  {
    question: "Do you provide social media marketing services for all industries?",
    answer:
      "Yes. Korvion Media provides social media marketing services for startups, growing brands, and enterprises across industries. We customize strategies based on your business goals, audience behavior, and platform requirements to ensure effective results.",
  },
  {
    question: "What is included in social media marketing services?",
    answer:
      "Social media marketing services include strategy development, content planning, posting, audience engagement, and performance tracking. These elements work together to maintain a consistent presence and improve overall engagement and growth.",
  },
  {
    question: "How do influencer marketing campaigns work?",
    answer:
      "Influencer marketing campaigns involve collaborating with relevant creators to promote your brand. Korvion Media manages influencer selection, campaign planning, and execution to ensure authentic engagement and measurable reach.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by calling +91 73536 48428 or booking a consultation. The team at Korvion Media will understand your requirements and help you build a tailored social media marketing strategy for your business.",
  },
];

function SocialMediaMarketingPage() {
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
          Free Social Media Consultation
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-isolate relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background Image - Add your image to src/assets/social-hero-bg.jpg */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/social-hero-bg.jpg" 
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
                Korvion Media, a Social Media Marketing Agency That Drives Growth
              </SplitText>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 text-xl sm:text-2xl text-muted-foreground mx-auto leading-relaxed"
            >
              Most brands are posting.
              <br />
              Very few are building anything meaningful.
            </motion.p>

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
                  Book a Free Social Media Consultation
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
          <h2 className="text-3xl sm:text-4xl font-bold">You can post every day and still not grow.</h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Because growth on social media is not about frequency.
            <br />
            It is about direction, positioning, and consistency.
          </p>
          <p className="mt-6 text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            At Korvion Media, we work as a social media marketing agency that builds structured systems for
            visibility, engagement, and long-term brand growth.
          </p>
        </div>
      </section>

      {/* What Most Brands Get Wrong */}
      <section className="section-isolate py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                What Most Brands Get <span className="text-gradient-primary">Wrong</span> About Social Media
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

      {/* What We Do Differently */}
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
                What We Do <span className="text-gradient-primary">Differently</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We don't treat social media as content.
                <br />
                We treat it as a growth channel.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ourDifference.map((item, i) => (
              <TiltCard key={i} tiltAmount={8}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-surface p-8 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
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
              Talk to a Social Media Expert <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-isolate py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Our Social Media <span className="text-gradient-primary">Marketing Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Book a Free Social Media Consultation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* How Growth Actually Happens */}
      <section className="section-isolate py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-8">
                    <TrendingUp className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Growth Metrics Visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                How Growth <span className="text-gradient-primary">Actually Happens</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">This is not about one viral post.</p>
              <p className="mt-4 text-lg text-foreground">Growth happens when:</p>
              <ul className="mt-6 space-y-4">
                {growthFactors.map((factor, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-lg text-foreground">{factor}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-semibold text-foreground">We build all four together.</p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Build a Social Media Strategy That Works <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Work With Us */}
      <section className="section-isolate py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Why Brands Work With <span className="text-gradient-primary">Korvion Media</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">Because they are tired of random posting.</p>
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
              Request a Custom Social Media Plan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-isolate py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
            Let's Fix Your <span className="text-gradient-primary">Social Media</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            If your social media is not growing, there is a reason.
            <br />
            Let's find it and fix it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
            >
              Book a Free Social Media Consultation
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
                Everything you need to know about our social media marketing services.
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
