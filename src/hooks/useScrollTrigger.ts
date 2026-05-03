import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

interface ScrollTriggerOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  toggleActions?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

/**
 * Hook to create scroll-triggered animations
 */
export function useScrollTriggerAnimation<T extends HTMLElement>(
  options: ScrollTriggerOptions = {}
) {
  const elementRef = useRef<T>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: element,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub ?? false,
      pin: options.pin ?? false,
      markers: options.markers ?? false,
      toggleActions: options.toggleActions || 'play none none reverse',
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
    });

    return () => {
      scrollTriggerRef.current?.kill();
    };
  }, [options]);

  return elementRef;
}

/**
 * Hook for parallax scroll effect
 */
export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [speed]);

  return elementRef;
}
