import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export type Configuration = WebpackConfiguration & DevServerConfiguration;
export type BuildMode = 'development' | 'production';

export interface BuildEnv {
  host?: string;
  mode?: BuildMode;
  port: string;
}

export interface BuildPaths {
  entry: string;
  html: string;
  build: string;
  src: string;
  initTheme: string;
}

export interface BuildOptions {
  buildMode: BuildMode;
  host: string;
  isDevelopment: boolean;
  isStorybook: boolean;
  paths: BuildPaths;
  port: number;
}
