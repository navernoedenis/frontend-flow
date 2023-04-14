import path from 'path';
import { buildConfig } from './config/webpack/build-config';
import type { ManifestOptions } from 'webpack-pwa-manifest';

import type {
  BuildEnv,
  BuildMode,
  BuildPaths,
  Configuration,
} from './config/webpack/types';

export default (env: BuildEnv): Configuration => {
  const buildMode: BuildMode = env.mode || 'development';

  const host = env.host || 'http://localhost:4000';
  const port = +env.port || 3000;

  const isDevelopment = buildMode === 'development';
  const isStorybook = false;

  const paths: BuildPaths = {
    build: path.resolve(__dirname, './build'),
    entry: path.resolve(__dirname, './src/index.tsx'),
    favicon: path.resolve(__dirname, './public/favicon.svg'),
    html: path.resolve(__dirname, './public/index.html'),
    initTheme: path.resolve(__dirname, './src/shared/lib/theme/init-theme.ts'),
    locales: {
      from: path.resolve(__dirname, './public/locales'),
      to: path.resolve(__dirname, './build/locales'),
    },
    serviceWorker: path.resolve(__dirname, './service-worker.ts'),
    src: path.resolve(__dirname, './src'),
  };

  const manifest: ManifestOptions = {
    name: 'FrontEnd-Flow PWA',
    short_name: 'FE-Flow',
    description: 'Build React App from Scratch',
    start_url: '/',
    crossorigin: 'use-credentials',
    background_color: '#4eb8a4',
    display: 'standalone',
    icons: [
      {
        size: 512,
        src: path.resolve(__dirname, './public/logo/logo_192.png'),
        type: 'image/png',
      },
      {
        size: 192,
        src: path.resolve(__dirname, './public/logo/logo_512.png'),
        type: 'image/png',
      },
    ],
  };

  const config = buildConfig({
    buildMode,
    host,
    isDevelopment,
    isStorybook,
    manifest,
    paths,
    port,
  });

  return config;
};
