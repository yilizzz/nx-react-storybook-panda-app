import React, { forwardRef } from 'react';
import {
  cardInfo,
  type CardInfoVariantProps,
} from '@packages/ui/styled-system/recipes';
import { Stack, Box } from '@packages/ui/styled-system/jsx';
interface CardInfoProps extends CardInfoVariantProps {
  children: React.ReactNode;
  image?: string;
}

export const CardInfo = forwardRef<HTMLDivElement, CardInfoProps>(
  ({ children, image, ...rest }, ref) => {
    const classes = cardInfo({});
    return (
      <Stack
        className={classes.root}
        ref={ref}
        {...rest}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ gap: '0' }}
        minH="200px"
      >
        <Box
          className={classes.image}
          /*  style={{
            backgroundImage: image ? `url("${image}")` : ``,
          }} */
        >
          <img src={image} />
        </Box>
        <div className={classes.info}>{children}</div>
      </Stack>
    );
  }
);
CardInfo.displayName = 'CardInfo';
