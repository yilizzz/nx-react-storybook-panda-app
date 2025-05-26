import { defineSlotRecipe } from '@pandacss/dev';

export const cardDecoRecipe = defineSlotRecipe({
  className: 'card-deco',
  description: 'The styles for the CardDeco component',
  slots: ['root', 'deco', 'content'],
  base: {
    root: {
      overflow: 'hidden',
      display: 'flex',
      borderRadius: 'lg',
      flexDirection: 'column',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
    },
    deco: { width: '200px', height: '200px' },
    content: {
      paddingX: '6',
      paddingY: '9',
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          background: 'primary',
        },
      },
      neutral: {
        root: {
          background: 'neutral.100',
        },
      },
      backgroundImage: {
        root: {},
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
