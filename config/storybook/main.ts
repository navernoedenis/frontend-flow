import path from 'path';
import type { StorybookConfig } from '@storybook/core-common';
import { buildWebpackConfig } from './webpack.config';

const rootDir = path.resolve(__dirname, '..', '..');

const config: StorybookConfig = {
  staticDirs: [`${rootDir}/public`],
  stories: [`${rootDir}/src/**/*.stories.@(js|jsx|ts|tsx)`],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: buildWebpackConfig,
};

export default config;
