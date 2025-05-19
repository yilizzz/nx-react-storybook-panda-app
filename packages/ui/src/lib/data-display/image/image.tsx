import React, { forwardRef } from 'react';
import { image, type ImageVariantProps } from '@styled-system/ui/recipes';
import { splitCssProps } from '@styled-system/ui/jsx';
import { css } from '@styled-system/ui/css';
interface ImageProps extends ImageVariantProps {
  src: string;
  alt?: string;
  loading?: 'lazy' | 'eager' | undefined;
  className?: string;
  [key: string]: any;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      variant,
      src,
      alt = '',
      loading = 'lazy',
      className: userClassName,
      ...props
    },
    ref
  ) => {
    const [cssProps, restProps] = splitCssProps(props);
    const { css: cssProp, ...styleProps } = cssProps;

    const pandaClassName = css(image.raw({ variant }), styleProps, cssProp);

    const combinedClassName = userClassName
      ? `${pandaClassName} ${userClassName}`
      : pandaClassName;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        {...restProps}
        className={combinedClassName}
      />
    );
  }
);
Image.displayName = 'Image';
