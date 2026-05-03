import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';
import { services } from '@/lib/services-data';

/**
 * Horizontal Scroll Section
 * Vertical scroll drives horizontal movement through slides
 */
export function HorizontalScrollSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const section = sectionRef.current;

    if (!trigger || !section) return;

    const slides = section.querySelectorAll('.slide');
    const animations: gsap.core.Tween[] = [];

    // Main horizontal scroll animation
    const scrollTween = gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        end: () => `+=${section.offsetWidth}`,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    animations.push(scrollTween);

    // Slide 2: Text fade in from bottom with blur
    const slide2Anim = gsap.fromTo(
      '.slide-2-content',
      {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: '.slide-2',
          containerAnimation: scrollTween,
          start: 'left center',
          end: 'center center',
          scrub: 1,
        },
      }
    );
    animations.push(slide2Anim);

    // Slide 3: Elements slide in from right with stagger
    const slide3Anim = gsap.fromTo(
      '.slide-3-item',
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.slide-3',
          containerAnimation: scrollTween,
          start: 'left center',
          end: 'center center',
          scrub: 1,
        },
      }
    );
    animations.push(slide3Anim);

    // Slide 4: Text scales up from center
    const slide4Anim = gsap.fromTo(
      '.slide-4-content',
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.slide-4',
          containerAnimation: scrollTween,
          start: 'left center',
          end: 'center center',
          scrub: 1,
        },
      }
    );
    animations.push(slide4Anim);

    // Cleanup function
    return () => {
      // Kill all animations and their ScrollTriggers
      animations.forEach((anim) => {
        if (anim.scrollTrigger) {
          anim.scrollTrigger.kill(true);
        }
        anim.kill();
      });
      
      // Reset transforms
      gsap.set(slides, { clearProps: 'all' });
      gsap.set('.slide-2-content', { clearProps: 'all' });
      gsap.set('.slide-3-item', { clearProps: 'all' });
      gsap.set('.slide-4-content', { clearProps: 'all' });
    };
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div ref={sectionRef} className="flex w-[400vw]">
        {/* Slide 1: Introduction */}
        <div className="slide slide-1 w-screen h-screen flex items-center justify-center bg-background section-isolate">
          <div className="max-w-4xl text-center px-6">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
              • What We Do
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Eight services.<br />
              <span className="text-gradient-primary">One revenue system.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Scroll to explore our full-stack approach
            </p>
          </div>
        </div>

        {/* Slide 2: Services Grid 1-4 */}
        <div className="slide slide-2 w-screen h-screen flex items-center justify-center bg-surface section-isolate">
          <div className="slide-2-content max-w-7xl px-6 lg:px-10 w-full">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Brand & <span className="text-gradient-primary">Content</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.slice(0, 4).map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-background rounded-xl border border-border p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {service.number}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.headline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slide 3: Services Grid 5-8 */}
        <div className="slide slide-3 w-screen h-screen flex items-center justify-center bg-background section-isolate">
          <div className="max-w-7xl px-6 lg:px-10 w-full">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Growth & <span className="text-gradient-primary">Technology</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.slice(4, 8).map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="slide-3-item bg-surface rounded-xl border border-border p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {service.number}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.headline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slide 4: Call to Action */}
        <div className="slide slide-4 w-screen h-screen flex items-center justify-center bg-surface section-isolate">
          <div className="slide-4-content max-w-3xl text-center px-6">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to build your <span className="text-gradient-primary">revenue system</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Every service engineered to compound. Every output tied to your bottom line.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-sm"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
