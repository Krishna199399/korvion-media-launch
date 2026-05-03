import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./animations/MagneticButton";
import { RippleButton } from "./animations/RippleButton";
import { FadeInSection } from "./animations/FadeInSection";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <FadeInSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-border bg-surface/60 backdrop-blur-xl p-10 sm:p-16 shadow-elegant overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">— The next move is yours</p>
              <h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
                Ready to scale your <span className="text-gradient-primary">brand</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Stop bleeding ad spend. Stop guessing. In 30 minutes we'll map exactly where your revenue is leaking — and how to engineer the system that fixes it.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton as="div" strength={0.2}>
                  <RippleButton className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all">
                    <Link to="/contact" className="flex items-center gap-2">
                      Book a Free Strategy Call
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </RippleButton>
                </MagneticButton>
                <MagneticButton as="div" strength={0.15}>
                  <RippleButton className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
                    <Link to="/work" className="flex items-center gap-2">
                      See proof of work
                    </Link>
                  </RippleButton>
                </MagneticButton>
              </div>
              <p className="mt-6 text-xs text-muted-foreground font-mono">
                Limited slots · Reply within 24h · NDA-friendly
              </p>
            </div>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}
