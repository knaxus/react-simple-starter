const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:5050',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true, // redirect 404s to index page
    inline: true,
    hot: true, // enable hot reload
    overlay: true, // display errors in browaer window
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
          plugins: ['react-hot-loader/babel'],
        }
      }
    ],
  },
  resolve: { // allow to import both js and jsx
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
