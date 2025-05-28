import { defineSlotRecipe } from '@pandacss/dev';
export const radioGroupRecipe = defineSlotRecipe({
  className: 'radioGroup',
  description: 'The styles for the RadioGroup component',
  slots: ['root', 'label', 'item', 'input', 'control', 'itemLabel'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
    label: {},
    item: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    input: {
      appearance: 'none',
    },
    control: {
      display: 'inline-block',
      borderRadius: 'full',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'primary',
      marginRight: '2',
      transition: 'all 0.2s ease-in-out',
      height: '16px',
      width: '16px',
      backgroundColor: 'white',
      position: 'relative',
      _checked: {
        borderColor: 'secondary',
        _after: {
          content: '""',
          display: 'block',
          width: '10px',
          height: '10px',
          borderRadius: 'full',
          backgroundColor: 'secondary',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
        },
      },
    },
    itemLabel: {},
  },
  variants: {},

  defaultVariants: {},
});
