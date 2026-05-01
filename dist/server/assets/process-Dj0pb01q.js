import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { N as Nav, m as motion, F as Footer } from "./Footer-Bv0muEkC.js";
import { S as SectionHeader } from "./SectionHeader-TRoimSue.js";
import { C as CTASection } from "./CTASection-BXnDnISI.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DUCwFFvs.js";
const phases = [{
  n: "01",
  title: "Audit & Discovery",
  duration: "Week 1–2",
  body: "We deep-dive your brand, funnel, analytics, tech stack, customer data and competitive landscape. You leave this phase with a brutally honest map of every leak in your revenue engine.",
  deliverables: ["Growth audit report", "Funnel & data diagnostics", "Competitive teardown", "Opportunity scoring"]
}, {
  n: "02",
  title: "Strategy & Planning",
  duration: "Week 2–3",
  body: "We architect your custom growth blueprint — positioning, messaging, channel mix, KPIs, tech stack and the 90-day roadmap. No 80-page deck. A working operating system.",
  deliverables: ["Growth blueprint", "Channel strategy", "KPI tree & dashboards", "90-day execution roadmap"]
}, {
  n: "03",
  title: "Execution & Scaling",
  duration: "Day 30 →",
  body: "Our pod ships. Brand, content, ads, web, automation — built and launched in tight weekly sprints. You get a single point of contact, weekly demos and full Loom transparency.",
  deliverables: ["Weekly sprint reviews", "Live production pipeline", "Always-on creative & ads", "Tech & automation rollouts"]
}, {
  n: "04",
  title: "Optimization & Growth",
  duration: "Ongoing",
  body: "Continuous testing, monthly business reviews, quarterly growth planning. We optimize for compounding — every system we run gets sharper, faster and more profitable each month.",
  deliverables: ["A/B testing engine", "Monthly business reviews", "Quarterly growth plans", "Retention & LTV systems"]
}];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our Process", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Four phases.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Built for compounding." })
      ] }), subtitle: "From day one, you'll know exactly what we're doing, why we're doing it, and what number it's expected to move." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-10 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: phases.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: `relative grid lg:grid-cols-2 gap-8 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute left-8 lg:left-1/2 top-6 -translate-x-1/2 flex h-4 w-4 items-center justify-center`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-4 w-4 rounded-full bg-primary/30 animate-pulse-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-2 w-2 rounded-full bg-primary shadow-glow-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pl-16 lg:pl-0 ${i % 2 === 1 ? "lg:pr-16 lg:[direction:ltr]" : "lg:pr-16 lg:text-right"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.2em] text-primary", children: p.duration }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-7xl font-display font-bold text-gradient-primary leading-none", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl font-bold", children: p.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pl-16 lg:pl-16 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: p.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 gap-2", children: p.deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border bg-surface/50 px-3 py-2 text-sm text-foreground", children: d }, d)) })
        ] })
      ] }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProcessPage as component
};
