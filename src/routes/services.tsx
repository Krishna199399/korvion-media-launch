import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Korvion Media | Brand, Marketing, Tech & Automation" },
      {
        name: "description",
        content:
          "Eight integrated services — branding, content, social, performance, web, automation, e-learning and engineering. One team. One revenue system.",
      },
      { property: "og:title", content: "Korvion Services — Full-Stack Growth Under One Roof" },
      { property: "og:description", content: "Plug into the disciplines you need or run the full stack." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        
        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-12 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Services
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  Every discipline you need.
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.05} delay={0.3}>
                    Wired into one system.
                  </SplitText>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                From positioning to pipeline, creative to code. Each service is benefit-driven, outcome-tracked, and built to compound with the next.
              </motion.p>
            </FadeInSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-isolate pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <StaggerChildren className="space-y-6" staggerDelay={0.1}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <StaggerChild key={s.slug}>
                    <TiltCard
                      tiltAmount={4}
                      className="group relative rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                    >
                      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                        {/* Service Number */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="lg:col-span-1 font-mono text-sm text-primary"
                        >
                          {s.number}
                        </motion.div>
                        
                        {/* Icon & Title */}
                        <div className="lg:col-span-4">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                          >
                            <Icon className="h-6 w-6" />
                          </motion.div>
                          
                          <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl lg:text-4xl font-bold leading-tight"
                          >
                            {s.title}
                          </motion.h2>
                        </div>
                        
                        {/* Content */}
                        <div className="lg:col-span-7">
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl text-foreground leading-snug"
                          >
                            {s.headline}
                          </motion.p>
                          
                          <StaggerChildren className="mt-6 grid sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                            {s.outcomes.map((o, idx) => (
                              <StaggerChild key={idx}>
                                <motion.li
                                  whileHover={{ x: 4 }}
                                  className="flex items-start gap-3 text-muted-foreground"
                                >
                                  <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                                  <span>{o}</span>
                                </motion.li>
                              </StaggerChild>
                            ))}
                          </StaggerChildren>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-7 flex flex-wrap items-center gap-5"
                          >
                            <MagneticButton strength={0.15}>
                              <Link
                                to={
                                  s.slug === "social-media-marketing"
                                    ? "/social-media-marketing"
                                    : s.slug === "branding-creative"
                                    ? "/branding-agency-creative-services"
                                    : s.slug === "content-production"
                                    ? "/video-production-photography-services"
                                    : s.slug === "performance-marketing"
                                    ? "/performance-marketing-services"
                                    : s.slug === "web-digital-experience"
                                    ? "/website-design-services"
                                    : "/services/$serviceSlug"
                                }
                                params={
                                  s.slug === "social-media-marketing" || 
                                  s.slug === "branding-creative" || 
                                  s.slug === "content-production" ||
                                  s.slug === "performance-marketing" ||
                                  s.slug === "web-digital-experience"
                                    ? {}
                                    : { serviceSlug: s.slug }
                                }
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                              >
                                Explore {s.title}
                                <ArrowUpRight className="h-4 w-4" />
                              </Link>
                            </MagneticButton>
                            
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              or book a call →
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerChild>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
