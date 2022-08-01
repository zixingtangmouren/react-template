const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const { resolve } = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'eval',
};

module.exports = merge(baseConfig, config);
