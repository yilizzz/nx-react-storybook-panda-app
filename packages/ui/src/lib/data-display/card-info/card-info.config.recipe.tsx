import { defineSlotRecipe } from '@pandacss/dev';

export const cardInfoRecipe = defineSlotRecipe({
  className: 'card-info',
  description: 'The styles for the CardInfo component',
  slots: ['root', 'image', 'info'],
  base: {
    root: {
      borderRadius: 'lg',
    },
    image: {
      borderTopLeftRadius: 'lg',
      borderTopRightRadius: 'lg',
      /*  backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      display: 'flex', */
    },
    info: {
      background: 'primary',
      padding: '6',
      borderBottomLeftRadius: 'lg',
      borderBottomRightRadius: 'lg',
    },
  },
  variants: {},
  defaultVariants: {},
});
