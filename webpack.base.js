/** @type {import('webpack').Configuration} */
const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
};

module.exports = config;
