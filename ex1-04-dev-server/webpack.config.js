const path = require("path");
const HtmlWebpachPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  devServer: {
    before: (app, server, compiler) => {
      app.get("/api/keywords", (req, res) => {
        res.json([
          { keyword: "안미남" },
          { keyword: "라기면" },
          { keyword: "삼성윤" },
          { keyword: "또안미남" },
        ]);
      });
    },
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    overlay: true,
    stats: "errors-only",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpachPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
