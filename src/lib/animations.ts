import { gsap } from './gsap-config';

// Animation presets for common patterns
export const animations = {
  // Fade animations
  fadeIn: (element: gsap.TweenTarget, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      ...options,
    });
  },

  fadeInUp: (element: gsap.TweenTarget, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      ...options,
    });
  },

  fadeInScale: (element: gsap.TweenTarget, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: 'back.out(1.7)',
      ...options,
    });
  },

  // Stagger animations
  staggerFadeIn: (elements: gsap.TweenTarget, options = {}) => {
    return gsap.from(elements, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      ...options,
    });
  },

  staggerScale: (elements: gsap.TweenTarget, options = {}) => {
    return gsap.from(elements, {
      scale: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'back.out(1.7)',
      ...options,
    });
  },

  // Text reveal animations
  splitTextReveal: (element: gsap.TweenTarget, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      transformOrigin: 'top center',
      duration: 0.8,
      stagger: 0.02,
      ease: 'power3.out',
      ...options,
    });
  },

  // Parallax effect
  parallax: (element: any, speed = 0.5, options = {}) => {
    return gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      ...options,
    });
  },

  // Magnetic hover effect
  magnetic: (element: HTMLElement, strength = 0.3) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  },

  // Counter animation
  counter: (element: HTMLElement, target: number, options = {}) => {
    const obj = { value: 0 };
    return gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toString();
      },
      ...options,
    });
  },

  // Scroll-triggered reveal
  scrollReveal: (element: any, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      ...options,
    });
  },

  // Pin section while scrolling
  pinSection: (element: any, options = {}) => {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
      },
      ...options,
    });
  },
};

// Utility to check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Wrapper to respect reduced motion preference
export const animateWithReducedMotion = (
  animationFn: () => gsap.core.Tween | gsap.core.Timeline,
  fallback?: () => void
) => {
  if (prefersReducedMotion()) {
    fallback?.();
    return null;
  }
  return animationFn();
};
