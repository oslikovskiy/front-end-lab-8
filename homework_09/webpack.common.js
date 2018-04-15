const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app.bundle.js",
    path: path.join(__dirname, '/bin')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.js/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextWebpackPlugin('style.css'),
    new CleanWebpackPlugin(['bin']),
    new HtmlWebpackPlugin({
      template: './src/app.html'
    })
  ]
};