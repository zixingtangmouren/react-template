const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      // 设置模块的模式
      mode(resourcePath) {
        // 如果全局目录下的 style 不进行类名模块化
        if (resourcePath.includes('/src/styles/')) {
          return 'global';
        }

        return 'local';
      },
      // local 模式的类名命名方式
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    },
  },
};

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
      {
        test: /\.css$/,
        use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoader],
      },
      {
        test: /\.s[ca]ss$/,
        use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoader, 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoader, 'postcss-loader', 'less-loader'],
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
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
