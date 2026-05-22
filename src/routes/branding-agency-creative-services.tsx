import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Phone, Sparkles, Palette, Target, Lightbulb, Users, TrendingUp } from "lucide-react";
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
import brandingHeroBackground from "@/assets/branding_hero_bg_2_identity_grid.svg";
import brandIdentityMockup from "@/assets/brand-identity-mockup.png";

export const Route = createFileRoute("/branding-agency-creative-services")({
  head: () => ({
    meta: [
      { title: "Branding Agency and Creative Services | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media is a branding agency offering brand identity design, logo design services, and creative campaigns that help businesses build strong, scalable brands.",
      },
      { property: "og:title", content: "Branding Agency and Creative Services | Korvion Media" },
      {
        property: "og:description",
        content: "Build strong, scalable brands with strategic branding and creative services.",
      },
    ],
  }),
  component: BrandingPage,
});

const services = [
  {
    icon: Target,
    title: "Brand Identity and Positioning",
    description: "We define what your brand stands for and how it should be perceived.",
    items: [
      "Brand strategy and positioning",
      "Brand consulting approach",
      "Brand positioning and repositioning",
      "Brand development systems",
    ],
    outcome: "Your brand becomes clear, consistent, and differentiated.",
  },
  {
    icon: Palette,
    title: "Logo and Visual Identity Design",
    description: "Your identity is your first impression. We make it count.",
    items: [
      "Logo design services",
      "Custom logo design services",
      "Visual identity services",
      "Brand guidelines",
    ],
    outcome: "We create scalable design systems that stay consistent across platforms.",
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns",
    description: "Ideas that do not just look good but perform.",
    items: [
      "Brand campaign strategy",
      "Creative direction",
      "Advertising creatives",
      "Campaign storytelling",
    ],
    outcome: "Every campaign is built to capture attention and drive action.",
  },
  {
    icon: Sparkles,
    title: "Graphic Design Services",
    description: "Design that supports marketing, not just aesthetics.",
    items: [
      "Marketing creatives",
      "Social media design",
      "Digital and print design",
      "Brand collaterals",
    ],
    outcome: "Every asset aligns with your brand and business goals.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery and Research",
    description: "We understand your market, audience, and competition.",
  },
  {
    number: "02",
    title: "Strategy and Positioning",
    description: "We define your brand foundation and direction.",
  },
  {
    number: "03",
    title: "Design and Identity",
    description: "We create visual systems that bring your brand to life.",
  },
  {
    number: "04",
    title: "Execution and Rollout",
    description: "We ensure consistency across all platforms and campaigns.",
  },
];

const whyChooseUs = [
  "Strategy first approach, not just design",
  "Focus on business outcomes, not just visuals",
  "Scalable branding systems",
  "Integrated creative and marketing thinking",
];

const outcomes = [
  "Stronger brand recall",
  "Higher conversion rates",
  "Better campaign performance",
  "Consistent brand communication",
];

const clientTypes = [
  "Startups building from scratch",
  "Growing businesses scaling identity",
  "Enterprises refining brand systems",
];

const faqs = [
  {
    question: "What does a branding agency do?",
    answer:
      "A branding agency helps businesses define their identity, positioning, and communication. At Korvion Media, this includes brand strategy, brand identity design, logo design services, and creative campaigns that ensure your brand stands out and remains consistent across all platforms.",
  },
  {
    question: "How is branding different from advertising?",
    answer:
      "Branding focuses on building long-term perception, trust, and recognition, while advertising drives short-term campaigns and conversions. A strong brand makes advertising more effective by ensuring consistent messaging and identity across every campaign.",
  },
  {
    question: "Do I need a branding agency for my business?",
    answer:
      "If your business lacks clarity, consistency, or differentiation, working with a branding agency can help you build a strong foundation. Korvion Media helps businesses create scalable brand systems that improve recognition, engagement, and overall growth.",
  },
  {
    question: "How long does branding take?",
    answer:
      "The timeline depends on the scope of work. Most branding projects, including brand strategy, positioning, and visual identity design, take between 3 to 8 weeks. Larger rebranding or multi-market projects may take longer based on complexity.",
  },
  {
    question: "Do you offer logo design services separately?",
    answer:
      "Yes. We offer standalone logo design services as well as complete brand identity systems. Whether you need a new logo or a full brand transformation, Korvion Media ensures consistency across all visual and communication elements.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by booking a consultation or calling +91 9480156345. The team at Korvion Media will understand your business needs and recommend the right branding and creative services to help you grow.",
  },
];

function BrandingPage() {
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
          Free Brand Consultation
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
            src={brandingHeroBackground} 
            alt="Brand Identity Construction Grid" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/80" />
        </motion.div>
        
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle animated glow on the brand identity grid area */}
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full"
            animate={{
              background: [
                "radial-gradient(circle at 75% 45%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 75% 45%, rgba(249, 115, 22, 0.12) 0%, transparent 50%)",
                "radial-gradient(circle at 75% 45%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
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
                Branding Agency and Creative Services That Build Strong Brands
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
                  Book a Free Brand Consultation
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* After Hero Section */}
      <section className="section-isolate py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Your brand is not just how it looks. It is how people recognize, trust, and choose you.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Korvion Media, we combine brand strategy, identity design, and creative execution to help businesses
            stand out and grow.
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
              {/* Brand Identity Mockup Image with Animations */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative aspect-[4/3] rounded-3xl border border-border bg-white backdrop-blur-xl shadow-elegant overflow-hidden group"
                style={{ perspective: "1000px" }}
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
                
                {/* Image with Hover Effect */}
                <motion.img 
                  src={brandIdentityMockup} 
                  alt="Korvion Media Brand Identity Elements - Logo, Colors, Typography, Business Cards" 
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                {/* Subtle Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"
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
                Most businesses do not struggle with visibility.
                <br />
                <span className="text-gradient-primary">They struggle with clarity.</span>
              </motion.h2>
              <motion.p 
                className="mt-6 text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                As a branding agency, we help businesses define their identity, positioning, and communication so they
                can compete and scale effectively.
              </motion.p>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Talk to a Branding Expert <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
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
                Branding and Creative Services That Drive{" "}
                <span className="text-gradient-primary">Real Impact</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                We provide complete branding and creative services designed to build consistent and scalable brand
                systems.
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
                Book a Free Brand Consultation
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
              Our <span className="text-gradient-primary">Branding Process</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              A strong brand is never accidental. It is built with intention.
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
              Build a Brand That Converts <ArrowUpRight className="h-4 w-4" />
            </Link>
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
                There are many branding agencies. Few build brands that actually perform.
              </p>
              <p className="mt-6 text-lg font-semibold text-foreground">
                We do not just make brands look good.
                <br />
                We make them work.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Schedule Your Brand Strategy Call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
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
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-isolate py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Real Business <span className="text-gradient-primary">Outcomes</span>, Not Just Creative Work
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              A brand is not an expense. It is a growth asset.
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

          <p className="mt-12 text-center text-lg text-muted-foreground">
            Because branding is not decoration. It is a direction.
          </p>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Request a Custom Branding Plan <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-isolate py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              {/* Image Placeholder */}
              <div className="relative aspect-square rounded-3xl border border-border bg-surface/50 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-8">
                    <Users className="h-20 w-20 mx-auto mb-4 text-primary" />
                    <p className="text-sm font-mono">Client Success Visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Who We <span className="text-gradient-primary">Work With</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {clientTypes.map((type, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-lg text-foreground">{type}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg text-muted-foreground">
                If your brand needs clarity, consistency, or growth, we are built for it.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Let's Discuss Your Brand Goals <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-isolate py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
            Let's Build a Brand That Drives <span className="text-gradient-primary">Growth</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            If your brand is unclear, inconsistent, or underperforming, it is costing you more than you think.
            <br />
            Let's fix that.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
            >
              Book a Free Brand Consultation
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

      {/* Trusted Section */}
      <section className="section-isolate py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Trusted by <span className="text-gradient-primary">Growing Brands</span> Worldwide
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We work with businesses that want more than just marketing. They want measurable growth.
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
              <span className="text-foreground">Proven creative and branding frameworks</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
              <span className="text-foreground">Data-informed decision-making</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
              <span className="text-foreground">Long-term partnership approach</span>
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

            {/* 3D Flow Animation Section */}
      <section className="section-isolate py-32 bg-background border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-gradient-primary">The Brand Evolution Process</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A disconnected strategy leaks revenue. We build interconnected systems where every step amplifies the next.
          </p>
        </div>
        <InteractiveFlow3D nodes={["Brand Discovery", "Positioning", "Visual Identity", "Brand Voice", "Brand Guidelines", "Market Rollout"]} />
      </section>

      {/* FAQ Section */}
      <section className="section-isolate py-32 bg-surface border-t border-border">
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
                Everything you need to know about our branding and creative services.
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
                  className="rounded-2xl border border-border bg-background px-8 overflow-hidden hover:border-primary/40 transition-all data-[state=open]:border-primary/60 data-[state=open]:shadow-glow-sm"
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

      {/* Final CTA */}
      <section className="section-isolate py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Elevate Your <span className="text-gradient-primary">Brand</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Let's create something that not only looks great but also performs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
            >
              Start Your Branding Journey Today
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

