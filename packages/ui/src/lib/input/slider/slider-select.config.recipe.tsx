import { defineSlotRecipe } from '@pandacss/dev';
export const sliderRecipe = defineSlotRecipe({
  className: 'slider',
  description: 'The styles for the Slider component',
  slots: ['range', 'track', 'thumb'],
  base: {
    range: {
      position: 'absolute',
      height: '3',
      backgroundColor: 'secondary',
    },
    track: {
      position: 'relative',
      height: '3',
      borderRadius: 'full',
      overflow: 'hidden',
      backgroundColor: 'primary',
    },
    thumb: {
      position: 'absolute',
      top: 0,
      width: '3',
      height: '3',
      background: 'secondary',
      borderRadius: 'full',
      borderColor: 'secondary',
    },
  },
  variants: {},

  defaultVariants: {},
});
