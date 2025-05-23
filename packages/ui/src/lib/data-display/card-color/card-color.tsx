import { cva } from '@styled-system/ui/css';
import { styled } from '@styled-system/ui/jsx';
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
      normal: { borderRadius: 'sm' },
      rounded: { borderRadius: 'lg' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    shape: 'normal',
  },
});
export const CardColor = styled('div', cardStyles);

CardColor.displayName = 'CardColor';
