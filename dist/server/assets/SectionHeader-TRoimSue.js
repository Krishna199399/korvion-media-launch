import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { m as motion } from "./Footer-Bv0muEkC.js";
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: `inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" }),
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.05 },
        className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground",
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.1 },
        className: "mt-5 text-lg text-muted-foreground leading-relaxed",
        children: subtitle
      }
    )
  ] });
}
export {
  SectionHeader as S
};
