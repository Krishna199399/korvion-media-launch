import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from '@/lib/gsap-config';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  splitBy?: 'words' | 'characters' | 'lines';
}

/**
 * Text reveal animation with split effect
 */
export function SplitText({
  children,
  className,
  delay = 0,
  stagger = 0.03,
  splitBy = 'words',
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = children;
    let elements: string[] = [];

    if (splitBy === 'words') {
      elements = text.split(' ');
    } else if (splitBy === 'characters') {
      elements = text.split('');
    } else {
      elements = text.split('\n');
    }

    // Clear container and create spans
    container.innerHTML = '';
    elements.forEach((element, index) => {
      const wrapper = document.createElement('span');
      wrapper.style.display = 'inline-block';
      wrapper.style.overflow = 'hidden';
      wrapper.style.verticalAlign = 'top';

      const span = document.createElement('span');
      span.textContent = element;
      span.style.display = 'inline-block';

      wrapper.appendChild(span);
      container.appendChild(wrapper);

      // Add space after words
      if (splitBy === 'words' && index < elements.length - 1) {
        container.appendChild(document.createTextNode(' '));
      }
    });

    // Animate
    const spans = container.querySelectorAll('span > span');
    gsap.from(spans, {
      y: '100%',
      opacity: 0,
      duration: 0.8,
      stagger,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      gsap.killTweensOf(spans);
    };
  }, [children, delay, stagger, splitBy]);

  return <div ref={containerRef} className={cn('inline-block', className)} />;
}
