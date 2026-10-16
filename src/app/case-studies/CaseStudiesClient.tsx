'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowUpRight,
  Building2,
  Factory,
  Globe,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Quote,
  Target,
  Zap,
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';

const caseStudies = [
  {
    id: 'apex-valves',
    title: 'Apex Industrial Flow Systems',
    industry: 'Industrial Manufacturing',
    services: ['Application-led SEO', 'B2B Lead Generation', 'Technical Catalogues'],
    headline: 'Scaling Export & OEM Procurement Enquiries by 340%',
    summary:
      'Apex manufactured high-tolerance flow control valves but struggled to capture direct procurement buyers online. We restructured their technical specifications, built application-led search hubs, and automated CRM lead routing.',
    results: [
      { metric: '+340%', label: 'Qualified B2B Enquiries' },
      { metric: '14 New', label: 'OEM & Distributor Partners' },
      { metric: '₹18.4M', label: 'Pipeline Value Generated' },
    ],
    tags: ['B2B Manufacturing', 'SEO', 'CRM Automation'],
  },
  {
    id: 'nutra-pure',
    title: 'NutraPure Botanicals',
    industry: 'Food & Nutraceuticals',
    services: ['Packaging & Branding', 'Performance Marketing', 'Website Design'],
    headline: 'From Factory Floor to 42 Supermarket Chains & 6x Direct Sales',
    summary:
      'A private-label nutraceutical manufacturer launching their own branded wellness range. We created premium packaging architecture, launched targeted retail-buyer campaigns, and converted high-value distributor partnerships.',
    results: [
      { metric: '6.2x', label: 'Direct E-Commerce Growth' },
      { metric: '42 Chains', label: 'Retail Stockists Onboarded' },
      { metric: '3.8x', label: 'Return on Ad Spend (ROAS)' },
    ],
    tags: ['FMCG', 'Branding', 'Performance Ads'],
  },
  {
    id: 'precision-fasteners',
    title: 'Zenith Fasteners & Hardware',
    industry: 'Automotive & Metal Hardware',
    services: ['Website Development', 'Advanced SEO', 'Video Production'],
    headline: 'Dominating Tier-1 Automotive Sourcing Search Intent',
    summary:
      'Zenith produced precision fasteners for automotive assemblies. We filmed factory floor capability showcases, built an interactive part-finder catalogue, and captured organic rank #1 for 85+ high-intent buyer keywords.',
    results: [
      { metric: '#1 Rank', label: 'For 85+ Buyer Keywords' },
      { metric: '+210%', label: 'Tier-1 RFQ Submissions' },
      { metric: '65%', label: 'Shorter Sales Cycle' },
    ],
    tags: ['Automotive', 'Technical SEO', 'Video'],
  },
  {
    id: 'cloud-scale-b2b',
    title: 'OmniFlow Automation Platform',
    industry: 'Enterprise Software & Tech',
    services: ['CRM Automation', 'Performance Marketing', 'CRO'],
    headline: 'Engineering a High-Converting B2B Revenue Engine',
    summary:
      'We designed an end-to-end inbound pipeline with automated lead scoring, dynamic retargeting, and frictionless demo booking that drastically lowered customer acquisition cost.',
    results: [
      { metric: '-42%', label: 'Cost Per Acquisition (CAC)' },
      { metric: '+185%', label: 'Booked Sales Demos' },
      { metric: '94%', label: 'Sales Team Lead Acceptance' },
    ],
    tags: ['SaaS', 'Marketing Automation', 'Performance'],
  },
];

export function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Industrial Manufacturing', 'Food & Nutraceuticals', 'Automotive & Metal Hardware', 'Enterprise Software & Tech'];

  const filteredStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((item) => item.industry === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Commercial Impact</span>
          </div>

          <h1 className="font-space-grotesk text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.05]">
            Case Studies That Prove{' '}
            <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Revenue Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real manufacturing and B2B growth systems engineered into qualified buyer pipelines, distributor expansion, and measurable revenue.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            {[
              { val: '4.8x', lbl: 'Average Client ROI' },
              { val: '+320%', lbl: 'Qualified Inbound Pipeline' },
              { val: '₹42M+', lbl: 'Client Pipeline Influenced' },
              { val: '98%', lbl: 'Client Partnership Retention' },
            ].map((m, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm space-y-1"
              >
                <p className="font-space-grotesk font-extrabold text-2xl sm:text-3xl text-primary">{m.val}</p>
                <p className="text-xs text-muted-foreground font-medium">{m.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-primary text-white shadow-sm'
                  : 'border border-border bg-card hover:border-primary/40 text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-10">
          {filteredStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-card hover:border-primary/40 transition-all p-6 sm:p-10 shadow-sm space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider font-mono">
                      {study.industry}
                    </span>
                    {study.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-foreground">
                    {study.title}
                  </h2>
                  <p className="text-base text-primary font-semibold mt-1">
                    {study.headline}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-xs font-semibold uppercase tracking-wider self-start lg:self-center shrink-0"
                >
                  <span>Request Similar Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                    Strategy & Execution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.services.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1 text-xs text-foreground bg-surface px-3 py-1.5 rounded-lg border border-border"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {study.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border border-border/80 bg-surface/50 space-y-1"
                    >
                      <p className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-foreground">
                        {res.metric}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">{res.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <CTASection
        title={<>Ready to engineer your <span className="text-gradient-primary">growth story</span>?</>}
        subtitle="Let's build a predictable revenue system tailored specifically to your product line, target buyers, and commercial goals."
        primaryBtn="Discuss Your Project"
      />
    </div>
  );
}
