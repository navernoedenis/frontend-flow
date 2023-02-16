import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';

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

  return config;
}
