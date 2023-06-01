import path from 'path';
import { DefinePlugin } from 'webpack';
import type {
  Configuration,
  RuleSetRule,
  WebpackPluginInstance,
} from 'webpack';

export function buildWebpackConfig(config: Configuration): Configuration {
  const rootDir = path.resolve(__dirname, '..', '..', 'src');

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

  const modules: string[] = [rootDir, 'node_modules'];

  config.resolve?.modules?.push(...modules);

  // @ts-ignore
  config.resolve.alias = {
    ...config.resolve?.alias,
    '@': rootDir,
  };

  const plugins: WebpackPluginInstance[] = [
    new DefinePlugin({
      __HOST__: JSON.stringify('http://localhost:4000'),
      __IS_DEV__: JSON.stringify(true),
      __IS_STORYBOOK__: JSON.stringify(true),
      __LS_PREFIX__: JSON.stringify('prefix_storybook'),
    }),
  ];

  config.plugins?.push(...plugins);

  return config;
}
