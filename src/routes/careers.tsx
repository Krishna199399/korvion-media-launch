import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Megaphone, Bot } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Korvion Media | Build the Next Era of Growth" },
      {
        name: "description",
        content:
          "Join Korvion Media. We hire operators, not employees. Open roles across engineering, design, performance marketing and AI automation.",
      },
      { property: "og:title", content: "Careers at Korvion Media" },
      { property: "og:description", content: "Operators wanted. Build revenue systems for the world's most ambitious brands." },
    ],
  }),
  component: CareersPage,
});

const values = [
  { title: "Outcome over output", body: "We don't measure hours. We measure what moved." },
  { title: "Default to ownership", body: "If you see it, you own it. No handoffs, no excuses." },
  { title: "Speed × Craft", body: "We ship fast — and we ship beautiful. Both, not either." },
  { title: "Compound learners", body: "Every week you should be sharper than the last." },
];

const roles = [
  { icon: Code2, title: "Senior Full-Stack Engineer", type: "Full-time · Remote", tags: ["React", "Node", "AI"] },
  { icon: Palette, title: "Brand & Visual Designer", type: "Full-time · Mumbai", tags: ["Identity", "Web", "Motion"] },
  { icon: Megaphone, title: "Performance Marketing Lead", type: "Full-time · Remote", tags: ["Meta", "Google", "CRO"] },
  { icon: Bot, title: "AI Automation Engineer", type: "Contract · Remote", tags: ["LLMs", "n8n", "CRM"] },
  { icon: Palette, title: "Content Producer / Editor", type: "Full-time · Mumbai", tags: ["Reels", "Edit", "Story"] },
  { icon: Megaphone, title: "Account Strategist", type: "Full-time · Hybrid", tags: ["Strategy", "Client", "Ops"] },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Careers"
            title={
              <>
                We don't hire employees.<br />
                <span className="text-gradient-primary">We recruit operators.</span>
              </>
            }
            subtitle="If you ship faster than you talk, sweat the details no one notices, and care more about the result than the role — we should talk."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background p-7"
              >
                <div className="font-mono text-xs text-primary mb-3">0{i + 1}</div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Open Positions" title={<>Find your <span className="text-gradient-primary">arena.</span></>} />
          <div className="mt-12 space-y-3">
            {roles.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.a
                  key={r.title}
                  href="#apply"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{r.title}</h3>
                      <p className="text-sm text-muted-foreground">{r.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="apply" className="py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">Don't see your role?</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We're always looking for category-defining talent. Send your work, your wins, and the system you'd build first.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow"
          >
            Join Korvion <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
