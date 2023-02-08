import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { isDevelopment, paths } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "css/[name].css" : "css/[name].[hash].css",
      chunkFilename: isDevelopment ? "css/[name].css" : "css/[name].[hash].css"
    })
  ];
}
