import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';

import babelRemoveAttributes from './plugins/babel-remove-attributes';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDevelopment, isProduction } = options;

  const babelLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          '@babel/plugin-transform-typescript',
          [
            '@babel/plugin-transform-runtime',
            {
              isTsx: isDevelopment,
            },
          ],
          isProduction && [
            babelRemoveAttributes,
            {
              attributes: ['data-testid'],
            },
          ],
          isDevelopment && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
    exclude: [/node_modules/, /service-worker\.ts$/],
  };

  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
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

  const serviceWorkerLoader: RuleSetRule = {
    test: /service-worker\.ts$/,
    use: 'babel-loader',
    type: 'asset/resource',
    generator: {
      filename: '[name].js',
    },
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
