const path = require("path");

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
            loader: "file-loader",
            options: {
              publicPath: "../dist",
              name: `[name].[ext]?[hash]`,
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
};
