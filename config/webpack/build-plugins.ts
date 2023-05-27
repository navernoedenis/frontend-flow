import { DefinePlugin, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import CircularDependency from 'circular-dependency-plugin';
import Copy from 'copy-webpack-plugin';
import FaviconsWebpack from 'favicons-webpack-plugin';
import ForkTsCheckerWebpack from 'fork-ts-checker-webpack-plugin';
import HtmlInlineScript from 'html-inline-script-webpack-plugin';
import HtmlWebpack from 'html-webpack-plugin';
import MiniCssExtract from 'mini-css-extract-plugin';
import ReactRefreshWebpack from '@pmmmwh/react-refresh-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

import type { WebpackPluginInstance } from 'webpack';
import type { BuildOptions } from './types';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { manifest, paths, host, isDevelopment, isStorybook } = options;

  const plugins: WebpackPluginInstance[] = [
    new Copy({
      patterns: [
        {
          from: paths.locales.from,
          to: paths.locales.to,
        },
      ],
    }),
    new DefinePlugin({
      __HOST__: JSON.stringify(host),
      __IS_DEV__: JSON.stringify(isDevelopment),
      __IS_STORYBOOK__: JSON.stringify(isStorybook),
    }),
    new FaviconsWebpack(paths.favicon),
    new ForkTsCheckerWebpack({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new HtmlInlineScript({
      scriptMatchPattern: [/init-theme.+[.]js$/],
    }),
    new HtmlWebpack({
      template: paths.html,
      excludeChunks: ['service-worker'],
      cwd: process.cwd(),
    }),
    new MiniCssExtract({
      filename: 'css/[name].[hash].css',
    }),
    new ProgressPlugin(),
    new WebpackPwaManifest(manifest) as WebpackPluginInstance,
  ];

  const devPlugins: WebpackPluginInstance[] = [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new CircularDependency({
      allowAsyncCycles: false,
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ReactRefreshWebpack(),
  ];

  if (isDevelopment) {
    plugins.push(...devPlugins);
  }

  return plugins;
}
