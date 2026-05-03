import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from '@/lib/gsap-config';
import { cn } from '@/lib/utils';

interface HorizontalScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'left' | 'right';
}

/**
 * Horizontal scroll animation component
 */
export function HorizontalScroll({
  children,
  speed = 1,
  className,
  direction = 'left',
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    const contentWidth = content.offsetWidth;
    const directionMultiplier = direction === 'left' ? -1 : 1;

    const animation = gsap.to([content, clone], {
      x: directionMultiplier * contentWidth,
      duration: contentWidth / (speed * 50),
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    return () => {
      animation.kill();
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    };
  }, [speed, direction]);

  return (
    <div ref={containerRef} className={cn('flex overflow-hidden', className)}>
      <div ref={contentRef} className="flex shrink-0">
        {children}
      </div>
    </div>
  );
}
