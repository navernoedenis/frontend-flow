import { DefinePlugin, ProgressPlugin } from 'webpack';
import type { WebpackPluginInstance } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import type { BuildOptions } from './types';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { isDevelopment, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDevelopment),
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: isDevelopment ? 'css/[name].css' : 'css/[name].[hash].css',
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];

  if (isDevelopment) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
