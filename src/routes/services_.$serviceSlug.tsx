import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { services, getServiceBySlug } from "@/lib/services-data";

export const Route = createFileRoute("/services/$serviceSlug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Korvion Media` : "Service — Korvion Media";
    const desc = s?.headline ?? "Premium growth services by Korvion Media.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <div className="text-center">
        <p className="text-muted-foreground">{error.message}</p>
        <Link to="/services" className="mt-4 inline-block text-primary">← Back to services</Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-primary">← Back to services</Link>
      </div>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary tracking-[0.3em]">SERVICE / {service.number}</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]"
              >
                {service.title}
              </motion.h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {service.headline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all">
                  Book a strategy call <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-all">
                  See related work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl border border-border bg-surface/50 p-8 shadow-elegant">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Ideal for</p>
                <p className="mt-2 text-foreground leading-relaxed">{service.idealFor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">What you get</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Deliverables, not deliverables-shaped slides.</h2>
            <p className="mt-4 text-muted-foreground">Every engagement ships real assets your team can use, measure and scale on.</p>
          </div>
          <ul className="space-y-3">
            {service.deliverables.map((d, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface/40 p-4"
              >
                <Check className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Outcomes</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold max-w-2xl">What changes for your business.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {service.outcomes.map((o, i) => (
              <div key={i} className="rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-colors">
                <div className="font-mono text-xs text-primary">0{i + 1}</div>
                <p className="mt-3 text-lg font-medium leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">How we work</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold max-w-2xl">A 4-step engagement, built for momentum.</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-surface/40 p-6">
                <div className="font-mono text-xs text-primary">STEP {i + 1}</div>
                <h3 className="mt-2 text-xl font-bold">{p.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Explore more</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Other services</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: s.slug }}
                  className="group rounded-2xl border border-border bg-surface/40 p-5 hover:border-primary/40 hover:shadow-glow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                      <OIcon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
