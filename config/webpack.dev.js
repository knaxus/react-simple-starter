const path = require('path');

module.exports = {
  entry: {
    main: [path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    inline: true,
    overlay: true,
    port: 5050,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
        }
      }
    ],
  }
}