import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options;

  return {
    alias: {},
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, "node_modules"],
    preferAbsolute: true
  };
}
