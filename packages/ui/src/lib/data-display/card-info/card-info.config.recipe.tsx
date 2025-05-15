import { defineSlotRecipe } from '@pandacss/dev';

export const cardInfoRecipe = defineSlotRecipe({
  className: 'card-info',
  description: 'The styles for the CardInfo component',
  slots: ['root', 'image', 'info'],
  base: {
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      borderRadius: 'lg',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '70%',
      maxHeight: '300px',
    },
    info: {
      background: 'primary',
      padding: '6',
      width: '100%',
      height: '30%',
    },
  },
  variants: {},
  defaultVariants: {},
});
