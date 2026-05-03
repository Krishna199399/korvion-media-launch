import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';
import { cn } from '@/lib/utils';

interface AnimatedOrbProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * 3D floating orb with parallax on mouse move
 */
export function AnimatedOrb({ src, alt, className }: AnimatedOrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const orb = orbRef.current;
    if (!container || !orb) return;

    // Floating animation
    gsap.to(orb, {
      y: -20,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / 50;
      const deltaY = (e.clientY - centerY) / 50;

      gsap.to(orb, {
        rotationY: deltaX,
        rotationX: -deltaY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf(orb);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div ref={orbRef} className="relative aspect-square max-w-md mx-auto" style={{ perspective: '1000px' }}>
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
        <img
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          className="relative rounded-3xl shadow-elegant border border-border w-full h-full object-cover"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
    </div>
  );
}
