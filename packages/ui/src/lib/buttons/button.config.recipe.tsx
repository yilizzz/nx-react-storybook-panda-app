import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    flexShrink: 0,
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'inline-block',
    paddingX: '6',
    paddingY: '4',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        background: 'primary',
        color: 'textWhite',
        borderColor: 'primary',
        _hover: {
          background: 'white',
          color: 'primary',
          borderColor: 'primary',
        },
      },
      secondary: {
        background: 'secondary',
        color: 'textWhite',
        borderColor: 'secondary',
        _hover: {
          background: 'white',
          color: 'secondary',
          borderColor: 'secondary',
        },
      },
      outlinePrimary: {
        background: 'white',
        color: 'primary',
        borderColor: 'primary',
        _hover: {
          background: 'primary',
          color: 'textWhite',
          borderColor: 'primary',
        },
      },
      outlineSecondary: {
        background: 'white',
        color: 'secondary',
        borderColor: 'secondary',
        _hover: {
          background: 'secondary',
          color: 'textWhite',
          borderColor: 'secondary',
        },
      },
      ghost: {
        background: 'transparent',
        borderColor: 'transparent',
      },
    },
    size: {
      default: { fontSize: '16px' },
      lg: { fontSize: '24px' },
    },
    shape: {
      square: { borderRadius: 'none' },
      normal: { borderRadius: 'sm' },
      rounded: { borderRadius: 'lg' },
      circle: { borderRadius: 'full' },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
    shape: 'normal',
  },
  jsx: ['Button'],
});
