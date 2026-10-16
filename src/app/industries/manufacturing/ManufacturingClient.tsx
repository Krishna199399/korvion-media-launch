'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Factory,
  Cog,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Search,
  ShieldCheck,
  Layers,
  Globe,
  Users,
  BarChart3,
  ChevronDown,
  Package,
  Cpu,
  FileText,
  Sparkles,
  PhoneCall,
  Send,
  Building2,
  Boxes,
  Truck,
  Flame,
  Award,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { SectionHeader } from '@/components/SectionHeader';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { RippleButton } from '@/components/animations/RippleButton';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { StaggerChildren, StaggerChild } from '@/components/animations/StaggerChildren';

const industriesList = [
  'Food, Beverage & Nutraceutical Manufacturing',
  'Chemicals, Pharmaceuticals & Personal Care',
  'Packaging, Paper & Printing',
  'Plastics, Polymers & Rubber Products',
  'Automotive, Agricultural & Mobility Components',
  'Industrial Machinery, Equipment & Flow-Control Systems',
  'Electrical, Electronics & Renewable Energy Equipment',
  'Metal Fabrication, Fasteners & Industrial Hardware',
  'Construction Materials, Glass, Ceramics & Sanitaryware',
  'Textiles, Leather, Footwear & Protective Products',
  'Other manufacturing industry',
];

const businessChallenges = [
  'Finding customers and generating enquiries',
  'Finding distributors, dealers or wholesale buyers',
  'Improving product visibility',
  'Launching a product or entering a market',
  'Increasing online or direct sales',
  'Expanding into new regions or export markets',
  'Other',
];

const coreServices = [
  {
    title: 'SEO Services',
    desc: 'Improve organic visibility for product, application and buyer-intent searches.',
    href: '/best-seo-services/',
    icon: Search,
  },
  {
    title: 'Advanced SEO & Performance',
    desc: 'Strengthen technical foundations, search performance and organic growth opportunities.',
    href: '/advanced-seo-performance-services/',
    icon: BarChart3,
  },
  {
    title: 'Performance Marketing',
    desc: 'Reach relevant audiences through paid campaigns designed around measurable business goals.',
    href: '/performance-marketing-services/',
    icon: TrendingUp,
  },
  {
    title: 'Social Media Marketing',
    desc: 'Build brand visibility, communicate product value and support audience engagement.',
    href: '/social-media-marketing-services/',
    icon: Users,
  },
  {
    title: 'Branding & Creative Services',
    desc: 'Develop a consistent brand identity and clearer product communication across touchpoints.',
    href: '/branding-agency-creative-services/',
    icon: Sparkles,
  },
  {
    title: 'Video Production & Photography',
    desc: 'Present products, facilities, capabilities and applications through visual content.',
    href: '/video-production-photography-services/',
    icon: Layers,
  },
  {
    title: 'Website Design',
    desc: 'Create a professional digital presence that helps buyers evaluate products and enquire.',
    href: '/website-design-services/',
    icon: Globe,
  },
  {
    title: 'CRM & Marketing Automation',
    desc: 'Organise incoming enquiries, follow-ups and marketing workflows to support sales teams.',
    href: '/crm-setup-marketing-automation-services/',
    icon: Cog,
  },
];

const specializedServices = [
  {
    title: 'Product Packaging & Label Design',
    desc: 'Create packaging and label concepts that communicate product benefits, positioning and brand identity.',
    linkText: 'Explore creative services →',
    href: '/branding-agency-creative-services/',
    icon: Package,
  },
  {
    title: 'Product Catalogues & Technical Brochures',
    desc: 'Present product ranges, specifications, applications and capabilities in buyer-friendly sales materials.',
    linkText: 'Explore branding and creative →',
    href: '/branding-agency-creative-services/',
    icon: FileText,
  },
  {
    title: 'Product Page & Application Content',
    desc: 'Build product-specific content around use cases, specifications, industries served and buyer questions.',
    linkText: 'Explore SEO services →',
    href: '/best-seo-services/',
    icon: Search,
  },
  {
    title: 'B2B Lead Generation for Manufacturers',
    desc: 'Plan targeted campaigns and enquiry journeys to attract potential business buyers and qualified prospects.',
    linkText: 'Explore performance marketing →',
    href: '/performance-marketing-services/',
    icon: Users,
  },
  {
    title: 'Distributor & Dealer Acquisition',
    desc: 'Support channel-partner discovery through targeted campaigns, dedicated landing pages and enquiry workflows.',
    linkText: 'Contact for channel strategy →',
    href: '/contact/',
    icon: Truck,
  },
  {
    title: 'Export Market Digital Readiness',
    desc: 'Prepare digital touchpoints for international buyers with clear product information, credibility signals and enquiry routes.',
    linkText: 'Explore export readiness →',
    href: '/contact/',
    icon: Globe,
  },
  {
    title: 'B2B Marketplace & Directory Visibility',
    desc: 'Improve product presentation and discoverability on relevant business directories and marketplace profiles.',
    linkText: 'Explore marketplace strategy →',
    href: '/services/',
    icon: Boxes,
  },
  {
    title: 'Manufacturing Marketing Readiness Assessment',
    desc: 'Review product messaging, website, discoverability, sales materials and enquiry pathways to identify priorities.',
    linkText: 'Request assessment →',
    href: '#enquiry-form',
    icon: Compass,
  },
  {
    title: 'Lead Qualification & Follow-up Workflows',
    desc: 'Structure enquiry capture, lead categorisation, follow-up reminders and CRM workflows for sales teams.',
    linkText: 'Explore CRM and automation →',
    href: '/crm-setup-marketing-automation-services/',
    icon: Cog,
  },
  {
    title: 'Marketing Performance & Conversion Tracking',
    desc: 'Measure enquiry sources, lead quality, conversion actions and channel contribution to support better decisions.',
    linkText: 'Explore advanced SEO →',
    href: '/advanced-seo-performance-services/',
    icon: BarChart3,
  },
];

const productApproaches = [
  {
    business: 'Industrial components and equipment',
    priorities: 'Technical product pages, application-led SEO, qualified B2B enquiries and procurement visibility',
  },
  {
    business: 'Food, beverage and consumer products',
    priorities: 'Product positioning, packaging communication, brand visibility and distribution',
  },
  {
    business: 'Private-label and contract manufacturers',
    priorities: 'Capability presentation, certifications, buyer qualification and partnership enquiries',
  },
  {
    business: 'Products sold through distributors',
    priorities: 'Dealer acquisition, regional targeting, channel support and product catalogues',
  },
  {
    business: 'Manufacturers selling online',
    priorities: 'Product discovery, e-commerce conversion and repeat-purchase opportunities',
  },
  {
    business: 'Export-oriented manufacturers',
    priorities: 'International visibility, export-focused product information and buyer outreach',
  },
];

const industrySectors = [
  {
    id: 1,
    title: 'Food, Beverage & Nutraceutical Manufacturing',
    stat: 'US$382.24B',
    statLabel: 'Indian food processing market, FY2025 (Projected US$689B by FY2034)',
    source: 'IBEF',
    desc: 'Processed foods, beverages, ingredients and nutraceuticals create massive opportunities for manufacturers targeting distributors, retailers, private-label buyers and export markets.',
    focus: 'Product positioning, packaging, product pages, buyer enquiries and distribution visibility.',
  },
  {
    id: 2,
    title: 'Chemicals, Pharmaceuticals & Personal Care',
    stat: 'US$250B',
    statLabel: 'Indian chemicals sector estimate, 2024 (US$30.47B pharma exports)',
    source: 'IBEF / Ministry of Commerce',
    desc: 'Chemical ingredients, pharma products and personal-care manufacturing serve distinct procurement buyers, demanding rigorous technical documentation and verified credentials.',
    focus: 'Technical product content, capability pages, relevant credentials and qualified B2B enquiries.',
  },
  {
    id: 3,
    title: 'Packaging, Paper & Printing',
    stat: 'US$92B',
    statLabel: 'Projected Indian packaging industry value by FY2030 (9% CAGR)',
    source: 'IBEF',
    desc: 'Booming FMCG, food, pharmaceuticals and e-commerce supply chains create continuous demand for custom packaging formats, corrugation, flexible films and printing solutions.',
    focus: 'Packaging catalogues, customisation options, application pages and buyer-specific enquiry journeys.',
  },
  {
    id: 4,
    title: 'Plastics, Polymers & Rubber Products',
    stat: 'US$12.5B',
    statLabel: 'Indian plastics exports, FY2024–25 across 200+ countries',
    source: 'IBEF',
    desc: 'Supplying markets globally from industrial components and consumer items to specialized polymer films, requiring technical transparency and export discoverability.',
    focus: 'Material and application pages, custom manufacturing capabilities, product specifications and export visibility.',
  },
  {
    id: 5,
    title: 'Automotive, Agricultural & Mobility Components',
    stat: 'US$80.2B',
    statLabel: 'Indian auto component turnover, FY24–25 (US$22.9B exports, +9.6% YoY)',
    source: 'ACMA',
    desc: 'OEM sourcing, EV transition, localization and precision agricultural machinery components make capability articulation essential for tier-1 and tier-2 suppliers.',
    focus: 'Component-level pages, technical capabilities, OEM targeting and qualified supplier enquiries.',
  },
  {
    id: 6,
    title: 'Industrial Machinery, Equipment & Flow-Control Systems',
    stat: 'US$122.43B',
    statLabel: "India's engineering exports, FY2025–26 (+4.86% year-on-year)",
    source: 'EEPC India',
    desc: 'Engineering machinery, pumps, valves, and heavy equipment require buyers to compare rigorous technical tolerances, operational duty cycles and factory capacities.',
    focus: 'Application-led SEO, equipment pages, technical brochures and quotation requests.',
  },
  {
    id: 7,
    title: 'Electrical, Electronics & Renewable Energy Equipment',
    stat: '100 GW',
    statLabel: 'Solar PV module manufacturing capacity listed under ALMM (Up from 2.3 GW)',
    source: 'Press Information Bureau',
    desc: 'Clean energy transition, electrical distribution boards, switchgear, and solar infrastructure represent one of the fastest expanding manufacturing verticals in India.',
    focus: 'Product specifications, technical resources, installer and distributor outreach, and project enquiries.',
  },
  {
    id: 8,
    title: 'Metal Fabrication, Fasteners & Industrial Hardware',
    stat: '168.4M tonnes',
    statLabel: "India's crude steel production, FY2025–26 (+10.7% year-on-year)",
    source: 'PIB / Ministry of Steel',
    desc: 'Crucial upstream backbone for construction, infrastructure, and heavy fabrication. Buyers require clarity on tensile strengths, certifications, tolerances and delivery lead times.',
    focus: 'Product-specific pages, technical specifications, custom fabrication enquiries and procurement visibility.',
  },
  {
    id: 9,
    title: 'Construction Materials, Glass, Ceramics & Sanitaryware',
    stat: '₹62,000 Cr',
    statLabel: 'Indian ceramic tile market value (World #2 producer & exporter)',
    source: 'IBEF',
    desc: 'Manufacturers compete through finish aesthetics, durable performance, architectural specifications and an extensive regional dealer-distributor showroom presence.',
    focus: 'Product catalogues, visual content, regional visibility and trade-buyer enquiries.',
  },
  {
    id: 10,
    title: 'Textiles, Leather, Footwear & Protective Products',
    stat: 'US$35.52B',
    statLabel: 'Indian textile & apparel exports, including US$15.77B readymade garments',
    source: 'IBEF',
    desc: 'Spanning garment manufacturing, technical textiles, protective industrial gear and footwear sourcing. Every buyer profile demands tailored sourcing terms and compliance clarity.',
    focus: 'Product catalogues, private-label enquiries, sourcing visibility and export-market readiness.',
  },
];

const faqs = [
  {
    q: 'What is digital marketing for manufacturers?',
    a: 'Digital marketing for manufacturers helps businesses improve product visibility, communicate their capabilities, reach potential buyers and generate relevant enquiries. The approach depends on the product, target audience, sales cycle and route to market.',
  },
  {
    q: 'How is manufacturing marketing different from regular digital marketing?',
    a: 'Manufacturing marketing often requires technical product information, application-led content, industry-specific buyer knowledge and longer purchasing cycles. A strategy for industrial components differs significantly from one promoting a consumer product.',
  },
  {
    q: 'Can digital marketing help manufacturers generate B2B leads?',
    a: 'Yes. SEO, product landing pages, paid campaigns, targeted content and relevant outreach can attract potential business buyers. Lead quality depends on targeting, product-market fit, buyer requirements and how effectively enquiries are qualified and followed up.',
  },
  {
    q: 'How can I market an industrial product online?',
    a: 'Start by identifying applications, differentiators and intended buyers. Build clear product pages with relevant specifications, improve search visibility and create simple enquiry routes. Then test channels suited to the product, target market and sales cycle.',
  },
  {
    q: 'Can Korvion Media help manufacturers find distributors and dealers?',
    a: 'Korvion Media can support digital visibility, targeted campaigns, landing pages and enquiry workflows intended to attract potential channel partners. Distributor appointments depend on demand, commercial terms, regional fit and the manufacturer’s ability to serve the market.',
  },
  {
    q: 'Do you work with small and medium-scale manufacturers?',
    a: 'The approach can be adapted to small, medium-scale and growing manufacturing businesses. Priorities may include establishing a credible digital presence, improving product discoverability, generating initial enquiries or building a more structured marketing process within available resources.',
  },
  {
    q: 'Can you help manufacturers expand into export markets?',
    a: 'Marketing can support international visibility, product positioning and outreach to relevant audiences. Export expansion also involves commercial, logistics, documentation and regulatory considerations that must be assessed separately for the product and destination market.',
  },
  {
    q: 'Do all manufacturers need SEO, paid advertising and social media?',
    a: 'No. The right mix depends on how buyers discover and purchase the product. SEO may suit products with active search demand, while targeted outreach or distributor development may be more relevant elsewhere. Channel selection should follow business goals.',
  },
  {
    q: 'Can you help with product packaging and catalogues?',
    a: 'Korvion Media can discuss branding and creative support for packaging, labels, product catalogues and brochures. The scope should be defined around your product, target buyers, brand requirements and applicable compliance needs.',
  },
  {
    q: 'How does industrial expertise influence Korvion Media’s approach?',
    a: 'Korvion Media’s approach is informed by collaboration with industrial specialists, including C2EX Consulting, whose work spans product development, manufacturing setup, compliance and commercialisation. Korvion applies this perspective to marketing strategy, digital visibility and demand generation.',
  },
  {
    q: 'How do we get started with Korvion Media?',
    a: 'Share your industry, product and main business challenge through our enquiry form below. Korvion Media can then discuss your current position, intended buyers and priorities to identify relevant marketing opportunities and potential next steps.',
  },
];

export function ManufacturingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    industry: industriesList[0],
    product: '',
    challenge: businessChallenges[0],
    businessName: '',
    contactName: '',
    workEmail: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.contactName || !formData.workEmail || !formData.phone) {
      toast.error('Please fill in all contact details');
      return;
    }

    setSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success('Your manufacturing enquiry has been received. Our team will contact you within 24 hours!');
    }, 1000);
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-border">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-primary">
                <Factory className="w-3.5 h-3.5" />
                <span>Digital Marketing For Manufacturing Businesses</span>
              </div>

              {/* Title */}
              <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
                Digital Marketing for Manufacturers, Backed by{' '}
                <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Industrial Expertise
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Turn your manufacturing capabilities into market opportunities. Reach relevant buyers, strengthen product visibility and build a clearer path to enquiries and sales.
              </p>

              {/* Pitch Highlight */}
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-sm sm:text-base font-medium text-foreground">
                <p>
                  <strong className="text-primary font-semibold">Your product is ready. Is your market reaching it?</strong>{' '}
                  Engineered for manufacturers seeking industrial customers, distributors, qualified enquiries or new export markets.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold shadow-glow-sm hover:shadow-glow hover:bg-primary/95 transition-all cursor-pointer"
                >
                  <span>Discuss Your Manufacturing Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#market-journey"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/60 hover:bg-card text-foreground font-medium text-sm transition-all"
                >
                  <span>View Market Journey</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Stats Callouts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-3xl sm:text-4xl font-extrabold font-space-grotesk text-primary">
                        2.67 lakh
                      </p>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mt-1">
                        Registered manufacturing establishments in India
                      </h4>
                    </div>
                    <span className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Building2 className="w-5 h-5" />
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 border-t border-border/60 pt-3">
                    <span>Source: Annual Survey of Industries, 2024–25 · Press Information Bureau</span>
                  </p>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-3xl sm:text-4xl font-extrabold font-space-grotesk text-primary">
                        9.59%
                      </p>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mt-1">
                        Growth in manufacturing gross value added (2024–25)
                      </h4>
                    </div>
                    <span className="p-2 rounded-lg bg-primary/10 text-primary">
                      <TrendingUp className="w-5 h-5" />
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 border-t border-border/60 pt-3">
                    <span>Source: Ministry of Statistics and Programme Implementation · PIB</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANUFACTURING IS GROWING (4 PILLARS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="Market Visibility"
          title={<>Manufacturing is growing. <span className="text-primary">Being visible</span> to the right buyers matters.</>}
          subtitle="More manufacturing capacity does not automatically mean more customers. Buyers need to discover your products, understand their value and trust your business before they enquire."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Be discovered',
              desc: 'Help relevant buyers find your products when researching suppliers and solutions.',
              icon: Search,
            },
            {
              title: 'Build buyer confidence',
              desc: 'Present your capabilities, specifications, applications and differentiators clearly.',
              icon: ShieldCheck,
            },
            {
              title: 'Develop sales channels',
              desc: 'Support direct sales, distributor networks, B2B partnerships and online sales.',
              icon: Truck,
            },
            {
              title: 'Expand into markets',
              desc: 'Build a structured approach to reaching new regions, segments and buyers.',
              icon: Globe,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/40 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-space-grotesk font-bold text-lg text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Missed opportunity alert */}
        <div className="p-6 rounded-2xl border border-destructive/20 bg-destructive/5 text-foreground flex items-start gap-4">
          <div className="p-2 rounded-lg bg-destructive/10 text-destructive shrink-0 mt-0.5">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-base text-foreground">The Missed Opportunity</h4>
            <p className="text-sm text-muted-foreground mt-1">
              If buyers cannot find or evaluate your business online, competitors may enter their shortlist before you do.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHO DO YOU NEED TO REACH AFTER PRODUCTION? */}
      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Target Audience"
            title="Who do you need to reach after production?"
            subtitle="The right marketing strategy for the manufacturing industry starts with understanding who buys your product and how purchasing decisions are made."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Industrial & B2B Buyers',
                desc: 'OEMs, procurement teams, engineering companies, contractors and institutional buyers.',
                icon: Factory,
              },
              {
                title: 'Distribution & Channel Partners',
                desc: 'Dealers, distributors, wholesalers, retailers and regional stockists.',
                icon: Boxes,
              },
              {
                title: 'Business & End Consumers',
                desc: 'Buyers purchasing through websites, marketplaces, retail channels or direct sales.',
                icon: Users,
              },
              {
                title: 'New-Market & Export Buyers',
                desc: 'Importers, global sourcing teams and businesses looking for manufacturing partners.',
                icon: Globe,
              },
            ].map((buyer, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <buyer.icon className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk font-bold text-lg text-foreground">{buyer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{buyer.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-border bg-card/70 text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Core Principle:</strong> Different buyers need different messages, proof points and routes to enquiry. Your marketing should reflect your actual sales model—not simply the channels available.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MARKET JOURNEY (5 STAGES) */}
      <section id="market-journey" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="Market Stages"
          title="Where is your manufacturing business in its market journey?"
          subtitle="Your starting point depends on the product, target buyer and business objective. You do not need to implement every channel at once."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              step: '01 · ENTER',
              title: 'Entering the market',
              desc: 'Clarify product positioning and establish initial buyer visibility.',
            },
            {
              step: '02 · ACQUIRE',
              title: 'Finding first customers',
              desc: 'Identify suitable audiences and create routes for enquiries.',
            },
            {
              step: '03 · GROW',
              title: 'Generating more enquiries',
              desc: 'Improve discoverability, lead quality and follow-up.',
            },
            {
              step: '04 · DISTRIBUTE',
              title: 'Building distribution',
              desc: 'Attract channel partners and support dealer acquisition.',
            },
            {
              step: '05 · EXPAND',
              title: 'Entering new markets',
              desc: 'Reach new regions, industry segments, export markets or online sales channels.',
            },
          ].map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border bg-card/80 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-primary">{st.step}</span>
                <h3 className="font-space-grotesk font-bold text-lg text-foreground mt-2">{st.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{st.desc}</p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary/30 to-primary/80 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. 4-STEP COMMERCIAL GROWTH FRAMEWORK */}
      <section className="py-20 bg-surface/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Methodology"
            title="From understanding your product to commercial growth"
            subtitle="A product's market needs to be understood before its marketing channels are selected."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Understand the opportunity',
                desc: 'Assess your product, market demand, competitors, target buyers and purchasing requirements.',
              },
              {
                num: '2',
                title: 'Prepare for the market',
                desc: 'Define product positioning, routes to market, sales materials and the digital presence buyers need.',
              },
              {
                num: '3',
                title: 'Reach and convert buyers',
                desc: 'Use relevant marketing channels, lead capture and nurturing to create opportunities and support sales conversations.',
              },
              {
                num: '4',
                title: 'Measure and expand',
                desc: 'Review enquiry quality, conversion, channel performance and new-market opportunities to guide growth.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold font-space-grotesk flex items-center justify-center text-lg">
                  {step.num}
                </div>
                <h3 className="font-space-grotesk font-bold text-lg text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            The framework is flexible. Your marketing plan should focus on the stages that matter most to your business right now.
          </p>
        </div>
      </section>

      {/* 6. CORE DIGITAL MARKETING SERVICES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="Integrated Capabilities"
          title="Digital marketing services for manufacturing companies"
          subtitle="Korvion Media brings together the core capabilities manufacturers need to improve visibility, communicate product value, generate demand and manage enquiries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((srv, idx) => (
            <Link
              key={idx}
              href={srv.href}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <srv.icon className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{srv.desc}</p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                <span>Explore service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. SPECIALISED MANUFACTURING SERVICES */}
      <section className="py-20 bg-surface/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Specialised Packages"
            title="Specialised services for the manufacturing marketing journey"
            subtitle="Beyond core digital marketing, manufacturers may need product-specific support to prepare for launch, improve sales materials, develop distribution or make enquiries easier to convert."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-base text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <Link
                  href={item.href}
                  className="pt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>{item.linkText}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON MATRIX: DIFFERENT PRODUCTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          eyebrow="Strategic Alignment"
          title="Different products need different marketing approaches"
          subtitle="The objective is not to use every channel. It is to choose the channels that fit your product, buyers and route to market."
        />

        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 sm:p-5 font-space-grotesk font-bold text-sm sm:text-base text-foreground w-1/3">
                    Manufacturing Business
                  </th>
                  <th className="p-4 sm:p-5 font-space-grotesk font-bold text-sm sm:text-base text-foreground">
                    Marketing Priorities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {productApproaches.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-foreground">
                      {row.business}
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground leading-relaxed">
                      {row.priorities}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. 10 MANUFACTURING INDUSTRY SECTORS */}
      <section id="industries-sectors" className="py-20 bg-surface/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Sector Intelligence"
            title="Explore manufacturing industries and products"
            subtitle="India's manufacturing landscape spans established export sectors, expanding domestic markets and emerging product categories. These industry insights provide context for manufacturers evaluating visibility, buyer acquisition and market expansion opportunities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industrySectors.map((sec) => (
              <div
                key={sec.id}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary">Sector 0{sec.id}</span>
                    <h3 className="font-space-grotesk font-bold text-xl sm:text-2xl text-foreground mt-1">
                      {sec.title}
                    </h3>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="font-space-grotesk font-extrabold text-2xl sm:text-3xl text-primary">{sec.stat}</p>
                    <p className="text-[11px] text-muted-foreground max-w-[200px] sm:ml-auto">{sec.statLabel}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      Source: {sec.source}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{sec.desc}</p>

                <div className="pt-2 border-t border-border/60">
                  <p className="text-xs font-semibold text-foreground">
                    <span className="text-primary uppercase tracking-wider text-[11px] mr-1.5">Marketing Focus:</span>
                    {sec.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            Market sizes, exports, manufacturing capacity and production figures measure different things and should not be compared as equivalent indicators. Figures are presented with their respective reporting periods; projections are not guaranteed outcomes.
          </p>
        </div>
      </section>

      {/* 10. INDUSTRIAL UNDERSTANDING & C2EX PARTNERSHIP */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 space-y-8 shadow-elegant relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Domain Expertise</span>
            </div>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Industrial understanding should inform marketing decisions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Manufacturing marketing works better when it reflects the realities behind a product: how it is developed, produced, positioned and brought to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-border">
            <div className="space-y-3">
              <h3 className="font-space-grotesk font-bold text-xl text-foreground">
                Informed by Industrial Specialists
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Korvion Media's approach is informed by collaboration with industrial specialists, including <strong className="text-foreground">C2EX Consulting</strong>. Their work spans product development, manufacturing setup, compliance and commercialisation, particularly across food, beverage, FMCG and nutraceutical businesses.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-space-grotesk font-bold text-xl text-foreground">
                Connecting Factory Reality with Market Demand
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This perspective helps connect marketing decisions with product and operational realities—while Korvion focuses on digital visibility, marketing strategy, demand generation and sales-support systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHAT MARKETING INVESTMENT SHOULD DELIVER */}
      <section className="py-20 bg-surface/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Commercial Outcomes"
            title="What should your marketing investment deliver?"
            subtitle="We do not treat impressions or clicks as the final outcome. We look at how marketing contributes to your business goals and what needs to improve next."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Greater visibility',
                desc: 'Improve discovery across search, product pages and digital channels.',
                icon: Search,
              },
              {
                title: 'Better-fit enquiries',
                desc: 'Give suitable buyers a clearer path to request information or quotations.',
                icon: CheckCircle2,
              },
              {
                title: 'Channel opportunities',
                desc: 'Support distributor, dealer and business partnership development.',
                icon: Truck,
              },
              {
                title: 'Measurable progress',
                desc: 'Track enquiries, lead quality, conversion and channel performance.',
                icon: BarChart3,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INTERACTIVE ENQUIRY FORM */}
      <section id="enquiry-form" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-xl p-8 sm:p-12 shadow-elegant space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Direct Enquiry
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-foreground">
              Tell us about your manufacturing business
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Share your product and your biggest challenge. Let's identify your next market opportunity.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold">Thank You!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We have received your manufacturing enquiry. Our industrial marketing strategist will reach out to discuss your market opportunity within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted"
              >
                Submit another enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Industry Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Manufacturing Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  >
                    {industriesList.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Product Text Field */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Product Manufactured
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CNC valves, nutraceutical gummies, packaging films..."
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Main Business Challenge */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Main Business Challenge
                </label>
                <select
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                >
                  {businessChallenges.map((ch) => (
                    <option key={ch} value={ch}>
                      {ch}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Industrial Works"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rajesh@apexworks.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-primary text-white font-semibold shadow-glow-sm hover:shadow-glow hover:bg-primary/95 transition-all text-base disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? 'Submitting Enquiry...' : 'Discuss My Manufacturing Business'}
                </button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                We respect your confidentiality. Your production specs and business data are safe with us.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Answers to common questions manufacturers ask about digital marketing, distributor development, and B2B lead generation."
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-space-grotesk font-bold text-base sm:text-lg text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-10 sm:p-16 space-y-6 shadow-elegant relative overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Next Market Opportunity
          </span>
          <h2 className="font-space-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Your product deserves to reach the right market.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Build a clearer path from manufacturing capabilities to buyer visibility, enquiries and business growth. Let's discuss your product, target customers and next market opportunity.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-base shadow-glow hover:shadow-glow hover:bg-primary/95 transition-all cursor-pointer"
            >
              <span>Discuss Your Manufacturing Business</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
