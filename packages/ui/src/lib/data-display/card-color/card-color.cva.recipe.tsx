import { cva, type RecipeVariantProps } from '@styled-system/ui/css';
import { styled } from '@styled-system/ui/jsx';

export const cardColorStyles = cva({
  base: {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  variants: {
    variant: {
      neutral: {
        background: 'neutral.500',
        paddingX: '12',
        paddingY: '5',
        borderRadius: 'lg',
      },
      elevated: {
        background: 'neutral.100',
        borderRadius: 'md',
        boxShadow: 'elevated',
        padding: '5',
      },

      primary: {
        background: 'primary.900',
        padding: '6',
        borderRadius: 'lg',
      },
      secondary: {
        background: 'secondary.900',
        padding: '6',
        borderRadius: 'lg',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
  },
});
export type CardColorVariants = RecipeVariantProps<typeof cardColorStyles>;
export const cardColor = styled('div', cardColorStyles);
