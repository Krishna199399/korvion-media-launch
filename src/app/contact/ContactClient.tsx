"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Check } from "lucide-react";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SplitText } from "@/components/animations/SplitText";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { RippleButton } from "@/components/animations/RippleButton";
import { StaggerChildren, StaggerChild } from "@/components/animations/StaggerChildren";
import { FadeInSection } from "@/components/animations/FadeInSection";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add Web3Forms key & metadata
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1e22062e-7bee-43a4-b8c4-f6c6a218a1e0";
    formData.append("access_key", accessKey);
    formData.append("subject", "New Lead Inquiry - Korvion Media Contact Page");
    formData.append("from_name", "Korvion Media Website");
    if (formData.get("email")) {
      formData.append("replyto", formData.get("email") as string);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        console.warn("Web3Forms response:", data);
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="section-isolate relative pt-36 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary font-mono mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Let's Build
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                <SplitText splitBy="words" stagger={0.05}>
                  Tell us where you're stuck.
                </SplitText>
                <br />
                <span className="text-gradient-primary">
                  <SplitText splitBy="words" stagger={0.05} delay={0.3}>
                    We'll show you the system.
                  </SplitText>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                Drop your details. A senior strategist will reply within 24 hours with a custom growth angle — even if we don't end up working together.
              </motion.p>
            </FadeInSection>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-isolate pb-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
            {/* Form */}
            <FadeInSection className="lg:col-span-7" delay={0.2}>
              <div className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow mb-6"
                    >
                      <Check className="h-6 w-6" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold"
                    >
                      Got it — we're on it.
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 text-muted-foreground"
                    >
                      A strategist will reach out within 24 hours.
                    </motion.p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <StaggerChildren className="space-y-5" staggerDelay={0.08}>
                      <StaggerChild>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Full Name" name="name" placeholder="Jane Doe" required />
                          <Field label="Work Email" name="email" type="email" placeholder="jane@brand.com" required />
                        </div>
                      </StaggerChild>
                      
                      <StaggerChild>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Company" name="company" placeholder="Brand name" />
                          <Field label="Website" name="website" placeholder="brand.com" />
                        </div>
                      </StaggerChild>
                      
                      <StaggerChild>
                        <SelectField
                          label="What do you need help with?"
                          name="service"
                          options={[
                            "Branding & creative",
                            "Performance marketing",
                            "Content & social",
                            "Web & digital experience",
                            "CRM & automation",
                            "Full-stack growth retainer",
                            "Something else",
                          ]}
                        />
                      </StaggerChild>
                      
                      <StaggerChild>
                        <div>
                          <label className="block text-sm font-medium mb-2">Where are you stuck?</label>
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell us about your business and the bottleneck..."
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          />
                        </div>
                      </StaggerChild>
                      
                      <StaggerChild>
                        <MagneticButton strength={0.15}>
                          <RippleButton
                            type="submit"
                            disabled={submitting}
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all disabled:opacity-50"
                          >
                            {submitting ? "Sending Request..." : "Book My Strategy Call"}
                            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </RippleButton>
                        </MagneticButton>
                        <p className="mt-3 text-xs text-muted-foreground font-mono">No spam. No pitch decks. Just one honest call.</p>
                      </StaggerChild>
                    </StaggerChildren>
                  </form>
                )}
              </div>
            </FadeInSection>

            {/* Info Cards */}
            <StaggerChildren className="lg:col-span-5 space-y-4" staggerDelay={0.1}>
              <StaggerChild>
                <InfoCard icon={Mail} title="Email" lines={["korvionmedia@gmail.com"]} />
              </StaggerChild>
              <StaggerChild>
                <InfoCard icon={Phone} title="Direct" lines={["+91 9480156345", "Mon–Fri · 10am–7pm IST"]} />
              </StaggerChild>
              <StaggerChild>
                <InfoCard
                  icon={MapPin}
                  title="Belagavi Office"
                  lines={[
                    "RGJ4+8HF, Fourth Cross Rd, Bhagya Nagar, Angol, Belagavi, Karnataka 590006",
                  ]}
                />
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=RGJ4%2B8HF%2C+Fourth+Cross+Rd%2C+Bhagya+Nagar%2C+Angol%2C+Belagavi%2C+Karnataka+590006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <MapPin className="h-3.5 w-3.5" /> Get Directions on Google Maps
                  </a>
                  <Link
                    href="/digital-marketing-company-in-belagavi"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Belagavi Studio Page <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </StaggerChild>

              <StaggerChild>
                <InfoCard
                  icon={MapPin}
                  title="Bengaluru Hub"
                  lines={["Digital Growth Hub, Bengaluru, Karnataka, India"]}
                />
                <div className="mt-2">
                  <Link
                    href="/digital-marketing-company-in-bangalore"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Bengaluru Hub Page <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </StaggerChild>

              {/* Embedded Google Map */}
              <StaggerChild>
                <div className="overflow-hidden rounded-2xl border border-border bg-surface/40 p-2">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <iframe
                      title="Korvion Media Belagavi Office Location"
                      src="https://maps.google.com/maps?q=RGJ4%2B8HF%2C%20Fourth%20Cross%20Rd%2C%20Bhagya%20Nagar%2C%20Angol%2C%20Belagavi%2C%20Karnataka%20590006&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="h-full w-full border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-medium text-muted-foreground">
                      Belagavi Office: RGJ4+8HF, Fourth Cross Rd, Bhagya Nagar, Angol, Belagavi, Karnataka 590006
                    </p>
                  </div>
                </div>
              </StaggerChild>
            </StaggerChildren>
          </div>
        </section>
      </div>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
      <motion.select
        whileFocus={{ scale: 1.01 }}
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      >
        <option value="" disabled>Choose one</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </motion.select>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/40 transition-all"
    >
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
        <div>
          <h4 className="font-bold">{title}</h4>
          {lines.map((l, i) => (
            <p key={i} className="text-sm text-muted-foreground">{l}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
