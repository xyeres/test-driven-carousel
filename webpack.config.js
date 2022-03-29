module.exports = {
  mode: 'development', // 1
  entry: {
    carousel: './src/Carousel.js', // 2
  },
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
