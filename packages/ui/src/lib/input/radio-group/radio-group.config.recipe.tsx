import { defineSlotRecipe } from '@pandacss/dev';
export const radioGroupRecipe = defineSlotRecipe({
  className: 'radioGroup',
  description: 'The styles for the RadioGroup component',
  slots: ['root', 'label', 'item', 'itemText', 'itemInput'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
    label: {
      fontSize: 'h5',
      fontWeight: 'semibold',
      lineHeight: 'h5',
    },
    item: {
      display: 'flex',
    },
    itemText: {
      fontSize: 'body1',
      fontWeight: 'medium',
      lineHeight: 'body1',
    },
    itemInput: {
      width: '16px',
      height: '16px',
      bg: 'primary',
      borderRadius: 'full',
      borderColor: 'neutral.400',
      backgroundColor: 'white',
      marginRight: '2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease-in-out',
      _checked: {
        boderColor: 'primary',
        backgroundColor: 'primary',
      },
    },
  },
  variants: {
    variant: {
      primary: {
        itemText: { color: 'primary' },
      },
      secondary: {
        itemText: { color: 'secondary' },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
