import React, { forwardRef } from 'react';

import { cva, type RecipeVariantProps } from '@styled-system/frontend/css';
import { styled } from '@styled-system/frontend/jsx';

export const cardStyles = cva({
  base: {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  variants: {
    variant: {
      neutral: {
        background: 'neutral.500',
        paddingX: '12',
        paddingY: '5',
        borderRadius: 'lg',
      },
      elevated: {
        background: 'neutral.100',
        borderRadius: 'md',
        boxShadow: 'elevated',
        padding: '5',
      },

      primary: {
        background: 'primary.100',
        padding: '6',
        borderRadius: 'lg',
      },
      secondary: {
        background: 'secondary.100',
        padding: '6',
        borderRadius: 'lg',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
  },
});
export type CardVariants = RecipeVariantProps<typeof cardStyles>;
export const CardColor = styled('div', cardStyles);

/* type CardProps = CardVariants & {
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
); */
