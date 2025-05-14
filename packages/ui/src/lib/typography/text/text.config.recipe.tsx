import { defineRecipe } from '@pandacss/dev';

export const textRecipe = defineRecipe({
  className: 'text',
  description: 'The styles for the Text component',
  base: {
    '& a': {
      color: 'primary',
      textDecoration: 'underline',
      textUnderlineOffset: '4',
      _hover: {
        color: 'secondary',
      },
    },
    '& ins': {
      color: 'secondary',
      textDecoration: 'none',
    },
  },
  variants: {
    variant: {
      default: {
        color: 'primary',
        fontWeight: 'normal',
        sm: {
          fontSize: 'body2',
          lineHeight: 'body2',
        },
        md: {
          fontSize: 'body1',
          lineHeight: 'body1',
        },
      },
      headLine: {
        color: 'textWhite',
        fontWeight: 'bold',
        sm: {
          fontSize: 'h2',
          lineHeight: 'h2',
        },
        lg: {
          fontSize: 'h1',
          lineHeight: 'h1',
        },
        xl2: {
          fontSize: 'h0',
          lineHeight: 'h0',
        },
      },
      sectionTitle: {
        fontWeight: 'bold',
        sm: {
          fontSize: 'h3',
          lineHeight: 'h3',
        },
        lg: {
          fontSize: 'h2',
          lineHeight: 'h2',
        },
        xl2: {
          fontSize: 'h1',
          lineHeight: 'h1',
        },
      },
      segmentTitle: {
        color: 'primary',
        fontWeight: 'bold',
        sm: {
          fontSize: 'h4',
          lineHeight: 'h4',
        },
        lg: {
          fontSize: 'h3',
          lineHeight: 'h3',
        },
        xl2: {
          fontSize: 'h2',
          lineHeight: 'h2',
        },
      },
      itemTitle: {
        color: 'primary',
        fontWeight: 'bold',
        sm: {
          fontSize: 'h5',
          lineHeight: 'h5',
        },
        lg: {
          fontSize: 'h4',
          lineHeight: 'h4',
        },
      },
      cardTitle: {
        color: 'primary',
        fontWeight: 'bold',
        sm: {
          fontSize: 'h6',
          lineHeight: 'h6',
        },
        lg: {
          fontSize: 'h5',
          lineHeight: 'h5',
        },
      },
      blockTitle: {
        color: 'primary',
        fontWeight: 'medium',
        sm: {
          fontSize: 'h6',
          lineHeight: 'h6',
        },
        lg: {
          fontSize: 'h5',
          lineHeight: 'h5',
        },
      },
      pointTitle: {
        color: 'primary',
        fontWeight: 'bold',
        fontSize: 'h6',
        lineHeight: 'h6',
      },
    },
    color: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
      white: {
        color: 'textWhite',
      },
      danger: {
        color: 'danger',
      },
      success: {
        color: 'success',
      },
    },
    size: {
      h0: { fontSize: 'h0' },
      h1: { fontSize: 'h1' },
      h2: { fontSize: 'h2' },
      h3: { fontSize: 'h3' },
      h4: { fontSize: 'h4' },
      h5: { fontSize: 'h5' },
      h6: { fontSize: 'h6' },
      body1: { fontSize: 'body1' },
      body2: { fontSize: 'body2' },
      body3: { fontSize: 'body3' },
    },
    lineHeight: {
      h0: { lineHeight: 'h0' },
      h1: { lineHeight: 'h1' },
      h2: { lineHeight: 'h2' },
      h3: { lineHeight: 'h3' },
      h4: { lineHeight: 'h4' },
      h5: { lineHeight: 'h5' },
      h6: { lineHeight: 'h6' },
      body1: { lineHeight: 'body1' },
      body2: { lineHeight: 'body2' },
      body3: { lineHeight: 'body3' },
    },
    weight: {
      normal: {
        fontWeight: 'normal',
      },
      medium: {
        fontWeight: 'medium',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
        textUnderlineOffset: '4',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'cardTitle',
      uppercase: true,
      css: {
        fontStyle: 'italic',
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    color: 'primary',
  },
  jsx: ['Text'],
});
