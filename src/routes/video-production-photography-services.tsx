import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Film, Camera, Sparkles, Play, Image as ImageIcon, Video, Plus } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { InteractiveFlow3D } from "@/components/animations/InteractiveFlow3D";
import { ImagePlaceholder3D } from "@/components/animations/ImagePlaceholder3D";
import { MagneticButton } from "@/components/animations/MagneticButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/video-production-photography-services")({
  head: () => ({
    meta: [
      { title: "Video Production Services and Photography Services | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media offers video production services, photography services, and social media content creation to help brands engage, convert, and grow with high-impact visual content.",
      },
      { property: "og:title", content: "Video Production & Photography Services | Korvion Media" },
      {
        property: "og:description",
        content: "Create high-impact visual content that drives engagement and conversions.",
      },
    ],
  }),
  component: ContentProductionPage,
});

const services = [
  {
    icon: Film,
    title: "Video Production Services",
    description: "High-quality visuals that communicate clearly and perform across platforms.",
    items: [
      "Video production service",
      "Video production agency",
      "Commercial video production services",
      "Corporate and promotional videos",
    ],
  },
  {
    icon: Play,
    title: "Social Media Content Creation",
    description: "Content designed for reach, engagement, and consistency.",
    items: [
      "Social media content creation agency",
      "Social media content creation services",
      "Short-form video production",
      "Platform-specific content",
    ],
  },
  {
    icon: Camera,
    title: "Photography Services",
    description: "Professional visuals that strengthen your brand identity.",
    items: [
      "Photography services",
      "Creative photography services",
      "Product photography",
      "Corporate shoots",
    ],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics and Animation",
    description: "Content that simplifies ideas and enhances engagement.",
    items: [
      "Motion graphics services",
      "Motion graphic design company",
      "Motion graphics animation company",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Strategy and Planning",
    description: "We align content with your goals, audience, and platforms.",
  },
  {
    number: "02",
    title: "Concept and Scripting",
    description: "We develop creative ideas that capture attention and communicate clearly.",
  },
  {
    number: "03",
    title: "Production and Creation",
    description: "We execute high-quality shoots, edits, and designs.",
  },
  {
    number: "04",
    title: "Optimization and Delivery",
    description: "We ensure content performs across channels and formats.",
  },
];

const whyChooseUs = [
  "Video production agency with a strategic approach",
  "Platform-focused content execution",
  "Scalable production systems",
  "Integrated creative and marketing thinking",
];

const businessImpact = [
  "Higher engagement rates",
  "Better audience retention",
  "Stronger brand perception",
  "Improved conversions",
];

const faqs = [
  {
    question: "What does a video production service include?",
    answer:
      "A video production service covers planning, scripting, shooting, editing, and final delivery of video content. At Korvion Media, we combine creative direction with strategy to produce commercial video production, brand videos, and social content that align with your business goals and drive measurable results.",
  },
  {
    question: "How is a video production agency different from freelancers?",
    answer:
      "A video production agency offers structured workflows, creative strategy, and consistent quality across projects. Unlike freelancers, agencies provide end-to-end execution, including concept development, production, editing, and optimization for platforms, ensuring better scalability and performance.",
  },
  {
    question: "Do you provide social media content creation services?",
    answer:
      "Yes. We offer social media content creation services designed for engagement and growth. This includes reels, short-form videos, and platform-specific content created to increase reach, audience retention, and conversions.",
  },
  {
    question: "What industries do you provide photography services for?",
    answer:
      "We provide photography services for startups, brands, and enterprises across industries such as e-commerce, corporate, hospitality, and personal branding. Our creative photography services are tailored to reflect your brand identity and improve visual communication.",
  },
  {
    question: "What types of motion graphics and animation services do you offer?",
    answer:
      "We provide motion graphics services, including explainer animations, brand videos, and visual storytelling content. As a motion graphic design company, we create engaging animations that simplify complex ideas and improve audience understanding.",
  },
  {
    question: "How long does content production take?",
    answer:
      "Timelines depend on project scope and complexity. Simple social media content may take a few days, while commercial video production services and larger campaigns may take several weeks, including planning, production, and post-production.",
  },
  {
    question: "Can I get video production or photography services separately?",
    answer:
      "Yes. You can choose individual services such as video production service or photography services, or opt for a complete content production solution, depending on your business needs.",
  },
  {
    question: "How do I get started with your content production services?",
    answer:
      "You can get started by booking a consultation or calling +91 73536 48428. The team at Korvion Media will understand your requirements and recommend the right video production, photography, or content strategy for your business.",
  },
];

function ContentProductionPage() {
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
          Free Content Consultation
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] tracking-tight">
              <SplitText
                splitBy="words"
                stagger={0.05}
                delay={0.03}
              >
                Video Production Services and Photography Services That Drive Results
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
                  Book a Free Content Consultation
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
            Content is not just about creation. It is about capturing attention, building trust, and driving action.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Korvion Media, we deliver video production services, photography services, and content strategies that
            help brands stand out and grow.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              About Us <ArrowUpRight className="h-4 w-4" />
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
                    <Video className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Video Production Visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Most brands are creating content.
                <br />
                <span className="text-gradient-primary">Very few are creating content that actually works.</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                The difference is not effort.
                <br />
                It is a direction.
              </p>
              <p className="mt-6 text-lg text-foreground leading-relaxed">
                As a video production agency and content partner, we create visuals aligned with your business goals,
                audience behavior, and platform strategy.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Talk to a Content Expert <ArrowUpRight className="h-4 w-4" />
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
                <TiltCard key={i} tiltAmount={15}>
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

            {/* 3D Flow Animation Section */}
      <section className="section-isolate py-32 bg-background border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-gradient-primary">The Content Production Pipeline</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A disconnected strategy leaks revenue. We build interconnected systems where every step amplifies the next.
          </p>
        </div>
        <InteractiveFlow3D nodes={["Concept Strategy", "Scripting", "Pre-Production", "Shooting", "Post-Production", "Color Grading", "Distribution"]} />
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


