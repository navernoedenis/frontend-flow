import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export type BuildMode = "development" | "production";
export type Configuration = WebpackConfiguration & DevServerConfiguration;

export type BuildPaths = {
  entry: string;
  html: string;
  build: string;
  src: string;
};

export type BuildEnv = {
  mode: BuildMode;
  port: string;
};

export type BuildOptions = {
  isDevelopment: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
};
