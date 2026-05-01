import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { L as Link } from "./router-DUCwFFvs.js";
import { m as motion, A as ArrowUpRight } from "./Footer-Bv0muEkC.js";
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "relative rounded-3xl border border-border bg-surface/60 backdrop-blur-xl p-10 sm:p-16 shadow-elegant overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "— The next move is yours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]", children: [
              "Ready to scale your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "brand" }),
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Stop bleeding ad spend. Stop guessing. In 30 minutes we'll map exactly where your revenue is leaking — and how to engineer the system that fixes it." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all",
                  children: [
                    "Book a Free Strategy Call",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/work",
                  className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all",
                  children: "See proof of work"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground font-mono", children: "Limited slots · Reply within 24h · NDA-friendly" })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  CTASection as C
};
