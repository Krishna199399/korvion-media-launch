import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from '@/lib/gsap-config';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Custom hook for GSAP animations with automatic cleanup
 * @param callback - Function containing GSAP animations
 * @param dependencies - Dependency array for re-running animations
 */
export function useGSAP(
  callback: (context: gsap.Context) => void | (() => void),
  dependencies: React.DependencyList = []
) {
  const contextRef = useRef<gsap.Context | null>(null);

  useIsomorphicLayoutEffect(() => {
    // Create GSAP context for scoped animations
    contextRef.current = gsap.context(() => {
      const cleanup = callback(contextRef.current!);
      return cleanup;
    });

    // Cleanup function
    return () => {
      contextRef.current?.revert();
    };
  }, dependencies);

  return contextRef;
}

/**
 * Hook for creating scroll-triggered animations
 */
export function useScrollTrigger(
  callback: () => gsap.core.Tween | gsap.core.Timeline | void,
  dependencies: React.DependencyList = []
) {
  useIsomorphicLayoutEffect(() => {
    const animation = callback();

    return () => {
      if (animation && 'scrollTrigger' in animation) {
        animation.scrollTrigger?.kill();
      }
      animation?.kill?.();
    };
  }, dependencies);
}
