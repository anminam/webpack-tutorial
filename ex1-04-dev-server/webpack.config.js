const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const apiMocker = require("connect-api-mocker");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    before: (app, server, compiler) => {
      app.use(apiMocker("/api", "mocks/api"));
    },
  },
};
