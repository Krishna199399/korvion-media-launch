"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Wrapper component to enable smooth scrolling with Lenis
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  useSmoothScroll({
    duration: isAdmin ? 0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !isAdmin,
  });

  return <>{children}</>;
}
