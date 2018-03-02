const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-bundle.js',
    publicPath: './',
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
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', },
          { loader: 'css-loader', }
        ],
      },
    ],
  },
  resolve: { // allow to import both js and jsx
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        reduce_vars: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
  ],
};
