import { defineConfig } from '@pandacss/dev';
import pandaConfig from '@packages/ui/panda.config.ts';
import { animationStyles } from './animation-styles';
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    // Configure Panda CSS to Include Your Library's Source:
    // You need to tell Panda CSS in your main project to also look at the source files of your library to generate the necessary CSS.
    // Panda CSS is a Build-Time Transformation
    // Styles are Generated Based on Code Usage
    // Main Project's Panda CSS Needs to See the Declarations
    // Not Pre-compiled CSS
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',
  // Useful for theme customization
  theme: {
    extend: {
      ...pandaConfig.theme?.extend,
      // Add main project-specific theme extensions if needed
      animationStyles,
    },
  },
  patterns: {
    ...pandaConfig.patterns,
  },
  // The output directory for your css system
  outdir: 'styled-system',
});
