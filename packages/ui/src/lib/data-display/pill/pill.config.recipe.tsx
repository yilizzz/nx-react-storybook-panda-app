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
      default: {
        background: '#307A9D40',
        borderRadius: 'sm',
        paddingX: '6',
        paddingY: '2',
      },
      inverse: {
        background: 'white',
        borderRadius: 'sm',
        paddingX: '6',
        paddingY: '2',
      },

      square: { background: 'white', borderRadius: 'sm', padding: '4' },
      squareAlt: { background: 'primary', borderRadius: 'sm', padding: '4' },
    },
  },

  defaultVariants: { variant: 'default' },
  jsx: ['Pill'],
});
