import { defineConfig } from '@pandacss/dev';

const sharedConfig = defineConfig({
  theme: {
    breakpoints: {
      xs2: '320px',
      xs: '480px',
      xl2: '1536px',
      xl3: '1728px',
    },
    tokens: {
      fontSizes: {
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '22px' },
        xl: { value: '26px' },
        xl2: { value: '32px' },
      },
      lineHeights: {
        sm: { value: '16px' },
        md: { value: '18px' },
        lg: { value: '26px' },
        xl: { value: '30px' },
        xl2: { value: '40px' },
      },
      fontWeights: {
        light: { value: '300' },
        normal: { value: '400' },
        medium: { value: '500' },
        bold: { value: '700' },
      },
      radii: {
        none: { value: '0' },
        md: { value: '12px' },
        lg: { value: '24px' },
        full: { value: '999px' },
      },
      sizes: {
        '8xl': {
          value: '1770px',
        },
      },
      spacing: {},
      colors: {
        primary: { value: '#1B4D3E' },
        primaryLight: { value: '#72a5b0' },
        secondary: { value: '#690B22' },
        secondaryLight: { value: '#f0a5a8' },
        tertiary: { value: '#E07A5F' },
        tertiaryLight: { value: '#F1E3D3' },
        white: { value: 'whiteSmoke' },
        dark: { value: '#33404a' },
        danger: { value: '#EE0F0F' },
        success: { value: '#0FEE0F' },
      },
    },
  },
  // Other shared configurations like preflight, exclude, etc., if applicable
});

export const sharedTheme = sharedConfig.theme;
export const sharedPandaConfig = sharedConfig; // Export the whole config if needed
