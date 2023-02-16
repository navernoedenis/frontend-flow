import { type Configuration } from 'webpack-dev-server';
import { type BuildOptions } from './types';

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    historyApiFallback: true,
    hot: true,
    open: false,
    port: options.port,
  };
}
