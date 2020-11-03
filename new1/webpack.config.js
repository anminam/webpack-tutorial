const path = require("path");
const MyPlugin = require("./myplugin");
const webpack = require("webpack");
const banner = require("./banner.js");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: `[name].js`,
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: `[name].[ext]?[hash]`,
              publicPath: "../dist",
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      안미남: `'잘생긴안미남'`,
    }),
  ],
};
