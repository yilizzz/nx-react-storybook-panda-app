import { defineRecipe } from '@pandacss/dev';

export const pillRecipe = defineRecipe({
  className: 'pill',
  description: 'The styles for the Pill component',
  base: {
    display: 'inline-block',
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {},
      round: {},
      square: {},
      squareAlt: {},
    },
  },

  defaultVariants: {},
  jsx: ['Icon'],
});
