import path from 'path';
import { buildConfig } from './config/webpack/build-config';

import type {
  BuildEnv,
  BuildMode,
  BuildPaths,
  Configuration,
} from './config/webpack/types';

const srcDir = path.resolve(__dirname, 'src');

export default (env: BuildEnv): Configuration => {
  const buildMode: BuildMode = env.mode || 'development';

  const host = env.host || 'http://localhost:4000';
  const port = +env.port || 3000;

  const isDevelopment = buildMode === 'development';
  const isStorybook = false;

  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(srcDir, 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    initTheme: path.resolve(srcDir, 'shared', 'lib', 'theme', 'init-theme.ts'),
    src: srcDir,
  };

  const config = buildConfig({
    buildMode,
    host,
    isDevelopment,
    isStorybook,
    paths,
    port,
  });

  return config;
};
