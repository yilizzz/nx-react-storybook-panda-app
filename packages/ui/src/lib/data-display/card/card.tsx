import React, { forwardRef } from 'react';
import { card, type CardVariantProps } from '../../../../styled-system/recipes';
import { Position } from '@packages/ui/styled-system/jsx';
interface CardProps extends CardVariantProps {
  children: React.ReactNode;
  background?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, background, ...rest }, ref) => {
    const generatedClassName = card({
      variant,
    });
    return (
      <div ref={ref} {...rest} className={generatedClassName}>
        {background && (
          <Position position={'absolute'} w="full" h="full">
            {background}
          </Position>
        )}
        <Position w="full" h="full">
          {children}
        </Position>
      </div>
    );
  }
);
Card.displayName = 'Card';
