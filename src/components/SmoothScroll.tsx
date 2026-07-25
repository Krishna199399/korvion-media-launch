"use client";

import { useEffect, ReactNode } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Wrapper component to enable smooth scrolling with Lenis
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useSmoothScroll({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  return <>{children}</>;
}
