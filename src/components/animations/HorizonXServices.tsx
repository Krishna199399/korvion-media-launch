import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '@/lib/gsap-config';
import { services } from '@/lib/services-data';

/**
 * Horizon-X Reassemble Animation
 * Full-screen pinned section with scroll-driven card reveal
 */
export function HorizonXServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    const cardElements = cards.querySelectorAll('.service-card');

    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Step 1: Fade out heading
    tl.to(heading, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Step 2: Reveal cards with Horizon-X effect
    tl.fromTo(
      cardElements,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -100 : 100),
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      },
      '+=0.1'
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-isolate relative h-screen bg-surface border-y border-border overflow-hidden"
    >
      {/* Heading State */}
      <div
        ref={headingRef}
        className="absolute inset-0 flex items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
            • What We Do
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Eight services.<br />
            <span className="text-gradient-primary">One revenue system.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Plug into the disciplines you need today, or run the full stack. Either way, every output
            ladders up to one number: yours.
          </p>
        </div>
      </div>

      {/* Cards Grid State */}
      <div
        ref={cardsRef}
        className="absolute inset-0 flex items-center justify-center px-6 lg:px-10"
      >
        <div className="w-full max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card group relative bg-background p-7 hover:bg-surface-elevated transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow-sm transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.headline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Explore Link */}
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Explore all services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
