import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { c as createLucideIcon, R as Route, s as services, L as Link } from "./router-DUCwFFvs.js";
import { N as Nav, m as motion, A as ArrowUpRight, F as Footer } from "./Footer-Bv0muEkC.js";
import { C as CTASection } from "./CTASection-BXnDnISI.js";
import { C as Check } from "./check-CF92aczL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
function ServiceDetailPage() {
  const {
    service
  } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-12 gap-10 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary tracking-[0.3em]", children: [
              "SERVICE / ",
              service.number
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
              opacity: 0,
              y: 20
            }, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.6
            }, className: "mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed", children: service.headline }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all", children: [
                "Book a strategy call ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-all", children: "See related work" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-surface/50 p-8 shadow-elegant", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono", children: "Ideal for" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground leading-relaxed", children: service.idealFor })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "What you get" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl font-bold", children: "Deliverables, not deliverables-shaped slides." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every engagement ships real assets your team can use, measure and scale on." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
        opacity: 0,
        x: 20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.4,
        delay: i * 0.05
      }, className: "flex items-start gap-3 rounded-xl border border-border bg-surface/40 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-5 w-5 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: d })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "Outcomes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl font-bold max-w-2xl", children: "What changes for your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-3 gap-6", children: service.outcomes.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-primary", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg font-medium leading-snug", children: o })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "How we work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl font-bold max-w-2xl", children: "A 4-step engagement, built for momentum." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-4 gap-5", children: service.process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-surface/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-primary", children: [
          "STEP ",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: p.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.detail })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "Explore more" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl font-bold", children: "Other services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: others.map((s) => {
        const OIcon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$serviceSlug", params: {
          serviceSlug: s.slug
        }, className: "group rounded-2xl border border-border bg-surface/40 p-5 hover:border-primary/40 hover:shadow-glow-sm transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OIcon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: s.tagline })
        ] }, s.slug);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServiceDetailPage as component
};
