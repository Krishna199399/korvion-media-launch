import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Every discipline you need.<br />
                <span className="text-gradient-primary">Wired into one system.</span>
              </>
            }
            subtitle="From positioning to pipeline, creative to code. Each service is benefit-driven, outcome-tracked, and built to compound with the next."
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 hover:border-primary/40 hover:shadow-glow-sm transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1 font-mono text-sm text-primary">{s.number}</div>
                  <div className="lg:col-span-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{s.title}</h2>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-xl text-foreground leading-snug">{s.headline}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {s.outcomes.map((o, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <Check className="mt-1 h-4 w-4 text-primary shrink-0" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Discuss your {s.title.toLowerCase()} needs
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
