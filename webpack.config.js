const path = require("path");

const isDebug = process.env.NODE_ENV !== "production";

/**
 * CRC32
 * landing - ef3ace15
 */

module.exports = () => ({
  entry: {
    head: path.resolve("./app/scripts/head"),
    app: path.resolve("./app/pages/index"),
    privacy: path.resolve("./app/pages/privacy"),
    terms: path.resolve("./app/pages/terms"),
    404: path.resolve("./app/pages/404"),
  },
  output: {
    publicPath: "/assets/scripts/",
    filename: "[name].min.js",
    path: path.resolve("./dist/assets/scripts/"),
  },
  watch: isDebug,
  mode: isDebug ? "development" : "production",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
});
