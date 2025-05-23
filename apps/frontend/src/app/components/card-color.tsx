import { cva } from '@styled-system/frontend/css';
import { styled } from '@styled-system/frontend/jsx';

export const cardStyles = cva({
  base: {
    color: 'white',
  },
  variants: {
    variant: {
      primary: {
        background: 'primary',
      },
      secondary: {
        background: 'secondary',
      },
    },
    shape: {
      normal: { borderRadius: '0' },
      rounded: { borderRadius: 'lg' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    shape: 'normal',
  },
});

export const CardColor = styled('div', cardStyles);
