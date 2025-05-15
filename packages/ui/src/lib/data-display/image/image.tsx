import React, { forwardRef } from 'react';
import {
  image,
  type ImageVariantProps,
} from '@packages/ui/styled-system/recipes';

interface ImageProps extends ImageVariantProps {
  src: string;
  alt?: string;
  loading?: 'lazy' | 'eager' | undefined;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' | undefined;
  width: number | string;
  height: number | string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    { variant, src, alt = '', loading = 'lazy', fit, width, height, ...rest },
    ref
  ) => {
    const generatedClassName = image({
      variant,
    });
    return (
      <img
        ref={ref}
        {...rest}
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={generatedClassName}
        objectFit={fit}
      />
    );
  }
);
Image.displayName = 'Image';
