'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

interface StaticBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number;

  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  borderColor?: string | string[];

  /**
   * Rotation angle of the gradient in degrees
   * @default 45
   */
  gradientAngle?: number;
}

/**
 * Static Shine Border
 *
 * A static gradient border effect component with configurable properties.
 */
export function StaticBorder({
  borderWidth = 1,
  borderColor = '#000000',
  gradientAngle = 45,
  className,
  style,
  ...props
}: StaticBorderProps) {
  // Convert color array to a gradient string
  const gradientColors = Array.isArray(borderColor)
    ? borderColor.join(', ')
    : borderColor;

  return (
    <div
      style={
        {
          '--border-width': `${borderWidth}px`,
          '--mask-linear-gradient': `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          '--background-linear-gradient': `linear-gradient(${gradientAngle}deg, ${gradientColors})`,
          backgroundImage: 'var(--background-linear-gradient)',
          backgroundSize: '100% 100%',
          mask: 'var(--mask-linear-gradient)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 size-full rounded-[inherit] p-[var(--border-width)]',
        className
      )}
      {...props}
    />
  );
}
