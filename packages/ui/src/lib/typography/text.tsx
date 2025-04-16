import React, { forwardRef } from 'react';
import { text, type TextVariantProps } from '../../../styled-system/recipes';

interface TextProps extends TextVariantProps {
  children: React.ReactNode;
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      size,
      variant,
      color,
      lineHeight,
      weight,
      italic,
      uppercase,
      underline,
      ...rest
    },
    ref
  ) => {
    const generatedClassName = text({
      size,
      variant,
      color,
      lineHeight,
      weight,
      italic,
      uppercase,
      underline,
    });
    return (
      <div ref={ref} {...rest} className={generatedClassName}>
        {children}
      </div>
    );
  }
);
Text.displayName = 'Text';
