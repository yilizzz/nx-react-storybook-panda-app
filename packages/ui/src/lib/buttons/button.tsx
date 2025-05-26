import React, { ElementType, forwardRef } from 'react';
import { button, type ButtonVariantProps } from '@styled-system/ui/recipes';
import { Group, Box } from '@styled-system/ui/jsx';
import { Icon } from 'src/ui/lib/typography/icon/icon';
import { splitCssProps } from '@styled-system/ui/jsx';
import { cx, css } from '@styled-system/ui/css';
type ButtonProps = ButtonVariantProps & {
  children: React.ReactNode;
  iconLeft?: ElementType;
  iconRight?: ElementType;
  /* className?: string;
  [key: string]: any; */
};

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  (
    {
      children,
      variant,
      iconLeft,
      iconRight,
      size,
      shape,
      square,
      // className: userClassName,
      ...props
    },
    ref
  ) => {
    const [cssProps, restProps] = splitCssProps(props);
    const { css: cssProp, ...styleProps } = cssProps;

    const pandaClassName = cx(
      button({ variant, size, shape, square }),
      css(styleProps),
      css(cssProp)
    );

    const generatedClassName = button({
      variant,
      size,
      shape,
      square,
    });
    return (
      <button ref={ref} {...props} className={generatedClassName}>
        <Group>
          {iconLeft && <Icon as={iconLeft} />}
          {children}
          {iconRight && <Icon as={iconRight} />}
        </Group>
      </button>
    );
  }
);
Button.displayName = 'Button';
