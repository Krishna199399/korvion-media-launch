import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services-data";
import { MagneticButton } from "./animations/MagneticButton";
import RotatingText from "./RotatingText";

type NavLink = { to: "/" | "/services" | "/work" | "/process" | "/careers" | "/contact"; label: string; hasMenu?: boolean };

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/work", label: "Case Studies" },
  { to: "/process", label: "Process" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
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
        <Link to="/" className="flex items-center gap-1 group">
          <img 
            src="/src/assets/korvion-logo.png" 
            alt="Korvion Media" 
            width={240}
            height={53}
            className="h-[53px] w-auto transition-transform group-hover:scale-105"
          />
          <div className="hidden lg:block">
            <RotatingText
              texts={['Brand', 'Content', 'Social', 'Growth']}
              mainClassName="text-black overflow-hidden text-base font-semibold"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.hasMenu ? (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <MagneticButton
                  as="div"
                  strength={0.15}
                  className="relative group"
                >
                  <Link
                    to={l.to}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md inline-flex items-center gap-1"
                    activeProps={{ className: "text-foreground" }}
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
            ) : (
              <MagneticButton
                key={l.to}
                as="div"
                strength={0.15}
                className="relative group"
              >
                <Link
                  to={l.to}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md block"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
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
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            as="div"
            strength={0.2}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all duration-300"
            >
              Book a Call
              <span aria-hidden>→</span>
            </Link>
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
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            className="hidden lg:block absolute inset-x-0 top-full"
          >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-3">
          <div className="relative rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-elegant overflow-hidden">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-0">
              {/* Left intro */}
              <div className="lg:col-span-3 p-8 border-r border-border bg-surface/30">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Our services</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight">
                  Full-stack growth, <span className="text-gradient-primary">one team.</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Eight integrated disciplines — pick one or run the entire revenue system.
                </p>
                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  View all services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Services grid */}
              <div className="lg:col-span-9 p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2">
                  {services.map((s, i) => {
                    const Icon = s.icon;
                    // Use dedicated pages for specific services
                    let linkTo = "/services/$serviceSlug";
                    let linkParams: any = { serviceSlug: s.slug };
                    
                    if (s.slug === "social-media-marketing") {
                      linkTo = "/social-media-marketing";
                      linkParams = {};
                    } else if (s.slug === "branding-creative") {
                      linkTo = "/branding-agency-creative-services";
                      linkParams = {};
                    } else if (s.slug === "content-production") {
                      linkTo = "/video-production-photography-services";
                      linkParams = {};
                    }
                    
                    return (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link
                          to={linkTo as any}
                          params={linkParams}
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
            {links.map((l) =>
              l.hasMenu ? (
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
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm text-primary font-semibold"
                      >
                        All services →
                      </Link>
                      {services.map((s) => {
                        const Icon = s.icon;
                        // Use dedicated pages for specific services
                        let linkTo = "/services/$serviceSlug";
                        let linkParams: any = { serviceSlug: s.slug };
                        
                        if (s.slug === "social-media-marketing") {
                          linkTo = "/social-media-marketing";
                          linkParams = {};
                        } else if (s.slug === "branding-creative") {
                          linkTo = "/branding-agency-creative-services";
                          linkParams = {};
                        } else if (s.slug === "content-production") {
                          linkTo = "/video-production-photography-services";
                          linkParams = {};
                        }
                        
                        return (
                          <Link
                            key={s.slug}
                            to={linkTo as any}
                            params={linkParams}
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
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book a Strategy Call →
            </Link>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
