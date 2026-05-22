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

export const Route = createFileRoute("/digital-marketing-company-in-belagavi")({
  head: () => ({
    meta: [
      { title: "Best Digital Marketing Company in Belagavi | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media is a digital marketing company in Belagavi helping businesses grow through SEO, branding, websites, performance marketing, automation, and connected digital growth systems.",
      },
      { property: "og:title", content: "Best Digital Marketing Company in Belagavi | Korvion Media" },
      {
        property: "og:description",
        content:
          "Build connected digital growth systems for SEO, branding, websites, performance marketing, automation, and scalable technology in Belagavi.",
      },
    ],
  }),
  component: BelagaviDigitalMarketingPage,
});

const industries = [
  "Educational institutions",
  "Healthcare businesses",
  "Startups",
  "E-commerce brands",
  "Manufacturing businesses",
  "Service businesses",
  "Technology companies",
  "Local business ecosystems",
];

const breakdownFlow = [
  "A website gets launched",
  "Social media becomes inactive",
  "SEO rankings fluctuate",
  "Campaigns generate poor-quality leads",
  "Follow-ups slow down",
  "Reporting stays unclear",
  "Customer engagement drops",
];

const growthLayers = [
  {
    icon: Search,
    eyebrow: "Visibility Layer",
    title: "SEO Systems That Help Customers Discover Your Business Faster",
    body:
      "Search visibility directly influences how modern customers discover businesses online. Businesses across Belagavi increasingly compete through Google search, maps visibility, content ecosystems, and local digital authority.",
    links: [
      { to: "/seo-services", label: "Explore SEO & Growth Services" },
      { to: "/advanced-seo-performance-services", label: "Explore Advanced SEO & Performance" },
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Engagement Layer",
    title: "Branding and Content Systems That Build Digital Trust",
    body:
      "Customers trust businesses that feel professional, consistent, and recognizable online. Strong branding improves how customers remember your business across websites, social platforms, videos, campaigns, and digital experiences.",
    links: [
      { to: "/branding-agency-creative-services", label: "Explore Branding & Creative" },
      { to: "/video-production-photography-services", label: "Explore Video Production" },
      { to: "/social-media-marketing-services", label: "Explore Social Media Marketing" },
    ],
  },
  {
    icon: Megaphone,
    eyebrow: "Conversion Layer",
    title: "Performance Marketing Systems Built for Better Customer Acquisition",
    body:
      "Running ads alone does not guarantee business growth. Businesses need stronger landing experiences, audience targeting, analytics, campaign optimization, and customer acquisition workflows that improve conversion quality.",
    links: [{ to: "/performance-marketing-services", label: "Explore Performance Marketing Services" }],
  },
  {
    icon: Globe2,
    eyebrow: "Experience Layer",
    title: "Website Experiences That Improve Visibility and Customer Confidence",
    body:
      "Your website often becomes the first real interaction customers have with your business. We create modern website systems around performance, usability, mobile experience, customer engagement, and long-term scalability.",
    links: [{ to: "/website-design-services", label: "Explore Website Design Services" }],
  },
  {
    icon: Workflow,
    eyebrow: "Automation Layer",
    title: "Automation Systems That Help Businesses Operate More Efficiently",
    body:
      "As businesses grow, manual workflows begin slowing customer communication, lead management, reporting, and operations. We implement CRM systems, automation workflows, dashboards, WhatsApp systems, and scalable operational processes.",
    links: [{ to: "/crm-setup-marketing-automation-services", label: "Explore CRM Setup Services" }],
  },
  {
    icon: Settings2,
    eyebrow: "Infrastructure Layer",
    title: "Technology Infrastructure Built for Long-Term Business Expansion",
    body:
      "Modern businesses require connected digital infrastructure that supports scalability, operational flexibility, customer experience, and future growth. We build web apps, mobile apps, backend systems, and connected platforms.",
    links: [{ to: "/custom-mobile-web-app-development", label: "Explore Custom App Development" }],
  },
];

const systemBenefits = [
  "Visibility, branding, acquisition, automation, customer experience, and infrastructure support each other.",
  "Digital trust improves before the first customer conversation begins.",
  "Campaigns connect back to websites, lead systems, reporting, and operational workflows.",
  "Businesses spend less energy managing disconnected activities and more energy improving growth.",
];

const faqs = [
  {
    question: "What does Korvion Media do?",
    answer:
      "Korvion Media is a digital marketing company in Belagavi helping businesses improve visibility, branding, customer acquisition, automation, websites, and operational scalability through connected digital growth systems.",
  },
  {
    question: "How is Korvion Media different from a regular digital marketing company in Belagavi?",
    answer:
      "Most digital marketing companies focus on individual services such as SEO or paid advertising. Korvion Media helps businesses build connected ecosystems involving branding, websites, SEO, performance marketing, automation, analytics, and scalable infrastructure.",
  },
  {
    question: "Does Korvion Media provide both marketing and technology services?",
    answer:
      "Yes. Korvion Media combines SEO, branding, performance marketing, CRM automation, website development, and product engineering services into a single connected digital ecosystem.",
  },
  {
    question: "Does Korvion Media work with businesses in both Belagavi and Belgaum?",
    answer:
      "Yes. Korvion Media works with businesses across Belagavi and Belgaum, including startups, healthcare businesses, educational institutions, ecommerce brands, manufacturing companies, and service-based businesses.",
  },
  {
    question: "What SEO services does Korvion Media provide in Belagavi?",
    answer:
      "Korvion Media provides SEO services in Belagavi, including technical SEO, content optimization, local SEO, e-commerce SEO, authority growth, Core Web Vitals optimization, and advanced SEO performance strategies.",
  },
  {
    question: "Does Korvion Media provide performance marketing services in Belagavi?",
    answer:
      "Yes. Korvion Media provides performance marketing services in Belagavi, including Google Ads, Meta Ads, conversion optimization, landing page systems, analytics integration, and scalable acquisition strategies.",
  },
  {
    question: "Can Korvion Media help businesses with CRM and automation systems?",
    answer:
      "Yes. Korvion Media helps businesses implement CRM systems, marketing automation workflows, reporting dashboards, WhatsApp automation, email journeys, and customer lifecycle systems designed to improve operational efficiency.",
  },
  {
    question: "Does Korvion Media provide web and app development services?",
    answer:
      "Yes. Korvion Media provides website development, web application development, mobile app development, backend systems, and scalable product engineering solutions.",
  },
  {
    question: "Why do businesses in Belagavi require connected digital systems?",
    answer:
      "Businesses across Belagavi operate in increasingly competitive digital environments where visibility, customer trust, operational efficiency, and acquisition systems directly influence long-term growth. Connected systems help businesses scale more efficiently than disconnected digital activities.",
  },
  {
    question: "How do I get started with Korvion Media?",
    answer:
      "You can contact Korvion Media to discuss visibility goals, operational bottlenecks, customer acquisition challenges, and digital growth requirements. Based on your business needs, we recommend connected growth systems designed for long-term scalability.",
  },
];

function BelagaviDigitalMarketingPage() {
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
            Talk to a Digital Growth Expert
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
                  Helping Belagavi businesses grow beyond word-of-mouth
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                  <SplitText splitBy="words" stagger={0.05}>
                    Best Digital Marketing Company in Belagavi for Businesses Ready to Grow Beyond Local Limits
                  </SplitText>
                </h1>
                <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  Customers no longer choose businesses only through referrals or offline visibility. They search online,
                  compare brands, visit websites, explore social media, and build trust digitally before making decisions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                    >
                      Talk to a Digital Growth Expert
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
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">Belagavi growth desk</p>
                  <p className="mt-3 text-2xl font-bold leading-tight">
                    Supporting businesses, startups, educational institutions, healthcare brands, and growth-focused companies across Belagavi and Belgaum.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                    {["SEO", "Websites", "Branding", "Automation"].map((item) => (
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
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Business growth in Belagavi is changing</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                The Way Customers Discover Businesses in Belagavi Has Completely Changed
              </h2>
            </FadeInSection>
            <FadeInSection className="lg:col-span-7" delay={0.15}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Businesses across Belagavi are entering a very different digital environment compared to a few years ago.
                  Customers now expect professional websites, active digital presence, faster communication, better online
                  credibility, and stronger brand visibility before they engage with a business.
                </p>
                <p>
                  Even businesses built on strong offline reputation are now competing in digital-first customer journeys.
                  That shift creates a major opportunity for businesses ready to modernize how they build visibility and engagement.
                </p>
                <p>
                  Korvion Media helps businesses across Belagavi and Belgaum create connected digital ecosystems where
                  branding, SEO, websites, performance marketing, automation, and customer experience work together.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-xl font-semibold">
                Strong businesses are no longer built only through visibility in the city. They are built through visibility everywhere customers search.
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="section-isolate py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Why digital growth feels frustrating</p>
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
                    Many businesses invest in websites, social media, paid campaigns, or SEO services in Belagavi
                    individually. But when every activity works separately, growth becomes difficult to sustain.
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    Korvion Media simplifies digital growth by connecting visibility, customer acquisition, engagement,
                    automation, and operational systems into one scalable ecosystem.
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
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The modern business growth system</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                Businesses Scale Faster When Every Digital System Supports the Next
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Modern business growth is no longer driven by isolated marketing activities. Businesses grow stronger
                when branding, websites, acquisition, SEO, automation, and operations work together.
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
                Digital Growth Becomes Easier When Businesses Stop Treating Every System Separately
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Customers move across search, websites, reviews, videos, social profiles, and digital touchpoints before
                they trust a business. Disconnected systems create disconnected customer experiences.
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
                  Built for Businesses Across Belagavi's Evolving Digital Ecosystem
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Every business ecosystem requires different visibility strategies, customer acquisition systems,
                  operational workflows, and digital infrastructure.
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
                A Digital Growth Company Focused on Building Connected Business Ecosystems
              </h2>
            </FadeInSection>
            <FadeInSection className="lg:col-span-7" delay={0.15}>
              <div className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10">
                <BarChart3 className="h-8 w-8 text-primary" />
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Korvion Media was built around a simple reality: most businesses struggle digitally not because they
                  lack potential, but because every growth activity operates independently.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  By combining SEO, branding, websites, automation, performance marketing, analytics, and product
                  engineering into one ecosystem, we help businesses across Belagavi build scalable digital foundations.
                </p>
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 font-semibold">
                  The businesses growing fastest today are creating better customer systems, not just more marketing campaigns.
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="section-isolate py-24 bg-surface border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <FadeInSection className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Questions Belagavi businesses ask us</h2>
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
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Build stronger</p>
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
                Build a Stronger Digital Growth System for Your Business
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Modern business growth requires more than disconnected digital activities. It requires systems designed
                to improve visibility, branding, customer acquisition, automation, customer experience, and operational scalability together.
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
