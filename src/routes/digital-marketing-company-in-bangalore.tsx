import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Globe2,
  Layers3,
  MapPin,
  Megaphone,
  Phone,
  Search,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TiltCard } from "@/components/animations/TiltCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/digital-marketing-company-in-bangalore")({
  head: () => ({
    meta: [
      { title: "Best Digital Marketing Company in Bangalore | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media is a digital marketing company in Bangalore helping businesses grow through SEO, performance marketing, branding, websites, automation, and connected digital growth systems.",
      },
      { property: "og:title", content: "Best Digital Marketing Company in Bangalore | Korvion Media" },
      {
        property: "og:description",
        content:
          "Build connected digital growth systems for SEO, performance marketing, branding, websites, automation, and scalable technology in Bangalore.",
      },
    ],
  }),
  component: BangaloreDigitalMarketingPage,
});

const industries = [
  "Startups",
  "SaaS companies",
  "E-commerce brands",
  "Healthcare businesses",
  "Educational institutions",
  "Technology companies",
  "Manufacturing businesses",
  "Service businesses",
];

const breakdownFlow = [
  "SEO generates traffic",
  "Landing pages fail to convert",
  "Campaigns create inconsistent leads",
  "Customer journeys feel fragmented",
  "Follow-ups slow down",
  "Reporting becomes unclear",
  "Growth loses momentum",
];

const growthLayers = [
  {
    icon: Search,
    eyebrow: "Visibility Layer",
    title: "SEO Systems Designed for Competitive Bangalore Markets",
    body:
      "Search visibility in Bangalore requires technical SEO, content ecosystems, authority growth, Core Web Vitals optimization, and strategies aligned with how customers actually discover brands online.",
    links: [
      { to: "/seo-services", label: "Explore SEO & Growth Services" },
      { to: "/advanced-seo-performance-services", label: "Explore Advanced SEO & Performance" },
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Engagement Layer",
    title: "Brand Systems That Improve Recall and Audience Trust",
    body:
      "People remember brands before they remember services. We help Bangalore businesses strengthen recall through branding, content production, video systems, photography, and social engagement.",
    links: [
      { to: "/branding-agency-creative-services", label: "Explore Branding & Creative" },
      { to: "/video-production-photography-services", label: "Explore Video Production" },
      { to: "/social-media-marketing-services", label: "Explore Social Media Marketing" },
    ],
  },
  {
    icon: Megaphone,
    eyebrow: "Conversion Layer",
    title: "Performance Marketing Systems Focused on Measurable Growth",
    body:
      "Paid acquisition becomes expensive without proper conversion systems. We connect targeting, analytics, landing pages, testing, and automation to improve lead quality and acquisition efficiency.",
    links: [{ to: "/performance-marketing-services", label: "Explore Performance Marketing Services" }],
  },
  {
    icon: Globe2,
    eyebrow: "Experience Layer",
    title: "Website Experiences Built for Visibility, Conversion, and Scalability",
    body:
      "Your website should support acquisition, engagement, trust, and conversion. We create scalable web experiences around performance, usability, mobile behavior, search visibility, and CRO.",
    links: [{ to: "/website-design-services", label: "Explore Website Design Services" }],
  },
  {
    icon: Workflow,
    eyebrow: "Automation Layer",
    title: "CRM and Automation Systems That Reduce Operational Friction",
    body:
      "As businesses grow, disconnected reporting, slow follow-ups, manual workflows, and fragmented communication begin hurting scale. We implement CRM, automation, dashboards, and lifecycle systems.",
    links: [{ to: "/crm-setup-marketing-automation-services", label: "Explore CRM Setup Services" }],
  },
  {
    icon: Settings2,
    eyebrow: "Infrastructure Layer",
    title: "Technology Infrastructure Designed for Scalable Digital Growth",
    body:
      "Modern growth depends on systems that can scale. As a product engineering company in Bangalore, we build web apps, mobile apps, backend systems, and connected platforms for long-term operations.",
    links: [{ to: "/custom-mobile-web-app-development", label: "Explore Custom App Development" }],
  },
];

const systemBenefits = [
  "Visibility, acquisition, conversion, automation, and analytics move together.",
  "Marketing decisions are supported by cleaner data and better reporting.",
  "Campaigns connect back to landing pages, CRM workflows, and revenue signals.",
  "Teams spend less time stitching tools together and more time improving growth.",
];

const faqs = [
  {
    question: "What does Korvion Media do?",
    answer:
      "Korvion Media is a digital marketing company in Bangalore helping businesses improve visibility, acquisition, branding, automation, customer experience, and scalability through connected digital growth systems.",
  },
  {
    question: "How is Korvion Media different from a regular digital marketing company in Bangalore?",
    answer:
      "Most digital marketing companies focus on isolated services such as SEO or paid advertising. Korvion Media approaches growth as a connected ecosystem involving branding, SEO, performance marketing, websites, automation, analytics, and scalable infrastructure.",
  },
  {
    question: "Does Korvion Media provide both marketing and technology services?",
    answer:
      "Yes. Korvion Media combines SEO, branding, performance marketing, CRM automation, website development, and product engineering services into a single connected digital ecosystem.",
  },
  {
    question: "Does Korvion Media work with startups and SaaS companies in Bangalore?",
    answer:
      "Yes. Korvion Media works with startups, SaaS companies, e-commerce businesses, healthcare organizations, educational institutions, and growth-focused companies across Bangalore.",
  },
  {
    question: "What SEO services does Korvion Media provide in Bangalore?",
    answer:
      "Korvion Media provides SEO services in Bangalore, including technical SEO, content optimization, authority growth, e-commerce SEO, Core Web Vitals optimization, local SEO, and advanced SEO performance strategies.",
  },
  {
    question: "Does Korvion Media provide performance marketing services in Bangalore?",
    answer:
      "Yes. Korvion Media provides performance marketing services in Bangalore, including Google Ads, Meta Ads, conversion optimization, landing page systems, analytics integration, and scalable acquisition strategies.",
  },
  {
    question: "Can Korvion Media help businesses with CRM and automation systems?",
    answer:
      "Yes. Korvion Media helps businesses implement CRM systems, marketing automation workflows, reporting dashboards, WhatsApp automation, email journeys, and customer lifecycle systems.",
  },
  {
    question: "Does Korvion Media provide web and app development services?",
    answer:
      "Yes. Korvion Media provides website development, web application development, mobile app development, backend systems, and scalable product engineering solutions.",
  },
  {
    question: "Why do businesses in Bangalore require connected digital systems?",
    answer:
      "Bangalore businesses operate in highly competitive digital environments where visibility, customer acquisition, automation, and operational efficiency directly impact scalability. Connected systems help businesses scale more efficiently than disconnected marketing activities.",
  },
  {
    question: "How do I get started with Korvion Media?",
    answer:
      "You can contact Korvion Media to discuss growth challenges, operational bottlenecks, visibility goals, and digital requirements. Based on your business needs, we recommend connected growth systems designed for long-term scalability.",
  },
];

function BangaloreDigitalMarketingPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Nav />

        <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all animate-pulse-glow"
          >
            Talk to a Growth Expert
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <section className="section-isolate relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <FadeInSection className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  Built for Bangalore's fast-moving digital economy
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                  <SplitText splitBy="words" stagger={0.05}>
                    Best Digital Marketing Company in Bangalore for Businesses Ready to Scale Smarter
                  </SplitText>
                </h1>
                <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  Your business does not need more disconnected marketing activities. It needs systems that help
                  visibility, branding, acquisition, customer experience, automation, and infrastructure work together.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                    >
                      Talk to a Growth Expert
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </MagneticButton>
                  <a
                    href="tel:+919480156345"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-7 py-4 text-base font-semibold hover:border-primary hover:text-primary transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    Call +91 9480156345
                  </a>
                </div>
              </FadeInSection>

              <FadeInSection className="lg:col-span-4" direction="right" delay={0.2}>
                <div className="rounded-3xl border border-border bg-surface/50 p-7 shadow-elegant">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">Bangalore growth desk</p>
                  <p className="mt-3 text-2xl font-bold leading-tight">
                    Trusted by startups, SaaS companies, e-commerce brands, healthcare businesses, and growth-focused teams.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                    {["SEO", "Branding", "Performance", "Automation"].map((item) => (
                      <div key={item} className="rounded-xl border border-border bg-background/70 p-3">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section className="section-isolate py-24 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
            <FadeInSection className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The digital growth shift</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                Bangalore Businesses Are Competing in a Different Digital Environment
              </h2>
            </FadeInSection>
            <FadeInSection className="lg:col-span-7" delay={0.15}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Bangalore is one of India's most competitive digital markets. Businesses compete for visibility across
                  search engines, paid campaigns, social media, marketplaces, content platforms, and multiple customer
                  touchpoints every day.
                </p>
                <p>
                  Customers discover brands differently now. They search, compare, validate, and interact across several
                  platforms before making decisions.
                </p>
                <p>
                  Korvion Media helps businesses across Bangalore build connected digital growth systems where every
                  layer supports the next, from visibility and branding to conversion, automation, analytics, and infrastructure.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-xl font-semibold">
                Growth slows down when your digital systems stop communicating with each other.
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">How digital growth breaks</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                Most Businesses Do Not Lack Marketing. They Lack Connected Systems.
              </h2>
            </FadeInSection>

            <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-3">
                {breakdownFlow.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface/50 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-mono text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
              <FadeInSection className="lg:col-span-7" delay={0.2}>
                <div className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Many businesses already invest in digital marketing services in Bangalore. The real problem is that
                    systems often operate separately. Marketing teams work independently from developers. Paid campaigns
                    are disconnected from CRM workflows. Websites fail to support customer journeys.
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    Korvion Media simplifies digital growth by connecting visibility, acquisition, engagement, automation,
                    and infrastructure into one scalable ecosystem.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section className="section-isolate py-24 bg-surface border-y border-border overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The growth operating system</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                Built Around How Modern Businesses Actually Grow
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Businesses scale faster when branding, SEO, websites, paid acquisition, automation, analytics, and
                technology infrastructure work together instead of operating independently.
              </p>
            </FadeInSection>

            <div className="mt-14 grid lg:grid-cols-2 gap-6">
              {growthLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <TiltCard key={layer.title} tiltAmount={6}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="h-full rounded-2xl border border-border bg-background p-7 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{layer.eyebrow}</p>
                          <h3 className="mt-2 text-xl font-bold leading-snug">{layer.title}</h3>
                        </div>
                      </div>
                      <p className="mt-5 text-muted-foreground leading-relaxed">{layer.body}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {layer.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.to}
                            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-all"
                          >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <FadeInSection className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why connected systems matter</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                Scaling Digital Growth Requires More Than Individual Services
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Customers move between search engines, social media, paid campaigns, websites, videos, reviews,
                marketplaces, and multiple digital touchpoints before making decisions. Disconnected systems create
                inconsistent experiences.
              </p>
            </FadeInSection>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {systemBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-border bg-surface/40 p-6"
                >
                  <Check className="h-5 w-5 text-primary" />
                  <p className="mt-4 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-isolate py-24 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <FadeInSection className="lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Business ecosystems</p>
                <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                  Built for Bangalore's Modern Business Ecosystem
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Every business ecosystem requires different visibility strategies, acquisition systems, automation
                  maturity, and infrastructure requirements.
                </p>
              </FadeInSection>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="rounded-2xl border border-border bg-background p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Layers3 className="h-4 w-4" />
                      </span>
                      <span className="font-semibold">{industry}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <FadeInSection className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">About Korvion Media</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                A Digital Growth Company Built Around Connected Business Systems
              </h2>
            </FadeInSection>
            <FadeInSection className="lg:col-span-7" delay={0.15}>
              <div className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10">
                <BarChart3 className="h-8 w-8 text-primary" />
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Korvion Media was built around one simple observation: most businesses struggle online not because
                  they lack ambition, but because their digital systems operate separately.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  By combining SEO, branding, performance marketing, websites, automation, analytics, and product
                  engineering into connected systems, we help businesses across Bangalore build scalable digital
                  ecosystems designed for long-term growth.
                </p>
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 font-semibold">
                  The businesses scaling fastest today are building systems, not just campaigns.
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="section-isolate py-24 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <FadeInSection className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Questions Bangalore businesses ask us</h2>
            </FadeInSection>
            <Accordion type="single" collapsible className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-border bg-background px-6 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-isolate py-28 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <FadeInSection>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Build smarter</p>
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
                Build a Smarter Digital Growth Ecosystem for Your Business
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your business needs more than isolated digital services. It needs connected systems designed to improve
                visibility, acquisition, customer experience, automation, and operational scalability together.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                  >
                    Talk to Korvion Media
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
