import { DefinePlugin, ProgressPlugin } from 'webpack';
import type { WebpackPluginInstance } from 'webpack';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlInlineScriptPlugin from 'html-inline-script-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import type { BuildOptions } from './types';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { isStorybook, isDevelopment, paths, host } = options;

  const plugins: WebpackPluginInstance[] = [
    new ProgressPlugin(),
    new DefinePlugin({
      __HOST__: JSON.stringify(host),
      __IS_DEV__: JSON.stringify(isDevelopment),
      __IS_STORYBOOK__: JSON.stringify(isStorybook),
    }),
    new HtmlInlineScriptPlugin({
      scriptMatchPattern: [/initTheme.+[.]js$/],
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];

  if (isDevelopment) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
