import { ReactNode } from 'react';
import { useParallaxEffect } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Section with parallax scroll effect
 * Applies transform only, preserving stacking context
 */
export function ParallaxSection({ children, speed = 0.5, className }: ParallaxSectionProps) {
  const ref = useParallaxEffect<HTMLDivElement>({ speed });

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
