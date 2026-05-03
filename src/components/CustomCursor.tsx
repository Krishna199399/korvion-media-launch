import { useEffect, useRef, useState } from 'react';

/**
 * Custom Cursor Component
 * Large ring follows cursor, dot follows ring with delay
 */
export function CustomCursor() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  
  const [renderPos, setRenderPos] = useState({
    ring: { x: 0, y: 0 },
    dot: { x: 0, y: 0 },
  });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const RING_SMOOTHNESS = 0.15;
  const DOT_SMOOTHNESS = 0.08; // Slower than ring for trailing effect

  useEffect(() => {
    // Move cursor on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
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

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      // Update ring position (follows cursor)
      ringPosition.current.x = lerp(
        ringPosition.current.x,
        mousePosition.current.x,
        RING_SMOOTHNESS
      );
      ringPosition.current.y = lerp(
        ringPosition.current.y,
        mousePosition.current.y,
        RING_SMOOTHNESS
      );

      // Dot follows cursor with offset (not the ring)
      const dotOffset = 20;
      const targetDotX = mousePosition.current.x + dotOffset;
      const targetDotY = mousePosition.current.y;
      
      dotPosition.current.x = lerp(
        dotPosition.current.x,
        targetDotX,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        targetDotY,
        DOT_SMOOTHNESS
      );

      setRenderPos({
        ring: { x: ringPosition.current.x, y: ringPosition.current.y },
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
      });

      requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Hide on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = 'auto';
    }
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined') {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  const ringSize = isHovering ? 48 : 40;
  const dotSize = isClicking ? 6 : 8;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
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
