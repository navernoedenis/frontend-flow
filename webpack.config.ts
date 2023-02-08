import path from "path";
import { Configuration, BuildEnv, BuildPaths } from "./config/build/types";
import { buildConfig } from "./config/build/build-config";

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    src: path.resolve(__dirname, "src")
  };

  const mode = env.mode || "development";
  const port = +env.port || 3000;

  const isDevelopment = mode === "development";

  const config = buildConfig({
    isDevelopment,
    mode,
    port,
    paths
  });

  return config;
};
