import { forwardRef, type ElementType } from 'react';
import { cx } from '../../../../styled-system/css';
import {
  icon,
  type IconVariantProps,
} from '@packages/ui/styled-system/recipes';

interface IconProps extends IconVariantProps {
  as?: ElementType;
  className?: string;
  size?: number;
  color?: 'primary' | 'secondary' | 'white' | 'danger' | 'success';
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ as: IconComponent, className, size = 16, color, ...props }, ref) => {
    if (!IconComponent) return null;

    const classes = cx(
      icon({
        color,
      })
    );

    const styleObj: React.CSSProperties = {
      ...{ width: `${size}px`, height: `${size}px` },
      ...(color ? { color } : {}),
    };

    return (
      <IconComponent
        ref={ref}
        className={classes}
        style={styleObj}
        {...props}
      ></IconComponent>
    );
  }
);

Icon.displayName = 'Icon';
