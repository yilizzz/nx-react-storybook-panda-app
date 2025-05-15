import { defineRecipe } from '@pandacss/dev';

export const imageRecipe = defineRecipe({
  className: 'image',
  description: 'The styles for the Image component',
  base: {},
  variants: {
    variant: {
      default: {
        borderRadius: 'xl',
      },
      pointed: {
        borderRadius: 'md',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
  jsx: ['Image'],
});
