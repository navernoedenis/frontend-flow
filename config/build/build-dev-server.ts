import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    historyApiFallback: true,
    open: true,
    port: options.port
  };
}
