import React, { forwardRef } from 'react';
import { cardStyles, CardVariants } from './card.cva.recipe';
type CardProps = CardVariants & {
  children: React.ReactNode;
  backgroundImage?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, backgroundImage, ...rest }, ref) => {
    const generatedClassName = cardStyles({
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
