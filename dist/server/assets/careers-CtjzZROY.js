import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { c as createLucideIcon, C as CodeXml, M as Megaphone, L as Link } from "./router-DUCwFFvs.js";
import { N as Nav, m as motion, A as ArrowUpRight, F as Footer } from "./Footer-Bv0muEkC.js";
import { S as SectionHeader } from "./SectionHeader-TRoimSue.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const Bot = createLucideIcon("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Palette = createLucideIcon("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);
const values = [{
  title: "Outcome over output",
  body: "We don't measure hours. We measure what moved."
}, {
  title: "Default to ownership",
  body: "If you see it, you own it. No handoffs, no excuses."
}, {
  title: "Speed × Craft",
  body: "We ship fast — and we ship beautiful. Both, not either."
}, {
  title: "Compound learners",
  body: "Every week you should be sharper than the last."
}];
const roles = [{
  icon: CodeXml,
  title: "Senior Full-Stack Engineer",
  type: "Full-time · Remote",
  tags: ["React", "Node", "AI"]
}, {
  icon: Palette,
  title: "Brand & Visual Designer",
  type: "Full-time · Mumbai",
  tags: ["Identity", "Web", "Motion"]
}, {
  icon: Megaphone,
  title: "Performance Marketing Lead",
  type: "Full-time · Remote",
  tags: ["Meta", "Google", "CRO"]
}, {
  icon: Bot,
  title: "AI Automation Engineer",
  type: "Contract · Remote",
  tags: ["LLMs", "n8n", "CRM"]
}, {
  icon: Palette,
  title: "Content Producer / Editor",
  type: "Full-time · Mumbai",
  tags: ["Reels", "Edit", "Story"]
}, {
  icon: Megaphone,
  title: "Account Strategist",
  type: "Full-time · Hybrid",
  tags: ["Strategy", "Client", "Ops"]
}];
function CareersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Careers", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "We don't hire employees.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "We recruit operators." })
      ] }), subtitle: "If you ship faster than you talk, sweat the details no one notices, and care more about the result than the role — we should talk." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.06
    }, className: "bg-background p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-primary mb-3", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-2", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: v.body })
    ] }, v.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/30 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Open Positions", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Find your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "arena." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-3", children: roles.map((r, i) => {
        const Icon = r.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "#apply", initial: {
          opacity: 0,
          y: 12
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.4,
          delay: i * 0.05
        }, className: "group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-glow-sm transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: r.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: r.type })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: r.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground", children: t }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" })
          ] })
        ] }, r.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 lg:px-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl font-bold", children: "Don't see your role?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "We're always looking for category-defining talent. Send your work, your wins, and the system you'd build first." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow", children: [
        "Join Korvion ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CareersPage as component
};
