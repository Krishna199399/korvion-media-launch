"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  Clock,
  Eye,
  Lock,
  Globe2,
  Mail,
  Phone,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";

export function CookiePolicyClient() {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* HERO SECTION */}
        <section className="section-isolate relative pt-36 pb-16 overflow-hidden bg-background border-b border-border/60">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[35rem] w-[35rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6">
                <Cookie className="h-4 w-4" />
                TRANSPARENCY & COOKIE GOVERNANCE
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
                <SplitText splitBy="words" stagger={0.04}>
                  Cookie Policy
                </SplitText>
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="rounded-md border border-border bg-surface/50 px-3 py-1.5">
                  Effective Date: July 26, 2026
                </span>
                <span className="rounded-md border border-border bg-surface/50 px-3 py-1.5">
                  Last Updated: July 26, 2026
                </span>
              </div>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Welcome to{" "}
                <Link href="/" className="text-primary font-semibold hover:underline">
                  Korvion Media
                </Link>
                . This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website, what cookies are, why we use them, and your rights regarding their management.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* CONTENT CONTAINER */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
            {/* 1. WHAT ARE COOKIES & WHY WE USE THEM */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Cookie className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">1. What Are Cookies & Why We Use Them</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files stored on your computer or mobile device when you visit a website. They enable websites to remember user preferences, maintain session state, optimize site speed, and deliver a smooth browsing experience.
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold">Cookies Help Us:</h3>
                  <ul className="grid sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground bg-background/60 p-4 rounded-xl border border-border/50">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Remember preferences and region settings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Optimize website speed and user security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Understand visitor navigation patterns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Measure campaign performance & traffic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* 2. TYPES OF COOKIES WE USE */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <SlidersHorizontal className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">2. Types of Cookies We Collect</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-background/80 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Zap className="h-4 w-4" />
                      <span>Essential Cookies</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Necessary for basic website navigation, form security, session management, and load balancing. Cannot be turned off.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-background/80 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Eye className="h-4 w-4" />
                      <span>Performance & Analytics Cookies</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Collect anonymous usage metrics via Google Analytics, Search Console, and Microsoft Clarity to improve page experience.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-background/80 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Globe2 className="h-4 w-4" />
                      <span>Functional Cookies</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Remember your region, language settings, and saved form information for convenience across visits.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-background/80 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Marketing & Advertising Cookies</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Help measure campaign efficiency and remarketing audiences on Meta, Google Ads, and LinkedIn without accessing personal files.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 3. DURATION & PREFERENCE MANAGMENT */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">3. Cookie Duration & Browser Preferences</h2>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Session Cookies:</strong> Temporary files that are automatically deleted when you close your browser.
                  </p>
                  <p>
                    <strong className="text-foreground">Persistent Cookies:</strong> Remain stored on your device until they expire or are manually cleared via browser settings.
                  </p>
                  <p className="pt-2">
                    You can inspect, clear, or block cookies anytime directly in your web browser's Privacy or Security settings (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* CONTACT FOOTER CARD */}
            <FadeInSection>
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/50 to-background p-8 sm:p-10 text-center space-y-6">
                <h2 className="text-2xl font-bold">Questions Regarding Cookies?</h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  For more information about how we protect your personal data, please review our{" "}
                  <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">
                    Privacy Policy
                  </Link>.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href="mailto:info@korvionmedia.com"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    info@korvionmedia.com
                  </a>
                  <a
                    href="tel:+919480156345"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +91 94801 56345
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
