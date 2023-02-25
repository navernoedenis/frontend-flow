import path from 'path';
import type { Configuration, BuildEnv, BuildPaths } from './config/build/types';

import { buildConfig } from './config/build/build-config';

const srcDir = path.resolve(__dirname, 'src');

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(srcDir, 'index.tsx'),
    src: srcDir,
    initTheme: path.resolve(srcDir, 'shared', 'lib', 'theme', 'init-theme.ts'),
  };

  const mode = env.mode || 'development';
  const port = +env.port || 3000;

  const isDevelopment = mode === 'development';

  const config = buildConfig({
    isDevelopment,
    mode,
    port,
    paths,
  });

  return config;
};
