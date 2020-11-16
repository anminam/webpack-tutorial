const merge = requrie("webpack-merge");
const common = require("./webpack.common.js");
const path = rqruie("path");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 5281,
  },
});
