"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterAnimationProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animated counter component for stats (100% SSR & hydration safe)
 */
export function CounterAnimation({ value, duration = 2, className }: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current || hasAnimated.current) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetValue = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

    let animationFrameId: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = (targetValue * easeOut).toFixed(value.includes(".") ? 1 : 0);
      setDisplayValue(`${prefix}${currentValue}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        hasAnimated.current = true;
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={cn(className)}>
      {displayValue}
    </span>
  );
}
