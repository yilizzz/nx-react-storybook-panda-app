import { defineConfig } from '@pandacss/dev';
import { textRecipe } from './src/lib/typography/text/text.config.recipe';
//import { iconRecipe } from 'src/ui/lib/typography/icon/icon.config.recipe';
import { iconRecipe } from './src/lib/typography/icon/icon.config.recipe';
import { buttonRecipe } from './src/lib/buttons/button.config.recipe';
import { cardRecipe } from './src/lib/data-display/card/card.config.recipe';
import {
  cardFlipRecipe,
  cardFaceStyles,
} from './src/lib/data-display/card-flip/card-flip.config.recipe';
export default defineConfig({
  globalCss: {
    ':root': {},
  },
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],
  jsxFramework: 'react',
  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xs2: '320px',
        xs: '480px',
        xl2: '1536px',
        xl3: '1728px',
      },
      tokens: {
        fontSizes: {
          h0: { value: '180px' },
          h1: { value: '60px' },
          h2: { value: '46px' },
          h3: { value: '38px' },
          h4: { value: '32px' },
          h5: { value: '24px' },
          h6: { value: '20px' },
          body1: { value: '16px' },
          body2: { value: '12px' },
          body3: { value: '10px' },
        },
        lineHeights: {
          h0: { value: '205px' },
          h1: { value: '68px' },
          h2: { value: '52px' },
          h3: { value: '43px' },
          h4: { value: '36px' },
          h5: { value: '27px' },
          h6: { value: '23px' },
          body1: { value: '18px' },
          body2: { value: '14px' },
          body3: { value: '11px' },
        },
        fontWeights: {
          normal: { value: '400' },
          medium: { value: '500' },
          bold: { value: '700' },
        },
        radii: {
          none: { value: '0' },
          sm: { value: '8px' },
          md: { value: '12px' },
          lg: { value: '24px' },
          full: { value: '999px' },
        },
        sizes: {
          '8xl': {
            value: '1770px',
          },
        },
        shadows: {
          elevated: { value: '0 4px 4px  #0000001A' },
          elevatedAlt: { value: '0 0 12px  #00000040' },
        },
        spacing: {},
        colors: {
          'primary.900': { value: '#01112C' },
          'primary.800': { value: '#021835' },
          'primary.700': { value: '#032242' },
          'primary.600': { value: '#052E4F' },
          'primary.500': { value: '#073C5D' },
          'primary.400': { value: '#307A9D' },
          'primary.300': { value: '#5BB0CE' },
          'primary.200': { value: '#96DCEE' },
          'primary.100': { value: '#C9F0F6' },
          'secondary.900': { value: '#5A0431' },
          'secondary.800': { value: '#6D0732' },
          'secondary.700': { value: '#880B34' },
          'secondary.600': { value: '#A21033' },
          'secondary.500': { value: '#BD172F' },
          'secondary.400': { value: '#D74950' },
          'secondary.300': { value: '#EB746F' },
          'secondary.200': { value: '#F8ACA1' },
          'secondary.100': { value: '#FBD9CF' },
          'neutral.900': { value: '#15080C' },
          'neutral.800': { value: '#190E11' },
          'neutral.700': { value: '#1F1617' },
          'neutral.600': { value: '#252020' },
          'neutral.500': { value: '#2C2C2C' },
          'neutral.400': { value: '#808080' },
          'neutral.300': { value: '#BFBFBF' },
          'neutral.200': { value: '#E9E9E9' },
          'neutral.100': { value: '#F4F4F4' },
        },
      },
      semanticTokens: {
        colors: {
          textWhite: { value: '{colors.neutral.100}' },
          textDark: { value: '{colors.primary.900}' },
          primary: { value: '{colors.primary.500}' },
          secondary: { value: '{colors.secondary.500}' },
          danger: { value: '{colors.secondary.500}' },
          success: { value: '#0FEE0F' },
        },
      },
      // Add library-specific theme extensions if needed
      recipes: {
        text: textRecipe,
        icon: iconRecipe,
        button: buttonRecipe,
        card: cardRecipe,
        cardFlip: cardFlipRecipe,
        cardFace: cardFaceStyles,
      },
    },
  },
  patterns: {
    extend: {
      group: {
        description: 'A horizontal stack',
        defaultValues: {
          display: 'flex',
          width: 'full',
          gap: '3',
        },
        properties: {
          justify: {
            type: 'property',
            value: 'justifyContent',
          },
          align: {
            type: 'property',
            value: 'alignItems',
          },
          direction: {
            type: 'property',
            value: 'flexDirection',
          },
          rowGap: {
            type: 'property',
            value: 'rowGap',
          },
          columnGap: {
            type: 'property',
            value: 'columnGap',
          },
          wrap: {
            type: 'boolean',
          },
        },
        blocklist: [],
        transform(props) {
          const {
            direction = 'row',
            justify = 'flex-start',
            align = 'center',
            rowGap = '3',
            columnGap = '3',
            wrap = false,
            asChild,
            ...rest
          } = props;
          if (wrap) {
            return {
              flexWrap: 'wrap',
              ...rest,
            };
          }
          return {
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            rowGap: rowGap,
            columnGap: columnGap,
            ...rest,
          };
        },
      },
      stack: {
        description: 'A vertical stack',
        defaultValues: { display: 'flex', width: 'full', gap: '3' },
        properties: {
          justify: {
            type: 'property',
            value: 'alignItems',
          },
          align: {
            type: 'property',
            value: 'justifyContent',
          },
          direction: {
            type: 'property',
            value: 'flexDirection',
          },
          rowGap: {
            type: 'property',
            value: 'rowGap',
          },
          columnGap: {
            type: 'property',
            value: 'columnGap',
          },
        },
        blocklist: [],
        transform(props) {
          const {
            direction = 'column',
            justify = 'flex-start',
            align = 'center',
            rowGap = '3',
            columnGap = '3',
            ...rest
          } = props;
          return {
            display: 'flex',
            flexDirection: direction,
            justifyContent: align,
            alignItems: justify,
            rowGap: rowGap,
            columnGap: columnGap,
            ...rest,
          };
        },
      },
      position: {
        description: 'A div positioned',
        defaultValues: {
          position: 'relative',
        },
        properties: {
          position: {
            type: 'enum',
            value: ['absolute', 'static', 'fixed', 'sticky', 'relative'],
          },
        },
        blocklist: [],
        transform(props) {
          const { position, ...rest } = props;
          return {
            position: position,
            ...rest,
          };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
