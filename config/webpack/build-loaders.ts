import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDevelopment } = options;

  const workerLoader: RuleSetRule = {
    test: /worker\.ts$/,
    use: 'ts-loader',
    type: 'asset/resource',
    generator: {
      filename: '[name].js',
    },
  };

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: [/node_modules/, /worker\.ts/],
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

  return [workerLoader, tsLoader, cssLoader, ...svgLoaders];
}
