import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildWebpackConfig } from './webpack.config';

const rootDir = path.resolve(__dirname, '..', '..');

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-addon-mock',
    'storybook-addon-paddings',
    'storybook-addon-react-router-v6',
    'storybook-addon-root-attributes',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: [`${rootDir}/public`],
  stories: [`${rootDir}/src/**/*.stories.@(js|jsx|ts|tsx)`],
  webpackFinal: buildWebpackConfig,
};

export default config;
