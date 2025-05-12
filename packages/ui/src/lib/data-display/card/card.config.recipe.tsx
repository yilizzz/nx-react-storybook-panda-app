import { defineRecipe } from '@pandacss/dev';

export const cardRecipe = defineRecipe({
  className: 'card',
  description: 'The styles for the Card component',
  base: {
    display: 'inline-flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
        paddingX: '6',
        paddingY: '9',
        borderRadius: 'lg',
      },
      primary: {
        background: 'primary.900',
        padding: '5',
        borderRadius: 'lg',
      },
      secondary: {
        background: 'secondary',
        padding: '5',
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
  jsx: ['Card'],
});
