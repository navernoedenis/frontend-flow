import type { Configuration, BuildOptions } from './types';

import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';

export function buildConfig(options: BuildOptions): Configuration {
  const { isDevelopment, mode, paths } = options;

  return {
    entry: {
      main: paths.entry,
      'init-theme': paths.initTheme,
      'service-worker': paths.serviceWorker,
    },
    mode,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    output: {
      clean: true,
      filename: '[name].[hash].js',
      path: paths.build,
      publicPath: '/',
    },
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDevelopment ? buildDevServer(options) : undefined,
  };
}
