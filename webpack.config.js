const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", "jsx"] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3000,
    devMiddleware: {
      publicPath: "http://localhost:3000/dist/",
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
