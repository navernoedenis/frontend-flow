import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { ManifestOptions } from 'webpack-pwa-manifest';

export type Configuration = WebpackConfiguration & DevServerConfiguration;
export type BuildMode = 'development' | 'production';

export interface BuildEnv {
  host?: string;
  mode?: BuildMode;
  port: string;
}

export interface BuildPaths {
  build: string;
  entry: string;
  favicon: string;
  html: string;
  initTheme: string;
  locales: { from: string; to: string };
  serviceWorker: string;
  src: string;
}

export interface BuildOptions {
  buildMode: BuildMode;
  host: string;
  isDevelopment: boolean;
  isStorybook: boolean;
  manifest: ManifestOptions;
  paths: BuildPaths;
  port: number;
}
