const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development', // 1
  entry: {
    carousel: './src/Carousel.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Carousel Example', //1
      chunks: ['example'], //2
    }),
  ],
  module: {
    // 3
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'), // 4
      },
    ],
  },
};
