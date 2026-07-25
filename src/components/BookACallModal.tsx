"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  User,
} from "lucide-react";

interface BookACallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookACallModal({ isOpen, onClose }: BookACallModalProps) {
  const [activeTab, setActiveTab] = useState<"instant" | "form">("instant");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Growth Audit",
    message: "",
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container — Responsive max height & padding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-border bg-surface/95 backdrop-blur-2xl p-5 sm:p-7 shadow-2xl z-10 text-foreground custom-scrollbar"
          >
            {/* Glow ambient background */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-background transition-all"
              aria-label="Close contact modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="text-left mb-4 pr-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-mono text-primary mb-2">
                <Sparkles className="h-3 w-3" />
                Korvion Media Concierge
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Book a Strategy Call <span className="text-gradient-primary">With Our Team</span>
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Get direct access to senior growth strategists. Fast response guaranteed.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border/60 mb-5">
              <button
                onClick={() => setActiveTab("instant")}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 ${
                  activeTab === "instant"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Instant Contact Card
              </button>
              <button
                onClick={() => setActiveTab("form")}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 ${
                  activeTab === "form"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Schedule Session Form
              </button>
            </div>

            {/* Tab 1: Instant Contact Options */}
            {activeTab === "instant" && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="space-y-3.5"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  {/* Direct Phone Call Card */}
                  <a
                    href="tel:+919480156345"
                    className="group flex flex-col justify-between rounded-xl border border-border bg-background/80 p-4 hover:border-primary/50 hover:shadow-glow-sm transition-all"
                  >
                    <div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                        <Phone className="h-4 w-4" />
                      </div>
                      <h3 className="mt-3 font-bold text-sm group-hover:text-primary transition-colors">
                        Direct Phone Call
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-foreground">+91 9480156345</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Mon–Sat: 9 AM – 8 PM IST</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                      <span>Call Now</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>

                  {/* WhatsApp Instant Chat */}
                  <a
                    href="https://wa.me/919480156345?text=Hi%20Korvion%20Media,%20I'd%20like%20to%20book%20a%20growth%20strategy%20call."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-xl border border-border bg-background/80 p-4 hover:border-primary/50 hover:shadow-glow-sm transition-all"
                  >
                    <div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <h3 className="mt-3 font-bold text-sm group-hover:text-primary transition-colors">
                        WhatsApp Instant Chat
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-foreground">+91 9480156345</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Response in ~15 mins</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </div>

                {/* Email & Location details */}
                <div className="rounded-xl border border-border bg-surface/40 p-4 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Strategy Team Email</p>
                      <a href="mailto:hello@korvionmedia.com" className="text-xs font-semibold hover:text-primary transition-colors">
                        hello@korvionmedia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Studio Hubs</p>
                      <p className="text-xs font-semibold">Bangalore (Tech Hub) & Belagavi (Regional Studio)</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab("form")}
                  className="w-full rounded-xl bg-gradient-primary py-3 px-5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  Fill Booking Form Instead
                </button>
              </motion.div>
            )}

            {/* Tab 2: Schedule Form */}
            {activeTab === "form" && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
              >
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Booking Request Received!</h3>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Thank you, <span className="text-foreground font-semibold">{formData.name || "there"}</span>. Our strategy lead will reach out to you at <span className="text-primary font-mono">{formData.phone || formData.email}</span> within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold mb-1 text-muted-foreground">Your Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold mb-1 text-muted-foreground">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold mb-1 text-muted-foreground">Work Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold mb-1 text-muted-foreground">Primary Focus</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="Growth Audit">Free Growth Audit</option>
                          <option value="SEO & Performance">SEO & Organic Growth</option>
                          <option value="Performance Marketing">Paid Ads & ROAS Scale</option>
                          <option value="Branding & Creative">Branding & Video Production</option>
                          <option value="Website & App Dev">Website & Product Engineering</option>
                          <option value="CRM Automation">CRM & Marketing Automation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold mb-1 text-muted-foreground">Brief Note / Goals (Optional)</label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about your target goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background p-2.5 text-xs focus:border-primary focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-primary py-3 px-5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow transition-all flex items-center justify-center gap-2"
                    >
                      Confirm Call Request
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
