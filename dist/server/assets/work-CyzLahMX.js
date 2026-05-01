import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { N as Nav, m as motion, F as Footer } from "./Footer-Bv0muEkC.js";
import { S as SectionHeader } from "./SectionHeader-TRoimSue.js";
import { C as CTASection } from "./CTASection-BXnDnISI.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DUCwFFvs.js";
const studies = [{
  tag: "D2C · Wellness",
  brand: "NordIQ Wellness",
  title: "From cluttered brand to category leader",
  metrics: [{
    v: "+312%",
    l: "Revenue in 90 days"
  }, {
    v: "4.7x",
    l: "Blended ROAS"
  }, {
    v: "−42%",
    l: "CAC reduction"
  }],
  problem: "Premium supplement brand stuck under a 1.4x ROAS, indistinguishable from 50 competitors, with creative fatigue and no retention loop.",
  solution: "Repositioned around a clear founder narrative, rebuilt the funnel from ad to upsell, and launched a creator-led UGC engine producing 40+ assets/month.",
  result: "Hit ₹3.2Cr revenue in Q2 with the same ad budget. LTV up 58%. Retention email flow now drives 28% of monthly revenue."
}, {
  tag: "SaaS · B2B",
  brand: "Vaulthaus Cloud",
  title: "Predictable pipeline, on autopilot",
  metrics: [{
    v: "−61%",
    l: "Cost per lead"
  }, {
    v: "8x",
    l: "SQL volume"
  }, {
    v: "23%",
    l: "Demo → close rate"
  }],
  problem: "Cold outbound was burning their SDRs. Inbound was non-existent. Ad spend was generating MQLs that never closed.",
  solution: "Designed a LinkedIn thought-leadership engine, content + SEO play, and an automated lead scoring + routing flow into HubSpot. Sales team focuses only on warm SQLs.",
  result: "Pipeline now compounds month over month. CAC payback dropped from 14 months to 6. Their SDR team was reallocated to expansion."
}, {
  tag: "Coach · Education",
  brand: "Strata Performance",
  title: "Personal brand to ₹2Cr launch",
  metrics: [{
    v: "₹2.1Cr",
    l: "Cohort revenue"
  }, {
    v: "21 days",
    l: "Launch window"
  }, {
    v: "1,400+",
    l: "Qualified applicants"
  }],
  problem: "World-class operator with deep expertise, zero distribution, no offer architecture, and no launch system.",
  solution: "Built the brand narrative, 90-day content runway, paid ad funnel, webinar engine and CRM automation end-to-end. Trained their team to run it on repeat.",
  result: "Sold out cohort in 3 weeks. Built an asset that now produces predictable launches every quarter."
}, {
  tag: "E-commerce · Fashion",
  brand: "Atelier 09",
  title: "Rebrand → revenue inflection",
  metrics: [{
    v: "2.8x",
    l: "AOV growth"
  }, {
    v: "+187%",
    l: "Repeat customer rate"
  }, {
    v: "₹1.6Cr",
    l: "Add'l revenue / yr"
  }],
  problem: "Beautiful product, forgettable brand. Couldn't justify premium pricing. Discounting was killing margin.",
  solution: "Strategic rebrand, editorial content engine, retention flows, and a redesigned high-converting Shopify build with bundles and post-purchase upsells.",
  result: "Stopped discounting entirely. Premium positioning held. Repeat purchase became their largest revenue lever."
}];
function WorkPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Case Studies", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Brands we built.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Numbers we moved." })
      ] }), subtitle: "No fluff slides. No vanity metrics. Just the problem, the system we engineered, and the revenue it printed." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 space-y-8", children: studies.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.6
    }, className: "relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 lg:p-12 hover:border-primary/40 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-[0.2em] text-primary", children: s.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl lg:text-4xl font-bold leading-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
            "— ",
            s.brand
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: s.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl lg:text-2xl font-bold text-gradient-primary", children: m.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-muted-foreground leading-tight", children: m.l })
          ] }, m.l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Problem", body: s.problem }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Solution", body: s.solution }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Result", body: s.result, highlight: true })
        ] })
      ] })
    ] }, s.brand)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Block({
  label,
  body,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative pl-5 border-l-2 ${highlight ? "border-primary" : "border-border"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs uppercase tracking-[0.2em] font-mono mb-2 ${highlight ? "text-primary" : "text-muted-foreground"}`, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `leading-relaxed ${highlight ? "text-foreground text-lg" : "text-muted-foreground"}`, children: body })
  ] });
}
export {
  WorkPage as component
};
