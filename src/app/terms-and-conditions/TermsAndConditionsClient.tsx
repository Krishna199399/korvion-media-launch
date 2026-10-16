"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  Lock,
  Layers,
  HelpCircle,
  Briefcase,
  Shield,
  FileCheck,
  Mail,
  Phone,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";

export function TermsAndConditionsClient() {
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
                <FileCheck className="h-4 w-4" />
                SERVICE AGREEMENTS & GOVERNANCE
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
                <SplitText splitBy="words" stagger={0.04}>
                  Terms & Conditions
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
                . These Terms & Conditions ("Terms") govern your access to and use of our website, products, services, consultations, and digital platforms. By accessing our website or engaging with our services, you agree to comply with these terms.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* POLICY CONTENT */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
            {/* 1. ABOUT KORVION MEDIA */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Briefcase className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">1. About Korvion Media</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Korvion Media is a full-service digital marketing agency providing strategic, creative, and technology-driven solutions across SEO, performance marketing, branding, website design, app development, content, CRM, and marketing automation.
                </p>
                <p className="text-xs text-muted-foreground font-mono bg-background/60 p-3 rounded-lg border border-border/50">
                  Note: Specific project scope, timelines, and deliverables for each client are defined through formal proposals, invoices, or written service agreements.
                </p>
              </div>
            </FadeInSection>

            {/* 2. ACCEPTANCE OF TERMS & WEBSITE USAGE */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Shield className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">2. Acceptance of Terms & Website Rules</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing this website, submitting an enquiry, requesting consultations, or downloading resources, you agree to comply with these Terms and applicable laws.
                </p>

                <div className="space-y-3">
                  <h3 className="text-base font-bold">Prohibited Conduct:</h3>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground list-disc list-inside bg-background/60 p-4 rounded-xl border border-border/50">
                    <li>Violating applicable laws or regulations</li>
                    <li>Attempting unauthorized system/server access</li>
                    <li>Introducing malicious code, viruses, or scrapers</li>
                    <li>Reproducing content without authorization</li>
                    <li>Interfering with website security or performance</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* 3. PROPOSALS, QUOTATIONS & CLIENT RESPONSIBILITIES */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <FileText className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">3. Proposals, Quotations & Client Obligations</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Quotations and estimates are based on requirements provided at project initiation. Changes in project scope or timelines may require revised pricing and resource allocation.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground bg-background/60 p-4 rounded-xl border border-border/50">
                  <p className="font-semibold text-foreground">Client Responsibilities include:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Providing accurate project briefs and credentials promptly</li>
                    <li>Reviewing deliverables and giving clear feedback within agreed windows</li>
                    <li>Ensuring supplied materials do not infringe third-party rights</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* 4. INTELLECTUAL PROPERTY */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Layers className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property Rights</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  All designs, graphics, branding elements, code, strategy documents, and reports created by Korvion Media remain our intellectual property until full payment is settled. Upon final payment, ownership of approved custom deliverables is transferred according to project terms.
                </p>
              </div>
            </FadeInSection>

            {/* 5. PAYMENTS & REVISONS */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <CreditCard className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">5. Payment Terms & Scope Revisions</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Payment schedules are outlined in invoices and agreements. Delayed payments may result in work suspension or deliverable withholding. Requests exceeding approved scope require a scope addendum or separate quotation.
                </p>
              </div>
            </FadeInSection>

            {/* 6. CONFIDENTIALITY & GOVERNANCE */}
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Lock className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-foreground">6. Confidentiality & Legal Governance</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Korvion Media and clients agree to treat non-public business information confidentially. Neither party will disclose proprietary insights without prior consent unless required by law.
                </p>
              </div>
            </FadeInSection>

            {/* CONTACT FOOTER CARD */}
            <FadeInSection>
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/50 to-background p-8 sm:p-10 text-center space-y-6">
                <h2 className="text-2xl font-bold">Questions Regarding Our Terms?</h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  For questions or clarifications regarding our service agreements, reach out to our strategy team.
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
