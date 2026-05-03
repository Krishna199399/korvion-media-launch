import { ReactNode } from 'react';
import { useMagneticCursor } from '@/hooks/useMagneticCursor';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  as?: 'button' | 'a' | 'div';
  [key: string]: any;
}

/**
 * Button with magnetic hover effect
 */
export function MagneticButton({
  children,
  strength = 0.3,
  className,
  as: Component = 'button',
  ...props
}: MagneticButtonProps) {
  const ref = useMagneticCursor<HTMLElement>(strength);

  return (
    <Component ref={ref} className={cn('cursor-pointer', className)} {...props}>
      {children}
    </Component>
  );
}
