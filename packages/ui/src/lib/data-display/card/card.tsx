import React, { forwardRef } from 'react';
import {
  card,
  type CardVariantProps,
} from '@packages/ui/styled-system/recipes';

interface CardProps extends CardVariantProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, backgroundImage, ...rest }, ref) => {
    const generatedClassName = card({
      variant,
    });
    return (
      <div
        ref={ref}
        {...rest}
        className={generatedClassName}
        style={{
          backgroundImage: backgroundImage ? `url("${backgroundImage}")` : ``,
        }}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
