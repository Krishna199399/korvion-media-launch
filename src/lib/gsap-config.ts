import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// GSAP global configuration
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Default easing functions
export const ease = {
  smooth: 'power2.out',
  elastic: 'elastic.out(1, 0.5)',
  bounce: 'bounce.out',
  expo: 'expo.out',
  back: 'back.out(1.7)',
  custom: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

// Default durations
export const duration = {
  fast: 0.3,
  medium: 0.6,
  slow: 1.2,
} as const;

export { gsap, ScrollTrigger };
