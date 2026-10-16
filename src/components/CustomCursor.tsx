"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Custom Cursor Component
 * Large ring follows cursor, dot follows ring with delay
 */
export function CustomCursor() {
  const pathname = usePathname();
  const mousePosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  
  const [renderPos, setRenderPos] = useState({
    ring: { x: 0, y: 0 },
    dot: { x: 0, y: 0 },
  });
  
  const isHoveringRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const RING_SMOOTHNESS = 0.15;
  const DOT_SMOOTHNESS = 0.08; // Slower than ring for trailing effect

  useEffect(() => {
    // Move cursor on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement | null;
      const shouldHover = Boolean(
        target && target.closest('a, button, input, textarea, select, [role="button"], [data-cursor-text], .cursor-hover')
      );
      if (isHoveringRef.current !== shouldHover) {
        isHoveringRef.current = shouldHover;
        setIsHovering(shouldHover);
      }
    };

    // Handle mouse down
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    // Handle mouse up
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Handle hoverable elements
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, img, input, textarea, select, [data-cursor-text], .cursor-hover');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add these event handlers to the useEffect
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add these animation loop and position calculations
    const animate = () => {
      ringPosition.current.x += (mousePosition.current.x - ringPosition.current.x) * RING_SMOOTHNESS;
      ringPosition.current.y += (mousePosition.current.y - ringPosition.current.y) * RING_SMOOTHNESS;
      dotPosition.current.x += (ringPosition.current.x - dotPosition.current.x) * DOT_SMOOTHNESS;
      dotPosition.current.y += (ringPosition.current.y - dotPosition.current.y) * DOT_SMOOTHNESS;
      setRenderPos({ ring: ringPosition.current, dot: dotPosition.current });
      requestAnimationFrame(animate);
    };
    animate();

    // Add these cleanup handlers
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Hide on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = 'auto';
    }
  }, []);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Don't render on touch devices
  if (typeof window !== 'undefined') {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  const ringSize = isHovering ? 48 : 40;
  const dotSize = isClicking ? 6 : 8;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999]">
      {/* Large outer ring */}
      <div
        className="absolute rounded-full border-2 border-foreground/30"
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.ring.x}px`,
          top: `${renderPos.ring.y}px`,
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
      
      {/* Small bright dot - follows ring with delay */}
      <div
        className="absolute rounded-full bg-primary shadow-glow-sm"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          transition: 'width 0.15s ease, height 0.15s ease',
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <div
          className="absolute whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow"
          style={{
            transform: 'translate(-50%, -50%)',
            left: `${renderPos.ring.x}px`,
            top: `${renderPos.ring.y + 40}px`,
            opacity: 1,
            transition: 'opacity 0.2s ease',
          }}
        >
          {cursorText}
        </div>
      )}
    </div>
  );
}
