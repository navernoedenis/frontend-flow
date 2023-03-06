import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export type BuildMode = 'development' | 'production';
export type Configuration = WebpackConfiguration & DevServerConfiguration;

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
  host: string;
  isDevelopment: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
}
