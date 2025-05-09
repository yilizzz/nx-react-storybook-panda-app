import { defineRecipe } from '@pandacss/dev';

export const iconRecipe = defineRecipe({
  className: 'icon',
  description: 'The styles for the Icon component',
  base: {
    display: 'inline-block',
    flexShrink: 0,
    color: 'currentColor',
  },
  variants: {},

  defaultVariants: {},
  jsx: ['Icon'],
});
