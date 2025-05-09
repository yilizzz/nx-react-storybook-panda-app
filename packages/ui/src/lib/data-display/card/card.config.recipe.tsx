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
    },
  },

  defaultVariants: {
    variant: 'neutral',
  },
  jsx: ['Card'],
});
