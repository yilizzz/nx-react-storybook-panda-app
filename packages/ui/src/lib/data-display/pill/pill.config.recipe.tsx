import { defineRecipe } from '@pandacss/dev';

export const pillRecipe = defineRecipe({
  className: 'pill',
  description: 'The styles for the Pill component',
  base: {
    display: 'inline-block',
    flexShrink: 0,
    borderRadius: 'sm',
  },
  variants: {
    variant: {
      default: {
        background: '#307A9D40',
        paddingX: '6',
        paddingY: '2',
      },
      inverse: {
        background: 'white',
        paddingX: '6',
        paddingY: '2',
      },
      square: { background: 'white', padding: '4' },
      squareAlt: { background: 'primary', padding: '4' },
    },
  },

  defaultVariants: { variant: 'default' },
  jsx: ['Pill'],
});
