"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection } from "./animations/FadeInSection";
import { StaggerChildren, StaggerChild } from "./animations/StaggerChildren";
import logoImage from "@/assets/korvion-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden text-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Large Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-display font-bold tracking-tighter text-foreground/[0.04] whitespace-nowrap">
          KORVION
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <FadeInSection className="lg:col-span-3" direction="left">
            <Link href="/" className="flex items-center">
              <img 
                src={typeof logoImage === "string" ? logoImage : logoImage.src} 
                alt="Korvion Media" 
                width={216}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Korvion Media is a digital marketing company helping businesses build connected growth systems through SEO, branding, performance marketing, automation, websites, and scalable digital infrastructure.
            </p>

            <a
              href="mailto:korvionmedia@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-medium"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>korvionmedia@gmail.com</span>
            </a>

            <div className="mt-5 flex items-center gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </FadeInSection>

          {/* Categorized Menu Columns */}
          <StaggerChildren className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.08}>
            {/* Column 1: Growth & Marketing */}
            <StaggerChild>
              <FooterCol
                title="Growth & Marketing"
                links={[
                  { to: "/seo-services", label: "SEO Services" },
                  { to: "/advanced-seo-performance-services", label: "Advanced SEO & Performance" },
                  { to: "/performance-marketing-services", label: "Performance Marketing Services" },
                  { to: "/social-media-marketing-services", label: "Social Media Marketing Services" },
                ]}
              />
            </StaggerChild>

            {/* Column 2: Branding & Experience */}
            <StaggerChild>
              <FooterCol
                title="Branding & Experience"
                links={[
                  { to: "/branding-agency-creative-services", label: "Branding & Creative Services" },
                  { to: "/video-production-photography-services", label: "Content Production Services" },
                  { to: "/website-design-services", label: "Website Design Services" },
                  { to: "/e-learning-content-development", label: "E Learning Content Development" },
                ]}
              />
            </StaggerChild>

            {/* Column 3: Automation & Technology */}
            <StaggerChild>
              <FooterCol
                title="Automation & Technology"
                links={[
                  { to: "/crm-setup-marketing-automation-services", label: "CRM Setup Services" },
                  { to: "/crm-setup-marketing-automation-services", label: "Marketing Automation Services" },
                  { to: "/custom-mobile-web-app-development", label: "Custom Mobile App Development" },
                  { to: "/process", label: "Our Process" },
                ]}
              />
            </StaggerChild>

            {/* Column 4: Company & Locations */}
            <StaggerChild>
              <FooterCol
                title="Company & Locations"
                links={[
                  { to: "/services", label: "About Korvion Media" },
                  { to: "/work", label: "Our Work" },
                  { to: "/careers", label: "Careers at Korvion Media" },
                  { to: "/contact", label: "Contact Korvion Media" },
                  { to: "/digital-marketing-company-in-bangalore", label: "Bangalore Digital Marketing Company" },
                  { to: "/digital-marketing-company-in-belagavi", label: "Belagavi Digital Marketing Company" },
                  { to: "/services", label: "Services Overview" },
                ]}
              />
            </StaggerChild>
          </StaggerChildren>
        </div>

        {/* Bottom Bar */}
        <FadeInSection delay={0.2}>
          <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Korvion Media. All Rights Reserved.</p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span className="text-border hidden sm:inline">•</span>
              <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <span className="text-border hidden sm:inline">•</span>
              <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <span className="text-border hidden sm:inline">•</span>
              <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: {
    to: string;
    label: string;
  }[];
}) {
  return (
    <div>
      <h4 className="text-sm sm:text-base font-bold text-foreground tracking-tight">{title}</h4>
      <div className="h-0.5 w-8 bg-gradient-primary rounded-full mt-1.5 mb-4" />
      <ul className="space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link 
              href={l.to} 
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors block leading-relaxed"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
