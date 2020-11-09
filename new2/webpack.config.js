const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "이것은 개발계이니라",
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        hash: true,
      },
    }),
  ],
};
