import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Star, Play, Search, Megaphone, MonitorPlay, Settings, Database, Network } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { RippleButton } from "@/components/animations/RippleButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRef } from "react";
import heroOrb from "@/assets/hero-orb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Digital Marketing Company for Business Growth | Korvion Media" },
      {
        name: "description",
        content:
          "Korvion Media is a digital growth company helping businesses scale through SEO, branding, performance marketing, automation, product engineering, and connected digital systems.",
      },
      { property: "og:title", content: "Best Digital Marketing Company for Business Growth | Korvion Media" },
      { property: "og:description", content: "Korvion Media is a digital growth company helping businesses scale through SEO, branding, performance marketing, automation, product engineering, and connected digital systems." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroOrb },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Digital Marketing Company for Business Growth | Korvion Media" },
      { name: "twitter:description", content: "Korvion Media is a digital growth company helping businesses scale through SEO, branding, performance marketing, automation, product engineering, and connected digital systems." },
      { name: "twitter:image", content: heroOrb },
    ],
  }),
  component: HomePage,
});

const problems = [
  "Traffic without conversions",
  "Content without reach",
  "Websites without performance",
  "Leads without follow-up systems",
  "Campaigns without customer retention",
  "Disconnected digital tools",
];

const solutions = [
  "Integrated growth ecosystems",
  "Scalable marketing systems",
  "Search visibility frameworks",
  "Conversion-focused experiences",
  "Automation-driven workflows",
  "Digital infrastructure designed for scale",
];

const ecosystems = [
  {
    title: "SEO & Organic Growth Systems",
    desc: "Search visibility compounds when technical optimization, authority building, content strategy, and user experience work together.",
    links: [
      { label: "SEO & Growth Services", to: "/seo-services" },
      { label: "Advanced SEO & Performance", to: "/advanced-seo-performance-services" },
    ],
    support: "We focus on sustainable visibility, qualified traffic, and measurable organic growth through SEO ecosystems designed for long-term business impact.",
  },
  {
    title: "Brand Visibility & Audience Engagement",
    desc: "Modern audiences connect with brands visually before they engage commercially. We help businesses build stronger brand perception through content, visuals, storytelling, and audience engagement.",
    links: [
      { label: "Branding & Creative", to: "/branding-agency-creative-services" },
      { label: "Content & Production", to: "/video-production-photography-services" },
      { label: "Social Media & Marketing", to: "/social-media-marketing" },
    ],
    support: "Every brand interaction should feel consistent, memorable, and strategically connected across platforms.",
  },
  {
    title: "Performance Marketing & Lead Acquisition",
    desc: "Paid growth works best when campaigns, landing experiences, targeting, and conversion systems operate together.",
    links: [
      { label: "Performance Marketing", to: "/performance-marketing-services" },
    ],
    support: "We focus on scalable acquisition systems that improve lead quality, conversion efficiency, and long-term revenue growth.",
  },
];

const infrastructure = [
  {
    title: "Web & Digital Experience",
    desc: "Your website should function as a growth platform, not a static brochure.",
    links: [{ label: "Web & Digital Experience", to: "/website-design-services" }],
    support: "Every experience is designed around usability, conversion, scalability, and customer engagement.",
    icon: MonitorPlay,
  },
  {
    title: "CRM, Automation & Business Systems",
    desc: "Manual workflows reduce efficiency and slow growth.",
    links: [{ label: "CRM, Automation & Tech", to: "/crm-setup-marketing-automation-services" }],
    support: "Connected systems improve visibility, customer journeys, reporting, follow-ups, and operational scalability.",
    icon: Database,
  },
  {
    title: "IT, Product & Engineering",
    desc: "Beyond marketing and automation, businesses also require scalable technology infrastructure.",
    links: [{ label: "IT, Product & Engineering", to: "/custom-mobile-web-app-development" }],
    support: "From web applications to backend infrastructure and DevOps systems, technology should support growth instead of creating future limitations.",
    icon: Network,
  },
];

const approach = [
  { step: "Discover", text: "Visibility gaps, growth barriers, conversion friction, infrastructure limitations, and audience behavior." },
  { step: "Build", text: "Brand systems, SEO frameworks, content ecosystems, acquisition strategies, websites, automation systems, and scalable infrastructure." },
  { step: "Optimize", text: "Search visibility, conversion performance, customer journeys, workflows, reporting systems, and operational efficiency." },
  { step: "Scale", text: "Authority growth, automation maturity, scalable architecture, analytics systems, and long term business expansion." },
];

const faqs = [
  {
    q: "What does Korvion Media do?",
    a: "Korvion Media is a digital growth company that helps businesses improve visibility, acquisition, engagement, automation, and digital infrastructure through connected marketing and technology systems.",
  },
  {
    q: "How is Korvion Media different from a regular digital marketing company?",
    a: "Most digital marketing companies focus on isolated services such as SEO or paid advertising. Korvion Media combines branding, performance marketing, automation, websites, and product engineering into scalable digital growth ecosystems.",
  },
  {
    q: "Does Korvion Media provide both marketing and technology services?",
    a: "Yes. Korvion Media combines SEO, branding, automation, CRM systems, web experiences, performance marketing, and product engineering capabilities under one connected ecosystem.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. Although Korvion Media operates from India, we work with businesses globally through remote collaboration, scalable systems, and integrated growth strategies.",
  },
  {
    q: "What industries does Korvion Media work with?",
    a: "Korvion Media works with startups, growing businesses, ecommerce brands, SaaS companies, healthcare organizations, and enterprises looking to improve digital growth and operational scalability.",
  },
];

function InteractiveFlow3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const z = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const nodes = [
    "SEO", "Content", "Social Media", "Paid Campaigns", 
    "Landing Pages", "CRM", "Automation", "Analytics", "Product Infrastructure"
  ];

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full flex items-center justify-center perspective-[1500px] overflow-hidden">
      <motion.div 
        style={{ rotateX, rotateY, z }}
        className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center transform-style-3d gap-6"
      >
        {nodes.map((node, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={node}
              initial={{ opacity: 0, x: isLeft ? -50 : 50, translateZ: -100 }}
              whileInView={{ opacity: 1, x: 0, translateZ: i * 20 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative z-10 p-5 rounded-2xl backdrop-blur-md bg-surface/80 border border-primary/20 shadow-glow-sm flex items-center gap-4 w-[280px] sm:w-[350px] ${isLeft ? 'self-start ml-[10%]' : 'self-end mr-[10%]'}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                {i + 1}
              </div>
              <span className="font-semibold text-lg">{node}</span>
              {i < nodes.length - 1 && (
                <div className={`absolute top-full h-12 w-0.5 bg-gradient-to-b from-primary to-transparent ${isLeft ? 'left-10' : 'left-10'}`} />
              )}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background z-20" />
    </div>
  );
}

function HomePage() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all animate-pulse-glow"
          >
            Get Free Growth Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden perspective-[1000px]">
          <div className="absolute inset-0 bg-hero-glow opacity-40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* 3D Background Elements */}
          <motion.div 
            animate={{ 
              rotateZ: [0, 360],
              rotateX: [20, 40, 20],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-primary/10 rounded-full transform-style-3d opacity-50"
          >
            <div className="absolute inset-20 border border-primary/20 rounded-full" />
            <div className="absolute inset-40 border border-primary/30 rounded-full border-dashed" />
          </motion.div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
            <div className="max-w-5xl text-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 12, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm uppercase tracking-[0.2em] text-primary font-mono mb-8"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                Disconnected marketing creates disconnected growth
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight transform-style-3d">
                <SplitText splitBy="words" stagger={0.05} delay={0.2}>
                  Build a Digital Growth System That Scales With Your Business
                </SplitText>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-6 text-sm font-semibold text-primary uppercase tracking-widest"
              >
                4.9/5 trusted by startups, ecommerce brands, SaaS companies, and growing businesses
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Most businesses invest in marketing. Few build systems that actually scale. <strong className="text-foreground">Korvion Media</strong> combines growth, performance, creativity, and technology to help businesses grow with clarity, consistency, and measurable impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
              >
                <MagneticButton as="div" strength={0.2}>
                  <RippleButton className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4.5 text-lg font-semibold text-primary-foreground shadow-glow transition-all">
                    <Link to="/contact" className="flex items-center gap-2">
                      Talk to a Growth Strategist
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </RippleButton>
                </MagneticButton>
                <MagneticButton as="div" strength={0.15}>
                  <RippleButton className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-8 py-4.5 text-lg font-semibold hover:border-primary hover:text-primary transition-all">
                    <Link to="/services" className="flex items-center gap-2">
                      Explore Growth Solutions
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </RippleButton>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISUAL TRANSITION SECTION (3D Flow) */}
        <section className="section-isolate py-32 border-t border-border bg-surface overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <h2 className="text-5xl font-bold leading-tight">
                Most businesses invest in <span className="text-gradient-primary">separate services.</span>
              </h2>
              <p className="mt-8 text-2xl text-muted-foreground leading-relaxed">
                Growth becomes scalable when every system supports the next.
              </p>
              <div className="mt-10">
                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all">
                  See our ecosystem <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeInSection>
            
            {/* 3D Flow Animation Container */}
            <InteractiveFlow3D />
          </div>
        </section>

        {/* THE DIGITAL GROWTH GAP - Interactive Split Section */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="max-w-3xl mb-20 text-center mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold">Why Businesses Struggle to Scale Online</h2>
              <p className="mt-6 text-xl text-muted-foreground">
                Many businesses already invest in marketing. But growth still feels inconsistent because SEO works separately from content, campaigns operate without conversion systems, and leads are not nurtured properly.
              </p>
              <p className="mt-6 text-lg font-semibold text-destructive">
                The problem is not always effort. It is a disconnected execution.
              </p>
            </FadeInSection>

            <div className="grid lg:grid-cols-2 gap-8 perspective-[2000px]">
              <TiltCard tiltAmount={5} className="p-10 rounded-3xl border border-destructive/20 bg-destructive/5 transform-style-3d">
                <h3 className="text-2xl font-bold mb-8 text-foreground translate-z-10">Common Growth Problems</h3>
                <ul className="space-y-4">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-4 translate-z-10">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-destructive font-bold shrink-0 mt-0.5">✕</span>
                      <span className="text-lg">{p}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>

              <TiltCard tiltAmount={5} className="p-10 rounded-3xl border border-primary/20 bg-primary/5 transform-style-3d relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-20" />
                <h3 className="text-2xl font-bold mb-8 text-foreground translate-z-10">What Korvion Media Builds</h3>
                <ul className="space-y-4">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-4 translate-z-10">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-lg font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 translate-z-10">
                  <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    See How Connected Growth Systems Work <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* GROWTH ECOSYSTEM */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="max-w-4xl mb-20 text-center mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Built Around How Modern Businesses <span className="text-gradient-primary">Actually Grow</span>
              </h2>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Growth today is no longer driven by a single channel or isolated strategy. As an integrated digital marketing company, we combine visibility, branding, acquisition, automation, and infrastructure into one connected ecosystem designed for long term scalability.
              </p>
            </FadeInSection>

            <div className="space-y-12">
              {ecosystems.map((eco, i) => (
                <ParallaxSection key={i} speed={0.1 * (i + 1)} className="p-10 lg:p-14 rounded-3xl border border-border bg-background shadow-elegant">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">{eco.title}</h3>
                  <p className="text-xl text-muted-foreground max-w-3xl mb-8">{eco.desc}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {eco.links.map((link, j) => (
                      <Link key={j} to={link.to} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors">
                        {link.label} <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                  
                  <p className="text-lg font-medium text-foreground mb-8">{eco.support}</p>
                  <Link to={eco.links[0].to} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-lg">
                    Explore {eco.title.split('&')[0]} <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </ParallaxSection>
              ))}
            </div>
          </div>
        </section>

        {/* DIGITAL INFRASTRUCTURE & SCALE */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Growth Without Infrastructure <span className="text-gradient-primary">Eventually Breaks</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                Marketing can create demand. But systems determine whether businesses can scale efficiently. Built for businesses ready to scale beyond marketing.
              </p>
            </FadeInSection>

            <div className="grid lg:grid-cols-3 gap-8">
              {infrastructure.map((inf, i) => {
                const Icon = inf.icon;
                return (
                  <TiltCard key={i} tiltAmount={10} className="p-8 rounded-3xl border border-border bg-surface/50 hover:border-primary/40 transition-all h-full flex flex-col">
                    <div className="h-14 w-14 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-glow-sm">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{inf.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{inf.desc}</p>
                    <div className="mb-6">
                      <Link to={inf.links[0].to} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-primary">
                        {inf.links[0].label} <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <p className="text-sm font-medium text-foreground">{inf.support}</p>
                  </TiltCard>
                )
              })}
            </div>

            <div className="mt-16 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all">
                Talk to a Product Engineering Expert <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* APPROACH LAYER */}
        <section className="section-isolate py-32 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Built Around Strategy, Execution, and <span className="text-gradient-primary">Scalable Growth</span>
              </h2>
            </FadeInSection>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {approach.map((item, i) => (
                <StaggerChild key={i}>
                  <div className="relative p-8 rounded-2xl border border-border bg-background h-full hover:border-primary/40 transition-colors overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <h3 className="text-2xl font-bold text-gradient-primary mb-4">{item.step}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ABOUT KORVION MEDIA */}
        <section className="section-isolate py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left" className="relative perspective-[1000px]">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5 }}
                className="rounded-3xl border border-border bg-surface p-10 transform-style-3d shadow-elegant"
              >
                <h2 className="text-4xl font-bold mb-6 translate-z-10">A Digital Growth Company Built Around Connected Systems</h2>
                <div className="space-y-4 text-lg text-muted-foreground translate-z-10">
                  <p>Korvion Media was built around one simple observation:</p>
                  <p className="text-foreground font-semibold">Most businesses struggle online not because they lack ambition, but because their digital systems operate in silos.</p>
                  <ul className="space-y-2 py-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> SEO teams work separately from developers.</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Paid campaigns lack conversion systems.</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Content is created without a distribution strategy.</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Automation is introduced too late.</li>
                  </ul>
                  <p>By combining branding, SEO, content, performance marketing, automation, web experiences, and product infrastructure, we help businesses create scalable digital systems designed for long-term growth.</p>
                </div>
              </motion.div>
            </FadeInSection>
            <FadeInSection direction="right">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Additional Solutions for Specialized Digital Experiences</h3>
                <p className="text-xl text-muted-foreground">Designed for businesses and organizations that require scalable learning, training, and engagement ecosystems.</p>
                <div className="grid grid-cols-2 gap-4">
                  {["E Learning & Animation", "LMS Content Production", "Interactive Learning Experiences", "Animated Training Systems"].map((sol, i) => (
                    <div key={i} className="p-4 rounded-xl border border-border bg-surface/50 flex items-center gap-3">
                      <Play className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-sm">{sol}</span>
                    </div>
                  ))}
                </div>
                <Link to="/e-learning-content-development" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Explore Learning Solutions <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <CTASection 
          title={<>Build a Smarter Digital <span className="text-gradient-primary">Growth Ecosystem</span></>}
          subtitle="The businesses growing fastest today are not relying on disconnected marketing activities. They are building systems where visibility, branding, conversion, automation, customer experience, and technology work together to support long-term growth."
          primaryBtn="Get Free Growth Consultation"
          secondaryBtn="Start Your Growth Journey"
        />

        {/* FAQ SECTION */}
        <section className="section-isolate py-32 bg-background border-t border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <FadeInSection className="text-center mb-16">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Frequently Asked <span className="text-gradient-primary">Questions</span>
              </h2>
            </FadeInSection>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-surface/50 px-8 overflow-hidden hover:border-primary/40 transition-all data-[state=open]:border-primary/60 data-[state=open]:shadow-glow-sm"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <span className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
