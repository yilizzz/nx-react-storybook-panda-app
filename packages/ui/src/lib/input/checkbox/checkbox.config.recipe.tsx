import { defineSlotRecipe } from '@pandacss/dev';
export const checkboxRecipe = defineSlotRecipe({
  className: 'checkbox',
  description: 'The styles for the Checkbox component',
  slots: ['root', 'control', 'indicator', 'label'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      cursor: 'pointer',
    },
    control: {
      borderWidth: '2px',
      borderRadius: 'sm',
      width: '6',
      height: '6',
      flexShrink: 0,
      position: 'relative',
      borderColor: 'neutral.200',
    },
    indicator: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    label: { marginStart: '2', fontSize: '16px' },
  },
  variants: {
    variant: {
      primary: {
        label: { color: 'primary' },
      },
      secondary: {
        label: { color: 'secondary' },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
