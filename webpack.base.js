const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx$/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-template',
      template: resolve(__dirname, './public/index.html'),
    }),
    new EslintWebpackPlugin(),
  ],
};

module.exports = config;
