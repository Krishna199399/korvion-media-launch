import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { N as Nav, m as motion, A as ArrowUpRight, M as Mail, F as Footer } from "./Footer-Bv0muEkC.js";
import { S as SectionHeader } from "./SectionHeader-TRoimSue.js";
import { C as Check } from "./check-CF92aczL.js";
import { c as createLucideIcon } from "./router-DUCwFFvs.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Let's Build", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Tell us where you're stuck.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "We'll show you the system." })
      ] }), subtitle: "Drop your details. A senior strategist will reply within 24 hours with a custom growth angle — even if we don't end up working together." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5
      }, className: "lg:col-span-7 rounded-3xl border border-border bg-surface/40 p-8 lg:p-10", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Got it — we're on it." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "A strategist will reach out within 24 hours." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name", placeholder: "Jane Doe", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work Email", name: "email", type: "email", placeholder: "jane@brand.com", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", placeholder: "Brand name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Website", name: "website", placeholder: "brand.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "What do you need help with?", name: "service", options: ["Branding & creative", "Performance marketing", "Content & social", "Web & digital experience", "CRM & automation", "Full-stack growth retainer", "Something else"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Monthly marketing budget", name: "budget", options: ["< ₹1L / mo", "₹1L – ₹5L / mo", "₹5L – ₹15L / mo", "₹15L+ / mo", "Not sure yet"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Where are you stuck?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Tell us about your business and the bottleneck...", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all", children: [
          "Book My Strategy Call",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: "No spam. No pitch decks. Just one honest call." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: Mail, title: "Email", lines: ["korvionmedia@gmail.com"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: Phone, title: "Direct", lines: ["+91 73536 48428", "Mon–Fri · 10am–7pm IST"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: MapPin, title: "Studios", lines: ["Belgavi ·Karnataka", "Bengaluru ·Karnataka"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/30 bg-primary/5 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-primary", children: "Response time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-2xl font-bold", children: "Within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Every inquiry gets read by a senior strategist — not a sales rep." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "block text-sm font-medium mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, placeholder, required, className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" })
  ] });
}
function SelectField({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "block text-sm font-medium mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: name, name, defaultValue: "", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Choose one" }),
      options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
    ] })
  ] });
}
function InfoCard({
  icon: Icon,
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: title }),
      lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: l }, i))
    ] })
  ] }) });
}
export {
  ContactPage as component
};
