import React, { forwardRef } from 'react';
import { cardInfo, type CardInfoVariantProps } from '@styled-system/ui/recipes';

interface CardInfoProps extends CardInfoVariantProps {
  children: React.ReactNode;
  image?: string;
}

export const CardInfo = forwardRef<HTMLDivElement, CardInfoProps>(
  ({ children, image, ...rest }, ref) => {
    const classes = cardInfo({});
    return (
      <div className={classes.root} ref={ref} {...rest}>
        <img src={image} className={classes.image} />
        <div className={classes.info}>{children}</div>
      </div>
    );
  }
);
CardInfo.displayName = 'CardInfo';
