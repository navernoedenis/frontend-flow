import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDevelopment } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes(".module.")),
            localIdentName: isDevelopment
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]"
          }
        }
      },
      // Compiles Sass to CSS
      "sass-loader"
    ]
  };

  return [tsLoader, cssLoader];
}
