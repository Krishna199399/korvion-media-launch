import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';
import { cn } from '@/lib/utils';

interface CounterAnimationProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animated counter component for stats
 */
export function CounterAnimation({ value, duration = 2, className }: CounterAnimationProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    // Extract numeric value from string (e.g., "₹10Cr+" -> 10)
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      element.textContent = value;
      return;
    }

    const targetValue = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

    const obj = { value: 0 };

    const animation = gsap.to(obj, {
      value: targetValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          hasAnimated.current = true;
        },
      },
      onUpdate: () => {
        const currentValue = obj.value.toFixed(value.includes('.') ? 1 : 0);
        element.textContent = `${prefix}${currentValue}${suffix}`;
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [value, duration]);

  return <span ref={elementRef} className={cn(className)}>{value}</span>;
}
