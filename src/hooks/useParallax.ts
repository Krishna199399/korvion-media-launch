import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  start?: string;
  end?: string;
}

/**
 * Hook to create parallax scroll effect
 * @param options - Parallax configuration
 */
export function useParallaxEffect<T extends HTMLElement>(
  options: ParallaxOptions = {}
) {
  const elementRef = useRef<T>(null);
  const { speed = 0.5, direction = 'vertical', start = 'top bottom', end = 'bottom top' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const property = direction === 'vertical' ? 'y' : 'x';
    const distance = direction === 'vertical' ? window.innerHeight : window.innerWidth;

    const animation = gsap.to(element, {
      [property]: distance * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [speed, direction, start, end]);

  return elementRef;
}

/**
 * Hook for multi-layer parallax effect
 */
export function useMultiLayerParallax<T extends HTMLElement>(layers: number[] = [0.2, 0.5, 0.8]) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const animations: gsap.core.Tween[] = [];

    children.forEach((child, index) => {
      const speed = layers[index] || 0.5;
      const animation = gsap.to(child, {
        y: window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      animations.push(animation);
    });

    return () => {
      animations.forEach((anim) => {
        anim.scrollTrigger?.kill();
        anim.kill();
      });
    };
  }, [layers]);

  return containerRef;
}
