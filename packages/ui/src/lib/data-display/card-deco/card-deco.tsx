import React, { forwardRef } from 'react';
import { cardDeco, type CardDecoVariantProps } from '@styled-system/ui/recipes';
import { Position } from '@styled-system/ui/jsx';
interface CardDecoProps extends CardDecoVariantProps {
  children: React.ReactNode;
  deco: string;
  backgroundImage?: string;
}

export const CardDeco = forwardRef<HTMLDivElement, CardDecoProps>(
  ({ children, deco, backgroundImage, variant, ...rest }, ref) => {
    const classes = cardDeco({ variant });
    return (
      <div
        className={classes.root}
        ref={ref}
        {...rest}
        style={{
          backgroundImage: backgroundImage ? `url("${backgroundImage}")` : ``,
        }}
      >
        <div className={classes.content}>{children}</div>
        <Position w="full" h="220px">
          <Position
            position={'absolute'}
            left={'-38px'}
            bottom={'-38px'}
            width="220px"
            height="220px"
            borderStyle={'solid'}
            borderWidth={'1'}
            borderColor={
              variant === 'neutral'
                ? 'primary'
                : variant === 'backgroundImage'
                ? 'secondary'
                : 'white'
            }
            borderRadius={'full'}
          />
          <Position
            position={'absolute'}
            left={'-30px'}
            bottom={'-30px'}
            borderRadius={'full'}
            overflow={'hidden'}
          >
            <img src={deco} className={classes.deco} />
          </Position>
        </Position>
      </div>
    );
  }
);
CardDeco.displayName = 'CardDeco';
