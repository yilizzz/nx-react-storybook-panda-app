import React, { ElementType, forwardRef } from 'react';
import { button, type ButtonVariantProps } from '@styled-system/ui/recipes';
import { Group, Box } from '@styled-system/ui/jsx';
import { Icon } from '@packages/ui/src/lib/typography/icon/icon';
interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode;
  iconLeft?: ElementType;
  iconRight?: ElementType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant, iconLeft, iconRight, size, shape, square, ...rest },
    ref
  ) => {
    const generatedClassName = button({
      variant,
      size,
      shape,
      square,
    });
    return (
      <Box ref={ref} {...rest} className={generatedClassName}>
        <Group>
          {iconLeft && <Icon as={iconLeft} />}
          {children}
          {iconRight && <Icon as={iconRight} />}
        </Group>
      </Box>
    );
  }
);
Button.displayName = 'Button';
