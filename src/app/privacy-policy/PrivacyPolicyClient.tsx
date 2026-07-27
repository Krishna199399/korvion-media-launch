"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Cookie,
  Server,
  UserCheck,
  Globe2,
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { FadeInSection } from "@/components/animations/FadeInSection";

export function PrivacyPolicyClient() {
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
                <ShieldCheck className="h-4 w-4" />
                TRANSPARENCY & DATA PROTECTION
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
                <SplitText splitBy="words" stagger={0.04}>
                  Privacy Policy
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
                . Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* CONTENT CONTAINER */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="space-y-12">
              {/* SECTION 1: ABOUT KORVION MEDIA */}
              <FadeInSection>
                <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <FileText className="h-6 w-6" />
                    <h2 className="text-2xl font-bold text-foreground">1. About Korvion Media</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Korvion Media is a digital marketing company providing strategic and technology-driven business growth solutions. Our services include:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-foreground pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Search Engine Optimization (SEO)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Performance Marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Branding & Creative Services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Website Design & Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Content Production & Social Media</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>CRM & Marketing Automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Mobile & Web App Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Digital Growth Consulting</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    As part of delivering these services, we may collect certain personal and technical information that enables us to communicate with you, improve our services, and provide a secure user experience.
                  </p>
                </div>
              </FadeInSection>

              {/* SECTION 2: INFORMATION WE COLLECT */}
              <FadeInSection>
                <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Eye className="h-6 w-6" />
                    <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Personal Information</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      You may voluntarily provide personal information when you submit enquiry forms, request quotations, book consultations, subscribe to newsletters, apply for careers, or communicate via email/WhatsApp.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground list-disc list-inside bg-background/60 p-4 rounded-xl border border-border/50">
                      <li>Full Name & Company Name</li>
                      <li>Email Address & Phone Number</li>
                      <li>Business Website & Location</li>
                      <li>Job Title & Service Requirements</li>
                      <li>Voluntarily provided context details</li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <h3 className="text-lg font-bold">Technical Information & Automated Collection</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      When you browse our website, technical details such as IP address, browser type, device info, operating system, screen resolution, referral source, pages visited, session duration, and click behavior may be collected automatically to maintain website performance and security.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* SECTION 3: COOKIES & ANALYTICS */}
              <FadeInSection>
                <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Cookie className="h-6 w-6" />
                    <h2 className="text-2xl font-bold text-foreground">3. Cookies & Analytics Platforms</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies and trusted analytics services to understand visitor behavior and improve user experience.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-border/60 bg-background/80 p-4 text-center">
                      <p className="font-semibold text-sm">Google Analytics & Search Console</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-background/80 p-4 text-center">
                      <p className="font-semibold text-sm">Meta Pixel & Ads Tracking</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-background/80 p-4 text-center">
                      <p className="font-semibold text-sm">Microsoft Clarity & LinkedIn Tag</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    These platforms collect anonymized usage details to measure site traffic and conversion events. They do not grant us access to passwords, financial details, or sensitive personal files.
                  </p>
                </div>
              </FadeInSection>

              {/* SECTION 4: HOW WE USE YOUR INFORMATION */}
              <FadeInSection>
                <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Server className="h-6 w-6" />
                    <h2 className="text-2xl font-bold text-foreground">4. How We Use Your Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Information collected is used strictly for legitimate business purposes:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Responding to enquiries and scheduling consultations</li>
                    <li>Preparing proposals, quotations, and service agreements</li>
                    <li>Delivering requested digital marketing, web, and technology services</li>
                    <li>Improving website functionality, user experience, and technical security</li>
                    <li>Communicating essential service updates and newsletter insights (with consent)</li>
                    <li>Preventing fraudulent activities and maintaining regulatory compliance</li>
                  </ul>
                </div>
              </FadeInSection>

              {/* SECTION 5: DATA SHARING & SECURITY */}
              <FadeInSection>
                <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Lock className="h-6 w-6" />
                    <h2 className="text-2xl font-bold text-foreground">5. Data Sharing & Security Protection</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Korvion Media does not sell, rent, or trade your personal information</strong> to third parties for independent marketing purposes.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Service Providers:</strong> We may share data with trusted cloud infrastructure, hosting providers, CRM platforms, and security tools necessary for business operations.
                    </p>
                    <p>
                      <strong className="text-foreground">Security Measures:</strong> We employ SSL encryption, secure hosting infrastructure, firewall protections, and strict access controls to safeguard your data.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* SECTION 6: YOUR PRIVACY RIGHTS */}
              <FadeInSection>
                <div className="rounded-2xl border border-border bg-surface/30 p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <UserCheck className="h-6 w-6" />
                    <h2 className="text-2xl font-bold text-foreground">6. Your Privacy Rights</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you hold rights regarding your personal information, including the right to request access, request correction of inaccurate data, request deletion, withdraw consent, or object to processing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To exercise any privacy rights, reach out directly to our privacy officer via email at{" "}
                    <a href="mailto:korvionmedia@gmail.com" className="text-primary font-semibold hover:underline">
                      korvionmedia@gmail.com
                    </a>.
                  </p>
                </div>
              </FadeInSection>

              {/* SECTION 7: CONTACT US & CONSENT */}
              <FadeInSection>
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/50 to-background p-8 sm:p-10 text-center space-y-6">
                  <h2 className="text-2xl font-bold">Have Questions About Your Privacy?</h2>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    If you have questions or concerns regarding this Privacy Policy or our data handling practices, our team is here to assist you.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <a
                      href="mailto:korvionmedia@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all"
                    >
                      <Mail className="h-4 w-4" />
                      korvionmedia@gmail.com
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
          </div>
        </section>
      </div>
    </>
  );
}
