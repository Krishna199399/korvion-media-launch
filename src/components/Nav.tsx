"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowUpRight, Building2, Store, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services-data";
import { MagneticButton } from "./animations/MagneticButton";
import { useBookACall } from "@/context/BookACallContext";
import RotatingText from "./RotatingText";
import logoImage from "@/assets/korvion-logo.png";

type NavLink = { to: string; label: string; menuType?: "services" | "locations" };

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about-us/", label: "About Us" },
  { to: "/services/", label: "Services", menuType: "services" },
  { to: "/locations/", label: "Locations", menuType: "locations" },
  { to: "/work/", label: "Case Studies" },
  { to: "/process/", label: "Process" },
  { to: "/contact/", label: "Contact" },
];

const locationItems = [
  {
    icon: Building2,
    city: "Bangalore Studio",
    title: "Digital Marketing Company in Bangalore",
    tagline: "Startups, SaaS platforms, D2C brands & enterprise teams across Bengaluru.",
    href: "/digital-marketing-company-in-bangalore/",
  },
  {
    icon: Store,
    city: "Belagavi Studio",
    title: "Digital Marketing Company in Belagavi",
    tagline: "Local businesses, institutions, healthcare & manufacturing across Belagavi & Belgaum.",
    href: "/digital-marketing-company-in-belagavi/",
  },
];

export function Nav() {
  const { openBookACall } = useBookACall();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServicesMenu = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesOpen(true);
    setLocationsOpen(false);
  };
  const scheduleServicesClose = () => {
    servicesTimerRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const openLocationsMenu = () => {
    if (locationsTimerRef.current) clearTimeout(locationsTimerRef.current);
    setLocationsOpen(true);
    setServicesOpen(false);
  };
  const scheduleLocationsClose = () => {
    locationsTimerRef.current = setTimeout(() => setLocationsOpen(false), 200);
  };

  const getServiceLink = (slug: string) => {
    if (slug === "social-media-marketing") return "/social-media-marketing-services/";
    if (slug === "branding-creative") return "/branding-agency-creative-services/";
    if (slug === "content-production") return "/video-production-photography-services/";
    if (slug === "performance-marketing") return "/performance-marketing-services/";
    if (slug === "web-digital-experience") return "/website-design-services/";
    if (slug === "crm-automation-tech") return "/crm-setup-marketing-automation-services/";
    if (slug === "e-learning-animation") return "/e-learning-content-development/";
    if (slug === "it-product-engineering") return "/custom-mobile-web-app-development/";
    if (slug === "advanced-seo-performance") return "/best-seo-services/";
    if (slug === "advanced-seo-cro") return "/advanced-seo-performance-services/";
    return `/services/${slug}/`;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group flex-shrink-0">
          <img 
            src={typeof logoImage === "string" ? logoImage : logoImage.src} 
            alt="Korvion Media" 
            width={240}
            height={53}
            className="h-[40px] lg:h-[53px] w-auto transition-transform group-hover:scale-105 flex-shrink-0"
          />
          <div className="hidden lg:block w-[80px] flex-shrink-0">
            <RotatingText
              texts={['Brand', 'Content', 'Social', 'Growth']}
              mainClassName="text-black overflow-hidden text-base font-semibold inline-block"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden inline-block"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            if (l.menuType === "services") {
              return (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={scheduleServicesClose}
                >
                  <MagneticButton as="div" strength={0.15} className="relative group">
                    <Link
                      href={l.to}
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md inline-flex items-center gap-1"
                    >
                      {l.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MagneticButton>
                </div>
              );
            }

            if (l.menuType === "locations") {
              return (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={openLocationsMenu}
                  onMouseLeave={scheduleLocationsClose}
                >
                  <MagneticButton as="div" strength={0.15} className="relative group">
                    <Link
                      href={l.to}
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md inline-flex items-center gap-1"
                    >
                      {l.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MagneticButton>
                </div>
              );
            }

            return (
              <MagneticButton key={l.to} as="div" strength={0.15} className="relative group">
                <Link
                  href={l.to}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md block"
                >
                  {l.label}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </MagneticButton>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919480156345"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/50 px-4 py-2 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all backdrop-blur-sm shadow-sm"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            Call Now
          </a>

          <MagneticButton as="div" strength={0.2}>
            <button
              onClick={openBookACall}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              Get A Quote
              <span aria-hidden>→</span>
            </button>
          </MagneticButton>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Services Mega Menu (desktop) */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={openServicesMenu}
            onMouseLeave={scheduleServicesClose}
            className="hidden lg:block absolute inset-x-0 top-full"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-3">
              <div className="relative rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="relative grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-3 p-8 border-r border-border bg-surface/30">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Our services</p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight">
                      Full-stack growth, <span className="text-gradient-primary">one team.</span>
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Eight integrated disciplines — pick one or run the entire revenue system.
                    </p>
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      View all services <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="lg:col-span-9 p-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2">
                      {services.map((s, i) => {
                        const Icon = s.icon;
                        const linkTo = getServiceLink(s.slug);
                        
                        return (
                          <motion.div
                            key={s.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            <Link
                              href={linkTo}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-4 rounded-xl p-3 hover:bg-surface/60 transition-colors"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-sm">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</p>
                                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                                <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{s.tagline}</p>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Locations Dropdown Menu (desktop) */}
      <AnimatePresence>
        {locationsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={openLocationsMenu}
            onMouseLeave={scheduleLocationsClose}
            className="hidden lg:block absolute inset-x-0 top-full"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-3">
              <div className="relative rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-elegant overflow-hidden">
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="relative grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 p-8 border-r border-border bg-surface/30">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Studios & Hubs</p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight">
                      Regional Growth <span className="text-gradient-primary">Studios.</span>
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Explore our growth studios in Bangalore and Belagavi, engineered for connected digital systems.
                    </p>
                    <Link
                      href="/locations"
                      onClick={() => setLocationsOpen(false)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      View All Locations Hub <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="lg:col-span-8 p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {locationItems.map((loc, i) => {
                        const Icon = loc.icon;
                        return (
                          <motion.div
                            key={loc.href}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.08 }}
                          >
                            <Link
                              href={loc.href}
                              onClick={() => setLocationsOpen(false)}
                              className="group flex items-start gap-4 rounded-xl p-4 border border-border/60 hover:border-primary/40 bg-surface/30 hover:bg-surface/70 transition-all shadow-glow-sm"
                            >
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">{loc.city}</span>
                                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <p className="font-bold text-foreground group-hover:text-primary transition-colors mt-0.5">{loc.title}</p>
                                <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{loc.tagline}</p>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => {
                if (l.menuType === "services") {
                  return (
                    <div key={l.to}>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>{l.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-3 mb-2 border-l border-border pl-3 flex flex-col">
                          <Link
                            href="/services"
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 text-sm text-primary font-semibold"
                          >
                            All services →
                          </Link>
                          {services.map((s) => {
                            const Icon = s.icon;
                            const linkTo = getServiceLink(s.slug);
                            
                            return (
                              <Link
                                key={s.slug}
                                href={linkTo}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                                  <Icon className="h-3.5 w-3.5" />
                                </span>
                                {s.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (l.menuType === "locations") {
                  return (
                    <div key={l.to}>
                      <button
                        onClick={() => setMobileLocationsOpen((v) => !v)}
                        className="w-full flex items-center justify-between px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>{l.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileLocationsOpen && (
                        <div className="ml-3 mb-2 border-l border-border pl-3 flex flex-col gap-1">
                          <Link
                            href="/locations"
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 text-sm text-primary font-semibold"
                          >
                            Locations Hub →
                          </Link>
                          {locationItems.map((loc) => {
                            const Icon = loc.icon;
                            return (
                              <Link
                                key={loc.href}
                                href={loc.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                                  <Icon className="h-3.5 w-3.5" />
                                </span>
                                {loc.city}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.to}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
                <button
                  onClick={() => {
                    setOpen(false);
                    openBookACall();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground cursor-pointer shadow-glow-sm"
                >
                  Get A Quote →
                </button>

                <a
                  href="tel:+919480156345"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-surface/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Call Now (+91 9480156345)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
