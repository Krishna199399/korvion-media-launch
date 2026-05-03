import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Hook to enable smooth scrolling with Lenis
 * @param options - Lenis configuration options
 */
export function useSmoothScroll(options: Partial<ConstructorParameters<typeof Lenis>[0]> = {}) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      ...options,
    });

    let rafId: number;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

/**
 * Hook to scroll to a specific element smoothly
 */
export function useScrollTo() {
  return (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (typeof window === 'undefined') return;

    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;

    const offset = options?.offset ?? 0;
    const duration = options?.duration ?? 1;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY + offset,
      behavior: 'smooth',
    });
  };
}
