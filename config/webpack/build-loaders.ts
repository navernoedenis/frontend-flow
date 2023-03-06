import type { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from './types';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDevelopment } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
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

  return [tsLoader, cssLoader, ...svgLoaders];
}
