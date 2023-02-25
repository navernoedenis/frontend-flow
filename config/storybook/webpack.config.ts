import path from 'path';
import { DefinePlugin } from 'webpack';
import type {
  Configuration,
  RuleSetRule,
  WebpackPluginInstance,
} from 'webpack';

export function buildWebpackConfig(config: Configuration): Configuration {
  const filesRule = config.module?.rules?.find((rule) => {
    // @ts-ignore
    return rule.test.test('.svg');
  }) as RuleSetRule;

  filesRule.exclude = /\.svg$/;

  const rules: RuleSetRule[] = [
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ];

  config.module?.rules?.push(...rules);

  const modules: string[] = [
    path.resolve(__dirname, '..', '..', 'src'),
    path.resolve('node_modules'),
  ];

  config.resolve?.modules?.push(...modules);

  const plugins: WebpackPluginInstance[] = [
    new DefinePlugin({
      __IS_DEV__: true,
    }),
  ];

  config.plugins?.push(...plugins);

  return config;
}
