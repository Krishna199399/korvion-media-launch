import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { s as services, L as Link } from "./router-DUCwFFvs.js";
import { N as Nav, m as motion, A as ArrowUpRight, F as Footer } from "./Footer-Bv0muEkC.js";
import { S as SectionHeader } from "./SectionHeader-TRoimSue.js";
import { C as CTASection } from "./CTASection-BXnDnISI.js";
import { C as Check } from "./check-CF92aczL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Services", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Every discipline you need.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Wired into one system." })
      ] }), subtitle: "From positioning to pipeline, creative to code. Each service is benefit-driven, outcome-tracked, and built to compound with the next." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 space-y-6", children: services.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.5
      }, className: "group relative rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 hover:border-primary/40 hover:shadow-glow-sm transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1 font-mono text-sm text-primary", children: s.number }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold leading-tight", children: s.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-foreground leading-snug", children: s.headline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid sm:grid-cols-2 gap-3", children: s.outcomes.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-1 h-4 w-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
          ] }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$serviceSlug", params: {
              serviceSlug: s.slug
            }, className: "inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all", children: [
              "Explore ",
              s.title,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors", children: "or book a call →" })
          ] })
        ] })
      ] }) }, s.slug);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServicesPage as component
};
