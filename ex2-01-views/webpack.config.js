const { merge } = require("webpack-merge");
const common = require("./webpack/webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 5281,
    proxy: {
      "/api": "http://localhost:8081",
    },
  },
});
