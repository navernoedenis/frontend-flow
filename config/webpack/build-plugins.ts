import { DefinePlugin, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import CopyPlugin from 'copy-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlInlineScriptPlugin from 'html-inline-script-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

import type { WebpackPluginInstance } from 'webpack';
import type { BuildOptions } from './types';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { host, isDevelopment, isStorybook, manifest, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new ProgressPlugin(),
    new DefinePlugin({
      __HOST__: JSON.stringify(host),
      __IS_DEV__: JSON.stringify(isDevelopment),
      __IS_STORYBOOK__: JSON.stringify(isStorybook),
    }),
    new FaviconsWebpackPlugin(paths.favicon),
    new HtmlInlineScriptPlugin({
      scriptMatchPattern: [/init-theme.+[.]js$/],
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      excludeChunks: ['service-worker'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new WebpackPwaManifest(manifest) as WebpackPluginInstance,
    new CopyPlugin({
      patterns: [
        {
          from: paths.locales.from,
          to: paths.locales.to,
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];

  if (isDevelopment) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
