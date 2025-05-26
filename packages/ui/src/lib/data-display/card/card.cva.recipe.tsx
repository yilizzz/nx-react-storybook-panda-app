import { cva, type RecipeVariantProps } from '@styled-system/ui/css';
import { styled } from '@styled-system/ui/jsx';

export const cardStyles = cva({
  base: {
    display: 'inline-flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  },
  variants: {
    variant: {
      neutral: {
        background: 'neutral.100',
        paddingX: '12',
        paddingY: '5',
        borderRadius: 'lg',
      },
      elevated: {
        background: 'white',
        borderRadius: 'md',
        boxShadow: 'elevated',
        padding: '5',
      },
      background: {
        padding: '6',
        borderRadius: 'lg',
      },
      primary: {
        background: 'primary.900',
        padding: '6',
        borderRadius: 'lg',
      },
      primaryAlt: {
        background: 'primary.500',
        padding: '6',
        borderRadius: 'lg',
      },
      secondary: {
        background: 'secondary',
        padding: '6',
        borderRadius: 'lg',
      },
      elevatedAlt: {
        background: 'white',
        padding: '12',
        borderRadius: 'lg',
        boxShadow: 'elevatedAlt',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
  },
});
export type CardVariants = RecipeVariantProps<typeof cardStyles>;
export const Card = styled('div', cardStyles);
