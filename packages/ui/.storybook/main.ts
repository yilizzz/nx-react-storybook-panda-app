import type { StorybookConfig } from '@storybook/react-vite';
/* import { mergeConfig } from 'vite';
const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths');
import tsconfig from '../../../tsconfig.base.json'; */
// after add vite-tsconfig-paths to vite.config.ts, these config for alias can be deleted
const config: StorybookConfig = {
  //stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  /*   viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          ...config.resolve?.alias,
          ...tsconfig.compilerOptions.paths,
        },
      },
    });
  }, */
  /*   async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins || []), tsconfigPaths.default()],
    };
  }, */
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
