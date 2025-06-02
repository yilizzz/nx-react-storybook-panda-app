import { defineSlotRecipe } from '@pandacss/dev';
export const paginationRecipe = defineSlotRecipe({
  className: 'checkbox',
  description: 'The styles for the Checkbox component',
  slots: [
    'root',
    'prevTrigger',
    'item',
    'nextTrigger',
    'buttonActive',
    'buttonInactive',
  ],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2',
    },
    prevTrigger: {
      borderRadius: 'sm',
      width: '6',
      height: '6',
      background: 'primary',
      color: 'textWhite',
    },
    nextTrigger: {
      borderRadius: 'sm',
      width: '6',
      height: '6',
      background: 'primary',
      color: 'textWhite',
    },
    buttonActive: {
      borderRadius: 'sm',
      width: '6',
      height: '6',
      background: 'secondary',
      color: 'textWhite',
    },
    buttonInactive: {
      borderRadius: 'sm',
      width: '6',
      height: '6',
      background: 'primary',
      color: 'textWhite',
      _hover: {
        background: 'primary.200',
      },
    },
  },
  variants: {},

  defaultVariants: {},
});
