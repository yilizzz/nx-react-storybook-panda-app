import React, { ElementType, forwardRef } from 'react';
import { pill, type PillVariantProps } from '@styled-system/ui/recipes';
import { HStack } from '@styled-system/ui/jsx';
import { Icon } from 'src/ui/lib/typography/icon/icon';
interface PillProps extends PillVariantProps {
  children: React.ReactNode;
  icon?: ElementType;
  color?: string;
}

export const Pill = forwardRef<HTMLDivElement, PillProps>(
  ({ children, variant, icon, color = 'primary', ...rest }, ref) => {
    const generatedClassName = pill({
      variant,
    });
    return (
      <div ref={ref} {...rest} className={generatedClassName}>
        <HStack
          w="full"
          h="full"
          color={color}
          justifyContent={'center'}
          alignItems={'center'}
          gap="2"
        >
          {children}
          {icon && <Icon as={icon} />}
        </HStack>
      </div>
    );
  }
);
Pill.displayName = 'Pill';
