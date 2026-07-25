"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./animations/MagneticButton";
import { RippleButton } from "./animations/RippleButton";
import { FadeInSection } from "./animations/FadeInSection";

import { useBookACall } from "@/context/BookACallContext";

interface CTASectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryBtn?: string;
  secondaryBtn?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
}: CTASectionProps = {}) {
  const { openBookACall } = useBookACall();

  return (
    <section className="relative py-20 overflow-hidden">
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
                {title ?? (<>Ready to scale your <span className="text-gradient-primary">brand</span>?</>)}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle ?? "Stop bleeding ad spend. Stop guessing. In 30 minutes we'll map exactly where your revenue is leaking — and how to engineer the system that fixes it."}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton as="div" strength={0.2}>
                  <RippleButton
                    onClick={openBookACall}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all cursor-pointer"
                  >
                    {primaryBtn ?? "Book a Free Strategy Call"}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </RippleButton>
                </MagneticButton>
                {secondaryBtn && (
                  <MagneticButton as="div" strength={0.15}>
                    <RippleButton className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
                      <Link href="/work" className="flex items-center gap-2">
                        {secondaryBtn}
                      </Link>
                    </RippleButton>
                  </MagneticButton>
                )}
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
