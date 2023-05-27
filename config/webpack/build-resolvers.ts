import type { ResolveOptions } from 'webpack';
import type { BuildOptions } from './types';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options;

  return {
    alias: {
      '@': paths.src,
    },
    extensions: ['.js', '.ts', '.tsx'],
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
  };
}
