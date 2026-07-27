"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { services, getServiceBySlug } from "@/lib/services-data";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function ServiceDetailClient({ serviceSlug }: { serviceSlug: string }) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const getServiceHref = (slug: string) => {
    if (slug === "social-media-marketing") return "/social-media-marketing-services";
    if (slug === "branding-creative") return "/branding-agency-creative-services";
    if (slug === "content-production") return "/video-production-photography-services";
    if (slug === "performance-marketing") return "/performance-marketing-services";
    if (slug === "web-digital-experience") return "/website-design-services";
    if (slug === "crm-automation-tech") return "/crm-setup-marketing-automation-services";
    if (slug === "e-learning-animation") return "/e-learning-content-development";
    if (slug === "it-product-engineering") return "/custom-mobile-web-app-development";
    if (slug === "advanced-seo-performance") return "/best-seo-services";
    if (slug === "advanced-seo-cro") return "/advanced-seo-performance-services";
    return `/services/${slug}`;
  };

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <div className="mt-8 grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary tracking-[0.3em]">SERVICE / {service.number}</span>
                </div>
                <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
                  <SplitText
                    splitBy="words"
                    stagger={0.05}
                    delay={0.03}
                  >
                    {service.title}
                  </SplitText>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  {service.headline}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <MagneticButton>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all">
                      Book a strategy call <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </MagneticButton>
                  <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-all">
                    See related work
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-4"
              >
                <div className="relative rounded-3xl border border-border bg-surface p-8 shadow-elegant">
                  <motion.div
                    initial={{ rotate: 0, scale: 1 }}
                    whileInView={{ rotate: 360, scale: [1, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm"
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Ideal for</p>
                  <p className="mt-2 text-foreground leading-relaxed">{service.idealFor}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">What you get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Deliverables, not deliverables-shaped slides.</h2>
              <p className="mt-4 text-muted-foreground">Every engagement ships real assets your team can use, measure and scale on.</p>
            </motion.div>
            <StaggerChildren staggerDelay={0.05}>
              <ul className="space-y-3">
                {service.deliverables.map((d: string, i: number) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 hover:border-primary/40 transition-colors"
                  >
                    <Check className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{d}</span>
                  </motion.li>
                ))}
              </ul>
            </StaggerChildren>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold max-w-2xl">What changes for your business.</h2>
            </motion.div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {service.outcomes.map((o: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                    className="font-mono text-xs text-primary"
                  >
                    0{i + 1}
                  </motion.div>
                  <p className="mt-3 text-lg font-medium leading-snug">{o}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">How we work</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold max-w-2xl">A 4-step engagement, built for momentum.</h2>
            </motion.div>
            <div className="mt-10 grid md:grid-cols-4 gap-5">
              {service.process.map((p: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring" }}
                    className="font-mono text-xs text-primary"
                  >
                    STEP {i + 1}
                  </motion.div>
                  <h3 className="mt-2 text-xl font-bold">{p.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="section-isolate py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Explore more</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Other services</h2>
            </motion.div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {others.map((s: any) => {
                const OIcon = s.icon;
                const linkHref = getServiceHref(s.slug);

                return (
                  <TiltCard key={s.slug} tiltAmount={15}>
                    <Link
                      href={linkHref}
                      className="group block rounded-2xl border border-border bg-surface p-5 hover:border-primary/40 hover:shadow-glow-sm transition-all h-full"
                    >
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground"
                        >
                          <OIcon className="h-5 w-5" />
                        </motion.div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="mt-4 font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.tagline}</p>
                    </Link>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
