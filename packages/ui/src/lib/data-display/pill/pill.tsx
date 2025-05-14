import React, { ElementType, forwardRef } from 'react';
import {
  pill,
  type PillVariantProps,
} from '@packages/ui/styled-system/recipes';
import { Group } from '@packages/ui/styled-system/jsx';
import { Icon } from '../../typography/icon/icon';
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
        <Group
          w="full"
          h="full"
          color={color}
          justifyContent={'center'}
          alignItems={'center'}
          gap="2"
        >
          {children}
          {icon && <Icon as={icon} />}
        </Group>
      </div>
    );
  }
);
Pill.displayName = 'Pill';
