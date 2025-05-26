import React, { forwardRef } from 'react';
import {
  cardColorStyles,
  type CardColorVariants,
} from './card-color.cva.recipe';
type CardProps = CardColorVariants & {
  children: React.ReactNode;
  backgroundImage?: string;
};

export const CardColor = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, backgroundImage, ...rest }, ref) => {
    const generatedClassName = cardColorStyles({
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
CardColor.displayName = 'CardColor';
