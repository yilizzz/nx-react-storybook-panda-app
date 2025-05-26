import React, { forwardRef } from 'react';
import { cardStyles, type CardVariants } from './card-color.cva.recipe';
type CardProps = CardVariants & {
  children: React.ReactNode;
  backgroundImage?: string;
};

export const CardColor = forwardRef<HTMLDivElement, CardProps>(
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
CardColor.displayName = 'CardColor';
