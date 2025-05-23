import { forwardRef, ElementType } from 'react';
import { css, cx } from '@styled-system/ui/css';
import { IconVariantProps, icon } from '@styled-system/ui/recipes';
import { splitCssProps, styled } from '@styled-system/ui/jsx';
import type { HTMLStyledProps } from '@styled-system/ui/types';
interface IconProps extends IconVariantProps {
  as?: ElementType;
  className?: string;
  size?: number | string;
  [key: string]: any; // To allow passthrough of other HTML attributes
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ as: As, className: userClassName, size = '24px', ...props }, ref) => {
    const [cssProps, restProps] = splitCssProps(props);
    const { css: cssProp, ...styleProps } = cssProps;

    const pandaClassName = css(styleProps, cssProp);

    const combinedClassName = userClassName
      ? `${pandaClassName} ${userClassName}`
      : pandaClassName;
    const generatedClassName = icon({
      size,
    });
    return (
      <As
        ref={ref}
        {...restProps}
        className={combinedClassName}
        /* {...props}
        className={generatedClassName} */
        style={{ width: size, height: size }}
      />
    );
  }
);

Icon.displayName = 'Icon';
