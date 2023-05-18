import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';

import babelRemoveAttributes from './plugins/babel-remove-attributes';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDevelopment, isProduction } = options;

  const serviceWorkerLoader: RuleSetRule = {
    test: /service-worker\.ts$/,
    use: 'babel-loader',
    type: 'asset/resource',
    generator: {
      filename: '[name].js',
    },
  };

  const babelLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          ['@babel/plugin-transform-runtime', { isTsx: isDevelopment }],

          isProduction && [
            babelRemoveAttributes,
            {
              attributes: ['data-testid'],
            },
          ],
        ].filter(Boolean),
      },
    },
    exclude: [/service-worker\.ts$/],
  };

  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: isDevelopment
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoaders: RuleSetRule[] = [
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /inline/,
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/inline/] },
      use: ['@svgr/webpack'],
    },
  ];

  return [serviceWorkerLoader, babelLoader, cssLoader, ...svgLoaders];
}
