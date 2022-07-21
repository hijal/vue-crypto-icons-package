const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const vueIconsConfig = require("./vue-icons.conf");

const webpackConfig = {
  entry: {
    "vue-crypto-icons": "./src/index.js",
  },
  devtool: "#source-map",
  output: {
    library: "VueCryptoIcons",
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: path.resolve(__dirname, "../src"),
        options: {
          formatter: require("eslint-friendly-formatter"),
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueIconsConfig,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "../src"),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": "production",
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("[name].css"),
  ],
};

module.exports = webpackConfig;
