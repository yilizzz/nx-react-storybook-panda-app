const path = require('path');
const { pascalCase } = require('@figma-export/utils');
const getComponentName = (options) => `Nk${pascalCase(options.basename)}`;

module.exports = {
  commands: [
    [
      'components',
      {
        fileId: 'uieSRIGXJvQxTi0w44FxnV',
        onlyFromPages: ['ICON'],
        filterComponent: (component) => {
          return !component.name.includes('=');
        },
        outputters: [
          require('@figma-export/output-components-as-svgr')({
            output: './src/components',
            getComponentFilename: (options) => getComponentName(options),
            getComponentName: (options) => getComponentName(options),
            getDirname: () => './',
            getFileExtension: () => '.tsx',
            getSvgrConfig: () => ({
              typescript: true,
              ref: true,
              svgProps: {
                width: '1.5em',
                height: '1.5em',
                strokeWidth: 2,
                color: 'currentColor',
              },
              replaceAttrValues: {
                black: 'var(--primary-color)',
                white: 'var(--secondary-color)',
              },
              jsx: {
                babelConfig: {
                  plugins: [
                    [
                      '@svgr/babel-plugin-remove-jsx-attribute',
                      {
                        elements: ['path'],
                        attributes: ['strokeWidth'],
                      },
                      'remove-stroke-width',
                    ],
                  ],
                },
              },
            }),
          }),
        ],
      },
    ],
  ],
};
